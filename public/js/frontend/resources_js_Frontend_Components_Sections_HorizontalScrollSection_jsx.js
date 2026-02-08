"use strict";
exports.id = "resources_js_Frontend_Components_Sections_HorizontalScrollSection_jsx";
exports.ids = ["resources_js_Frontend_Components_Sections_HorizontalScrollSection_jsx"];
exports.modules = {

/***/ "./resources/js/Frontend/Components/HorizontalScroll/HorizontalAditionalFeature.jsx":
/*!******************************************************************************************!*\
  !*** ./resources/js/Frontend/Components/HorizontalScroll/HorizontalAditionalFeature.jsx ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HorizontalAditionalFeature)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function HorizontalAditionalFeature(_ref) {
  var item = _ref.item;
  var inner_slide_list = item.inner_slide_list,
    section_title = item.section_title,
    section_subtitle = item.section_subtitle,
    image_url = item.image_url;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "container",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "row align-items-center cs_gap_y_40",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "col-lg-6",
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
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "d-flex cs_gap_y_30 flex-wrap",
          children: inner_slide_list === null || inner_slide_list === void 0 ? void 0 : inner_slide_list.map(function (featureItem, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
              children: (featureItem.inner_feature_icon_url || featureItem.inner_feature_title || featureItem.inner_feature_subtitle) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "cs_iconbox cs_style_3 w-100",
                children: [featureItem.inner_feature_icon_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "cs_iconbox_icon",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                    src: featureItem.inner_feature_icon_url,
                    alt: "Icon",
                    loading: "lazy",
                    decoding: "async"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  className: "cs_iconbox_right",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
                    className: "cs_iconbox_title cs_normal cs_fs_24",
                    dangerouslySetInnerHTML: {
                      __html: featureItem.inner_feature_title
                    }
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                    className: "cs_iconbox_subtitle mb-0",
                    dangerouslySetInnerHTML: {
                      __html: featureItem.inner_feature_subtitle
                    }
                  })]
                })]
              })
            }, index);
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "col-lg-6",
        children: image_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "cs_right_full_width cs_space_120",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
            src: image_url,
            alt: "Thumb",
            loading: "lazy",
            decoding: "async"
          })
        })
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/HorizontalScroll/HorizontalContactInfo.jsx":
/*!*************************************************************************************!*\
  !*** ./resources/js/Frontend/Components/HorizontalScroll/HorizontalContactInfo.jsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HorizontalContactInfo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Widget_SocialWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Widget/SocialWidget */ "./resources/js/Frontend/Components/Widget/SocialWidget.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function HorizontalContactInfo(_ref) {
  var item = _ref.item;
  var section_title = item.section_title,
    section_subtitle = item.section_subtitle,
    inner_slide_list = item.inner_slide_list;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "container",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "row align-items-center cs_gap_y_50",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "col-lg-6",
        children: (section_subtitle || section_title) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
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
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "col-lg-6",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
          className: "cs_mp0 cs_contact_info",
          children: inner_slide_list === null || inner_slide_list === void 0 ? void 0 : inner_slide_list.map(function (contactItem, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: contactItem.contact_title
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
                className: "cs_fs_24 cs_normal",
                dangerouslySetInnerHTML: {
                  __html: contactItem.contact_description
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: contactItem.contact_info
                }
              }), contactItem.social_link_show && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Widget_SocialWidget__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
            }, index);
          })
        })
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/HorizontalScroll/HorizontalFunFact.jsx":
/*!*********************************************************************************!*\
  !*** ./resources/js/Frontend/Components/HorizontalScroll/HorizontalFunFact.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HorizontalFunFact)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function HorizontalFunFact(_ref) {
  var item = _ref.item;
  var section_subtitle = item.section_subtitle,
    section_title = item.section_title,
    inner_slide_list = item.inner_slide_list;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "container",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "row align-items-center cs_gap_y_50",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "col-lg-6",
        children: (section_subtitle || section_title) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "cs_section_heading cs_style_1",
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
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "col-lg-6 position-relative",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "cs_counter_1_wrap cs_type_1",
          children: inner_slide_list === null || inner_slide_list === void 0 ? void 0 : inner_slide_list.map(function (funfactItem, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "cs_counter cs_style_1 position-relative d-flex",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                children: [funfactItem.funfact_number && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "cs_fs_60 cs_primary_font cs_bold cs_primary_color d-flex",
                  dangerouslySetInnerHTML: {
                    __html: funfactItem.funfact_number
                  }
                }), funfactItem.inner_feature_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                  className: "cs_fs_18 cs_medium mb-0",
                  dangerouslySetInnerHTML: {
                    __html: funfactItem.inner_feature_title
                  }
                })]
              })
            }, index);
          })
        })
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/HorizontalScroll/HorizontalHero.jsx":
/*!******************************************************************************!*\
  !*** ./resources/js/Frontend/Components/HorizontalScroll/HorizontalHero.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HorizontalHero)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Widget_SocialWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Widget/SocialWidget */ "./resources/js/Frontend/Components/Widget/SocialWidget.jsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button */ "./resources/js/Frontend/Components/Button.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function HorizontalHero(_ref) {
  var item = _ref.item;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "cs_hero cs_style_11 w-100",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "cs_hero_text",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
          className: "cs_hero_title cs_white_color cs_fs_60 cs_bold",
          dangerouslySetInnerHTML: {
            __html: item.section_title
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "cs_hero_subtitle cs_ternary_color",
          dangerouslySetInnerHTML: {
            __html: item.section_subtitle
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "cs_hero_btns",
          children: [(item.action_text || item.action_url) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
            href: item.action_url,
            btnText: item.action_text,
            btnClass: "cs_btn cs_style_1 cs_type_2 cs_primary_color cs_white_bg"
          }), (item.action_url_2 || item.action_text_2) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
            href: item.action_url_2,
            btnText: item.action_text_2,
            btnClass: "cs_btn cs_style_1 cs_type_2 cs_white_color cs_primary_bg"
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "cs_hero_info container-fluid cs_padding_120_120",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [item.phone_number && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h4", {
          className: "cs_hero_contact_number cs_fs_24 cs_normal cs_white_color mb-0",
          children: item.phone_number
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Widget_SocialWidget__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/HorizontalScroll/HorizontalScroll1.jsx":
/*!*********************************************************************************!*\
  !*** ./resources/js/Frontend/Components/HorizontalScroll/HorizontalScroll1.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HorizontalScroll1)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/modules */ "swiper/modules");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_modules__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _HorizontalHero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HorizontalHero */ "./resources/js/Frontend/Components/HorizontalScroll/HorizontalHero.jsx");
/* harmony import */ var _HorizontalAditionalFeature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HorizontalAditionalFeature */ "./resources/js/Frontend/Components/HorizontalScroll/HorizontalAditionalFeature.jsx");
/* harmony import */ var _HorizontalService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HorizontalService */ "./resources/js/Frontend/Components/HorizontalScroll/HorizontalService.jsx");
/* harmony import */ var _HorizontalTestimonial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HorizontalTestimonial */ "./resources/js/Frontend/Components/HorizontalScroll/HorizontalTestimonial.jsx");
/* harmony import */ var _HorizontalFunFact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HorizontalFunFact */ "./resources/js/Frontend/Components/HorizontalScroll/HorizontalFunFact.jsx");
/* harmony import */ var _HorizontalContactInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HorizontalContactInfo */ "./resources/js/Frontend/Components/HorizontalScroll/HorizontalContactInfo.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }










