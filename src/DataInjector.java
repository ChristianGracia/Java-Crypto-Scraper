import java.sql.*;
import java.util.Arrays;


public class DataInjector {

 public static void injectData(String[] data) {

  try {
   Class.forName("com.mysql.cj.jdbc.Driver");

   Connection conn = null;
   conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/CryptoScraper", "root", "Christian12!");

   String query = " insert into CoinInfo (CoinName, Price, PercentChange, PriceChange, MarketTime, MarketCap, Volume, ScrapeDate)" +
    " values (?, ?, ?, ?, ?, ?, ?, ?)";
   
   
   //print to console
   java.util.Date time = new java.util.Date();
   System.out.println("Scrape Sucessful Time: " + time + " coin data injected to db\n");

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


   conn.close();
  } catch (Exception e) {
   System.err.println("exception!");
   System.err.println(e.getMessage());
  }

 }

}