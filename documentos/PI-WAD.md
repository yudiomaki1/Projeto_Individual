# Web Application Document - Projeto Individual - Módulo 2 - Inteli

## Taskly

#### Autor do projeto <a href="https://www.linkedin.com/in/yudi-omaki/"> Yudi Omaki

## Sumário

1. [Introdução](#c1)  
2. [Visão Geral da Aplicação Web](#c2)  
3. [Projeto Técnico da Aplicação Web](#c3)  
4. [Desenvolvimento da Aplicação Web](#c4)  
5. [Referências](#c5)  

<br>

## <a name="c1"></a>1. Introdução (Semana 01)

O Taskly é uma aplicação web com o objetivo de tornar a rotina das pessoas mais organizada e produtiva, auxiliando no gerenciamento de tempo durante a realização de atividades diárias.

O site oferece uma interface simples e intuitiva, na qual o usuário pode adicionar tarefas que devem ser realizadas durante a semana, fazer anotações e acessar um calendário personalizável.

O Taskly é a aplicação ideal para todos que desejam manter o controle de suas tarefas pessoais e profissionais de maneira eficiente, por meio de uma interface agradável e funcional.

---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas (Semana 01)

Personas são representações fictícias do usuário ideal para um determinado produto ou serviço. Elas são criadas com base em informações e dados reais sobre o público-alvo, com o objetivo de compreender melhor os usuários e suas necessidades. Isso permite que sejam feitas as adaptações necessárias ao longo do processo de desenvolvimento, garantindo que o produto final atenda de forma mais eficaz às expectativas do público.
<div align="center">
    <sub>FIGURA 1 - Persona-Lucas</sub>
        <img src="assets/persona-WAD.png">
    <sup>Fonte: Autoria própria (2025)</sup>
</div>

Lucas Ribeiro é um programador de 27 anos, mora em São Paulo e tem uma grande paixão por tecnologia. Com uma rotina intensa, ele busca uma maneira eficiente de administrar suas tarefas profissionais e pessoais em uma única aplicação web.

Ele precisa que a aplicação web ofereça uma visualização clara de anotações e lembretes, além da opção de personalização do calendário, para não perder datas importantes.

No entanto, Lucas enfrenta diversas frustrações com os serviços disponíveis atualmente, que apresentam interfaces confusas e com pouca possibilidade de personalização.

A solução oferecida pelo Taskly entrega a aplicação web ideal para o usuário, com personalização fácil e uma interface simples e intuitiva.

### 2.2. User Stories (Semana 01)
Identificação | US01 
--- | ---
Persona | Davi
User Story | "Como usuário, quero adicionar tarefas a prazos especificos, para me organizar"
Critério de aceite 1 | CR1: O usuário deve ter a possibilidade de criar novas tarefas.
Critério de aceite 2 | CR2: A tarefa deve conter nome obrigatoriamente.
Critério de aceite 3 | CR3: Ao atualizar a página, a tarefa deve continuar visivél.
Critérios INVEST |**Independente**: Pode ser desenvolvida de maneira isolada <br>**Negociável**: A interface é ajustada conforme as preferências do usuário.<br>**Valiosa**: As funcionalidades do Taskly permitem que o usuário acompanhe suas tarefas diarias de forma mais rápida e eficiente.<br>**Estimável**: As tarefas e funcionalidades podem ser estimadas com clareza, envolvendo etapas tecnicas bem definidas.<br>**Small (Pequena)**: As histórias de usuário e funcionalidades são divididas em partes pequenas e gerenciáveis.<br>**Testável**: Cada funcionalidade pode ser testada para garantir que está funcionando corretamente.

Identificação | US02 
--- | ---
Persona | Pedro
User Story | "Como usuário, quero vizualizar minhas tarefas no calendário, para ter melhor vizualização das tarefas"
Critério de aceite 1 | CR1: A aplicação deve exibir um calendário na interface principal.
Critério de aceite 2 | CR2: As tarefas ou lembretes devem aparecer em suas respectivas datas no calendário.
Critério de aceite 3 | CR3: O usuário deve ter acesso a tarefas ao clicar em um dia.

Identificação | US03
--- | ---
Persona | Eduardo
User Story | "Como usuário, quero ser notificado proximo a datas limites de tarefas, para não perder compromissos importantes"
Critério de aceite 1 | CR1: O usuário deve definir qaul horario deseja ser notificado ao criar ou editar a tarefa.
Critério de aceite 2 | CR2: A notificação deve ser enviada no horário configurado.
Critério de aceite 3 | CR3: O usuário pode optar por ativar ou desativar as notificações.

---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados  (Semana 3)

Nesta primeira etapa do projeto, foram utilizadas 3 tabelas: users, categories e tasks. Organizadas de maneira relacional, permitindo o acesso a informações de diferentes tabelas por meio de “Primary Keys” e “Foreign Keys”.

A tabela ``user`` armazena informações do usuário e contém 3 atributos: id (Armazena a Primary Key), name, email. Esta tabela está relacionada com as tabelas categories e tasks.

A tabela ``categories`` é responsável por organizar as tarefas e possui 4 atributos: id, name, color(para personalização na interface), user_id (foreign key que referencia “id” na tabela “users”)

A tabela ``tasks`` armazena as tarefas criadas pelo usuário e contém 7 atributos: id, title (título da tarefa), description (detalhamento/descrição da tarefa), created_at (data e hora da criação da tarefa em formato de timestamp), due_date(data limite estipulada pelo usuário para a tarefa ser concluída), user_id (foreign key que referencia “id” na tabela “users”), category_id (foreign key que referencia “id” na tabela “categories”)


### Modelo Relacional
<div align="center">
    <sub>FIGURA 2 - Modelo Relacional</sub>
        <img src="assets/estrutura-de-dados.png">
    <sup>Fonte: Autoria própria (2025)</sup>
</div>

### Modelo Físico

``` sql
drop table if exists tasks; 
drop table if exists categories;
drop table if exists users;
create table users (
  id uuid primary key default gen_random_uuid(), /*O uuid gera automaticamente um id, utilizando o gen_random_uuid*/
  name varchar(100) not null,
  email varchar(100) unique not null
);

create table categories (
  id uuid primary key default gen_random_uuid(),
  name varchar(100),
  color varchar(100),
  user_id uuid references users(id) 
);

create table tasks (
  id uuid primary key default gen_random_uuid(),
  title varchar(100),
  description text, /*"text" faz com que não tenha limite de letras*/
  created_at timestamp default now(),
  due_date date,
  user_id uuid references users(id),
  category_id uuid references categories(id)
);
```
O modelo físico pode ser consultado [**aqui**](..\scripts\init.sql)

### 3.1.1 BD e Models (Semana 5)
Os models são responsáveis por realizar as interações diretamente com o banco de dados, por meio das funções de CRUD (Create, Read, Update e Delete), que são utilizadas para manipular os dados.
Neste projeto, os models estão embutidos diretamente nos controllers, por meio de comandos SQL.
No Taskly, foram implementadas quatro funções principais: ``criarTarefa``, ``listarTarefa``, ``editarTarefa`` e ``excluirTarefa``.


### 3.2. Arquitetura (Semana 5)

A função ``model`` é responsável por interagir com o banco de dados utilizando métodos como: Select, Insert, Update e Delete. Dentro do projeto, foram utilizados os modelos ``tasks``, ``categories`` e ``users``.
O ``controller`` é responsável por receber as requisições do cliente e repassa-las ao model e à view. Porém neste projeto o model e o controller estão integrados. Temos os controllers ``TarefaController`` e ``UserController``.
A ``view`` é responsável pelo front-end, ou seja, pela interface onde o usuário faz requisições e interage com o servidor.


<div align="center">
    <sub>FIGURA 3 - Diagrama MVC</sub>
        <img src="assets/diagrama-MVC.png">
    <sup>Fonte: Autoria própria (2025)</sup>
</div>

### 3.3. Wireframes (Semana 03)

O wireframe é utilizado para ilustrar, de maneira simples, o design e o fluxo de um site. Esse processo é de extrema importância para a validação do layout e da aparência do site antes de sua versão final, além de auxiliar a equipe de design durante o desenvolvimento do projeto.

<div align="center">
    <sub>FIGURA 4 - Wireframe</sub>
        <img src="assets/wireframe_PI.png">
    <sup>Fonte: Autoria própria (2025)</sup>
</div>

A primeira tela do site será a de login, onde o usuário deverá preencher informações como e-mail e senha, que serão armazenadas no banco de dados. Dessa forma, garante-se que o usuário tenha segurança e acesso à sua conta pessoal.

O calendário será personalizável, permitindo que o usuário adicione lembretes a datas importantes. Isso proporciona uma visualização clara e objetiva das tarefas e compromissos ao longo do mês.

As anotações permitem que o usuário crie e gerencie informações a qualquer momento, com a possibilidade de vinculá-las a datas específicas. Essa funcionalidade é útil para realizar anotações rápidas, planejamentos pessoais ou checklists.

### 3.4. Guia de estilos (Semana 05)

O guia de estilos é essencial para manter a consistência visual do projeto ao desenvolver novas funcionalidades, interfaces e componentes visuais.

A tipografia deve ser sempre consultada para garantir que os tamanhos de fonte estejam adequados ao contexto e à hierarquia visual.

Seguir a paleta de cores definida é fundamental para preservar a identidade visual da aplicação.

As variações do logotipo devem ser aplicadas de acordo com a cor do fundo, garantindo legibilidade e contraste adequados.


<div align="center">
    <sub>FIGURA 5 - Guia de estilos</sub>
        <img src="assets/Guia-de-estilos.png">
    <sup>Fonte: Autoria própria (2025)</sup>
</div>

### 3.5. Protótipo de alta fidelidade (Semana 05)

O protótipo de alta fidelidade é fundamental no desenvolvimento de um projeto, representando, de maneira próxima, como será a aparência e o funcionamento da aplicação.

O Taskly possui três telas, sendo elas: a tela de login, o calendário e a tela de anotações.

A tela de login possui a opção de criar uma conta ou entrar com o Google. Caso o usuário já possua uma conta, ele pode clicar em “Entrar na sua conta”.

O calendário funciona como a tela principal do Taskly e oferece a funcionalidade de adicionar lembretes aos dias. Os lembretes são personalizáveis e podem conter anotações ao serem clicados.

A tela de anotações possui diversos campos para registros, com a possibilidade de criar novos campos a qualquer momento.

O protótipo completo pode ser acessado<a href="https://www.figma.com/design/A93wgDXwdGWfYzQXAtMJK0/PI---Prot%C3%B3tipo-de-alta-fidelidade?node-id=0-1&p=f&t=sscWPfWBo1C92h9r-0"> aqui</a>

<div align="center">
    <sub>FIGURA 6 - Tela de Login</sub>
        <img src="assets/login-PI.png">
    <sup>Fonte: Autoria própria (2025)</sup>
</div>

<div align="center">
    <sub>FIGURA 7 - Calendário</sub>
        <img src="assets/calendario.png">
    <sup>Fonte: Autoria própria (2025)</sup>
</div>

<div align="center">
    <sub>FIGURA 8 - Tela de Anotações </sub>
        <img src="assets/Anotacoes-PI.png">
    <sup>Fonte: Autoria própria (2025)</sup>
</div>

### 3.6. WebAPI e endpoints (Semana 05)

Os endpoints permitem a comunicação entre o cliente e o servidor de uma aplicação. Eles definem as rotas que devem ser seguidas para acessar determinadas informações no banco de dados. 

``` js
//index.js
const express = require('express');
const router = express.Router();
const TarefaController = require('../controllers/TarefaController');

router.post('/tarefas', TarefaController.criarTarefa);
router.get('/tarefas', TarefaController.listarTarefas);
router.put('/tarefas/:id', TarefaController.editarTarefa);
router.delete('/tarefas/:id', TarefaController.excluirTarefa);

module.exports = router;
```
``` js
//userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
```

### 3.7 Interface e Navegação (Semana 07)

O frontend do Taskly foi desenvolvido utilizando EJS, permitindo o fluxo dinâmico de dados vindos do backend. Cada tela possui seu próprio arquivo EJS, e a sidebar foi implementada utilizando um componente, facilitando a reutilização do código.

O design das telas foi baseado no guia de estilos e nos protótipos desenvolvidos 
anteriormente no projeto, visando manter o padrão estético.

Foram entregues cinco telas: ``tela de login``, ``tela de criação de conta``, ``home``, ``tela de anotações`` e ``tela de criação de anotações``. As imagens abaixo ilustram cada uma das telas desenvolvidas.


<div align="center">
    <sub>FIGURA 9 - Tela de Login </sub>
        <img src="assets/login.png">
    <sup>Fonte: Autoria própria (2025)</sup>
</div>

<div align="center">
    <sub>FIGURA 10 - Tela de Criação de conta </sub>
        <img src="assets/createAccount.png">
    <sup>Fonte: Autoria própria (2025)</sup>
</div>

<div align="center">
    <sub>FIGURA 11 - Home/Calendário </sub>
        <img src="assets/home.png">
    <sup>Fonte: Autoria própria (2025)</sup>
</div>

<div align="center">
    <sub>FIGURA 12 - Tela de Anotações </sub>
        <img src="assets/notes.png">
    <sup>Fonte: Autoria própria (2025)</sup>
</div>

<div align="center">
    <sub>FIGURA 13 - Tela de Criar Anotações </sub>
        <img src="assets/createTask.png">
    <sup>Fonte: Autoria própria (2025)</sup>
</div>

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

O vídeo abaixo demonstra a interface e as principais funcionalidades do Taskly, como as telas de login, criação de conta, home, anotações e a tela de criar uma nova anotação. O design de software utilizado foi a arquitetura MVC, garantindo a organização e separação de responsabilidades do projeto. Para o armazenamento de dados foi utilizado o PostgreSQL.

O link do vídeo demonstrativo pode ser acessado<a href="https://drive.google.com/file/d/1BRmI9-JNOuEe2NZ6q6pEKeT-pWJdybFE/view?usp=sharing"> aqui</a>


### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

O Taskly apresenta a implementação funcional das principais telas propostas como, login, criação de conta, home, anotações e a tela de nova anotação.

Como próximos passos, seria interessante a implementação da visualização das tasks no dia relativo a seu prazo no calendário, e a possibilidade da edição de anotações, tornando possível a alteração do título, descrição e prazo final.


## <a name="c5"></a>5. Referências

---
---
