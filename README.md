# README

# Trivia Game

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Trivia Game is a friendly game that tests your knowledge on an array of topics such as:

- General Knowledge
- Entertainment: Books
- Entertainment: Film
- Entertainment: Music
- Entertainment: Musicals & Theatres
- Entertainment: Television
- Entertainment: Video Games
- Entertainment: Board Games
- Science & Nature
- Science: Computers
- Science: Mathematics
- Mythology
- Sports
- Geography
- History
- Politics
- Art
- Celebrities
- Animals
- Vehicles
- Entertainment: Comics
- Science: Gadgets
- Entertainment: Japanese Anime & Manga
- Entertainment: Cartoon & Animations
- 
# Getting started

Clone this repository to your local machine by running this command:

```
git clone git@github.com:JSmith23/trivia_game.git
```

then:

   ```
   cd trivia_game
   ```
You should now be in the correct directory.

Make sure your ruby version is 2.5.1, you can check this by typing ruby -v in your terminal. If your version is different we suggest updating to version 2.5.1.

After run these commands:

  ```
  bundle
  rake db:{drop,create,migrate}
  ```
You should now be good to start answering questions!!

Endpoints
The base URL you can use is https://powerful-reef-36769.herokuapp.com or http://localhost:3000 if you want to run it locally.

The available endpoints are:

GET /api/v1/questions
this endpoint takes a location param in the fromat city,state. an example response looks like this:


### Tech

Trivia Game uses a number of open source projects to work properly:

* [Ruby] - A dynamic, open source programming language with a focus on simplicity and productivity.
* [Rails] - A web-application framework that includes everything needed to create database-backed web applications according to the Model-View-Controller (MVC)
* [RSpec] - RSpec is a 'Domain Specific Language' (DSL) testing tool written in Ruby to test Ruby code.
* [Javascript] - JavaScript is the Programming Language for the Web. JavaScript can update and change both HTML and CSS.
* [Circle CI] - CircleCI is Continuous Integration, a development practice which is being used by software teams allowing them to to build, test and deploy applications easier and quicker on multiple platforms.
