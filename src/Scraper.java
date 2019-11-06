import java.sql.Time;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Scraper {

    public WebDriver Driver = new ChromeDriver();

    public void goToSignIn() {
        Driver.get("https://login.yahoo.com/config/login?.intl=us&.lang=en-US&.src=finance&.done=https%3A%2F%2Ffinance.yahoo.com%2Fportfolios");
    }
    public void loginUser(String user, String password) {
        WebElement userNameField = Driver.findElement(By.id("login-username"));
        userNameField.sendKeys(user);
        userNameField.submit();
        
        Driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        
        WebElement passwordField = Driver.findElement(By.cssSelector("input[id='login-passwd']"));
        passwordField.sendKeys(password);
        passwordField.submit();
    }
    public void quitDriver() {
        Driver.quit();
    }
}