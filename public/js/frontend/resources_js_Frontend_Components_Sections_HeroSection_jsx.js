"use strict";
exports.id = "resources_js_Frontend_Components_Sections_HeroSection_jsx";
exports.ids = ["resources_js_Frontend_Components_Sections_HeroSection_jsx"];
exports.modules = {

/***/ "./resources/js/Frontend/Components/Hero/Hero10.jsx":
/*!**********************************************************!*\
  !*** ./resources/js/Frontend/Components/Hero/Hero10.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hero10)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_NavigationLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/NavigationLink */ "./resources/js/Components/NavigationLink.jsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button */ "./resources/js/Frontend/Components/Button.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




function Hero10(_ref) {
  var data = _ref.data;
  var casestudy_list = data.casestudy_list;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    activeIndex = _useState2[0],
    setActiveIndex = _useState2[1];
  var handleMouseEnter = function handleMouseEnter(index) {
    setActiveIndex(index);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
    className: "cs_case_study_2_wrap cs_primary_bg position-relative",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "container-fluid cs_padding_120_120",
      children: casestudy_list === null || casestudy_list === void 0 ? void 0 : casestudy_list.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "cs_case_study cs_style_2 cs_hover_active ".concat(activeIndex === index ? "active" : ""),
          onMouseEnter: function onMouseEnter() {
            return handleMouseEnter(index);
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "cs_case_study_in",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "cs_case_study_left",
              children: [item.casestudy_number && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
                className: "cs_case_study_number cs_fs_53 cs_white_color cs_normal mb-0",
                children: item.casestudy_number
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "cs_case_study_category cs_fs_18 cs_ternary_color cs_medium mb-0",
                dangerouslySetInnerHTML: {
                  __html: item.casestudy_category
                }
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "cs_case_study_center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
                className: "cs_case_study_title cs_fs_53 cs_normal cs_white_color mb-0",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Components_NavigationLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
                  href: item.casestudy_action_url,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    dangerouslySetInnerHTML: {
                      __html: item.casestudy_title
                    }
                  })
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "cs_case_study_right",
              children: (item.casestudy_action_url || item.casestudy_action_text) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
                href: item.casestudy_action_url,
                btnClass: "cs_btn cs_style_1 cs_type_4 cs_white_color cs_fs_18 cs_medium",
                btnText: item.casestudy_action_text
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "cs_case_study_bg cs_bg_filed",
            style: {
              backgroundImage: "url(".concat(item.casestudy_image_url, ")")
            }
          })]
        }, index);
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Hero/Hero11.jsx":
/*!**********************************************************!*\
  !*** ./resources/js/Frontend/Components/Hero/Hero11.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hero11)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button */ "./resources/js/Frontend/Components/Button.jsx");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/modules */ "swiper/modules");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_modules__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function Hero11(_ref) {
  var data = _ref.data;
  var slider_list = data.slider_list;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "cs_fullscreen_swiper_wrap",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "cs_swiper_button_next cs_down_btn"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 0,
      mousewheel: true,
      pagination: {
        type: "custom",
        renderCustom: function renderCustom(swiper, current, total) {
          return "\n                        <div class=\"cs_swiper_pagination cs_number_pagination cs_primary_font\">\n                          <span class=\"swiper-pagination-current\">".concat(current, "</span> / <span class=\"swiper-pagination-total\">").concat(total, "</span>\n                        </div>");
        }
      },
      speed: 1000,
      loop: true,
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Mousewheel, swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Navigation],
      className: "mySwiper",
      navigation: {
        nextEl: ".cs_swiper_button_next",
        prevEl: ".image-swiper-button-prev",
        disabledClass: "swiper-button-disabled"
      },
      children: slider_list.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "cs_fullscreen_slide cs_dark_section cs_hero cs_style_10 position-relative cs_center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "container",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "cs_section_heading cs_style_1",
                children: [item.sub_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                  className: "cs_section_subtitle cs_fs_18 cs_medium cs_ternary_color",
                  dangerouslySetInnerHTML: {
                    __html: item.sub_title
                  }
                }), item.title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
                  className: "cs_section_title cs_fs_120 cs_bold cs_white_color",
                  dangerouslySetInnerHTML: {
                    __html: item.title
                  }
                }), (item.action_url || item.action_text) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
                  href: item.action_url,
                  btnClass: "cs_btn cs_style_1 cs_type_4 cs_white_color cs_fs_18 cs_medium",
                  btnText: item.action_text
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "cs_hero_thumb cs_bg_filed",
              style: {
                backgroundImage: "url(".concat(item.imageUrl, ")")
              }
            })]
          })
        }, index);
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Hero/Hero12.jsx":
/*!**********************************************************!*\
  !*** ./resources/js/Frontend/Components/Hero/Hero12.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hero12)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/modules */ "swiper/modules");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_modules__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button */ "./resources/js/Frontend/Components/Button.jsx");
