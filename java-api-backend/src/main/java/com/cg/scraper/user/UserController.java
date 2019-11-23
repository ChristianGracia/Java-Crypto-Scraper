package com.cg.scraper.user;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import org.passay.PasswordGenerator;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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
		public Boolean deviceIngestion (@RequestBody String data) {
		   String[] dataSplit = data.split(",");

		   String user = dataSplit[0];
		   String password = dataSplit[1].trim();
		   
		   UserInfo newUser = new UserInfo(user, BCrypt.hashpw(password, BCrypt.gensalt()));
	
		   
		   String newUserQuery = " insert into users (username, pass, create_date)" + "values (?, ?, ?)";
		   return DataInjector.injectUserData(newUser.getUser(), newUser.getPassword(), newUserQuery);

		}

	@CrossOrigin()
	   @GetMapping("/login")
	   @RequestMapping(value = "/login",method=RequestMethod.POST, consumes = {MediaType.ALL_VALUE}, produces = { MediaType.APPLICATION_JSON_VALUE })
	   @ResponseBody
	   public Boolean login(@RequestBody String data) {
           String[] dataSplit = data.split(",");
		   
		   String username = dataSplit[0];
		   String password = dataSplit[1].trim();
		   
		   
		   UserInfo user = new UserInfo(username, password);
		   Boolean check = null;
		   
		   try {
		        if (user.getPassword() != null && user.getUser() != null) {
		        	
		        	
		        	Class.forName("com.mysql.cj.jdbc.Driver");
		    		
		    		Connection conn=null;

		    		conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/cryptoscraper", "root", "Christian12!");
		    	    
		    		//object of statement to execute queries
		    		Statement st=conn.createStatement();
		    	
		        	
		    		String userQuery = "Select * from users Where username='" + user.getUser() + "'";
		            ResultSet rs = st.executeQuery(userQuery);
		            if (rs.next() && BCrypt.checkpw(password, rs.getString(2))) {
		               return true;	           
		            }
                    else {
		               return false;
		            }
		        }


		    } catch (Exception e) {
		   
		    }
		   
	        return check;
	    }
 
}

