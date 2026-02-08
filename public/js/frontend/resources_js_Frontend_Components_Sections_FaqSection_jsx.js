"use strict";
exports.id = "resources_js_Frontend_Components_Sections_FaqSection_jsx";
exports.ids = ["resources_js_Frontend_Components_Sections_FaqSection_jsx"];
exports.modules = {

/***/ "./resources/js/Frontend/Components/Accordion.jsx":
/*!********************************************************!*\
  !*** ./resources/js/Frontend/Components/Accordion.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Accordion)
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


function AccordionItem(_ref) {
  var title = _ref.title,
    content = _ref.content,
    isOpen = _ref.isOpen,
    onClick = _ref.onClick;
  var accordionContentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    contentHeight = _useState2[0],
    setContentHeight = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (accordionContentRef.current) {
      // Measure the content's height and set it dynamically
      setContentHeight(accordionContentRef.current.offsetHeight);
    }
  }, [isOpen]);
  var accordionClass = isOpen ? "cs_accordian active" : "cs_accordian";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: accordionClass,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "cs_accordian_head",
        onClick: onClick,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
          className: "cs_accordian_title cs_fs_24 cs_normal",
          children: title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "cs_accordian_toggle cs_accent_color"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "cs_accordian_body_wrap",
        style: {
          height: isOpen ? "".concat(contentHeight, "px") : "0"
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "cs_accordian_body",
          ref: accordionContentRef,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            children: content
          })
        })
      })]
    })
  });
}
function Accordion(_ref2) {
  var accordionData = _ref2.accordionData,
    variant = _ref2.variant;
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1),
    _useState4 = _slicedToArray(_useState3, 2),
    openItemIndex = _useState4[0],
    setOpenItemIndex = _useState4[1]; // Initialize with -1 for no item open initially
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    firstItemOpen = _useState6[0],
    setFirstItemOpen = _useState6[1]; // Set the first item to open initially

  var handleItemClick = function handleItemClick(index) {
    if (index === openItemIndex) {
      setOpenItemIndex(-1);
    } else {
      setOpenItemIndex(index);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Open the first item when the component mounts
    if (firstItemOpen) {
      setOpenItemIndex(0);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: variant,
      children: accordionData === null || accordionData === void 0 ? void 0 : accordionData.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AccordionItem, {
          title: item.faq_question,
          content: item.faq_answer,
          isOpen: index === openItemIndex,
          onClick: function onClick() {
            return handleItemClick(index);
          }
        }, index);
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Faq/Faq1.jsx":
/*!*******************************************************!*\
  !*** ./resources/js/Frontend/Components/Faq/Faq1.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Faq1)
/* harmony export */ });
/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Accordion */ "./resources/js/Frontend/Components/Accordion.jsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button */ "./resources/js/Frontend/Components/Button.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function Faq1(_ref) {
  var data = _ref.data;
  var section_title = data.section_title,
    section_subtitle = data.section_subtitle,
    image_url = data.image_url,
    action_text = data.action_text,
    action_url = data.action_url,
    faq_list = data.faq_list;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "container",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "row",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "col-lg-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "cs_section_heading cs_style_1",
          children: [section_subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "cs_section_subtitle cs_fs_18 cs_medium",
            dangerouslySetInnerHTML: {
              __html: section_subtitle
            }
          }), section_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
            className: "cs_section_title cs_fs_53 cs_normal mb-0",
            dangerouslySetInnerHTML: {
              __html: section_title
            }
          })]
        }), (action_url || action_text) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "cs_height_40 cs_height_lg_40"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
            href: action_url,
            btnText: action_text,
            btnClass: "cs_btn cs_style_1 cs_type_4 cs_primary_color cs_shining_btn"
          })]
        }), image_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "cs_height_75 cs_height_lg_30"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "cs_mobile_hide cs_ternary_color",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              src: image_url,
              alt: "Shape",
              loading: "lazy",
              decoding: "async"
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "col-lg-6 offset-lg-1",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Accordion__WEBPACK_IMPORTED_MODULE_0__["default"], {
          accordionData: faq_list,
          variant: "cs_accordians cs_style_1"
        })
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Faq/Faq2.jsx":
/*!*******************************************************!*\
  !*** ./resources/js/Frontend/Components/Faq/Faq2.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Faq2)
/* harmony export */ });
/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Accordion */ "./resources/js/Frontend/Components/Accordion.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Faq2(_ref) {
  var data = _ref.data;
  var section_title = data.section_title,
    section_title_2 = data.section_title_2,
    faq_list = data.faq_list,
    faq_list_2 = data.faq_list_2;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "container",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "row cs_gap_y_100",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "col-xl-6",
        children: [section_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
          className: "cs_faq_heading cs_fs_30 cs_normal cs_white_color cs_accent_bg",
          dangerouslySetInnerHTML: {
            __html: section_title
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Accordion__WEBPACK_IMPORTED_MODULE_0__["default"], {
          accordionData: faq_list,
          variant: "cs_accordians cs_style_1"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "col-xl-6",
        children: [section_title_2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
          className: "cs_faq_heading cs_fs_30 cs_normal cs_white_color cs_accent_bg",
          dangerouslySetInnerHTML: {
            __html: section_title_2
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Accordion__WEBPACK_IMPORTED_MODULE_0__["default"], {
          accordionData: faq_list_2,
          variant: "cs_accordians cs_style_1"
        })]
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Sections/FaqSection.jsx":
/*!******************************************************************!*\
  !*** ./resources/js/Frontend/Components/Sections/FaqSection.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FaqSection)
/* harmony export */ });
/* harmony import */ var _Frontend_Components_Faq_Faq1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Frontend/Components/Faq/Faq1 */ "./resources/js/Frontend/Components/Faq/Faq1.jsx");
/* harmony import */ var _Frontend_Components_Faq_Faq2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Frontend/Components/Faq/Faq2 */ "./resources/js/Frontend/Components/Faq/Faq2.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function FaqSection(_ref) {
  var _sections_data$layout;
  var sections_data = _ref.sections_data;
  var sectionLayout = (_sections_data$layout = sections_data === null || sections_data === void 0 ? void 0 : sections_data.layout) !== null && _sections_data$layout !== void 0 ? _sections_data$layout : "1";

  // conditional render
  var section = "";
  if (sectionLayout === "1") {
    section = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Frontend_Components_Faq_Faq1__WEBPACK_IMPORTED_MODULE_0__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "2") {
    section = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Frontend_Components_Faq_Faq2__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: sections_data
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: section
  });
}

/***/ })

};
;