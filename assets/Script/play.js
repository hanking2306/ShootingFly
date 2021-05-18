// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        index: 0,
        player: {
            default: [],
            type: cc.Prefab,
        }
    },

    setIndex(value){
        this.index = value;
    },

    onLoad () {
        
    },

    
    

    start () {
        cc.log(this.index);
        let player = cc.instantiate(this.player[this.index]);
        player.width = 100;
        player.height = 100;
        this.node.addChild(player);
    },

    // update (dt) {},
});
