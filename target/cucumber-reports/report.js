$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/create_task.feature");
formatter.feature({
  "name": "Criação de Tarefas na aplicação Mantis",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Criação de tarefa com dados válidos",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "que esteja logado na aplicação Mantis como \"\u003cuser\u003e\" com a senha \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "que esteja na pagina de criação de tarefas",
  "keyword": "And "
});
formatter.step({
  "name": "preencher os campos da tarefa:",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "categoria",
        "frequencia",
        "gravidade",
        "prioridade",
        "resumo",
        "descricao"
      ]
    },
    {
      "cells": [
        "\u003ccategoria\u003e",
        "\u003cfrequencia\u003e",
        "\u003cgravidade\u003e",
        "\u003cprioridade\u003e",
        "\u003cresumo\u003e",
        "\u003cdescricao\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "selecionar criar tarefa",
  "keyword": "And "
});
formatter.step({
  "name": "a tarefa deve ser criada com sucesso",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user",
        "password",
        "categoria",
        "frequencia",
        "gravidade",
        "prioridade",
        "resumo",
        "descricao"
      ]
    },
    {
      "cells": [
        "daniel.romagnoli",
        "teste123",
        "0",
        "10",
        "30",
        "20",
        "Tarefa nova 01",
        "descricao_fake"
      ]
    },
    {
      "cells": [
        "daniel.romagnoli",
        "teste123",
        "1",
        "30",
        "10",
        "30",
        "Nova tarefa 02",
        "descricao_fake"
      ]
    },
    {
      "cells": [
        "daniel.romagnoli",
        "teste123",
        "2",
        "50",
        "20",
        "50",
        "Nova tarefa 03",
        "descricao_fake"
      ]
    },
    {
      "cells": [
        "daniel.romagnoli",
        "teste123",
        "2",
        "90",
        "50",
        "40",
        "Nova tarefa 04",
        "descricao_fake"
      ]
    },
    {
      "cells": [
        "daniel.romagnoli",
        "teste123",
        "0",
        "100",
        "40",
        "10",
        "Nova tarefa 05",
        "descricao_fake"
      ]
    },
    {
      "cells": [
        "daniel.romagnoli",
        "teste123",
        "1",
        "100",
        "60",
        "40",
        "Nova tarefa 06",
        "descricao_fake"
      ]
    },
    {
      "cells": [
        "daniel.romagnoli",
        "teste123",
        "1",
        "100",
        "80",
        "10",
        "Nova tarefa 07",
        "descricao_fake"
      ]
    },
    {
      "cells": [
        "daniel.romagnoli",
        "teste123",
        "0",
        "100",
        "70",
        "50",
        "Nova tarefa 08",
        "descricao_fake"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Criação de tarefa com dados válidos",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que esteja logado na aplicação Mantis como \"daniel.romagnoli\" com a senha \"teste123\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateTaskSteps.que_esteja_logado_na_aplicacao_Mantis_como_com_a_senha(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que esteja na pagina de criação de tarefas",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTaskSteps.que_esteja_na_pagina_de_criacao_de_tarefas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher os campos da tarefa:",
  "rows": [
    {
      "cells": [
        "categoria",
        "frequencia",
        "gravidade",
        "prioridade",
        "resumo",
        "descricao"
      ]
    },
    {
      "cells": [
        "0",
        "10",
        "30",
        "20",
        "Tarefa nova 01",
        "descricao_fake"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CreateTaskSteps.preencher_os_campos_da_tarefa(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar criar tarefa",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTaskSteps.selecionar_criar_tarefa()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a tarefa deve ser criada com sucesso",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateTaskSteps.a_tarefa_deve_ser_criada_com_sucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Criação de tarefa com dados válidos",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que esteja logado na aplicação Mantis como \"daniel.romagnoli\" com a senha \"teste123\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateTaskSteps.que_esteja_logado_na_aplicacao_Mantis_como_com_a_senha(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que esteja na pagina de criação de tarefas",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTaskSteps.que_esteja_na_pagina_de_criacao_de_tarefas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher os campos da tarefa:",
  "rows": [
    {
      "cells": [
        "categoria",
        "frequencia",
        "gravidade",
        "prioridade",
        "resumo",
        "descricao"
      ]
    },
    {
      "cells": [
        "1",
        "30",
        "10",
        "30",
        "Nova tarefa 02",
        "descricao_fake"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CreateTaskSteps.preencher_os_campos_da_tarefa(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar criar tarefa",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTaskSteps.selecionar_criar_tarefa()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a tarefa deve ser criada com sucesso",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateTaskSteps.a_tarefa_deve_ser_criada_com_sucesso()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Você atingiu o limite permitido de atividade de 10 nos últimos 3600 segundos, suas ações foram bloqueados para evitar spam\u0027s, por favor, tente novamente mais tarde].\u003e but was:\u003c[APPLICATION ERROR #27\nVocê atingiu o limite permitido de atividade de 10 nos últimos 3600 segundos, suas ações foram bloqueados para evitar spam\u0027s, por favor, tente novamente mais tarde.\nPor favor, utilize o botão \"Voltar\" de seu navegador web para voltar à pagina anterior. Lá você pode corrigir quaisquer problemas identificados neste erro ou escolher uma outra ação. Você também pode clicar em uma opção da barra de menus para ir diretamente para outra seção].\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat steps.CreateTaskSteps.a_tarefa_deve_ser_criada_com_sucesso(CreateTaskSteps.java:87)\r\n\tat ✽.a tarefa deve ser criada com sucesso(file:src/test/resources/features/create_task.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Criação de tarefa com dados válidos",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que esteja logado na aplicação Mantis como \"daniel.romagnoli\" com a senha \"teste123\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateTaskSteps.que_esteja_logado_na_aplicacao_Mantis_como_com_a_senha(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que esteja na pagina de criação de tarefas",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTaskSteps.que_esteja_na_pagina_de_criacao_de_tarefas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher os campos da tarefa:",
  "rows": [
    {
      "cells": [
        "categoria",
        "frequencia",
        "gravidade",
        "prioridade",
        "resumo",
        "descricao"
      ]
    },
    {
      "cells": [
        "2",
        "50",
        "20",
        "50",
        "Nova tarefa 03",
        "descricao_fake"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CreateTaskSteps.preencher_os_campos_da_tarefa(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar criar tarefa",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTaskSteps.selecionar_criar_tarefa()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a tarefa deve ser criada com sucesso",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateTaskSteps.a_tarefa_deve_ser_criada_com_sucesso()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Você atingiu o limite permitido de atividade de 10 nos últimos 3600 segundos, suas ações foram bloqueados para evitar spam\u0027s, por favor, tente novamente mais tarde].\u003e but was:\u003c[APPLICATION ERROR #27\nVocê atingiu o limite permitido de atividade de 10 nos últimos 3600 segundos, suas ações foram bloqueados para evitar spam\u0027s, por favor, tente novamente mais tarde.\nPor favor, utilize o botão \"Voltar\" de seu navegador web para voltar à pagina anterior. Lá você pode corrigir quaisquer problemas identificados neste erro ou escolher uma outra ação. Você também pode clicar em uma opção da barra de menus para ir diretamente para outra seção].\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat steps.CreateTaskSteps.a_tarefa_deve_ser_criada_com_sucesso(CreateTaskSteps.java:87)\r\n\tat ✽.a tarefa deve ser criada com sucesso(file:src/test/resources/features/create_task.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Criação de tarefa com dados válidos",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que esteja logado na aplicação Mantis como \"daniel.romagnoli\" com a senha \"teste123\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateTaskSteps.que_esteja_logado_na_aplicacao_Mantis_como_com_a_senha(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que esteja na pagina de criação de tarefas",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTaskSteps.que_esteja_na_pagina_de_criacao_de_tarefas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher os campos da tarefa:",
  "rows": [
    {
      "cells": [
        "categoria",
        "frequencia",
        "gravidade",
        "prioridade",
        "resumo",
        "descricao"
      ]
    },
    {
      "cells": [
        "2",
        "90",
        "50",
        "40",
        "Nova tarefa 04",
        "descricao_fake"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CreateTaskSteps.preencher_os_campos_da_tarefa(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar criar tarefa",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTaskSteps.selecionar_criar_tarefa()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a tarefa deve ser criada com sucesso",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateTaskSteps.a_tarefa_deve_ser_criada_com_sucesso()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Você atingiu o limite permitido de atividade de 10 nos últimos 3600 segundos, suas ações foram bloqueados para evitar spam\u0027s, por favor, tente novamente mais tarde].\u003e but was:\u003c[APPLICATION ERROR #27\nVocê atingiu o limite permitido de atividade de 10 nos últimos 3600 segundos, suas ações foram bloqueados para evitar spam\u0027s, por favor, tente novamente mais tarde.\nPor favor, utilize o botão \"Voltar\" de seu navegador web para voltar à pagina anterior. Lá você pode corrigir quaisquer problemas identificados neste erro ou escolher uma outra ação. Você também pode clicar em uma opção da barra de menus para ir diretamente para outra seção].\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat steps.CreateTaskSteps.a_tarefa_deve_ser_criada_com_sucesso(CreateTaskSteps.java:87)\r\n\tat ✽.a tarefa deve ser criada com sucesso(file:src/test/resources/features/create_task.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Criação de tarefa com dados válidos",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que esteja logado na aplicação Mantis como \"daniel.romagnoli\" com a senha \"teste123\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateTaskSteps.que_esteja_logado_na_aplicacao_Mantis_como_com_a_senha(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que esteja na pagina de criação de tarefas",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTaskSteps.que_esteja_na_pagina_de_criacao_de_tarefas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher os campos da tarefa:",
  "rows": [
    {
      "cells": [
        "categoria",
        "frequencia",
        "gravidade",
        "prioridade",
        "resumo",
        "descricao"
      ]
    },
    {
      "cells": [
        "0",
        "100",
        "40",
        "10",
        "Nova tarefa 05",
        "descricao_fake"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CreateTaskSteps.preencher_os_campos_da_tarefa(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar criar tarefa",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTaskSteps.selecionar_criar_tarefa()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a tarefa deve ser criada com sucesso",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateTaskSteps.a_tarefa_deve_ser_criada_com_sucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Criação de tarefa com dados válidos",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que esteja logado na aplicação Mantis como \"daniel.romagnoli\" com a senha \"teste123\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateTaskSteps.que_esteja_logado_na_aplicacao_Mantis_como_com_a_senha(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que esteja na pagina de criação de tarefas",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTaskSteps.que_esteja_na_pagina_de_criacao_de_tarefas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher os campos da tarefa:",
  "rows": [
    {
      "cells": [
        "categoria",
        "frequencia",
        "gravidade",
        "prioridade",
        "resumo",
        "descricao"
      ]
    },
    {
      "cells": [
        "1",
        "100",
        "60",
        "40",
        "Nova tarefa 06",
        "descricao_fake"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CreateTaskSteps.preencher_os_campos_da_tarefa(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar criar tarefa",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTaskSteps.selecionar_criar_tarefa()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a tarefa deve ser criada com sucesso",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateTaskSteps.a_tarefa_deve_ser_criada_com_sucesso()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Você atingiu o limite permitido de atividade de 10 nos últimos 3600 segundos, suas ações foram bloqueados para evitar spam\u0027s, por favor, tente novamente mais tarde].\u003e but was:\u003c[APPLICATION ERROR #27\nVocê atingiu o limite permitido de atividade de 10 nos últimos 3600 segundos, suas ações foram bloqueados para evitar spam\u0027s, por favor, tente novamente mais tarde.\nPor favor, utilize o botão \"Voltar\" de seu navegador web para voltar à pagina anterior. Lá você pode corrigir quaisquer problemas identificados neste erro ou escolher uma outra ação. Você também pode clicar em uma opção da barra de menus para ir diretamente para outra seção].\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat steps.CreateTaskSteps.a_tarefa_deve_ser_criada_com_sucesso(CreateTaskSteps.java:87)\r\n\tat ✽.a tarefa deve ser criada com sucesso(file:src/test/resources/features/create_task.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Criação de tarefa com dados válidos",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que esteja logado na aplicação Mantis como \"daniel.romagnoli\" com a senha \"teste123\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateTaskSteps.que_esteja_logado_na_aplicacao_Mantis_como_com_a_senha(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que esteja na pagina de criação de tarefas",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTaskSteps.que_esteja_na_pagina_de_criacao_de_tarefas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher os campos da tarefa:",
  "rows": [
    {
      "cells": [
        "categoria",
        "frequencia",
        "gravidade",
        "prioridade",
        "resumo",
        "descricao"
      ]
    },
    {
      "cells": [
        "1",
        "100",
        "80",
        "10",
        "Nova tarefa 07",
        "descricao_fake"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CreateTaskSteps.preencher_os_campos_da_tarefa(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar criar tarefa",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTaskSteps.selecionar_criar_tarefa()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a tarefa deve ser criada com sucesso",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateTaskSteps.a_tarefa_deve_ser_criada_com_sucesso()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Você atingiu o limite permitido de atividade de 10 nos últimos 3600 segundos, suas ações foram bloqueados para evitar spam\u0027s, por favor, tente novamente mais tarde].\u003e but was:\u003c[APPLICATION ERROR #27\nVocê atingiu o limite permitido de atividade de 10 nos últimos 3600 segundos, suas ações foram bloqueados para evitar spam\u0027s, por favor, tente novamente mais tarde.\nPor favor, utilize o botão \"Voltar\" de seu navegador web para voltar à pagina anterior. Lá você pode corrigir quaisquer problemas identificados neste erro ou escolher uma outra ação. Você também pode clicar em uma opção da barra de menus para ir diretamente para outra seção].\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat steps.CreateTaskSteps.a_tarefa_deve_ser_criada_com_sucesso(CreateTaskSteps.java:87)\r\n\tat ✽.a tarefa deve ser criada com sucesso(file:src/test/resources/features/create_task.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Criação de tarefa com dados válidos",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que esteja logado na aplicação Mantis como \"daniel.romagnoli\" com a senha \"teste123\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateTaskSteps.que_esteja_logado_na_aplicacao_Mantis_como_com_a_senha(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que esteja na pagina de criação de tarefas",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTaskSteps.que_esteja_na_pagina_de_criacao_de_tarefas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher os campos da tarefa:",
  "rows": [
    {
      "cells": [
        "categoria",
        "frequencia",
        "gravidade",
        "prioridade",
        "resumo",
        "descricao"
      ]
    },
    {
      "cells": [
        "0",
        "100",
        "70",
        "50",
        "Nova tarefa 08",
        "descricao_fake"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CreateTaskSteps.preencher_os_campos_da_tarefa(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar criar tarefa",
  "keyword": "And "
});
formatter.match({
  "location": "CreateTaskSteps.selecionar_criar_tarefa()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a tarefa deve ser criada com sucesso",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateTaskSteps.a_tarefa_deve_ser_criada_com_sucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "Login e Gerenciamento de Tarefas na aplicação Mantis",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login feito com sucesso e credenciais válidas",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que esteja na pagina de login",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.que_esteja_na_pagina_de_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o usuario \"daniel.romagnoli\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.informar_o_usuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar entrar",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.selecionar_entrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"teste123\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.a_senha_do_usuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar entrar",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.selecionar_entrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ira entrar na pagina inicial",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.ira_entrar_na_pagina_inicial()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validacao de login com credenciais inválidas",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "que esteja na pagina de login",
  "keyword": "Given "
});
formatter.step({
  "name": "informar o usuario \"\u003cuser\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "selecionar entrar",
  "keyword": "And "
});
formatter.step({
  "name": "informar a senha \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "selecionar entrar",
  "keyword": "And "
});
formatter.step({
  "name": "ira apresentar uma mensagem de erro \"\u003cmensagem\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user",
        "password",
        "mensagem"
      ]
    },
    {
      "cells": [
        "user.incorreto",
        "teste123",
        "Sua conta pode estar desativada ou bloqueada ou o nome de usuário e a senha que você digitou não estão corretos."
      ]
    },
    {
      "cells": [
        "daniel.romagnoli",
        "senhaErro",
        "Sua conta pode estar desativada ou bloqueada ou o nome de usuário e a senha que você digitou não estão corretos."
      ]
    },
    {
      "cells": [
        "daniel.romagnoli",
        "",
        "Sua conta pode estar desativada ou bloqueada ou o nome de usuário e a senha que você digitou não estão corretos."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validacao de login com credenciais inválidas",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que esteja na pagina de login",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.que_esteja_na_pagina_de_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o usuario \"user.incorreto\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.informar_o_usuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar entrar",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.selecionar_entrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"teste123\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.a_senha_do_usuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar entrar",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.selecionar_entrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ira apresentar uma mensagem de erro \"Sua conta pode estar desativada ou bloqueada ou o nome de usuário e a senha que você digitou não estão corretos.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.ira_apresentar_uma_mensagem_de_erro(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validacao de login com credenciais inválidas",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que esteja na pagina de login",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.que_esteja_na_pagina_de_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o usuario \"daniel.romagnoli\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.informar_o_usuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar entrar",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.selecionar_entrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"senhaErro\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.a_senha_do_usuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar entrar",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.selecionar_entrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ira apresentar uma mensagem de erro \"Sua conta pode estar desativada ou bloqueada ou o nome de usuário e a senha que você digitou não estão corretos.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.ira_apresentar_uma_mensagem_de_erro(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validacao de login com credenciais inválidas",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que esteja na pagina de login",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.que_esteja_na_pagina_de_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o usuario \"daniel.romagnoli\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.informar_o_usuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar entrar",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.selecionar_entrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a senha \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.a_senha_do_usuario(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar entrar",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.selecionar_entrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ira apresentar uma mensagem de erro \"Sua conta pode estar desativada ou bloqueada ou o nome de usuário e a senha que você digitou não estão corretos.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.ira_apresentar_uma_mensagem_de_erro(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});