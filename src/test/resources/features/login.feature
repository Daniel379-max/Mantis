Feature: Login e Gerenciamento de Tarefas na aplicação Mantis

  Scenario: Login feito com sucesso e credenciais válidas
    Given que esteja na pagina de login
    When informar o usuario "daniel.romagnoli"
    And selecionar entrar
    And informar a senha "teste123"
    And selecionar entrar
    Then ira entrar na pagina inicial


  Scenario Outline: Validacao de login com credenciais inválidas
    Given que esteja na pagina de login
    When informar o usuario "<user>"
    And selecionar entrar
    And informar a senha "<password>"
    And selecionar entrar
    Then ira apresentar uma mensagem de erro "<mensagem>"

  Examples:
    | user             | password  | mensagem                                                                                                         |
    | user.incorreto   | teste123  | Sua conta pode estar desativada ou bloqueada ou o nome de usuário e a senha que você digitou não estão corretos. |
    | daniel.romagnoli | senhaErro | Sua conta pode estar desativada ou bloqueada ou o nome de usuário e a senha que você digitou não estão corretos. |
    | daniel.romagnoli |           | Sua conta pode estar desativada ou bloqueada ou o nome de usuário e a senha que você digitou não estão corretos. |	