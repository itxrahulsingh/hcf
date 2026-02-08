"use strict";
exports.id = "resources_js_Frontend_Components_Sections_CaseStudyDetailsSection_jsx";
exports.ids = ["resources_js_Frontend_Components_Sections_CaseStudyDetailsSection_jsx"];
exports.modules = {

/***/ "./resources/js/Frontend/Components/CaseStudyDetails/CaseStudyDetails1.jsx":
/*!*********************************************************************************!*\
  !*** ./resources/js/Frontend/Components/CaseStudyDetails/CaseStudyDetails1.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CaseStudyDetails1)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function CaseStudyDetails1(_ref) {
  var data = _ref.data;
  var title = data.title,
    category = data.category,
    banner_bg_url = data.banner_bg_url,
    image_url = data.image_url,
    text_editor_content = data.text_editor_content;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(category || title || banner_bg_url) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "cs_page_heading cs_style_1 cs_bg_filed cs_primary_bg",
        style: {
          backgroundImage: "url(".concat(banner_bg_url, ")")
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "cs_section_heading cs_style_1",
            children: [category && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
              className: "cs_section_subtitle cs_fs_18 cs_medium cs_white_color",
              dangerouslySetInnerHTML: {
                __html: category
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
              className: "cs_section_title cs_fs_53 cs_normal mb-0 cs_white_color",
              dangerouslySetInnerHTML: {
                __html: title
              }
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "cs_height_100 cs_height_lg_60"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "row position-relative cs_gap_y_50",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "col-lg-5",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "cs_top_sticky_100",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "cs_case_study_details_thumb cs_radius_50_0_0_0",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                src: image_url,
                alt: "Casestudy",
                loading: "lazy",
                decoding: "async"
              })
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "col-lg-7",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "cs_casestudy_details",
            dangerouslySetInnerHTML: {
              __html: text_editor_content
            }
          })
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/CaseStudyDetails/CaseStudyDetails2.jsx":
/*!*********************************************************************************!*\
  !*** ./resources/js/Frontend/Components/CaseStudyDetails/CaseStudyDetails2.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CaseStudyDetails2)
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





function CaseStudyDetails2(_ref) {
  var data = _ref.data;
  var image_url = data.image_url,
    avatar_name = data.avatar_name,
    category = data.category,
    post_date = data.post_date,
    text_editor_content = data.text_editor_content,
    banner_type = data.banner_type,
    gallery_list = data.gallery_list,
    youtube_id = data.youtube_id,
    title = data.title;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "container",
    children: [banner_type === "static" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: image_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        src: image_url,
        alt: "Casestudy",
        className: "cs_radius_50_0_0_0",
        style: {
          marginBottom: "30px"
        },
        loading: "lazy",
        decoding: "async"
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
              alt: "Casestudy",
              loading: "lazy",
              decoding: "async"
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
    }), (category || post_date || avatar_name) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "cs_post cs_style_1",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        "class": "cs_post_info",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          "class": "cs_post_meta",
          children: [category && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            "class": "cs_medium cs_fs_18 cs_primary_color",
            children: category
          }), post_date && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            children: post_date
          }), avatar_name && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            children: avatar_name
          })]
        })
      })
    }), title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
      "class": "cs_post_title cs_fs_60 cs_normal",
      style: {
        marginBottom: "30px"
      },
      dangerouslySetInnerHTML: {
        __html: title
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "cs_casestudy_details",
      style: {
        paddingLeft: "0"
      },
      dangerouslySetInnerHTML: {
        __html: text_editor_content
      }
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Sections/CaseStudyDetailsSection.jsx":
/*!*******************************************************************************!*\
  !*** ./resources/js/Frontend/Components/Sections/CaseStudyDetailsSection.jsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CaseStudyDetailsSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CaseStudyDetails_CaseStudyDetails1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CaseStudyDetails/CaseStudyDetails1 */ "./resources/js/Frontend/Components/CaseStudyDetails/CaseStudyDetails1.jsx");
/* harmony import */ var _CaseStudyDetails_CaseStudyDetails2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CaseStudyDetails/CaseStudyDetails2 */ "./resources/js/Frontend/Components/CaseStudyDetails/CaseStudyDetails2.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function CaseStudyDetailsSection(_ref) {
  var _sections_data$layout;
  var sections_data = _ref.sections_data;
  var sectionLayout = (_sections_data$layout = sections_data === null || sections_data === void 0 ? void 0 : sections_data.layout) !== null && _sections_data$layout !== void 0 ? _sections_data$layout : "1";
  // conditional render
  var layoutSection = "";
  if (sectionLayout === "1") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_CaseStudyDetails_CaseStudyDetails1__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "2") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_CaseStudyDetails_CaseStudyDetails2__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: sections_data
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: layoutSection
  });
}

/***/ })

};
;