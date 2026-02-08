"use strict";
exports.id = "resources_js_Frontend_Components_Sections_GoogleMapSection_jsx";
exports.ids = ["resources_js_Frontend_Components_Sections_GoogleMapSection_jsx"];
exports.modules = {

/***/ "./resources/js/Frontend/Components/Map/Map1.jsx":
/*!*******************************************************!*\
  !*** ./resources/js/Frontend/Components/Map/Map1.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Map1)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Map1(_ref) {
  var data = _ref.data;
  var google_map_iframe = data.google_map_iframe;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "cs_google_map cs_gray_bg",
    dangerouslySetInnerHTML: {
      __html: google_map_iframe
    }
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Sections/GoogleMapSection.jsx":
/*!************************************************************************!*\
  !*** ./resources/js/Frontend/Components/Sections/GoogleMapSection.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GoogleMapSection)
/* harmony export */ });
/* harmony import */ var _Map_Map1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Map/Map1 */ "./resources/js/Frontend/Components/Map/Map1.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function GoogleMapSection(_ref) {
  var _sections_data$layout;
  var sections_data = _ref.sections_data;
  var sectionLayout = (_sections_data$layout = sections_data === null || sections_data === void 0 ? void 0 : sections_data.layout) !== null && _sections_data$layout !== void 0 ? _sections_data$layout : "1";
  // conditional rendering
  var section = "";
  if (sectionLayout === "1") {
    section = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Map_Map1__WEBPACK_IMPORTED_MODULE_0__["default"], {
      data: sections_data
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: section
  });
}

/***/ })

};
;