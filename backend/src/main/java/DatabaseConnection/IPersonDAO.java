package DatabaseConnection;

import java.util.List;

public interface IPersonDAO {
    void create(PersonDTO p);
    List<PersonDTO> read();
    void update(PersonDTO p);
    void delete(PersonDTO p);
}
