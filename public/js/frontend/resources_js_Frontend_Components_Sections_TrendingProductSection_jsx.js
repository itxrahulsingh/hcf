"use strict";
exports.id = "resources_js_Frontend_Components_Sections_TrendingProductSection_jsx";
exports.ids = ["resources_js_Frontend_Components_Sections_TrendingProductSection_jsx"];
exports.modules = {

/***/ "./resources/js/Frontend/Components/Sections/TrendingProductSection.jsx":
/*!******************************************************************************!*\
  !*** ./resources/js/Frontend/Components/Sections/TrendingProductSection.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TrendingProductSection)
/* harmony export */ });
/* harmony import */ var _TrendingProduct_TrendingProduct1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../TrendingProduct/TrendingProduct1 */ "./resources/js/Frontend/Components/TrendingProduct/TrendingProduct1.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function TrendingProductSection(_ref) {
  var _sections_data$layout;
  var sections_data = _ref.sections_data;
  var sectionLayout = (_sections_data$layout = sections_data === null || sections_data === void 0 ? void 0 : sections_data.layout) !== null && _sections_data$layout !== void 0 ? _sections_data$layout : "1";
  var section = "";
  if (sectionLayout === "1") {
    section = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_TrendingProduct_TrendingProduct1__WEBPACK_IMPORTED_MODULE_0__["default"], {
      data: sections_data
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: section
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/TrendingProduct/TrendingProduct1.jsx":
/*!*******************************************************************************!*\
  !*** ./resources/js/Frontend/Components/TrendingProduct/TrendingProduct1.jsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TrendingProduct1)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button */ "./resources/js/Frontend/Components/Button.jsx");
/* harmony import */ var _inertiajs_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/react */ "@inertiajs/react");
/* harmony import */ var _inertiajs_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/translate */ "./resources/js/utils/translate.js");
/* harmony import */ var _Components_Amount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/Amount */ "./resources/js/Components/Amount.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Redux_features_Cart_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Redux/features/Cart/cart */ "./resources/js/Redux/features/Cart/cart.js");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/modules */ "swiper/modules");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(swiper_modules__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }










