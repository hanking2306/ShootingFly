 const Emitter = require('Emitter');

cc.Class({
    extends: cc.Component,

    properties: {
        homeScreen: cc.Node,
        settingScreen: cc.Node,
        hintScreen: cc.Node,
        intentScreen: cc.Node,
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
<<<<<<< HEAD
                this.hintScreen.active = false;
=======
                this.intentScreen.active = false;
                this.gameOverScreen.active = false;
>>>>>>> Vuong
                break;
            }
            case 'setting':{
                this.settingScreen.active = true;
                this.homeScreen.active = false;
<<<<<<< HEAD
                this.hintScreen.active = false;
                break;
            }
            case 'hint':{
=======
                this.intentScreen.active = false;
                this.gameOverScreen.active = false;
                break;
            }
            case 'intent':{
                this.intentScreen.active = true;
>>>>>>> Vuong
                this.homeScreen.active = false;
                this.settingScreen.active = false;
                this.gameOverScreen.active = false;
                break;
            }
<<<<<<< HEAD
=======
            case 'gameover':{
                this.gameOverScreen.active = true;
                this.intentScreen.active = false;
                this.homeScreen.active = false;
                this.settingScreen.active = false;
                break;
            }
>>>>>>> Vuong
        }
    },
    start () {

    },

    // update (dt) {},
});