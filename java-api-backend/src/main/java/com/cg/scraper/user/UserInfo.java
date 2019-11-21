package com.cg.scraper.user;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class UserInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String user;
    private String password;
    
    public UserInfo() {
    	super();
    }
    
    public UserInfo(String user, String password) {
    	this.setUser(user);
    	this.setPassword(password);
    

    }
    
    public String getUser() {
    	return user;
    }
    public void setUser(String user) {
        this.user = user;
    }

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	 @Override
	  public String toString() {
		 return getClass().getSimpleName() + "[user= " + user + "]";
	  }
}