const button1= document.querySelector('#btn1');
const button2= document.querySelector('#btn2');
const p1sc =document.querySelector('#p1score');
const p2sc =document.querySelector('#p2score');
const reset = document.querySelector('#reset');
const selectpoint = document.querySelector('#selectpoints');
let score1=0;
let score2=0;
let winningscore=3;
let isgameover =false;
button1.addEventListener('click',function() {
if(!isgameover){
    score1+=1;
    if(score1===winningscore){
        isgameover =true;
        p1sc.classList.add('winner');
        p2sc.classList.add('loser');

    }
    p1sc.textContent=score1;
}
})
button2.addEventListener('click',function() {
    if(!isgameover){
        score2+=1;
    if(score2===winningscore)
    { isgameover =true;
        p2sc.classList.add('winner');
        p1sc.classList.add('loser');
    }
    p2sc.textContent=score2;
    }
 })
 selectpoint.addEventListener('change',function(){
     winningscore=parseInt(this.value);
     reset();
 })
reset.addEventListener('click', resetgame)
function resetgame() {
    isgameover=false;
    score1=0;
    score2=0;
    p1sc.textContent=0;
    p2sc.textContent=0;
    p2sc.classList.remove('winner','loser');
    p1sc.classList.remove('loser','winner');

}
