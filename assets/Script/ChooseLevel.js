const mEmitter = require("./Emitter");

cc.Class({
    extends: cc.Component,

    properties: {
        homeButton: cc.Button,
        player: cc.Node,
        atlas: cc.SpriteAtlas,
        level1Button: cc.Button,
        level2Button: cc.Button,
        level3Button: cc.Button,
        index: 0,
    },

    onLoad() {
        this.homeButton.node.on('click', this.goToHome.bind(this));
        this.level1Button.node.on('click', this.goToLevel1, this);
        this.level2Button.node.on('click', this.goToLevel2, this);
        this.level3Button.node.on('click', this.goToLevel3, this);
    },

    setIndex(value) {
        this.index = value;
    },

    goToHome() {
        // this.player.runAction(cc.moveTo(2, cc.v2(0, 1000)));
        cc.director.loadScene('Menu', (() => {
            mEmitter.instance.emit('changeScreen', 'home');
            let getIndex = cc.director.getScene().getChildByName('Canvas').getChildByName('HomeNode').getComponent('Home');
            getIndex.setIndex(this.index);
        }));
    },

    goToLevel1() {
        this.level1Button.interactable = false;
        this.player.runAction(cc.sequence(
            cc.rotateTo(0.5, 335-180),
            cc.spawn(
                cc.scaleTo(1, 0.8),
                cc.moveTo(1, cc.v2(this.level1Button.node.x, this.level1Button.node.y))
            ),
            cc.rotateTo(1, 0)
        ));
        this.level2Button.interactable = true;
    },

    goToLevel2() {
        this.level2Button.interactable = false;
        this.player.runAction(cc.sequence(
            cc.rotateTo(0.5, 335),
            cc.spawn(
                cc.scaleTo(1, 0.4),
                cc.moveTo(1, cc.v2(this.level2Button.node.x, this.level2Button.node.y))
            ),
            cc.rotateTo(1, 0)
        ));
    },

    goToLevel3() {
        this.level3Button.interactable = false;
        this.player.runAction(cc.sequence(
            cc.rotateTo(0.5, 100),
            cc.spawn(
                cc.scaleTo(1, 0.2),
                cc.moveTo(1, cc.v2(this.level3Button.node.x, this.level3Button.node.y))
            ),
            cc.rotateTo(1, 0)
        ));
    },


    start() {
        this.player.getComponent(cc.Sprite).spriteFrame = this.atlas.getSpriteFrame('space' + this.index);
        this.player.y = 1000;
        cc.tween(this.player)
            .to(0.1, { angle: 180 })
            .to(2, { position: cc.v2(this.level1Button.node.x, this.level1Button.node.y)})
            .to(1.5, { angle: 360 })
            .start();
    },

    // update (dt) {},
});
