const Enemy = require('Enemy')
cc.Class({
    extends: Enemy,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
    },
    
    onEnable() {
        this.schedule(this.attack, 3);
    },
    
    onDisable() {
        this.unschedule();
    },

    onCollisionEnter() {

    },

    attack() {
        let lastPos = this.node.y;
        cc.tween(this.node)
            .to(0.5, {y: -600})
            .to(0.5, {y: lastPos})
            .start();
    }

    // update (dt) {},
});
