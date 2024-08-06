Feature: Criação de Tarefas na aplicação Mantis
  # Os cenários abaixo verificam a funcionalidade de criação de tarefas na aplicação Mantis.

  Scenario Outline: Criação de tarefa com dados válidos
    Given que esteja logado na aplicação Mantis como "<user>" com a senha "<password>"
    And que esteja na pagina de criação de tarefas
    When preencher os campos da tarefa:
      | categoria  | frequencia | gravidade | prioridade   | resumo        | descricao      |
      | <categoria>| <frequencia>| <gravidade>| <prioridade>| <resumo>      | <descricao>   |  
    And selecionar criar tarefa
    Then a tarefa deve ser criada com sucesso ou receber mensagem de erro caso exceda o limite permitido

  Examples:
    | user             | password  | categoria | frequencia | gravidade | prioridade  | resumo         | descricao      |
    | daniel.romagnoli | teste123  |     0     |     10     |    30     |     20      | Tarefa nova 01 | descricao_fake |
    | daniel.romagnoli | teste123  |     1     |     30     |    10     |     30      | Nova tarefa 02 | descricao_fake |
    | daniel.romagnoli | teste123  |     2     |     50     |    20     |     50      | Nova tarefa 03 | descricao_fake |
    | daniel.romagnoli | teste123  |     2     |     90     |    50     |     40      | Nova tarefa 04 | descricao_fake |
    | daniel.romagnoli | teste123  |     0     |    100     |    40     |     10      | Nova tarefa 05 | descricao_fake |
    | daniel.romagnoli | teste123  |     1     |    100     |    60     |     40      | Nova tarefa 06 | descricao_fake |
    | daniel.romagnoli | teste123  |     1     |    100     |    80     |     10      | Nova tarefa 07 | descricao_fake |
    | daniel.romagnoli | teste123  |     0     |    100     |    70     |     50      | Nova tarefa 08 | descricao_fake |
