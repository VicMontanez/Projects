package com.example.rest.webservices.restfulwebservices.mysql;
import java.sql.Connection;
import java.sql.DriverManager;

public class JDBCMySQLConnection {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String url = "jdbc:mysql://localhost:3306/namdb";
		String username = "root";
		String password = "";
	
		try {
			System.out.println("Connecting to database: "+url);
			
			Connection myConn= DriverManager.getConnection(url, username, password);
		
			
			System.out.println("Connection successful!!!");
			myConn.close();
		}
		catch(Exception exc) {
			exc.printStackTrace();
		}
}
	}

