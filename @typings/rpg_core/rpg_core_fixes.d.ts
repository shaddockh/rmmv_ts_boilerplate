declare interface AudioDefinition {
    name: string;
    pitch?: number;
    pan?: number;
    volume?: number;
}
declare const enum ItemType {
    Regular = 1,
    Key = 2,
    HiddenA = 3,
    HiddenB = 4
}
declare const enum MoveType {
    Fixed = 0,
    Random = 1,
    Approach = 2,
    Custom = 3
}
declare interface TilingSprite {
    /**
     * The origin point of the tiling sprite for scrolling.
     *
     * @property origin
     * @type Point
     */
    origin: Point;
    _frame: Rectangle;
    spriteId: number;
}

interface Game_Event {
    _moveType: MoveType;
}

declare interface Action {
    conditionParam1: number;
    conditionParam2: number;
    conditionType: number;
    rating: number;
    skillId: number;
}

declare interface AttackMotion {
    type: number;
    weaponImageId: number;
}

declare interface CommonEventList {
    code: number;
    indent: number;
    parameters: any[];
}

declare interface Conditions {
    actorHp: number;
    actorId: number;
    actorValid: boolean;
    enemyHp: number;
    enemyIndex: number;
    enemyValid: boolean;
    switchId: number;
    switchValid: boolean;
    turnA: number;
    turnB: number;
    turnEnding: boolean;
    turnValid: boolean;
}

declare interface Damage {
    critical: boolean;
    elementId: number;
    formula: string;
    type: number;
    variance: number;
}
declare interface DropItem {
    dataId: number;
    denominator: number;
    kind: number;
}

declare interface Effect {
    code: number;
    dataId: number;
    value1: number;
    value2: number;
}

declare interface Learning {
    level: number;
    meta: { [index: string]: any };
    note: string;
    skillId: number;
}

declare interface List {
    code: number;
    indent: number;
    parameters: any[];
}

declare interface Member {
    enemyId: number;
    x: number;
    y: number;
    hidden: boolean;
}

declare interface Page {
    conditions: Conditions;
    list: List[];
    span: number;
}

declare interface SystemMessages {
    actionFailure: string;
    actorDamage: string;
    actorDrain: string;
    actorGain: string;
    actorLoss: string;
    actorNoDamage: string;
    actorNoHit: string;
    actorRecovery: string;
    alwaysDash: string;
    bgmVolume: string;
    bgsVolume: string;
    buffAdd: string;
    buffRemove: string;
    commandRemember: string;
    counterAttack: string;
    criticalToActor: string;
    criticalToEnemy: string;
    debuffAdd: string;
    defeat: string;
    emerge: string;
    enemyDamage: string;
    enemyDrain: string;
    enemyGain: string;
    enemyLoss: string;
    enemyNoDamage: string;
    enemyNoHit: string;
    enemyRecovery: string;
    escapeFailure: string;
    escapeStart: string;
    evasion: string;
    expNext: string;
    expTotal: string;
    file: string;
    levelUp: string;
    loadMessage: string;
    magicEvasion: string;
    magicReflection: string;
    meVolume: string;
    obtainExp: string;
    obtainGold: string;
    obtainItem: string;
    obtainSkill: string;
    partyName: string;
    possession: string;
    preemptive: string;
    saveMessage: string;
    seVolume: string;
    substitute: string;
    surprise: string;
    useItem: string;
    victory: string;
}

declare interface Terms {
    basic: string[];
    commands: (null | string)[];
    params: string[];
    messages: SystemMessages;
}
declare interface TestBattler {
    actorId: number;
    equips: number[];
    level: number;
}
declare interface Timing {
    flashColor: number[];
    flashDuration: number;
    flashScope: number;
    frame: number;
    se: AudioDefinition;
}

declare interface Trait {
    code: number;
    dataId: number;
    value: number;
}

declare interface Vehicle {
    bgm: AudioDefinition;
    characterIndex: number;
    characterName: string;
    startMapId: number;
    startX: number;
    startY: number;
}

