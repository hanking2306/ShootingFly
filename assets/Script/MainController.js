 const Emitter = require('Emitter');

cc.Class({
    extends: cc.Component,

    properties: {
        homeScreen: cc.Node,
        settingScreen: cc.Node,
        introductionScreen: cc.Node,
        gameOverScreen: cc.Node,
    },

    onLoad () {
        Emitter.instance = new Emitter();
        Emitter.instance.registerEvent('changeScreen', this.onTransformScreen.bind(this));
    },
    onTransformScreen(name){
        switch(name){
            case 'home':{
                this.homeScreen.active = true;
                this.settingScreen.active = false;
                this.introductionScreen.active = false;
                this.gameOverScreen.active = false;
                break;
            }
            case 'setting':{
                this.settingScreen.active = true;
                this.homeScreen.active = false;
                this.introductionScreen.active = false;
                this.gameOverScreen.active = false;
                break;
            }
            case 'introduction':{
                this.introductionScreen.active = true;
                this.homeScreen.active = false;
                this.settingScreen.active = false;
                this.gameOverScreen.active = false;
                break;
            }
            case 'gameover':{
                this.gameOverScreen.active = true;
                this.introductionScreen.active = false;
                this.homeScreen.active = false;
                this.settingScreen.active = false;
                break;
            }
        }
    },
    start () {

    },

    // update (dt) {},
});