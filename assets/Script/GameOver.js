const mEmitter = require("Emitter");

cc.Class({
    extends: cc.Component,

    properties: {
        loseGame: cc.Node,
        homeButton: cc.Button,
    },

    onLoad() {
        this.homeButton.node.on('click', this.goToHome.bind(this));
        cc.tween(this.loseGame)
            .repeatForever(
                cc.tween(this.loseGame)
                    .to(0.5, { opacity: 0 })
                    .to(0.5, { opacity: 255 })
            )   
            .start()
    },

    goToHome(){
        mEmitter.instance.emit('changeScreen', 'home');
    },

    start() {

    },

    // update (dt) {},
});
