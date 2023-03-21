let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let diceim = document.querySelector('.dice');
let rollldice = document.querySelector('.btn--roll');
let current1 = document.getElementById('current--0');
let current2 = document.getElementById('current--1');
let player1 = document.querySelector('.player--0');
let player2 = document.querySelector('.player--1');
let holdb = document.querySelector('.btn--hold');
let nwebt = document.querySelector('.btn--new');
let finalscore1 = document.getElementById('score--0');
let finalscore2 = document.getElementById('score--1');

let current = 0;
let score = [0,0];
let active = 0;
let activef =0;
score0.textContent =0;
score1.textContent=0;
diceim.classList.add('hidden');

rollldice.addEventListener('click',function(){
    let diceno = Math.trunc(Math.random()*6)+1;
    console.log(diceno);
    diceim.classList.remove('hidden');
    if(diceno==1)   
        diceim.src = 'dice-1.png';
    else if(diceno==2)
        diceim.src= 'dice-2.png';
    else if(diceno==3)
        diceim.src= 'dice-3.png';
    else if(diceno==4)
        diceim.src= 'dice-4.png';    
    else if(diceno==5)
        diceim.src= 'dice-5.png';   
    else
        diceim.src= 'dice-6.png';    
    if(diceno!=1)
    {  current+=diceno;
       if(active ==0)
        current1.textContent= current;
       else
        current2.textContent= current;
    }
    else{
        current=0;
        if(active ==0)
           { current1.textContent= current;
            active=1;
            activef=1;
            player2.classList.add('player--active')
            player1.classList.remove('player--active')
           }
       else
            {current2.textContent= current;
             active=0;
             activef=0;
            player1.classList.add('player--active')
            player2.classList.remove('player--active')
            }
         }
})
holdb.addEventListener('click',function(){
    if(activef == 0)
        {   score[activef]+=current;
            if(score[activef]>=20)
            {
                player1.classList.add('player--winner');
                document.getElementById('name--0').textContent ='WINNER!'
                diceim.classList.add('hidden');
                rollldice.classList.add('hidden');
                holdb.classList.add('hidden');
            }
            finalscore1.textContent = score[activef]
            activef=1;
            current=0;
            active=1;
        }
    else
        {   score[activef]+=current;
            if(score[activef]>=20)
            {
                player2.classList.add('player--winner');
                document.getElementById('name--1').textContent ='WINNER!'
                diceim.classList.add('hidden');
                rollldice.classList.add('hidden');
                holdb.classList.add('hidden');
            }
            finalscore2.textContent = score[activef]
            activef=0;
            current=0;
            active=0;
        }
})
nwebt.addEventListener('click',function(){
    current1.textContent = 0;
    current2.textContent = 0;
    finalscore1.textContent = 0;
    finalscore2.textContent =0;
    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');
    diceim.classList.remove('hidden');
    rollldice.classList.remove('hidden');
    holdb.classList.remove('hidden');
    document.getElementById('name--0').textContent ='PLAYER1';
    document.getElementById('name--1').textContent ='PLAYER2';
     current = 0;
     score = [0, 0];
     active = 0;
     activef =0;
})

