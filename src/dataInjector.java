import java.sql.*;

public class dataInjector {
	
	public static void injectData() {

		    try
		    {

		      Class.forName("com.mysql.cj.jdbc.Driver");
		
		  	  Connection conn=null;
		      conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/CryptoScraper", "root", "Christian12!");
	
		      String query = " insert into CoinInfo (CoinName, Price, PercentChange, PriceChange, MarketTime, MarketCap, Volume)"
		        + " values (?, ?, ?, ?, ?, ?, ?)";
		      
		      PreparedStatement preparedStmt = conn.prepareStatement(query);
		      preparedStmt.setString (1, "taylor");
		      preparedStmt.setString (2, "23000");
		      preparedStmt.setString (3, "7.65%");
		      preparedStmt.setString (4, "-3000");
		      preparedStmt.setString (5, "12:34PM");
		      preparedStmt.setString (6, "300M");
		      preparedStmt.setString (7, "40m");

		 
		      preparedStmt.execute();
		      
		      conn.close();
		    }
		    catch (Exception e)
		    {
		      System.err.println("exception!");
		      System.err.println(e.getMessage());
		    }
		  
		}
	

}