/* harmony import */ var _Widget_SocialWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Widget/SocialWidget */ "./resources/js/Frontend/Components/Widget/SocialWidget.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function Hero12(_ref) {
  var data = _ref.data;
  var slider_list = data.slider_list;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: "cs_hero cs_style_11 position-relative",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
      pagination: {
        clickable: true
      },
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_2__.EffectCube],
      effect: "cube",
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
      },
      speed: 1500,
      className: "mySwiper cs_swiper_pagination_wrap_4",
      children: slider_list === null || slider_list === void 0 ? void 0 : slider_list.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "cs_hero_in cs_center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "cs_hero_bg cs_bg_filed",
              style: {
                backgroundImage: "url(".concat(item.imageUrl, ")")
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "container",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "cs_hero_text",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1", {
                  className: "cs_hero_title cs_white_color cs_fs_60 cs_bold",
                  dangerouslySetInnerHTML: {
                    __html: item.title
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  className: "cs_hero_subtitle cs_ternary_color",
                  dangerouslySetInnerHTML: {
                    __html: item.sub_title
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "cs_hero_btns",
                  children: [(item.action_text || item.action_url) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    href: item.action_url,
                    btnText: item.action_text,
                    btnClass: "cs_btn cs_style_1 cs_type_2 cs_primary_color cs_white_bg"
                  }), (item.action_url_2 || item.action_text_2) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    href: item.action_url_2,
                    btnText: item.action_text_2,
                    btnClass: "cs_btn cs_style_1 cs_type_2 cs_white_color cs_primary_bg"
                  })]
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "cs_hero_info container-fluid cs_padding_120_120",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                children: [item.phone_number && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
                  className: "cs_hero_contact_number cs_fs_24 cs_normal cs_white_color mb-0",
                  children: item.phone_number
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Widget_SocialWidget__WEBPACK_IMPORTED_MODULE_4__["default"], {})]
              })
            })]
          })
        }, index);
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Hero/Hero13.jsx":
/*!**********************************************************!*\
  !*** ./resources/js/Frontend/Components/Hero/Hero13.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hero13)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_youtube_background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-youtube-background */ "react-youtube-background");
