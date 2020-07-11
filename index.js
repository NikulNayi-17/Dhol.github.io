// for the button listnner

for(var i=0;i<=6;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function()
{
  var buttonInnerHtml=this.innerHTML;
  makeSound(buttonInnerHtml);
  buttonAnimation(buttonInnerHtml);

});
}
// for the key listnner
document.addEventListener("keypress",function(event)

{
  makeSound(event.key);
  buttonAnimation(event.key);
});

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
// console.log(this.style.color="white");
function makeSound(key){

    switch (key) {

  case "N": var crash = new Audio("sounds/tom-3.mp3");
           crash.play();
           break;
  case "I": var kick_bass = new Audio("sounds/tom-1.mp3");
            kick_bass.play();
            break;
  case "K": var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
  case "U": var tom_1 = new Audio("sounds/crash.mp3");
            tom_1.play();
            break;
  case "L": var tom_2 = new Audio("sounds/kick-bass.mp3");
             tom_2.play();
            break;
  case "D": var tom_3 = new Audio("sounds/tom-2.mp3");
          tom_3.play();
          break;
  case "M":var tom_4 = new Audio("sounds/tom-4.mp3");
           tom_4.play();
           break;
  default: console.log(buttonInnerHtml);

}}

function buttonAnimation(currentKey){

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  },100);

    }
