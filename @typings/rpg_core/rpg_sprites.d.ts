/////////////////////////////////////////
// DO NOT MODIFY - This was auto-generated by a tool.

/* The sprite for displaying an overlay image for a state. */
declare class Sprite_StateOverlay extends Sprite_Base {
    constructor();
    animationWait();
    initialize();
    initMembers();
    loadBitmap();
    setup(battler);
    update();
    updateFrame();
    updatePattern();
}

/* The sprite class with a feature which displays animations. */
declare class Sprite_Base extends Sprite {
    constructor();
    hide();
    initialize();
    isAnimationPlaying();
    show();
    startAnimation(animation, mirror, delay);
    update();
    updateAnimationSprites();
    updateVisibility();
}

/* The sprite for displaying a character. */
declare class Sprite_Character extends Sprite_Base {
    constructor(character);
    characterBlockX();
    characterBlockY();
    characterPatternX();
    characterPatternY();
    createHalfBodySprites();
    endBalloon();
    initialize(character?);
    initMembers();
    isBalloonPlaying();
    isImageChanged();
    isTile();
    patternHeight();
    patternWidth();
    setCharacter(character);
    setCharacterBitmap();
    setTileBitmap();
    setupAnimation();
    setupBalloon();
    startBalloon();
    tilesetBitmap(tileId);
    update();
    updateAnimation();
    updateBalloon();
    updateBitmap();
    updateCharacterFrame();
    updateFrame();
    updateHalfBodySprites();
    updateOther();
    updatePosition();
    updateTileFrame();
    updateVisibility();
}

/* The superclass of Sprite_Actor and Sprite_Enemy. */
declare class Sprite_Battler extends Sprite_Base {
    constructor(battler);
    damageOffsetX();
    damageOffsetY();
    inHomePosition();
    initialize(battler?);
    initMembers();
    isEffecting();
    isMoving();
    onMoveEnd();
    setBattler(battler);
    setHome(x, y);
    setupAnimation();
    setupDamagePopup();
    startMove(x, y, duration);
    update();
    updateAnimation();
    updateBitmap();
    updateDamagePopup();
    updateFrame();
    updateMain();
    updateMove();
    updatePosition();
    updateSelectionEffect();
    updateVisibility();
}

/* The sprite for displaying an actor. */
declare class Sprite_Actor extends Sprite_Battler {
    constructor(battler);
    static MOTIONS: number;
    createMainSprite();
    createShadowSprite();
    createStateSprite();
    createWeaponSprite();
    damageOffsetX();
    damageOffsetY();
    initialize(battler?);
    initMembers();
    motionSpeed();
    moveToStartPosition();
    onMoveEnd();
    refreshMotion();
    retreat();
    setActorHome(index);
    setBattler(battler);
    setupMotion();
    setupWeaponAnimation();
    startEntryMotion();
    startMotion(motionType);
    stepBack();
    stepForward();
    update();
    updateBitmap();
    updateFrame();
    updateMain();
    updateMotion();
    updateMotionCount();
    updateMove();
    updateShadow();
    updateTargetPosition();
}

/* The sprite for displaying an enemy. */
declare class Sprite_Enemy extends Sprite_Battler {
    constructor(battler);
    createStateIconSprite();
    damageOffsetX();
    damageOffsetY();
    initialize(battler?);
    initMembers();
    initVisibility();
    isEffecting();
    loadBitmap(name, hue);
    revertToNormal();
    setBattler(battler);
    setupEffect();
    startAppear();
    startBlink();
    startBossCollapse();
    startCollapse();
    startDisappear();
    startEffect(effectType);
    startInstantCollapse();
    startWhiten();
    update();
    updateAppear();
    updateBitmap();
    updateBlink();
    updateBossCollapse();
    updateCollapse();
    updateDisappear();
    updateEffect();
    updateFrame();
    updateInstantCollapse();
    updatePosition();
    updateStateSprite();
    updateWhiten();
}

/* The sprite for displaying an animation. */
declare class Sprite_Animation extends Sprite {
    constructor();
    static _checker1: object;
    static _checker2: object;
    absoluteX();
    absoluteY();
    createCellSprites();
    createScreenFlashSprite();
    createSprites();
    currentFrameIndex();
    initialize();
    initMembers();
    isPlaying();
    isReady();
    loadBitmaps();
    processTimingData(timing);
    remove();
    setup(target, animation, mirror, delay);
    setupDuration();
    setupRate();
    startFlash(color, duration);
    startHiding(duration);
    startScreenFlash(color, duration);
    update();
    updateAllCellSprites(frame);
    updateCellSprite(sprite, cell);
    updateFlash();
    updateFrame();
    updateHiding();
    updateMain();
    updatePosition();
    updateScreenFlash();
}

