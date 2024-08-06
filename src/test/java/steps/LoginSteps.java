package steps;

import static org.junit.Assert.assertEquals;
import java.io.File;
import java.io.IOException;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.LoginPage;
import utils.WebDriverManager;

public class LoginSteps {
    private WebDriver driver;
    private LoginPage loginPage;

    @Before
    public void setUp() {
        driver = WebDriverManager.getDriver();
        loginPage = PageFactory.initElements(driver, LoginPage.class);
    }

    @Given("que esteja na pagina de login")
    public void que_esteja_na_pagina_de_login() {
        driver.get("http://mantis-prova.base2.com.br/login_page.php");
    }

    @When("informar o usuario {string}")
    public void informar_o_usuario(String user) {
        loginPage.enterUsername(user);
    }

    @When("informar a senha {string}")
    public void a_senha_do_usuario(String password) {
        loginPage.enterPassword(password);
    }

    @When("selecionar entrar")
    public void selecionar_entrar() {
        loginPage.clickLogin();
    }

    @Then("ira entrar na pagina inicial")
    public void ira_entrar_na_pagina_inicial() {
        String currentUrl = driver.getCurrentUrl();
        assertEquals("https://mantis-prova.base2.com.br/index.php", currentUrl);
    }

    @Then("ira apresentar uma mensagem de erro {string}")
    public void ira_apresentar_uma_mensagem_de_erro(String mensagem) {
        String errorMessage = loginPage.getErrorMessage();
        assertEquals(mensagem, errorMessage);
    }

    @After(order = 1)
    public void screenshot(Scenario scenario) {
        if (scenario.isFailed()) {
            File file = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
            try {
                FileUtils.copyFile(file, new File("target/screenshots/", scenario.getName() + ".jpg"));
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    @After(order = 0)
    public void fecharBrowser() {
        if (driver != null) {
            driver.quit();
        }
    }
}
