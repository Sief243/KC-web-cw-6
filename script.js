//js isnt java
//facts is up there
alert('مرحباً بك في موقعي الذي سيحسب درجتك!!');
let grade = prompt("اكتب درجتك بالأرقام");
console.log(grade);
if(grade >= 90 && grade<=100){
console.log("لقد حصلت على امتياز 🥳");
} else if(grade >= 80 && grade<90){
    console.log('لقد حصلت على جيد جداً🤩');  
}else if(grade >= 70 && grade<80){
    console.log('لقد حصلت على جيد🙂');
}else if(grade >= 60 && grade<70){
    console.log("لقد حصلت على مقبول😕");
}else if(grade >= 50 && grade<60){
    console.log("لقد حصلت على ضعيف☹️");
}else {
    console.log( "راسب💔")
}
