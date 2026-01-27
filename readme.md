<h1>
    <a href="https://www.dio.me/">
     <img align="center" width="40px" src="https://hermes.digitalinnovation.one/assets/diome/logo-minimized.png"></a>
    <span>Portfolio Professional | Arthur Rocha</span>
</h1>

Este repositório contém o código-fonte do meu portfólio pessoal, desenvolvido com foco em performance, modularidade e design moderno. O projeto destaca minha transição para o front-end com Angular/TypeScript e minha base sólida em C#/.NET..

## 🏗️ Estrutura do Projeto

A arquitetura foi pensada para ser escalável, utilizando módulos JavaScript para separar as responsabilidades de navegação, temas e interações dinâmicas.

Plaintext
├── index.html # Ponto de entrada principal com estrutura semântica
├── src/
│ ├── css/ # Estilização modularizada
│ │ ├── index.css # Importação global e variáveis (Dark/Light)
│ │ ├── base/ # Reset e definições fundamentais
│ │ └── components/ # Estilos específicos (button, menu, projects, etc.)
│ ├── js/ # Lógica de negócio e interações
│ │ ├── index.js # Arquivo de inicialização e importação de módulos
│ │ └── modules/ # Módulos ES6 (menu.js, main.js)
│ └── img/ # Ativos visuais (logos, projetos e habilidades)
├── favicon.png # Ícone do site
└── readme.md # Documentação do projeto

## Objetivo

Treinar Estrutura web.

## Tecnologias

[![JavaScript](https://img.shields.io/badge/JavaScript-000?style=for-the-badge&logo=javascript&logoColor=30A3DC)]()
[![HTML5](https://img.shields.io/badge/HTML5-000?style=for-the-badge&logo=html5&logoColor=E94D5F)]()
[![CSS3](https://img.shields.io/badge/CSS3-000?style=for-the-badge&logo=css3&logoColor=30A3DC)]()
[![Figma](https://img.shields.io/badge/Protótipo%20no%20Figma-000?style=for-the-badge&logo=figma&logoColor=E94D5F)](https://www.figma.com/file/NkndT2SbyHJZWLEsaM8Xn3/DIO-Lab-Portf%C3%B3lio)

## Funcionalidades Implementadas

Gerenciamento de Temas: Alternância dinâmica entre Dark e Light mode com persistência via CSS Variables.

Modularização JS: Separação completa da lógica de menu, temas e componentes como o Accordion.

Layout Responsivo: Cards de projetos dinâmicos que se adaptam de layout vertical (mobile) para horizontal (desktop).

Navegação Fluida: Implementação de Smooth Scroll e estados ativos no menu de navegação.

## 🚀 Como Executar o Projeto

Clone este repositório: git clone https://github.com/Rodolpholn/seu-repositorio.git

Abra o arquivo index.html em seu navegador ou utilize a extensão Live Server no VS Code para uma melhor experiência.
