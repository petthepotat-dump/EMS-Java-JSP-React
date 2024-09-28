package com.petthepotat.ems.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers("/api/employees").permitAll() // Allow unauthenticated access to this endpoint
                .anyRequest().authenticated() // Require authentication for all other requests
                .and()
                .httpBasic() // Enable basic authentication
                .and()

//        http
//                .authorizeRequests()
//                .anyRequest().permitAll() // Allow all requests without authentication
//                .and()
                .csrf().disable(); // Optionally disable CSRF protection for simplicity in testing
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
                .withUser("user") // Define a user
                .password(passwordEncoder().encode("password")) // Set the password (encoded)
                .roles("USER") // Assign roles
                .and()
                .withUser("admin") // Define an admin user
                .password(passwordEncoder().encode("adminpass")) // Set the admin password (encoded)
                .roles("ADMIN"); // Assign roles
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(); // Use BCrypt for password encoding
    }
}