const EnemyType = require('Types').EnemyType;
const Spawn = cc.Class({
    name: 'Spawn',
    properties: {
        enemyType: {
            default: EnemyType.Foe0,
            type: EnemyType
        },
        total: 0,
    },
    ctor () {
        this.spawned = 0;
        this.finished = false;
    },
    spawn () {
        
    }
});

module.exports = Spawn;
