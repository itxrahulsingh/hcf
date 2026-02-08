"use strict";
exports.id = "resources_js_Frontend_Components_Sections_PartnerSection_jsx";
exports.ids = ["resources_js_Frontend_Components_Sections_PartnerSection_jsx"];
exports.modules = {

/***/ "./resources/js/Frontend/Components/Partner/Partner1.jsx":
/*!***************************************************************!*\
  !*** ./resources/js/Frontend/Components/Partner/Partner1.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Partner1)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/modules */ "swiper/modules");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_modules__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css */ "swiper/css");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/pagination */ "swiper/css/pagination");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






var styles = {
  sectionTitle: {
    marginBottom: "50px",
    position: "relative",
    display: "inline-block",
    paddingBottom: "10px"
  },
  brandCard: {
    height: "120px",
    // Fixed height for uniformity
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    border: "1px solid #f0f0f0",
    borderRadius: "12px",
    padding: "20px",
    transition: "all 0.4s ease",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden"
  },
  img: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    transition: "all 0.4s ease",
    filter: "grayscale(100%)",
    opacity: 0.7
  }
};
function Partner1(_ref) {
  var data = _ref.data;
  var section_title = data.section_title,
    partner_list = data.partner_list,
    pagination_style = data.pagination_style;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("section", {
    className: "cs_partner_section",
    style: {
      padding: "60px 0"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("style", {
      children: "\n                    .cs_partner_card:hover {\n                        border-color: var(--primary); /* Or your specific orange color */\n                        box-shadow: 0 10px 30px rgba(0,0,0,0.08);\n                        transform: translateY(-5px);\n                    }\n                    .cs_partner_card:hover img {\n                        filter: grayscale(0%) !important;\n                        opacity: 1 !important;\n                        transform: scale(1.1);\n                    }\n                "
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "container",
      children: [section_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "text-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
          className: "cs_section_title cs_fs_53 cs_normal mb-0",
          style: styles.sectionTitle,
          dangerouslySetInnerHTML: {
            __html: section_title
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
        slidesPerView: 2,
        spaceBetween: 24,
        speed: 1000,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        },
        pagination: pagination_style ? {
          clickable: true
        } : false,
        modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Autoplay],
        className: "mySwiper pt-2 pb-5 ".concat(pagination_style || ""),
        breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          991: {
            slidesPerView: 4,
            spaceBetween: 24
          },
          1200: {
            slidesPerView: 5,
            // Exactly 5 on Desktop
            spaceBetween: 30
          }
        },
        children: partner_list === null || partner_list === void 0 ? void 0 : partner_list.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "cs_partner_card",
              style: styles.brandCard,
              children: item.partner_image_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                src: item.partner_image_url,
                alt: "Partner Brand",
                style: styles.img,
                loading: "lazy",
                decoding: "async"
              })
            })
          }, index);
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Partner/Partner2.jsx":
/*!***************************************************************!*\
  !*** ./resources/js/Frontend/Components/Partner/Partner2.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Partner2)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Partner2(_ref) {
  var data = _ref.data;
  var partner_list = data.partner_list,
    animation_direction = data.animation_direction;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "cs_moving_section_wrap",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "cs_moving_section_in",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "cs_moving_section cs_moving_duration_40 cs_brand_2_wrap".concat(animation_direction ? " cs_reverse_animation" : ""),
          children: partner_list === null || partner_list === void 0 ? void 0 : partner_list.map(function (item, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
              className: "cs_brand cs_style_2",
              children: item.partner_image_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                src: item.partner_image_url,
                alt: "Brand",
                loading: "lazy",
                decoding: "async"
              })
            }, index);
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "cs_moving_section cs_moving_duration_40 cs_brand_2_wrap".concat(animation_direction ? " cs_reverse_animation" : ""),
          children: partner_list === null || partner_list === void 0 ? void 0 : partner_list.map(function (item, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
              className: "cs_brand cs_style_2",
              children: item.partner_image_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                src: item.partner_image_url,
                alt: "Brand",
                loading: "lazy",
                decoding: "async"
              })
            }, index);
          })
        })]
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Sections/PartnerSection.jsx":
/*!**********************************************************************!*\
  !*** ./resources/js/Frontend/Components/Sections/PartnerSection.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PartnerSection)
/* harmony export */ });
/* harmony import */ var _Frontend_Components_Partner_Partner1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Frontend/Components/Partner/Partner1 */ "./resources/js/Frontend/Components/Partner/Partner1.jsx");
/* harmony import */ var _Frontend_Components_Partner_Partner2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Frontend/Components/Partner/Partner2 */ "./resources/js/Frontend/Components/Partner/Partner2.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function PartnerSection(_ref) {
  var _sections_data$layout;
  var sections_data = _ref.sections_data;
  var sectionLayout = (_sections_data$layout = sections_data === null || sections_data === void 0 ? void 0 : sections_data.layout) !== null && _sections_data$layout !== void 0 ? _sections_data$layout : "1";

  // conditional rendering
  var layout = "";
  if (sectionLayout === "1") {
    layout = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Frontend_Components_Partner_Partner1__WEBPACK_IMPORTED_MODULE_0__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "2") {
    layout = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Frontend_Components_Partner_Partner2__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: sections_data
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: layout
  });
}

/***/ })

};
;