/* harmony import */ var react_youtube_background__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_youtube_background__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button */ "./resources/js/Frontend/Components/Button.jsx");
/* harmony import */ var _Widget_SocialWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Widget/SocialWidget */ "./resources/js/Frontend/Components/Widget/SocialWidget.jsx");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/react */ "@iconify/react");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function Hero13(_ref) {
  var data = _ref.data;
  var background_image_url = data.background_image_url,
    youtube_id = data.youtube_id,
    title = data.title,
    action_text = data.action_text,
    action_url = data.action_url,
    phone_number = data.phone_number;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "cs_style_9_wrap position-relative",
    children: [youtube_id && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((react_youtube_background__WEBPACK_IMPORTED_MODULE_1___default()), {
      videoId: youtube_id,
      className: "cs_video_bg"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "cs_video_bg_placeholder cs_bg_filed cs_primary_bg",
      style: {
        backgroundImage: "url(".concat(background_image_url, ")")
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "cs_hero cs_style_9 cs_type_1 cs_center position-relative",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "cs_hero_text",
          children: [title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1", {
            className: "cs_hero_title cs_fs_120 cs_white_color",
            dangerouslySetInnerHTML: {
              __html: title
            }
          }), (action_url || action_text) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
            href: action_url,
            btnClass: "cs_btn cs_style_1 cs_type_2 cs_white_color cs_accent_bg",
            btnText: action_text
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "cs_hero_social_wrap cs_hide_lg",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Widget_SocialWidget__WEBPACK_IMPORTED_MODULE_3__["default"], {}), phone_number && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "cs_hero_phone_number cs_primary_font cs_fs_24 cs_white_color",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "cs_secondary_bg cs_white_color cs_center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
            className: "cs_center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {
              icon: "fa6-solid:phone"
            })
          })
        }), phone_number]
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Hero/Hero14.jsx":
/*!**********************************************************!*\
  !*** ./resources/js/Frontend/Components/Hero/Hero14.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hero14)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button */ "./resources/js/Frontend/Components/Button.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function Hero14(_ref) {
  var data = _ref.data;
  var title = data.title,
    sub_title = data.sub_title,
    background_image_url = data.background_image_url,
    action_text = data.action_text,
    action_url = data.action_url,
    action_text_2 = data.action_text_2,
    action_url_2 = data.action_url_2,
    background_attachment = data.background_attachment;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("section", {
    className: "cs_hero cs_style_1 cs_type_1 cs_center cs_bg_filed",
    style: {
      backgroundImage: "url(".concat(background_image_url, ")"),
      backgroundAttachment: background_attachment
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
        className: "cs_hero_title cs_fs_120",
        dangerouslySetInnerHTML: {
          __html: title
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "cs_hero_subtitle cs_fs_18 cs_medium",
        dangerouslySetInnerHTML: {
          __html: sub_title
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "cs_hero_btns",
        children: [(action_text || action_url) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
          href: action_url,
          btnText: action_text,
          btnClass: "cs_btn cs_style_1 cs_type_2 cs_white_color cs_accent_bg cs_w_100_sm"
        }), (action_url_2 || action_text_2) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
          href: action_url_2,
          btnText: action_text_2,
          btnClass: "cs_btn cs_style_1 cs_type_2 cs_white_color cs_primary_bg cs_w_100_sm"
        })]
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Hero/Hero15.jsx":
/*!**********************************************************!*\
  !*** ./resources/js/Frontend/Components/Hero/Hero15.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hero15)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button */ "./resources/js/Frontend/Components/Button.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function Hero15(_ref) {
  var data = _ref.data;
  var background_image_url = data.background_image_url,
    title = data.title,
    sub_title = data.sub_title,
    action_text = data.action_text,
    action_url = data.action_url;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
    className: "cs_hero cs_style_8 cs_type_1",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "cs_hero_thumb cs_bg_filed",
      style: {
        backgroundImage: "url(".concat(background_image_url, ")")
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "cs_hero_right",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "cs_section_heading cs_style_1",
        children: [title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "cs_section_title cs_fs_80 cs_bold",
          dangerouslySetInnerHTML: {
            __html: title
          }
        }), sub_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "cs_fs_18 cs_medium",
          dangerouslySetInnerHTML: {
            __html: sub_title
          }
        }), (action_url || action_text) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
          href: action_url,
          btnClass: "cs_btn cs_style_1 cs_type_2 cs_white_color cs_accent_bg",
          btnText: action_text
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Hero/Hero16.jsx":
/*!**********************************************************!*\
  !*** ./resources/js/Frontend/Components/Hero/Hero16.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hero16)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button */ "./resources/js/Frontend/Components/Button.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function Hero16(_ref) {
  var data = _ref.data;
  var title = data.title,
    sub_title = data.sub_title,
    background_image_url = data.background_image_url,
    action_text = data.action_text,
    action_url = data.action_url,
    action_text_2 = data.action_text_2,
    action_url_2 = data.action_url_2,
    background_attachment = data.background_attachment;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("section", {
    className: "cs_hero cs_style_1 cs_type_1 cs_center cs_bg_filed",
    style: {
      backgroundImage: "url(".concat(background_image_url, ")"),
      backgroundAttachment: background_attachment
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
        className: "cs_hero_title cs_fs_120 cs_white_color",
        dangerouslySetInnerHTML: {
          __html: title
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "cs_hero_subtitle cs_fs_18 cs_medium  cs_white_color",
        dangerouslySetInnerHTML: {
          __html: sub_title
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "cs_hero_btns",
        children: [(action_text || action_url) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
          href: action_url,
          btnText: action_text,
          btnClass: "cs_btn cs_style_1 cs_type_2 cs_primary_color cs_white_bg cs_w_100_sm"
        }), (action_url_2 || action_text_2) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
          href: action_url_2,
          btnText: action_text_2,
          btnClass: "cs_btn cs_style_1 cs_type_2 cs_white_color cs_primary_bg cs_w_100_sm"
        })]
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Hero/Hero2.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/Frontend/Components/Hero/Hero2.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hero2)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/modules */ "swiper/modules");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_modules__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Widget_SocialWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Widget/SocialWidget */ "./resources/js/Frontend/Components/Widget/SocialWidget.jsx");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/react */ "@iconify/react");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Components_NavigationLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Components/NavigationLink */ "./resources/js/Components/NavigationLink.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







