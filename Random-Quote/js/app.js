let quotes = [
  {
    text : "All right, Mr. DeMille, I'm ready for my close-up.",
    author : "Sunset Blvd."
  },
  {
    text : "Your vision will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes",
    author : "Carl Jung"
  },
  {
    text : "Knowing your own darkness is the best method for dealing with the darknesses of other people.",
    author : "Carl Jung"
  }
];

let colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

window.onload = () => changeQuote();

function changeQuote(){
  let text = document.getElementsByClassName("quote-text")[0];
  let author = document.getElementsByClassName("quote-author")[0];

  let quoteId = document.getElementsByClassName("quote-contain")[0]
      .id;
  let quoteIndex = parseInt(quoteId.replace("quote-",""));
  let randomIndex;
  do{
     randomIndex = Math.floor(Math.random() * quotes.length);
  }while(randomIndex === quoteIndex);

  // 改变颜色
  let colorIndex = Math.floor(Math.random() * colors.length);
  let color = colors[colorIndex];
  document.getElementsByClassName("contain")[0].style.backgroundColor = color;
  document.getElementsByTagName("a")[0].style.color = color;
  document.getElementsByTagName("a")[1].style.color = color;
  document.getElementById("btn-new").style.backgroundColor = color;

  text.innerText = quotes[randomIndex].text;
  author.innerText = quotes[randomIndex].author;
  document.getElementsByClassName("quote-contain")[0].id = "quote-" + randomIndex;


}