const myDrums = document.querySelectorAll(".drum")

for(i=0; i < myDrums.length; i++){
    myDrums[i].addEventListener("click", function(){
    this.style.color = "white"
    })
}


// var aduio = new Audio("sounds/crash.mp3")
// aduio.play()