function Hero2(_ref) {
  var data = _ref.data;
  var phone_number = data.phone_number,
    slider_list = data.slider_list;
  var pagination = {
    clickable: true,
    renderBullet: function renderBullet(index, className) {
      return '<span class="cs_primary_font cs_fs_30 cs_white_color ' + className + '">' + (index + 1) + "</span>";
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("section", {
    className: "position-relative cs_swiper_number_pagination_wtap",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
      slidesPerView: 1,
      pagination: pagination,
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Pagination],
      className: "mySwiper",
      speed: 800,
      loop: true,
      children: slider_list === null || slider_list === void 0 ? void 0 : slider_list.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "swiper-slide",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "cs_hero cs_style_2 cs_center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "cs_swiper_parallax_bg cs_primary_bg",
                style: {
                  backgroundImage: "url(".concat(item.imageUrl, ")")
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "container",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "cs_hero_text",
                  children: [item.title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
                    className: "cs_hero_title cs_fs_60 cs_white_color",
                    dangerouslySetInnerHTML: {
                      __html: item.title
                    }
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                    className: "cs_hero_btn_wrap",
                    children: item.action_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Components_NavigationLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
                      href: item.action_url,
                      className: "cs_btn cs_style_1 cs_type_4 cs_primary_color cs_fs_18 cs_medium",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("svg", {
                            width: 61,
                            height: 61,
                            viewBox: "0 0 61 61",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
                              d: "M3 58L58 3M58 3L3 3M58 3L58 58",
                              stroke: "currentColor",
                              strokeWidth: 5,
                              strokeLinecap: "round",
                              strokeLinejoin: "round"
                            })
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("svg", {
                            width: 61,
                            height: 61,
                            viewBox: "0 0 61 61",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
                              d: "M3 58L58 3M58 3L3 3M58 3L58 58",
                              stroke: "currentColor",
                              strokeWidth: 5,
                              strokeLinecap: "round",
                              strokeLinejoin: "round"
                            })
                          })
                        })]
                      })
                    })
                  })]
                })
              })]
            })
          })
        }, index);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "cs_hero_social_wrap cs_hide_lg",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Widget_SocialWidget__WEBPACK_IMPORTED_MODULE_3__["default"], {}), phone_number && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "cs_hero_phone_number cs_primary_font cs_fs_24 cs_white_color",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "cs_secondary_bg cs_white_color cs_center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
            className: "cs_center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {
              icon: "fa6-solid:phone"
            })
          })
        }), phone_number]
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Hero/Hero3.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/Frontend/Components/Hero/Hero3.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hero3)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/react */ "@iconify/react");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_NavigationLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/NavigationLink */ "./resources/js/Components/NavigationLink.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




