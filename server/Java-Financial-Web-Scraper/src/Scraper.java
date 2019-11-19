import java.util.Arrays;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

 public class Scraper {

    private WebDriver driver = new ChromeDriver();
    
    static void scrapeData() {
    	
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\chris\\Downloads\\chromedriver_win32-78\\chromedriver.exe");
		Scraper scraper = new Scraper();
		scraper.goToSignIn();
		scraper.loginUser("cgscraper@yahoo.com", "chris42908!");
		scraper.getPortfolioData();
		scraper.quitDriver();	
    	
    }

    private void goToSignIn() {
   
        driver.get("https://login.yahoo.com/config/login?.intl=us&.lang=en-US&.src=finance&.done=https%3A%2F%2Ffinance.yahoo.com%2Fportfolios");
    }
    private void loginUser(String user, String password) {
        WebElement userNameField = driver.findElement(By.id("login-username"));
        userNameField.sendKeys(user);
        userNameField.submit();
        
        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
        
        WebElement passwordField = driver.findElement(By.cssSelector("input[id='login-passwd']"));
        passwordField.sendKeys(password);
        passwordField.sendKeys(Keys.ENTER);
    
    }
    private void getPortfolioData() {
    	 driver.get("https://finance.yahoo.com/portfolio/p_0/view");
    	
    	 WebElement coinTable = driver.findElement(By.tagName("table"));
         String tableText = coinTable.getText();
         String[] coinArray = manipulateData(tableText);
         
     	 DataInjector.injectData(coinArray);
    }
    private String[] manipulateData(String tableText) {

		 String coinInfo = tableText.substring(tableText.indexOf("BAT-USD"))
				 .replace("Trade", "")
				 .replace("\n\n", "\n")
				 .replace("USD\n", "USD ")
				 .replace("  ", " ")
				 .replace(" - ", " ")
				 .replace("M -", "M")
				 .replace("B -", "B");
		 
		 
		 String[] coinInfoArray = coinInfo.split("\n");
		 return coinInfoArray;
    }
    private void quitDriver() {
        driver.quit();
    }
}