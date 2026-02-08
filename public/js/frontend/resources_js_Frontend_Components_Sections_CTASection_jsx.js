"use strict";
exports.id = "resources_js_Frontend_Components_Sections_CTASection_jsx";
exports.ids = ["resources_js_Frontend_Components_Sections_CTASection_jsx"];
exports.modules = {

/***/ "./resources/js/Frontend/Components/Cta/Cta.jsx":
/*!******************************************************!*\
  !*** ./resources/js/Frontend/Components/Cta/Cta.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cta)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button */ "./resources/js/Frontend/Components/Button.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function Cta(_ref) {
  var data = _ref.data;
  var background_image_url = data.background_image_url,
    title = data.title,
    sub_title = data.sub_title,
    action_text = data.action_text,
    action_url = data.action_url;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "cs_team cs_style_1 cs_bg_filed",
    style: {
      backgroundImage: "url(".concat(background_image_url, ")")
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "cs_section_heading cs_style_1",
        children: [sub_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "cs_section_subtitle cs_fs_18 cs_medium cs_ternary_color",
          dangerouslySetInnerHTML: {
            __html: sub_title
          }
        }), title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "cs_section_title cs_fs_53 cs_normal mb-0 cs_white_color",
          dangerouslySetInnerHTML: {
            __html: title
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "cs_height_35 cs_height_lg_25"
        }), (action_url || action_text) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
          href: action_url,
          btnText: action_text,
          btnClass: "cs_btn cs_style_1 cs_type_2 cs_primary_color cs_white_bg"
        })]
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Cta/Cta2.jsx":
/*!*******************************************************!*\
  !*** ./resources/js/Frontend/Components/Cta/Cta2.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cta2)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button */ "./resources/js/Frontend/Components/Button.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function Cta2(_ref) {
  var data = _ref.data;
  var image_url = data.image_url,
    title = data.title,
    sub_title = data.sub_title,
    action_text = data.action_text,
    action_url = data.action_url;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "cs_cta cs_style_1 text-center position-relative",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "cs_cta_shape_1 cs_accent_color position-absolute",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
        width: 219,
        height: 475,
        viewBox: "0 0 219 475",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
          x: "186.468",
          y: "187.382",
          width: 451,
          height: 42,
          transform: "rotate(140.444 186.468 187.382)",
          fill: "currentColor"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
          x: "203.468",
          y: "109.382",
          width: 451,
          height: 42,
          transform: "rotate(140.444 203.468 109.382)",
          fill: "currentColor"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
          x: "218.468",
          y: "32.3823",
          width: 451,
          height: 42,
          transform: "rotate(140.444 218.468 32.3823)",
          fill: "currentColor"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "cs_cta_shape_2 cs_accent_color position-absolute",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
        width: 219,
        height: 475,
        viewBox: "0 0 219 475",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
          x: 32,
          y: "287.213",
          width: 451,
          height: 42,
          transform: "rotate(-39.5563 32 287.213)",
          fill: "currentColor"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
          x: 15,
          y: "365.213",
          width: 451,
          height: 42,
          transform: "rotate(-39.5563 15 365.213)",
          fill: "currentColor"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
          y: "442.213",
          width: 451,
          height: 42,
          transform: "rotate(-39.5563 0 442.213)",
          fill: "currentColor"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "cs_cta_shape_1"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "container",
      children: [title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
        className: "cs_cta_title cs_fs_120 cs_bold",
        dangerouslySetInnerHTML: {
          __html: title
        }
      }), sub_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        className: "cs_cta_subtitle",
        dangerouslySetInnerHTML: {
          __html: sub_title
        }
      }), (action_url || action_text) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        href: action_url,
        btnText: action_text,
        btnClass: "cs_btn cs_style_1 cs_type_2 cs_primary_bg cs_white_color cs_w_100_sm"
      }), image_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "cs_cta_thumb",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
          src: image_url,
          alt: "Thumb",
          loading: "lazy",
          decoding: "async"
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Cta/Cta3.jsx":
/*!*******************************************************!*\
  !*** ./resources/js/Frontend/Components/Cta/Cta3.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cta3)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Button */ "./resources/js/Frontend/Components/Button.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Cta3(_ref) {
  var data = _ref.data;
  var image_url = data.image_url,
    background_image_url = data.background_image_url,
    title = data.title,
    action_text = data.action_text,
    action_url = data.action_url;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "container",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "cs_cta cs_style_3 position-relative cs_bg_filed",
      style: {
        backgroundImage: "url(".concat(background_image_url, ")")
      },
      children: [image_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "cs_cta_icon",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
          src: image_url,
          alt: title,
          loading: "lazy",
          decoding: "async"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "cs_cta_in position-relative",
        children: [title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
          className: "cs_cta_title cs_fs_30 cs_normal cs_white_color",
          dangerouslySetInnerHTML: {
            __html: title
          }
        }), (action_url || action_text) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_0__["default"], {
          href: action_url,
          btnText: action_text,
          btnClass: "cs_btn cs_style_1 cs_type_2 cs_primary_bg cs_white_color cs_w_100_sm"
        })]
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Cta/Cta4.jsx":
/*!*******************************************************!*\
  !*** ./resources/js/Frontend/Components/Cta/Cta4.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cta4)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Button */ "./resources/js/Frontend/Components/Button.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Cta4(_ref) {
  var data = _ref.data;
  var title = data.title,
    action_text = data.action_text,
    action_url = data.action_url;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "container",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "cs_cta cs_style_4 text-center",
      children: [title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
        className: "cs_cta_title cs_white_color cs_fs_120",
        dangerouslySetInnerHTML: {
          __html: title
        }
      }), (action_url || action_text) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_0__["default"], {
        href: action_url,
        btnText: action_text,
        btnClass: "cs_btn cs_style_1 cs_type_4 cs_fs_18"
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Sections/CTASection.jsx":
/*!******************************************************************!*\
  !*** ./resources/js/Frontend/Components/Sections/CTASection.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CTASection)
/* harmony export */ });
/* harmony import */ var _Cta_Cta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Cta/Cta */ "./resources/js/Frontend/Components/Cta/Cta.jsx");
/* harmony import */ var _Cta_Cta2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Cta/Cta2 */ "./resources/js/Frontend/Components/Cta/Cta2.jsx");
/* harmony import */ var _Cta_Cta3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Cta/Cta3 */ "./resources/js/Frontend/Components/Cta/Cta3.jsx");
/* harmony import */ var _Cta_Cta4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Cta/Cta4 */ "./resources/js/Frontend/Components/Cta/Cta4.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function CTASection(_ref) {
  var _sections_data$layout;
  var sections_data = _ref.sections_data;
  var sectionLayout = (_sections_data$layout = sections_data === null || sections_data === void 0 ? void 0 : sections_data.layout) !== null && _sections_data$layout !== void 0 ? _sections_data$layout : "1";
  // conditional render
  var layoutSection = "";
  if (sectionLayout === "1") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Cta_Cta__WEBPACK_IMPORTED_MODULE_0__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "2") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Cta_Cta2__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "3") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Cta_Cta3__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "4") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Cta_Cta4__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: sections_data
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: layoutSection
  });
}

/***/ })

};
;