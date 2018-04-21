// Override the initialize method
Game_Map.prototype.initialize = (function(_initialize) {
    return function() {
        _initialize.call(this);
        this.displayHelloWorld();
    };
})(Game_Map.prototype.initialize);

/**
 * Add a new method to the Game_Map
 */
Game_Map.prototype.displayHelloWorld();
{
    console.log("Hello World");
}
