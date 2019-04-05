package DatabaseConnection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionDB {
//    public static void main(String[] args) {
//        ConnectionDB con = new ConnectionDB();
//        con.createConnection();
//    }

    void createConnection() {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            try {
                Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/main", "root", "root");
                System.out.println("Connection SUCCESS");
            } catch (SQLException e) {
                e.printStackTrace();
            }
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
