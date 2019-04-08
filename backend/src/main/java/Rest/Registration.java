package Rest;

import lombok.Data;

import com.fasterxml.jackson.annotation.JsonProperty;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Registration {

    private @Id @GeneratedValue Long id;
    @JsonProperty
    private String userName;
    @JsonProperty
    private String email;
    @JsonProperty
    private String password;

    public Registration(@JsonProperty("userName") String userName, @JsonProperty("email") String email, @JsonProperty("password") String password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    public String getPassword() {
        return password;
    }

    public String getUserName() {
        return userName;
    }

    public String getEmail() {
        return email;
    }
}
