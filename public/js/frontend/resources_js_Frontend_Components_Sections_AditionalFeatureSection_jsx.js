"use strict";
exports.id = "resources_js_Frontend_Components_Sections_AditionalFeatureSection_jsx";
exports.ids = ["resources_js_Frontend_Components_Sections_AditionalFeatureSection_jsx"];
exports.modules = {

/***/ "./resources/js/Frontend/Components/AditionalFeature/AditionalFeature1.jsx":
/*!*********************************************************************************!*\
  !*** ./resources/js/Frontend/Components/AditionalFeature/AditionalFeature1.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AditionalFeature1)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/modules */ "swiper/modules");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_modules__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function AditionalFeature1(_ref) {
  var data = _ref.data;
  var section_title = data.section_title,
    section_subtitle = data.section_subtitle,
    feature_list = data.feature_list;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "container",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "row",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "col-xl-4 col-lg-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "cs_section_heading cs_style_1",
          children: [section_subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            className: "cs_section_subtitle cs_fs_18 cs_medium",
            dangerouslySetInnerHTML: {
              __html: section_subtitle
            }
          }), section_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
            className: "cs_section_title cs_fs_53 cs_normal mb-0",
            dangerouslySetInnerHTML: {
              __html: section_title
            }
          })]
        }), (feature_list === null || feature_list === void 0 ? void 0 : feature_list.length) > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "cs_height_44 cs_height_lg_30"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "cs_slider_arrows cs_style1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "cs_left_arrow cs_accent_bg rounded-circle cs_center cs_white_color",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
                width: 17,
                height: 12,
                viewBox: "0 0 17 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                  d: "M0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.469669 5.46967ZM17 5.25L1 5.25V6.75L17 6.75V5.25Z",
                  fill: "currentColor"
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "cs_right_arrow cs_accent_bg rounded-circle cs_center cs_white_color",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
                width: 17,
                height: 12,
                viewBox: "0 0 17 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                  d: "M16.5303 6.53033C16.8232 6.23744 16.8232 5.76256 16.5303 5.46967L11.7574 0.696698C11.4645 0.403805 10.9896 0.403805 10.6967 0.696698C10.4038 0.989592 10.4038 1.46447 10.6967 1.75736L14.9393 6L10.6967 10.2426C10.4038 10.5355 10.4038 11.0104 10.6967 11.3033C10.9896 11.5962 11.4645 11.5962 11.7574 11.3033L16.5303 6.53033ZM6.55671e-08 6.75L16 6.75L16 5.25L-6.55671e-08 5.25L6.55671e-08 6.75Z",
                  fill: "currentColor"
                })
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "cs_height_85 cs_height_lg_50"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "col-xl-8 col-lg-7 cs_slider cs_style_2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "cs_slider_2_in",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "cs_auto_per_view_1 cs_full_screen_right",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
              slidesPerView: "auto",
              spaceBetween: 24,
              pagination: false,
              speed: 800,
              loop: true,
              modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Navigation],
              navigation: {
                nextEl: ".cs_right_arrow",
                prevEl: ".cs_left_arrow",
                disabledClass: "swiper-button-disabled"
              },
              className: "mySwiper",
              children: feature_list === null || feature_list === void 0 ? void 0 : feature_list.map(function (item, index) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                  children: (item.feature_image_url || item.feature_title || item.feature_subtitle) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                    className: "cs_card cs_style_2 cs_gray_bg",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                      className: "cs_card_in",
                      children: [item.feature_image_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                        className: "cs_card_thumb",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                          src: item.feature_image_url,
                          alt: item.feature_title,
                          loading: "lazy",
                          decoding: "async"
                        })
                      }), item.feature_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
                        className: "cs_card_title cs_normal cs_fs_30",
                        dangerouslySetInnerHTML: {
                          __html: item.feature_title
                        }
                      }), item.feature_subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                        className: "cs_card_subtitle mb-0",
                        dangerouslySetInnerHTML: {
                          __html: item.feature_subtitle
                        }
                      })]
                    })
                  })
                }, index);
              })
            })
          })
        })
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/AditionalFeature/AditionalFeature2.jsx":
/*!*********************************************************************************!*\
  !*** ./resources/js/Frontend/Components/AditionalFeature/AditionalFeature2.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AditionalFeature2)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function AditionalFeature2(_ref) {
  var data = _ref.data;
  var section_image_url = data.section_image_url,
    section_description = data.section_description,
    section_title = data.section_title,
    section_subtitle = data.section_subtitle,
    feature_list = data.feature_list;
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
          }), section_description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
              className: "mb-0",
              dangerouslySetInnerHTML: {
                __html: section_description
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "cs_height_35 cs_height_lg_30"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "d-flex cs_gap_y_30 flex-wrap",
          children: feature_list === null || feature_list === void 0 ? void 0 : feature_list.map(function (item, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
              children: (item.feature_image_url || item.feature_title || item.feature_subtitle) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "cs_iconbox cs_style_3 w-100",
                children: [item.feature_image_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "cs_iconbox_icon",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                    src: item.feature_image_url,
                    alt: "Icon",
                    loading: "lazy",
                    decoding: "async"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  className: "cs_iconbox_right",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
                    className: "cs_iconbox_title cs_normal cs_fs_24",
                    dangerouslySetInnerHTML: {
                      __html: item.feature_title
                    }
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                    className: "cs_iconbox_subtitle mb-0",
                    dangerouslySetInnerHTML: {
                      __html: item.feature_subtitle
                    }
                  })]
                })]
              })
            }, index);
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "col-lg-6",
        children: section_image_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "cs_right_full_width cs_space_120",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
            src: section_image_url,
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

/***/ "./resources/js/Frontend/Components/AditionalFeature/AditionalFeature3.jsx":
/*!*********************************************************************************!*\
  !*** ./resources/js/Frontend/Components/AditionalFeature/AditionalFeature3.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AditionalFeature3)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function AditionalFeature3(_ref) {
  var data = _ref.data;
  var feature_list = data.feature_list;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: feature_list.map(function (item, index) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "cs_scroll_slide cs_top_sticky_0",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "cs_planing_wrap cs_center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "container",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "row align-items-center cs_gap_y_50",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "col-lg-5",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h2", {
                  className: "cs_planing_title cs_fs_53 cs_normal",
                  children: [item.feature_number && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                    children: item.feature_number
                  }), item.feature_title]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
                  className: "cs_planing_list cs_mp0",
                  children: item.inner_feature_list.map(function (innerItem, innerItemIndex) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                        className: "cs_iconbox cs_style_6",
                        children: [innerItem.inner_feature_icon_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                          className: "cs_iconbox_icon cs_accent_bg cs_center",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                            src: innerItem.inner_feature_icon_url,
                            alt: "Icon",
                            loading: "lazy",
                            decoding: "async"
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                          className: "cs_iconbox_right",
                          children: [innerItem.inner_feature_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
                            className: "cs_iconbox_title cs_fs_30 cs_normal",
                            dangerouslySetInnerHTML: {
                              __html: innerItem.inner_feature_title
                            }
                          }), innerItem.inner_feature_subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                            className: "cs_iconbox_subtitle mb-0",
                            dangerouslySetInnerHTML: {
                              __html: innerItem.inner_feature_subtitle
                            }
                          })]
                        })]
                      })
                    }, innerItemIndex);
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "col-lg-6 offset-lg-1",
                children: item.feature_image_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "cs_planing_thumb",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                    src: item.feature_image_url,
                    alt: item.feature_title,
                    loading: "lazy",
                    decoding: "async"
                  })
                })
              })]
            })
          })
        })
      }, index);
    })
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/AditionalFeature/AditionalFeature4.jsx":
/*!*********************************************************************************!*\
  !*** ./resources/js/Frontend/Components/AditionalFeature/AditionalFeature4.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AditionalFeature4)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function AditionalFeature4(_ref) {
  var data = _ref.data;
  var feature_list = data.feature_list;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: feature_list.map(function (item, index) {
      var isEven = index % 2 === 1; // Check if index is even (0-based)

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "cs_scroll_slide cs_top_sticky_0",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "cs_planing_wrap cs_type_1 cs_center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "container",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "row align-items-center cs_gap_y_50",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "col-lg-5 ".concat(isEven ? "order-lg-2 offset-lg-1" : ""),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h2", {
                  className: "cs_planing_title cs_fs_53 cs_normal",
                  children: [item.feature_number && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                    children: item.feature_number
                  }), item.feature_title]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
                  className: "cs_planing_list cs_mp0",
                  children: item.inner_feature_list.map(function (innerItem, innerItemIndex) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                        className: "cs_iconbox cs_style_6",
                        children: [innerItem.inner_feature_icon_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                          className: "cs_iconbox_icon cs_accent_bg cs_center",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                            src: innerItem.inner_feature_icon_url,
                            alt: "Icon",
                            loading: "lazy",
                            decoding: "async"
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                          className: "cs_iconbox_right",
                          children: [innerItem.inner_feature_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
                            className: "cs_iconbox_title cs_fs_30 cs_normal",
                            dangerouslySetInnerHTML: {
                              __html: innerItem.inner_feature_title
                            }
                          }), innerItem.inner_feature_subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                            className: "cs_iconbox_subtitle mb-0",
                            dangerouslySetInnerHTML: {
                              __html: innerItem.inner_feature_subtitle
                            }
                          })]
                        })]
                      })
                    }, innerItemIndex);
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "col-lg-6 ".concat(isEven ? "order-lg-1" : "offset-lg-1"),
                children: item.feature_image_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "cs_planing_thumb",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                    src: item.feature_image_url,
                    alt: item.feature_title,
                    loading: "lazy",
                    decoding: "async"
                  })
                })
              })]
            })
          })
        })
      }, index);
    })
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Sections/AditionalFeatureSection.jsx":
/*!*******************************************************************************!*\
  !*** ./resources/js/Frontend/Components/Sections/AditionalFeatureSection.jsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AditionalFeatureSection)
/* harmony export */ });
/* harmony import */ var _AditionalFeature_AditionalFeature1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AditionalFeature/AditionalFeature1 */ "./resources/js/Frontend/Components/AditionalFeature/AditionalFeature1.jsx");
/* harmony import */ var _AditionalFeature_AditionalFeature2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AditionalFeature/AditionalFeature2 */ "./resources/js/Frontend/Components/AditionalFeature/AditionalFeature2.jsx");
/* harmony import */ var _AditionalFeature_AditionalFeature3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AditionalFeature/AditionalFeature3 */ "./resources/js/Frontend/Components/AditionalFeature/AditionalFeature3.jsx");
/* harmony import */ var _AditionalFeature_AditionalFeature4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AditionalFeature/AditionalFeature4 */ "./resources/js/Frontend/Components/AditionalFeature/AditionalFeature4.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function AditionalFeatureSection(_ref) {
  var _sections_data$layout;
  var sections_data = _ref.sections_data;
  var sectionLayout = (_sections_data$layout = sections_data === null || sections_data === void 0 ? void 0 : sections_data.layout) !== null && _sections_data$layout !== void 0 ? _sections_data$layout : "1";
  var section = "";
  if (sectionLayout === "1") {
    section = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AditionalFeature_AditionalFeature1__WEBPACK_IMPORTED_MODULE_0__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "2") {
    section = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AditionalFeature_AditionalFeature2__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "3") {
    section = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AditionalFeature_AditionalFeature3__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "4") {
    section = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AditionalFeature_AditionalFeature4__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: sections_data
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: section
  });
}

/***/ })

};
;