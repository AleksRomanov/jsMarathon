const character = {
    name: 'Pikachu',
    defaultHP: 150,
    damageHP: 150,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    changeHP: changeHP,
}

const enemy = {
    name: 'Charmander',
    defaultHP: 150,
    damageHP: 150,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    changeHP: changeHP,
}

const buttonsConfig = [
    {
        elButton: document.getElementById('btn-kick'),
        damageMultiplier: 20,
    },
    {
        elButton: document.getElementById('btn-fatality'),
        damageMultiplier: 40,
    },
];


function setupButtons(buttons) {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].elButton.addEventListener('click', function () {
            console.log('KICK!!!');
            character.changeHP(random(buttons[i].damageMultiplier));
            enemy.changeHP(random(buttons[i].damageMultiplier));
        });

    }
}


function renderHPLife(person) {
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressbarHP(person) {
    person.elProgressbar.style.width = (person.damageHP * 100) / person.defaultHP + '%'
}

function renderHP(person) {
    renderHPLife(person);
    renderProgressbarHP(person);
}

function buttonsDisable(buttons) {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].elButton.disabled = true;

    }
}

function changeHP(count) {
    if (count > (this.damageHP * 100) / this.defaultHP) {
        this.damageHP = 0;
        buttonsDisable(buttonsConfig);
        renderHP(this);
        console.log(this.damageHP);
        alert('Бедный ' + this.name + ' проиграл бой!');

    } else {
        this.damageHP -= count;
        renderHP(this);
    }
}

function random(num) {

    return Math.ceil(Math.random() * num);
}

function init() {
    console.log('Start Game!');
    renderHP(character);
    renderHP(enemy);
    setupButtons(buttonsConfig);
}

init();
