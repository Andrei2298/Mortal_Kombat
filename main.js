alert('Fight...');


const SUBZERO = {
    name:'SUB-ZERO',
    hp:100,
    img:'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['melee'],
    attack() {
        console.log(this.name + ' Fight!')    
    }
};

const SCORPION = {
    name: 'SCORPION',
    hp:100,
    img:'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['chains'],
    attack() {
        console.log(this.name + ' Fight!')
    }      
};

function createPlayer(className, character){
    const $player1 = document.createElement('div');                               
    const $progressbar = document.createElement('div');
    const $life = document.createElement('div');
    const $name = document.createElement('div');
    const $character = document.createElement ('div');
    const $img = document.createElement('img');

    $player1.classList.add(className);
    $progressbar.classList.add('progressbar');
    $life.classList.add('life');
    $name.classList.add('name');
    $character.classList.add('character');
    $img.src = character.img;
    $name.textContent = character.name;
    $life.style.width = character.hp + '%';

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
    $player1.appendChild($character);
    $player1.appendChild($progressbar);
    const $arena = document.querySelector('.arenas');
    $arena.appendChild($player1);
}

createPlayer('player1', SUBZERO);
createPlayer('player2', SCORPION);
