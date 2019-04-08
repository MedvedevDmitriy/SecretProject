package DatabaseConnection;

import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.ArrayList;
import java.sql.*;
import java.util.List;

@Component
public class PersonDAO_MySQL implements IPersonDAO {
    private Connection connection;

    public PersonDAO_MySQL() {
        connect();
    }

    void connect() {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            try {
                connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/main", "root", "root");
                System.out.println("Connection SUCCESS");
            } catch (SQLException e) {
                e.printStackTrace();
            }
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    public void close()
    {
        try
        {
            connection.close();
        }
        catch (SQLException e)
        {
            e.printStackTrace();
        }
    }

    @Override
    public void create(PersonDTO p)
    {
        try
        {
            connect();
            String command = "INSERT INTO MAIN.PERSON (id, fname, lname, age) VALUES (?, ?, ?, ?)";
            PreparedStatement st = connection.prepareStatement(command);
            st.setInt(1, p.id);
            st.setString(2, p.fname);
            st.setString(3, p.lname);
            st.setInt(4, p.age);
            st.execute();
            close();
        }
        catch (SQLException e)
        {
            e.printStackTrace();
        }
    }

    @Override
    public List<PersonDTO> read()
    {
        List<PersonDTO> pp = new ArrayList<>();
        try
        {
            connect();
            Statement st = connection.createStatement();
            ResultSet rs = st.executeQuery("SELECT * from MAIN.PERSON");
            while(rs.next())
            {
                pp.add(new PersonDTO(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getInt(4)));
            }
            close();
        }
        catch (SQLException e)
        {
            e.printStackTrace();
        }
        return pp;
    }

    @Override
    public void update(PersonDTO p)
    {
        try
        {
            connect();
            String command = "UPDATE MAIN.PERSON SET fname=?, lname=?, age=? WHERE id=?";
            PreparedStatement st = connection.prepareStatement(command);
            st.setString(1, p.fname);
            st.setString(2, p.lname);
            st.setInt(3, p.age);
            st.setInt(4, p.id);
            st.execute();
            close();
        }
        catch (SQLException e)
        {
            e.printStackTrace();
        }
    }

    @Override
    public void delete(PersonDTO p)
    {
        try
        {
            connect();
            String command = "DELETE FROM MAIN.PERSON WHERE id=?";
            PreparedStatement st = connection.prepareStatement(command);
            st.setInt(1, p.id);
            st.execute();
            close();
        }
        catch (SQLException e)
        {
            e.printStackTrace();
        }
    }
}
