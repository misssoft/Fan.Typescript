var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var Coin = (function () {
        function Coin(value) {
            this.value = value;
        }
        return Coin;
    }());
    exports.Coin = Coin;
    var Dollar = (function (_super) {
        __extends(Dollar, _super);
        function Dollar() {
            return _super.call(this, 1.0) || this;
        }
        Dollar.prototype.getImageUrl = function () {
            return "image/Dollar.jpg";
        };
        return Dollar;
    }(Coin));
    exports.Dollar = Dollar;
    var Half = (function (_super) {
        __extends(Half, _super);
        function Half() {
            return _super.call(this, .5) || this;
        }
        Half.prototype.getImageUrl = function () {
            return "image/Half.png";
        };
        return Half;
    }(Coin));
    exports.Half = Half;
    var Quarter = (function (_super) {
        __extends(Quarter, _super);
        function Quarter() {
            return _super.call(this, .25) || this;
        }
        Quarter.prototype.getImageUrl = function () {
            return "image/Quarter.png";
        };
        return Quarter;
    }(Coin));
    exports.Quarter = Quarter;
    var Dime = (function (_super) {
        __extends(Dime, _super);
        function Dime() {
            return _super.call(this, .10) || this;
        }
        Dime.prototype.getImageUrl = function () {
            return "image/Dime.png";
        };
        return Dime;
    }(Coin));
    exports.Dime = Dime;
});
//# sourceMappingURL=coin.js.map