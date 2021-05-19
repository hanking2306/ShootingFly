const BossType = require('Types').BossType;
const Spawn = require('Spawn');
const Wave = cc.Class({
    name: 'Wave',
    properties: {
        spawn: {
            default: [],
            type: Spawn
        },
    },

});

module.exports = Wave;