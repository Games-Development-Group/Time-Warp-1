const SB_WIDTH = 300;
const SB_HEIGHT = 100;
const SB_POSX = 10;
const SB_POSY = 10;

class ScoreBoard {
    constructor(game) {
        this.game = game;
    }
    draw() {
        fill(143, 121, 101);
        stroke(0, 0, 0);
        rect(25, 25, 120, 30, 5, 5, 5, 5);
        fill(0, 0, 0);
        textAlign(LEFT, CENTER);
        textSize(24);
        textStyle(BOLD);
        text("TURN: " + this.game.turn, 25 + 12, 25 + 65 / 4)
        if (this.game.state == "Finished" || this.game.state == "Surrendered") {
            fill(200, 0, 0);
            textSize(24);
            textStyle(BOLD);
            textAlign(CENTER, CENTER);
            text("GAMEOVER", SB_POSX + 200, SB_POSY - 5 + SB_HEIGHT / 4)
        }
    }

    update(game) {
        this.game = game;
    }
}