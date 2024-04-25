document.addEventListener('DOMContentLoaded', function () {
  let funfactlist = ["I love tea.", "I'm from D.C.!", "I say I'm from D.C. but I'm actually from Virginia.", "Current favorite song: Lego Ring - Faye Webster", "I'm 5'5.", "My mom met Shaq.", "Go-to boba order: mango pomelo sago", "I had a silver tooth as a kid.", "I took horse riding lessons in 4th grade.", "I ate strawberry pancakes yesterday.", "I've won maybe...one game of chess in my entire life.", "KEEP CLICKING."];


  for (let i = funfactlist.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [funfactlist[i], funfactlist[j]] = [funfactlist[j], funfactlist[i]];
  }

  let diceicon = document.getElementById("dice");
  let rollme = document.getElementById("rollmetext");

  let index = 0;
  diceicon.addEventListener("click", function(){
    rollme.textContent = funfactlist[index];
    index = (index + 1) % funfactlist.length;
  });
});


let diceicon = document.getElementById("dice");

diceicon.addEventListener("click", function(){
diceicon.classList.add("dice");
});

diceicon.addEventListener("animationend", function(){
  diceicon.classList.remove("dice");
  });


/*
let modal = document.getElementById("myModal");



let btn = document.getElementById("navbutton");


let span = document.getElementsByClassName("close")[0];



btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

*/