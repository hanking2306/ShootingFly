const Emitter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        hitPoint: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

    },

    start() {

    },

    onCollisionEnter(other, self) {
        if (other.node.group === 'player_bullet') {
            Emitter.instance.emit('enemy_destroy');
            this.node.destroy();
        }
    },
    update(dt) {

    },
});
