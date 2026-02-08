"use strict";
exports.id = "resources_js_Frontend_Components_Sections_CaseStudySection_jsx";
exports.ids = ["resources_js_Frontend_Components_Sections_CaseStudySection_jsx"];
exports.modules = {

/***/ "./resources/js/Frontend/Components/CaseStudy/CaseStudy1.jsx":
/*!*******************************************************************!*\
  !*** ./resources/js/Frontend/Components/CaseStudy/CaseStudy1.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CaseStudy1)
/* harmony export */ });
/* harmony import */ var _Components_NavigationLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/NavigationLink */ "./resources/js/Components/NavigationLink.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button */ "./resources/js/Frontend/Components/Button.jsx");
/* harmony import */ var _VideoModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../VideoModal */ "./resources/js/Frontend/Components/VideoModal/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function CaseStudy1(_ref) {
  var data = _ref.data;
  var section_title = data.section_title,
    section_subtitle = data.section_subtitle,
    casestudy_list = data.casestudy_list,
    section_btn_text = data.section_btn_text,
    section_btn_url = data.section_btn_url;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "container",
      children: [(section_subtitle || section_title) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "cs_section_heading cs_style_1",
          children: [section_subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "cs_section_subtitle cs_fs_18 cs_medium",
            dangerouslySetInnerHTML: {
              __html: section_subtitle
            }
          }), section_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "cs_section_title cs_fs_53 cs_normal mb-0",
            dangerouslySetInnerHTML: {
              __html: section_title
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "cs_height_85 cs_height_lg_50"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "cs_grid_style_1",
        children: casestudy_list === null || casestudy_list === void 0 ? void 0 : casestudy_list.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "cs_grid_item".concat([1, 2, 5, 6, 9, 10, 13, 14].includes(index) ? " cs_double" : ""),
            children: [item.link_type === "normal_link" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "cs_case_study cs_style_1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_NavigationLink__WEBPACK_IMPORTED_MODULE_0__["default"], {
                href: item === null || item === void 0 ? void 0 : item.casestudy_btn_url,
                className: "cs_case_study_thumb cs_bg_filed",
                style: {
                  backgroundImage: "url(".concat(item === null || item === void 0 ? void 0 : item.casestudy_image_url, ")")
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "cs_case_study_info cs_white_color",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "cs_case_study_info_in",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
                    className: "cs_case_study_title cs_fs_30 cs_normal cs_white_color",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_NavigationLink__WEBPACK_IMPORTED_MODULE_0__["default"], {
                      href: item === null || item === void 0 ? void 0 : item.casestudy_btn_url,
                      children: item === null || item === void 0 ? void 0 : item.casestudy_title
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    href: item === null || item === void 0 ? void 0 : item.casestudy_btn_url,
                    btnText: item === null || item === void 0 ? void 0 : item.casestudy_btn_text,
                    btnClass: "cs_btn cs_style_1 cs_type_1"
                  })]
                })
              })]
            }), item.link_type === "youtube_link" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_VideoModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
              videoSrc: item.youtube_video_url,
              imageUrl: item.casestudy_image_url
            })]
          }, index);
        })
      }), (section_btn_url || section_btn_text) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "text-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "cs_height_100 cs_height_lg_50"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
          href: section_btn_url,
          btnText: section_btn_text,
          btnClass: "cs_btn cs_style_1 cs_type_2 cs_primary_bg cs_white_color cs_w_100_sm"
        })]
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/CaseStudy/CaseStudy2.jsx":
/*!*******************************************************************!*\
  !*** ./resources/js/Frontend/Components/CaseStudy/CaseStudy2.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CaseStudy2)
/* harmony export */ });
/* harmony import */ var _Components_NavigationLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/NavigationLink */ "./resources/js/Components/NavigationLink.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button */ "./resources/js/Frontend/Components/Button.jsx");
/* harmony import */ var _VideoModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../VideoModal */ "./resources/js/Frontend/Components/VideoModal/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function CaseStudy2(_ref) {
  var data = _ref.data;
  var section_title = data.section_title,
    section_subtitle = data.section_subtitle,
    casestudy_list = data.casestudy_list,
    section_btn_text = data.section_btn_text,
    section_btn_url = data.section_btn_url;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "container",
      children: (section_subtitle || section_title) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "cs_section_heading cs_style_1 text-center",
          children: [section_subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "cs_section_subtitle cs_fs_18 cs_medium",
            dangerouslySetInnerHTML: {
              __html: section_subtitle
            }
          }), section_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "cs_section_title cs_fs_53 cs_normal mb-0",
            dangerouslySetInnerHTML: {
              __html: section_title
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "cs_height_85 cs_height_lg_50"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "cs_grid_style_2",
      children: casestudy_list === null || casestudy_list === void 0 ? void 0 : casestudy_list.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "cs_grid_item".concat([0, 6, 8, 12].includes(index) ? " cs_double_double" : "").concat([3, 7, 11, 15].includes(index) ? " cs_double" : ""),
          children: [item.link_type === "normal_link" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "cs_case_study cs_style_1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_NavigationLink__WEBPACK_IMPORTED_MODULE_0__["default"], {
              href: item === null || item === void 0 ? void 0 : item.casestudy_btn_url,
              className: "cs_case_study_thumb cs_bg_filed",
              style: {
                backgroundImage: "url(".concat(item === null || item === void 0 ? void 0 : item.casestudy_image_url, ")")
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "cs_case_study_info cs_white_color",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "cs_case_study_info_in",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
                  className: "cs_case_study_title cs_fs_30 cs_normal cs_white_color",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_NavigationLink__WEBPACK_IMPORTED_MODULE_0__["default"], {
                    href: item === null || item === void 0 ? void 0 : item.casestudy_btn_url,
                    children: item === null || item === void 0 ? void 0 : item.casestudy_title
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
                  href: item === null || item === void 0 ? void 0 : item.casestudy_btn_url,
                  btnText: item === null || item === void 0 ? void 0 : item.casestudy_btn_text,
                  btnClass: "cs_btn cs_style_1 cs_type_1"
                })]
              })
            })]
          }), item.link_type === "youtube_link" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_VideoModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
            videoSrc: item.youtube_video_url,
            imageUrl: item.casestudy_image_url
          })]
        }, index);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "container",
      children: (section_btn_url || section_btn_text) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "text-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "cs_height_100 cs_height_lg_50"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
          href: section_btn_url,
          btnText: section_btn_text,
          btnClass: "cs_btn cs_style_1 cs_type_2 cs_primary_bg cs_white_color cs_w_100_sm"
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/CaseStudy/CaseStudy3.jsx":
/*!*******************************************************************!*\
  !*** ./resources/js/Frontend/Components/CaseStudy/CaseStudy3.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CaseStudy3)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button */ "./resources/js/Frontend/Components/Button.jsx");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _VideoModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../VideoModal */ "./resources/js/Frontend/Components/VideoModal/index.jsx");
