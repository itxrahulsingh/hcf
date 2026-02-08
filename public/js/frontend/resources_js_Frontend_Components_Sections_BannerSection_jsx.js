"use strict";
exports.id = "resources_js_Frontend_Components_Sections_BannerSection_jsx";
exports.ids = ["resources_js_Frontend_Components_Sections_BannerSection_jsx"];
exports.modules = {

/***/ "./resources/js/Frontend/Components/Banner/Banner1.jsx":
/*!*************************************************************!*\
  !*** ./resources/js/Frontend/Components/Banner/Banner1.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Banner1)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



function Banner1(_ref) {
  var data = _ref.data;
  var title = data.title,
    background_image_url = data.background_image_url,
    desktop_height = data.desktop_height,
    mobile_height = data.mobile_height;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("desktop"),
    _useState2 = _slicedToArray(_useState, 2),
    screenSize = _useState2[0],
    setScreenSize = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handleResize = function handleResize() {
      if (window.innerWidth < 768) {
        setScreenSize("mobile");
      } else {
        setScreenSize("desktop");
      }
    };
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return function () {
      return window.removeEventListener("resize", handleResize);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "cs_banner cs_style_1 cs_bg_filed cs_primary_bg",
    style: {
      backgroundImage: "url(".concat(background_image_url, ")"),
      height: screenSize === "desktop" ? "".concat(desktop_height, "px") : "".concat(mobile_height, "px")
    },
    children: title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
        className: "mb-0 cs_white_color cs_fs_30 text-end cs_normal",
        dangerouslySetInnerHTML: {
          __html: title
        }
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Banner/Banner2.jsx":
/*!*************************************************************!*\
  !*** ./resources/js/Frontend/Components/Banner/Banner2.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Banner2)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



function Banner2(_ref) {
  var data = _ref.data;
  var title = data.title,
    background_image_url = data.background_image_url,
    desktop_height = data.desktop_height,
    mobile_height = data.mobile_height;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("desktop"),
    _useState2 = _slicedToArray(_useState, 2),
    screenSize = _useState2[0],
    setScreenSize = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handleResize = function handleResize() {
      if (window.innerWidth < 768) {
        setScreenSize("mobile");
      } else {
        setScreenSize("desktop");
      }
    };
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return function () {
      return window.removeEventListener("resize", handleResize);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "cs_banner cs_style_1 cs_bg_filed cs_primary_bg",
    style: {
      backgroundImage: "url(".concat(background_image_url, ")"),
      height: screenSize === "desktop" ? "".concat(desktop_height, "px") : "".concat(mobile_height, "px")
    },
    children: title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
        className: "mb-0 cs_white_color cs_fs_50 text-end cs_normal",
        dangerouslySetInnerHTML: {
          __html: title
        }
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Banner/Banner3.jsx":
/*!*************************************************************!*\
  !*** ./resources/js/Frontend/Components/Banner/Banner3.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Banner3)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



function Banner3(_ref) {
  var data = _ref.data;
  var title = data.title,
    background_image_url = data.background_image_url,
    desktop_height = data.desktop_height,
    mobile_height = data.mobile_height;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("desktop"),
    _useState2 = _slicedToArray(_useState, 2),
    screenSize = _useState2[0],
    setScreenSize = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handleResize = function handleResize() {
      if (window.innerWidth < 768) {
        setScreenSize("mobile");
      } else {
        setScreenSize("desktop");
      }
    };
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return function () {
      return window.removeEventListener("resize", handleResize);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "cs_banner cs_style_3 cs_bg_filed text-center cs_center",
    style: {
      backgroundImage: "url(".concat(background_image_url, ")"),
      height: screenSize === "desktop" ? "".concat(desktop_height, "px") : "".concat(mobile_height, "px")
    },
    children: [title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
        className: "mb-0 cs_white_color cs_fs_60 cs_bold",
        dangerouslySetInnerHTML: {
          __html: title
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "cs_shape_1 cs_accent_color",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
        width: 228,
        height: 475,
        viewBox: "0 0 228 475",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
          x: "195.468",
          y: "187.383",
          width: 451,
          height: 42,
          transform: "rotate(140.444 195.468 187.383)",
          fill: "currentColor"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
          x: "212.468",
          y: "109.383",
          width: 451,
          height: 42,
          transform: "rotate(140.444 212.468 109.383)",
          fill: "currentColor"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
          x: "227.468",
          y: "32.3826",
          width: 451,
          height: 42,
          transform: "rotate(140.444 227.468 32.3826)",
          fill: "currentColor"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "cs_shape_2 cs_accent_color",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
        width: 210,
        height: 475,
        viewBox: "0 0 210 475",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
          x: 32,
          y: "287.213",
          width: 451,
          height: 42,
          transform: "rotate(-39.5563 32 287.213)",
          fill: "currentColor"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
          x: 15,
          y: "365.213",
          width: 451,
          height: 42,
          transform: "rotate(-39.5563 15 365.213)",
          fill: "currentColor"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
          y: "442.213",
          width: 451,
          height: 42,
          transform: "rotate(-39.5563 0 442.213)",
          fill: "currentColor"
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Banner/Banner4.jsx":
/*!*************************************************************!*\
  !*** ./resources/js/Frontend/Components/Banner/Banner4.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Banner4)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Banner4(_ref) {
  var data = _ref.data;
  var title = data.title,
    subtitle = data.subtitle,
    image_url = data.image_url,
    background_image_url = data.background_image_url;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "cs_section_heading cs_style_1",
        children: [image_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "cs_shape_1",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
            src: image_url,
            alt: "Icon",
            loading: "lazy",
            decoding: "async"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          className: "cs_section_subtitle cs_fs_18 cs_medium",
          dangerouslySetInnerHTML: {
            __html: subtitle
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
          className: "cs_section_title cs_fs_53 cs_normal mb-0",
          dangerouslySetInnerHTML: {
            __html: title
          }
        })]
      })
    }), background_image_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "cs_height_90 cs_height_lg_70"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "cs_about_thumb_1 cs_bg_filed",
        style: {
          backgroundImage: "url(".concat(background_image_url, ")")
        }
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Banner/Banner5.jsx":
/*!*************************************************************!*\
  !*** ./resources/js/Frontend/Components/Banner/Banner5.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Banner5)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Banner5(_ref) {
  var data = _ref.data;
  var title = data.title,
    subtitle = data.subtitle,
    background_image_url = data.background_image_url;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "cs_page_heading cs_style_1 cs_bg_filed cs_primary_bg",
    style: {
      backgroundImage: "url(".concat(background_image_url, ")")
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "cs_section_heading cs_style_1",
        children: [subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          className: "cs_section_subtitle cs_fs_18 cs_medium cs_white_color",
          dangerouslySetInnerHTML: {
            __html: subtitle
          }
        }), title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
          className: "cs_section_title cs_fs_53 cs_normal mb-0 cs_white_color",
          dangerouslySetInnerHTML: {
            __html: title
          }
        })]
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Banner/Banner6.jsx":
/*!*************************************************************!*\
  !*** ./resources/js/Frontend/Components/Banner/Banner6.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Banner6)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Banner6(_ref) {
  var data = _ref.data;
  var title = data.title,
    subtitle = data.subtitle,
    background_image_url = data.background_image_url;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "container",
      children: (subtitle || title) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "cs_section_heading cs_style_1",
          children: [subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            className: "cs_section_subtitle cs_fs_18 cs_medium",
            dangerouslySetInnerHTML: {
              __html: subtitle
            }
          }), title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
            className: "cs_section_title cs_fs_53 cs_normal mb-0",
            dangerouslySetInnerHTML: {
              __html: title
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "cs_height_85 cs_height_lg_50"
        })]
      })
    }), background_image_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "cs_half_white",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
          src: background_image_url,
          alt: "Thumbnail",
          className: "cs_radius_50_50_0_0",
          loading: "lazy",
          decoding: "async"
        })
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Sections/BannerSection.jsx":
/*!*********************************************************************!*\
  !*** ./resources/js/Frontend/Components/Sections/BannerSection.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BannerSection)
/* harmony export */ });
/* harmony import */ var _Frontend_Components_Banner_Banner1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Frontend/Components/Banner/Banner1 */ "./resources/js/Frontend/Components/Banner/Banner1.jsx");
/* harmony import */ var _Frontend_Components_Banner_Banner2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Frontend/Components/Banner/Banner2 */ "./resources/js/Frontend/Components/Banner/Banner2.jsx");
/* harmony import */ var _Frontend_Components_Banner_Banner3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Frontend/Components/Banner/Banner3 */ "./resources/js/Frontend/Components/Banner/Banner3.jsx");
/* harmony import */ var _Frontend_Components_Banner_Banner4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Frontend/Components/Banner/Banner4 */ "./resources/js/Frontend/Components/Banner/Banner4.jsx");
/* harmony import */ var _Frontend_Components_Banner_Banner5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Frontend/Components/Banner/Banner5 */ "./resources/js/Frontend/Components/Banner/Banner5.jsx");
/* harmony import */ var _Frontend_Components_Banner_Banner6__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Frontend/Components/Banner/Banner6 */ "./resources/js/Frontend/Components/Banner/Banner6.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







function BannerSection(_ref) {
  var _sections_data$layout;
  var sections_data = _ref.sections_data;
  var sectionLayout = (_sections_data$layout = sections_data === null || sections_data === void 0 ? void 0 : sections_data.layout) !== null && _sections_data$layout !== void 0 ? _sections_data$layout : "1";
  var section = "";
  if (sectionLayout === "1") {
    section = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Frontend_Components_Banner_Banner1__WEBPACK_IMPORTED_MODULE_0__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "2") {
    section = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Frontend_Components_Banner_Banner2__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "3") {
    section = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Frontend_Components_Banner_Banner3__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "4") {
    section = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Frontend_Components_Banner_Banner4__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "5") {
    section = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Frontend_Components_Banner_Banner5__WEBPACK_IMPORTED_MODULE_4__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "6") {
    section = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Frontend_Components_Banner_Banner6__WEBPACK_IMPORTED_MODULE_5__["default"], {
      data: sections_data
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: section
  });
}

/***/ })

};
;