
cc.Class({
    extends: cc.Component,

    properties: {
        bg1: cc.Node,
        bg2: cc.Node,
        round: cc.Node,
        ball: cc.Node,
    },

    onLoad () {

    },

    start () {

    },

    update (dt) {
        this.bg2.y -= 200 * dt;
        this.bg1.y -= 200 * dt;
        if(this.bg1.y <= -1280) {
            this.bg1.y = 1280;
        }
        if(this.bg2.y <= -1280) {
            this.bg2.y = 1280;
        }
<<<<<<< HEAD
        this.button.angle -= 200 * dt;
    },
=======
        this.round.angle -= 200 * dt;
        this.ball.angle += 200 * dt;
    },  
>>>>>>> Vuong
});
