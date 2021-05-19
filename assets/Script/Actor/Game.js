const Emitter = require('Emitter');
cc.Class({
    extends: cc.Component,
    properties: {
        index: 0,
        player: {
            default: [],
            type: cc.Prefab,
        }
    },



    onLoad () {
        Emitter.instance = new Emitter();
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
    },

    
    setIndex(value){
        this.index = value;
    },

    start () {
        cc.log(this.index);
        let player = cc.instantiate(this.player[this.index]);
        player.width = 100;
        player.height = 100;
        this.node.addChild(player);
    },

    // update (dt) {},
});