/* The sprite for displaying a popup damage. */
declare class Sprite_Damage extends Sprite {
    constructor();
    createChildSprite();
    createDigits(baseRow, value);
    createMiss();
    digitHeight();
    digitWidth();
    initialize();
    isPlaying();
    setup(target);
    setupCriticalEffect();
    update();
    updateChild(sprite);
    updateFlash();
    updateOpacity();
}

/* The sprite for displaying state icons. */
declare class Sprite_StateIcon extends Sprite {
    constructor();
    static _iconHeight: number;
    static _iconWidth: number;
    animationWait();
    initialize();
    initMembers();
    loadBitmap();
    setup(battler);
    update();
    updateFrame();
    updateIcon();
}

/* The sprite for displaying a button. */
declare class Sprite_Button extends Sprite {
    constructor();
    callClickHandler();
    canvasToLocalX(x);
    canvasToLocalY(y);
    initialize();
    isActive();
    isButtonTouched();
    processTouch();
    setClickHandler(method);
    setColdFrame(x, y, width, height);
    setHotFrame(x, y, width, height);
    update();
    updateFrame();
}

/* The sprite for displaying a weapon image for attacking. */
declare class Sprite_Weapon extends Sprite_Base {
    constructor();
    animationWait();
    initialize();
    initMembers();
    isPlaying();
    loadBitmap();
    setup(weaponImageId);
    update();
    updateFrame();
    updatePattern();
}

/* The sprite for displaying a balloon icon. */
declare class Sprite_Balloon extends Sprite_Base {
    constructor();
    frameIndex();
    initialize();
    initMembers();
    isPlaying();
    loadBitmap();
    setup(balloonId);
    speed();
    update();
    updateFrame();
    waitTime();
}

/* The sprite for displaying a picture. */
declare class Sprite_Picture extends Sprite {
    constructor(pictureId);
    initialize(pictureId?);
    loadBitmap();
    picture();
    update();
    updateBitmap();
    updateOrigin();
    updateOther();
    updatePosition();
    updateScale();
    updateTone();
}

/* The sprite for displaying the timer. */
declare class Sprite_Timer extends Sprite {
    constructor();
    createBitmap();
    initialize();
    redraw();
    timerText();
    update();
    updateBitmap();
    updatePosition();
    updateVisibility();
}

/* The sprite for displaying the destination place of the touch input. */
declare class Sprite_Destination extends Sprite {
    constructor();
    createBitmap();
    initialize();
    update();
    updateAnimation();
    updatePosition();
}

/* The superclass of Spriteset_Map and Spriteset_Battle. */
declare class Spriteset_Base extends Sprite {
    constructor();
    createBaseSprite();
    createCanvasToneChanger();
    createLowerLayer();
    createPictures();
    createScreenSprites();
    createTimer();
    createToneChanger();
    createUpperLayer();
    createWebGLToneChanger();
    initialize();
    update();
    updateCanvasToneChanger();
    updatePosition();
    updateScreenSprites();
    updateToneChanger();
    updateWebGLToneChanger();
}

/* The set of sprites on the map screen. */
declare class Spriteset_Map extends Spriteset_Base {
    constructor();

    /* * Simple fix for canvas parallax issue, destroy old parallax and readd to  the tree. */
    _canvasReAddParallax();
    createCharacters();
    createDestination();
    createLowerLayer();
    createParallax();
    createShadow();
    createTilemap();
    createWeather();
    hideCharacters();
    initialize();
    loadTileset();
    update();
    updateParallax();
    updateShadow();
    updateTilemap();
    updateTileset();
    updateWeather();
}

/* The set of sprites on the battle screen. */
declare class Spriteset_Battle extends Spriteset_Base {
    constructor();
    autotileType(z);
    battleback1Bitmap();
    battleback1Name();
    battleback2Bitmap();
    battleback2Name();
    battlerSprites();
    compareEnemySprite(a, b);
    createActors();
    createBackground();
    createBattleback();
    createBattleField();
    createEnemies();
    createLowerLayer();
    defaultBattleback1Name();
    defaultBattleback2Name();
    initialize();
    isAnimationPlaying();
    isAnyoneMoving();
    isBusy();
    isEffecting();
    locateBattleback();
    normalBattleback1Name();
    normalBattleback2Name();
    overworldBattleback1Name();
    overworldBattleback2Name();
    shipBattleback1Name();
    shipBattleback2Name();
    terrainBattleback1Name(type);
    terrainBattleback2Name(type);
    update();
    updateActors();
    updateBattleback();
}
