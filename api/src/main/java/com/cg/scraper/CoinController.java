package com.cg.scraper;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class CoinController {
	@Autowired
	CoinRepository coinRepository;
	
	   @CrossOrigin(origins = "http://localhost:3000")
	   @GetMapping("/all")
	   public List<CoinInfo> getAllCoins() {
		   
	        List<CoinInfo> items = new ArrayList<>();
	        coinRepository.findAll().forEach(items :: add);
	        return items;
	    }
	   

}