function Hero3(_ref) {
  var data = _ref.data;
  var background_image_url = data.background_image_url,
    avatar_image_url = data.avatar_image_url,
    title = data.title,
    conference_date = data.conference_date,
    location_date = data.location_date,
    conference_time = data.conference_time,
    conference_place = data.conference_place,
    avatar_name = data.avatar_name,
    avatar_designation = data.avatar_designation,
    action_url = data.action_url;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    transform1 = _useState2[0],
    setTransform1 = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    transform2 = _useState4[0],
    setTransform2 = _useState4[1];
  var handleMouseMove = function handleMouseMove(event) {
    var target = event.currentTarget;
    var halfW = target.clientWidth / 2;
    var halfH = target.clientHeight / 2;
    var coorX = halfW - (event.pageX - target.offsetLeft);
    var coorY = halfH - (event.pageY - target.offsetTop);
    var degX1 = coorY / halfH * -10 + "px";
    var degY1 = coorX / halfW * 10 + "px";
    var degX2 = coorY / halfH * 15 + "deg";
    var degY2 = coorX / halfW * -15 + "deg";
    setTransform1("perspective(800px) translateX(".concat(degX1, ") translateY(").concat(degY1, ") scale(1.02)"));
    setTransform2("perspective(800px) translate3d(0, 0, 0) rotateX(".concat(degX2, ") rotateY(").concat(degY2, ")"));
  };
  var handleMouseOut = function handleMouseOut() {
    setTransform1("");
    setTransform2("");
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
    className: "cs_hero cs_style_3 cs_bg_filed cs_primary_bg",
    style: {
      backgroundImage: "url(".concat(background_image_url, ")")
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "cs_hero_text",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "cs_hero_text_left",
          children: [(conference_date || location_date) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
            className: "cs_hero_info cs_mp0 cs_primary_font cs_fs_53 cs_white_color cs_normal",
            children: [conference_date && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
              children: conference_date
            }), location_date && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
                className: "cs_center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                  icon: "fa6-solid:location-dot"
                })
              }), location_date]
            })]
          }), title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
            className: "cs_hero_title cs_fs_120 cs_bold cs_white_color mb-0",
            dangerouslySetInnerHTML: {
              __html: title
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "cs_hero_text_right cs_hobble",
          onMouseMove: handleMouseMove,
          onMouseOut: handleMouseOut,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Components_NavigationLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
            href: action_url,
            className: "cs_hero_btn text-center cs_white_color cs_center cs_hover_layer_2",
            style: {
              transform: transform2
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "cs_hover_layer_1",
              style: {
                transform: transform1
              },
              children: [conference_time && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "cs_fs_30 cs_primary_font d-block",
                children: conference_time
              }), conference_place && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "d-block cs_fs_18 cs_medium",
                children: conference_place
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
                width: 44,
                height: 44,
                viewBox: "0 0 44 44",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                  d: "M3 3L41 41M41 41V3M41 41H3",
                  stroke: "white",
                  strokeWidth: 5,
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                })
              })]
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "cs_hero_avatar_wrap",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "cs_hero_avatar",
          children: [avatar_image_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
            src: avatar_image_url,
            alt: avatar_name,
            loading: "lazy",
            decoding: "async"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "cs_hero_avatar_right",
            children: [avatar_name && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
              className: "cs_normal cs_white_color cs_fs_53 mb-0",
              dangerouslySetInnerHTML: {
                __html: avatar_name
              }
            }), avatar_designation && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "mb-0 cs_fs_18 cs_medium cs_ternary_color",
              dangerouslySetInnerHTML: {
                __html: avatar_designation
              }
            })]
          })]
        })
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Hero/Hero4.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/Frontend/Components/Hero/Hero4.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hero4)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button */ "./resources/js/Frontend/Components/Button.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function Hero4(_ref) {
  var data = _ref.data;
  var background_image_url = data.background_image_url,
    title = data.title,
    sub_title = data.sub_title,
    action_text = data.action_text,
    action_url = data.action_url,
    action_text_2 = data.action_text_2,
    action_url_2 = data.action_url_2;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "cs_hero cs_style_4 text-center cs_center cs_bg_filed cs_bg_fixed cs_primary_bg",
      style: {
        backgroundImage: "url(".concat(background_image_url, ")")
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "cs_hero_text",
          children: [sub_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "cs_hero_subtitle cs_ternary_color cs_fs_18 cs_medium",
            dangerouslySetInnerHTML: {
              __html: sub_title
            }
          }), title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
            className: "cs_hero_title cs_white_color cs_fs_120 cs_bold",
            dangerouslySetInnerHTML: {
              __html: title
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "cs_hero_btns",
            children: [(action_url || action_text) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
              href: action_url,
              btnText: action_text,
              btnClass: "cs_btn cs_style_1 cs_type_2 cs_primary_color cs_white_bg cs_w_100_sm"
            }), (action_url_2 || action_text_2) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
              href: action_url_2,
              btnText: action_text_2,
              btnClass: "cs_btn cs_style_1 cs_type_2 cs_white_color cs_accent_bg cs_w_100_sm"
            })]
          })]
        })
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Hero/Hero5.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/Frontend/Components/Hero/Hero5.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hero5)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/modules */ "swiper/modules");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_modules__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button */ "./resources/js/Frontend/Components/Button.jsx");
/* harmony import */ var _Rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Rating */ "./resources/js/Frontend/Components/Rating.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }






function Hero5(_ref) {
  var data = _ref.data;
  var slider_list = data.slider_list;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    transform1 = _useState2[0],
    setTransform1 = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    transform2 = _useState4[0],
    setTransform2 = _useState4[1];
  var handleMouseMove = function handleMouseMove(event) {
    var target = event.currentTarget;
    var halfW = target.clientWidth / 2;
    var halfH = target.clientHeight / 2;
    var coorX = halfW - (event.pageX - target.offsetLeft);
    var coorY = halfH - (event.pageY - target.offsetTop);
    var degX1 = coorY / halfH * -10 + "px";
    var degY1 = coorX / halfW * 10 + "px";
    var degX2 = coorY / halfH * 15 + "deg";
    var degY2 = coorX / halfW * -15 + "deg";
    setTransform1("perspective(800px) translateX(".concat(degX1, ") translateY(").concat(degY1, ") scale(1.02)"));
    setTransform2("perspective(800px) translate3d(0, 0, 0) rotateX(".concat(degX2, ") rotateY(").concat(degY2, ")"));
  };
  var handleMouseOut = function handleMouseOut() {
    setTransform1("");
    setTransform2("");
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
    pagination: {
      clickable: true
    },
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_2__.EffectFade],
    effect: "fade",
    speed: 700,
    className: "mySwiper cs_swiper_pagination_wrap_1 cs_type_1",
    children: slider_list === null || slider_list === void 0 ? void 0 : slider_list.map(function (item, index) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "cs_hero cs_style_5 cs_center cs_hobble",
          onMouseMove: handleMouseMove,
          onMouseOut: handleMouseOut,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "cs_hero_img",
            children: item.imageUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              src: item.imageUrl,
              alt: item.title,
              className: "cs_hover_layer_1",
              style: {
                transform: transform1
              },
              loading: "lazy",
              decoding: "async"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "container",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "cs_hero_text",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "cs_section_heading cs_style_1",
                children: [item.sub_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  className: "cs_section_subtitle cs_fs_18 cs_medium",
                  dangerouslySetInnerHTML: {
                    __html: item.sub_title
                  }
                }), item.title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1", {
                  className: "cs_section_title cs_fs_120 cs_bold mb-0",
                  dangerouslySetInnerHTML: {
                    __html: item.title
                  }
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "cs_hero_btns",
                children: [(item.action_text || item.action_url) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  href: item.action_url,
                  btnText: item.action_text,
                  btnClass: "cs_btn cs_style_1 cs_type_2 cs_primary_color cs_white_bg cs_w_100_sm"
                }), (item.action_url_2 || item.action_text_2) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  href: item.action_url_2,
                  btnText: item.action_text_2,
                  btnClass: "cs_btn cs_style_1 cs_type_2 cs_white_color cs_accent_bg cs_w_100_sm"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "cs_hero_review_box",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "cs_hero_review_avatars",
                  children: [item.avatar_image_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                      src: item.avatar_image_url,
                      alt: "Avatar",
                      loading: "lazy",
                      decoding: "async"
                    })
                  }), item.avatar_image_url_2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                      src: item.avatar_image_url_2,
                      alt: "Avatar",
                      loading: "lazy",
                      decoding: "async"
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "cs_hero_review_right",
                  children: [item.review_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                    className: "mb-0 cs_fs_18 cs_medium cs_primary_color",
                    children: item.review_title
                  }), item.review_number && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "cs_hero_review",
                    children: [item.review_number && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                      children: [item.review_number > 5 ? 5 : item.review_number, " of 5"]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Rating__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      className: "cs_rating cs_accent_color",
                      ratingNumber: item.review_number
                    })]
                  })]
                })]
              })]
            })
          })]
        })
      }, index);
    })
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Hero/Hero6.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/Frontend/Components/Hero/Hero6.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hero6)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Hero6(_ref) {
  var data = _ref.data;
  var background_image_url = data.background_image_url,
    title = data.title,
    funfact_list = data.funfact_list;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
    className: "cs_hero cs_style_6",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "container",
      children: title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
        className: "cs_hero_title cs_bold cs_fs_120",
        dangerouslySetInnerHTML: {
          __html: title
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "cs_hero_counter_wrap cs_bg_filed",
      style: {
        backgroundImage: "url(".concat(background_image_url, ")")
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "cs_hero_counter_in",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "cs_hero_counter_list cs_accent_bg text-center",
            children: funfact_list.map(function (item, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "cs_hero_counter",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                  className: "cs_fs_60 cs_bold cs_white_color mb-0 cs_primary_font",
                  children: item.funfact_value
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                  className: "mb-0 cs_fs_18 cs_medium",
                  children: item.funfact_title
                })]
              }, index);
            })
          })
        })
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Hero/Hero7.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/Frontend/Components/Hero/Hero7.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hero7)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_water_wave__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-water-wave */ "react-water-wave");
/* harmony import */ var react_water_wave__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_water_wave__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function Hero7(_ref) {
  var data = _ref.data;
  var background_image_url = data.background_image_url,
    title = data.title,
    feature_list = data.feature_list;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "cs_bg_filed cs_primary_bg",
    style: {
      backgroundImage: "url(".concat(background_image_url, ")")
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((react_water_wave__WEBPACK_IMPORTED_MODULE_1___default()), {
      imageUrl: background_image_url,
      className: "cs_hero cs_style_7 cs_bg_filed",
      children: function children() {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "cs_hero_up",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "container",
              children: title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
                className: "cs_hero_title text-center cs_fs_60 cs_white_color mb-0",
                dangerouslySetInnerHTML: {
                  __html: title
                }
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
            className: "cs_hero_info_list cs_mp0",
            children: feature_list === null || feature_list === void 0 ? void 0 : feature_list.map(function (item, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                children: [item.feature_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
                  className: "cs_fs_24 cs_normal cs_white_color cs_normal",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                    dangerouslySetInnerHTML: {
                      __html: item.feature_title
                    }
                  })
                }), item.feature_subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                  className: "mb-0 cs_white_color",
                  dangerouslySetInnerHTML: {
                    __html: item.feature_subtitle
                  }
                })]
              }, index);
            })
          })]
        });
      }
    })
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Hero/Hero8.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/Frontend/Components/Hero/Hero8.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hero8)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button */ "./resources/js/Frontend/Components/Button.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function Hero8(_ref) {
  var data = _ref.data;
  var background_image_url = data.background_image_url,
    title = data.title,
    sub_title = data.sub_title,
    action_text = data.action_text,
    action_url = data.action_url;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
    className: "cs_hero cs_style_8",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "cs_hero_thumb cs_bg_filed",
      style: {
        backgroundImage: "url(".concat(background_image_url, ")")
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "cs_hero_right",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "cs_section_heading cs_style_1",
        children: [sub_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "cs_section_subtitle cs_fs_18 cs_medium",
          dangerouslySetInnerHTML: {
            __html: sub_title
          }
        }), title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
          className: "cs_section_title cs_fs_120 cs_bold mb-0",
          dangerouslySetInnerHTML: {
            __html: title
          }
        }), (action_url || action_text) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
          href: action_url,
          btnClass: "cs_btn cs_style_1 cs_type_2 cs_white_color cs_accent_bg",
          btnText: action_text
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Hero/Hero9.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/Frontend/Components/Hero/Hero9.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hero9)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_youtube_background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-youtube-background */ "react-youtube-background");
/* harmony import */ var react_youtube_background__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_youtube_background__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button */ "./resources/js/Frontend/Components/Button.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function Hero9(_ref) {
  var data = _ref.data;
  var background_image_url = data.background_image_url,
    youtube_id = data.youtube_id,
    title = data.title,
    action_text = data.action_text,
    action_url = data.action_url;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "cs_style_9_wrap position-relative",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((react_youtube_background__WEBPACK_IMPORTED_MODULE_1___default()), {
      videoId: youtube_id,
      className: "cs_video_bg"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "cs_video_bg_placeholder cs_bg_filed cs_primary_bg",
      style: {
        backgroundImage: "url(".concat(background_image_url, ")")
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
      className: "cs_hero cs_style_9 cs_center position-relative",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "cs_hero_text",
          children: [title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
            className: "cs_hero_title cs_fs_120 cs_white_color",
            dangerouslySetInnerHTML: {
              __html: title
            }
          }), (action_url || action_text) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
            href: action_url,
            btnClass: "cs_btn cs_style_1 cs_type_2 cs_white_color cs_accent_bg",
            btnText: action_text
          })]
        })
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Hero/index.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/Frontend/Components/Hero/index.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hero)
/* harmony export */ });
/* harmony import */ var _Components_NavigationLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/NavigationLink */ "./resources/js/Components/NavigationLink.jsx");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/react */ "@iconify/react");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function Hero(_ref) {
  var data = _ref.data;
  var title = data.title,
    phone_number = data.phone_number,
    sub_title = data.sub_title,
    background_image_url = data.background_image_url;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
    className: "cs_hero cs_style_1 cs_center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "cs_hero_title_box_wrap",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "cs_hero_title_box",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "cs_hero_title_box_in",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "container",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
              className: "cs_hero_title cs_fs_120 mb-0",
              dangerouslySetInnerHTML: {
                __html: title
              }
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "cs_hero_title_box cs_title_cloned",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "cs_hero_title_box_in",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "container",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
              className: "cs_hero_title cs_fs_120 mb-0",
              dangerouslySetInnerHTML: {
                __html: title
              }
            })
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "cs_hero_text",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "cs_hero_bottom",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "cs_hero_phone_number cs_primary_font cs_fs_24 cs_primary_color",
            children: phone_number && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "cs_accent_bg cs_white_color cs_center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
                  className: "cs_center",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    icon: "fa6-solid:phone"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Components_NavigationLink__WEBPACK_IMPORTED_MODULE_0__["default"], {
                href: "tel:".concat(phone_number),
                children: data.phone_number
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "cs_hero_subtitle cs_white_color cs_fs_18 cs_medium",
            dangerouslySetInnerHTML: {
              __html: sub_title
            }
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "cs_hero_thumb cs_bg_filed cs_primary_bg",
      style: {
        backgroundImage: "url(".concat(background_image_url, ")")
      }
    })]
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

