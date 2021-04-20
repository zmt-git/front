(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else if(typeof exports === 'object')
		exports["webpackNumbers"] = factory(require("lodash"));
	else
		root["webpackNumbers"] = factory(root["_"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__8092__) {
return (self["webpackChunkwebpackNumbers"] = self["webpackChunkwebpackNumbers"] || []).push([["index"],{

/***/ 4917:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bg2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8929);
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_bg2_jpg__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nhtml,body{\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.hello{\r\n  color: red;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: cover;\r\n}\r\n.hello-img{\r\n  width: 300px;\r\n}", "",{"version":3,"sources":["webpack://./src/reset.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;AACZ;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,UAAU;EACV,yDAAkC;EAClC,sBAAsB;AACxB;AACA;EACE,YAAY;AACd","sourcesContent":["*{\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nhtml,body{\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.hello{\r\n  color: red;\r\n  background-image: url('./bg2.jpg');\r\n  background-size: cover;\r\n}\r\n.hello-img{\r\n  width: 300px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4917);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ 8929:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3b63fd6f7222ac6b4851.jpg";

/***/ }),

/***/ 269:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"test","age":18,"sex":1}');

/***/ }),

/***/ 8138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8092);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1860);
/* harmony import */ var _bg2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8929);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(269);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6124);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_4__);






function component () {
  const element = document.createElement('div')

  let str =`姓名: ${_config_json__WEBPACK_IMPORTED_MODULE_3__.name} -- 年龄: ${_config_json__WEBPACK_IMPORTED_MODULE_3__.age}岁 -- 性别：${_config_json__WEBPACK_IMPORTED_MODULE_3__.sex ? '男' : '女'}`

  element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(['hello', 'webpack']) + str

  element.classList.add('hello')

  const bg = new Image()

  bg.src = _bg2_jpg__WEBPACK_IMPORTED_MODULE_2__

  bg.classList.add('hello-img')

  element.appendChild(bg)

  console.log('watch')
  console.log('watch')
  console.log("development")

  return element
}

document.body.appendChild(component())


/***/ }),

/***/ 8092:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__8092__;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8138)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrTnVtYmVycy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vd2VicGFja051bWJlcnMvLi9zcmMvcmVzZXQuY3NzIiwid2VicGFjazovL3dlYnBhY2tOdW1iZXJzLy4vc3JjL3Jlc2V0LmNzcz9lZGUwIiwid2VicGFjazovL3dlYnBhY2tOdW1iZXJzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2tOdW1iZXJzL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJsb2Rhc2hcIixcImNvbW1vbmpzMlwiOlwibG9kYXNoXCIsXCJhbWRcIjpcImxvZGFzaFwiLFwicm9vdFwiOlwiX1wifSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNzSDtBQUM3QjtBQUNPO0FBQzFDO0FBQ3RELDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0YseUNBQXlDLHNGQUErQixDQUFDLHFDQUE2QjtBQUN0RztBQUNBLDRDQUE0QyxnQkFBZ0IsaUJBQWlCLEtBQUssY0FBYyxrQkFBa0IsbUJBQW1CLEtBQUssV0FBVyxpQkFBaUIsd0VBQXdFLDZCQUE2QixLQUFLLGVBQWUsbUJBQW1CLEtBQUssT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLDJCQUEyQixnQkFBZ0IsaUJBQWlCLEtBQUssY0FBYyxrQkFBa0IsbUJBQW1CLEtBQUssV0FBVyxpQkFBaUIseUNBQXlDLDZCQUE2QixLQUFLLGVBQWUsbUJBQW1CLEtBQUssbUJBQW1CO0FBQzV4QjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDVmtEO0FBQ3pGLFlBQXVGOztBQUV2Rjs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyxtRkFBTzs7OztBQUl4QixpRUFBZSwwRkFBYyxNQUFNLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWmI7QUFDRjtBQUNTO0FBQ0s7QUFDWDs7QUFFdkI7QUFDQTs7QUFFQSxrQkFBa0IsOENBQVcsQ0FBQyxVQUFVLDZDQUFVLENBQUMsVUFBVSw2Q0FBVSxhQUFhOztBQUVwRixzQkFBc0Isa0RBQU07O0FBRTVCOztBQUVBOztBQUVBLFdBQVcscUNBQUs7O0FBRWhCOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLGFBQW9COztBQUVsQztBQUNBOztBQUVBOzs7Ozs7Ozs7QUM5QkEsbUQiLCJmaWxlIjoiaW5kZXguMzFiMmNjNmVhYTY5YmYyYTIzMTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wibG9kYXNoXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIndlYnBhY2tOdW1iZXJzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ3ZWJwYWNrTnVtYmVyc1wiXSA9IGZhY3Rvcnkocm9vdFtcIl9cIl0pO1xufSkoc2VsZiwgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fODA5Ml9fKSB7XG5yZXR1cm4gIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuL2JnMi5qcGdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuaHRtbCxib2R5e1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcbi5oZWxsb3tcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuLmhlbGxvLWltZ3tcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFVBQVU7RUFDVix5REFBa0M7RUFDbEMsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcbmh0bWwsYm9keXtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4uaGVsbG97XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2JnMi5qcGcnKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcbi5oZWxsby1pbWd7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0ICcuL3Jlc2V0LmNzcydcclxuaW1wb3J0IGJnSW1nIGZyb20gJy4vYmcyLmpwZydcclxuaW1wb3J0IHBlcnNvbiBmcm9tICcuL2NvbmZpZy5qc29uJ1xyXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJ1xyXG5cclxuZnVuY3Rpb24gY29tcG9uZW50ICgpIHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHJcbiAgbGV0IHN0ciA9YOWnk+WQjTogJHtwZXJzb24ubmFtZX0gLS0g5bm06b6EOiAke3BlcnNvbi5hZ2V95bKBIC0tIOaAp+WIq++8miR7cGVyc29uLnNleCA/ICfnlLcnIDogJ+Wlsyd9YFxyXG5cclxuICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbJ2hlbGxvJywgJ3dlYnBhY2snXSkgKyBzdHJcclxuXHJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoZWxsbycpXHJcblxyXG4gIGNvbnN0IGJnID0gbmV3IEltYWdlKClcclxuXHJcbiAgYmcuc3JjID0gYmdJbWdcclxuXHJcbiAgYmcuY2xhc3NMaXN0LmFkZCgnaGVsbG8taW1nJylcclxuXHJcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChiZylcclxuXHJcbiAgY29uc29sZS5sb2coJ3dhdGNoJylcclxuICBjb25zb2xlLmxvZygnd2F0Y2gnKVxyXG4gIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52Lk5PREVfRU5WKVxyXG5cclxuICByZXR1cm4gZWxlbWVudFxyXG59XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzgwOTJfXzsiXSwic291cmNlUm9vdCI6IiJ9