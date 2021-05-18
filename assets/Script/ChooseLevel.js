cc.Class({
    extends: cc.Component,

    properties: {
        homeButton: cc.Button,
        player: {
            default: [],
            type: cc.Prefab,
        },
        level2Button: cc.Button,
        index: 0,
    },

    onLoad () {
        this.homeButton.node.on('click', this.goToHome.bind(this));
        this.level2Button.node.on('click', this.goToLevel2, this);
    },

    setIndex(value){
        this.index = value;
    },

    goToHome(){
        cc.director.loadScene('Menu');
    },
    
    goToLevel2(){
        cc.tween(this.node.getChildByName(this.player[this.index].name))
            .to(0.5, {angle: 30})
            .to(0.5, {scale: 0.4})
            .to(1, {position: cc.v2(this.level2Button.node.x, this.level2Button.node.y)})
            .start();
    },

    start () {
        let player = cc.instantiate(this.player[this.index]);
        player.x = 120;
        player.y = -350;
        player.width = 300;
        player.height = 300;
        this.node.addChild(player);
    },

    // update (dt) {},
});
