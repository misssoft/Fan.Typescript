var Quarter = (function () {
    function Quarter() {
        this.value = .25;
    }
    Object.defineProperty(Quarter.prototype, "Value", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    Quarter.prototype.getImageUrl = function () {
        return "image/Quarter.png";
    };
    return Quarter;
}());
var coin = new Quarter();
/// <reference path="./coin.ts" />
var VendingMachine = (function () {
    function VendingMachine() {
        var _this = this;
        this.paid = ko.observable(0);
        this.acceptCoin = function (coin) {
            var oldTotal = _this.paid();
            _this.paid(oldTotal + coin.Value);
        };
    }
    return VendingMachine;
}());
/// <reference path="vendingmachine.ts" />
var machine = new VendingMachine();
ko.applyBindings(machine);
//# sourceMappingURL=app.js.map