const mEmitter = require("./Emitter");

cc.Class({
    extends: cc.Component,

    properties: {
        homeButton: cc.Button,
        player: cc.Node,
        atlas: cc.SpriteAtlas,
        level2Button: cc.Button,
        index: 0,
    },

    onLoad() {
        this.homeButton.node.on('click', this.goToHome.bind(this));
        this.level2Button.node.on('click', this.goToLevel2, this);
    },

    setIndex(value) {
        this.index = value;
    },

    goToHome() {
        cc.director.loadScene('Menu', (() => {
            mEmitter.instance.emit('changeScreen', 'home');
        }));
    },

    goToLevel2() {
        this.player.runAction(cc.sequence(
            cc.rotateTo(0.5, 335),
            cc.spawn(
                cc.scaleTo(1, 0.3),
                cc.moveTo(1, cc.v2(this.level2Button.node.x, this.level2Button.node.y))
            )
        ));
    },

    start() {
        this.player.getComponent(cc.Sprite).spriteFrame = this.atlas.getSpriteFrame('space' + this.index);
        this.player.y = 1000;
        cc.tween(this.player)
            .to(0.1, { angle: 180 })
            .to(2, { position: cc.v2(120, -350) })
            .to(1.5, { angle: 360 })
            .start();
    },

    // update (dt) {},
});