/***/ "./resources/js/Frontend/Components/Sections/HeroSection.jsx":
/*!*******************************************************************!*\
  !*** ./resources/js/Frontend/Components/Sections/HeroSection.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeroSection)
/* harmony export */ });
/* harmony import */ var _Frontend_Components_Hero_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Frontend/Components/Hero/index.jsx */ "./resources/js/Frontend/Components/Hero/index.jsx");
/* harmony import */ var _Frontend_Components_Hero_Hero2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Frontend/Components/Hero/Hero2 */ "./resources/js/Frontend/Components/Hero/Hero2.jsx");
/* harmony import */ var _Frontend_Components_Hero_Hero3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Frontend/Components/Hero/Hero3 */ "./resources/js/Frontend/Components/Hero/Hero3.jsx");
/* harmony import */ var _Frontend_Components_Hero_Hero4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Frontend/Components/Hero/Hero4 */ "./resources/js/Frontend/Components/Hero/Hero4.jsx");
/* harmony import */ var _Frontend_Components_Hero_Hero5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Frontend/Components/Hero/Hero5 */ "./resources/js/Frontend/Components/Hero/Hero5.jsx");
/* harmony import */ var _Frontend_Components_Hero_Hero6__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Frontend/Components/Hero/Hero6 */ "./resources/js/Frontend/Components/Hero/Hero6.jsx");
/* harmony import */ var _Frontend_Components_Hero_Hero7__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Frontend/Components/Hero/Hero7 */ "./resources/js/Frontend/Components/Hero/Hero7.jsx");
/* harmony import */ var _Frontend_Components_Hero_Hero8__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Frontend/Components/Hero/Hero8 */ "./resources/js/Frontend/Components/Hero/Hero8.jsx");
/* harmony import */ var _Frontend_Components_Hero_Hero9__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Frontend/Components/Hero/Hero9 */ "./resources/js/Frontend/Components/Hero/Hero9.jsx");
/* harmony import */ var _Frontend_Components_Hero_Hero10__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/Frontend/Components/Hero/Hero10 */ "./resources/js/Frontend/Components/Hero/Hero10.jsx");
/* harmony import */ var _Frontend_Components_Hero_Hero11__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/Frontend/Components/Hero/Hero11 */ "./resources/js/Frontend/Components/Hero/Hero11.jsx");
/* harmony import */ var _Hero_Hero12__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Hero/Hero12 */ "./resources/js/Frontend/Components/Hero/Hero12.jsx");
/* harmony import */ var _Hero_Hero13__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Hero/Hero13 */ "./resources/js/Frontend/Components/Hero/Hero13.jsx");
/* harmony import */ var _Hero_Hero14__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Hero/Hero14 */ "./resources/js/Frontend/Components/Hero/Hero14.jsx");
/* harmony import */ var _Hero_Hero15__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Hero/Hero15 */ "./resources/js/Frontend/Components/Hero/Hero15.jsx");
/* harmony import */ var _Hero_Hero16__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Hero/Hero16 */ "./resources/js/Frontend/Components/Hero/Hero16.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);

















