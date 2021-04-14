<h1 align="center">Marvelous App - front:</h1>
<h2 align="center">Made for Stone challenge 2021</h2>
<p align="center"><a href="https://marvelousapp-front.herokuapp.com/">Link to production</a></p>
Note that, since the application is built using Heroku free the first access may take a while both to open it (initializing front end instance) and loggin in / registering (initializing back end instance).

<hr />

## Abstract:
Front end application to like and list marvel characters and comics. Uses: React, Redux, JavaScript, and SCSS.

<hr />

## Demonstration:
<img src="https://raw.githubusercontent.com/leandroparisi/case-stone-front/main/demonstration/demonstration.gif" alt="App demonstration" width="1100px" >

<hr />

## Installation and Setup Instructions 

1. Clone repository

2. Install <a href="https://www.npmjs.com/get-npm" >NPM</a> e <a href="https://www.alura.com.br/artigos/mysql-do-download-e-instalacao-ate-sua-primeira-tabela" >SQL</a>:

2. Installation:

    `npm install`  

3. To Run Test Suite (not implemented yet):  

    `npm test`  

4. To Start Server:

    `npm start`  

5. To Visit App:

    `localhost:3000`  

<hr />

## Improvements to be done:

1. Adjust feature details (pop up) on large screens
2. Use global store to manage popups and sliders so that they are synced (ex.: when you click on seach input it should close character / comic details slider)
3. Make search slider top level component on screen (z-index)
4. More information and features on favorites page (like description and some external links)
