package com.school.lms.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Service
@Slf4j
public class SupabaseStorageService {

    @Value("${supabase.url}")
    private String supabaseUrl;

    @Value("${supabase.service-key}")
    private String supabaseServiceKey;

    @Value("${supabase.bucket}")
    private String bucketName;

    private final RestTemplate restTemplate = new RestTemplate();

    public String uploadFile(MultipartFile file) {
        String originalFilename = file.getOriginalFilename();
        String uniqueFileName = UUID.randomUUID() + "_" + (originalFilename != null ? originalFilename : "task_file");

        // If Supabase credentials are customized
        if (supabaseUrl != null && !supabaseUrl.contains("your-supabase-project")) {
            try {
                String uploadUrl = String.format("%s/storage/v1/object/%s/%s", supabaseUrl, bucketName, uniqueFileName);

                HttpHeaders headers = new HttpHeaders();
                headers.set("Authorization", "Bearer " + supabaseServiceKey);
                headers.set("apikey", supabaseServiceKey);
                headers.setContentType(MediaType.parseMediaType(file.getContentType() != null ? file.getContentType() : "application/octet-stream"));

                HttpEntity<byte[]> requestEntity = new HttpEntity<>(file.getBytes(), headers);
                ResponseEntity<String> response = restTemplate.exchange(uploadUrl, HttpMethod.POST, requestEntity, String.class);

                if (response.getStatusCode().is2xxSuccessful()) {
                    return String.format("%s/storage/v1/object/public/%s/%s", supabaseUrl, bucketName, uniqueFileName);
                }
            } catch (Exception e) {
                log.error("Failed to upload to Supabase Storage, falling back to local storage", e);
            }
        }

        // Fallback: Store locally in uploads directory if Supabase API is not yet configured with valid credentials
        try {
            Path uploadsDir = Paths.get("uploads");
            if (!Files.exists(uploadsDir)) {
                Files.createDirectories(uploadsDir);
            }
            Path targetPath = uploadsDir.resolve(uniqueFileName);
            Files.copy(file.getInputStream(), targetPath, StandardCopyOption.REPLACE_EXISTING);
            return "/uploads/" + uniqueFileName;
        } catch (IOException e) {
            throw new RuntimeException("Could not store file locally", e);
        }
    }
}
