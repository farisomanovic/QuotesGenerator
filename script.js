const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Not all those who wander are lost. – J.R.R. Tolkien",
  "It does not matter how slowly you go as long as you do not stop. – Confucius",
  "You miss 100% of the shots you don't take. – Wayne Gretzky",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "Do what you can, with what you have, where you are. – Theodore Roosevelt",
  "Everything you can imagine is real. – Pablo Picasso",
  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "Happiness can be found even in the darkest of times, if one only remembers to turn on the light. – Albus Dumbledore (J.K. Rowling)",
  "I have not failed. I've just found 10,000 ways that won't work. – Thomas Edison",
  "Don’t count the days, make the days count. – Muhammad Ali",
  "The best way out is always through. – Robert Frost",
  "It always seems impossible until it's done. – Nelson Mandela",
  "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
  "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
  "In the middle of difficulty lies opportunity. – Albert Einstein",
  "Act as if what you do makes a difference. It does. – William James",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
  "Dream big and dare to fail. – Norman Vaughan",
  "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
  "I would rather die of passion than of boredom. – Vincent van Gogh",
  "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
  "Strive not to be a success, but rather to be of value. – Albert Einstein"
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Softer background color palette
const softColors = [
  "#f7cac9", "#f9e2ae", "#c3fbd8", "#d6eaf8", "#e8daef",
  "#fde2e4", "#bee1e6", "#f0efeb", "#e2f0cb", "#d5e1df",
  "#e6e6fa", "#ffefd5", "#faf0e6", "#e0ffff", "#f5f5dc",
  "#fff0f5", "#f5fffa", "#fdfd96", "#dcedc1", "#c9c9ff"
];

function getRandomSoftColor() {
  const index = Math.floor(Math.random() * softColors.length);
  return softColors[index];
}

function generateQuote() {
  const quoteBox = document.getElementById('quote-box');
  const quoteText = document.getElementById('quote');

  quoteBox.style.opacity = 0;

  setTimeout(() => {
    quoteText.textContent = getRandomQuote();
    quoteBox.style.opacity = 1;
    document.body.style.backgroundColor = getRandomSoftColor();
  }, 300);
}

