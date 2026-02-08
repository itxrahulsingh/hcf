"use strict";
exports.id = "resources_js_Frontend_Components_Sections_CauseSection_jsx";
exports.ids = ["resources_js_Frontend_Components_Sections_CauseSection_jsx"];
exports.modules = {

/***/ "./resources/js/Frontend/Components/Cause/Cause1.jsx":
/*!***********************************************************!*\
  !*** ./resources/js/Frontend/Components/Cause/Cause1.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cause1)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/modules */ "swiper/modules");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_modules__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_NavigationLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/NavigationLink */ "./resources/js/Components/NavigationLink.jsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function Cause1(_ref) {
  var data = _ref.data;
  var section_title = data.section_title,
    section_subtitle = data.section_subtitle,
    pagination_style = data.pagination_style;
  var causes = localStorage.getItem("causes") ? JSON.parse(localStorage.getItem("causes")) : [];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "container",
      children: (section_subtitle || section_title) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "cs_section_heading cs_style_1 text-center",
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
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "cs_height_85 cs_height_lg_50"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "container-fluid",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
        slidesPerView: 1,
        spaceBetween: 24,
        pagination: {
          clickable: true
        },
        speed: 800,
        loop: true,
        modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Pagination],
        className: "mySwiper".concat(pagination_style === "pagination_0" ? " cs_swiper_pagination_wrap_0" : "").concat(pagination_style === "pagination_1" ? " cs_swiper_pagination_wrap_1" : "").concat(pagination_style === "pagination_2" ? " cs_swiper_pagination_wrap_2" : "").concat(pagination_style === "pagination_3" ? " cs_swiper_pagination_wrap_3" : ""),
        breakpoints: {
          575: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          991: {
            slidesPerView: 3
          },
          1400: {
            slidesPerView: 4
          }
        },
        children: causes === null || causes === void 0 ? void 0 : causes.map(function (item, index) {
          var _item$content, _item$category, _item$content2;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "cs_post cs_style_1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Components_NavigationLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
                href: route("cause.show", item === null || item === void 0 ? void 0 : item.slug),
                className: "cs_post_thumb",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                  src: item === null || item === void 0 ? void 0 : item.thumbnail_image,
                  alt: item === null || item === void 0 || (_item$content = item.content) === null || _item$content === void 0 ? void 0 : _item$content.title,
                  loading: "lazy",
                  decoding: "async"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "cs_post_info",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "cs_post_meta",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    className: "cs_medium cs_fs_18 cs_primary_color",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                      href: route("cause.show", item === null || item === void 0 ? void 0 : item.slug),
                      children: item === null || item === void 0 || (_item$category = item.category) === null || _item$category === void 0 || (_item$category = _item$category.content) === null || _item$category === void 0 ? void 0 : _item$category.title
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
                  className: "cs_post_title cs_fs_30 cs_normal mb-0",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Components_NavigationLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    href: route("cause.show", item === null || item === void 0 ? void 0 : item.slug),
                    children: item === null || item === void 0 || (_item$content2 = item.content) === null || _item$content2 === void 0 ? void 0 : _item$content2.title
                  })
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

/***/ "./resources/js/Frontend/Components/Cause/Cause2.jsx":
/*!***********************************************************!*\
  !*** ./resources/js/Frontend/Components/Cause/Cause2.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cause2)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/modules */ "swiper/modules");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_modules__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_NavigationLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/NavigationLink */ "./resources/js/Components/NavigationLink.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





// Inline styles for pixel-perfect adjustments

