const EnemyType = require('Types').EnemyType;
const AttackType = require('Types').AttackType;
cc.Class({
    extends: cc.Component,

    properties: {
        enemyType: {
            default: EnemyType.Foe0,
            type: EnemyType
        },
        atkType: {
            default: AttackType.Range,
            type: AttackType
        },
        hitPoint: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    },

    start () {

    },

    update (dt) {
        if(this.atkType == AttackType.Range) {

        } else if (this.atkType == AttackType.Melee) {

        }
    },
});
