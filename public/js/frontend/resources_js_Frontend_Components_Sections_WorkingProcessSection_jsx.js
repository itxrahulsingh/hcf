"use strict";
exports.id = "resources_js_Frontend_Components_Sections_WorkingProcessSection_jsx";
exports.ids = ["resources_js_Frontend_Components_Sections_WorkingProcessSection_jsx"];
exports.modules = {

/***/ "./resources/js/Frontend/Components/Sections/WorkingProcessSection.jsx":
/*!*****************************************************************************!*\
  !*** ./resources/js/Frontend/Components/Sections/WorkingProcessSection.jsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WorkingProcessSection)
/* harmony export */ });
/* harmony import */ var _WorkingProgress_WorkingProcess1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WorkingProgress/WorkingProcess1 */ "./resources/js/Frontend/Components/WorkingProgress/WorkingProcess1.jsx");
/* harmony import */ var _WorkingProgress_WorkingProcess2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../WorkingProgress/WorkingProcess2 */ "./resources/js/Frontend/Components/WorkingProgress/WorkingProcess2.jsx");
/* harmony import */ var _WorkingProgress_WorkingProcess3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../WorkingProgress/WorkingProcess3 */ "./resources/js/Frontend/Components/WorkingProgress/WorkingProcess3.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function WorkingProcessSection(_ref) {
  var _sections_data$layout;
  var sections_data = _ref.sections_data;
  var sectionLayout = (_sections_data$layout = sections_data === null || sections_data === void 0 ? void 0 : sections_data.layout) !== null && _sections_data$layout !== void 0 ? _sections_data$layout : "1";
  var layoutSection = "";
  if (sectionLayout === "1") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_WorkingProgress_WorkingProcess1__WEBPACK_IMPORTED_MODULE_0__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "2") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_WorkingProgress_WorkingProcess2__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "3") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_WorkingProgress_WorkingProcess3__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: sections_data
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: layoutSection
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/WorkingProgress/WorkingProcess1.jsx":
/*!******************************************************************************!*\
  !*** ./resources/js/Frontend/Components/WorkingProgress/WorkingProcess1.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WorkingProcess1)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function WorkingProcess1(_ref) {
  var data = _ref.data;
  var _ref2 = data || {},
    section_title = _ref2.section_title,
    section_subtitle = _ref2.section_subtitle,
    image_url = _ref2.image_url,
    feature_list = _ref2.feature_list;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "container",
    children: [(section_subtitle || section_title) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "cs_section_heading cs_style_1 text-center",
        children: [section_subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          className: "cs_section_subtitle cs_fs_18 cs_medium",
          dangerouslySetInnerHTML: {
            __html: section_subtitle
          }
        }), section_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
          className: "cs_section_title cs_fs_53 cs_normal mb-0",
          dangerouslySetInnerHTML: {
            __html: section_title
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "cs_height_85 cs_height_lg_50"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "row align-items-center cs_gap_y_40",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "col-xl-5 col-lg-6",
        children: image_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
          src: image_url,
          alt: "Thumbnail",
          className: "w-100",
          loading: "lazy",
          decoding: "async"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "col-lg-6 offset-xl-1",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
          className: "cs_list cs_style_3 cs_mp0",
          children: feature_list === null || feature_list === void 0 ? void 0 : feature_list.map(function (item, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
              children: (item.feature_title || item.feature_subtitle) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
                  className: "cs_fs_24 cs_normal",
                  dangerouslySetInnerHTML: {
                    __html: item.feature_title
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                  className: "mb-0",
                  dangerouslySetInnerHTML: {
                    __html: item.feature_subtitle
                  }
                })]
              })
            }, index);
          })
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/WorkingProgress/WorkingProcess2.jsx":
/*!******************************************************************************!*\
  !*** ./resources/js/Frontend/Components/WorkingProgress/WorkingProcess2.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WorkingProcess1)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function WorkingProcess1(_ref) {
  var data = _ref.data;
  var _ref2 = data || {},
    section_title = _ref2.section_title,
    section_subtitle = _ref2.section_subtitle,
    image_url = _ref2.image_url,
    feature_list = _ref2.feature_list;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "container",
    children: [(section_subtitle || section_title) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "cs_section_heading cs_style_1 text-center",
        children: [section_subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          className: "cs_section_subtitle cs_fs_18 cs_medium",
          dangerouslySetInnerHTML: {
            __html: section_subtitle
          }
        }), section_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
          className: "cs_section_title cs_fs_53 cs_normal mb-0",
          dangerouslySetInnerHTML: {
            __html: section_title
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "cs_height_85 cs_height_lg_50"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "row align-items-center cs_gap_y_50",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "col-lg-6",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
          className: "cs_list cs_style_3 cs_mp0",
          children: feature_list === null || feature_list === void 0 ? void 0 : feature_list.map(function (item, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
              children: (item.feature_title || item.feature_subtitle) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
                  className: "cs_fs_24 cs_normal",
                  dangerouslySetInnerHTML: {
                    __html: item.feature_title
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                  className: "mb-0",
                  dangerouslySetInnerHTML: {
                    __html: item.feature_subtitle
                  }
                })]
              })
            }, index);
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "col-xl-5 offset-xl-1 col-lg-6",
        children: image_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
          src: image_url,
          alt: "Thumbnail",
          className: "w-100",
          loading: "lazy",
          decoding: "async"
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/WorkingProgress/WorkingProcess3.jsx":
/*!******************************************************************************!*\
  !*** ./resources/js/Frontend/Components/WorkingProgress/WorkingProcess3.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WorkingProcess3)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function WorkingProcess3(_ref) {
  var data = _ref.data;
  var _ref2 = data || {},
    section_title = _ref2.section_title,
    section_subtitle = _ref2.section_subtitle,
    feature_list = _ref2.feature_list;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "container",
    children: [(section_subtitle || section_title) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "cs_section_heading cs_style_1 text-center",
        children: [section_subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          className: "cs_section_subtitle cs_fs_18 cs_medium",
          dangerouslySetInnerHTML: {
            __html: section_subtitle
          }
        }), section_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
          className: "cs_section_title cs_fs_53 cs_normal mb-0",
          dangerouslySetInnerHTML: {
            __html: section_title
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "cs_height_85 cs_height_lg_50"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "position-relative",
      children: feature_list === null || feature_list === void 0 ? void 0 : feature_list.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "cs_card cs_style_5 cs_primary_bg",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "cs_card_content",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
                className: "cs_card_number cs_fs_120 cs_bold cs_ternary_color",
                dangerouslySetInnerHTML: {
                  __html: item.feature_number
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
                className: "cs_card_title cs_fs_30 cs_white_color cs_normal",
                dangerouslySetInnerHTML: {
                  __html: item.feature_title
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                className: "cs_card_subtitle mb-0 cs_ternary_color",
                dangerouslySetInnerHTML: {
                  __html: item.feature_subtitle
                }
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "cs_card_thumb",
              children: item.feature_image_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                src: item.feature_image_url,
                alt: "Thumb",
                loading: "lazy",
                decoding: "async"
              })
            })]
          })
        }, index);
      })
    })]
  });
}

/***/ })

};
;