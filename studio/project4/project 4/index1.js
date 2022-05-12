$(document).ready(function() {

  // alert("[whatever-little-message-you-want]");

//button 2 - random template

//button 1 - generate radodom text

let btn = document.getElementById('button1');
let output = document.getElementById('output');
let quote =
[
  'Flowers are blooming brighter than ever before. The sun has begun peeking out of the clouds, and the sweetest breeze wafts around me now that I have you in my life. Nature adores you as much as I do. ',
  'There are not enough words in the English language to describe how beautiful you are. I could learn every language on Earth and still be at a loss for words trying to say how much I love you. ',
  'I love you and I wish there is a way you could just see into my soul and find the depth of passion, tenderness, and love that holds you close to my heart than anyone or anything else.',
  'If I could give you on thing in life, I would give you the ability to see yourself through my eyes, only then would you realize how special you are to me.',
  'Without you, I can’t breathe. You’re my existence and the only definition of my reality. Nothing in this world compares to your love and affection.',
  'In the time that we spent together, you managed to find yourself a very special place in my heart. Nobody else will ever be able to replace you. I love you so much.',
  'You make me feel warm, safe, and loved. You are the blanket that I want to be wrapped around me all the time. I just want to say that I love you and thanks for being there for me all the time.',
  'Excuse me for interrupting your day, but I just want a moment to tell you how awesome you really are!',
  ' I have found someone who makes my soul smile and that someone is you! I’m in love with you and with every passing day, I find myself falling deeper and deeper in love with you.',
  'The day I met you I found my missing piece. You complete me and you make me want to be a better person. I was a little late to be your first, but I want all my lasts to be with you.',
  'Life is worthy and wonderful with parents like you. From the deepest of my heart, I sincerely thank Almighty for showering my life with your presence, your love and affection.',
  'A friendly reminder that you bring so much joy into my life, and I love you for it.',
  '"The best love is the kind that awakens the soul; that makes us reach for more, that plants the fire in our hearts and brings peace to our minds. Thats what I hope to give you forever." - Nicholas Sparks',
  '"A soulmate is someone who understands you like no other, loves you like no other, will be there for you forever, no matter what. They say that nothing lasts forever, but I am a firm believer in the fact that for some, love lives on even after we are gone." - Cecelia Ahern',
  '"I love you not only for what you are, but for what I am when I am with you. I love you not only for what you have made of yourself, but for what you are making of me. I love you for the part of me that you bring out." - Elizabeth Barrett Browning',
  '"Sometimes your nearness takes my breath away; and all the things I want to say can find no voice. Then, in silence, I can only hope my eyes will speak my heart." - Robert Sexton',
];

btn.addEventListener('click', function(){
  var randomQuote = quote[Math.floor(Math.random() * quote.length)];
  output.innerHTML = randomQuote;
})

//button 2 - submit name

const input2 = document.getElementById('button2input');
const button2 = document.getElementById('button2');
const output2 = document.getElementById('button2output');

function submitName (){
  output2.innerHTML = "This is a love message for " + input2.value;
}

button2.addEventListener('click',submitName)


})
