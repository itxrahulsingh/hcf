"use strict";
exports.id = "resources_js_Frontend_Components_Sections_PortfolioDetailsSection_jsx";
exports.ids = ["resources_js_Frontend_Components_Sections_PortfolioDetailsSection_jsx"];
exports.modules = {

/***/ "./resources/js/Frontend/Components/PortfolioDetails/PortfolioDetails1.jsx":
/*!*********************************************************************************!*\
  !*** ./resources/js/Frontend/Components/PortfolioDetails/PortfolioDetails1.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PortfolioDetails1)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/modules */ "swiper/modules");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_modules__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_youtube_background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-youtube-background */ "react-youtube-background");
/* harmony import */ var react_youtube_background__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_youtube_background__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function PortfolioDetails1(_ref) {
  var data = _ref.data;
  var image_url = data.image_url,
    text_editor_content = data.text_editor_content,
    banner_type = data.banner_type,
    gallery_list = data.gallery_list,
    youtube_id = data.youtube_id,
    title = data.title,
    product_info_list = data.product_info_list;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "container",
    children: [banner_type === "static" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: image_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        src: image_url,
        alt: "Casestudy",
        loading: "lazy",
        decoding: "async",
        className: "cs_radius_50_0_0_0",
        style: {
          marginBottom: "30px"
        }
      })
    }), banner_type === "slider" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "cs_radius_50_0_0_0 overflow-hidden cs_case_study_slider",
      style: {
        marginBottom: "30px"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
        navigation: true,
        modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Navigation],
        className: "mySwiper",
        loop: true,
        speed: 800,
        children: gallery_list === null || gallery_list === void 0 ? void 0 : gallery_list.map(function (galleryItem, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
              src: galleryItem.gallery_image_url,
              loading: "lazy",
              decoding: "async",
              alt: "Casestudy"
            })
          }, index);
        })
      })
    }), banner_type === "video" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "cs_case_study_video cs_radius_50_0_0_0",
      style: {
        marginBottom: "30px"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((react_youtube_background__WEBPACK_IMPORTED_MODULE_3___default()), {
        videoId: youtube_id,
        className: "cs_video_bg"
      })
    }), title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
      "class": "cs_post_title cs_fs_60 cs_normal",
      style: {
        marginBottom: "40px"
      },
      dangerouslySetInnerHTML: {
        __html: title
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "cs_project_details_wrap",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "cs_project_details_info",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
          className: "cs_project_details_info_title cs_fs_24",
          style: {
            marginBottom: "15px"
          },
          children: "Project Info"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
          className: "cs_project_details_info_list cs_mp0",
          children: product_info_list === null || product_info_list === void 0 ? void 0 : product_info_list.map(function (item, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                className: "cs_primary_color mb-0 cs_medium",
                dangerouslySetInnerHTML: {
                  __html: item.product_info_title
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                className: "mb-0",
                dangerouslySetInnerHTML: {
                  __html: item.product_info_subtitle
                }
              })]
            }, index);
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "cs_project_details_right",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "cs_casestudy_details",
          style: {
            paddingLeft: "0"
          },
          dangerouslySetInnerHTML: {
            __html: text_editor_content
          }
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Sections/PortfolioDetailsSection.jsx":
/*!*******************************************************************************!*\
  !*** ./resources/js/Frontend/Components/Sections/PortfolioDetailsSection.jsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PortfolioDetailsSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PortfolioDetails_PortfolioDetails1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PortfolioDetails/PortfolioDetails1 */ "./resources/js/Frontend/Components/PortfolioDetails/PortfolioDetails1.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function PortfolioDetailsSection(_ref) {
  var _sections_data$layout;
  var sections_data = _ref.sections_data;
  var sectionLayout = (_sections_data$layout = sections_data === null || sections_data === void 0 ? void 0 : sections_data.layout) !== null && _sections_data$layout !== void 0 ? _sections_data$layout : "1";
  // conditional render
  var layoutSection = "";
  if (sectionLayout === "1") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_PortfolioDetails_PortfolioDetails1__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: sections_data
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: layoutSection
  });
}

/***/ })

};
;