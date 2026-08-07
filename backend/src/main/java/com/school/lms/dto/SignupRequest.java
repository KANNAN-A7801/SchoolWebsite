package com.school.lms.dto;

import com.school.lms.entity.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SignupRequest {
    private String email;
    private String password;
    private String fullName;
    private Role role; // Defaults to ROLE_STUDENT
    private Integer gradeNumber; // e.g. 3 for 3rd Class student
}
