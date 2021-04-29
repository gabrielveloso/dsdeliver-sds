# SDS Delivery
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/gabrielveloso/dsdeliver-sds/blob/main/LICENSE) 

<p align="center">
 <a href="#about-the-project">About</a> •
 <a href="#layout-web">Layout web</a> • 
 <a href="#modelo-conceitual">Modelo conceitual</a> • 
 <a href="#tecnologias-utilizadas">Tecnologias utilizadas</a> •
 <a href="#autor">Autor</a>
</p>

# About the project

https://delivery-gabriel.netlify.app/

SDS Deliver é uma aplicação full stack web e mobile construída durante a 2ª edição da **Semana DevSuperior** (#sds2), evento organizado pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

A aplicação consiste em um aplicativo de delivery com tela de pedidos pelos cliente e aplicativo mobile para o entregador

## Layout web
![Web 1](https://github.com/gabrielveloso/dsdeliver-sds/blob/main/web2.png)

![Web 2](https://github.com/gabrielveloso/dsdeliver-sds/blob/main/web1.png)

## Modelo conceitual
![Modelo Conceitual](https://github.com/acenelio/assets/raw/main/sds1/modelo-conceitual.png)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
- React Native
- libs: axios (http), leaflet (maps), toastify(messages on screen), react-select(select)
## Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/devsuperior/sds1-wmazoni

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/devsuperior/sds1-wmazoni

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
npm  install

# executar o projeto
npm start
```

# Autor

Gabriel Veloso

https://www.linkedin.com/in/gabriel-azuirson/




  

  
 
