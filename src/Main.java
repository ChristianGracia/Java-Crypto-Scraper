public class Main {

	public static void main(String[] args) {
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\chris\\Downloads\\chromedriver_win32-78\\chromedriver.exe");
		Scraper scraper = new Scraper();
		scraper.goToSignIn();
		scraper.loginUser("cgscraper@yahoo.com", "chris42908!");
		scraper.getPortFolioData();
		scraper.quitDriver();
	}
}
