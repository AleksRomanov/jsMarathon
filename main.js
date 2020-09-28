const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
}

const buttonsConfig = [
    {
        elButton: document.getElementById('btn-kick'),
        damageMultiplier: 20,
    },
    {
        elButton: document.getElementById('btn-fatality'),
        damageMultiplier: 30,
    },
];


function setupButtons(buttons) {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].elButton.addEventListener('click', function () {
            console.log('KICK!!!');
            changeHP(random(buttons[i].damageMultiplier), character);
            changeHP(random(buttons[i].damageMultiplier), enemy);
        });

    }
}


function renderHPLife(person) {
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressbarHP(person) {
    person.elProgressbar.style.width = person.damageHP + '%'
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

function changeHP(count, person) {
    if (person.damageHP < count) {
        person.damageHP = 0;
        buttonsDisable(buttonsConfig);
        renderHP(person);
        console.log(person.damageHP);
        alert('Бедный' + person.name +'проиграл бой!');

    } else {
        person.damageHP -= count;
        renderHP(person);
    }
}

function random(num) {

    return Math.ceil(Math.random() * num);
}

function init() {
    console.log('Start Game!');
    setupButtons(buttonsConfig);
}

init();
