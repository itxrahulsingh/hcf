"use strict";
exports.id = "resources_js_Frontend_Components_Sections_ContactWithFormBuilderSection_jsx";
exports.ids = ["resources_js_Frontend_Components_Sections_ContactWithFormBuilderSection_jsx"];
exports.modules = {

/***/ "./resources/js/Frontend/Components/ContactWithFormBuilder/ContactWithFormBuilder1.jsx":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Frontend/Components/ContactWithFormBuilder/ContactWithFormBuilder1.jsx ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactWithFormBuilder1)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/react */ "@inertiajs/react");
/* harmony import */ var _inertiajs_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-recaptcha */ "react-google-recaptcha");
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





function ContactWithFormBuilder1(_ref) {
  var _sections_data$contac, _sections_data$forms;
  var sections_data = _ref.sections_data;
  var captchaSiteKey = localStorage.getItem("google_captcha_site_key") ? JSON.parse(localStorage.getItem("google_captcha_site_key")) : [];
  var is_active_google_captcha = localStorage.getItem("is_active_google_captcha") ? JSON.parse(localStorage.getItem("is_active_google_captcha")) : [];
  var flash = (0,_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.usePage)().props.flash;
  var formRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useForm = (0,_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.useForm)({}),
    data = _useForm.data,
    setData = _useForm.setData,
    errors = _useForm.errors,
    post = _useForm.post,
    wasSuccessful = _useForm.wasSuccessful,
    reset = _useForm.reset,
    processing = _useForm.processing;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    captchaVerified = _useState2[0],
    setCaptchaVerified = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    captchaError = _useState4[0],
    setCaptchaError = _useState4[1];
  var handleCaptchaChange = function handleCaptchaChange(value) {
    if (is_active_google_captcha === "1") {
      if (value) {
        setData("captchaToken", value);
        setCaptchaVerified(true);
        setCaptchaError(null);
      } else {
        setCaptchaVerified(false);
      }
    }
  };
  var handleSetData = function handleSetData(e, label, placeholder) {
    var fieldType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "text";
    var fieldName;
    if (label) {
      fieldName = label.toLowerCase().replace(/\s+/g, "_");
    } else if (placeholder) {
      fieldName = placeholder.toLowerCase().replace(/\s+/g, "_");
    } else {
      fieldName = "field_".concat(Object.keys(data).length + 1);
    }

    // Special handling for checkboxes
    if (fieldType === "checkbox") {
      var checkboxValue = e.target.value;
      var isChecked = e.target.checked;
      if (!data[fieldName]) {
        setData(fieldName, []);
      }
      if (isChecked) {
        setData(fieldName, [].concat(_toConsumableArray(Array.isArray(data[fieldName]) ? data[fieldName] : []), [checkboxValue]));
      } else {
        setData(fieldName, Array.isArray(data[fieldName]) ? data[fieldName].filter(function (val) {
          return val !== checkboxValue;
        }) : []);
      }
    } else if (fieldType === "file") {
      var file = e.target.files[0];
      setData(fieldName, file);
    } else {
      setData(fieldName, e.target.value);
    }
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if (!captchaVerified && is_active_google_captcha === "1") {
      setCaptchaError(translate("Please complete the captcha verification"));
      return;
    }
    post(route("form.submit"), {
      forceFormData: true,
      preserveScroll: true,
      onSuccess: function onSuccess() {
        reset();
        if (formRef.current) formRef.current.reset();
        setCaptchaVerified(false);
      }
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setData(function (prevData) {
      return _objectSpread(_objectSpread({}, prevData), {}, {
        response_from: sections_data === null || sections_data === void 0 ? void 0 : sections_data.response_form,
        form_name: sections_data === null || sections_data === void 0 ? void 0 : sections_data.form_name
      });
    });
  }, [sections_data]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "row cs_gap_y_40",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "col-xl-5 col-lg-6",
          children: [(sections_data.section_subtitle || sections_data.section_title) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "cs_section_heading cs_style_1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "cs_section_subtitle cs_fs_18 cs_medium",
                dangerouslySetInnerHTML: {
                  __html: sections_data.section_subtitle
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
                className: "cs_section_title cs_fs_53 cs_normal mb-0",
                dangerouslySetInnerHTML: {
                  __html: sections_data.section_title
                }
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "cs_height_57 cs_height_lg_40"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul", {
            className: "cs_mp0 cs_contact_info",
            children: (_sections_data$contac = sections_data.contact_list) === null || _sections_data$contac === void 0 ? void 0 : _sections_data$contac.map(function (item, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
                children: [item.contact_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: item.contact_title
                  }
                }), item.contact_description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                  className: "cs_fs_24 cs_normal",
                  dangerouslySetInnerHTML: {
                    __html: item.contact_description
                  }
                }), item.contact_info && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: item.contact_info
                  }
                })]
              }, index);
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "col-lg-6 offset-xl-1",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("form", {
            ref: formRef,
            className: "row",
            onSubmit: handleSubmit,
            children: [sections_data === null || sections_data === void 0 || (_sections_data$forms = sections_data.forms) === null || _sections_data$forms === void 0 ? void 0 : _sections_data$forms.map(function (form, index) {
              var _form$column, _form$file_extensions, _form$label, _form$label2, _form$column2, _form$column3, _form$radio_options, _form$column4, _form$checkbox_option, _form$column5, _form$select_options, _form$column6;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
                children: form.fieldType === "file" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "col-lg-".concat((_form$column = form.column) !== null && _form$column !== void 0 ? _form$column : "6"),
                  children: [form.label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("label", {
                    children: [form.label, " ", form.isRequired && "*"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
                    type: "file",
                    className: "cs_form_field",
                    required: form.isRequired,
                    accept: (_form$file_extensions = form.file_extensions) === null || _form$file_extensions === void 0 ? void 0 : _form$file_extensions.map(function (ext) {
                      return ".".concat(ext);
                    }).join(","),
                    onChange: function onChange(e) {
                      return handleSetData(e, form.label, form.placeholder, "file");
                    }
                  }), form.file_extensions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("small", {
                    className: "text-muted d-block mt-1",
                    children: ["Allowed: ", form.file_extensions.join(", ")]
                  }), errors[(_form$label = form.label) === null || _form$label === void 0 ? void 0 : _form$label.toLowerCase().replace(/\s+/g, "_")] && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                    className: "text-danger small mt-1",
                    children: errors[(_form$label2 = form.label) === null || _form$label2 === void 0 ? void 0 : _form$label2.toLowerCase().replace(/\s+/g, "_")]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                    className: "cs_height_22 cs_height_lg_22"
                  })]
                }) : form.fieldType === "multilineText" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "col-lg-".concat((_form$column2 = form.column) !== null && _form$column2 !== void 0 ? _form$column2 : "6"),
                    children: [form.label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("label", {
                      children: [form.label, " ", form.isRequired && "*"]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("textarea", {
                      cols: "30",
                      rows: "7",
                      className: "cs_form_field",
                      defaultValue: form.default_value,
                      required: form.isRequired,
                      onChange: function onChange(e) {
                        return handleSetData(e, form.label, form.placeholder);
                      },
                      placeholder: "".concat(form.placeholder ? form.placeholder : "").concat(form.label ? "" : form.isRequired ? " *" : "")
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                      className: "cs_height_22 cs_height_lg_22"
                    })]
                  })
                }) : form.fieldType === "radio" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "col-lg-".concat((_form$column3 = form.column) !== null && _form$column3 !== void 0 ? _form$column3 : "6"),
                    children: [form.label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("label", {
                      children: [form.label, " ", form.isRequired && "*"]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                      className: "cs_radio_group",
                      children: form === null || form === void 0 || (_form$radio_options = form.radio_options) === null || _form$radio_options === void 0 ? void 0 : _form$radio_options.map(function (option, optionIndex) {
                        var _form$label3;
                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                          className: "cs_radio_wrapper",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
                            type: "radio",
                            id: "radio-".concat(index, "-").concat(optionIndex),
                            name: ((_form$label3 = form.label) === null || _form$label3 === void 0 ? void 0 : _form$label3.toLowerCase().replace(/\s+/g, "_")) || "radio_group_".concat(index),
                            value: option,
                            required: form.isRequired,
                            defaultChecked: form.default_value === option,
                            onChange: function onChange(e) {
                              return handleSetData(e, form.label, form.placeholder);
                            }
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
                            style: {
                              marginLeft: "8px"
                            },
                            htmlFor: "radio-".concat(index, "-").concat(optionIndex),
                            children: option
                          })]
                        }, "radio-".concat(index, "-").concat(optionIndex));
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                      className: "cs_height_22 cs_height_lg_22"
                    })]
                  })
                }) : form.fieldType === "checkbox" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "col-lg-".concat((_form$column4 = form.column) !== null && _form$column4 !== void 0 ? _form$column4 : "6"),
                    children: [form.label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("label", {
                      children: [form.label, " ", form.isRequired && "*"]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                      className: "cs_checkbox_group",
                      children: form === null || form === void 0 || (_form$checkbox_option = form.checkbox_options) === null || _form$checkbox_option === void 0 ? void 0 : _form$checkbox_option.map(function (option, optionIndex) {
                        var _form$label4;
                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                          className: "cs_checkbox_wrapper",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
                            type: "checkbox",
                            id: "checkbox-".concat(index, "-").concat(optionIndex),
                            name: ((_form$label4 = form.label) === null || _form$label4 === void 0 ? void 0 : _form$label4.toLowerCase().replace(/\s+/g, "_")) || "checkbox_group_".concat(index),
                            value: option,
                            required: form.isRequired && optionIndex === 0,
                            defaultChecked: form.default_value === option,
                            onChange: function onChange(e) {
                              return handleSetData(e, form.label, form.placeholder, "checkbox");
                            }
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
                            style: {
                              marginLeft: "8px"
                            },
                            htmlFor: "checkbox-".concat(index, "-").concat(optionIndex),
                            children: option
                          })]
                        }, "checkbox-".concat(index, "-").concat(optionIndex));
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                      className: "cs_height_22 cs_height_lg_22"
                    })]
                  })
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                  children: form.fieldType === "select" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "col-lg-".concat((_form$column5 = form.column) !== null && _form$column5 !== void 0 ? _form$column5 : "6"),
                    children: [form.label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("label", {
                      htmlFor: "",
                      children: [form.label, " ", form.isRequired && "*"]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("select", {
                      className: "cs_form_field",
                      required: form.isRequired,
                      onChange: function onChange(e) {
                        return handleSetData(e, form.label, form.placeholder);
                      },
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                        value: "",
                        children: "Select an option"
                      }), form === null || form === void 0 || (_form$select_options = form.select_options) === null || _form$select_options === void 0 ? void 0 : _form$select_options.map(function (option, index) {
                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                          value: option,
                          children: option
                        }, "options-".concat(index));
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                      className: "cs_height_22 cs_height_lg_22"
                    })]
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "col-lg-".concat((_form$column6 = form.column) !== null && _form$column6 !== void 0 ? _form$column6 : "6"),
                    children: [form.fieldType !== "hidden" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                      children: form.label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("label", {
                        children: [form.label, " ", form.isRequired && "*"]
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
                      type: form.fieldType,
                      defaultValue: form.default_value,
                      className: "cs_form_field",
                      required: form.isRequired,
                      onChange: function onChange(e) {
                        return handleSetData(e, form.label, form.placeholder);
                      },
                      placeholder: "".concat(form.placeholder ? form.placeholder : "").concat(form.label ? "" : form.isRequired ? " *" : "")
                    }), form.fieldType !== "hidden" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                      className: "cs_height_22 cs_height_lg_22"
                    })]
                  })
                })
              }, index);
            }), is_active_google_captcha === "1" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "cs_mb_15",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2___default()), {
                sitekey: captchaSiteKey,
                onChange: handleCaptchaChange
              }), captchaError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-danger mb-3",
                children: captchaError
              })]
            }), (sections_data === null || sections_data === void 0 ? void 0 : sections_data.submit_btn_text) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "col-lg-12",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "cs_height_5 cs_height_lg_5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
                disabled: !captchaVerified && processing,
                className: "cs_btn cs_style_1 cs_type_2 cs_primary_bg cs_white_color cs_w_100_sm",
                children: [sections_data === null || sections_data === void 0 ? void 0 : sections_data.submit_btn_text, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
                      width: 11,
                      height: 11,
                      viewBox: "0 0 11 11",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                        d: "M1 10L10 1M10 1L1 1M10 1L10 10",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      })
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
                      width: 11,
                      height: 11,
                      viewBox: "0 0 11 11",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                        d: "M1 10L10 1M10 1L1 1M10 1L10 10",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      })
                    })
                  })]
                })]
              })]
            }), wasSuccessful && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "text-success mt-2",
              children: flash.success
            })]
          })
        })]
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/ContactWithFormBuilder/ContactWithFormBuilder2.jsx":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Frontend/Components/ContactWithFormBuilder/ContactWithFormBuilder2.jsx ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactWithFormBuilder2)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/react */ "@inertiajs/react");
/* harmony import */ var _inertiajs_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-recaptcha */ "react-google-recaptcha");
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/translate */ "./resources/js/utils/translate.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }






