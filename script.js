let parent=document.querySelector('#container')
let grid=document.querySelector('.grid')
let noGrid=document.querySelector('.noGrid')
let black=document.querySelector('.black')
let red=document.querySelector('.red')
let green=document.querySelector('.green')
let boxNum=document.querySelector('.boxSize')
let size;
let measurement;
   do{

           
         measurement=function(){
            size=prompt("enter box sizes between 17-99")
            
        }
       measurement();
       

   }while(!(size>16&&size<100))   
let chosenColor=function (x){
  
    switch(x){
        case 1:
            color="black"
            console.log ("black")
            break;
        case 2:
            color="red"
            console.log ("red")
            break;
        case 3:
            color="green"
            console.log ("green")
            break;       
        default:
            color="blue"

    }
}

chosenColor(2)
black.addEventListener('click',function(e){

    chosenColor(1);

})
red.addEventListener('click',function(e){


    chosenColor(2)
})

green.addEventListener('click',function(e){


    chosenColor(3)
})

function container(){

 let firstInnerCointainer=document.createElement('div')
 firstInnerCointainer.classList.add('div')
    parent.appendChild(firstInnerCointainer)

console.log("first container created")
let i=0;
while (i<=size){
i++
let secondInnercontainer=document.createElement('div')
secondInnercontainer.classList.add('divIn')
firstInnerCointainer.appendChild(secondInnercontainer)
let secondStyle=secondInnercontainer.style;

grid.addEventListener('click',function(e){


secondStyle.setProperty("border","solid black 0.1px")

})
noGrid.addEventListener('click',function(e){

    secondStyle.setProperty("border","solid black 0px")
    
    })

secondInnercontainer.addEventListener('mouseover',function(e){
    
        secondStyle.setProperty("background-color",color)
})

let erase=document.querySelector('.erase')
erase.addEventListener('click',function(e){

    secondStyle.setProperty("background-color","white")

})


}

}

for(i=0;i<size;i++){
    container();


    console.log("yandhi");
    
            }   
        
