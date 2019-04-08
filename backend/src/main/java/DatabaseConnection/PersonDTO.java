package DatabaseConnection;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@SuppressWarnings("serial")
@Data
@Entity
@Table(name="person")
@Component
public class PersonDTO implements Serializable {
    @Id
    @Column(name = "id")
    public int id;

    @Column(name = "FirstName")
    public String fname;

    @Column(name = "LastName")
    public String lname;

    @Column(name = "Age")
    public int age;

    public PersonDTO() {
    }

    public PersonDTO(int id, String fname, String lname, int age) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
}