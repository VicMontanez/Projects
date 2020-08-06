package com.example.rest.webservices.restfulwebservices.mysql;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

public class JDBCMySQLConnection {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String url = "jdbc:mysql://localhost:3306/musiclist";
		String username = "db_admin";
		String password = "";
	
		try {
			System.out.println("Connecting to database: "+url);
			
			Connection myConn= DriverManager.getConnection(url, username, password);
		
			
			System.out.println("Connection successful!!!");
			
			// Create a statement
						Statement myStmt = myConn.createStatement();
			
						// inserting data to MySQL
//						String sql = "insert into stats "
//								+ " (firstName, lastName, position, team, pointsPerGame)"
//								+ " values ('Walker', 'Kemba', 'PG', 'BOS', '13.5')";
						
//						myStmt.executeUpdate(sql);
						
						// Execute SQL Query
						ResultSet result = myStmt.executeQuery("select * from music");
						
						// Process the result set
						while (result.next()) {
							System.out.println(result.getString("artistName") + " " + result.getString("songName") + " " + result.getString("genre") + " " + result.getString("albumName"));
						}
						myConn.close();
					}
					catch(Exception exc) {
						exc.printStackTrace();
					}

				}

			}
