const num=document.querySelectorAll(".num")
const operator=document.querySelectorAll(".operator")
const previous=document.querySelector(".previous-display")
const current=document.querySelector(".current-display")
const equal=document.querySelector(".equal")
const ac=document.querySelector(".ac")


let altekranText=""
let ustekranText=""
let islem=""

num.forEach((number)=>{
    number.onclick=()=>{        
    //    altekranText=number.textContent
    //    current.textContent=altekranText
    // yukarıdaki işlem fonksiyonda yapılamsı için bu şekilde kullanıldı
    ekranaHazirlik(number.textContent)
    }

})

//!EKRANA HAZIRLIK İŞLEMLERİ
const ekranaHazirlik=(num)=>{ 
 
    altekranText +=num
    updateEkran()

}


  //!EKRANDA GÖSTERME İŞLEMLERİ
const updateEkran=()=>{
    current.textContent=altekranText
    if(islem){
    previous.textContent=ustekranText + islem
}else{
    previous.textContent=""
}
}

operator.forEach((op)=>{
    op.onclick=()=>{
        islem=op.textContent
        ustekranText=altekranText
        altekranText=""
        updateEkran()
    }
})


equal.onclick=()=>{
    hesapla()
    updateEkran()
}

const hesapla=()=>{
    switch(islem){
        case "+":
            sonuc=Number(ustekranText)+Number(altekranText);
        break;
        case"-":
        sonuc=ustekranText-altekranText;
        break
        case"x":
        sonuc=ustekranText*altekranText;
        break;
        case"/":
        sonuc=ustekranText/altekranText;
        default:
            break;
    }

    altekranText=sonuc;
    ustekranText=""
    islem="";
}

ac.onclick=()=>{
islem=""
altekranText=""
ustekranText=""
updateEkran()


}