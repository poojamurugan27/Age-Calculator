// Age.js
let userInput=document.getElementById("date");
userInput.max=new Date().toISOString().split("T")[0];
let result=document.getElementById("result");
let photodis=document.getElementById("photo");

function calculateAge() {
    let birthDate=new Date(userInput.value);

    let d1=birthDate.getDate();
    let m1=birthDate.getMonth()+1;
    let y1=birthDate.getFullYear();

    let today=new Date();

    let d2=today.getDate();
    let m2=today.getMonth()+1;
    let y2=today.getFullYear();

    let d3,m3,y3;
    y3=y2-y1;
    if(m2>=m1) {
        m3=m2-m1;
    } else {
        y3--;
        m3=12+m2-m1;
    }
    if(d2>=d1) {
        d3=d2-d1;
    } else {
        m3--;
        d3=getDaysInMonth(y1,m1)+d2-d1;
    }
    if(m3<0) {
        m3=11;
        y3--;
    }
    result.innerHTML=`You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old!`;

    if(y3>=0 && y3<=3) {
        photodis.src="images/age1-4.png";
        photodis.width = "400"; 
        photodis.height = "400";
    } else if(y3>=4 && y3<=7) {
        photodis.src="images/age4-8.png";
        photodis.width = "300"; 
        photodis.height = "600";
        photodis.style.marginTop = "-80%";
    } else if(y3>=7 && y3<=14) {
        photodis.src="images/age10-18.png";
        photodis.width = "200"; 
        photodis.height = "400";
        photodis.style.marginTop = "-70%";
        photodis.style.marginLeft = "130%";
    } else if(y3>=14 && y3<=18) {
        photodis.src="images/age15-18.png";
        photodis.width = "300"; 
        photodis.height = "400";
    } else if(y3>=19 && y3<=23) {
        photodis.src="images/age19-23.png";
        photodis.width = "300"; 
        photodis.height = "400";
    } else if(y3>=24 && y3<=45) {
        photodis.src="images/age24-27.png";
        photodis.width = "350"; 
        photodis.height = "450";
    } else if(y3>=46 && y3<=60) {
        photodis.src="images/40-50.png";
        photodis.width = "350"; 
        photodis.height = "400";
        photodis.style.marginTop = "-70%";
    } else {
        photodis.src="images/60-70.png";
        photodis.width = "350"; 
        photodis.height = "400";
    }
}

function getDaysInMonth(year,month) {
    return new Date(year,month,0).getDate();
}
