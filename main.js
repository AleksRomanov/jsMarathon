const character = {
    name: 'Pikachu',
    defaultHP: 150,
    damageHP: 150,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    changeHP,
    renderHPLife,
    renderProgressbarHP,
    renderHP
}

const enemy = {
    name: 'Charmander',
    defaultHP: 150,
    damageHP: 150,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    changeHP,
    renderHPLife,
    renderProgressbarHP,
    renderHP
}

const buttonsConfig = [
    {
        elButton: document.getElementById('btn-kick'),
        damageMultiplier: 20,
        counter: 0,
        name: 'Thunder Jolt',
        makeActionLog,
        limit: 5,
    },
    {
        elButton: document.getElementById('btn-fatality'),
        damageMultiplier: 40,
        counter: 0,
        name: 'FATALITY!!!',
        makeActionLog,
        limit: 1,
    },
];

function makeActionLog() {
    const consoleLog = document.createElement('p');
    let logsBar = document.getElementById('logs');
    if (this.counter <= this.limit) {
        consoleLog.innerText = `Колличество применений удара "${this.name}" : ${this.counter}. Осталось: ${this.limit - this.counter}`;
    } else {
        consoleLog.innerText = `Вы не можете использовать удар "${this.name}"`;
    }
    logsBar.insertBefore(consoleLog, logsBar.children[0]);
}

function renderButtonActions(btn) {
    btn.elButton.innerText = `${btn.name} (${btn.limit - btn.counter})`;
}

function setupButtons(buttons) {
    for (let i = 0; i < buttons.length; i++) {
        renderButtonActions(buttons[i]);
        buttons[i].elButton.addEventListener('click', function () {
            console.log(this);
            ++buttons[i].counter;

            if (buttons[i].counter <= buttons[i].limit) {
                this.innerText = `${buttons[i].name} (${buttons[i].limit - buttons[i].counter})`;
                console.log('KICK!!!');
                character.changeHP(random(buttons[i].damageMultiplier));
                enemy.changeHP(random(buttons[i].damageMultiplier));
            } else {
                buttons[i].elButton.disabled = true;
            }

            buttons[i].makeActionLog();
        });

    }
}


function renderHPLife() {
    this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressbarHP() {
    this.elProgressbar.style.width = (this.damageHP * 100) / this.defaultHP + '%'
}

function renderHP() {
    this.renderHPLife();
    this.renderProgressbarHP();
}

function buttonsDisable(buttons) {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].elButton.disabled = true;

    }
}

function changeHP(count) {
    const damageCount = Math.ceil((this.defaultHP / 100) * count);
    this.damageHP -= damageCount;
    console.log('HP ' + this.name + this.damageHP);
    console.log('Actual damage: ' + Math.ceil((this.defaultHP / 100) * count));

    if (count > (this.damageHP * 100) / this.defaultHP) {
        this.damageHP = 0;

        if (this.name === character.name) {
            console.log(enemy.name + ' make last hit ' + '(' + damageCount + ') ' + 'to ' + character.name);
        } else {
            console.log(character.name + ' make last hit ' + '(' + damageCount + ') ' + 'to ' + enemy.name);
        }

        console.log('Бедный ' + this.name + ' проиграл бой!');
        buttonsDisable(buttonsConfig);
    }

    if (this.name === character.name) {
        createLog(character, enemy, damageCount);
    } else {
        createLog(enemy, character, damageCount);
    }

    this.renderHP();
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

function createLog(target, person, damage) {
    let logsBar = document.getElementById('logs');
    const consoleLog = document.createElement('p');
    consoleLog.innerText = generateLog(target, person, damage);
    logsBar.insertBefore(consoleLog, logsBar.children[0])
}

function generateLog(firstOpponent, secondOpponent, damage) {
    const logs = [
        `${firstOpponent.name} вспомнил что-то важное, но неожиданно ${secondOpponent.name}, не помня себя от испуга, ударил в предплечье врага. -${damage}, [${firstOpponent.damageHP}/${firstOpponent.defaultHP}]`, // -12, [88/100]
        `${firstOpponent.name} поперхнулся, и за это ${secondOpponent.name} с испугу приложил прямой удар коленом в лоб врага. -${damage}, [${firstOpponent.damageHP}/${firstOpponent.defaultHP}]`,
        `${firstOpponent.name} забылся, но в это время наглый ${secondOpponent.name}, приняв волевое решение, неслышно подойдя сзади, ударил. -${damage}, [${firstOpponent.damageHP}/${firstOpponent.defaultHP}]`,
        `${firstOpponent.name} пришел в себя, но неожиданно ${secondOpponent.name} случайно нанес мощнейший удар. -${damage}, [${firstOpponent.damageHP}/${firstOpponent.defaultHP}]`,
        `${firstOpponent.name} поперхнулся, но в это время ${secondOpponent.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. -${damage}, [${firstOpponent.damageHP}/${firstOpponent.defaultHP}]`,
        `${firstOpponent.name} удивился, а ${secondOpponent.name} пошатнувшись влепил подлый удар. -${damage}, [${firstOpponent.damageHP}/${firstOpponent.defaultHP}]`,
        `${firstOpponent.name} высморкался, но неожиданно ${secondOpponent.name} провел дробящий удар. -${damage}, [${firstOpponent.damageHP}/${firstOpponent.defaultHP}]`,
        `${firstOpponent.name} пошатнулся, и внезапно наглый ${secondOpponent.name} беспричинно ударил в ногу противника -${damage}, [${firstOpponent.damageHP}/${firstOpponent.defaultHP}]`,
        `${firstOpponent.name} расстроился, как вдруг, неожиданно ${secondOpponent.name} случайно влепил стопой в живот соперника. -${damage}, [${firstOpponent.damageHP}/${firstOpponent.defaultHP}]`,
        `${firstOpponent.name} пытался что-то сказать, но вдруг, неожиданно ${secondOpponent.name} со скуки, разбил бровь сопернику. -${damage}, [${firstOpponent.damageHP}/${firstOpponent.defaultHP}]`
    ];
    return logs[random(logs.length - 1)];
}

function createLogsBar() {
    const logBlock = document.createElement('div');
    const gameArea = document.querySelector('html');
    gameArea.appendChild(logBlock).setAttribute('id', 'logs');
}

function init() {
    console.log('Start Game!');
    character.renderHP();
    enemy.renderHP();
    setupButtons(buttonsConfig);
    createLogsBar();
}

init();
