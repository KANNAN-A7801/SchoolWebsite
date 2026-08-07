package com.school.lms.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.file.Paths;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        String assetPath = Paths.get("../asset").toAbsolutePath().toUri().toString();
        registry.addResourceHandler("/asset/**")
                .addResourceLocations(assetPath);
    }
}