function ContactWithFormBuilder2(_ref) {
  var _sections_data$contac, _sections_data$forms;
  var sections_data = _ref.sections_data;
  var captchaSiteKey = localStorage.getItem("google_captcha_site_key") ? JSON.parse(localStorage.getItem("google_captcha_site_key")) : [];
  var is_active_google_captcha = localStorage.getItem("is_active_google_captcha") ? JSON.parse(localStorage.getItem("is_active_google_captcha")) : [];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    captchaVerified = _useState2[0],
    setCaptchaVerified = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    captchaError = _useState4[0],
    setCaptchaError = _useState4[1];
  var flash = (0,_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.usePage)().props.flash;
  var formRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useForm = (0,_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.useForm)({
      response_from: sections_data === null || sections_data === void 0 ? void 0 : sections_data.response_form,
      form_name: sections_data === null || sections_data === void 0 ? void 0 : sections_data.form_name
    }),
    data = _useForm.data,
    setData = _useForm.setData,
    post = _useForm.post,
    wasSuccessful = _useForm.wasSuccessful,
    reset = _useForm.reset,
    processing = _useForm.processing,
    errors = _useForm.errors;
  var handleSetData = function handleSetData(e, label, placeholder) {
    var fieldType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "text";
    var fieldName;
    if (label) {
      fieldName = label.toLowerCase().replace(/\s+/g, "_");
    } else if (placeholder) {
      fieldName = placeholder.toLowerCase().replace(/\s+/g, "_");
    } else {
      fieldName = "field_".concat(Object.keys(data).length + 1);
    }

    // Handle File Input
    if (fieldType === "file") {
      setData(fieldName, e.target.files[0]);
    }
    // Handle Checkbox (if needed for this layout)
    else if (fieldType === "checkbox") {
      var checkboxValue = e.target.value;
      var isChecked = e.target.checked;
      var currentValues = Array.isArray(data[fieldName]) ? data[fieldName] : [];
      if (isChecked) {
        setData(fieldName, [].concat(_toConsumableArray(currentValues), [checkboxValue]));
      } else {
        setData(fieldName, currentValues.filter(function (val) {
          return val !== checkboxValue;
        }));
      }
    } else {
      setData(fieldName, e.target.value);
    }
  };
  var handleCaptchaChange = function handleCaptchaChange(value) {
    if (is_active_google_captcha === "1") {
      if (value) {
        setData("captchaToken", value);
        setCaptchaVerified(true);
        setCaptchaError(null);
      } else {
        setCaptchaVerified(false);
      }
    }
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if (!captchaVerified && is_active_google_captcha === "1") {
      setCaptchaError((0,_utils_translate__WEBPACK_IMPORTED_MODULE_3__["default"])("Please complete the captcha verification"));
      return;
    }
    post(route("form.submit"), {
      forceFormData: true,
      // Required for file uploads
      preserveScroll: true,
      onSuccess: function onSuccess() {
        reset();
        if (formRef.current) formRef.current.reset();
        setCaptchaVerified(false);
      }
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setData(function (prevData) {
      return _objectSpread(_objectSpread({}, prevData), {}, {
        response_from: sections_data === null || sections_data === void 0 ? void 0 : sections_data.response_form,
        form_name: sections_data === null || sections_data === void 0 ? void 0 : sections_data.form_name
      });
    });
  }, [sections_data]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "row cs_gap_y_40",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "col-lg-5",
          children: [sections_data.google_map_iframe && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "cs_google_map_2",
              dangerouslySetInnerHTML: {
                __html: sections_data.google_map_iframe
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "cs_height_45 cs_height_lg_30"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
            className: "cs_mp0 cs_contact_info",
            children: (_sections_data$contac = sections_data.contact_list) === null || _sections_data$contac === void 0 ? void 0 : _sections_data$contac.map(function (item, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                  className: "cs_fs_24 cs_normal",
                  dangerouslySetInnerHTML: {
                    __html: item.contact_title
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: item.contact_info
                  }
                })]
              }, index);
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "col-lg-6 offset-lg-1",
          children: [(sections_data.section_subtitle || sections_data.section_title) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "cs_section_heading cs_style_1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                className: "cs_section_subtitle cs_fs_18 cs_medium",
                dangerouslySetInnerHTML: {
                  __html: sections_data.section_subtitle
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
                className: "cs_section_title cs_fs_53 cs_normal mb-0",
                dangerouslySetInnerHTML: {
                  __html: sections_data.section_title
                }
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "cs_height_50 cs_height_lg_40"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form", {
            ref: formRef,
            className: "row",
            onSubmit: handleSubmit,
            children: [sections_data === null || sections_data === void 0 || (_sections_data$forms = sections_data.forms) === null || _sections_data$forms === void 0 ? void 0 : _sections_data$forms.map(function (form, index) {
              var _form$column, _form$column2, _form$file_extensions, _form$column3, _form$radio_options, _form$column4, _form$checkbox_option, _form$column5, _form$select_options, _form$column6;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
                children: form.fieldType === "multilineText" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "col-lg-".concat((_form$column = form.column) !== null && _form$column !== void 0 ? _form$column : "6"),
                  children: [form.label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
                    children: [form.label, " ", form.isRequired && "*"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("textarea", {
                    cols: "30",
                    rows: "7",
                    className: "cs_form_field_2",
                    defaultValue: form.default_value,
                    required: form.isRequired,
                    onChange: function onChange(e) {
                      return handleSetData(e, form.label, form.placeholder);
                    },
                    placeholder: "".concat(form.placeholder ? form.placeholder : "").concat(form.label ? "" : form.isRequired ? " *" : "")
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    className: "cs_height_35 cs_height_lg_22"
                  })]
                }) : form.fieldType === "file" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "col-lg-".concat((_form$column2 = form.column) !== null && _form$column2 !== void 0 ? _form$column2 : "6"),
                  children: [form.label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
                    children: [form.label, " ", form.isRequired && "*"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                    type: "file",
                    className: "cs_form_field_2",
                    style: {
                      paddingTop: "10px"
                    },
                    required: form.isRequired,
                    accept: (_form$file_extensions = form.file_extensions) === null || _form$file_extensions === void 0 ? void 0 : _form$file_extensions.map(function (ext) {
                      return ".".concat(ext);
                    }).join(","),
                    onChange: function onChange(e) {
                      return handleSetData(e, form.label, form.placeholder, "file");
                    }
                  }), form.file_extensions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("small", {
                    className: "text-muted d-block mt-1",
                    children: [(0,_utils_translate__WEBPACK_IMPORTED_MODULE_3__["default"])("Allowed"), ": ", form.file_extensions.join(", ")]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    className: "cs_height_35 cs_height_lg_22"
                  })]
                }) : form.fieldType === "radio" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "col-lg-".concat((_form$column3 = form.column) !== null && _form$column3 !== void 0 ? _form$column3 : "6"),
                  children: [form.label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
                    children: [form.label, " ", form.isRequired && "*"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    className: "cs_radio_group",
                    children: form === null || form === void 0 || (_form$radio_options = form.radio_options) === null || _form$radio_options === void 0 ? void 0 : _form$radio_options.map(function (option, optionIndex) {
                      var _form$label;
                      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                        className: "cs_radio_wrapper",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                          type: "radio",
                          id: "radio-".concat(index, "-").concat(optionIndex),
                          name: ((_form$label = form.label) === null || _form$label === void 0 ? void 0 : _form$label.toLowerCase().replace(/\s+/g, "_")) || "radio_group_".concat(index),
                          value: option,
                          required: form.isRequired,
                          defaultChecked: form.default_value === option,
                          onChange: function onChange(e) {
                            return handleSetData(e, form.label, form.placeholder);
                          }
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                          style: {
                            marginLeft: "8px"
                          },
                          htmlFor: "radio-".concat(index, "-").concat(optionIndex),
                          children: option
                        })]
                      }, "radio-".concat(index, "-").concat(optionIndex));
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    className: "cs_height_22 cs_height_lg_22"
                  })]
                }) : form.fieldType === "checkbox" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "col-lg-".concat((_form$column4 = form.column) !== null && _form$column4 !== void 0 ? _form$column4 : "6"),
                  children: [form.label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
                    children: [form.label, " ", form.isRequired && "*"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    className: "cs_checkbox_group",
                    children: form === null || form === void 0 || (_form$checkbox_option = form.checkbox_options) === null || _form$checkbox_option === void 0 ? void 0 : _form$checkbox_option.map(function (option, optionIndex) {
                      var _form$label2;
                      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                        className: "cs_checkbox_wrapper",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                          type: "checkbox",
                          id: "checkbox-".concat(index, "-").concat(optionIndex),
                          name: ((_form$label2 = form.label) === null || _form$label2 === void 0 ? void 0 : _form$label2.toLowerCase().replace(/\s+/g, "_")) || "checkbox_group_".concat(index),
                          value: option,
                          required: form.isRequired && optionIndex === 0,
                          defaultChecked: form.default_value === option,
                          onChange: function onChange(e) {
                            return handleSetData(e, form.label, form.placeholder, "checkbox");
                          }
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                          style: {
                            marginLeft: "8px"
                          },
                          htmlFor: "checkbox-".concat(index, "-").concat(optionIndex),
                          children: option
                        })]
                      }, "checkbox-".concat(index, "-").concat(optionIndex));
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    className: "cs_height_22 cs_height_lg_22"
                  })]
                }) : form.fieldType === "select" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "col-lg-".concat((_form$column5 = form.column) !== null && _form$column5 !== void 0 ? _form$column5 : "6"),
                  children: [form.label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
                    htmlFor: "",
                    children: [form.label, " ", form.isRequired && "*"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("select", {
                    className: "cs_form_field_2",
                    required: form.isRequired,
                    onChange: function onChange(e) {
                      return handleSetData(e, form.label, form.placeholder);
                    },
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                      value: "",
                      children: (0,_utils_translate__WEBPACK_IMPORTED_MODULE_3__["default"])("Select an option")
                    }), form === null || form === void 0 || (_form$select_options = form.select_options) === null || _form$select_options === void 0 ? void 0 : _form$select_options.map(function (option, index) {
                      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                        value: option,
                        children: option
                      }, "options-".concat(index));
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    className: "cs_height_35 cs_height_lg_22"
                  })]
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "col-lg-".concat((_form$column6 = form.column) !== null && _form$column6 !== void 0 ? _form$column6 : "6"),
                  children: [form.fieldType !== "hidden" && form.label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
                    children: [form.label, " ", form.isRequired && "*"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                    type: form.fieldType,
                    defaultValue: form.default_value,
                    className: "cs_form_field_2",
                    required: form.isRequired,
                    onChange: function onChange(e) {
                      return handleSetData(e, form.label, form.placeholder);
                    },
                    placeholder: "".concat(form.placeholder ? form.placeholder : "").concat(form.label ? "" : form.isRequired ? " *" : "")
                  }), form.fieldType !== "hidden" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    className: "cs_height_35 cs_height_lg_22"
                  })]
                })
              }, index);
            }), is_active_google_captcha === "1" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "cs_mb_15",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2___default()), {
                sitekey: captchaSiteKey,
                onChange: handleCaptchaChange
              }), captchaError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "text-danger mb-3",
                children: captchaError
              })]
            }), (sections_data === null || sections_data === void 0 ? void 0 : sections_data.submit_btn_text) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "col-lg-12",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "cs_height_5 cs_height_lg_5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
                type: "submit",
                disabled: !captchaVerified && is_active_google_captcha === "1" || processing,
                className: "cs_btn cs_style_1 cs_type_2 cs_primary_bg cs_white_color cs_w_100_sm",
                children: [sections_data === null || sections_data === void 0 ? void 0 : sections_data.submit_btn_text, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                      width: 11,
                      height: 11,
                      viewBox: "0 0 11 11",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                        d: "M1 10L10 1M10 1L1 1M10 1L10 10",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      })
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                      width: 11,
                      height: 11,
                      viewBox: "0 0 11 11",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                        d: "M1 10L10 1M10 1L1 1M10 1L10 10",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      })
                    })
                  })]
                })]
              })]
            }), wasSuccessful && flash.success && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "text-success mt-2",
              children: flash.success
            })]
          })]
        })]
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/ContactWithFormBuilder/ContactWithFormBuilder3.jsx":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Frontend/Components/ContactWithFormBuilder/ContactWithFormBuilder3.jsx ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactWithFormBuilder3)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/react */ "@inertiajs/react");
/* harmony import */ var _inertiajs_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Widget_SocialWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Widget/SocialWidget */ "./resources/js/Frontend/Components/Widget/SocialWidget.jsx");
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-google-recaptcha */ "react-google-recaptcha");
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_translate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/translate */ "./resources/js/utils/translate.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







