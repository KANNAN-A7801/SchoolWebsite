package com.school.lms.service;

import com.school.lms.dto.AuthRequest;
import com.school.lms.dto.AuthResponse;
import com.school.lms.dto.SignupRequest;
import com.school.lms.entity.Grade;
import com.school.lms.entity.Role;
import com.school.lms.entity.User;
import com.school.lms.repository.GradeRepository;
import com.school.lms.repository.UserRepository;
import com.school.lms.security.JwtUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final GradeRepository gradeRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtils jwtUtils;

    @Transactional
    public AuthResponse signup(SignupRequest signupRequest) {
        if (userRepository.existsByEmail(signupRequest.getEmail())) {
            throw new RuntimeException("Error: Email is already registered!");
        }

        Role userRole = signupRequest.getRole() != null ? signupRequest.getRole() : Role.ROLE_STUDENT;

        Grade userGrade = null;
        if (userRole == Role.ROLE_STUDENT && signupRequest.getGradeNumber() != null) {
            userGrade = gradeRepository.findByGradeNumber(signupRequest.getGradeNumber())
                    .orElseThrow(() -> new RuntimeException("Grade not found: " + signupRequest.getGradeNumber()));
        }

        User user = User.builder()
                .email(signupRequest.getEmail())
                .password(passwordEncoder.encode(signupRequest.getPassword()))
                .fullName(signupRequest.getFullName())
                .role(userRole)
                .grade(userGrade)
                .build();

        userRepository.save(user);

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(signupRequest.getEmail(), signupRequest.getPassword())
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        return AuthResponse.builder()
                .token(jwt)
                .id(user.getId())
                .email(user.getEmail())
                .fullName(user.getFullName())
                .role(user.getRole())
                .gradeNumber(user.getGrade() != null ? user.getGrade().getGradeNumber() : null)
                .build();
    }

    public AuthResponse login(AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword())
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        User user = userRepository.findByEmail(authRequest.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found: " + authRequest.getEmail()));

        return AuthResponse.builder()
                .token(jwt)
                .id(user.getId())
                .email(user.getEmail())
                .fullName(user.getFullName())
                .role(user.getRole())
                .gradeNumber(user.getGrade() != null ? user.getGrade().getGradeNumber() : null)
                .build();
    }
}
