package adminPanel;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.security.servlet.UserDetailsServiceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@SpringBootApplication(exclude = {UserDetailsServiceAutoConfiguration.class})
@EnableJpaRepositories(basePackages = "Repository")
@EntityScan(basePackages = "Entities")
@ComponentScan(basePackages = {"adminPanel", "Controller", "Service"})
public class adminPanelApp {

	public static void main(String[] args) {
		SpringApplication.run(adminPanelApp.class, args);
	}

}