function ContactWithFormBuilder3(_ref) {
  var _sections_data$contac, _sections_data$forms;
  var sections_data = _ref.sections_data;
  var captchaSiteKey = localStorage.getItem("google_captcha_site_key") ? JSON.parse(localStorage.getItem("google_captcha_site_key")) : [];
  var is_active_google_captcha = localStorage.getItem("is_active_google_captcha") ? JSON.parse(localStorage.getItem("is_active_google_captcha")) : [];
  var flash = (0,_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.usePage)().props.flash;
  var formRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useForm = (0,_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.useForm)({
      response_from: sections_data === null || sections_data === void 0 ? void 0 : sections_data.response_form,
      form_name: sections_data === null || sections_data === void 0 ? void 0 : sections_data.form_name
    }),
    data = _useForm.data,
    setData = _useForm.setData,
    errors = _useForm.errors,
    post = _useForm.post,
    wasSuccessful = _useForm.wasSuccessful,
    reset = _useForm.reset,
    processing = _useForm.processing;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    captchaVerified = _useState2[0],
    setCaptchaVerified = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    captchaError = _useState4[0],
    setCaptchaError = _useState4[1];
  var handleCaptchaChange = function handleCaptchaChange(value) {
    if (is_active_google_captcha === "1") {
      if (value) {
        setData("captchaToken", value);
        setCaptchaVerified(true);
        setCaptchaError(null);
      } else {
        setCaptchaVerified(false);
      }
    }
  };
  var handleSetData = function handleSetData(e, label, placeholder) {
    var fieldType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "text";
    var fieldName;
    if (label) {
      fieldName = label.toLowerCase().replace(/\s+/g, "_");
    } else if (placeholder) {
      fieldName = placeholder.toLowerCase().replace(/\s+/g, "_");
    } else {
      fieldName = "field_".concat(Object.keys(data).length + 1);
    }

    // --- Handle File Upload ---
    if (fieldType === "file") {
      setData(fieldName, e.target.files[0]);
    }
    // --- Handle Checkbox ---
    else if (fieldType === "checkbox") {
      var checkboxValue = e.target.value;
      var isChecked = e.target.checked;
      var currentValues = Array.isArray(data[fieldName]) ? data[fieldName] : [];
      if (isChecked) {
        setData(fieldName, [].concat(_toConsumableArray(currentValues), [checkboxValue]));
      } else {
        setData(fieldName, currentValues.filter(function (val) {
          return val !== checkboxValue;
        }));
      }
    }
    // --- Standard Inputs ---
    else {
      setData(fieldName, e.target.value);
    }
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if (!captchaVerified && is_active_google_captcha === "1") {
      setCaptchaError((0,_utils_translate__WEBPACK_IMPORTED_MODULE_4__["default"])("Please complete the captcha verification"));
      return;
    }
    post(route("form.submit"), {
      forceFormData: true,
      // Essential for handling files
      preserveScroll: true,
      onSuccess: function onSuccess() {
        reset();
        if (formRef.current) formRef.current.reset();
        setCaptchaVerified(false);
      }
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setData(function (prevData) {
      return _objectSpread(_objectSpread({}, prevData), {}, {
        response_from: sections_data === null || sections_data === void 0 ? void 0 : sections_data.response_form,
        form_name: sections_data === null || sections_data === void 0 ? void 0 : sections_data.form_name
      });
    });
  }, [sections_data]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "row cs_gap_y_60",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "col-lg-5",
          children: [(sections_data.section_subtitle || sections_data.section_title) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
            children: [sections_data.section_subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                className: "cs_section_subtitle mb-0",
                dangerouslySetInnerHTML: {
                  __html: sections_data.section_subtitle
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "cs_height_15 cs_height_lg_15"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
              className: "cs_section_title cs_fs_30 cs_normal mb-0",
              dangerouslySetInnerHTML: {
                __html: sections_data.section_title
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "cs_height_45 cs_height_lg_40"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("ul", {
            className: "cs_mp0 cs_contact_info",
            children: [(_sections_data$contac = sections_data.contact_list) === null || _sections_data$contac === void 0 ? void 0 : _sections_data$contac.map(function (item, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("li", {
                children: [item.contact_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: item.contact_title
                  }
                }), item.contact_description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                  className: "cs_fs_24 cs_normal",
                  dangerouslySetInnerHTML: {
                    __html: item.contact_description
                  }
                }), item.contact_info && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: item.contact_info
                  }
                })]
              }, index);
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "cs_height_45 cs_height_lg_40"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
              children: sections_data.social_title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                  className: "cs_fs_24 cs_normal",
                  children: sections_data.social_title
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Widget_SocialWidget__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "col-xl-6 offset-xl-1 col-lg-7",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "cs_contact_form_wrap cs_gray_bg_2",
            children: [sections_data.section_description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                className: "cs_fs_30 cs_normal text-center mb-0",
                dangerouslySetInnerHTML: {
                  __html: sections_data.section_description
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "cs_height_40 cs_height_lg_30"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form", {
              ref: formRef,
              className: "row",
              onSubmit: handleSubmit,
              children: [sections_data === null || sections_data === void 0 || (_sections_data$forms = sections_data.forms) === null || _sections_data$forms === void 0 ? void 0 : _sections_data$forms.map(function (form, index) {
                var _form$column, _form$column2, _form$file_extensions, _form$column3, _form$radio_options, _form$column4, _form$checkbox_option, _form$column5, _form$select_options, _form$column6;
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
                  children: form.fieldType === "multilineText" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "col-lg-".concat((_form$column = form.column) !== null && _form$column !== void 0 ? _form$column : "6"),
                    children: [form.label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                      className: "cs_primary_color cs_fs_18 cs_medium",
                      children: [form.label, " ", form.isRequired && "*"]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("textarea", {
                      cols: "30",
                      rows: "5",
                      className: "cs_form_field_3",
                      defaultValue: form.default_value,
                      required: form.isRequired,
                      onChange: function onChange(e) {
                        return handleSetData(e, form.label, form.placeholder);
                      },
                      placeholder: "".concat(form.placeholder ? form.placeholder : "").concat(form.label ? "" : form.isRequired ? " *" : "")
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                      className: "cs_height_40 cs_height_lg_20"
                    })]
                  }) : form.fieldType === "file" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "col-lg-".concat((_form$column2 = form.column) !== null && _form$column2 !== void 0 ? _form$column2 : "6"),
                    children: [form.label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                      className: "cs_primary_color cs_fs_18 cs_medium",
                      children: [form.label, " ", form.isRequired && "*"]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                      type: "file",
                      className: "cs_form_field_3",
                      style: {
                        paddingTop: '12px'
                      },
                      required: form.isRequired,
                      accept: (_form$file_extensions = form.file_extensions) === null || _form$file_extensions === void 0 ? void 0 : _form$file_extensions.map(function (ext) {
                        return ".".concat(ext);
                      }).join(','),
                      onChange: function onChange(e) {
                        return handleSetData(e, form.label, form.placeholder, "file");
                      }
                    }), form.file_extensions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("small", {
                      className: "text-muted d-block mt-1",
                      children: [(0,_utils_translate__WEBPACK_IMPORTED_MODULE_4__["default"])("Allowed"), ": ", form.file_extensions.join(', ')]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                      className: "cs_height_40 cs_height_lg_20"
                    })]
                  }) : form.fieldType === "radio" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "col-lg-".concat((_form$column3 = form.column) !== null && _form$column3 !== void 0 ? _form$column3 : "6"),
                    children: [form.label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                      className: "cs_primary_color cs_fs_18 cs_medium",
                      children: [form.label, " ", form.isRequired && "*"]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                      className: "cs_radio_group",
                      children: form === null || form === void 0 || (_form$radio_options = form.radio_options) === null || _form$radio_options === void 0 ? void 0 : _form$radio_options.map(function (option, optionIndex) {
                        var _form$label;
                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                          className: "cs_radio_wrapper",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "radio",
                            id: "radio-".concat(index, "-").concat(optionIndex),
                            name: ((_form$label = form.label) === null || _form$label === void 0 ? void 0 : _form$label.toLowerCase().replace(/\s+/g, "_")) || "radio_group_".concat(index),
                            value: option,
                            required: form.isRequired,
                            defaultChecked: form.default_value === option,
                            onChange: function onChange(e) {
                              return handleSetData(e, form.label, form.placeholder);
                            }
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                            style: {
                              marginLeft: "8px"
                            },
                            htmlFor: "radio-".concat(index, "-").concat(optionIndex),
                            children: option
                          })]
                        }, "radio-".concat(index, "-").concat(optionIndex));
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                      className: "cs_height_22 cs_height_lg_22"
                    })]
                  }) : form.fieldType === "checkbox" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "col-lg-".concat((_form$column4 = form.column) !== null && _form$column4 !== void 0 ? _form$column4 : "6"),
                    children: [form.label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                      className: "cs_primary_color cs_fs_18 cs_medium",
                      children: [form.label, " ", form.isRequired && "*"]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                      className: "cs_checkbox_group",
                      children: form === null || form === void 0 || (_form$checkbox_option = form.checkbox_options) === null || _form$checkbox_option === void 0 ? void 0 : _form$checkbox_option.map(function (option, optionIndex) {
                        var _form$label2;
                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                          className: "cs_checkbox_wrapper",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "checkbox",
                            id: "checkbox-".concat(index, "-").concat(optionIndex),
                            name: ((_form$label2 = form.label) === null || _form$label2 === void 0 ? void 0 : _form$label2.toLowerCase().replace(/\s+/g, "_")) || "checkbox_group_".concat(index),
                            value: option,
                            required: form.isRequired && optionIndex === 0,
                            onChange: function onChange(e) {
                              return handleSetData(e, form.label, form.placeholder, "checkbox");
                            }
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                            style: {
                              marginLeft: "8px"
                            },
                            htmlFor: "checkbox-".concat(index, "-").concat(optionIndex),
                            children: option
                          })]
                        }, "checkbox-".concat(index, "-").concat(optionIndex));
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                      className: "cs_height_22 cs_height_lg_22"
                    })]
                  }) : form.fieldType === "select" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "col-lg-".concat((_form$column5 = form.column) !== null && _form$column5 !== void 0 ? _form$column5 : "6"),
                    children: [form.label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                      className: "cs_primary_color cs_fs_18 cs_medium",
                      children: [form.label, " ", form.isRequired && "*"]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("select", {
                      className: "cs_form_field_3",
                      required: form.isRequired,
                      onChange: function onChange(e) {
                        return handleSetData(e, form.label, form.placeholder);
                      },
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                        value: "",
                        children: "Select an option"
                      }), form === null || form === void 0 || (_form$select_options = form.select_options) === null || _form$select_options === void 0 ? void 0 : _form$select_options.map(function (option, index) {
                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                          value: option,
                          children: option
                        }, "options-".concat(index));
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                      className: "cs_height_40 cs_height_lg_20"
                    })]
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "col-lg-".concat((_form$column6 = form.column) !== null && _form$column6 !== void 0 ? _form$column6 : "6"),
                    children: [form.fieldType !== "hidden" && form.label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                      className: "cs_primary_color cs_fs_18 cs_medium",
                      children: [form.label, " ", form.isRequired && "*"]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                      type: form.fieldType,
                      defaultValue: form.default_value,
                      className: "cs_form_field_3",
                      required: form.isRequired,
                      onChange: function onChange(e) {
                        return handleSetData(e, form.label, form.placeholder);
                      },
                      placeholder: "".concat(form.placeholder ? form.placeholder : "").concat(form.label ? "" : form.isRequired ? " *" : "")
                    }), form.fieldType !== "hidden" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                      className: "cs_height_40 cs_height_lg_20"
                    })]
                  })
                }, index);
              }), is_active_google_captcha === "1" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "cs_mb_15",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_3___default()), {
                  sitekey: captchaSiteKey,
                  onChange: handleCaptchaChange
                }), captchaError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "text-danger mb-3",
                  children: captchaError
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "cs_height_10 cs_height_lg_10"
              }), (sections_data === null || sections_data === void 0 ? void 0 : sections_data.submit_btn_text) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "col-lg-12",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "cs_height_5 cs_height_lg_5"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
                  type: "submit",
                  disabled: !captchaVerified && is_active_google_captcha === "1" || processing,
                  className: "cs_btn cs_style_1 cs_type_2 cs_primary_bg cs_white_color cs_w_100_sm",
                  children: [sections_data === null || sections_data === void 0 ? void 0 : sections_data.submit_btn_text, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
                        width: 11,
                        height: 11,
                        viewBox: "0 0 11 11",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                          d: "M1 10L10 1M10 1L1 1M10 1L10 10",
                          stroke: "currentColor",
                          strokeWidth: "1.5",
                          strokeLinecap: "round",
                          strokeLinejoin: "round"
                        })
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
                        width: 11,
                        height: 11,
                        viewBox: "0 0 11 11",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
                          d: "M1 10L10 1M10 1L1 1M10 1L10 10",
                          stroke: "currentColor",
                          strokeWidth: "1.5",
                          strokeLinecap: "round",
                          strokeLinejoin: "round"
                        })
                      })
                    })]
                  })]
                })]
              }), wasSuccessful && flash.success && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "text-success mt-2",
                children: flash.success
              })]
            })]
          })
        })]
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/ContactWithFormBuilder/ContactWithFormBuilder4.jsx":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Frontend/Components/ContactWithFormBuilder/ContactWithFormBuilder4.jsx ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactWithFormBuilder4)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/react */ "@inertiajs/react");
/* harmony import */ var _inertiajs_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-recaptcha */ "react-google-recaptcha");
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/translate */ "./resources/js/utils/translate.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }






