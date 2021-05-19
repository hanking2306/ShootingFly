 const Emitter = require('Emitter');

cc.Class({
    extends: cc.Component,

    properties: {
        homeScreen: cc.Node,
        settingScreen: cc.Node,
        introductionScreen: cc.Node,
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
                break;
            }
            case 'setting':{
                this.settingScreen.active = true;
                this.homeScreen.active = false;
                this.introductionScreen.active = false;
                break;
            }
            case 'introduction':{
                this.homeScreen.active = false;
                this.settingScreen.active = false;
                this.introductionScreen.active = true;
                break;
            }
        }
    },
    start () {

    },

    // update (dt) {},
});