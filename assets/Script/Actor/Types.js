const BossType = cc.Enum({
    Demon: -1,
    SkeletonKing: -1
});

const EnemyType = cc.Enum({
    Foe0: -1,
    Foe1: -1,
    Boss1: -1,
    Boss2: -1
});
const ProjectileType = cc.Enum({
    Laser: -1
});
const AttackType = cc.Enum({
    Range: -1,
    Melee: -1
});

module.exports = {
    BossType,
    EnemyType,
    AttackType,
    ProjectileType
};