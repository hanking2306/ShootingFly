const Emitter = require('Emitter');
cc.Class({
    extends: cc.Component,

    properties: {
        maxHitPoint: 0,
        _hitPoint: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this._hitPoint = this.maxHitPoint;
    },

    onCollisionEnter(other, self) {
        if (other.node.group === 'player_bullet') {
            this.hitPoint -= other.node.getComponent('Bullet').damage;
        }
    },

    die() {
        if(this._hitPoint <= 0) {
            Emitter.instance.emit('enemy_destroy');
            this.node.destroy();
        }
    },

    update(dt) {
        this.die();
    },
});
