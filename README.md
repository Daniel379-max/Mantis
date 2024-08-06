# Projeto de Automação de Testes - Mantis

## Intuito do Projeto

Este projeto visa automatizar os testes da aplicação Mantis, especificamente focando no processo de login e na criação de tarefas. Utilizando o Selenium WebDriver junto com o Cucumber, os testes são escritos em Gherkin para garantir uma descrição clara e legível das funcionalidades testadas.

## Descrição da Arquitetura

O projeto está organizado de acordo com as boas práticas de automação de testes, seguindo a estrutura de Page Object Model (POM). Abaixo está a descrição da arquitetura do projeto:

- **src/test/java**
  - **pages**: Contém classes que representam as páginas da aplicação (LoginPage, HomePage, CreateTaskPage), encapsulando a lógica de interação com os elementos da página.
  - **steps**: Contém as definições dos steps do Cucumber, que ligam os cenários de teste em Gherkin com os métodos do Selenium.
  - **utils**: Contém a classe `WebDriverManager` responsável por gerenciar a instância do WebDriver.
  - **runners**: Contém a classe `TestRunner` para configurar e executar os testes do Cucumber.
- **src/test/resources**
  - **features**: Contém os arquivos `.feature` escritos em Gherkin que descrevem os cenários de teste.

## Configurações Necessárias

### Pré-requisitos

- Java JDK 8 ou superior
- Maven
- ChromeDriver (compatível com a versão do Google Chrome instalada)
- Google Chrome

### Dependências do Maven

As principais dependências do projeto são:

```xml
<dependencies>
    <dependency>
        <groupId>org.seleniumhq.selenium</groupId>
        <artifactId>selenium-java</artifactId>
        <version>4.0.0</version>
    </dependency>
    <dependency>
        <groupId>io.cucumber</groupId>
        <artifactId>cucumber-java</artifactId>
        <version>6.10.2</version>
    </dependency>
    <dependency>
        <groupId>io.cucumber</groupId>
        <artifactId>cucumber-junit</artifactId>
        <version>6.10.2</version>
    </dependency>
    <dependency>
        <groupId>commons-io</groupId>
        <artifactId>commons-io</artifactId>
        <version>2.8.0</version>
    </dependency>
</dependencies>
