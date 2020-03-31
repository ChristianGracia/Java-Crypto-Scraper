import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import org.apache.commons.lang3.StringEscapeUtils;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

public class oneJsonObject {
	public static void main(String[] args) throws ClassNotFoundException, SQLException, JsonGenerationException, JsonMappingException, IOException {
		
		Class.forName("com.mysql.cj.jdbc.Driver");
		
		Connection conn=null;
		ArrayList<CoinDetails> a= new ArrayList<CoinDetails>();
		JSONArray js=new JSONArray();
		
	
		conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/Crypto", "root", "Christian12!");
	    
		//object of statement to execute queries
		Statement st=conn.createStatement();
		ResultSet rs=st.executeQuery("select * from CoinInfo where Location ='asia'");
    	
		
		//setting pointer to a row
	    while(rs.next()) 
	    {
	    	CoinDetails c= new CoinDetails();
	    	
	    	c.setCoinName(rs.getString(1));
	    	c.setPurchaseDate(rs.getString(2));
	    	c.setAmount(rs.getInt(3));
	    	c.setLocation(rs.getString(4));
	    	
	    	a.add(c);
	 
	    }
	    
	    for (int i = 0; i < a.size(); i++) {
//		    ObjectMapper o=new ObjectMapper();
//		    o.writeValue(new File("C:\\Users\\chris\\eclipse-workspace\\JSON\\coinInfo" + i + ".json"), a.get(i));
		    
		    //create json string from java object
		    Gson g=new Gson();
		    String jsonString= g.toJson(a.get(i));
		    js.add(jsonString);
		    
	    }
	    

	    //add json simple
	    JSONObject jo=new JSONObject();
	    jo.put("data", js);
	    
	    
		String unescapeString = StringEscapeUtils.unescapeJava(jo.toJSONString());
	    String temp = unescapeString.replace("\"{", "{");
	    String finalString = temp.replace("}\"", "}");
	    System.out.println(finalString);
	    
		try (FileWriter file = new FileWriter("C:\\Users\\chris\\eclipse-workspace\\JSON\\coinSingleJson.json")) {
			file.write(finalString);
			System.out.println("Successfully Copied JSON Object to File...");
			System.out.println("\nJSON Object: " + finalString);
		}
		
		
	    conn.close();
	}

}
