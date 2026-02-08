"use strict";
exports.id = "resources_js_Frontend_Components_Sections_TeamDetailsSection_jsx";
exports.ids = ["resources_js_Frontend_Components_Sections_TeamDetailsSection_jsx"];
exports.modules = {

/***/ "./resources/js/Frontend/Components/Sections/TeamDetailsSection.jsx":
/*!**************************************************************************!*\
  !*** ./resources/js/Frontend/Components/Sections/TeamDetailsSection.jsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TeamDetailsSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TeamDetails_TeamDetails1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TeamDetails/TeamDetails1 */ "./resources/js/Frontend/Components/TeamDetails/TeamDetails1.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function TeamDetailsSection(_ref) {
  var _sections_data$layout;
  var sections_data = _ref.sections_data;
  var sectionLayout = (_sections_data$layout = sections_data === null || sections_data === void 0 ? void 0 : sections_data.layout) !== null && _sections_data$layout !== void 0 ? _sections_data$layout : "1";
  // conditional render
  var layoutSection = "";
  if (sectionLayout === "1") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TeamDetails_TeamDetails1__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: sections_data
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: layoutSection
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/TeamDetails/TeamDetails1.jsx":
/*!***********************************************************************!*\
  !*** ./resources/js/Frontend/Components/TeamDetails/TeamDetails1.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TeamDetails1)
/* harmony export */ });
/* harmony import */ var _Components_NavigationLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/NavigationLink */ "./resources/js/Components/NavigationLink.jsx");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/react */ "@iconify/react");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function TeamDetails1(_ref) {
  var data = _ref.data;
  var member_image_url = data.member_image_url,
    member_name = data.member_name,
    member_designation = data.member_designation,
    member_details = data.member_details,
    member_email = data.member_email,
    member_phone_number = data.member_phone_number,
    member_social_links_title = data.member_social_links_title,
    social_list = data.social_list;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "container",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "row align-items-center cs_gap_y_45",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "col-lg-5",
        children: member_image_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
          src: member_image_url,
          alt: member_name,
          className: "cs_radius_50_50_0_0",
          loading: "lazy",
          decoding: "async"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "col-lg-7",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "cs_team_details cs_pl_70",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
            className: "cs_fs_30 cs_normal",
            dangerouslySetInnerHTML: {
              __html: member_name
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
            className: "cs_fs_18 cs_medium cs_secondary_font cs_secondary_color mb-0",
            dangerouslySetInnerHTML: {
              __html: member_designation
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "cs_height_25 cs_height_lg_25"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            className: "mb-0",
            dangerouslySetInnerHTML: {
              __html: member_details
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "cs_height_25 cs_height_lg_25"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
            className: "cs_mp0",
            children: [member_email && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
                className: "d-flex",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                  icon: "fa6-solid:envelope",
                  width: "18",
                  height: "18"
                })
              }), member_email]
            }), member_phone_number && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
                className: "d-flex",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                  icon: "fa6-solid:phone",
                  width: "18",
                  height: "18"
                })
              }), member_phone_number]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "cs_height_25 cs_height_lg_25"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
            className: "cs_fs_24 cs_normal cs_social_title",
            dangerouslySetInnerHTML: {
              __html: member_social_links_title
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "cs_social_btns cs_style_1 cs_type_1",
            children: social_list === null || social_list === void 0 ? void 0 : social_list.map(function (socialItem, socialIndex) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Components_NavigationLink__WEBPACK_IMPORTED_MODULE_0__["default"], {
                href: socialItem.social_action_url,
                className: "cs_center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                    icon: socialItem.social_icon_class,
                    width: "16",
                    height: "16"
                  })
                })
              }, socialIndex);
            })
          })]
        })
      })]
    })
  });
}

/***/ })

};
;