package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HomePage extends BasePage {

    @FindBy(xpath = "//div[@class='navbar-header']")
    private WebElement navBar;

    @FindBy(xpath = "//a[@href='bug_report_page.php']")
    private WebElement createTaskLink;

    public HomePage(WebDriver driver) {
        super(driver);
        PageFactory.initElements(driver, this);
    }

    public String getNavBar() {
        return navBar.getText();
    }

    public void navigateToCreateTaskPage() {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.visibilityOf(createTaskLink));
        createTaskLink.click();
    }
}