var styles = {
  splitHeader: {
    borderRadius: "50px",
    overflow: "hidden",
    display: "flex",
    color: "white",
    fontWeight: "700",
    marginBottom: "40px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    fontSize: "clamp(14px, 2vw, 20px)" // Responsive font size
  },
  headerLeft: {
    width: "50%",
    backgroundColor: "#3b5998",
    // Dark Blue
    padding: "12px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  headerRight: {
    width: "50%",
    backgroundColor: "#7e3f98",
    // Purple
    padding: "12px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  // Card Container to ensure equal height
  cardContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    border: "1px solid #f0f0f0",
    borderRadius: "15px",
    padding: "15px",
    backgroundColor: "#fff",
    boxShadow: "0 5px 15px rgba(0,0,0,0.03)"
  },
  imgWrapper: {
    width: "100%",
    height: "180px",
    overflow: "hidden",
    borderRadius: "10px",
    marginBottom: "15px",
    flexShrink: 0 // Prevent image squishing
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease"
  },
  // Title Styling - Smaller & Clamped
  title: {
    fontSize: "17px",
    // Reduced from 20px
    fontWeight: "700",
    lineHeight: "1.4",
    color: "#222",
    marginBottom: "15px",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    // Limit to 2 lines
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    height: "48px",
    // Fixed height for alignment
    textDecoration: "none"
  },
  // Button Styling
  donateBtn: {
    background: "linear-gradient(90deg, #e65c00 0%, #f9d423 100%)",
    color: "white",
    border: "none",
    padding: "10px 0",
    fontWeight: "700",
    borderRadius: "8px",
    width: "100%",
    marginTop: "auto",
    // Pushes button to the bottom
    display: "block",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "14px",
    letterSpacing: "0.5px",
    cursor: "pointer",
    textDecoration: "none"
  }
};
function Cause2(_ref) {
  var data = _ref.data;
  var navigation_style = data.navigation_style;
  var causes = localStorage.getItem("causes") ? JSON.parse(localStorage.getItem("causes")) : [];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
    className: "cs_shape_wrap_4 position-relative",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "cs_height_120 cs_height_lg_80"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        style: styles.splitHeader,
        className: "cs_split_header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          style: styles.headerLeft,
          children: "Tax Benefit"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          style: styles.headerRight,
          children: "100% Transparency"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "position-relative",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
          slidesPerView: 1,
          spaceBetween: 24,
          pagination: {
            clickable: true
          },
          speed: 800,
          loop: true,
          modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Navigation],
          navigation: {
            nextEl: ".cs_right_arrow",
            prevEl: ".cs_left_arrow",
            disabledClass: "swiper-button-disabled"
          },
          className: "mySwiper pb-5",
          breakpoints: {
            576: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 3
            },
            991: {
              slidesPerView: 4
            },
            1200: {
              slidesPerView: 4
            }
          },
          children: causes === null || causes === void 0 ? void 0 : causes.map(function (item, index) {
            var _item$content, _item$content2, _item$content3;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
              style: {
                height: "auto"
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                style: styles.cardContainer,
                className: "cs_zoom_effect_wrap",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_NavigationLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  href: route("cause.show", item === null || item === void 0 ? void 0 : item.slug),
                  style: styles.imgWrapper,
                  className: "cs_zoom_effect",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                    src: item === null || item === void 0 ? void 0 : item.thumbnail_image,
                    alt: item === null || item === void 0 || (_item$content = item.content) === null || _item$content === void 0 ? void 0 : _item$content.title,
                    loading: "lazy",
                    decoding: "async",
                    style: styles.img
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
                  className: "mb-0",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_NavigationLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    href: route("cause.show", item === null || item === void 0 ? void 0 : item.slug),
                    style: styles.title,
                    title: item === null || item === void 0 || (_item$content2 = item.content) === null || _item$content2 === void 0 ? void 0 : _item$content2.title,
                    children: item === null || item === void 0 || (_item$content3 = item.content) === null || _item$content3 === void 0 ? void 0 : _item$content3.title
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_NavigationLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  href: route("cause.show", item === null || item === void 0 ? void 0 : item.slug),
                  style: styles.donateBtn,
                  className: "cs_donate_btn_hover",
                  children: "DONATE NOW"
                })]
              })
            }, index);
          })
        }), navigation_style === "navigation_1" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "cs_slider_arrows cs_style2 cs_mobile_hide mt-4 justify-content-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "cs_left_arrow cs_accent_color",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
              width: 52,
              height: 24,
              viewBox: "0 0 52 24",
              fill: "none",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                d: "M0.939339 10.9393C0.353554 11.5251 0.353554 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939339 10.9393ZM52 10.5L2 10.5V13.5L52 13.5V10.5Z",
                fill: "currentColor"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "cs_right_arrow cs_accent_color",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
              width: 52,
              height: 24,
              viewBox: "0 0 52 24",
              fill: "none",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                d: "M51.0607 13.0607C51.6464 12.4749 51.6464 11.5251 51.0607 10.9393L41.5147 1.3934C40.9289 0.807611 39.9792 0.807611 39.3934 1.3934C38.8076 1.97919 38.8076 2.92893 39.3934 3.51472L47.8787 12L39.3934 20.4853C38.8076 21.0711 38.8076 22.0208 39.3934 22.6066C39.9792 23.1924 40.9289 23.1924 41.5147 22.6066L51.0607 13.0607ZM0 13.5H50V10.5H0V13.5Z",
                fill: "currentColor"
              })
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "cs_height_120 cs_height_lg_80"
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Cause/Cause3.jsx":
/*!***********************************************************!*\
  !*** ./resources/js/Frontend/Components/Cause/Cause3.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cause3)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/modules */ "swiper/modules");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_modules__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_NavigationLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/NavigationLink */ "./resources/js/Components/NavigationLink.jsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function Cause3(_ref) {
  var data = _ref.data;
  var section_title = data.section_title,
    section_subtitle = data.section_subtitle,
    pagination_style = data.pagination_style;
  var causes = localStorage.getItem("causes") ? JSON.parse(localStorage.getItem("causes")) : [];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "cs_section_heading cs_style_3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "cs_section_heading_left",
          children: (section_subtitle || section_title) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
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
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "cs_section_heading_right",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "cs_slider_arrows cs_style1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "cs_left_arrow cs_accent_bg rounded-circle cs_center cs_white_color",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
                width: 17,
                height: 12,
                viewBox: "0 0 17 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                  d: "M0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.469669 5.46967ZM17 5.25L1 5.25V6.75L17 6.75V5.25Z",
                  fill: "currentColor"
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "cs_right_arrow cs_accent_bg rounded-circle cs_center cs_white_color",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
                width: 17,
                height: 12,
                viewBox: "0 0 17 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                  d: "M16.5303 6.53033C16.8232 6.23744 16.8232 5.76256 16.5303 5.46967L11.7574 0.696698C11.4645 0.403805 10.9896 0.403805 10.6967 0.696698C10.4038 0.989592 10.4038 1.46447 10.6967 1.75736L14.9393 6L10.6967 10.2426C10.4038 10.5355 10.4038 11.0104 10.6967 11.3033C10.9896 11.5962 11.4645 11.5962 11.7574 11.3033L16.5303 6.53033ZM6.55671e-08 6.75L16 6.75L16 5.25L-6.55671e-08 5.25L6.55671e-08 6.75Z",
                  fill: "currentColor"
                })
              })
            })]
          })
        })]
      }), (section_subtitle || section_title) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "cs_height_85 cs_height_lg_50"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "position-relative",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "cs_auto_per_view_1 cs_full_screen_right",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
            slidesPerView: "auto",
            spaceBetween: 24,
            pagination: {
              clickable: true
            },
            speed: 800,
            loop: true,
            modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Navigation],
            navigation: {
              nextEl: ".cs_right_arrow",
              prevEl: ".cs_left_arrow",
              disabledClass: "swiper-button-disabled"
            },
            className: "mySwiper".concat(pagination_style === "pagination_0" ? " cs_swiper_pagination_wrap_0" : "").concat(pagination_style === "pagination_1" ? " cs_swiper_pagination_wrap_1" : "").concat(pagination_style === "pagination_2" ? " cs_swiper_pagination_wrap_2" : "").concat(pagination_style === "pagination_3" ? " cs_swiper_pagination_wrap_3" : ""),
            children: causes === null || causes === void 0 ? void 0 : causes.map(function (item, index) {
              var _item$content, _item$category, _item$content2;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "cs_post cs_style_1",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Components_NavigationLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    href: route("cause.show", item === null || item === void 0 ? void 0 : item.slug),
                    className: "cs_post_thumb",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                      src: item === null || item === void 0 ? void 0 : item.thumbnail_image,
                      alt: item === null || item === void 0 || (_item$content = item.content) === null || _item$content === void 0 ? void 0 : _item$content.title,
                      loading: "lazy",
                      decoding: "async"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "cs_post_info",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "cs_post_meta",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                        className: "cs_medium cs_fs_18 cs_primary_color",
                        children: item === null || item === void 0 || (_item$category = item.category) === null || _item$category === void 0 || (_item$category = _item$category.content) === null || _item$category === void 0 ? void 0 : _item$category.title
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                        children: moment__WEBPACK_IMPORTED_MODULE_4___default()(item === null || item === void 0 ? void 0 : item.created_at).format("ll")
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
                      className: "cs_post_title cs_fs_30 cs_normal mb-0",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Components_NavigationLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        href: route("cause.show", item === null || item === void 0 ? void 0 : item.slug),
                        children: item === null || item === void 0 || (_item$content2 = item.content) === null || _item$content2 === void 0 ? void 0 : _item$content2.title
                      })
                    })]
                  })]
                })
              }, index);
            })
          })
        })
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Cause/Cause4.jsx":
/*!***********************************************************!*\
  !*** ./resources/js/Frontend/Components/Cause/Cause4.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cause4)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/modules */ "swiper/modules");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_modules__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_NavigationLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/NavigationLink */ "./resources/js/Components/NavigationLink.jsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button */ "./resources/js/Frontend/Components/Button.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function Cause4(_ref) {
  var data = _ref.data;
  var section_title = data.section_title,
    section_subtitle = data.section_subtitle,
    action_text = data.action_text,
    pagination_style = data.pagination_style;
  var causes = localStorage.getItem("causes") ? JSON.parse(localStorage.getItem("causes")) : [];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "cs_section_heading cs_style_1 text-center",
        children: (section_subtitle || section_title) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
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
          })]
        })
      }), (section_subtitle || section_title) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "cs_height_85 cs_height_lg_50"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "position-relative",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "cs_auto_per_view_1 cs_full_screen_right",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
            slidesPerView: "auto",
            spaceBetween: 24,
            pagination: {
              clickable: true
            },
            speed: 800,
            loop: true,
            modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Navigation],
            navigation: {
              nextEl: ".cs_right_arrow",
              prevEl: ".cs_left_arrow",
              disabledClass: "swiper-button-disabled"
            },
            className: "mySwiper".concat(pagination_style === "pagination_0" ? " cs_swiper_pagination_wrap_0" : "").concat(pagination_style === "pagination_1" ? " cs_swiper_pagination_wrap_1" : "").concat(pagination_style === "pagination_2" ? " cs_swiper_pagination_wrap_2" : "").concat(pagination_style === "pagination_3" ? " cs_swiper_pagination_wrap_3" : ""),
            children: causes === null || causes === void 0 ? void 0 : causes.map(function (item, index) {
              var _item$content, _item$content2, _item$content3;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "cs_post cs_style_2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Components_NavigationLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    href: route("cause.show", item === null || item === void 0 ? void 0 : item.slug),
                    className: "cs_post_thumb",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                      src: item === null || item === void 0 ? void 0 : item.thumbnail_image,
                      alt: item === null || item === void 0 || (_item$content = item.content) === null || _item$content === void 0 ? void 0 : _item$content.title,
                      loading: "lazy",
                      decoding: "async"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "cs_post_info",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
                      className: "cs_post_title cs_fs_30 cs_normal",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Components_NavigationLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        href: route("cause.show", item === null || item === void 0 ? void 0 : item.slug),
                        children: item === null || item === void 0 || (_item$content2 = item.content) === null || _item$content2 === void 0 ? void 0 : _item$content2.title
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                      className: "cs_post_subtitle",
                      children: item === null || item === void 0 || (_item$content3 = item.content) === null || _item$content3 === void 0 ? void 0 : _item$content3.content.replace(/<[^>]*>/g, "").substring(0, 200)
                    }), action_text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      href: route("cause.show", item === null || item === void 0 ? void 0 : item.slug),
                      btnText: action_text,
                      btnClass: "cs_btn cs_style_1 cs_type_4 cs_primary_color cs_fs_18 cs_medium"
                    })]
                  })]
                })
              }, index);
            })
          })
        })
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Cause/Cause5.jsx":
/*!***********************************************************!*\
  !*** ./resources/js/Frontend/Components/Cause/Cause5.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cause5)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/modules */ "swiper/modules");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_modules__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_NavigationLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/NavigationLink */ "./resources/js/Components/NavigationLink.jsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button */ "./resources/js/Frontend/Components/Button.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function Cause5(_ref) {
  var data = _ref.data;
  var section_title = data.section_title,
    section_subtitle = data.section_subtitle,
    action_text = data.action_text,
    pagination_style = data.pagination_style;
  var causes = localStorage.getItem("causes") ? JSON.parse(localStorage.getItem("causes")) : [];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "container",
      children: (section_subtitle || section_title) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "cs_section_heading cs_style_1 text-center",
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
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "cs_height_85 cs_height_lg_50"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "container-fluid",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
        slidesPerView: 1,
        spaceBetween: 24,
        pagination: {
          clickable: true
        },
        speed: 800,
        loop: true,
        modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Navigation],
        navigation: {
          nextEl: ".cs_right_arrow",
          prevEl: ".cs_left_arrow",
          disabledClass: "swiper-button-disabled"
        },
        className: "mySwiper".concat(pagination_style === "pagination_0" ? " cs_swiper_pagination_wrap_0" : "").concat(pagination_style === "pagination_1" ? " cs_swiper_pagination_wrap_1" : "").concat(pagination_style === "pagination_2" ? " cs_swiper_pagination_wrap_2" : "").concat(pagination_style === "pagination_3" ? " cs_swiper_pagination_wrap_3" : ""),
        breakpoints: {
          767: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          991: {
            slidesPerView: 3
          },
          1400: {
            slidesPerView: 4
          }
        },
        children: causes === null || causes === void 0 ? void 0 : causes.map(function (item, index) {
          var _item$content, _item$content2, _item$content3;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "cs_post cs_style_2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Components_NavigationLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
                href: route("cause.show", item === null || item === void 0 ? void 0 : item.slug),
                className: "cs_post_thumb",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                  src: item === null || item === void 0 ? void 0 : item.thumbnail_image,
                  alt: item === null || item === void 0 || (_item$content = item.content) === null || _item$content === void 0 ? void 0 : _item$content.title,
                  loading: "lazy",
                  decoding: "async"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "cs_post_info",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
                  className: "cs_post_title cs_fs_30 cs_normal",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Components_NavigationLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    href: route("cause.show", item === null || item === void 0 ? void 0 : item.slug),
                    children: item === null || item === void 0 || (_item$content2 = item.content) === null || _item$content2 === void 0 ? void 0 : _item$content2.title
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  className: "cs_post_subtitle",
                  children: item === null || item === void 0 || (_item$content3 = item.content) === null || _item$content3 === void 0 ? void 0 : _item$content3.content.replace(/<[^>]*>/g, "").substring(0, 200)
                }), action_text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  href: route("cause.show", item === null || item === void 0 ? void 0 : item.slug),
                  btnText: action_text,
                  btnClass: "cs_btn cs_style_1 cs_type_4 cs_primary_color cs_fs_18 cs_medium"
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

