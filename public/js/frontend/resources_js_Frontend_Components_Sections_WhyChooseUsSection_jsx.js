"use strict";
exports.id = "resources_js_Frontend_Components_Sections_WhyChooseUsSection_jsx";
exports.ids = ["resources_js_Frontend_Components_Sections_WhyChooseUsSection_jsx"];
exports.modules = {

/***/ "./resources/js/Frontend/Components/Sections/WhyChooseUsSection.jsx":
/*!**************************************************************************!*\
  !*** ./resources/js/Frontend/Components/Sections/WhyChooseUsSection.jsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WhyChooseUsSection)
/* harmony export */ });
/* harmony import */ var _Frontend_Components_WhyChooseUs_WhyChooseUs1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Frontend/Components/WhyChooseUs/WhyChooseUs1 */ "./resources/js/Frontend/Components/WhyChooseUs/WhyChooseUs1.jsx");
/* harmony import */ var _Frontend_Components_WhyChooseUs_WhyChooseUs2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Frontend/Components/WhyChooseUs/WhyChooseUs2 */ "./resources/js/Frontend/Components/WhyChooseUs/WhyChooseUs2.jsx");
/* harmony import */ var _WhyChooseUs_WhyChooseUs3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../WhyChooseUs/WhyChooseUs3 */ "./resources/js/Frontend/Components/WhyChooseUs/WhyChooseUs3.jsx");
/* harmony import */ var _WhyChooseUs_WhyChooseUs4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../WhyChooseUs/WhyChooseUs4 */ "./resources/js/Frontend/Components/WhyChooseUs/WhyChooseUs4.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function WhyChooseUsSection(_ref) {
  var _sections_data$layout;
  var sections_data = _ref.sections_data;
  var sectionLayout = (_sections_data$layout = sections_data === null || sections_data === void 0 ? void 0 : sections_data.layout) !== null && _sections_data$layout !== void 0 ? _sections_data$layout : "1";
  // conditionally rendering
  var section = null;
  if (sectionLayout === "1") {
    section = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Frontend_Components_WhyChooseUs_WhyChooseUs1__WEBPACK_IMPORTED_MODULE_0__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "2") {
    section = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Frontend_Components_WhyChooseUs_WhyChooseUs2__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "3") {
    section = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_WhyChooseUs_WhyChooseUs3__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "4") {
    section = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_WhyChooseUs_WhyChooseUs4__WEBPACK_IMPORTED_MODULE_3__["default"], {
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

/***/ }),