declare interface ActorData {
    id: number;
    battlerName: string;
    characterIndex: number;
    characterName: string;
    classId: number;
    equips: number[];
    faceIndex: number;
    faceName: string;
    traits: Trait[];
    initialLevel: number;
    maxLevel: number;
    meta: { [index: string]: any };
    name: string;
    nickname: string;
    note: string;
    profile: string;
}

declare interface AnimationData {
    id: number;
    animation1Hue: number;
    animation1Name: string;
    animation2Hue: number;
    animation2Name: string;
    frames: number[][][];
    name: string;
    position: number;
    timings: Timing[];
}

declare interface ArmorData {
    id: number;
    atypeId: number;
    description: string;
    etypeId: number;
    traits: Trait[];
    iconIndex: number;
    meta: { [index: string]: any };
    name: string;
    note: string;
    params: number[];
    price: number;
}

declare interface ClassData {
    id: number;
    expParams: number[];
    traits: Trait[];
    learnings: Learning[];
    meta: { [index: string]: any };
    name: string;
    note: string;
    params: number[][];
}

declare interface CommonEventData {
    id: number;
    list: CommonEventList[];
    name: string;
    switchId: number;
    trigger: number;
}

declare interface EnemyData {
    id: number;
    actions: Action[];
    battlerHue: number;
    battlerName: string;
    dropItems: DropItem[];
    exp: number;
    traits: Trait[];
    gold: number;
    meta: { [index: string]: any };
    name: string;
    note: string;
    params: number[];
}

declare interface ItemData {
    id: number;
    animationId: number;
    consumable: boolean;
    damage: Damage;
    description: string;
    effects: Effect[];
    hitType: number;
    iconIndex: number;
    itypeId: number;
    meta: { [index: string]: any };
    name: string;
    note: string;
    occasion: number;
    price: number;
    repeats: number;
    scope: number;
    speed: number;
    successRate: number;
    tpGain: number;
}

interface MapData {
    autoplayBgm: boolean;
    autoplayBgs: boolean;
    battleback1Name: string;
    battleback2Name: string;
    bgm: AudioDefinition;
    bgs: AudioDefinition;
    disableDashing: boolean;
    displayName: string;
    encounterList: MapDataType.EncounterList[];
    encounterStep: number;
    height: number;
    meta: { [index: string]: any };
    note: string;
    parallaxLoopX: boolean;
    parallaxLoopY: boolean;
    parallaxName: string;
    parallaxShow: boolean;
    parallaxSx: number;
    parallaxSy: number;
    scrollType: number;
    specifyBattleback: boolean;
    tilesetId: number;
    width: number;
    data: number[];
    events: (MapDataType.MapEvent | null)[];
}

declare interface MapInfoData {
    id: number;
    expanded: boolean;
    name: string;
    order: number;
    parentId: number;
    scrollX: number;
    scrollY: number;
}

declare interface SkillData {
    id: number;
    animationId: number;
    damage: Damage;
    description: string;
    effects: Effect[];
    hitType: number;
    iconIndex: number;
    message1: string;
    message2: string;
    mpCost: number;
    meta: { [index: string]: any };
    name: string;
    note: string;
    occasion: number;
    repeats: number;
    requiredWtypeId1: number;
    requiredWtypeId2: number;
    scope: number;
    speed: number;
    stypeId: number;
    successRate: number;
    tpCost: number;
    tpGain: number;
}

declare interface StateData {
    id: number;
    autoRemovalTiming: number;
    chanceByDamage: number;
    iconIndex: number;
    maxTurns: number;
    meta: { [index: string]: any };
    message1: string;
    message2: string;
    message3: string;
    message4: string;
    minTurns: number;
    motion: number;
    name: string;
    note: string;
    overlay: number;
    priority: number;
    releaseByDamage: boolean;
    removeAtBattleEnd: boolean;
    removeByDamage: boolean;
    removeByRestriction: boolean;
    removeByWalking: boolean;
    restriction: number;
    stepsToRemove: number;
    traits: Trait[];
}

