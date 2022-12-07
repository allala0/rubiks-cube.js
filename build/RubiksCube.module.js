import * as __WEBPACK_EXTERNAL_MODULE_three__ from "three";
import * as __WEBPACK_EXTERNAL_MODULE_three_addons_geometries_RoundedBoxGeometry_js_a86c0263__ from "three/addons/geometries/RoundedBoxGeometry.js";
/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ src_RubiksCube)
});

;// CONCATENATED MODULE: external "three"
var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
const external_three_namespaceObject = x({ ["BoxGeometry"]: () => __WEBPACK_EXTERNAL_MODULE_three__.BoxGeometry, ["Group"]: () => __WEBPACK_EXTERNAL_MODULE_three__.Group, ["Mesh"]: () => __WEBPACK_EXTERNAL_MODULE_three__.Mesh, ["MeshPhongMaterial"]: () => __WEBPACK_EXTERNAL_MODULE_three__.MeshPhongMaterial, ["Raycaster"]: () => __WEBPACK_EXTERNAL_MODULE_three__.Raycaster, ["Vector2"]: () => __WEBPACK_EXTERNAL_MODULE_three__.Vector2 });
;// CONCATENATED MODULE: external "three/addons/geometries/RoundedBoxGeometry.js"
var RoundedBoxGeometry_js_x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var RoundedBoxGeometry_js_y = x => () => x
const RoundedBoxGeometry_js_namespaceObject = RoundedBoxGeometry_js_x({ ["RoundedBoxGeometry"]: () => __WEBPACK_EXTERNAL_MODULE_three_addons_geometries_RoundedBoxGeometry_js_a86c0263__.RoundedBoxGeometry });
;// CONCATENATED MODULE: ./src/RubiksCube.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var RubiksCube = /*#__PURE__*/function (_THREE$Group) {
  _inherits(RubiksCube, _THREE$Group);
  var _super = _createSuper(RubiksCube);
  function RubiksCube() {
    var _this;
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
    var camera = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var domElement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var controls = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    _classCallCheck(this, RubiksCube);
    _this = _super.call(this);
    _this.opacity = 1;
    _this.color = 0xffffff;
    _this.select_color = 0xcccccc;
    _this.color = 0x000000;
    _this.select_color = 0xeeeeee;
    _this.size = size;
    _this.colors = [0x0000ff, 0xffffff, 0xff5c00, 0x00ff00, 0xffff00, 0xff0000];
    _this.cube = _this.generate();
    _this.model = _this.generate_model();
    _this.move_queue = [];
    _this.current_move = null;
    _this.current_layer_tiles = null;
    _this.current_layer_cubies = null;
    _this.step = null;
    _this.moves_executed = [];
    _this.isSolved = true;
    _this.move_speed = 0.075;
    _this.index = null;
    _this.ray = null;
    _this.side = null;
    _this.intersects = false;
    _this.raycaster = new external_three_namespaceObject.Raycaster();
    _this.mouse = new external_three_namespaceObject.Vector2(1, 1);
    _this.camera = camera;
    _this.domElement = domElement;
    _this.controls = controls;
    _this.controlsLastEnabled = null;
    if (_this.camera !== null && _this.domElement !== null) {
      _this.domElement.addEventListener('mousedown', function () {
        var _this$controls;
        _this.handleMouseDown();
        _this.controlsLastEnabled = (_this$controls = _this.controls) === null || _this$controls === void 0 ? void 0 : _this$controls.enableRotate;
        if (_this.controls !== null) _this.controls.enableRotate = !_this.intersects;
      });
      _this.domElement.addEventListener('mouseup', function () {
        _this.handleMouseUp();
        if (_this.controls !== null && _this.controlsLastEnabled !== null) _this.controls.enableRotate = _this.controlsLastEnabled;
      });
      _this.domElement.addEventListener('mousemove', function (event) {
        _this.mouse.x = (event.clientX - _this.domElement.getBoundingClientRect().left) / _this.domElement.clientWidth * 2 - 1;
        _this.mouse.y = -((event.clientY - _this.domElement.getBoundingClientRect().top) / _this.domElement.clientHeight) * 2 + 1;
      });
    }
    return _this;
  }
  _createClass(RubiksCube, [{
    key: "generate",
    value: function generate() {
      var cube = [];
      for (var i = 0; i < this.size; i++) {
        var layer = [];
        for (var j = 0; j < this.size; j++) {
          var row = [];
          for (var k = 0; k < this.size; k++) {
            var between = function between(value, min, max) {
              return value > min && value < max;
            };
            var cubie = [0, 1, 2, 3, 4, 5];
            if (between(i, 0, this.size - 1) && between(j, 0, this.size - 1) && between(k, 0, this.size - 1)) {
              cubie = [null, null, null, null, null, null];
            } else if (i == 0 && j == 0 && k == 0) {
              var _ref = [null, null, null];
              cubie[2] = _ref[0];
              cubie[3] = _ref[1];
              cubie[4] = _ref[2];
            } else if (i == 0 && j == 0 && k == this.size - 1) {
              var _ref2 = [null, null, null];
              cubie[0] = _ref2[0];
              cubie[2] = _ref2[1];
              cubie[4] = _ref2[2];
            } else if (i == 0 && j == this.size - 1 && k == 0) {
              var _ref3 = [null, null, null];
              cubie[1] = _ref3[0];
              cubie[2] = _ref3[1];
              cubie[3] = _ref3[2];
            } else if (i == 0 && j == this.size - 1 && k == this.size - 1) {
              var _ref4 = [null, null, null];
              cubie[0] = _ref4[0];
              cubie[1] = _ref4[1];
              cubie[2] = _ref4[2];
            } else if (i == this.size - 1 && j == 0 && k == 0) {
              var _ref5 = [null, null, null];
              cubie[3] = _ref5[0];
              cubie[4] = _ref5[1];
              cubie[5] = _ref5[2];
            } else if (i == this.size - 1 && j == 0 && k == this.size - 1) {
              var _ref6 = [null, null, null];
              cubie[0] = _ref6[0];
              cubie[4] = _ref6[1];
              cubie[5] = _ref6[2];
            } else if (i == this.size - 1 && j == this.size - 1 && k == 0) {
              var _ref7 = [null, null, null];
              cubie[1] = _ref7[0];
              cubie[3] = _ref7[1];
              cubie[5] = _ref7[2];
            } else if (i == this.size - 1 && j == this.size - 1 && k == this.size - 1) {
              var _ref8 = [null, null, null];
              cubie[0] = _ref8[0];
              cubie[1] = _ref8[1];
              cubie[5] = _ref8[2];
            } else if (i == 0 && j == 0 && between(k, 0, this.size - 1)) {
              var _ref9 = [null, null, null, null];
              cubie[0] = _ref9[0];
              cubie[2] = _ref9[1];
              cubie[3] = _ref9[2];
              cubie[4] = _ref9[3];
            } else if (i == 0 && j == this.size - 1 && between(k, 0, this.size - 1)) {
              var _ref10 = [null, null, null, null];
              cubie[0] = _ref10[0];
              cubie[1] = _ref10[1];
              cubie[2] = _ref10[2];
              cubie[3] = _ref10[3];
            } else if (i == 0 && between(j, 0, this.size - 1) && k == 0) {
              var _ref11 = [null, null, null, null];
              cubie[1] = _ref11[0];
              cubie[2] = _ref11[1];
              cubie[3] = _ref11[2];
              cubie[4] = _ref11[3];
            } else if (i == 0 && between(j, 0, this.size - 1) && k == this.size - 1) {
              var _ref12 = [null, null, null, null];
              cubie[0] = _ref12[0];
              cubie[1] = _ref12[1];
              cubie[2] = _ref12[2];
              cubie[4] = _ref12[3];
            } else if (between(i, 0, this.size - 1) && j == 0 && k == 0) {
              var _ref13 = [null, null, null, null];
              cubie[2] = _ref13[0];
              cubie[3] = _ref13[1];
              cubie[4] = _ref13[2];
              cubie[5] = _ref13[3];
            } else if (between(i, 0, this.size - 1) && j == 0 && k == this.size - 1) {
              var _ref14 = [null, null, null, null];
              cubie[0] = _ref14[0];
              cubie[2] = _ref14[1];
              cubie[4] = _ref14[2];
              cubie[5] = _ref14[3];
            } else if (between(i, 0, this.size - 1) && j == this.size - 1 && k == 0) {
              var _ref15 = [null, null, null, null];
              cubie[1] = _ref15[0];
              cubie[2] = _ref15[1];
              cubie[3] = _ref15[2];
              cubie[5] = _ref15[3];
            } else if (between(i, 0, this.size - 1) && j == this.size - 1 && k == this.size - 1) {
              var _ref16 = [null, null, null, null];
              cubie[0] = _ref16[0];
              cubie[1] = _ref16[1];
              cubie[2] = _ref16[2];
              cubie[5] = _ref16[3];
            } else if (i == this.size - 1 && j == 0 && between(k, 0, this.size - 1)) {
              var _ref17 = [null, null, null, null];
              cubie[0] = _ref17[0];
              cubie[3] = _ref17[1];
              cubie[4] = _ref17[2];
              cubie[5] = _ref17[3];
            } else if (i == this.size - 1 && j == this.size - 1 && between(k, 0, this.size - 1)) {
              var _ref18 = [null, null, null, null];
              cubie[0] = _ref18[0];
              cubie[1] = _ref18[1];
              cubie[3] = _ref18[2];
              cubie[5] = _ref18[3];
            } else if (i == this.size - 1 && between(j, 0, this.size - 1) && k == 0) {
              var _ref19 = [null, null, null, null];
              cubie[1] = _ref19[0];
              cubie[3] = _ref19[1];
              cubie[4] = _ref19[2];
              cubie[5] = _ref19[3];
            } else if (i == this.size - 1 && between(j, 0, this.size - 1) && k == this.size - 1) {
              var _ref20 = [null, null, null, null];
              cubie[0] = _ref20[0];
              cubie[1] = _ref20[1];
              cubie[4] = _ref20[2];
              cubie[5] = _ref20[3];
            } else if (i == 0 && between(j, 0, this.size - 1) && between(k, 0, this.size - 1)) {
              var _ref21 = [null, null, null, null, null];
              cubie[0] = _ref21[0];
              cubie[1] = _ref21[1];
              cubie[2] = _ref21[2];
              cubie[3] = _ref21[3];
              cubie[4] = _ref21[4];
            } else if (between(i, 0, this.size - 1) && between(j, 0, this.size - 1) && k == 0) {
              var _ref22 = [null, null, null, null, null];
              cubie[1] = _ref22[0];
              cubie[2] = _ref22[1];
              cubie[3] = _ref22[2];
              cubie[4] = _ref22[3];
              cubie[5] = _ref22[4];
            } else if (between(i, 0, this.size - 1) && between(j, 0, this.size - 1) && k == this.size - 1) {
              var _ref23 = [null, null, null, null, null];
              cubie[0] = _ref23[0];
              cubie[1] = _ref23[1];
              cubie[2] = _ref23[2];
              cubie[4] = _ref23[3];
              cubie[5] = _ref23[4];
            } else if (between(i, 0, this.size - 1) && j == 0 && between(k, 0, this.size - 1)) {
              var _ref24 = [null, null, null, null, null];
              cubie[0] = _ref24[0];
              cubie[2] = _ref24[1];
              cubie[3] = _ref24[2];
              cubie[4] = _ref24[3];
              cubie[5] = _ref24[4];
            } else if (between(i, 0, this.size - 1) && j == this.size - 1 && between(k, 0, this.size - 1)) {
              var _ref25 = [null, null, null, null, null];
              cubie[0] = _ref25[0];
              cubie[1] = _ref25[1];
              cubie[2] = _ref25[2];
              cubie[3] = _ref25[3];
              cubie[5] = _ref25[4];
            } else if (i == this.size - 1 && between(j, 0, this.size - 1) && between(k, 0, this.size - 1)) {
              var _ref26 = [null, null, null, null, null];
              cubie[0] = _ref26[0];
              cubie[1] = _ref26[1];
              cubie[3] = _ref26[2];
              cubie[4] = _ref26[3];
              cubie[5] = _ref26[4];
            }
            row.push(cubie);
          }
          layer.push(row);
        }
        cube.push(layer);
      }
      return cube;
    }
  }, {
    key: "move",
    value: function move(axis, layer, direction) {
      var qty = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      for (var counter = 0; counter < qty; counter++) {
        var buffer = [];
        for (var i = 0; i < this.cube.length; i++) {
          var layer_copy = [];
          for (var j = 0; j < this.cube[i].length; j++) {
            var row_copy = [];
            for (var k = 0; k < this.cube[i][j].length; k++) {
              row_copy.push(this.cube[i][j][k].slice());
            }
            layer_copy.push(row_copy);
          }
          buffer.push(layer_copy);
        }
        if (axis == 'Y') {
          for (var _j = 0; _j < buffer[layer].length; _j++) {
            for (var _k = 0; _k < buffer[layer][_j].length; _k++) {
              var e = buffer[layer][_j][_k];
              if (direction == 1) {
                var _ref27 = [e[4], e[0], e[1], e[3]];
                e[0] = _ref27[0];
                e[1] = _ref27[1];
                e[3] = _ref27[2];
                e[4] = _ref27[3];
                this.cube[layer][_k][buffer.length - 1 - _j] = e;
              } else if (direction == 0) {
                var _ref28 = [e[0], e[1], e[3], e[4]];
                e[4] = _ref28[0];
                e[0] = _ref28[1];
                e[1] = _ref28[2];
                e[3] = _ref28[3];
                this.cube[layer][buffer.length - 1 - _k][_j] = e;
              }
            }
          }
        } else if (axis == 'Z') {
          for (var _j2 = 0; _j2 < buffer.length; _j2++) {
            for (var _k2 = 0; _k2 < buffer[_j2].length; _k2++) {
              var _e = buffer[_j2][_k2][layer];
              if (direction == 1) {
                var _ref29 = [_e[2], _e[4], _e[5], _e[1]];
                _e[1] = _ref29[0];
                _e[2] = _ref29[1];
                _e[4] = _ref29[2];
                _e[5] = _ref29[3];
                this.cube[_k2][buffer.length - 1 - _j2][layer] = _e;
              } else if (direction == 0) {
                var _ref30;
                [(_ref30 = [_e[1], _e[2], _e[4], _e[5]], _e[2] = _ref30[0], _e[4] = _ref30[1], _e[5] = _ref30[2], _e[1] = _ref30[3], _ref30)];
                this.cube[buffer.length - 1 - _k2][_j2][layer] = _e;
              }
            }
          }
        } else if (axis == 'X') {
          for (var _j3 = 0; _j3 < buffer.length; _j3++) {
            for (var _k3 = 0; _k3 < buffer[_j3][layer].length; _k3++) {
              var _e2 = buffer[_j3][layer][_k3];
              if (direction == 0) {
                var _ref31 = [_e2[2], _e2[3], _e2[5], _e2[0]];
                _e2[0] = _ref31[0];
                _e2[2] = _ref31[1];
                _e2[3] = _ref31[2];
                _e2[5] = _ref31[3];
                this.cube[_k3][layer][buffer.length - 1 - _j3] = _e2;
              } else if (direction == 1) {
                var _ref32 = [_e2[0], _e2[2], _e2[3], _e2[5]];
                _e2[2] = _ref32[0];
                _e2[3] = _ref32[1];
                _e2[5] = _ref32[2];
                _e2[0] = _ref32[3];
                this.cube[buffer.length - 1 - _k3][layer][_j3] = _e2;
              }
            }
          }
        }
      }
    }
  }, {
    key: "generate_model",
    value: function generate_model() {
      var cubie_size = 1;
      this.middle = Math.floor(this.size / 2);
      var spacing = 0.00;
      if (this.size % 2 == 0) {
        this.middle -= 0.5;
      }
      var margin = 0.15;
      var tile_height = 0.05;
      this.tiles_hitboxes = [];
      this.tiles = [];
      this.cubies = [];
      this.tiles_hitboxes_group = new external_three_namespaceObject.Group();
      this.tiles_group = new external_three_namespaceObject.Group();
      this.cubies_group = new external_three_namespaceObject.Group();
      for (var i = 0; i < this.cube.length; i++) {
        var tiles_hitboxes_layer = [];
        var tiles_layer = [];
        var cubies_layer = [];
        for (var j = 0; j < this.cube[i].length; j++) {
          var tiles_hitboxes_row = [];
          var tiles_row = [];
          var cubies_row = [];
          for (var k = 0; k < this.cube[i][j].length; k++) {
            var tiles_hitboxes_cubie = [];
            var tiles_cubie = [];
            for (var l = 0; l < this.cube[i][j][k].length; l++) {
              var tile = null;
              var tile_hitbox = null;
              var position = null;
              var tile_size = null;
              var hitbox_tile_size = null;
              if (this.cube[i][j][k][l] !== null) {
                if (l == 0) {
                  position = [(spacing + 1) * (i - this.middle), (spacing + 1) * (j - this.middle), -(spacing * this.middle + this.size / 2)];
                  tile_size = [cubie_size - margin, cubie_size - margin, tile_height];
                  hitbox_tile_size = [cubie_size, cubie_size, tile_height];
                } else if (l == 1) {
                  position = [(spacing + 1) * (i - this.middle), -(spacing * this.middle + this.size / 2), (spacing + 1) * (k - this.middle)];
                  tile_size = [cubie_size - margin, tile_height, cubie_size - margin];
                  hitbox_tile_size = [cubie_size, tile_height, cubie_size];
                } else if (l == 2) {
                  position = [spacing * this.middle + this.size / 2, (spacing + 1) * (j - this.middle), (spacing + 1) * (k - this.middle)];
                  tile_size = [tile_height, cubie_size - margin, cubie_size - margin];
                  hitbox_tile_size = [tile_height, cubie_size, cubie_size];
                } else if (l == 3) {
                  position = [(spacing + 1) * (i - this.middle), (spacing + 1) * (j - this.middle), spacing * this.middle + this.size / 2];
                  tile_size = [cubie_size - margin, cubie_size - margin, tile_height];
                  hitbox_tile_size = [cubie_size, cubie_size, tile_height];
                } else if (l == 4) {
                  position = [(spacing + 1) * (i - this.middle), spacing * this.middle + this.size / 2, (spacing + 1) * (k - this.middle)];
                  tile_size = [cubie_size - margin, tile_height, cubie_size - margin];
                  hitbox_tile_size = [cubie_size, tile_height, cubie_size];
                } else if (l == 5) {
                  position = [-(spacing * this.middle + this.size / 2), (spacing + 1) * (j - this.middle), (spacing + 1) * (k - this.middle)];
                  tile_size = [tile_height, cubie_size - margin, cubie_size - margin];
                  hitbox_tile_size = [tile_height, cubie_size, cubie_size];
                }
              }
              if (this.cube[i][j][k][l] != null) {
                tile = new external_three_namespaceObject.Mesh(new RoundedBoxGeometry_js_namespaceObject.RoundedBoxGeometry(tile_size[0], tile_size[1], tile_size[2], 2, 1), new external_three_namespaceObject.MeshPhongMaterial({
                  color: this.colors[this.cube[i][j][k][l]],
                  transparent: true,
                  opacity: this.opacity
                }));
                tile_hitbox = new external_three_namespaceObject.Mesh(new external_three_namespaceObject.BoxGeometry(hitbox_tile_size[0], hitbox_tile_size[1], hitbox_tile_size[2]), new external_three_namespaceObject.MeshPhongMaterial({}));
                tile_hitbox.visible = false;
                tile.position.set(position[0], position[1], position[2]);
                tile_hitbox.position.set(position[0], position[1], position[2]);
                tile.castShadow = true;
                tile.receiveShadow = true;
                this.tiles_group.add(tile);
                this.tiles_hitboxes_group.add(tile_hitbox);
              }
              tiles_hitboxes_cubie.push(tile_hitbox);
              tiles_cubie.push(tile);
            }
            var cubies_cubie = null;
            var all_null = true;
            for (var m = 0; m < tiles_cubie.length; m++) {
              if (tiles_cubie[m] != null) {
                all_null = false;
              }
            }
            if (!all_null) {
              cubies_cubie = new external_three_namespaceObject.Mesh(new RoundedBoxGeometry_js_namespaceObject.RoundedBoxGeometry(cubie_size, cubie_size, cubie_size, 1, 0.05), new external_three_namespaceObject.MeshPhongMaterial({
                color: 0x000000,
                transparent: true,
                opacity: this.opacity
              }));
              cubies_cubie.position.set((spacing + 1) * (i - this.middle), (spacing + 1) * (j - this.middle), (spacing + 1) * (k - this.middle));
              this.cubies_group.add(cubies_cubie);
            }
            tiles_hitboxes_row.push(tiles_hitboxes_cubie);
            tiles_row.push(tiles_cubie);
            cubies_row.push(cubies_cubie);
          }
          tiles_hitboxes_layer.push(tiles_hitboxes_row);
          tiles_layer.push(tiles_row);
          cubies_layer.push(cubies_row);
        }
        this.tiles_hitboxes.push(tiles_hitboxes_layer);
        this.tiles.push(tiles_layer);
        this.cubies.push(cubies_layer);
      }
      this.add(this.tiles_hitboxes_group);
      this.add(this.tiles_group);
      this.add(this.cubies_group);
      this.inner_cubies_group = new external_three_namespaceObject.Group();
      this.inner_cubies = [];
      for (var _i = 0; _i < (this.size - 2) * (this.size - 2); _i++) {
        var inner_cubie = new external_three_namespaceObject.Mesh(new external_three_namespaceObject.BoxGeometry(cubie_size, cubie_size, cubie_size), new external_three_namespaceObject.MeshPhongMaterial({
          color: 0x000000
        }));
        inner_cubie.position.set(0, 0, 0);
        this.inner_cubies_group.add(inner_cubie);
        this.inner_cubies.push(inner_cubie);
      }
      this.add(this.inner_cubies_group);
    }
  }, {
    key: "get_layer",
    value: function get_layer(axis, layer) {
      var tiles_group = new external_three_namespaceObject.Group();
      var cubies_group = new external_three_namespaceObject.Group();
      var inner_cubie_index = 0;
      if (layer == -1) {
        for (var j = 0; j < this.cubies; j++) {
          for (var k = 0; k < this.cubies[j].length; k++) {
            for (var l = 0; l < this.cubies[j][k].length; l++) {
              if (this.cubies[j][k][l] != null) {
                cubies_group.add(this.cubies);
              }
              for (var m = 0; m < this.tiles[j][k][l].length; m++) {
                if (this.tiles[j][k][l][m] != null) {
                  tiles_group.add(this.tiles[j][k][l][m]);
                }
              }
            }
          }
        }
        for (var _j4 = 0; _j4 < this.inner_cubies; _j4++) {
          cubies_group.add(this.inner_cubies[_j4]);
        }
      } else if (axis == 'Y') {
        for (var _j5 = 0; _j5 < this.cube[layer].length; _j5++) {
          for (var _k4 = 0; _k4 < this.cube[layer][_j5].length; _k4++) {
            var f = this.cubies[layer][_j5][_k4];
            if (f != null) {
              cubies_group.add(f);
            } else {
              this.inner_cubies[inner_cubie_index].position.set(layer - this.middle, _j5 - this.middle, _k4 - this.middle);
              cubies_group.add(this.inner_cubies[inner_cubie_index]);
              inner_cubie_index += 1;
            }
            var e = this.tiles[layer][_j5][_k4];
            for (var _l = 0; _l < e.length; _l++) {
              if (e[_l] != null) {
                tiles_group.add(e[_l]);
              }
            }
          }
        }
      } else if (axis == 'Z') {
        for (var _j6 = 0; _j6 < this.cube.length; _j6++) {
          for (var _k5 = 0; _k5 < this.cube[_j6].length; _k5++) {
            var _f = this.cubies[_j6][_k5][layer];
            if (_f != null) {
              cubies_group.add(_f);
            } else {
              this.inner_cubies[inner_cubie_index].position.set(_j6 - this.middle, _k5 - this.middle, layer - this.middle);
              cubies_group.add(this.inner_cubies[inner_cubie_index]);
              inner_cubie_index += 1;
            }
            var _e3 = this.tiles[_j6][_k5][layer];
            for (var _l2 = 0; _l2 < _e3.length; _l2++) {
              if (_e3[_l2] != null) {
                tiles_group.add(_e3[_l2]);
              }
            }
          }
        }
      } else if (axis == 'X') {
        for (var _j7 = 0; _j7 < this.cube.length; _j7++) {
          for (var _k6 = 0; _k6 < this.cube[_j7][layer].length; _k6++) {
            var _f2 = this.cubies[_j7][layer][_k6];
            if (_f2 != null) {
              cubies_group.add(_f2);
            } else {
              this.inner_cubies[inner_cubie_index].position.set(_j7 - this.middle, layer - this.middle, _k6 - this.middle);
              cubies_group.add(this.inner_cubies[inner_cubie_index]);
              inner_cubie_index += 1;
            }
            var _e4 = this.tiles[_j7][layer][_k6];
            for (var _l3 = 0; _l3 < _e4.length; _l3++) {
              if (_e4[_l3] != null) {
                tiles_group.add(_e4[_l3]);
              }
            }
          }
        }
      }
      this.add(tiles_group);
      this.add(cubies_group);
      return [tiles_group, cubies_group];
    }
  }, {
    key: "update",
    value: function update() {
      if (this.solveCheck() && !this.isSolved) {
        console.log('Congratulations, you solved the cube!');
      }
      this.isSolved = this.solveCheck();
      if (this.current_layer_tiles && this.current_layer_cubies != null && this.current_move != null) {
        if (this.current_move[0] == 'Y') {
          this.current_layer_tiles.rotation.x += this.step;
          this.current_layer_cubies.rotation.x += this.step;
          if (Math.abs(this.current_layer_tiles.rotation.x) >= Math.abs(this.destination_angle)) {
            var qty = 1;
            if (this.current_move.length > 3) {
              qty = this.current_move[3];
            }
            this.move(this.current_move[0], this.current_move[1], this.current_move[2], qty);
            this.current_layer_tiles.rotation.x = 0;
            this.current_layer_cubies.rotation.x = 0;
            while (this.current_layer_cubies.children.length > 0) {
              this.cubies_group.add(this.current_layer_cubies.children[0]);
            }
            while (this.current_layer_tiles.children.length > 0) {
              this.tiles_group.add(this.current_layer_tiles.children[0]);
            }
            this.moves_executed.push(this.current_move);
            this.current_layer_tiles = null;
            this.current_layer_cubies = null;
            this.current_move = null;
            this.destination_angle = null;
            this.step = null;
          }
        } else if (this.current_move[0] == 'X') {
          this.current_layer_tiles.rotation.y += this.step;
          this.current_layer_cubies.rotation.y += this.step;
          if (Math.abs(this.current_layer_tiles.rotation.y) >= Math.abs(this.destination_angle)) {
            var _qty = 1;
            if (this.current_move.length > 3) {
              _qty = this.current_move[3];
            }
            this.move(this.current_move[0], this.current_move[1], this.current_move[2], _qty);
            this.current_layer_tiles.rotation.y = 0;
            this.current_layer_cubies.rotation.y = 0;
            while (this.current_layer_cubies.children.length > 0) {
              this.cubies_group.add(this.current_layer_cubies.children[0]);
            }
            while (this.current_layer_tiles.children.length > 0) {
              this.tiles_group.add(this.current_layer_tiles.children[0]);
            }
            this.moves_executed.push(this.current_move);
            this.current_layer_tiles = null;
            this.current_layer_cubies = null;
            this.current_move = null;
            this.destination_angle = null;
            this.step = null;
          }
        } else if (this.current_move[0] == 'Z') {
          this.current_layer_tiles.rotation.z += this.step;
          this.current_layer_cubies.rotation.z += this.step;
          if (Math.abs(this.current_layer_tiles.rotation.z) >= Math.abs(this.destination_angle)) {
            var _qty2 = 1;
            if (this.current_move.length > 3) {
              _qty2 = this.current_move[3];
            }
            this.move(this.current_move[0], this.current_move[1], this.current_move[2], _qty2);
            this.current_layer_tiles.rotation.z = 0;
            this.current_layer_cubies.rotation.z = 0;
            while (this.current_layer_cubies.children.length > 0) {
              this.cubies_group.add(this.current_layer_cubies.children[0]);
            }
            while (this.current_layer_tiles.children.length > 0) {
              this.tiles_group.add(this.current_layer_tiles.children[0]);
            }
            this.moves_executed.push(this.current_move);
            this.current_layer_tiles = null;
            this.current_layer_cubies = null;
            this.current_move = null;
            this.destination_angle = null;
            this.step = null;
          }
        }
      }
      if (this.move_queue.length > 0 && this.current_move == null && this.current_layer == null) {
        if (this.move_queue[0] == 'clear') {
          this.moves_executed = [];
          this.move_queue.shift();
        } else {
          this.current_move = this.move_queue.shift();
          var layer = this.get_layer(this.current_move[0], this.current_move[1]);
          this.current_layer_tiles = layer[0];
          this.current_layer_cubies = layer[1];
          var multiplier = 1;
          if (this.current_move[2] == 1) {
            multiplier = -1;
          }
          if (this.current_move.length > 3) {
            multiplier = multiplier * this.current_move[3];
          }
          this.destination_angle = Math.PI / 2 * multiplier;
          this.step = this.destination_angle * this.move_speed;
        }
      }
      this.resetMaterials();
      this.hover();
      this.solveCheck();
      if (this.intersects) {
        document.body.style.cursor = 'pointer';
      } else {
        document.body.style.cursor = 'default';
      }
    }
  }, {
    key: "hover",
    value: function hover() {
      var mouse = this.mouse;
      var camera = this.camera;
      var intersects = false;
      this.raycaster.setFromCamera(mouse, camera);
      var intersects_tiles_hitboxes = this.raycaster.intersectObjects(this.tiles_hitboxes_group.children);
      if (intersects_tiles_hitboxes.length > 0 && !intersects) {
        for (var i = 0; i < this.tiles_hitboxes.length; i++) {
          for (var j = 0; j < this.tiles_hitboxes[i].length; j++) {
            for (var k = 0; k < this.tiles_hitboxes[i][j].length; k++) {
              for (var l = 0; l < this.tiles_hitboxes[i][j][k].length; l++) {
                if (this.tiles_hitboxes[i][j][k][l] == intersects_tiles_hitboxes[0].object) {
                  this.cubies[i][j][k].material.color.setHex(this.select_color);
                  intersects = true;
                }
              }
            }
          }
        }
      }
      this.intersects = intersects;
    }
  }, {
    key: "resetMaterials",
    value: function resetMaterials() {
      for (var i = 0; i < this.cubies_group.children.length; i++) {
        this.cubies_group.children[i].material.color.setHex(this.color);
      }
    }
  }, {
    key: "solveCheck",
    value: function solveCheck() {
      for (var i = 0; i < this.cube.length; i++) {
        for (var j = 0; j < this.cube[i].length; j++) {
          for (var k = 0; k < this.cube[i][j].length; k++) {
            var tiles = this.tiles[i][j][k];
            var r = this.cube[i][j][k];
            for (var l = 0; l < r.length; l++) {
              if (r[l] != null) {
                tiles[l].material.color.set(this.colors[r[l]]);
              }
            }
          }
        }
      }
    }
  }, {
    key: "random_moves",
    value: function random_moves(num) {
      var moves = [];
      for (var i = 0; i < num; i++) {
        var axis = ['X', 'Y', 'Z'];
        var index = Math.floor(Math.random() * 3);
        var layer = Math.floor(Math.random() * this.size);
        if (i > 0) {
          while (axis[index] == moves[moves.length - 1][0] && layer == moves[moves.length - 1][1]) {
            index = Math.floor(Math.random() * 3);
            layer = Math.floor(Math.random() * this.size);
          }
        }
        moves.push([axis[index], layer, Math.floor(Math.random() * 2), Math.floor(Math.random() * 2) + 1]);
      }
      return moves;
    }
  }, {
    key: "undo_moves",
    value: function undo_moves() {
      this.move_queue = [];
      if (this.current_move != null) {
        var direction = 0;
        if (this.current_move[2] == 0) {
          direction = 1;
        }
        var qty = 1;
        if (this.current_move.length > 3) {
          qty = this.current_move[3];
        }
        this.move_queue.push([this.current_move[0], this.current_move[1], direction, qty]);
      }
      for (var i = this.moves_executed.length - 1; i >= 0; i--) {
        var _direction = 0;
        if (this.moves_executed[i][2] == 0) {
          _direction = 1;
        }
        var _qty3 = 1;
        if (this.moves_executed[i].length > 3) {
          _qty3 = this.moves_executed[i][3];
        }
        this.move_queue.push([this.moves_executed[i][0], this.moves_executed[i][1], _direction, _qty3]);
      }
      this.move_queue.push('clear');
    }
  }, {
    key: "scramble",
    value: function scramble() {
      this.move_queue = this.random_moves(this.size * 3);
    }
  }, {
    key: "rotate",
    value: function rotate(axis) {
      this.current_layer_tiles = this.tiles_group;
      this.current_layer_cubies = this.cubies_group;
      this.move_queue.push([axis]);
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown() {
      var mouse = this.mouse;
      var camera = this.camera;
      this.raycaster.setFromCamera(mouse, camera);
      this.ray = [_objectSpread({}, this.raycaster.ray.direction), _objectSpread({}, this.raycaster.ray.origin)];
      var intersects_tiles = this.raycaster.intersectObjects(this.tiles_hitboxes_group.children);
      var intersects = false;
      if (intersects_tiles.length > 0) {
        for (var i = 0; i < this.cube.length; i++) {
          for (var j = 0; j < this.cube[i].length; j++) {
            if (this.tiles_hitboxes[i][j][0][0] == intersects_tiles[0].object) {
              this.side = 'left';
              intersects = true;
              this.index = [i, j, 0];
            }
          }
        }
        for (var _i2 = 0; _i2 < this.cube.length; _i2++) {
          var right_tiles_row = [];
          for (var _j8 = 0; _j8 < this.cube[_i2].length; _j8++) {
            right_tiles_row.push(this.tiles[_i2][_j8][this.cube.length - 1][3]);
            if (this.tiles_hitboxes[_i2][_j8][this.cube.length - 1][3] == intersects_tiles[0].object) {
              this.side = 'right';
              intersects = true;
              this.index = [_i2, _j8, this.cube.length - 1];
            }
          }
        }
        for (var _i3 = 0; _i3 < this.cube.length; _i3++) {
          var down_tiles_row = [];
          for (var _j9 = 0; _j9 < this.cube[_i3][0].length; _j9++) {
            down_tiles_row.push(this.tiles[_i3][0][_j9][1]);
            if (this.tiles_hitboxes[_i3][0][_j9][1] == intersects_tiles[0].object) {
              this.side = 'down';
              intersects = true;
              this.index = [_i3, 0, _j9];
            }
          }
        }
        for (var _i4 = 0; _i4 < this.cube.length; _i4++) {
          var up_tiles_row = [];
          for (var _j10 = 0; _j10 < this.cube[_i4][this.cube.length - 1].length; _j10++) {
            up_tiles_row.push(this.tiles[_i4][this.cube.length - 1][_j10][4]);
            if (this.tiles_hitboxes[_i4][this.cube.length - 1][_j10][4] == intersects_tiles[0].object) {
              this.side = 'up';
              intersects = true;
              this.index = [_i4, this.cube.length - 1, _j10];
            }
          }
        }
        for (var _i5 = 0; _i5 < this.cube[0].length; _i5++) {
          var front_tiles_row = [];
          for (var _j11 = 0; _j11 < this.cube[_i5].length; _j11++) {
            front_tiles_row.push(this.tiles[0][_i5][_j11][5]);
            if (this.tiles_hitboxes[0][_i5][_j11][5] == intersects_tiles[0].object) {
              this.side = 'front';
              intersects = true;
              this.index = [0, _i5, _j11];
            }
          }
        }
        for (var _i6 = 0; _i6 < this.cube[this.cube.length - 1].length; _i6++) {
          var back_tiles_row = [];
          for (var _j12 = 0; _j12 < this.cube[_i6].length; _j12++) {
            back_tiles_row.push(this.tiles[this.cube.length - 1][_i6][_j12][2]);
            if (this.tiles_hitboxes[this.cube.length - 1][_i6][_j12][2] == intersects_tiles[0].object) {
              this.side = 'back';
              intersects = true;
              this.index = [this.cube.length - 1, _i6, _j12];
            }
          }
        }
      }
      this.intersects = intersects;
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp() {
      var mouse = this.mouse;
      var camera = this.camera;
      this.resetMaterials();
      if (this.index != null) {
        this.raycaster.setFromCamera(mouse, camera);
        var direction = this.raycaster.ray.direction;
        var delta = [this.ray[0]['x'] - direction['x'], this.ray[0]['y'] - direction['y'], this.ray[0]['z'] - direction['z']];
        var d1, d2;
        if (this.side == 'left') {
          d1 = delta[0];
          d2 = delta[1];
          if (Math.abs(d1) > Math.abs(d2)) {
            if (d1 > 0) {
              this.move_queue.push(['X', this.index[1], 0]);
            } else {
              this.move_queue.push(['X', this.index[1], 1]);
            }
          } else if (Math.abs(d1) < Math.abs(d2)) {
            if (d2 > 0) {
              this.move_queue.push(['Y', this.index[0], 1]);
            } else {
              this.move_queue.push(['Y', this.index[0], 0]);
            }
          }
        } else if (this.side == 'right') {
          d1 = delta[0];
          d2 = delta[1];
          if (Math.abs(d1) > Math.abs(d2)) {
            if (d1 > 0) {
              this.move_queue.push(['X', this.index[1], 1]);
            } else {
              this.move_queue.push(['X', this.index[1], 0]);
            }
          } else if (Math.abs(d1) < Math.abs(d2)) {
            if (d2 > 0) {
              this.move_queue.push(['Y', this.index[0], 0]);
            } else {
              this.move_queue.push(['Y', this.index[0], 1]);
            }
          }
        } else if (this.side == 'down') {
          d1 = delta[0];
          d2 = delta[2];
          if (Math.abs(d1) > Math.abs(d2)) {
            if (d1 > 0) {
              this.move_queue.push(['Z', this.index[2], 1]);
            } else {
              this.move_queue.push(['Z', this.index[2], 0]);
            }
          } else if (Math.abs(d1) < Math.abs(d2)) {
            if (d2 > 0) {
              this.move_queue.push(['Y', this.index[0], 0]);
            } else {
              this.move_queue.push(['Y', this.index[0], 1]);
            }
          }
        } else if (this.side == 'up') {
          d1 = delta[0];
          d2 = delta[2];
          if (Math.abs(d1) > Math.abs(d2)) {
            if (d1 > 0) {
              this.move_queue.push(['Z', this.index[2], 0]);
            } else {
              this.move_queue.push(['Z', this.index[2], 1]);
            }
          } else if (Math.abs(d1) < Math.abs(d2)) {
            if (d2 > 0) {
              this.move_queue.push(['Y', this.index[0], 1]);
            } else {
              this.move_queue.push(['Y', this.index[0], 0]);
            }
          }
        } else if (this.side == 'front') {
          d1 = delta[1];
          d2 = delta[2];
          if (Math.abs(d1) > Math.abs(d2)) {
            if (d1 > 0) {
              this.move_queue.push(['Z', this.index[2], 0]);
            } else {
              this.move_queue.push(['Z', this.index[2], 1]);
            }
          } else if (Math.abs(d1) < Math.abs(d2)) {
            if (d2 > 0) {
              this.move_queue.push(['X', this.index[1], 1]);
            } else {
              this.move_queue.push(['X', this.index[1], 0]);
            }
          }
        } else if (this.side == 'back') {
          d1 = delta[1];
          d2 = delta[2];
          if (Math.abs(d1) > Math.abs(d2)) {
            if (d1 > 0) {
              this.move_queue.push(['Z', this.index[2], 1]);
            } else {
              this.move_queue.push(['Z', this.index[2], 0]);
            }
          } else if (Math.abs(d1) < Math.abs(d2)) {
            if (d2 > 0) {
              this.move_queue.push(['X', this.index[1], 0]);
            } else {
              this.move_queue.push(['X', this.index[1], 1]);
            }
          }
        }
        this.raycaster.setFromCamera(mouse, camera);
        delta = [this.ray[0]['x'] - direction['x'], this.ray[0]['y'] - direction['y'], this.ray[0]['z'] - direction['z']];
        this.cubies[this.index[0]][this.index[1]][this.index[2]].material.color.setHex(this.color);
        this.raycaster.setFromCamera(mouse, camera);
        var intersects = this.raycaster.intersectObjects(this.tiles_hitboxes_group.children);
        this.intersects = intersects;
        this.index = null;
      }
    }
  }]);
  return RubiksCube;
}(external_three_namespaceObject.Group);
/* harmony default export */ const src_RubiksCube = (RubiksCube);
var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
