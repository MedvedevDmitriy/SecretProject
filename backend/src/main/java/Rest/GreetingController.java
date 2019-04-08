package Rest;

import DatabaseConnection.PersonDAO_MySQL;
import DatabaseConnection.PersonDTO;
import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@RestController
public class GreetingController {
    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();
    private PersonDAO_MySQL db;

    @Autowired
    public GreetingController() {
        this.db = new PersonDAO_MySQL();
    }

    @RequestMapping("/greeting")
    public String greeting(@RequestParam(value="name", defaultValue="World") String name) {
//        return new Greeting(counter.incrementAndGet(),
//                String.format(template, name));
        return db.read().toString();
    }

    @PostMapping("/registration")
    public Registration registration(@RequestBody Registration registration){
        System.out.println(registration.getUserName());
        System.out.println(registration.getEmail());
        System.out.println(registration.getPassword());

        return new Registration(registration.getUserName(), registration.getEmail(), registration.getPassword());
    }

    @PostMapping("/auth")
    public Registration authorize(@RequestBody Registration registration){
        System.out.println(registration.getUserName());
        System.out.println(registration.getPassword());

        return new Registration(registration.getUserName(), registration.getEmail(), registration.getPassword());
    }
}
