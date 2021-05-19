const mEmitter = require("Emitter");

cc.Class({
    extends: cc.Component,

    properties: {
        logo: cc.Node,
        bg1: cc.Node,
        bg2: cc.Node,
        pageSpace: cc.PageView,
        settingButton: cc.Button,
        introButton: cc.Button,
        goButton: cc.Button,
        index: 0,
    },

    onLoad() {
        this.settingButton.node.on('click', this.goToSetting.bind(this));
        this.introButton.node.on('click', this.goToIntroduction.bind(this));
        this.goButton.node.on('click', this.goToLevel.bind(this));
    },

    goToSetting() {
        mEmitter.instance.emit('changeScreen', 'setting');
    },

    goToIntroduction() {
        mEmitter.instance.emit('changeScreen', 'introduction');
    },

    dashSpcace(evt) {
        this.index = evt._curPageIdx;
    },

    goToLevel() {
        this.pageSpace.node.children[1].active = false;
        this.settingButton.node.runAction(cc.moveBy(1, cc.v2(-600, 0)));
        this.introButton.node.runAction(cc.moveBy(1, cc.v2(600, 0)));
        cc.tween(this.goButton.node)
            .to(1, { opacity: 0 })
            .start();
        cc.tween(this.logo)
            .to(1, { opacity: 0 })
            .start();
        this.bg1.runAction(cc.moveBy(3, cc.v2(0, -1280 * 3)));
        if (this.bg1.y <= -1250) {
            this.bg1.y = 1280;
        }
        this.bg2.runAction(cc.moveBy(3, cc.v2(0, -1280 * 3)));
        if (this.bg2.y <= -1250) {
            this.bg2.y = 1280;
        }
        setTimeout(() => {
            cc.director.loadScene('ChooseLevel', (()=>{
                let getIndex = cc.director.getScene().getChildByName('Canvas').getChildByName('Level').getComponent('ChooseLevel');
                getIndex.setIndex(this.index);
            }))
        }, 3000);
    },

    start() {

    },

    update(dt) {

    },
});