/***/ "./resources/js/Frontend/Components/WhyChooseUs/WhyChooseUs1.jsx":
/*!***********************************************************************!*\
  !*** ./resources/js/Frontend/Components/WhyChooseUs/WhyChooseUs1.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WhyChooseUs1)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function WhyChooseUs1(_ref) {
  var data = _ref.data;
  var section_title = data.section_title,
    section_subtitle = data.section_subtitle,
    image_url = data.image_url,
    feature_list = data.feature_list;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "cs_why_choose_us_1 cs_shape_wrap_2",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "cs_shape_1"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "col-lg-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "cs_why_choose_us_thumb",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
              className: "cs_why_choose_us_thumb_in cs_bg_filed",
              style: {
                backgroundImage: "url(".concat(image_url, ")")
              }
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "col-lg-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "cs_height_75 cs_height_lg_50"
          }), (section_title || section_subtitle) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "cs_section_heading cs_style_1",
              children: [section_subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                className: "cs_section_subtitle cs_fs_18 cs_medium",
                dangerouslySetInnerHTML: {
                  __html: section_subtitle
                }
              }), section_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                className: "cs_section_title cs_fs_53 cs_normal mb-0",
                dangerouslySetInnerHTML: {
                  __html: section_title
                }
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
              className: "cs_height_55 cs_height_lg_40"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "row cs_gap_y_45",
            children: feature_list === null || feature_list === void 0 ? void 0 : feature_list.map(function (item, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "cs_iconbox cs_style_2",
                  children: [item.feature_icon_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "cs_iconbox_icon",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                      src: item.feature_icon_url,
                      alt: "Icon",
                      loading: "lazy",
                      decoding: "async"
                    })
                  }), item.feature_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                    className: "cs_iconbox_title cs_fs_24 cs_normal",
                    dangerouslySetInnerHTML: {
                      __html: item.feature_title
                    }
                  }), item.feature_subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                    className: "cs_iconbox_subtitle mb-0",
                    dangerouslySetInnerHTML: {
                      __html: item.feature_subtitle
                    }
                  })]
                })
              }, index);
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "cs_height_75 cs_height_lg_75"
          })]
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/WhyChooseUs/WhyChooseUs2.jsx":
/*!***********************************************************************!*\
  !*** ./resources/js/Frontend/Components/WhyChooseUs/WhyChooseUs2.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WhyChooseUs2)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function WhyChooseUs2(_ref) {
  var data = _ref.data;
  var section_title = data.section_title,
    section_subtitle = data.section_subtitle,
    image_url = data.image_url,
    feature_list = data.feature_list;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "cs_why_choose_us_2 cs_shape_wrap_2",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "cs_height_0 cs_height_lg_80"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "cs_shape_1 cs_position_left"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row cs_reverse_lg",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "col-lg-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "cs_height_75 cs_height_lg_40"
          }), (section_title || section_subtitle) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "cs_section_heading cs_style_1",
              children: [section_subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                className: "cs_section_subtitle cs_fs_18 cs_medium",
                dangerouslySetInnerHTML: {
                  __html: section_subtitle
                }
              }), section_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                className: "cs_section_title cs_fs_53 cs_normal mb-0",
                dangerouslySetInnerHTML: {
                  __html: section_title
                }
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
              className: "cs_height_55 cs_height_lg_40"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "row cs_gap_y_45",
            children: feature_list === null || feature_list === void 0 ? void 0 : feature_list.map(function (item, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "cs_iconbox cs_style_2",
                  children: [item.feature_icon_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "cs_iconbox_icon",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                      src: item.feature_icon_url,
                      alt: "Icon",
                      loading: "lazy",
                      decoding: "async"
                    })
                  }), item.feature_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                    className: "cs_iconbox_title cs_fs_24 cs_normal",
                    dangerouslySetInnerHTML: {
                      __html: item.feature_title
                    }
                  }), item.feature_subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                    className: "cs_iconbox_subtitle mb-0",
                    dangerouslySetInnerHTML: {
                      __html: item.feature_subtitle
                    }
                  })]
                })
              }, index);
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "cs_height_75 cs_height_lg_75"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "col-lg-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "cs_why_choose_us_thumb",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
              className: "cs_why_choose_us_thumb_in cs_bg_filed",
              style: {
                backgroundImage: "url(".concat(image_url, ")")
              }
            })
          })
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/WhyChooseUs/WhyChooseUs3.jsx":
/*!***********************************************************************!*\
  !*** ./resources/js/Frontend/Components/WhyChooseUs/WhyChooseUs3.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WhyChooseUs3)
/* harmony export */ });
/* harmony import */ var _VideoModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../VideoModal */ "./resources/js/Frontend/Components/VideoModal/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function WhyChooseUs3(_ref) {
  var data = _ref.data;
  var section_title = data.section_title,
    section_subtitle = data.section_subtitle,
    section_description = data.section_description,
    image_url = data.image_url,
    youtube_video_url = data.youtube_video_url,
    feature_list = data.feature_list;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "cs_why_choose_us_1",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "col-lg-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "cs_why_choose_us_thumb",
            children: [!youtube_video_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "cs_why_choose_us_thumb_in cs_bg_filed",
              style: {
                backgroundImage: "url(".concat(image_url, ")")
              }
            }), youtube_video_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_VideoModal__WEBPACK_IMPORTED_MODULE_0__["default"], {
              videoSrc: youtube_video_url,
              imageUrl: image_url,
              className: "h-100"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "col-lg-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "cs_height_145 cs_height_lg_75"
          }), (section_title || section_subtitle || section_description) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "cs_section_heading cs_style_1",
              children: [section_subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                className: "cs_section_subtitle cs_fs_18 cs_medium",
                dangerouslySetInnerHTML: {
                  __html: section_subtitle
                }
              }), section_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
                  className: "cs_section_title cs_fs_53 cs_normal mb-0",
                  dangerouslySetInnerHTML: {
                    __html: section_title
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "cs_height_26 cs_height_lg_20"
                })]
              }), section_description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                className: "mb-0",
                dangerouslySetInnerHTML: {
                  __html: section_description
                }
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "cs_height_55 cs_height_lg_40"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "row cs_gap_y_45",
            children: feature_list === null || feature_list === void 0 ? void 0 : feature_list.map(function (item, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "col-sm-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  className: "cs_iconbox cs_style_5",
                  children: [item.feature_icon_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                    className: "cs_iconbox_icon cs_center cs_accent_bg",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                      src: item.feature_icon_url,
                      alt: "Icon",
                      loading: "lazy",
                      decoding: "async"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                    children: [item.feature_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
                      className: "cs_iconbox_title cs_fs_24 cs_normal mb-0",
                      dangerouslySetInnerHTML: {
                        __html: item.feature_title
                      }
                    }), item.feature_subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                      className: "cs_iconbox_subtitle mb-0",
                      dangerouslySetInnerHTML: {
                        __html: item.feature_subtitle
                      }
                    })]
                  })]
                })
              }, index);
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "cs_height_150 cs_height_lg_80"
          })]
        })]
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/WhyChooseUs/WhyChooseUs4.jsx":
/*!***********************************************************************!*\
  !*** ./resources/js/Frontend/Components/WhyChooseUs/WhyChooseUs4.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WhyChooseUs4)
/* harmony export */ });
/* harmony import */ var _VideoModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../VideoModal */ "./resources/js/Frontend/Components/VideoModal/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function WhyChooseUs4(_ref) {
  var data = _ref.data;
  var section_title = data.section_title,
    section_subtitle = data.section_subtitle,
    section_description = data.section_description,
    image_url = data.image_url,
    youtube_video_url = data.youtube_video_url,
    feature_list = data.feature_list;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "cs_why_choose_us_2",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "col-lg-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "cs_height_145 cs_height_lg_75"
          }), (section_title || section_subtitle || section_description) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "cs_section_heading cs_style_1",
              children: [section_subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                className: "cs_section_subtitle cs_fs_18 cs_medium",
                dangerouslySetInnerHTML: {
                  __html: section_subtitle
                }
              }), section_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
                  className: "cs_section_title cs_fs_53 cs_normal mb-0",
                  dangerouslySetInnerHTML: {
                    __html: section_title
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "cs_height_26 cs_height_lg_20"
                })]
              }), section_description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                className: "mb-0",
                dangerouslySetInnerHTML: {
                  __html: section_description
                }
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "cs_height_55 cs_height_lg_40"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "row cs_gap_y_45",
            children: feature_list === null || feature_list === void 0 ? void 0 : feature_list.map(function (item, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "col-sm-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  className: "cs_iconbox cs_style_5",
                  children: [item.feature_icon_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                    className: "cs_iconbox_icon cs_center cs_accent_bg",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                      src: item.feature_icon_url,
                      alt: "Icon",
                      loading: "lazy",
                      decoding: "async"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                    children: [item.feature_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
                      className: "cs_iconbox_title cs_fs_24 cs_normal mb-0",
                      dangerouslySetInnerHTML: {
                        __html: item.feature_title
                      }
                    }), item.feature_subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                      className: "cs_iconbox_subtitle mb-0",
                      dangerouslySetInnerHTML: {
                        __html: item.feature_subtitle
                      }
                    })]
                  })]
                })
              }, index);
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "cs_height_150 cs_height_lg_80"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "col-lg-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "cs_why_choose_us_thumb",
            children: [!youtube_video_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "cs_why_choose_us_thumb_in cs_bg_filed",
              style: {
                backgroundImage: "url(".concat(image_url, ")")
              }
            }), youtube_video_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_VideoModal__WEBPACK_IMPORTED_MODULE_0__["default"], {
              videoSrc: youtube_video_url,
              imageUrl: image_url,
              className: "h-100"
            })]
          })
        })]
      })
    })
  });
}

/***/ })

};
;