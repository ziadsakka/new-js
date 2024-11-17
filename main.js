const quotes = [
    { quote: "It's not what happens to you, but how you react to it that matters.", author: "Epictetus" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" }
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex].quote;
    document.getElementById('author').textContent = quotes[randomIndex].author;
}