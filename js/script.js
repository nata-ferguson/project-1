/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
By Natasha Ferguson
******************************************/

// array of quote objects 

var quotes = [
{
  quote: "Those three things - autonomy, complexity, and a connection between effort and reward - are, most people will agree, the three qualities that work has to have if it is to be satisfying.",
  source: "Malcolm Gladwell",
  citation: "Outliers: The Story of Success",
  year: 2008
},

{
  quote: "Courage is not something that you already have that makes you brave when the tough times start. Courage is what you earn when you’ve been through the tough times and you discover they aren’t so tough after all.",
  source: "Malcolm Gladwell",
  citation: "David and Goliath: Underdogs, Misfits, and the Art of Battling Giants"
},

{
  quote: "An innate gift and a certain amount of intelligence are important, but what really pays is ordinary experience.",
  source: "Malcolm Gladwell",
  year: 2012
},

{
  quote: "The key to good decision making is not knowledge. It is understanding. We are swimming in the former. We are desperately lacking in the latter.",
  source: "Malcolm Gladwell",
  year: 2015
},

{
  quote: "If you want to bring a fundamental change in people's belief and behavior...you need to create a community around them, where those new beliefs can be practiced and expressed and nurtured.",
  source: "Malcolm Gladwell",
  citation: "The Tipping Point: How Little Things Can Make a Big Difference",
  year: 2000
},

{
  quote: "When we understand how much culture and history and the world outside of the individual matter to professional success--then ... We have a way to successes out of the unsucessful.",
  source: "Malcolm Gladwell",
  citation: "Outliers: The Story of Success"
},

{
  quote: "What is learned out of necessity is inevitably more powerful than the learning that comes easily.",
  source: "Malcolm Gladwell",
  citation: "David and Goliath: Underdogs, Misfits, and the Art of Battling Giants"
},

{
  quote: "Success is not a random act. It arises out of a predictable and powerful set of circumstances and opportunities.",
  source: "Malcolm Gladwell",
  citation: "Outliers: The Story of Success",
  year: 2008
},

{
  quote: "We need to look at the subtle, the hidden, and the unspoken.",
  source: "Malcolm Gladwell",
  citation: "Blink: The Power of Thinking Without Thinking"
}
];

// `getRandomQuote` function

function getRandomQuote() {
  var randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
}

// `printQuote` function
// if statement to test if the quote object has a citation property
// if statement to test if the quote object has a year property

function printQuote() {

  var randomQuote = getRandomQuote();
  var html = '';
  
  html = '<p class="quote">' + randomQuote.quote + '</p>';
  html += '<p class="source">' + randomQuote.source; 
    
  if (randomQuote.citation) {
  html += '<span class="citation">' + randomQuote.citation + '</span>';
    }

  if (randomQuote.year) {
  html += '<span class="year">' + randomQuote.year + '</span>';
    }
  
  html +='</p>';

  document.getElementById('quote-box').innerHTML = html;
  
}

//function to create random background color

function changeBackgroundColor() {
  var red = Math.floor(Math.random() * 256);
  var green =  Math.floor(Math.random() * 256);
  var blue =  Math.floor(Math.random() * 256);
  var rgbColor = "rgb(" + red + "," + green + "," + blue + ")";

  document.body.style.backgroundColor = rgbColor;
}

changeBackgroundColor();



// click event listener for the print quote button

document.getElementById('load-quote').addEventListener("click", printQuote, false);