function ContactWithFormBuilder4(_ref) {
  var _sections_data$forms;
  var sections_data = _ref.sections_data;
  var captchaSiteKey = localStorage.getItem("google_captcha_site_key") ? JSON.parse(localStorage.getItem("google_captcha_site_key")) : [];
  var is_active_google_captcha = localStorage.getItem("is_active_google_captcha") ? JSON.parse(localStorage.getItem("is_active_google_captcha")) : [];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    captchaVerified = _useState2[0],
    setCaptchaVerified = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    captchaError = _useState4[0],
    setCaptchaError = _useState4[1];
  var flash = (0,_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.usePage)().props.flash;
  var formRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useForm = (0,_inertiajs_react__WEBPACK_IMPORTED_MODULE_1__.useForm)({
      response_from: sections_data === null || sections_data === void 0 ? void 0 : sections_data.response_form,
      form_name: sections_data === null || sections_data === void 0 ? void 0 : sections_data.form_name
    }),
    data = _useForm.data,
    setData = _useForm.setData,
    errors = _useForm.errors,
    post = _useForm.post,
    wasSuccessful = _useForm.wasSuccessful,
    reset = _useForm.reset,
    processing = _useForm.processing;
  var handleSetData = function handleSetData(e, label, placeholder) {
    var fieldType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "text";
    var fieldName;
    if (label) {
      fieldName = label.toLowerCase().replace(/\s+/g, "_");
    } else if (placeholder) {
      fieldName = placeholder.toLowerCase().replace(/\s+/g, "_");
    } else {
      fieldName = "field_".concat(Object.keys(data).length + 1);
    }

    // Logic for File Upload
    if (fieldType === "file") {
      setData(fieldName, e.target.files[0]);
    }
    // Logic for Checkbox (if needed)
    else if (fieldType === "checkbox") {
      var checkboxValue = e.target.value;
      var isChecked = e.target.checked;
      var currentValues = Array.isArray(data[fieldName]) ? data[fieldName] : [];
      if (isChecked) {
        setData(fieldName, [].concat(_toConsumableArray(currentValues), [checkboxValue]));
      } else {
        setData(fieldName, currentValues.filter(function (val) {
          return val !== checkboxValue;
        }));
      }
    } else {
      setData(fieldName, e.target.value);
    }
  };
  var handleCaptchaChange = function handleCaptchaChange(value) {
    if (is_active_google_captcha === "1") {
      if (value) {
        setData("captchaToken", value);
        setCaptchaVerified(true);
        setCaptchaError(null);
      } else {
        setCaptchaVerified(false);
      }
    }
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if (!captchaVerified && is_active_google_captcha === "1") {
      setCaptchaError((0,_utils_translate__WEBPACK_IMPORTED_MODULE_3__["default"])("Please complete the captcha verification"));
      return;
    }
    post(route("form.submit"), {
      forceFormData: true,
      // Forces file binary transmission
      preserveScroll: true,
      onSuccess: function onSuccess() {
        reset();
        if (formRef.current) formRef.current.reset();
        setCaptchaVerified(false);
      }
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setData(function (prevData) {
      return _objectSpread(_objectSpread({}, prevData), {}, {
        response_from: sections_data === null || sections_data === void 0 ? void 0 : sections_data.response_form,
        form_name: sections_data === null || sections_data === void 0 ? void 0 : sections_data.form_name
      });
    });
  }, [sections_data]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "row align-items-center cs_reverse_lg cs_gap_y_40",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "col-lg-6",
          children: [(sections_data.section_subtitle || sections_data.section_title) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "cs_section_heading cs_style_1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                className: "cs_section_subtitle cs_fs_18 cs_medium",
                dangerouslySetInnerHTML: {
                  __html: sections_data.section_subtitle
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
                className: "cs_section_title cs_fs_53 cs_normal mb-0",
                dangerouslySetInnerHTML: {
                  __html: sections_data.section_title
                }
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "cs_height_85 cs_height_lg_50"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form", {
            ref: formRef,
            className: "row cs_insurance_form cs_gap_y_35",
            onSubmit: handleSubmit,
            children: [sections_data === null || sections_data === void 0 || (_sections_data$forms = sections_data.forms) === null || _sections_data$forms === void 0 ? void 0 : _sections_data$forms.map(function (form, index) {
              var _form$column, _form$column2, _form$file_extensions, _form$column3, _form$radio_options, _form$column4, _form$checkbox_option, _form$column5, _form$select_options, _form$column6;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
                children: form.fieldType === "multilineText" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "col-sm-".concat((_form$column = form.column) !== null && _form$column !== void 0 ? _form$column : "6"),
                  children: [form.label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
                    children: [form.label, " ", form.isRequired && "*"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("textarea", {
                    cols: "30",
                    rows: "7",
                    className: "cs_insurance_input",
                    defaultValue: form.default_value,
                    required: form.isRequired,
                    onChange: function onChange(e) {
                      return handleSetData(e, form.label, form.placeholder);
                    },
                    placeholder: "".concat(form.placeholder ? form.placeholder : "").concat(form.label ? "" : form.isRequired ? " *" : "")
                  })]
                }) : form.fieldType === "file" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "col-sm-".concat((_form$column2 = form.column) !== null && _form$column2 !== void 0 ? _form$column2 : "6"),
                  children: [form.label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
                    children: [form.label, " ", form.isRequired && "*"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                    type: "file",
                    className: "cs_insurance_input",
                    style: {
                      paddingTop: "10px"
                    },
                    required: form.isRequired,
                    accept: (_form$file_extensions = form.file_extensions) === null || _form$file_extensions === void 0 ? void 0 : _form$file_extensions.map(function (ext) {
                      return ".".concat(ext);
                    }).join(","),
                    onChange: function onChange(e) {
                      return handleSetData(e, form.label, form.placeholder, "file");
                    }
                  }), form.file_extensions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("small", {
                    className: "text-muted d-block mt-1",
                    children: [(0,_utils_translate__WEBPACK_IMPORTED_MODULE_3__["default"])("Allowed"), ": ", form.file_extensions.join(", ")]
                  })]
                }) : form.fieldType === "radio" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "col-lg-".concat((_form$column3 = form.column) !== null && _form$column3 !== void 0 ? _form$column3 : "6"),
                  children: [form.label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
                    children: [form.label, " ", form.isRequired && "*"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    className: "cs_radio_group",
                    children: form === null || form === void 0 || (_form$radio_options = form.radio_options) === null || _form$radio_options === void 0 ? void 0 : _form$radio_options.map(function (option, optionIndex) {
                      var _form$label;
                      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                        className: "cs_radio_wrapper",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                          type: "radio",
                          id: "radio-".concat(index, "-").concat(optionIndex),
                          name: ((_form$label = form.label) === null || _form$label === void 0 ? void 0 : _form$label.toLowerCase().replace(/\s+/g, "_")) || "radio_group_".concat(index),
                          value: option,
                          required: form.isRequired,
                          defaultChecked: form.default_value === option,
                          onChange: function onChange(e) {
                            return handleSetData(e, form.label, form.placeholder);
                          }
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                          style: {
                            marginLeft: "8px"
                          },
                          htmlFor: "radio-".concat(index, "-").concat(optionIndex),
                          children: option
                        })]
                      }, "radio-".concat(index, "-").concat(optionIndex));
                    })
                  })]
                }) : form.fieldType === "checkbox" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "col-lg-".concat((_form$column4 = form.column) !== null && _form$column4 !== void 0 ? _form$column4 : "6"),
                  children: [form.label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
                    children: [form.label, " ", form.isRequired && "*"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    className: "cs_checkbox_group",
                    children: form === null || form === void 0 || (_form$checkbox_option = form.checkbox_options) === null || _form$checkbox_option === void 0 ? void 0 : _form$checkbox_option.map(function (option, optionIndex) {
                      var _form$label2;
                      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                        className: "cs_checkbox_wrapper",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                          type: "checkbox",
                          id: "checkbox-".concat(index, "-").concat(optionIndex),
                          name: ((_form$label2 = form.label) === null || _form$label2 === void 0 ? void 0 : _form$label2.toLowerCase().replace(/\s+/g, "_")) || "checkbox_group_".concat(index),
                          value: option,
                          required: form.isRequired && optionIndex === 0,
                          onChange: function onChange(e) {
                            return handleSetData(e, form.label, form.placeholder, "checkbox");
                          }
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                          style: {
                            marginLeft: "8px"
                          },
                          htmlFor: "checkbox-".concat(index, "-").concat(optionIndex),
                          children: option
                        })]
                      }, "checkbox-".concat(index, "-").concat(optionIndex));
                    })
                  })]
                }) : form.fieldType === "select" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "col-sm-".concat((_form$column5 = form.column) !== null && _form$column5 !== void 0 ? _form$column5 : "6"),
                  children: [form.label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
                    htmlFor: "",
                    children: [form.label, " ", form.isRequired && "*"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("select", {
                    className: "cs_insurance_input",
                    required: form.isRequired,
                    onChange: function onChange(e) {
                      return handleSetData(e, form.label, form.placeholder);
                    },
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                      value: "",
                      children: (0,_utils_translate__WEBPACK_IMPORTED_MODULE_3__["default"])("Select an option")
                    }), form === null || form === void 0 || (_form$select_options = form.select_options) === null || _form$select_options === void 0 ? void 0 : _form$select_options.map(function (option, optIndex) {
                      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
                        value: option,
                        children: option
                      }, "options-".concat(index, "-").concat(optIndex));
                    })]
                  })]
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "col-sm-".concat((_form$column6 = form.column) !== null && _form$column6 !== void 0 ? _form$column6 : "6"),
                  children: [form.fieldType !== "hidden" && form.label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
                    children: [form.label, " ", form.isRequired && "*"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
                    type: form.fieldType,
                    defaultValue: form.default_value,
                    className: "cs_insurance_input",
                    required: form.isRequired,
                    onChange: function onChange(e) {
                      return handleSetData(e, form.label, form.placeholder);
                    },
                    placeholder: "".concat(form.placeholder ? form.placeholder : "").concat(form.label ? "" : form.isRequired ? " *" : "")
                  })]
                })
              }, index);
            }), is_active_google_captcha === "1" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "cs_mb_15",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((react_google_recaptcha__WEBPACK_IMPORTED_MODULE_2___default()), {
                sitekey: captchaSiteKey,
                onChange: handleCaptchaChange
              }), captchaError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "text-danger mb-3",
                children: captchaError
              })]
            }), (sections_data === null || sections_data === void 0 ? void 0 : sections_data.submit_btn_text) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "col-lg-12",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "cs_height_5 cs_height_lg_5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
                type: "submit",
                disabled: !captchaVerified && is_active_google_captcha === "1" || processing,
                className: "cs_btn cs_style_1 cs_type_2 cs_primary_bg cs_white_color cs_w_100_sm",
                children: [sections_data === null || sections_data === void 0 ? void 0 : sections_data.submit_btn_text, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                      width: 11,
                      height: 11,
                      viewBox: "0 0 11 11",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                        d: "M1 10L10 1M10 1L1 1M10 1L10 10",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      })
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                      width: 11,
                      height: 11,
                      viewBox: "0 0 11 11",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                        d: "M1 10L10 1M10 1L1 1M10 1L10 10",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      })
                    })
                  })]
                })]
              })]
            }), wasSuccessful && flash.success && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "text-success mt-2",
              children: flash.success
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "col-xl-5 offset-xl-1 col-lg-6",
          children: sections_data.image_url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
            src: sections_data.image_url,
            alt: "Thumbnail",
            className: "cs_radius_100_0_0_0",
            loading: "lazy",
            decoding: "async"
          })
        })]
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Sections/ContactWithFormBuilderSection.jsx":
/*!*************************************************************************************!*\
  !*** ./resources/js/Frontend/Components/Sections/ContactWithFormBuilderSection.jsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactWithFormBuilderSection)
/* harmony export */ });
/* harmony import */ var _ContactWithFormBuilder_ContactWithFormBuilder1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ContactWithFormBuilder/ContactWithFormBuilder1 */ "./resources/js/Frontend/Components/ContactWithFormBuilder/ContactWithFormBuilder1.jsx");
/* harmony import */ var _ContactWithFormBuilder_ContactWithFormBuilder2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ContactWithFormBuilder/ContactWithFormBuilder2 */ "./resources/js/Frontend/Components/ContactWithFormBuilder/ContactWithFormBuilder2.jsx");
/* harmony import */ var _ContactWithFormBuilder_ContactWithFormBuilder3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ContactWithFormBuilder/ContactWithFormBuilder3 */ "./resources/js/Frontend/Components/ContactWithFormBuilder/ContactWithFormBuilder3.jsx");
/* harmony import */ var _ContactWithFormBuilder_ContactWithFormBuilder4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ContactWithFormBuilder/ContactWithFormBuilder4 */ "./resources/js/Frontend/Components/ContactWithFormBuilder/ContactWithFormBuilder4.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function ContactWithFormBuilderSection(_ref) {
  var _sections_data$layout;
  var sections_data = _ref.sections_data;
  var sectionLayout = (_sections_data$layout = sections_data === null || sections_data === void 0 ? void 0 : sections_data.layout) !== null && _sections_data$layout !== void 0 ? _sections_data$layout : "1";
  // conditional render
  var layoutSection = "";
  if (sectionLayout === "1") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ContactWithFormBuilder_ContactWithFormBuilder1__WEBPACK_IMPORTED_MODULE_0__["default"], {
      sections_data: sections_data
    });
  } else if (sectionLayout === "2") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ContactWithFormBuilder_ContactWithFormBuilder2__WEBPACK_IMPORTED_MODULE_1__["default"], {
      sections_data: sections_data
    });
  } else if (sectionLayout === "3") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ContactWithFormBuilder_ContactWithFormBuilder3__WEBPACK_IMPORTED_MODULE_2__["default"], {
      sections_data: sections_data
    });
  } else if (sectionLayout === "4") {
    layoutSection = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ContactWithFormBuilder_ContactWithFormBuilder4__WEBPACK_IMPORTED_MODULE_3__["default"], {
      sections_data: sections_data
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: layoutSection
  });
}

/***/ })

};
;