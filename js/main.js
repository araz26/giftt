/*
  ==========================================
  Custom Scripts v0.8
  ==========================================
*/

/*
  Load up the particles
  particlesJS.load(@dom-id, @path-json, @callback (optional));
*/
particlesJS.load('particles-js', 'js/particles-config.json', function() {
  console.log('callback - particles.js config loaded');
});

/*
  =============================================

  TEST THIS YOURSELF BEFORE SHOWING IT TO THEM

  Also, you'll probably have to change some stuff
  come November so remind me to help you out with
  this in case your messages will last longer
  than October.

  =============================================
*/

// Add messages in single quotation marks here
let messagesArray = [
  'Every day of your life, you spend most of it with me making me the most valuable as you grow older. Happy Birthday!',
  'How can someone look soo close to perfection even right after waking up?',
  'Your snaps are soo cute they make me skip a beat',
  'Waking up in the morning has never been this easy for me.',
  'Waking up in the middle of the night hoping I am right on time to talk to you',
  'No matter what I do, my mind is with you',
  'Every hour with you goes by like its a second, Every second without you feels like an eternity',
  'Your smile is the brightest thing I have ever seen',
  'When you want to stay even when really tired is the best feeling',
  'Waiting for you makes me realize of your importance in my life',
  'Your voice is the sweetest thing ever. I can listen to your voice all day and would still want more of it',
  'I forget what I was about to say when I listen to your amazing voice',
  'Did I ever tell you how close your are to perferction?',
  'Getting to know you was the best choice of my life',
  'Your smile is a treasure that I am always looking for',
  'If you would let me I would wake up at 4 everyday just to get our daily dose of morning chat',
  'If I had the power I would keep every pain away from you',
  'I will hold your hand at every corner of life',
  'You are my everything. I could watch your smile all day long and still ask more of it',
  'I am soo excited to talk to you in the morning that I cannot sleep at night, stay up thinking about it',
  'Being with you gave me some of the most beautiful memories',
  'Maine usko itna daikha // Jitna daikha ja sakta tha // Magar phir bhi do ankhon // Se kitna daikha ja sakta tha',
  'Call is magic or love but just a message from you is enough to lighten my mood and calm my day',
  'Waiting for you is like trying to get out of an endless void, just complete emptiness. ',
  'Your smile brings me smile. Your extended absence worries me',
  'Just want to hold your hand for hours not letting go',
  'You have the best personality and that is what I love the most about you',
  'From talking to you once a day I went to thinking about you all day long really quickly',
  'From never messaging you to cant stop messaging you, idk when I lost my heart to you',
  'Waiting for you makes me realize how incomplete life is without you',
];

function showMessage() {
  // Uncomment the line below and comment the line after it to remove the hardcoded date
  // let currentDate = moment().format("DD-MM-YYYY");
  let currentDate = "02-10-2018";
  // Since the messages will be shown on starting from 2nd October, so...
  let messageIndex = currentDate.substr(0, 2) - 2;
  // If the current date is after October 2nd then show the daily message
  if(currentDate >= "02-10-2018") {
    document.getElementById("message").classList.remove("fadeInDown");
    document.getElementById("message").classList.add("fadeOutUp");
    setTimeout(function() {
      document.getElementById("message").innerHTML = messagesArray[messageIndex];
      document.getElementById("message").classList.remove("fadeOutUp");
      document.getElementById("message").classList.add("fadeInDown");
    }, 1000);
  } else {
    document.getElementById("message").innerHTML = "You'll have to wait till October 2nd to see the messages.";
  }
}