declare interface SystemData {
    airship: Vehicle;
    armorTypes: string[];
    attackMotions: AttackMotion[];
    battleBgm: AudioDefinition;
    battleback1Name: string;
    battleback2Name: string;
    battlerHue: number;
    battlerName: string;
    boat: Vehicle;
    currencyUnit: string;
    defeatMe: AudioDefinition;
    editMapId: number;
    elements: string[];
    equipTypes: string[];
    gameTitle: string;
    gameoverMe: AudioDefinition;
    locale: string;
    magicSkills: number[];
    menuCommands: boolean[];
    optDisplayTp: boolean;
    optDrawTitle: boolean;
    optExtraExp: boolean;
    optFloorDeath: boolean;
    optFollowers: boolean;
    optSideView: boolean;
    optSlipDeath: boolean;
    optTransparent: boolean;
    partyMembers: number[];
    ship: Vehicle;
    skillTypes: string[];
    sounds: AudioDefinition[];
    startMapId: number;
    startX: number;
    startY: number;
    switches: string[];
    terms: Terms;
    testBattlers: TestBattler[];
    testTroopId: number;
    title1Name: string;
    title2Name: string;
    titleBgm: AudioDefinition;
    variables: string[];
    versionId: number;
    victoryMe: AudioDefinition;
    weaponTypes: string[];
    windowTone: number[];
}

declare interface TilesetData {
    id: number;
    flags: number[];
    meta: { [index: string]: any };
    mode: number;
    name: string;
    note: string;
    tilesetNames: string[];
}

declare interface TroopData {
    id: number;
    members: Member[];
    name: string;
    pages: Page[];
}

declare interface WeaponData {
    id: number;
    animationId: number;
    description: string;
    etypeId: number;
    traits: Trait[];
    iconIndex: number;
    meta: { [index: string]: any };
    name: string;
    note: string;
    params: number[];
    price: number;
    wtypeId: number;
}

declare namespace MapDataType {
    export interface MapEvent {
        id: number;
        meta: { [index: string]: any };
        name: string;
        note: string;
        pages: Page[];
        x: number;
        y: number;
    }

    interface Page {
        conditions: Conditions;
        directionFix: boolean;
        image: Image;
        list: List2[];
        moveFrequency: number;
        moveRoute: MoveRoute;
        moveSpeed: number;
        moveType: number;
        priorityType: number;
        stepAnime: boolean;
        through: boolean;
        trigger: number;
        walkAnime: boolean;
    }

    interface MoveRoute {
        list: MoveRouteStep[];
        repeat: boolean;
        skippable: boolean;
        wait: boolean;
    }

    interface MoveRouteStep {
        code: number;
        parameters: any[];
    }

    interface List2 {
        code: number;
        indent: number;
        parameters: (
            | string[]
            | Parameters2
            | boolean
            | Parameters4
            | Parameters5
            | AudioDefinition
            | number
            | string)[][];
    }

    interface Parameters5 {
        code: number;
        parameters: number[];
    }

    interface Parameters4 {
        list: List[];
        repeat: boolean;
        skippable: boolean;
        wait: boolean;
    }

    interface List {
        code: number;
        parameters?: number[];
    }

    interface Parameters2 {
        code: number;
    }

    interface Image {
        tileId: number;
        characterName: string;
        direction: number;
        pattern: number;
        characterIndex: number;
    }

    interface Conditions {
        actorId: number;
        actorValid: boolean;
        itemId: number;
        itemValid: boolean;
        selfSwitchCh: string;
        selfSwitchValid: boolean;
        switch1Id: number;
        switch1Valid: boolean;
        switch2Id: number;
        switch2Valid: boolean;
        variableId: number;
        variableValid: boolean;
        variableValue: number;
    }

    interface EncounterList {
        regionSet: any[];
        troopId: number;
        weight: number;
    }
}
