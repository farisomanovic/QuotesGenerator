const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Not all those who wander are lost. – J.R.R. Tolkien",
  "It does not matter how slowly you go as long as you do not stop. – Confucius",
  "You miss 100% of the shots you don't take. – Wayne Gretzky",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson"
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function generateQuote() {
  const quoteBox = document.getElementById('quote-box');
  const quoteText = document.getElementById('quote');

  quoteBox.style.opacity = 0;

  setTimeout(() => {
    quoteText.textContent = getRandomQuote();
    quoteBox.style.opacity = 1;
    document.body.style.backgroundColor = getRandomColor();
  }, 300);
}
