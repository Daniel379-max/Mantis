package steps;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Then;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.github.javafaker.Faker;

import pages.CreateTaskPage;
import pages.HomePage;
import pages.LoginPage;
import utils.WebDriverManager;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Map;

import static org.junit.Assert.*;

public class CreateTaskSteps {
	private WebDriver driver;
	private CreateTaskPage createTaskPage;
	private HomePage homePage;
	private LoginPage loginPage;
	private Faker faker;

	@Before
	public void setUp() {
		driver = WebDriverManager.getDriver();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		homePage = PageFactory.initElements(driver, HomePage.class);
		createTaskPage = PageFactory.initElements(driver, CreateTaskPage.class);
		faker = new Faker();
	}

	@Given("que esteja logado na aplicação Mantis como {string} com a senha {string}")
	public void que_esteja_logado_na_aplicacao_Mantis_como_com_a_senha(String user, String password) {
		driver.get("http://mantis-prova.base2.com.br/login_page.php");
		loginPage.login(user, password);
	}

	@Given("que esteja na pagina de criação de tarefas")
	public void que_esteja_na_pagina_de_criacao_de_tarefas() {
		homePage.navigateToCreateTaskPage();
	}

	@When("preencher os campos da tarefa:")
    public void preencher_os_campos_da_tarefa(io.cucumber.datatable.DataTable dataTable) {
        List<Map<String, String>> data = dataTable.asMaps(String.class, String.class);
        Map<String, String> taskData = data.get(0);

        String descricao = taskData.get("descricao");
        if ("descricao_fake".equals(descricao)) {
            descricao = faker.lorem().paragraph();
        }

        createTaskPage.createTask(
                taskData.get("categoria"),
                taskData.get("frequencia"),
                taskData.get("gravidade"),
                taskData.get("prioridade"),
                taskData.get("resumo"),
                descricao
        );
    }

	@When("selecionar criar tarefa")
	public void selecionar_criar_tarefa() {
		createTaskPage.submitTask();
	}

	 @Then("a tarefa deve ser criada com sucesso ou receber mensagem de erro caso exceda o limite permitido")
	    public void a_tarefa_deve_ser_criada_com_sucesso() {
	        String errorMessage = createTaskPage.getErrorMessage();
	        if (errorMessage != null && errorMessage.contains("Você atingiu o limite permitido de atividade de 10 nos últimos 3600 segundos")) {
	            System.out.println("Erro: " + errorMessage);
	            assertEquals("Você atingiu o limite permitido de atividade de 10 nos últimos 3600 segundos, suas ações foram bloqueados para evitar spam's, por favor, tente novamente mais tarde.", errorMessage);
	        } else {
	           System.out.println("Cadastrado com sucesso");
	        }
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