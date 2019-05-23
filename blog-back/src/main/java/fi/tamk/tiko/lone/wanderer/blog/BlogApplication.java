package fi.tamk.tiko.lone.wanderer.blog;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication//(exclude = {SecurityAutoConfiguration.class})
public class BlogApplication {
    public static String BASEURL = "http://localhost:8080";
    public static String RESOURCE = "/posts";

    private static Logger log = LoggerFactory.getLogger(BlogApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(BlogApplication.class, args);
        log.info("INSTRUCTIONS");
        log.info("------------");
        log.info("GET all blog posts: curl -X GET {}{}", BASEURL, RESOURCE);
        log.info("------------");
        log.info("GET one blog post: curl -X GET {}{}", BASEURL, RESOURCE + "/{id}");
        log.info("------------");
        log.info("Add post: curl -X POST -H \"Content-Type: application/json\" -d \"{\\\"title\\\": \\\"title\\\",\\\"post\\\": \\\"post\\\", \\\"author\\\":\\\"author\\\"}\" {}{}", BASEURL, RESOURCE + "/add");
        log.info("------------");
        log.info("Modify post: curl -X POST  -H \"Content-Type: application/json\" -d \"{\\\"title\\\": \\\"title2\\\",\\\"post\\\": \\\"post2\\\", \\\"author\\\":\\\"author2\\\"}\" {}{}", BASEURL, RESOURCE + "/modify/{id}");
        log.info("------------");
        log.info("Delete post: curl -X DELETE {}{}", BASEURL, RESOURCE + "/delete/{id}");
        log.info("------------");
        log.info("Add comment to post: curl -X POST  -H \"Content-Type: application/json\" -d \"{\\\"commentField\\\": \\\"comment\\\", \\\"nickname\\\":\\\"nick\\\"}\" {}{}", BASEURL, "/comment/add/{postID}");
        log.info("------------");
        log.info("Delete comment from post: curl -X DELETE -H {}{}", BASEURL, "/comment/delete/{postID}?commentID={commentID}");
        log.info("------------");
        log.info("Add like to the post: curl -X GET {}{}", BASEURL, "/posts/like/{postID}");
        log.info("------------");
        log.info("Add like to the post: curl -X GET {}{}", BASEURL, "/posts/unlike/{postID}");
    }
}