function TrendingProduct1(_ref) {
  var data = _ref.data;
  var section_title = data.section_title,
    section_subtitle = data.section_subtitle,
    action_text = data.action_text,
    pagination_style = data.pagination_style,
    navigation_style = data.navigation_style,
    is_auto_play = data.is_auto_play;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  var trendingProducts = localStorage.getItem("trending_products") ? JSON.parse(localStorage.getItem("trending_products")) : [];

  // Get shop page URL with trending filter
  var shopUrl = "/shop?filter[type]=trending";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "cs_section_heading cs_style_3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "cs_section_heading_left",
          children: [section_subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
            className: "cs_section_subtitle cs_fs_18 cs_medium",
            dangerouslySetInnerHTML: {
              __html: section_subtitle
            }
          }), section_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h2", {
            className: "cs_section_title cs_fs_53 cs_normal mb-0 cs_normal",
            dangerouslySetInnerHTML: {
              __html: section_title
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "cs_section_heading_right",
          children: action_text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
            href: shopUrl,
            btnText: action_text,
            btnClass: "cs_btn cs_style_1 cs_type_2 cs_primary_bg cs_white_color cs_w_100_sm"
          })
        })]
      }), (action_text || section_title) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "cs_height_80 cs_height_lg_50"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: "position-relative cs_hover_show_arrow",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_7__.Swiper, {
          slidesPerView: 1,
          spaceBetween: 24,
          pagination: {
            clickable: true
          },
          autoplay: is_auto_play ? {
            delay: 5000,
            disableOnInteraction: false
          } : false,
          navigation: {
            nextEl: ".cs_right_arrow",
            prevEl: ".cs_left_arrow",
            disabledClass: "swiper-button-disabled"
          },
          modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_8__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_8__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_8__.Autoplay],
          speed: 800,
          loop: true,
          className: "mySwiper".concat(pagination_style === "pagination_0" ? " cs_swiper_pagination_wrap_0" : "").concat(pagination_style === "pagination_1" ? " cs_swiper_pagination_wrap_1" : "").concat(pagination_style === "pagination_2" ? " cs_swiper_pagination_wrap_2" : "").concat(pagination_style === "pagination_3" ? " cs_swiper_pagination_wrap_3" : ""),
          breakpoints: {
            575: _defineProperty({
              slidesPerView: 1
            }, "slidesPerView", 2),
            991: {
              slidesPerView: 3,
              spaceBetween: 24
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 24
            }
          },
          children: trendingProducts === null || trendingProducts === void 0 ? void 0 : trendingProducts.map(function (product, index) {
            var _product$content, _product$discount_pri;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                className: "cs_product_card cs_style_1",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                  className: "cs_product_thumb",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
                    src: product.thumbnail_image,
                    alt: product.seo_title || "Product Image",
                    loading: "lazy",
                    decoding: "async"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                    className: "cs_product_overlay"
                  }), product.quantity === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                    className: "cs_out_of_stock_message",
                    children: (0,_utils_translate__WEBPACK_IMPORTED_MODULE_3__["default"])("Out of Stock")
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                    className: "cs_card_btns",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("a", {
                      href: "javascript:void(0)",
                      onClick: function onClick() {
                        dispatch((0,_Redux_features_Cart_cart__WEBPACK_IMPORTED_MODULE_6__.addCart)(product));
                      },
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("svg", {
                        width: 24,
                        height: 24,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("g", {
                          clipPath: "url(#a1)",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("path", {
                            d: "M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z",
                            fill: "currentColor"
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("defs", {
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("clipPath", {
                            id: "a1",
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("rect", {
                              width: 24,
                              height: 24,
                              fill: "currentColor"
                            })
                          })
                        })]
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                      href: "/product/".concat(product.slug),
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("svg", {
                        width: 22,
                        height: 16,
                        viewBox: "0 0 22 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("path", {
                          d: "M11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5ZM11 13C8.24 13 6 10.76 6 8C6 5.24 8.24 3 11 3C13.76 3 16 5.24 16 8C16 10.76 13.76 13 11 13ZM11 5C9.34 5 8 6.34 8 8C8 9.66 9.34 11 11 11C12.66 11 14 9.66 14 8C14 6.34 12.66 5 11 5Z",
                          fill: "currentColor"
                        })
                      })
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                  className: "cs_product_info",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h2", {
                    className: "cs_product_title",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_inertiajs_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                      href: "/product/".concat(product.slug),
                      children: product === null || product === void 0 || (_product$content = product.content) === null || _product$content === void 0 ? void 0 : _product$content.title
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
                    className: "cs_product_price",
                    children: [(0,_utils_translate__WEBPACK_IMPORTED_MODULE_3__["default"])("Price"), ":", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                      className: "cs_present_price",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Components_Amount__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        amount: (_product$discount_pri = product.discount_price) !== null && _product$discount_pri !== void 0 ? _product$discount_pri : product.price
                      })
                    }), product.discount_price && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                      className: "cs_discunt_price",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Components_Amount__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        amount: product.price
                      })
                    })]
                  })]
                })]
              })
            }, index);
          })
        }), navigation_style === "navigation_0" && "", (trendingProducts === null || trendingProducts === void 0 ? void 0 : trendingProducts.length) > 4 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
          children: navigation_style === "navigation_1" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "cs_slider_arrows cs_style2 cs_mobile_hide",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "cs_left_arrow cs_accent_color",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("svg", {
                width: 52,
                height: 24,
                viewBox: "0 0 52 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("path", {
                  d: "M0.939339 10.9393C0.353554 11.5251 0.353554 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939339 10.9393ZM52 10.5L2 10.5V13.5L52 13.5V10.5Z",
                  fill: "currentColor"
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "cs_right_arrow cs_accent_color",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("svg", {
                width: 52,
                height: 24,
                viewBox: "0 0 52 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("path", {
                  d: "M51.0607 13.0607C51.6464 12.4749 51.6464 11.5251 51.0607 10.9393L41.5147 1.3934C40.9289 0.807611 39.9792 0.807611 39.3934 1.3934C38.8076 1.97919 38.8076 2.92893 39.3934 3.51472L47.8787 12L39.3934 20.4853C38.8076 21.0711 38.8076 22.0208 39.3934 22.6066C39.9792 23.1924 40.9289 23.1924 41.5147 22.6066L51.0607 13.0607ZM0 13.5H50V10.5H0V13.5Z",
                  fill: "currentColor"
                })
              })
            })]
          })
        })]
      })
    })]
  });
}

/***/ })

};
;