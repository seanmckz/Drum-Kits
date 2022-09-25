const myDrums = document.querySelectorAll(".drum")

for(i=0; i < myDrums.length; i++){
    myDrums[i].addEventListener("click", function(){
        alert("button has been clicked")
    })
}