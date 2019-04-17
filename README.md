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
The base URL you can use is https://aqueous-reef-31227.herokuapp.com/ or http://localhost:3000 if you want to run it locally.

The available endpoints are:

GET /api/v1/questions
this endpoint takes a location param in the format city,state. an example response looks like this:

```
{
    "data": {
        "id": null,
        "type": "questions",
        "attributes": {
            "questions": [
                {
                    "category": "Science & Nature",
                    "difficulty": "easy",
                    "question": "Which of the following bones is not in the leg?",
                    "correct_answer": "Radius",
                    "incorrect_answer": [
                        "Patella",
                        "Tibia",
                        "Fibula "
                    ]
                },
                {
                    "category": "Entertainment: Video Games",
                    "difficulty": "easy",
                    "question": "Who is the main antagonist in the Portal franchise?",
                    "correct_answer": "GLaDOS",
                    "incorrect_answer": [
                        "Chell",
                        "Wheatley",
                        "Rick"
                    ]
                },
                {
                    "category": "Entertainment: Video Games",
                    "difficulty": "hard",
                    "question": "In &quot;Sonic the Hedgehog 2&quot; for the Sega Genesis, what do you input in the sound test screen to access the secret level select?",
                    "correct_answer": "The Lead Programmer&#039;s birthday",
                    "incorrect_answer": [
                        "The first release date of &quot;Sonic the Hedgehog&quot;",
                        "The date Sonic Team was founded",
                        "The first release date of &quot;Sonic the Hedgehog 2&quot;"
                    ]
                },
                {
                    "category": "History",
                    "difficulty": "easy",
                    "question": "The United States of America declared their independence from the British Empire on July 4th, 1776.",
                    "correct_answer": "True",
                    "incorrect_answer": [
                        "False"
                    ]
                },
                {
                    "category": "Mythology",
                    "difficulty": "medium",
                    "question": "In Greek Mythology, who killed Achilles?",
                    "correct_answer": "Paris",
                    "incorrect_answer": [
                        "Hector",
                        "Helen",
                        "Pericles"
                    ]
                },
                {
                    "category": "Entertainment: Video Games",
                    "difficulty": "hard",
                    "question": "What animal is on Link&#039;s pajamas in The Legend of Zelda: The Wind Waker?",
                    "correct_answer": "Crawfish",
                    "incorrect_answer": [
                        "Lobster",
                        "Salmon",
                        "Swordfish"
                    ]
                },
                {
                    "category": "History",
                    "difficulty": "medium",
                    "question": "Which building was set aflame on August 24th, 1812?",
                    "correct_answer": "The White House",
                    "incorrect_answer": [
                        "Parliament Building",
                        "Grand National Assembly Building",
                        "Palace of the Nation"
                    ]
                },
                {
                    "category": "Entertainment: Television",
                    "difficulty": "hard",
                    "question": "Which country does the YouTuber &quot;SinowBeats&quot; originate from?",
                    "correct_answer": "Scotland",
                    "incorrect_answer": [
                        "England",
                        "Sweden",
                        "Germany"
                    ]
                },
                {
                    "category": "Entertainment: Video Games",
                    "difficulty": "medium",
                    "question": "What is the first primary weapon the player gets in &quot;PAYDAY: The Heist&quot;?",
                    "correct_answer": "AMCAR-4",
                    "incorrect_answer": [
                        "Brenner 21",
                        "Reinbeck",
                        "M308"
                    ]
                },
                {
                    "category": "Entertainment: Film",
                    "difficulty": "easy",
                    "question": "Where does the original Friday The 13th movie take place?",
                    "correct_answer": "Camp Crystal Lake",
                    "incorrect_answer": [
                        "Packanack",
                        "Higgins Haven",
                        "Camp Forest Green"
                    ]
                }
            ]
        }
    }
}
```


### Tech

Trivia Game uses a number of open source projects to work properly:

* [Ruby] - A dynamic, open source programming language with a focus on simplicity and productivity.
* [Rails] - A web-application framework that includes everything needed to create database-backed web applications according to the Model-View-Controller (MVC)
* [RSpec] - RSpec is a 'Domain Specific Language' (DSL) testing tool written in Ruby to test Ruby code.
* [Javascript] - JavaScript is the Programming Language for the Web. JavaScript can update and change both HTML and CSS.
* [Circle CI] - CircleCI is Continuous Integration, a development practice which is being used by software teams allowing them to to build, test and deploy applications easier and quicker on multiple platforms.
