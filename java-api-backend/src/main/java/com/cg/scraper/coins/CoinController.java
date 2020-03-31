package com.cg.scraper.coins;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.scraper.scraper.Scraper;

@RestController
public class CoinController {
	@Autowired
	CoinRepository coinRepository;

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/all")
	public List<CoinInfo> getAllCoins() {

		List<CoinInfo> items = new ArrayList<>();
		coinRepository.findAll().forEach(items::add);
		return items;
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/scrape")
	public void scrape() {
		Scraper.scrapeData();

	}

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/single")
	public List<CoinInfo> getSingleCoin() {

		List<CoinInfo> items = new ArrayList<>();
		coinRepository.findAll().forEach(items::add);
		return items;
	}

}