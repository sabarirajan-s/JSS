

const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const scoreText = document.getElementById("score");

let playerY = 180;
let enemyX = 800;
let enemyY = 0;
let score = 0;

// Player Movement
document.addEventListener("keydown", function(e){

    if(e.key === "ArrowUp"){
        playerY -= 20;
    }

    if(e.key === "ArrowDown"){
        playerY += 20;
    }

    if(playerY < 0)
        playerY = 0;

    if(playerY > 360)
        playerY = 360;

    player.style.top = playerY + "px";
});

// Spawn enemy randomly
function resetEnemy(){

    enemyX = 800;

    enemyY = Math.floor(Math.random() * 361);

    enemy.style.left = enemyX + "px";
    enemy.style.top = enemyY + "px";
}

resetEnemy();



setInterval(function(){

    enemyX -= 8;

    enemy.style.left = enemyX + "px";

    if(enemyX < -40){

        score++;

        scoreText.innerHTML = "Score : " + score;

        resetEnemy();
    }  

},20);