/* example16.js
Parasitic Inheritance*/
function ZParenizor2(value) {
    var that = new Parenizor(value);
    that.toString = function () {
        if (this.getValue()) {
            return this.uber('toString');
        }
        return "-0-"
    };
    return that;
}