function HorizontalScroll1(_ref) {
  var data = _ref.data;
  var slide_list = data.slide_list;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("about:blank"),
    _useState2 = _slicedToArray(_useState, 2),
    iframeSrc = _useState2[0],
    setIframeSrc = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    toggle = _useState4[0],
    setToggle = _useState4[1];
  var handleVideoClick = function handleVideoClick(videoUrl) {
    if (!videoUrl) {
      console.error("No video URL provided");
      return;
    }
    try {
      var embedUrl = videoUrl;

      // Handle YouTube URLs
      if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
        var videoId = "";

        // Different YouTube URL formats
        if (videoUrl.includes("youtube.com/watch?v=")) {
          videoId = videoUrl.split("v=")[1].split("&")[0];
        } else if (videoUrl.includes("youtu.be/")) {
          videoId = videoUrl.split("youtu.be/")[1].split("?")[0];
        } else if (videoUrl.includes("youtube.com/embed/")) {
          videoId = videoUrl.split("embed/")[1].split("?")[0];
        }
        if (videoId) {
          embedUrl = "https://www.youtube.com/embed/".concat(videoId, "?autoplay=1&rel=0");
        } else {
          console.error("Could not extract YouTube video ID");
          return;
        }
      }
      // You can add other video providers (Vimeo, etc.) here

      setIframeSrc(embedUrl);
      setToggle(true);
    } catch (error) {
      console.error("Error processing video URL:", error);
    }
  };
  var handleClose = function handleClose() {
    setIframeSrc("about:blank");
    setToggle(false);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: "position-relative",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
        pagination: {
          clickable: true
        },
        modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Mousewheel],
        mousewheel: true,
        speed: 1200,
        loop: true,
        className: "mySwiper cs_swiper_pagination_wrap_4",
        children: slide_list === null || slide_list === void 0 ? void 0 : slide_list.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "cs_fullscreen_slide cs_bg_filed cs_dark_section cs_primary_bg cs_fullscreen_section",
              style: {
                backgroundImage: "url(".concat(item.background_image_url, ")")
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                className: "cs_fullscreen_slide_in",
                children: [item.slide_type === "Hero" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_HorizontalHero__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  item: item
                }), item.slide_type === "AditionalFeature" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_HorizontalAditionalFeature__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  item: item
                }), item.slide_type === "Service" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_HorizontalService__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  item: item
                }), item.slide_type === "Testimonial" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_HorizontalTestimonial__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  item: item,
                  onVideoClick: handleVideoClick
                }), item.slide_type === "FunFact" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_HorizontalFunFact__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  item: item
                }), item.slide_type === "ContactInfo" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_HorizontalContactInfo__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  item: item
                })]
              })
            })
          }, index);
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: toggle ? "cs_video_popup active" : "cs_video_popup",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "cs_video_popup_overlay",
        onClick: handleClose
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "cs_video_popup_content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "cs_video_popup_layer"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "cs_video_popup_container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "cs_video_popup_align",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "embed-responsive embed-responsive-16by9",
              children: iframeSrc && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("iframe", {
                className: "embed-responsive-item",
                src: iframeSrc,
                title: "video modal",
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: true,
                frameBorder: "0"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
            className: "cs_video_popup_close",
            onClick: handleClose,
            children: "\xD7"
          })]
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/HorizontalScroll/HorizontalService.jsx":
/*!*********************************************************************************!*\
  !*** ./resources/js/Frontend/Components/HorizontalScroll/HorizontalService.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HorizontalService)
/* harmony export */ });
/* harmony import */ var _Components_NavigationLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/NavigationLink */ "./resources/js/Components/NavigationLink.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function HorizontalService(_ref) {
  var item = _ref.item;
  var section_subtitle = item.section_subtitle,
    section_title = item.section_title,
    inner_slide_list = item.inner_slide_list;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "container",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "row cs_gap_y_40",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "col-lg-7",
        children: (section_subtitle || section_title) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
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
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "col-lg-5",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
          className: "cs_list cs_style_2 cs_mp0",
          children: inner_slide_list === null || inner_slide_list === void 0 ? void 0 : inner_slide_list.map(function (featureItem, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
              children: (featureItem.inner_feature_title || featureItem.inner_feature_action_url) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Components_NavigationLink__WEBPACK_IMPORTED_MODULE_0__["default"], {
                href: featureItem.inner_feature_action_url,
                className: "cs_btn cs_style_1 cs_type_2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
                  className: "mb-0 cs_fs_30 cs_normal",
                  dangerouslySetInnerHTML: {
                    __html: featureItem.inner_feature_title
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
                      width: 11,
                      height: 11,
                      viewBox: "0 0 11 11",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                        d: "M1 10L10 1M10 1L1 1M10 1L10 10",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      })
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
                      width: 11,
                      height: 11,
                      viewBox: "0 0 11 11",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                        d: "M1 10L10 1M10 1L1 1M10 1L10 10",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      })
                    })
                  })]
                })]
              })
            }, index);
          })
        })
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/HorizontalScroll/HorizontalTestimonial.jsx":
/*!*************************************************************************************!*\
  !*** ./resources/js/Frontend/Components/HorizontalScroll/HorizontalTestimonial.jsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HorizontalTestimonial)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/modules */ "swiper/modules");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_modules__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Rating */ "./resources/js/Frontend/Components/Rating.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function HorizontalTestimonial(_ref) {
  var item = _ref.item,
    onVideoClick = _ref.onVideoClick;
  var image_url = item.image_url,
    video_url = item.video_url,
    inner_slide_list = item.inner_slide_list;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "row align-items-center cs_gap_y_40",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "col-lg-5",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "cs_testimonial_2_video cs_type_1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "cs_testimonial_2_video_shape cs_ternary_color",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                width: 77,
                height: 84,
                viewBox: "0 0 77 84",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
                  opacity: "0.5",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                    d: "M15.0071 18.6364C17.1053 22.4928 20.17 25.7713 22.4964 29.4918C24.7743 33.1394 27.5233 36.5393 30.2334 39.8469C35.7169 46.5544 42.1571 52.6791 49.8019 56.8124C50.8169 57.3612 51.9195 56.0207 51.0549 55.1853C44.9013 49.2792 38.9127 43.2128 33.0359 37.0444C30.1671 34.0428 27.3355 30.9991 24.5412 27.9133C21.593 24.6494 19.1986 20.9046 16.2407 17.6844C15.6191 17.0142 14.5894 17.8738 15.0071 18.6364Z",
                    fill: "currentColor"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                    d: "M43.7756 1.09195C43.7531 5.4822 44.8559 9.83247 45.0989 14.2137C45.3345 18.5077 46.1022 22.8121 46.8805 27.0168C48.4477 35.5376 51.1342 44.0094 55.8365 51.3181C56.4609 52.2886 58.0733 51.6463 57.7191 50.4974C55.1781 42.3552 52.8591 34.1524 50.6872 25.914C49.6224 21.9008 48.6105 17.8686 47.6515 13.8175C46.6437 9.53625 46.3529 5.10092 45.3155 0.853256C45.0943 -0.0337773 43.7776 0.222497 43.7756 1.09195Z",
                    fill: "currentColor"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                    d: "M0.725625 51.1746C4.57366 53.2881 8.92326 54.3933 12.89 56.269C16.7766 58.1097 20.926 59.4875 24.9929 60.8086C33.2296 63.4943 41.9571 65.173 50.6234 64.5251C51.7742 64.439 51.9786 62.7154 50.7999 62.4789C42.4316 60.8296 34.1158 58.9562 25.8389 56.9366C21.8037 55.9587 17.7771 54.9253 13.7591 53.8364C9.51545 52.6806 5.47833 50.8211 1.25014 49.7073C0.365001 49.4787 -0.0376274 50.7583 0.725625 51.1746Z",
                    fill: "currentColor"
                  })]
                })
              })
            }), video_url ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "cs_video_block cs_style_1 cs_bg_filed",
              style: {
                backgroundImage: "url(".concat(image_url, ")")
              },
              onClick: function onClick() {
                return onVideoClick(video_url);
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "cs_player_btn cs_accent_color",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {})
              })
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "cs_video_block cs_style_1 cs_bg_filed",
              style: {
                backgroundImage: "url(".concat(image_url, ")"),
                cursor: "initial"
              }
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "col-xl-6 offset-xl-1 col-lg-7 position-relative",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: false,
            navigation: {
              nextEl: ".cs_right_arrow",
              prevEl: ".cs_left_arrow",
              disabledClass: "swiper-button-disabled"
            },
            modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Navigation],
            speed: 800,
            loop: true,
            className: "mySwiper",
            children: inner_slide_list === null || inner_slide_list === void 0 ? void 0 : inner_slide_list.map(function (testimonialItem, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "cs_testimonial cs_style_1",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    className: "cs_testimonial_text cs_primary_font cs_fs_30 cs_primary_color fst-italic",
                    dangerouslySetInnerHTML: {
                      __html: testimonialItem.testimonial_text
                    }
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    className: "cs_height_45 cs_height_lg_30"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    className: "cs_testimonial_info d-flex align-testimonialItems-center",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                        className: "cs_fs_24 cs_normal mb-0",
                        children: testimonialItem.avatar_name
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                        className: "cs_height_5 cs_height_lg_5"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                        className: "mb-0",
                        children: testimonialItem.avatar_designation
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                        className: "cs_height_12 cs_height_lg_12"
                      }), testimonialItem.review_number && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Rating__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        className: "cs_rating cs_accent_color",
                        ratingNumber: testimonialItem.review_number
                      })]
                    })
                  })]
                })
              }, index);
            })
          }), (inner_slide_list === null || inner_slide_list === void 0 ? void 0 : inner_slide_list.length) > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "cs_height_60 cs_height_lg_35"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "cs_slider_arrows cs_style1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "cs_left_arrow cs_accent_bg rounded-circle cs_center cs_white_color",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                  width: 17,
                  height: 12,
                  viewBox: "0 0 17 12",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                    d: "M0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.469669 5.46967ZM17 5.25L1 5.25V6.75L17 6.75V5.25Z",
                    fill: "currentColor"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "cs_right_arrow cs_accent_bg rounded-circle cs_center cs_white_color",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                  width: 17,
                  height: 12,
                  viewBox: "0 0 17 12",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                    d: "M16.5303 6.53033C16.8232 6.23744 16.8232 5.76256 16.5303 5.46967L11.7574 0.696698C11.4645 0.403805 10.9896 0.403805 10.6967 0.696698C10.4038 0.989592 10.4038 1.46447 10.6967 1.75736L14.9393 6L10.6967 10.2426C10.4038 10.5355 10.4038 11.0104 10.6967 11.3033C10.9896 11.5962 11.4645 11.5962 11.7574 11.3033L16.5303 6.53033ZM6.55671e-08 6.75L16 6.75L16 5.25L-6.55671e-08 5.25L6.55671e-08 6.75Z",
                    fill: "currentColor"
                  })
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "cs_testimonial_1_2_quote cs_ternary_color",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
              width: 162,
              height: 122,
              viewBox: "0 0 162 122",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                d: "M54 0H27C19.8392 0 12.9716 2.84463 7.90812 7.90812C2.84464 12.9716 0 19.8392 0 27L0 54C0 57.5804 1.42232 61.0142 3.95406 63.5459C6.4858 66.0777 9.91958 67.5 13.5 67.5H47.25C47.2393 76.4478 43.6801 85.026 37.353 91.353C31.026 97.6801 22.4478 101.239 13.5 101.25C10.8147 101.25 8.23935 102.317 6.34054 104.216C4.44174 106.114 3.375 108.69 3.375 111.375C3.375 114.06 4.44174 116.636 6.34054 118.534C8.23935 120.433 10.8147 121.5 13.5 121.5C27.8168 121.484 41.5425 115.789 51.666 105.666C61.7895 95.5425 67.4839 81.8168 67.5 67.5V13.5C67.5 9.91958 66.0777 6.4858 63.5459 3.95406C61.0142 1.42232 57.5804 0 54 0Z",
                fill: "currentColor"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                d: "M148.5 0H121.5C114.339 0 107.472 2.84463 102.408 7.90812C97.3446 12.9716 94.5 19.8392 94.5 27V54C94.5 57.5804 95.9223 61.0142 98.4541 63.5459C100.986 66.0777 104.42 67.5 108 67.5H141.75C141.739 76.4478 138.18 85.026 131.853 91.353C125.526 97.6801 116.948 101.239 108 101.25C105.315 101.25 102.739 102.317 100.841 104.216C98.9417 106.114 97.875 108.69 97.875 111.375C97.875 114.06 98.9417 116.636 100.841 118.534C102.739 120.433 105.315 121.5 108 121.5C122.317 121.484 136.043 115.789 146.166 105.666C156.289 95.5425 161.984 81.8168 162 67.5V13.5C162 9.91958 160.578 6.4858 158.046 3.95406C155.514 1.42232 152.08 0 148.5 0Z",
                fill: "currentColor"
              })]
            })
          })]
        })]
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Rating.jsx":
/*!*****************************************************!*\
  !*** ./resources/js/Frontend/Components/Rating.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Rating)
/* harmony export */ });
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/react */ "@iconify/react");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function Rating(_ref) {
  var className = _ref.className,
    ratingNumber = _ref.ratingNumber;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: className,
    "data-rating": "4.5",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
      className: "cs_center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, {
        icon: "fa6-regular:star"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
      className: "cs_center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, {
        icon: "fa6-regular:star"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
      className: "cs_center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, {
        icon: "fa6-regular:star"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
      className: "cs_center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, {
        icon: "fa6-regular:star"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
      className: "cs_center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, {
        icon: "fa6-regular:star"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "cs_rating_percentage",
      style: {
        width: "".concat(ratingNumber * 20, "%")
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
        className: "cs_center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, {
          icon: "fa6-solid:star"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
        className: "cs_center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, {
          icon: "fa6-solid:star"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
        className: "cs_center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, {
          icon: "fa6-solid:star"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
        className: "cs_center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, {
          icon: "fa6-solid:star"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
        className: "cs_center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, {
          icon: "fa6-solid:star"
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Sections/HorizontalScrollSection.jsx":
/*!*******************************************************************************!*\
  !*** ./resources/js/Frontend/Components/Sections/HorizontalScrollSection.jsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HorizontalScrollSection)
/* harmony export */ });
/* harmony import */ var _HorizontalScroll_HorizontalScroll1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../HorizontalScroll/HorizontalScroll1 */ "./resources/js/Frontend/Components/HorizontalScroll/HorizontalScroll1.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function HorizontalScrollSection(_ref) {
  var _sections_data$layout;
  var sections_data = _ref.sections_data;
  var sectionLayout = (_sections_data$layout = sections_data === null || sections_data === void 0 ? void 0 : sections_data.layout) !== null && _sections_data$layout !== void 0 ? _sections_data$layout : "1";
  var section = "";
  if (sectionLayout === "1") {
    section = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_HorizontalScroll_HorizontalScroll1__WEBPACK_IMPORTED_MODULE_0__["default"], {
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