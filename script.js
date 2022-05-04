'use strict';

const score0=document.querySelector('#score--0');
const score1=document.querySelector('#score--1');
const current0=document.querySelector('#current--0');
const current1=document.querySelector('#current--1');

let current_0=0;
let current_1=0;
let score_0=0;
let score_1=0;

let score0Hold=0;
let score1Hold=0;

const player0 =document.querySelector('.player--0');
const player1 =document.querySelector('.player--1');

const player_active=document.querySelector('.player--active');

const dice_img=document.querySelector('.dice');

const btn_new=document.querySelector('.btn--new');
const btn_roll=document.querySelector('.btn--roll');
const btn_hold=document.querySelector('.btn--hold');
score0.textContent=score_0;
score1.textContent=score_1;

dice_img.classList.add("hidden");

btn_roll.addEventListener('click',function(){

    let dice_number= Math.trunc(Math.random()*6)+1;
    const dice="dice-" + dice_number + ".png";
    dice_img.src=dice;
    dice_img.classList.remove("hidden");

    if(player0.classList.contains("player--active")){

        if(dice_number!==1){
            current_0+=dice_number;
            current0.textContent=current_0;

        }else{
            score0.textContent=score0Hold;
            current0.textContent=0;
            current_0=0;
            player0.classList.remove("player--active");
            player1.classList.add("player--active");

        }

    }else if(player1.classList.contains("player--active")){
        if(dice_number!==1){
            current_1+=dice_number;
            current1.textContent=current_1;

        }else{
            current1.textContent=0;
            score1.textContent=score1Hold;
            current_1=0;
            player0.classList.add("player--active");
            player1.classList.remove("player--active");

        }
    }
});



btn_hold.addEventListener('click',function(){

        if(player0.classList.contains("player--active") ){

            score0Hold+=current_0;
            score0.textContent=score0Hold;
            current_0=0;
            current0.textContent=0;
            player0.classList.remove("player--active");
            player1.classList.add("player--active");
            if(score0Hold>=100){
                player0.classList.add("player--winner");
                player0.classList.remove("player--active");
                player1.classList.remove("player--active");
                dice_img.classList.add("hidden");

            }
        }else if(player1.classList.contains("player--active" )){
            
        score1Hold+=current_1;
        score1.textContent=score1Hold;
        current_1=0
        current1.textContent=0;
        player0.classList.add("player--active");
        player1.classList.remove("player--active");
        if(score0Hold>=100){     
            player1.classList.add("player--winner");
            player1.classList.remove("player--active");
            player0.classList.remove("player--active");
            dice_img.classList.add("hidden");

         }
        }

});

btn_new.addEventListener('click',function(){
    player0.classList.add("player--active");
    player1.classList.remove("player--active");
    player0.classList.remove("player--winner");
    player1.classList.remove("player--winner");  
    current_0=0;
    current_1=0;
    score0Hold=0;
    score1Hold=0;
    score1.textContent=0;
    score0.textContent=0;
    current0.textContent=0;
    current1.textContent=0;

    dice_img.classList.add("hidden");


});

