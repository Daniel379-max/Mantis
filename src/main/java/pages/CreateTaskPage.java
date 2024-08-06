package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

public class CreateTaskPage extends BasePage {

    @FindBy(name = "category_id")
    private WebElement categoryDropdown;

    @FindBy(name = "reproducibility")
    private WebElement frequencyDropdown;

    @FindBy(name = "severity")
    private WebElement severityDropdown;

    @FindBy(name = "priority")
    private WebElement priorityDropdown;

    @FindBy(name = "summary")
    private WebElement summaryField;

    @FindBy(name = "description")
    private WebElement descriptionField;

    @FindBy(xpath = "//input[@value=\"Criar Nova Tarefa\"]")
    private WebElement submitButton;
    
    @FindBy(xpath = "//div[@class='alert alert-danger']")
    private WebElement errorMessage; 

    public CreateTaskPage(WebDriver driver) {
        super(driver);
    }

    public void createTask(String category, String frequency, String severity, String priority, String summary, String description) {
        selectDropdownValue(categoryDropdown, category);
        selectDropdownValue(frequencyDropdown, frequency);
        selectDropdownValue(severityDropdown, severity);
        selectDropdownValue(priorityDropdown, priority);
        summaryField.sendKeys(summary);
        descriptionField.sendKeys(description);
    }

    private void selectDropdownValue(WebElement dropdownElement, String value) {
        Select dropdown = new Select(dropdownElement);
        dropdown.selectByValue(value);
    }

    public void submitTask() {
        submitButton.click();
    }
    
    public String getErrorMessage() {
        return errorMessage.getText();
    }
}
