# Rock Paper Scissors Lab


Today you will be building your own version Rock Paper Scissors in Javascript! You will be allowed to make the game as simple or complex as you like, but we will start with the very basics.

## Rules/Guidelines

Even though it is one of the most simple games of all time, we will go over the rules real quick to make sure we are all on the same page:

[Wikipedia Definition](http://en.wikipedia.org/wiki/Rock-paper-scissors)
>Rock-paper-scissors is a hand game usually played by two people, where players simultaneously form one of three shapes with an outstretched hand. The "rock" beats scissors, the "scissors" beat paper and the "paper" beats rock; if both players throw the same shape, the game is tied.

![Rock Paper Scissors Diagram](http://upload.wikimedia.org/wikipedia/commons/6/67/Rock-paper-scissors.svg)

So, to translate that to an RPS game program, we would need the following:
* Input from User (player)
* Comparison of player choices
* Display of a winner

After you have completed the most basic form of the game, then you will be allowed to modify/add anything you would like within the game. Resources that are helpful for expanding your game will be provided at the end.

**ASK QUESTIONS and WORK TOGETHER**

## Setup

To simplify the process of getting started you will be building your version of RPS on [Codepen](http://codepen.io).

1. Open your [Codepen](http://codepen.io) account
2. Create a New Pen

After you have opened your Codepen and created a new pen move to the getting started section below.

**Note:** If you feel comfortable with the import process and would like to build locally or on another platform, that will work as well. If you do this, ignore the references to codepen.


## Getting Started
Even though we have gone over a few examples of HTML, we will be using only Javascript for this game. If you would like more room, you can close the HTML and CSS tabs within Codepen.

As we said earlier, our game requires us to compare possibilities. Before we get into comparing options, lets try comparing some numbers.

1. Create an `if` statement by typing the following into your JS file:

  ```javascript
  if () {

  }
  ```

  The `()` are there to contain what is called a **Condition**. A condition is a statement that results in either `true` or `false`. The comparison part comes in with using **Comparison Operators** which include `==`(Equal), `!=` (Not Equal), and [many more](http://www.w3schools.com/js/js_comparisons.asp).

  The `{}`, like with most other instances in javascript, denote the opening and closing of that code block.

2. Add a condition to your if statement to compare two numbers. Here is a few examples:

  ```javascript
  //Check for equality
  if (1 == 1) {
  }
  //String comparison
  if("yes" == "yes"){
  }
  //Check value and variable type match
  //Condition is false so this won't run
  if(1 === "1"){

  }
  ```
3. Use an alert to show that your `if` statement works by placing `alert('Condition is true')` within your if block like so:

  ```javascript
  if(1 == 1){
    alert('Condition is true');
  }
  ```

### Great Job!
  Now you have learned about **Conditional Statements**, specifically the **If Statement**. You will find that `if` is the main piece of javascript we will need to make a simple version of Rock Paper Scissors.

## User Input
We will start by getting input from a user, who is the player of your RPS game. Javascript contains functionality to easily prompt users for input, so we will use that.

1. Try typing `prompt()` into the JS tab of your pen.

> You will notice that a popup comes up with nothing in it. This is due to the code you just wrote not being within a function. Any code not contained within a function will run when the javascript file is loaded. Codepen automatically reloads the page after you finish typing to show you the most updated version of your code in the preview.

## Challenges
* Add another choice (Remember to decide where it stands compared to other choices)
* Use Firebase to make your rock paper scissors game playable across multiple users.
* Associate choices to shortcut keys
