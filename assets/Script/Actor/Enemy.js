const Emitter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        hitPoint: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        
    },

    onCollisionEnter(other, self) {
        if (other.node.group === 'player') {
            this.hitPoint -= other.node.getComponent('Bullet').damage;
        }
    },

    die() {
        if(this.hitPoint <= 0) {
            Emitter.instance.emit('enemy_destroy');
            this.node.destroy();
        }
    },

    update(dt) {
        this.die();
    },
});
