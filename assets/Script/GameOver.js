const mEmitter = require("Emitter");

cc.Class({
    extends: cc.Component,

    properties: {
        loseGame: cc.Node,
        homeButton: cc.Button,
        levelLabel: cc.Label,
        waveLabel: cc.Label,
        level: 0,
        wave: 0,
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

    setLevel(value){
        this.level = value;
    },

    setWave(value){
        this.value = value;
    },

    goToHome(){
        mEmitter.instance.emit('changeScreen', 'home');
    },

    start() {
        this.levelLabel.string = "Level " + this.level;
        this.waveLabel.string = this.wave;
    },

    // update (dt) {},
});