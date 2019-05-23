package fi.tamk.tiko.lone.wanderer.blog.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.csrf().disable()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.ALWAYS)
                .and().authorizeRequests()
                .antMatchers("/").permitAll()
                .antMatchers("/posts/*").permitAll()
                .antMatchers("/posts").permitAll()
                .antMatchers("/home").permitAll()
                .antMatchers("/blog/*").permitAll()
                .antMatchers("/comment/add/*").permitAll()
                .antMatchers("/posts/like/*").permitAll()
                .antMatchers("/posts/unlike/*").permitAll()
                .anyRequest().authenticated()
                .and()
                .logout().logoutSuccessUrl("/")
                .deleteCookies("JSESSIONID")
                .and().httpBasic();
    }

    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/favicon*", "/js/**", "/img/**", "/static/**","/static/assets/**","/styles*","/**.json", "/runtime*","/main*","/poly*");
    }
}

