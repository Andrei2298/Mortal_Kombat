alert('Fight...');

const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name:'SUB-ZERO',
    hp:100,
    img:'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['melee'],
    attack() {
        console.log(this.name + ' Fight!')    
    }
};

const player2 = {
    player: 2,
    name: 'SCORPION',
    hp:100,
    img:'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['chains'],
    attack() {
        console.log(this.name + ' Fight!')
    }      
};

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className)
    }
   
    
    return $tag;
}

function createPlayer( character) {
    const $player1 = createElement('div', 'player'+character.player);                               
    const $progressbar = createElement('div', 'progressbar');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $character = createElement ('div', 'character');
    const $img = createElement('img');

    $img.src = character.img;
    $name.textContent = character.name;
    $life.style.width = character.hp + '%';

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
    $player1.appendChild($character);
    $player1.appendChild($progressbar);
    
    return $player1;
}
 const $arena = document.querySelector('.arenas');
$arena.appendChild(createPlayer( player1 ));
$arena.appendChild(createPlayer( player2));

function changeHP(player) {
    const $playerLife = document.querySelector('.player' +player.player +' .life');
    player.hp -=damage () ;
    if (player.hp < 0) {    
        player.hp = 0  
    }
     
    $playerLife.style.width = player.hp + '%';
    
    if (player.hp === 0) {
        const winner = player === player1 ? player2 : player1;
        $arenas.appendChild(playerWin(winner.name));
        $randomButton.disabled = true;
    }
}

function playerWin(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' wins';
    
    return $loseTitle;
}

$randomButton.addEventListener('click', function() {
    console.log('####: Click Random Button');
    changeHP(player1);
    changeHP(player2);
    
}
                              
)

function damage () {
    return  Math.floor(Math.random() * 20) + 1
    
}
