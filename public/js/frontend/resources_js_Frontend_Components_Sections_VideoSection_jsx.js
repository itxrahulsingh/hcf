"use strict";
exports.id = "resources_js_Frontend_Components_Sections_VideoSection_jsx";
exports.ids = ["resources_js_Frontend_Components_Sections_VideoSection_jsx"];
exports.modules = {

/***/ "./resources/js/Frontend/Components/Sections/VideoSection.jsx":
/*!********************************************************************!*\
  !*** ./resources/js/Frontend/Components/Sections/VideoSection.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VideoSection)
/* harmony export */ });
/* harmony import */ var _Frontend_Components_VideoModal_Video1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Frontend/Components/VideoModal/Video1 */ "./resources/js/Frontend/Components/VideoModal/Video1.jsx");
/* harmony import */ var _Frontend_Components_VideoModal_Video2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Frontend/Components/VideoModal/Video2 */ "./resources/js/Frontend/Components/VideoModal/Video2.jsx");
/* harmony import */ var _Frontend_Components_VideoModal_Video3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Frontend/Components/VideoModal/Video3 */ "./resources/js/Frontend/Components/VideoModal/Video3.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function VideoSection(_ref) {
  var _sections_data$layout;
  var sections_data = _ref.sections_data;
  var sectionLayout = (_sections_data$layout = sections_data === null || sections_data === void 0 ? void 0 : sections_data.layout) !== null && _sections_data$layout !== void 0 ? _sections_data$layout : "1";
  // conditional rendering
  var layoutSection = "";
  if (sectionLayout === "1") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Frontend_Components_VideoModal_Video1__WEBPACK_IMPORTED_MODULE_0__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "2") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Frontend_Components_VideoModal_Video2__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "3") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Frontend_Components_VideoModal_Video3__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: sections_data
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: layoutSection
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/VideoModal/Video1.jsx":
/*!****************************************************************!*\
  !*** ./resources/js/Frontend/Components/VideoModal/Video1.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Video1)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./resources/js/Frontend/Components/VideoModal/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Video1(_ref) {
  var data = _ref.data;
  var section_title = data.section_title,
    background_image_url = data.background_image_url,
    video_url = data.video_url;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [section_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "cs_section_heading cs_style_1 text-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
          className: "cs_section_title cs_fs_53 cs_normal mb-0",
          dangerouslySetInnerHTML: {
            __html: section_title
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "cs_height_85 cs_height_lg_50"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_0__["default"], {
      videoSrc: video_url,
      imageUrl: background_image_url,
      className: "cs_size_lg"
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/VideoModal/Video2.jsx":
/*!****************************************************************!*\
  !*** ./resources/js/Frontend/Components/VideoModal/Video2.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Video2)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./resources/js/Frontend/Components/VideoModal/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Video2(_ref) {
  var data = _ref.data;
  var section_title = data.section_title,
    background_image_url = data.background_image_url,
    video_url = data.video_url;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [section_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "cs_section_heading cs_style_1 text-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
          className: "cs_section_title cs_fs_53 cs_normal mb-0",
          dangerouslySetInnerHTML: {
            __html: section_title
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "cs_height_85 cs_height_lg_50"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "cs_full_screen_right",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_0__["default"], {
          videoSrc: video_url,
          imageUrl: background_image_url,
          className: "cs_size_lg_1"
        })
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/VideoModal/Video3.jsx":
/*!****************************************************************!*\
  !*** ./resources/js/Frontend/Components/VideoModal/Video3.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Video3)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./resources/js/Frontend/Components/VideoModal/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



var styles = {
  sectionWrapper: {
    position: "relative",
    padding: "80px 0",
    backgroundColor: "#f9f9f9",
    overflow: "hidden"
  },
  videoWrapper: {
    position: "relative",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    width: "100%",
    height: "0",
    paddingBottom: "56.25%",
    backgroundColor: "#000"
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)",
    pointerEvents: "none",
    zIndex: 2
  },
  modalTrigger: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 1
  }
};
function Video3(_ref) {
  var data = _ref.data;
  var section_title = data.section_title,
    background_image_url = data.background_image_url,
    video_url = data.video_url;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
    style: styles.sectionWrapper,
    className: "cs_video_section",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("style", {
      children: "\n                    .cs_video_section:hover .cs_video_block {\n                        transform: translateY(-5px);\n                        transition: transform 0.3s ease;\n                    }\n                    .cs_play_btn {\n                        z-index: 10;\n                    }\n                    .cs_play_btn::before, .cs_play_btn::after {\n                        content: '';\n                        position: absolute;\n                        top: 50%;\n                        left: 50%;\n                        transform: translate(-50%, -50%);\n                        width: 100%;\n                        height: 100%;\n                        border-radius: 50%;\n                        background: rgba(255, 255, 255, 0.3);\n                        animation: cs_pulse 2s infinite;\n                        z-index: -1;\n                    }\n                    .cs_play_btn::after {\n                        animation-delay: 1s;\n                    }\n                    @keyframes cs_pulse {\n                        0% { width: 80px; height: 80px; opacity: 1; }\n                        100% { width: 150px; height: 150px; opacity: 0; }\n                    }\n                "
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "container",
      children: [section_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "text-center mb-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "cs_section_title cs_fs_48 cs_bold cs_primary_color mb-3",
          style: {
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.2"
          },
          dangerouslySetInnerHTML: {
            __html: section_title
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "cs_separator cs_accent_color",
          style: {
            width: "60px",
            height: "4px",
            margin: "20px auto",
            borderRadius: "2px"
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "row justify-content-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "col-lg-10",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            style: styles.videoWrapper,
            className: "cs_video_block cs_radius_20",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              style: styles.overlay
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              style: styles.modalTrigger,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__["default"], {
                videoSrc: video_url,
                imageUrl: background_image_url,
                className: "w-100 h-100 object-fit-cover d-block"
              })
            })]
          })
        })
      })]
    })]
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