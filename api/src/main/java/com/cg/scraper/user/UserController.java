package com.cg.scraper.user;

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
	  
}


