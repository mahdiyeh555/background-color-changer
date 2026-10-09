//select elemet 
const purpleBtn = document.querySelector('#purple--color');
const blueBtn= document.querySelector('#blue--color');
const redBtn = document.querySelector('#red--color');
const greenBtn = document.querySelector('#green--color');
const yellowBtn = document.querySelector('#yellow--color');
const tealBtn = document.querySelector('#teal--color');
const randomBtn = document.querySelector('#random')

const color = ['purple','blue','red','green','yellow','teal'];
const colorButtons = [
    purpleBtn,
    blueBtn,
    redBtn,
    greenBtn,
    yellowBtn,
    tealBtn,
]

const getRandomColor = function(){
    return Math.floor(Math.random()*color.length);
    
     
}

//whenclick
colorButtons.forEach(function(btn,index){
    btn.addEventListener('click',function(e){
        e.preventDefault();
        document.body.style.backgroundColor = color[index];
    })
})

randomBtn.addEventListener('click',function(e){
    e.preventDefault();
    document.body.style.backgroundColor = color[getRandomColor()];
})