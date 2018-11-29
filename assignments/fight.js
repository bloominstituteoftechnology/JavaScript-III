// this code is not dry. it can be done in fewer lines
// this code was just for fun;
// it can be improved to a better game, ;)
window.onload=function(){
    let score = 0;
    span1 = document.querySelector("#span1");
    attackSagat = document.querySelector("#AttackSagat");
    Rio = document.querySelector(".Rio");
    attackSagat.addEventListener("click",function(){
        span1.innerHTML = score++;
        Rio.style.backgroundColor = "red";
        let one = Math.floor(Math.random()*100);
        let two = Math.floor(Math.random()*240);
        let three = Math.floor(Math.random()*1);
        let rgb = 'rgb(' + one + ',' + two + ',' + three + ')';
        Rio.style.backgroundColor = rgb;
        
    })
    let scoreSagat =0;
    span2 = document.querySelector("#span2");
    defendSagat = document.querySelector("#defendSagat");
    sagat = document.querySelector(".Sagat");
    defendSagat.addEventListener("click",function(){
        span2.innerHTML = scoreSagat --;
        sagat.style.backgroundColor= "yellow";
         let one = Math.floor(Math.random()*10);
        let two = Math.floor(Math.random()*200);
        let three = Math.floor(Math.random()*60);
        let rgb = 'rgb(' + one + ',' + two + ',' + three + ')';
        sagat.style.backgroundColor = rgb;
    })
    let scoreRio = 0;
    attackRio = document.querySelector("#attackRio");
    congrat = document.querySelector("#congrat");
    attackRio.addEventListener("click",function(){
        span2.innerHTML = scoreRio++;
    })
    let scoreRandom = 0;
    defendRio = document.querySelector("#defendRio");
    defendRio.addEventListener("click",function(){
        span1.innerHTML = scoreRandom--;
        
    })
}