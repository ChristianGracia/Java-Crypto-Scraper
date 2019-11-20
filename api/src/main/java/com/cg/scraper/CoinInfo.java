package com.cg.scraper;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CoinInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String coinName;
    private String price;
    private String priceChange;
    private String priceChangePercent;
    private String marketTime;
    private String marketCap;
    private String volume;
    private String scrapeDate;
    private int pullId;
    
    public CoinInfo() {
    	super();
    }
    
    public CoinInfo(String coinName) {
    	this.coinName = coinName;
    }
    
    public CoinInfo(String coinName, String price) {
    	this.coinName = coinName;
    	this.price = price;
    }
    
    public CoinInfo(String coinName, String price, String priceChange, String priceChangePercent, String marketTime, String marketCap, String volume, String scrapeDate, int pullId) {
    
    	this.setName(coinName);
    	this.setPullId(pullId);
    	this.setPrice(price);
    	this.setPriceChange(priceChange);
    	this.setPriceChangePercent(priceChangePercent);
    	this.setMarketTime(marketTime);
    	this.setScrapeDate(scrapeDate);
    	this.setMarketCap(marketCap);
    	this.setVolume(volume);
    }
    
    public int getPullId() {
    	return pullId;
    }
    
    public void setPullId(int pullId) {
        this.pullId = pullId;
    }
    
    public String getName() {
    	return coinName;
    }
    public void setName(String coinName) {
        this.coinName = coinName;
    }
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getPriceChange() {
		return priceChange;
	}
	public void setPriceChange(String priceChange) {
		this.priceChange = priceChange;
	}
	public String getMarketTime() {
		return marketTime;
	}
	public void setMarketTime(String marketTime) {
		this.marketTime = marketTime;
	}
	public String getScrapeDate() {
		return scrapeDate;
	}
	public void setScrapeDate(String scrapeDate) {
		this.scrapeDate = scrapeDate;
	}
	public String getMarketCap() {
		return marketCap;
	}
	public void setMarketCap(String marketCap) {
		this.marketCap = marketCap;
	}
	public String getPriceChangePercent() {
		return priceChangePercent;
	}
	public void setPriceChangePercent(String priceChangePercent) {
		this.priceChangePercent = priceChangePercent;
	}
	public String getVolume() {
		return volume;
	}
	public void setVolume(String volume) {
		this.volume = volume;
	}
	
	@Override
	 public String toString() {
	        return "Coin{" +
	                "price=" + price +
	                ", scrapeDate='" + scrapeDate + '\'' +
	                ", marketCap='" + marketCap + '\'' +
	                '}';
	    }
    
    
}