/***/ "./resources/js/Frontend/Components/Sections/CauseSection.jsx":
/*!********************************************************************!*\
  !*** ./resources/js/Frontend/Components/Sections/CauseSection.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CauseSection)
/* harmony export */ });
/* harmony import */ var _Frontend_Components_Cause_Cause1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Frontend/Components/Cause/Cause1 */ "./resources/js/Frontend/Components/Cause/Cause1.jsx");
/* harmony import */ var _Frontend_Components_Cause_Cause2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Frontend/Components/Cause/Cause2 */ "./resources/js/Frontend/Components/Cause/Cause2.jsx");
/* harmony import */ var _Frontend_Components_Cause_Cause3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Frontend/Components/Cause/Cause3 */ "./resources/js/Frontend/Components/Cause/Cause3.jsx");
/* harmony import */ var _Frontend_Components_Cause_Cause4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Frontend/Components/Cause/Cause4 */ "./resources/js/Frontend/Components/Cause/Cause4.jsx");
/* harmony import */ var _Frontend_Components_Cause_Cause5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Frontend/Components/Cause/Cause5 */ "./resources/js/Frontend/Components/Cause/Cause5.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function CauseSection(_ref) {
  var _sections_data$layout;
  var sections_data = _ref.sections_data;
  var sectionLayout = (_sections_data$layout = sections_data === null || sections_data === void 0 ? void 0 : sections_data.layout) !== null && _sections_data$layout !== void 0 ? _sections_data$layout : "1";
  // conditional rendering
  var section = "";
  if (sectionLayout === "1") {
    section = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Frontend_Components_Cause_Cause1__WEBPACK_IMPORTED_MODULE_0__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "2") {
    section = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Frontend_Components_Cause_Cause2__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "3") {
    section = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Frontend_Components_Cause_Cause3__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "4") {
    section = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Frontend_Components_Cause_Cause4__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "5") {
    section = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Frontend_Components_Cause_Cause5__WEBPACK_IMPORTED_MODULE_4__["default"], {
      data: sections_data
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: section
  });
}

/***/ })

};
;