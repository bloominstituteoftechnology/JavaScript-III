// this code is not dry. it can be done in fewer lines
// this code was just for fun;
// it can be improved to a better game, ;)
window.onload=function(){
    sagatWin = document.querySelector("#congrat");
    let score = 0;
    span1 = document.querySelector("#span1");
    attackSagat = document.querySelector("#AttackSagat");
    Rio = document.querySelector(".Rio");
    attackSagat.addEventListener("click",function(){
        span1.innerHTML = score++;
    
            if(score === 10){
                sagatWin.innerHTML= "You win the game,hail to the almighty Sagat";
                congrat.style.backgroundColor ="red";
            }
        let one = Math.floor(Math.random()*100);
        let two = Math.floor(Math.random()*240);
        let three = Math.floor(Math.random()*1);
        let rgb = 'rgb(' + one + ',' + two + ',' + three + ')';
        Rio.style.backgroundColor = rgb;

    })
    
    span2 = document.querySelector("#span2");
    defendSagat = document.querySelector("#defendSagat");
    sagat = document.querySelector(".Sagat");
    defendSagat.addEventListener("click",function(){
        span2.innerHTML = score--;
    })
    let scoreRio = 0;
    attackRio = document.querySelector("#attackRio");
    congrat = document.querySelector("#congrat");
    attackRio.addEventListener("click",function(){
        span2.innerHTML = scoreRio++;
        let one = Math.floor(Math.random()*100);
        let two = Math.floor(Math.random()*240);
        let three = Math.floor(Math.random()*1);
        let rgb = 'rgb(' + one + ',' + two + ',' + three + ')';
        sagat.style.backgroundColor = rgb;
    })
    defendRio = document.querySelector("#defendRio");
    defendRio.addEventListener("click",function(){
        span1.innerHTML = score--;

    })
    
    
    reset = document.querySelector("#reset");
    reset.addEventListener("click",function(){
        score = scoreRio = 0;
        span1.textContent = 0;
        span2.textContent =0;
        sagaWin.innerHTML.style.display = "<div> </div>";
    })
}