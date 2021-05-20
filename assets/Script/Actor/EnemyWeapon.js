// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

// cc.Class({
//     extends: cc.Component,

//     properties: {
//         bullet: {
//             default: null,
//             type: cc.Prefab
//         },
//         interval: 0.1
//     },
//     onEnable() {
//         this.schedule(this.fire, this.interval);
//     },
//     fire() {
//         let newBullet = cc.instantiate(this.bullet);
//         this.node.addChild(newBullet);
//     }
//     // update (dt) {},
// });
cc.Class({
    extends: cc.Component,

    properties: {
        bullet: {
            default: null,
            type: cc.Prefab
        },
        interval: 2
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    onEnable() {
        this.schedule(this.fire, this.interval);
    },

    onDisable() {
        this.unschedule(this.fire);
    },
    getRandom(min, max) {
        return Math.random() * (max - min) + min;
    },
    fire() {
        let bulletPos = this.node.convertToWorldSpaceAR(new cc.Vec2(0, 0));
        this.add(bulletPos);
        this.interval = this.getRandom(1, 20);
    },

    add(bulletPos){
        let bulletNode = cc.instantiate(this.bullet);
        bulletNode.active = true;
        bulletPos.subSelf(cc.Canvas.instance.node.position);
        bulletNode.position = bulletPos;
        bulletNode.parent = cc.Canvas.instance.node;
    },
    // update (dt) {},
});