function HeroSection(_ref) {
  var _sections_data$layout;
  var sections_data = _ref.sections_data;
  var sectionLayout = (_sections_data$layout = sections_data === null || sections_data === void 0 ? void 0 : sections_data.layout) !== null && _sections_data$layout !== void 0 ? _sections_data$layout : "1";
  var layoutSection = "";
  // conditional layout rendering
  if (sectionLayout === "1") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Frontend_Components_Hero_index_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "2") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Frontend_Components_Hero_Hero2__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "3") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Frontend_Components_Hero_Hero3__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "4") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Frontend_Components_Hero_Hero4__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "5") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Frontend_Components_Hero_Hero5__WEBPACK_IMPORTED_MODULE_4__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "6") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Frontend_Components_Hero_Hero6__WEBPACK_IMPORTED_MODULE_5__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "7") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Frontend_Components_Hero_Hero7__WEBPACK_IMPORTED_MODULE_6__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "8") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Frontend_Components_Hero_Hero8__WEBPACK_IMPORTED_MODULE_7__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "9") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Frontend_Components_Hero_Hero9__WEBPACK_IMPORTED_MODULE_8__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "10") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Frontend_Components_Hero_Hero10__WEBPACK_IMPORTED_MODULE_9__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "11") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Frontend_Components_Hero_Hero11__WEBPACK_IMPORTED_MODULE_10__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "12") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Hero_Hero12__WEBPACK_IMPORTED_MODULE_11__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "13") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Hero_Hero13__WEBPACK_IMPORTED_MODULE_12__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "14") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Hero_Hero14__WEBPACK_IMPORTED_MODULE_13__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "15") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Hero_Hero15__WEBPACK_IMPORTED_MODULE_14__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "16") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Hero_Hero16__WEBPACK_IMPORTED_MODULE_15__["default"], {
      data: sections_data
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
    children: layoutSection
  });
}

/***/ })

};
;