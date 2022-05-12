$(document).ready(function() {

  // alert("[whatever-little-message-you-want]");

//generate radodom text

let btn = document.getElementById('button1');
let output = document.getElementById('output');
let quote =
[
  'We do not believe if we do not live and work according to our belief.',
  'helklodf  gchgaj agd  gdfjbakgjy fgj xkYW ',
  'gagdadygk d vhjsdhvkjshk dfkjskjfh bfhsgf fdkh',
  'We do not believe if we do not live and work according to our belief.',
  'helklodf  gchgaj agd  gdfjbakgjy fgj xkYW ',
  'gagdadygk d vhjsdhvkjshk dfkjskjfh bfhsgf fdkh',
  'We do not believe if we do not live and work according to our belief.',
  'helklodf  gchgaj agd  gdfjbakgjy fgj xkYW ',
  'gagdadygk d vhjsdhvkjshk dfkjskjfh bfhsgf fdkh',
  'We do not believe if we do not live and work according to our belief.',
  'helklodf  gchgaj agd  gdfjbakgjy fgj xkYW ',
  'gagdadygk d vhjsdhvkjshk dfkjskjfh bfhsgf fdkh',
  'We do not believe if we do not live and work according to our belief.',
  'helklodf  gchgaj agd  gdfjbakgjy fgj xkYW ',
  'gagdadygk d vhjsdhvkjshk dfkjskjfh bfhsgf fdkh',
];

btn.addEventListener('click', function(){
  var randomQuote = quote[Math.floor(Math.random() * quote.length)];
  output.innerHTML = randomQuote;
})

})
