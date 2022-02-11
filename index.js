const box1=document.querySelector(".box1")
const box2=document.querySelector(".box2")
const div=document.querySelector("div")
div.style.backgroundColor="red"
div.style.width="50px"
div.style.height="50px"
const btn=document.querySelector("#btn")
btn.onclick=()=>{
    box1.style.backgroundColor="green"
    box1.style.width="150px"
    box1.style.height="150px"
}
const title=document.querySelector(".title")
title.style.fontWeight="normal"
const subtext=document.querySelector(".subtext")
subtext.style.fontWeight="bold"
const bold1=document.querySelector('.bold1')
const bold2=document.querySelector('#bold2')
const text=bold1.textContent
bold1.textContent=bold2.textContent
bold2.textContent=text

const coolme=document.querySelector('#cool')
coolme.style.padding='20px 15px'
coolme.style.backgroundColor='indigo'
coolme.style.color="white"
coolme.style.borderRadius='50px'
const leftbtn=document.querySelector("section:nth-of-type(4) button:nth-of-type(1)")
const centerbtn=document.querySelector("section:nth-of-type(4) button:nth-of-type(2)")
const righttbtn=document.querySelector("section:nth-of-type(4) button:nth-of-type(3)")
const pText=document.querySelector("#align")

leftbtn.onclick=()=>{
    pText.style.textAlign="left"
}
righttbtn.onclick=()=>{
    pText.style.textAlign="right"
}
centerbtn.onclick=()=>{
    pText.style.textAlign="center"
}
const colorbtn=document.querySelector("section:nth-of-type(5) button:nth-of-type(1)")
colorbtn.onclick=()=>{
    colorbtn.style.backgroundColor="blue"
}
const imput=document.querySelector("input")
const button=document.querySelector("section:nth-of-type(6) button:nth-of-type(1)")
const img=document.querySelector("img")
button.onclick=()=>{
img.width = imput.value
}
const increment=document.querySelector(".increment")
const decrement=document.querySelector(".decrement")
let count=document.querySelector(".count")
const box=document.querySelector(".box")
box.style.height="100px"
box.style.width="100px"
box.style.backgroundColor="red"
const hide=document.querySelector(".hide")
const circle=document.querySelector(".circle")
const small=document.querySelector(".small")
hide.onclick=()=>{
    box.style.display="none"
}
circle.onclick=()=>{
    box.style.borderRadius="50px"
}
small.onclick=()=>{
    box.style.height="20px"
    box.style.width="20px"
}