/* harmony import */ var _Components_NavigationLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/NavigationLink */ "./resources/js/Components/NavigationLink.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function CaseStudy3(_ref) {
  var data = _ref.data;
  var marquee_text = data.marquee_text,
    section_title = data.section_title,
    section_subtitle = data.section_subtitle,
    casestudy_list = data.casestudy_list,
    section_btn_text = data.section_btn_text,
    section_btn_url = data.section_btn_url;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [marquee_text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "cs_moving_section_wrap",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "cs_moving_section_in cs_primary_font cs_primary_color cs_fs_120 cs_text_shadow_style",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "cs_moving_section cs_moving_duration_40",
            dangerouslySetInnerHTML: {
              __html: marquee_text
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "cs_moving_section cs_moving_duration_40",
            dangerouslySetInnerHTML: {
              __html: marquee_text
            }
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "cs_height_85 cs_height_lg_50"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "container-fluid pr-0",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: " cs_grid_style_3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "cs_grid_item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "cs_section_heading cs_style_1",
            children: [section_subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "cs_section_subtitle cs_fs_18 cs_medium",
              dangerouslySetInnerHTML: {
                __html: section_subtitle
              }
            }), section_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
              className: "cs_section_title cs_fs_53 cs_normal mb-0",
              dangerouslySetInnerHTML: {
                __html: section_title
              }
            }), (section_btn_url || section_btn_text) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "cs_height_45 cs_height_lg_30"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
                href: section_btn_url,
                btnText: section_btn_text,
                btnClass: "cs_btn cs_style_1 cs_type_2 cs_primary_bg cs_white_color"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "cs_height_85 cs_height_lg_50"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "cs_grid_item",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
            slidesPerView: 1,
            spaceBetween: 24,
            pagination: false,
            className: "mySwiper",
            breakpoints: {
              575: {
                slidesPerView: 2
              },
              1600: {
                slidesPerView: 3
              }
            },
            children: casestudy_list === null || casestudy_list === void 0 ? void 0 : casestudy_list.map(function (item, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                children: [item.link_type === "normal_link" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "cs_case_study cs_style_1",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Components_NavigationLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    href: item === null || item === void 0 ? void 0 : item.casestudy_btn_url,
                    className: "cs_case_study_thumb cs_bg_filed",
                    style: {
                      backgroundImage: "url(".concat(item === null || item === void 0 ? void 0 : item.casestudy_image_url, ")")
                    }
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "cs_case_study_info cs_white_color",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "cs_case_study_info_in",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
                        className: "cs_case_study_title cs_fs_30 cs_normal cs_white_color",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Components_NavigationLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
                          href: item === null || item === void 0 ? void 0 : item.casestudy_btn_url,
                          children: item === null || item === void 0 ? void 0 : item.casestudy_title
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        href: item === null || item === void 0 ? void 0 : item.casestudy_btn_url,
                        btnText: item === null || item === void 0 ? void 0 : item.casestudy_btn_text,
                        btnClass: "cs_btn cs_style_1 cs_type_1"
                      })]
                    })
                  })]
                }), item.link_type === "youtube_link" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_VideoModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  videoSrc: item.youtube_video_url,
                  imageUrl: item.casestudy_image_url
                })]
              }, index);
            })
          })
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/CaseStudy/CaseStudy4.jsx":
/*!*******************************************************************!*\
  !*** ./resources/js/Frontend/Components/CaseStudy/CaseStudy4.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CaseStudy4)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button */ "./resources/js/Frontend/Components/Button.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var styles = {
  heroSection: {
    height: "550px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#111"
  },
  bgImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    zIndex: 0,
    transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%)",
    zIndex: 1
  },
  contentWrapper: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    maxWidth: "900px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 20px"
  },
  btnWrapper: {
    marginTop: "40px"
  }
};
function CaseStudy4(_ref) {
  var data = _ref.data;
  var casestudy_list = data.casestudy_list;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "position-relative",
    id: "all_casestudy",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("style", {
      children: "\n                    .cs_hero_hover_trigger:hover .cs_hero_bg {\n                        transform: scale(1.1);\n                    }\n                    .cs_custom_hero_btn {\n                        background: linear-gradient(90deg, #FF4305 0%, #F58700 100%) !important;\n                        color: #ffffff !important;\n                        border: none !important;\n                        opacity: 1 !important;\n                        box-shadow: 0 4px 15px rgba(255, 67, 5, 0.4);\n                        transition: all 0.3s ease;\n                        text-transform: uppercase;\n                        letter-spacing: 1px;\n                    }\n                    .cs_custom_hero_btn:hover {\n                        background: linear-gradient(90deg, #F58700 0%, #FF4305 100%) !important;\n                        transform: translateY(-3px);\n                        box-shadow: 0 8px 25px rgba(255, 67, 5, 0.6);\n                        color: #fff !important;\n                    }\n                "
    }), casestudy_list === null || casestudy_list === void 0 ? void 0 : casestudy_list.map(function (item, index) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "cs_top_sticky_0",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          style: styles.heroSection,
          className: "cs_hero cs_style_10 cs_hero_hover_trigger",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "cs_hero_bg",
            style: _objectSpread(_objectSpread({}, styles.bgImage), {}, {
              backgroundImage: "url(".concat(item.casestudy_image_url, ")")
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            style: styles.overlay
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            style: styles.contentWrapper,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "cs_section_heading cs_style_1",
              children: [item.casestudy_subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                className: "cs_section_subtitle cs_fs_18 cs_medium cs_white_color mb-3",
                style: {
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  opacity: 0.9,
                  background: "rgba(255,255,255,0.15)",
                  display: "inline-block",
                  padding: "8px 20px",
                  borderRadius: "30px",
                  backdropFilter: "blur(5px)",
                  border: "1px solid rgba(255,255,255,0.2)"
                },
                dangerouslySetInnerHTML: {
                  __html: item.casestudy_subtitle
                }
              }), item.casestudy_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
                className: "cs_section_title cs_fs_50 cs_bold cs_white_color mb-0",
                style: {
                  textShadow: "0 2px 10px rgba(0,0,0,0.5)"
                },
                dangerouslySetInnerHTML: {
                  __html: item.casestudy_title
                }
              }), ((item === null || item === void 0 ? void 0 : item.casestudy_btn_text) || (item === null || item === void 0 ? void 0 : item.casestudy_btn_url)) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                style: styles.btnWrapper,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
                  href: item === null || item === void 0 ? void 0 : item.casestudy_btn_url,
                  btnText: item === null || item === void 0 ? void 0 : item.casestudy_btn_text,
                  btnClass: "cs_btn cs_custom_hero_btn cs_fs_16 cs_bold cs_radius_30 px-5 py-3"
                })
              })]
            })
          })]
        })
      }, index);
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Sections/CaseStudySection.jsx":
/*!************************************************************************!*\
  !*** ./resources/js/Frontend/Components/Sections/CaseStudySection.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CaseStudySection)
/* harmony export */ });
/* harmony import */ var _CaseStudy_CaseStudy1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CaseStudy/CaseStudy1 */ "./resources/js/Frontend/Components/CaseStudy/CaseStudy1.jsx");
/* harmony import */ var _CaseStudy_CaseStudy2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CaseStudy/CaseStudy2 */ "./resources/js/Frontend/Components/CaseStudy/CaseStudy2.jsx");
/* harmony import */ var _CaseStudy_CaseStudy3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CaseStudy/CaseStudy3 */ "./resources/js/Frontend/Components/CaseStudy/CaseStudy3.jsx");
/* harmony import */ var _CaseStudy_CaseStudy4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CaseStudy/CaseStudy4 */ "./resources/js/Frontend/Components/CaseStudy/CaseStudy4.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function CaseStudySection(_ref) {
  var _sections_data$layout;
  var sections_data = _ref.sections_data;
  var sectionLayout = (_sections_data$layout = sections_data === null || sections_data === void 0 ? void 0 : sections_data.layout) !== null && _sections_data$layout !== void 0 ? _sections_data$layout : "1";
  // conditional rendering
  var section = "";
  if (sectionLayout === "1") {
    section = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_CaseStudy_CaseStudy1__WEBPACK_IMPORTED_MODULE_0__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "2") {
    section = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_CaseStudy_CaseStudy2__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "3") {
    section = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_CaseStudy_CaseStudy3__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "4") {
    section = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_CaseStudy_CaseStudy4__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: sections_data
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: section
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/VideoModal/index.jsx":
/*!***************************************************************!*\
  !*** ./resources/js/Frontend/Components/VideoModal/index.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VideoModal)
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



function VideoModal(_ref) {
  var videoSrc = _ref.videoSrc,
    imageUrl = _ref.imageUrl,
    className = _ref.className;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("about:blank"),
    _useState2 = _slicedToArray(_useState, 2),
    iframeSrc = _useState2[0],
    setIframeSrc = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    toggle = _useState4[0],
    setToggle = _useState4[1];
  var handelClick = function handelClick() {
    if (videoSrc.includes("youtube.com")) {
      var videoId;
      if (videoSrc.includes("embed/")) {
        videoId = videoSrc.split("embed/")[1].split("?")[0].trim();
      } else if (videoSrc.includes("v=")) {
        videoId = videoSrc.split("v=")[1].split("&")[0].trim();
      }
      if (videoId) {
        setIframeSrc("https://www.youtube.com/embed/".concat(videoId));
      } else {
        setIframeSrc(videoSrc);
      }
    } else {
      setIframeSrc(videoSrc);
    }
    setToggle(!toggle);
  };
  var handelClose = function handelClose() {
    setIframeSrc("about:blank");
    setToggle(!toggle);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [videoSrc ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "cs_video_block cs_style_1 cs_bg_filed".concat(className ? " ".concat(className) : ""),
      style: {
        backgroundImage: "url(".concat(imageUrl, ")")
      },
      onClick: handelClick,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "cs_player_btn cs_accent_color",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {})
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "cs_video_block cs_style_1 cs_bg_filed".concat(className ? " ".concat(className) : ""),
      style: {
        backgroundImage: "url(".concat(imageUrl, ")"),
        cursor: "pointer"
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: toggle ? "cs_video_popup active" : "cs_video_popup",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "cs_video_popup_overlay"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "cs_video_popup_content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "cs_video_popup_layer"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "cs_video_popup_container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "cs_video_popup_align",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "embed-responsive embed-responsive-16by9",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("iframe", {
                className: "embed-responsive-item",
                src: iframeSrc,
                title: "video modal"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "cs_video_popup_close",
            onClick: handelClose
          })]
        })]
      })]
    })]
  });
}

/***/ })

};
;