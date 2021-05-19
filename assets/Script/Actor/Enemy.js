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
            this.node.destroy();
        }
    },
    update(dt) {

    },
});
