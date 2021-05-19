cc.Class({
    extends: cc.Component,

    properties: {
        speed: {
            default: cc.Vec2.ZERO
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
    
    },

    update (dt) {   
        this.node.y += this.speed.y * dt;
    },
});
