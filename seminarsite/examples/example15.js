/* example15.js
Pbject Augmentation*/
myParenizor = new Parenizor(0);
myParenizor.toString = function () {
    if (this.getValue()) {
        return this.uber('toString');
    }
    return "-0-";
};
myString = myParenizor.toString();