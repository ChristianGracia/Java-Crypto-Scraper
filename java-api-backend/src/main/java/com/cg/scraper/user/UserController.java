package com.cg.scraper.user;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONArray;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cg.scraper.scraper.DataInjector;

@RestController
public class UserController {
	
	   @CrossOrigin()
		
	    @GetMapping("/create")
		@RequestMapping(value = "/create",method=RequestMethod.POST, consumes = {MediaType.ALL_VALUE}, produces = { MediaType.APPLICATION_JSON_VALUE })
		@ResponseBody
		public Object deviceIngestion (@RequestBody String data) {
		   System.out.println(data);
		   
		   String[] dataSplit = data.split(",");
		   
		   String user = dataSplit[0];
		   String password = dataSplit[1].trim();
		   
		   UserInfo newUser = new UserInfo(user, password);
		   
		   String newUserQuery = " insert into users (username, pass, create_date)" + "values (?, ?, ?)";
		   
		   DataInjector.injectUserData(newUser.getUser(), newUser.getPassword(), newUserQuery);
		   
		   return newUser;
		   
		}
	   @CrossOrigin()
	   @GetMapping("/login")
	   @RequestMapping(value = "/login",method=RequestMethod.POST, consumes = {MediaType.ALL_VALUE}, produces = { MediaType.APPLICATION_JSON_VALUE })
	   @ResponseBody
	   public Boolean login(@RequestBody String data) {
		   System.out.println(data);
		   
           String[] dataSplit = data.split(",");
		   
		   String user = dataSplit[0];
		   String password = dataSplit[1].trim();
		   
		   UserInfo newUser = new UserInfo(user, password);
		   
		   try {
		        if (newUser.getPassword() != null && newUser.getUser() != null) {
		        	
		        	Class.forName("com.mysql.cj.jdbc.Driver");
		    		
		    		Connection conn=null;
		    		ArrayList<UserInfo> a= new ArrayList<UserInfo>();
		    		JSONArray js=new JSONArray();
		    		
		    	
		    		conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/cryptoscraper", "root", "Christian12!");
		    	    
		    		//object of statement to execute queries
		    		Statement st=conn.createStatement();
		    	
		        	
		    		String userQuery = "Select * from users Where username='" + newUser.getUser() + "' and pass='" + newUser.getPassword() + "'";
		            ResultSet rs = st.executeQuery(userQuery);
		            if (rs.next()) {
		                return true;
		            } else {
		                return false;
		            }
		        }


		    } catch (Exception e) {
		       return false;
		    }
		   
		   
	
	        return true;
	    }
	  
}


