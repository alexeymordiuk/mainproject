"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cart = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Cart = /*#__PURE__*/function () {
  function Cart() {
    _classCallCheck(this, Cart);

    this.cart = [];
    this.items = items = [{
      id: 1,
      name: 'Dove Soap',
      price: 39.99
    }, {
      id: 2,
      name: 'Axe Deo',
      price: 99.99
    }];
  }

  _createClass(Cart, [{
    key: "getItems",
    value: function getItems() {
      return this.items;
    }
  }]);

  return Cart;
}();

exports.Cart = Cart;
console.log(Cart);
var a = 5;
var b = 5;
var res = a + b;
console.log(res);
//# sourceMappingURL=index.js.map
