package utils;

import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class WebDriverManager {

    public static WebDriver getDriver() {
        System.setProperty("webdriver.chrome.driver",
                "C:\\Users\\danda\\Downloads\\chromedriver-win64\\chromedriver-win64\\chromedriver.exe");
        
        ChromeOptions options = new ChromeOptions();
        WebDriver driver = new ChromeDriver(options);

        Dimension dimension = new Dimension(1600, 900);
        driver.manage().window().setSize(dimension);

        return driver;
    }
}
