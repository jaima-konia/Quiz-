**Quiz App**

A simple and interactive Quiz App built with HTML, CSS, and JavaScript. Users can answer multiple-choice questions, receive immediate visual feedback, track their score, and view their final results at the end of the quiz.

**Features**

Start quiz from a dedicated start screen

Multiple-choice questions

Dynamically generated answer buttons

Instant feedback for correct and incorrect answers

Prevents multiple answers from being selected for the same question

Score tracking

Question progress indicator

Progress bar

Final score and performance message

Restart quiz functionality

Responsive user interface

**Technologies Used**

HTML5 – Structure of the application

CSS3 – Styling and responsive layout

JavaScript – Quiz logic, DOM manipulation, event handling, score tracking, and dynamic content



**How It Works**

The quiz questions are stored in a JavaScript array containing question objects and their corresponding answers.


Each answer contains:


The answer text

A Boolean value indicating whether it is correct


JavaScript dynamically creates the answer buttons and attaches a click event listener to each button.


When an answer is selected:

The selected answer is checked.

The correct answer is highlighted.

If the selected answer is wrong, it is highlighted as incorrect.

The score is updated if the answer is correct.

Additional clicks are temporarily prevented.

After a short delay, the next question is displayed.

After the final question, the result screen is shown.


**Project Structure**

quiz-app

/
│

├── index.html

├── style.css

└── script.js

Live Demo: https://jaima-konia.github.io/Quiz-/

JavaScript Concepts Practiced

This project helped me practice several important JavaScript concepts:

Arrays and objects

Variables and state management

Functions

forEach()

DOM selection and manipulation

createElement()

appendChild()

classList

dataset

Event listeners

Event objects

Conditional statements

setTimeout()

Template/data-driven UI generation

Basic application flow and state management
