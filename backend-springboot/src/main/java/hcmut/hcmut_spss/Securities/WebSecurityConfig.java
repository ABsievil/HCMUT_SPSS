package hcmut.hcmut_spss.Securities;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig {
    @Autowired
    private JwtAuthenticationFilter jwtAuthenticationFilter;

    @Autowired
    private WhiteList whiteList;

    @Autowired
    private OAuth2LoginSuccessHandler oAuth2LoginSuccessHandler;

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
      DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
       
      authProvider.setUserDetailsService(userService);
      authProvider.setPasswordEncoder(passwordEncoder());
   
      return authProvider;
    }

    @Bean
    //@Bean(BeanIds.AUTHENTICATION_MANAGER)
    public AuthenticationManager authenticationManager(AuthenticationConfiguration auth) throws Exception {
        return auth.getAuthenticationManager();
    }


    //demo in db
    @Autowired
    CustomUserDetailsService userService;

    @Bean
    public PasswordEncoder passwordEncoder() {
        // encrypt password of user
        return new BCryptPasswordEncoder();
    }

    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        // use method passwordEncoder
        auth.userDetailsService(userService).passwordEncoder(passwordEncoder());
    }
     // cho permit all hết để jwt filter lọc thoi
    // private static final String[] WHITE_LIST_URL = {
    //     "/",
    //     "/index",
    //     "/about",
    //     "/login",
    //     "/403",
    //     "/api/authenticate",
    //     "api/test"
    // };


     //note : role in db current is: PATIENT and DOCTOR
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests((authorize) -> authorize
                .requestMatchers("/").permitAll() 
                .requestMatchers(whiteList.getWHITE_LIST_URL()).permitAll() 
                .anyRequest().authenticated() 
            );

        http
            .csrf(csrf -> csrf.disable())   // what is csrf, should disable it ?
            
            // The STATELESS will ensure no session is created by Spring security, 
            // however that does not mean that your application will not create any session. 
            // This policy only applies to Spring security context. 
            // You might still see JSESIONID in your application, 
            // so don’t think that spring security configurations are not working.
            // detail at: https://www.javadevjournal.com/spring-security/spring-security-session/
            .sessionManagement((session) -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)); 

            http.oauth2Login(oauth2 -> oauth2
                .loginPage("/login")
                .defaultSuccessUrl("/api/v1/User/oauth2") // not working
                .loginPage("/login").permitAll()
                .successHandler(oAuth2LoginSuccessHandler)
            );
            http.authenticationProvider(authenticationProvider());
            http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);    

        
        return http.build();
    }

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        //HTTP requirements to the resources in these links do not have to undergo security filters provided by Spring Security
        return (web) -> web.ignoring().requestMatchers("/resources/**", "/static/**", "/css/**", "/fonts/**", "/images/**", "/js/**", "/mail/**", "/lists/**", "/products/**");
    }
}