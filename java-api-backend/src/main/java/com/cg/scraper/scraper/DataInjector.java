package com.cg.scraper.scraper;

import java.sql.*;
import java.util.Arrays;
import java.util.Date;


public class DataInjector {

 public static void injectCryptoData(String[] data, String query) {

  try {
   Class.forName("com.mysql.cj.jdbc.Driver");

   Connection conn = null;
   conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/CryptoScraper", "root", "Christian12!");

   for (String item: data) {
    String[] valueArray = item.split(" ");
    System.out.println(Arrays.toString(valueArray));

    PreparedStatement preparedStmt = conn.prepareStatement(query);

    //coin name
    preparedStmt.setString(1, valueArray[0]);

    //coin price
    preparedStmt.setString(2, valueArray[1]);

    //coin percent change
    preparedStmt.setString(3, valueArray[3]);

    //coin price change
    preparedStmt.setString(4, valueArray[2]);

    //time
    preparedStmt.setString(5, valueArray[5]);

    //market cap
    preparedStmt.setString(6, valueArray[9]);

    //volume
    preparedStmt.setString(7, valueArray[7]);

    //scrape time
    long millis = System.currentTimeMillis();
    java.sql.Date date = new java.sql.Date(millis);

    preparedStmt.setDate(8, date);
    
    preparedStmt.execute();
    
  

   }
   //print to console
   java.util.Date time = new java.util.Date();
   System.out.println("Scrape Sucessful Time: " + time + " coin data injected to db\n");

   conn.close();
  } catch (Exception e) {
   System.err.println("exception!");
   System.err.println(e.getMessage());
  }
  
  

 }
 
 public static Boolean injectUserData(String user, String password, String newUserQuery) {

	  try {
	   Class.forName("com.mysql.cj.jdbc.Driver");

	   Connection conn = null;
	   conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/CryptoScraper", "root", "Christian12!");

	    PreparedStatement preparedStmt = conn.prepareStatement(newUserQuery);

	    //user
	    preparedStmt.setString(1, user);

	    //password
	    preparedStmt.setString(2, password);

	    //creation time
	    long millis = System.currentTimeMillis();
	    java.sql.Date date = new java.sql.Date(millis);

	    preparedStmt.setDate(3, date);
	    
	    preparedStmt.execute();
	    
	    //print to console
		java.util.Date time = new java.util.Date();
		System.out.println("User creation Sucessful Time: " + time + " injected to db\n");

	   conn.close();
	   
	   return true;
	  } catch (Exception e) {
	   System.err.println("exception!");
	   System.err.println(e.getMessage());

	  }
	   return false;
	 }

}