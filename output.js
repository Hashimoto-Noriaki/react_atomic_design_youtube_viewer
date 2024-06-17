"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

// ~中略~
var rootEl = document.getElementById('root');

var x =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (r) {
              return r;
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function x() {
    return _ref.apply(this, arguments);
  };
}();

_reactDom.default.render(_react.default.createElement("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: void 0
}, "Hello react.", x()), rootEl);

