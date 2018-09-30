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
  'dolor sit amet',
  'consectetur adipiscing'
];

function showMessage() {
  // Uncomment the line below and comment the line after it to remove the hardcoded date
  let currentDate = moment().format("DD-MM-YYYY");
  // let currentDate = "02-10-2018";
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
