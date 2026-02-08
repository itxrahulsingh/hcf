"use strict";
exports.id = "resources_js_Frontend_Components_Sections_PricingSection_jsx";
exports.ids = ["resources_js_Frontend_Components_Sections_PricingSection_jsx"];
exports.modules = {

/***/ "./resources/js/Frontend/Components/Pricing/Pricing1.jsx":
/*!***************************************************************!*\
  !*** ./resources/js/Frontend/Components/Pricing/Pricing1.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pricing1)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button */ "./resources/js/Frontend/Components/Button.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




function Pricing1(_ref) {
  var data = _ref.data;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  var section_title = data.section_title,
    section_subtitle = data.section_subtitle,
    section_description = data.section_description,
    pricing_list = data.pricing_list;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "container",
    children: [(section_subtitle || section_title || section_description) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "cs_section_heading cs_style_2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "cs_section_heading_left",
          children: [section_subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "cs_section_subtitle cs_fs_18 cs_medium",
            dangerouslySetInnerHTML: {
              __html: section_subtitle
            }
          }), section_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
            className: "cs_section_title cs_fs_53 cs_normal mb-0 cs_normal",
            dangerouslySetInnerHTML: {
              __html: section_title
            }
          })]
        }), section_description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "cs_section_heading_right",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "cs_section_heading_text mb-0 cs_fs_18 cs_medium",
            dangerouslySetInnerHTML: {
              __html: section_description
            }
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "cs_height_85 cs_height_lg_50"
      })]
    }), (pricing_list === null || pricing_list === void 0 ? void 0 : pricing_list.length) > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "cs_price_tab_btns",
      children: pricing_list === null || pricing_list === void 0 ? void 0 : pricing_list.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "cs_price_tab_btn".concat(index === active ? " active" : ""),
          onClick: function onClick() {
            return setActive(index);
          },
          children: item.package_type
        }, index);
      })
    }), pricing_list === null || pricing_list === void 0 ? void 0 : pricing_list.map(function (pricingItem, pricingIndex) {
      if (pricingIndex === active) {
        var _pricingItem$package_;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "row cs_row_gap_60 cs_gap_y_40",
          children: (_pricingItem$package_ = pricingItem.package_list) === null || _pricingItem$package_ === void 0 ? void 0 : _pricingItem$package_.map(function (item, index) {
            var _item$package_feature;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "col-lg-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "cs_pricing_table cs_style_1",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h2", {
                  className: "cs_pricing_title cs_fs_53 cs_normal",
                  children: [item.package_name, item.package_icon_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    className: "cs_center",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                      src: item.package_icon_url,
                      alt: "",
                      loading: "lazy",
                      decoding: "async"
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
                  className: "cs_pricing_feature cs_mp0 cs_fs_18 cs_medium",
                  children: (_item$package_feature = item.package_feature) === null || _item$package_feature === void 0 ? void 0 : _item$package_feature.map(function (featureItem, featureIndex) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                      className: featureItem.package_feature_icon_url ? "" : "p-0",
                      children: [featureItem.package_feature_icon_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                        className: "cs_feature_icon cs_accent_color",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                          src: featureItem.package_feature_icon_url,
                          alt: "",
                          loading: "lazy",
                          decoding: "async"
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                        children: featureItem.package_feature_text
                      })]
                    }, featureIndex);
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "cs_pricing_info",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: "cs_price",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
                      className: "cs_fs_53 cs_normal mb-0",
                      children: item.package_price
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                      children: item.package_per
                    })]
                  }), (item.package_btn_url || item.package_btn_text) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: item.package_btn_url,
                    btnText: item.package_btn_text,
                    btnClass: "cs_btn cs_style_1 cs_type_2 cs_primary_bg cs_white_color cs_w_100_sm"
                  })]
                })]
              })
            }, index);
          })
        }, pricingIndex);
      }
      return null; // Skip rendering for other indices
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Pricing/Pricing2.jsx":
/*!***************************************************************!*\
  !*** ./resources/js/Frontend/Components/Pricing/Pricing2.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pricing2)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button */ "./resources/js/Frontend/Components/Button.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




