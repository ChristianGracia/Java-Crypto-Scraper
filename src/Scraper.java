import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Scraper {

    public WebDriver driver = new ChromeDriver();

    public void goToSignIn() {
   
        driver.get("https://login.yahoo.com/config/login?.intl=us&.lang=en-US&.src=finance&.done=https%3A%2F%2Ffinance.yahoo.com%2Fportfolios");
    }
    public void loginUser(String user, String password) {
        WebElement userNameField = driver.findElement(By.id("login-username"));
        userNameField.sendKeys(user);
        userNameField.submit();
        
        
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        
        WebElement passwordField = driver.findElement(By.cssSelector("input[id='login-passwd']"));
 
        passwordField.sendKeys(password);
        passwordField.sendKeys(Keys.ENTER);
    
    }
    public void goToPortfolio() {
    	driver.get("https://finance.yahoo.com/portfolio/p_0/view");
    
    }
    public void quitDriver() {
        driver.quit();
    }
}