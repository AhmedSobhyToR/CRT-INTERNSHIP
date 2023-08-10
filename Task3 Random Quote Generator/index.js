function Quotes() {
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      const quoteElement = document.getElementById("quote");
      quoteElement.textContent = `${data.content} Author:  ${data.author}`;
    });

}
Quotes();