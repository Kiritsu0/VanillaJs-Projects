// Variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
      quote: "Be yourself; everyone else is already taken.",
      person: "Oscar Wilde"
    },
    {
      quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      person: "Albert Einstein"
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      person: "Mae West"
    },
    {
      quote: "In three words I can sum up everything I've learned about life: it goes on.",
      person: "Robert Frost"
    },
    {
      quote: "The only way to do great work is to love what you do.",
      person: "Steve Jobs"
    },
    {
      quote: "The best revenge is massive success.",
      person: "Frank Sinatra"
    }
];

const RandomNum = () => {
  let random = Math.floor(Math.random()* quotes.length);
  if ( quotes[random].quote === quote.innerText ) {
    return RandomNum()
  } else {
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
  }
}

btn.addEventListener('click', function() {
    RandomNum()
})