var playerInfo = 
    {
        x: 0,
        y: 0,
        step: 10,
        width: 20,
        height: 20,
        score: 0,
        lives: 3,
        gameOver: false
    };

var object = 
{
    x: Math.random() * gameCanvas.width,
    y: Math.random() * gameCanvas.height,
    width: 20,
    height: 20,
    alive: true
}
// Esse arquivo é o fluxo do jogo ao carregar a página;
const _game = () => 
    {
        let gCanvas = document.getElementById("gameCanvas");
        let gContext = gCanvas.getContext("2d");
        frameGen(gContext,playerInfo);
        gCanvas.addEventListener("click", () => gCanvas.focus());
        gCanvas.addEventListener("keypress", (event) => 
            {
                if (event.key === "w") 
                    {   
                        if (playerInfo.y - playerInfo.step > -1)
                            playerInfo.y -= playerInfo.step;
                    }
                else if (event.key === "s") 
                    {
                        if (playerInfo.y + playerInfo.step < gameCanvas.width)
                            playerInfo.y += playerInfo.step;
                    }
                else if (event.key === "a") 
                    {
                        if (playerInfo.x - playerInfo.step > -1)
                            playerInfo.x -= playerInfo.step;
                    }
                else if (event.key === "d") 
                    {
                        if (playerInfo.x + playerInfo.step < gameCanvas.width)
                            playerInfo.x += playerInfo.step;
                    };
            });
            newFrame();
    };

// Colisão:
const checkPlayerColision = (playerInfo, object) => 
    {
        if (playerInfo.x == object.x && playerInfo.y == object.y)
            return true;
        return false;
    };



// Renderização de tela:
const newFrame = () => 
    {
        let gCanvas = document.getElementById("gameCanvas");
        let gContext = gCanvas.getContext("2d");
        frameClear(gContext, gCanvas);
        frameGen(gContext, playerInfo);
        requestAnimationFrame(newFrame);
    };

const frameClear = (gameContext, gameCanvas) => 
    {
            gameContext.fillStyle = "white";
            let width = gameCanvas.width;
            let height = gameCanvas.height;
            gameContext.fillRect(0, 0, width, height);    
    };
const frameGen = (gameContext, objectInfo) => 
    {
        gameContext.fillStyle = "blue";
        let x = objectInfo.x;
        let y = objectInfo.y;
        gameContext.fillRect(x, y, 10, 10);
    };

// Início:
window.onload = _game;