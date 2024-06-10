
const num=document.querySelectorAll(".num")
const operator=document.querySelectorAll(".operator")
const previous=document.querySelector(".previous-display")
const current=document.querySelector(".current-display")
const equal=document.querySelector(".equal")


let altekranText=""
let ustekranText=""

num.forEach((number)=>{

number.onclick=()=>{
    // altekranText=number.textContent
    // current.textContent=altekranText

    ekranaHazirlik(number.textContent)
}

})

//!EKRANA HAZIRLIK ISLEMLERI

const ekranaHazirlik=(num)=>{

altekranText=" "
altekranText+=num
updateEkran()



}

//!EKRANDA GOSTERME ISLEMI

const updateEkran=()=>{
    current.textContent=altekranText
}
operator.forEach((op)=>{
op.onclick=()=>{
    islem=op.textContent
}

})