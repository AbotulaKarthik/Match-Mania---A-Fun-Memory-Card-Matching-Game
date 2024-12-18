const cards = document.querySelectorAll(".card");

var isFlipped = false;
var firstCard;
var secondCard;
let back = document.querySelector("body")
let score = document.querySelector(".score")
let h3 = document.querySelector(".h3")
let score1 = 0;
cards.forEach((card)=>{
    card.addEventListener("click",flip)
})

function flip(){
    // console.log(this)
    this.classList.add("flip");
    if (!isFlipped){        
        isFlipped = true;
        firstCard = this            // current context of where you are clicking
    }else{
        secondCard = this
        console.log(firstCard)
        console.log(secondCard)
        checkIt();
    }
}

function checkIt(){
    //console.log("checking.....")
    if (firstCard.dataset.image===secondCard.dataset.image){
        success();
    }else{
        fail();
    }
}
function success(){
    score1++;
    back.style.backgroundColor = "green"
    setTimeout(()=>{
        back.style.backgroundColor = "black"
    },900)
    score.style.backgroundColor = "green"
    score.classList.add("shadow")
    h3.style.color = "green"
    console.log("success")
    score.innerText = score1;
    firstCard.removeEventListener('click',flip)
    secondCard.removeEventListener('click',flip)
    reset();
}

function fail(){
    console.log("fail");
    setTimeout(()=>{
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        reset();
    },1000)
    back.style.backgroundColor = "red"
    setTimeout(()=>{
        back.style.backgroundColor = "black"
    },900)
}

function reset(){
    isFlipped = false
    firstCard = null
    secondCard = null
}

function shuffel(){
    cards.forEach((card)=>{
        var index = Math.floor(Math.random()*16) // 0-15
        card.style.order = index;
    })
};
shuffel();