"use strict";
exports.id = "resources_js_Frontend_Components_Sections_EventScheduleSection_jsx";
exports.ids = ["resources_js_Frontend_Components_Sections_EventScheduleSection_jsx"];
exports.modules = {

/***/ "./resources/js/Frontend/Components/EventSchedule/EventSchedule1.jsx":
/*!***************************************************************************!*\
  !*** ./resources/js/Frontend/Components/EventSchedule/EventSchedule1.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventSchedule1)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button */ "./resources/js/Frontend/Components/Button.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function EventSchedule1(_ref) {
  var _data$event_list;
  var data = _ref.data;
  // const [section_title, section_subtitle, event_list] = data || [];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "container",
      children: ((data === null || data === void 0 ? void 0 : data.section_title) || (data === null || data === void 0 ? void 0 : data.section_title)) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "cs_section_heading cs_style_1 text-center",
          children: [(data === null || data === void 0 ? void 0 : data.section_subtitle) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "cs_section_subtitle cs_fs_18 cs_medium",
            dangerouslySetInnerHTML: {
              __html: data === null || data === void 0 ? void 0 : data.section_subtitle
            }
          }), (data === null || data === void 0 ? void 0 : data.section_title) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
            className: "cs_section_title cs_fs_53 cs_normal mb-0",
            dangerouslySetInnerHTML: {
              __html: data === null || data === void 0 ? void 0 : data.section_title
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "cs_height_85 cs_height_lg_50"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
        className: "cs_image_box_1_list cs_type_1 cs_mp0",
        children: data === null || data === void 0 || (_data$event_list = data.event_list) === null || _data$event_list === void 0 ? void 0 : _data$event_list.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "cs_image_box cs_style_1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "cs_image_box_number cs_primary_font cs_fs_53",
                children: item.event_serial_number
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "cs_image_box_img overflow-hidden",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                  src: item.event_image_url,
                  alt: item.event_image_url,
                  loading: "lazy",
                  decoding: "async"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "cs_image_box_info position-relative",
                children: [item.event_time && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "cs_image_box_time cs_fs_18 cs_medium cs_ternary_color",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    className: "cs_accent_color",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
                      width: 20,
                      height: 20,
                      viewBox: "0 0 20 20",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                        d: "M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18ZM9.78 5H9.72C9.32 5 9 5.32 9 5.72V10.44C9 10.79 9.18 11.12 9.49 11.3L13.64 13.79C13.98 13.99 14.42 13.89 14.62 13.55C14.83 13.21 14.72 12.76 14.37 12.56L10.5 10.26V5.72C10.5 5.32 10.18 5 9.78 5Z",
                        fill: "currentColor"
                      })
                    })
                  }), item.event_time]
                }), item.event_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
                  className: "cs_image_box_title cs_fs_30 cs_normal",
                  dangerouslySetInnerHTML: {
                    __html: item.event_title
                  }
                }), item.event_details && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                  className: "cs_image_box_subtitle mb-0 cs_ternary_color",
                  dangerouslySetInnerHTML: {
                    __html: item.event_details
                  }
                }), (item.event_action_url || item.event_action_text) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
                  href: item.event_action_url,
                  btnText: item.event_action_text,
                  btnClass: "cs_btn cs_style_1 cs_type_4 cs_fs_18 cs_medium"
                })]
              })]
            })
          }, index);
        })
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Sections/EventScheduleSection.jsx":
/*!****************************************************************************!*\
  !*** ./resources/js/Frontend/Components/Sections/EventScheduleSection.jsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventScheduleSection)
/* harmony export */ });
/* harmony import */ var _EventSchedule_EventSchedule1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EventSchedule/EventSchedule1 */ "./resources/js/Frontend/Components/EventSchedule/EventSchedule1.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function EventScheduleSection(_ref) {
  var _sections_data$layout;
  var sections_data = _ref.sections_data;
  var sectionLayout = (_sections_data$layout = sections_data === null || sections_data === void 0 ? void 0 : sections_data.layout) !== null && _sections_data$layout !== void 0 ? _sections_data$layout : "1";
  var section = "";
  if (sectionLayout === "1") {
    section = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_EventSchedule_EventSchedule1__WEBPACK_IMPORTED_MODULE_0__["default"], {
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