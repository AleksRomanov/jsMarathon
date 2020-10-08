import Pokemon from "./pokemon.js";
import Actions from "./actions.js";
import random from "./utils.js";
import {pokemons} from "./pokemons.js";


// let generatePokemon = () => pokemons[random(pokemons.length - 1)];
//
//
// const player = generatePokemon();
// const enemy = generatePokemon();
//
// const player1 = new Pokemon({
//     ...player,
//     selectors: 'player1'
// })
//
//
// const player2 = new Pokemon({
//     ...enemy,
//     selectors: 'player2'
// })
//
// let renderNames = (player, enemy) => {
//     let playerName = document.querySelector('#name-player1');
//     let enemyName = document.querySelector('#name-player2');
//     playerName.innerText = player.name;
//     enemyName.innerText = enemy.name;
// };
//
// let renderAvatars = (player, enemy) => {
//     let playerImage = document.querySelector('.player1').querySelector('img');
//     let enemyImage = document.querySelector('.player2').querySelector('img');
//     playerImage.src = player.img;
//     enemyImage.src = enemy.img;
// };
//
// renderNames(player, enemy);
// renderAvatars(player, enemy);

//
// const attacks1 = player1.attacks;
// const attacks2 = player2.attacks;
// const adjustButtons = new Actions({attacks1, attacks2})


class Game {
    constructor() {
        // this.generatePokemon = generatePokemon();
        this.player = this.generatePokemon();
        this.enemy = this.generatePokemon();
        this.attacks1 = this.player.attacks;
        this.attacks2 = this.enemy.attacks;
        // this.createConsole();

        // this.player1();
        // this.player2();
        // this.renderNames(this.player, this.enemy)
        // this.renderAvatars(this.player, this.enemy)
        // this.adjustButtons(this.attacks1, this.attacks2)
    };

    generatePokemon = () => pokemons[random(pokemons.length - 1)];
    //
    //
    //
    //
    player1 = new Pokemon({
        ...this.player,
        selectors: 'player1'
    });
    //
    //
    // player2 = new Pokemon({
    //     ...this.enemy,
    //     selectors: 'player2'
    // });
    //
    // adjustButtons = new Actions({
    //
    // });
    //
    //
    // renderNames = (player, enemy) => {
    //     let playerName = document.querySelector('#name-player1');
    //     let enemyName = document.querySelector('#name-player2');
    //     playerName.innerText = player.name;
    //     enemyName.innerText = enemy.name;
    // };
    //
    // renderAvatars = (player, enemy) => {
    //     let playerImage = document.querySelector('.player1').querySelector('img');
    //     let enemyImage = document.querySelector('.player2').querySelector('img');
    //     playerImage.src = player.img;
    //     enemyImage.src = enemy.img;
    // };

}

const startGame = new Game();
console.log(startGame);





// export {player1, player2};