function Pricing2(_ref) {
  var data = _ref.data;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  var section_title = data.section_title,
    section_subtitle = data.section_subtitle,
    pricing_list = data.pricing_list;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "container",
    children: [(section_subtitle || section_title) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "cs_section_heading cs_style_1 text-center",
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "cs_height_85 cs_height_lg_50"
      })]
    }), (pricing_list === null || pricing_list === void 0 ? void 0 : pricing_list.length) > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "cs_price_tab_btns",
      children: pricing_list === null || pricing_list === void 0 ? void 0 : pricing_list.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "cs_price_tab_btn".concat(index === active ? " active" : ""),
          onClick: function onClick() {
            return setActive(index);
          },
          children: item.package_type
        }, index);
      })
    }), pricing_list === null || pricing_list === void 0 ? void 0 : pricing_list.map(function (pricingItem, pricingIndex) {
      if (pricingIndex === active) {
        var _pricingItem$package_;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "row cs_row_gap_60 cs_gap_y_40",
          children: (_pricingItem$package_ = pricingItem.package_list) === null || _pricingItem$package_ === void 0 ? void 0 : _pricingItem$package_.map(function (item, index) {
            var _item$package_feature;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "col-lg-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "cs_pricing_table cs_style_1",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h2", {
                  className: "cs_pricing_title cs_fs_53 cs_normal",
                  children: [item.package_name, item.package_icon_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                    className: "cs_center",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                      src: item.package_icon_url,
                      alt: "",
                      loading: "lazy",
                      decoding: "async"
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
                  className: "cs_pricing_feature cs_mp0 cs_fs_18 cs_medium",
                  children: (_item$package_feature = item.package_feature) === null || _item$package_feature === void 0 ? void 0 : _item$package_feature.map(function (featureItem, featureIndex) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                      className: featureItem.package_feature_icon_url ? "" : "p-0",
                      children: [featureItem.package_feature_icon_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                        className: "cs_feature_icon cs_accent_color",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                          src: featureItem.package_feature_icon_url,
                          alt: "",
                          loading: "lazy",
                          decoding: "async"
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                        children: featureItem.package_feature_text
                      })]
                    }, featureIndex);
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "cs_pricing_info",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: "cs_price",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
                      className: "cs_fs_53 cs_normal mb-0",
                      children: item.package_price
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                      children: item.package_per
                    })]
                  }), (item.package_btn_url || item.package_btn_text) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: item.package_btn_url,
                    btnText: item.package_btn_text,
                    btnClass: "cs_btn cs_style_1 cs_type_2 cs_primary_bg cs_white_color cs_w_100_sm"
                  })]
                })]
              })
            }, index);
          })
        }, pricingIndex);
      }
      return null; // Skip rendering for other indices
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Sections/PricingSection.jsx":
/*!**********************************************************************!*\
  !*** ./resources/js/Frontend/Components/Sections/PricingSection.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PricingSection)
/* harmony export */ });
/* harmony import */ var _Pricing_Pricing1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Pricing/Pricing1 */ "./resources/js/Frontend/Components/Pricing/Pricing1.jsx");
/* harmony import */ var _Pricing_Pricing2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Pricing/Pricing2 */ "./resources/js/Frontend/Components/Pricing/Pricing2.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function PricingSection(_ref) {
  var _sections_data$layout;
  var sections_data = _ref.sections_data;
  var sectionLayout = (_sections_data$layout = sections_data === null || sections_data === void 0 ? void 0 : sections_data.layout) !== null && _sections_data$layout !== void 0 ? _sections_data$layout : "1";
  var section = "";
  if (sectionLayout === "1") {
    section = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Pricing_Pricing1__WEBPACK_IMPORTED_MODULE_0__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "2") {
    section = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Pricing_Pricing2__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: sections_data
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: section
  });
}

/***/ })

};
;