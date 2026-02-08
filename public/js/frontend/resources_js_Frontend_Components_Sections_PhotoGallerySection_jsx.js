"use strict";
exports.id = "resources_js_Frontend_Components_Sections_PhotoGallerySection_jsx";
exports.ids = ["resources_js_Frontend_Components_Sections_PhotoGallerySection_jsx"];
exports.modules = {

/***/ "./resources/js/Frontend/Components/PhotoGallery/LightGallery.jsx":
/*!************************************************************************!*\
  !*** ./resources/js/Frontend/Components/PhotoGallery/LightGallery.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LightGallery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/modules */ "swiper/modules");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_modules__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/react */ "@iconify/react");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





function LightGallery(_ref) {
  var modalToggle = _ref.modalToggle,
    setModalToggle = _ref.setModalToggle,
    galleryList = _ref.galleryList,
    initialSlideIndex = _ref.initialSlideIndex;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isPlaying = _useState2[0],
    setIsPlaying = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState4 = _slicedToArray(_useState3, 2),
    zoomLevel = _useState4[0],
    setZoomLevel = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    swiperRef = _useState6[0],
    setSwiperRef = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isFullscreen = _useState8[0],
    setIsFullscreen = _useState8[1];
  var handleZoomIn = function handleZoomIn() {
    setZoomLevel(function (prevZoom) {
      return prevZoom * 1.1;
    });
  };
  var handleZoomOut = function handleZoomOut() {
    if (zoomLevel > 1) {
      setZoomLevel(function (prevZoom) {
        return prevZoom / 1.1;
      });
    }
  };
  var handleDownload = function handleDownload(imageUrl) {
    var link = document.createElement("a");
    link.href = imageUrl;
    link.download = imageUrl.substring(imageUrl.lastIndexOf("/") + 1);
    link.click();
  };
  var toggleAutoplay = function toggleAutoplay() {
    if (swiperRef && swiperRef.autoplay) {
      if (isPlaying) {
        swiperRef.autoplay.stop();
      } else {
        swiperRef.autoplay.start();
      }
      setIsPlaying(!isPlaying);
    }
  };
  var toggleFullScreen = function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };
  var handleFullscreenChange = function handleFullscreenChange() {
    setIsFullscreen(!!document.fullscreenElement);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return function () {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);
  var handleCloseModal = function handleCloseModal() {
    setModalToggle(false);
    setZoomLevel(1);
  };
  return modalToggle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "cs_gallery_modal",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "cs_gallery_modal_overlay"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "cs_gallery_modal_slider_wrap",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
        onSwiper: setSwiperRef,
        pagination: {
          type: "fraction"
        },
        navigation: true,
        modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Mousewheel, swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Autoplay],
        loop: true,
        mousewheel: true,
        className: "mySwiper",
        speed: 1000,
        initialSlide: initialSlideIndex,
        autoplay: isPlaying ? {
          delay: 3000,
          disableOnInteraction: false
        } : false,
        children: galleryList === null || galleryList === void 0 ? void 0 : galleryList.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "cs_gallery_modal_item",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                src: item.gallery_image_url,
                alt: "",
                loading: "lazy",
                decoding: "async",
                style: {
                  transform: "scale(".concat(zoomLevel, ")"),
                  transition: "transform 0.3s ease"
                }
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h4", {
              className: "cs_gallery_modal_title",
              children: item.gallery_title
            })]
          }, index);
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "cs_gallery_controler",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        onClick: handleZoomIn,
        className: "cs_gallery_controler_btn",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: "lucide:zoom-in",
          width: "22",
          height: "22"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        onClick: handleZoomOut,
        className: "cs_gallery_controler_btn",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: "lucide:zoom-out",
          width: "22",
          height: "22"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        onClick: function onClick() {
          var _galleryList$initialS;
          return handleDownload((_galleryList$initialS = galleryList[initialSlideIndex]) === null || _galleryList$initialS === void 0 ? void 0 : _galleryList$initialS.gallery_image_url);
        },
        className: "cs_gallery_controler_btn",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: "lucide:download",
          width: "22",
          height: "22"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        onClick: toggleAutoplay,
        className: "cs_gallery_controler_btn ".concat(isPlaying ? "active" : ""),
        children: isPlaying ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: "lucide:circle-pause",
          width: "22",
          height: "22"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: "lucide:circle-play",
          width: "22",
          height: "22"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        onClick: toggleFullScreen,
        className: "cs_gallery_controler_btn",
        children: isFullscreen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: "lucide:scan-line",
          width: "22",
          height: "22"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: "lucide:scan",
          width: "22",
          height: "22"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        onClick: handleCloseModal,
        className: "cs_gallery_controler_btn",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: "lucide:x",
          width: "22",
          height: "22"
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/PhotoGallery/PhotoGallery1.jsx":
/*!*************************************************************************!*\
  !*** ./resources/js/Frontend/Components/PhotoGallery/PhotoGallery1.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PhotoGallery1)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LightGallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LightGallery */ "./resources/js/Frontend/Components/PhotoGallery/LightGallery.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



function PhotoGallery1(_ref) {
  var data = _ref.data;
  var section_subtitle = data.section_subtitle,
    section_title = data.section_title,
    gallery_list = data.gallery_list;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    modalToggle = _useState2[0],
    setModalToggle = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    initialSlideIndex = _useState4[0],
    setInitialSlideIndex = _useState4[1];
  var slideTo = function slideTo(index) {
    setInitialSlideIndex(index);
    setModalToggle(true);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [(section_subtitle || section_title) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "container",
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
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "cs_gallery cs_style_1",
        children: gallery_list === null || gallery_list === void 0 ? void 0 : gallery_list.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "cs_gallery_item cs_bg_filed",
            style: {
              backgroundImage: "url(".concat(item.gallery_image_url, ")")
            },
            onClick: function onClick() {
              return slideTo(index);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "cs_gallery_hover",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {})]
            })
          }, index);
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_LightGallery__WEBPACK_IMPORTED_MODULE_1__["default"], {
      modalToggle: modalToggle,
      setModalToggle: setModalToggle,
      galleryList: gallery_list,
      initialSlideIndex: initialSlideIndex
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/PhotoGallery/PhotoGallery2.jsx":
/*!*************************************************************************!*\
  !*** ./resources/js/Frontend/Components/PhotoGallery/PhotoGallery2.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PhotoGallery2)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LightGallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LightGallery */ "./resources/js/Frontend/Components/PhotoGallery/LightGallery.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



function PhotoGallery2(_ref) {
  var data = _ref.data;
  var section_subtitle = data.section_subtitle,
    section_title = data.section_title,
    gallery_list = data.gallery_list;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    modalToggle = _useState2[0],
    setModalToggle = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    initialSlideIndex = _useState4[0],
    setInitialSlideIndex = _useState4[1];
  var slideTo = function slideTo(index) {
    setInitialSlideIndex(index);
    setModalToggle(true);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [(section_subtitle || section_title) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "container",
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
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "cs_gallery cs_style_2",
        children: gallery_list === null || gallery_list === void 0 ? void 0 : gallery_list.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "cs_gallery_item cs_bg_filed",
            style: {
              backgroundImage: "url(".concat(item.gallery_image_url, ")")
            },
            onClick: function onClick() {
              return slideTo(index);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "cs_gallery_hover",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {})]
            })
          }, index);
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_LightGallery__WEBPACK_IMPORTED_MODULE_1__["default"], {
      modalToggle: modalToggle,
      setModalToggle: setModalToggle,
      galleryList: gallery_list,
      initialSlideIndex: initialSlideIndex
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/PhotoGallery/PhotoGallery3.jsx":
/*!*************************************************************************!*\
  !*** ./resources/js/Frontend/Components/PhotoGallery/PhotoGallery3.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PhotoGallery3)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LightGallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LightGallery */ "./resources/js/Frontend/Components/PhotoGallery/LightGallery.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



function PhotoGallery3(_ref) {
  var data = _ref.data;
  var section_subtitle = data.section_subtitle,
    section_title = data.section_title,
    gallery_list = data.gallery_list;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    modalToggle = _useState2[0],
    setModalToggle = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    initialSlideIndex = _useState4[0],
    setInitialSlideIndex = _useState4[1];
  var slideTo = function slideTo(index) {
    setInitialSlideIndex(index);
    setModalToggle(true);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [(section_subtitle || section_title) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "container",
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
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "cs_gallery cs_style_3",
        children: gallery_list === null || gallery_list === void 0 ? void 0 : gallery_list.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "cs_gallery_item",
            onClick: function onClick() {
              return slideTo(index);
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              src: item.gallery_image_url,
              alt: "",
              loading: "lazy",
              decoding: "async"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "cs_gallery_hover",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {})]
            })]
          }, index);
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_LightGallery__WEBPACK_IMPORTED_MODULE_1__["default"], {
      modalToggle: modalToggle,
      setModalToggle: setModalToggle,
      galleryList: gallery_list,
      initialSlideIndex: initialSlideIndex
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/PhotoGallery/PhotoGallery4.jsx":
/*!*************************************************************************!*\
  !*** ./resources/js/Frontend/Components/PhotoGallery/PhotoGallery4.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PhotoGallery4)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LightGallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LightGallery */ "./resources/js/Frontend/Components/PhotoGallery/LightGallery.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



function PhotoGallery4(_ref) {
  var data = _ref.data;
  var section_subtitle = data.section_subtitle,
    section_title = data.section_title,
    gallery_list = data.gallery_list;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    modalToggle = _useState2[0],
    setModalToggle = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    initialSlideIndex = _useState4[0],
    setInitialSlideIndex = _useState4[1];
  var slideTo = function slideTo(index) {
    setInitialSlideIndex(index);
    setModalToggle(true);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [(section_subtitle || section_title) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "container",
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
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "cs_gallery cs_style_4",
        children: gallery_list === null || gallery_list === void 0 ? void 0 : gallery_list.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "cs_gallery_item cs_bg_filed",
            style: {
              backgroundImage: "url(".concat(item.gallery_image_url, ")")
            },
            onClick: function onClick() {
              return slideTo(index);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "cs_gallery_hover",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {})]
            })
          }, index);
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_LightGallery__WEBPACK_IMPORTED_MODULE_1__["default"], {
      modalToggle: modalToggle,
      setModalToggle: setModalToggle,
      galleryList: gallery_list,
      initialSlideIndex: initialSlideIndex
    })]
  });
}

/***/ }),

/***/ "./resources/js/Frontend/Components/Sections/PhotoGallerySection.jsx":
/*!***************************************************************************!*\
  !*** ./resources/js/Frontend/Components/Sections/PhotoGallerySection.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PartnerSection)
/* harmony export */ });
/* harmony import */ var _PhotoGallery_PhotoGallery1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PhotoGallery/PhotoGallery1 */ "./resources/js/Frontend/Components/PhotoGallery/PhotoGallery1.jsx");
/* harmony import */ var _PhotoGallery_PhotoGallery2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PhotoGallery/PhotoGallery2 */ "./resources/js/Frontend/Components/PhotoGallery/PhotoGallery2.jsx");
/* harmony import */ var _PhotoGallery_PhotoGallery3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PhotoGallery/PhotoGallery3 */ "./resources/js/Frontend/Components/PhotoGallery/PhotoGallery3.jsx");
/* harmony import */ var _PhotoGallery_PhotoGallery4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PhotoGallery/PhotoGallery4 */ "./resources/js/Frontend/Components/PhotoGallery/PhotoGallery4.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function PartnerSection(_ref) {
  var _sections_data$layout;
  var sections_data = _ref.sections_data;
  var sectionLayout = (_sections_data$layout = sections_data === null || sections_data === void 0 ? void 0 : sections_data.layout) !== null && _sections_data$layout !== void 0 ? _sections_data$layout : "1";

  // conditional rendering
  var layout = "";
  if (sectionLayout === "1") {
    layout = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_PhotoGallery_PhotoGallery1__WEBPACK_IMPORTED_MODULE_0__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "2") {
    layout = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_PhotoGallery_PhotoGallery2__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "3") {
    layout = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_PhotoGallery_PhotoGallery3__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: sections_data
    });
  } else if (sectionLayout === "4") {
    layout = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_PhotoGallery_PhotoGallery4__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: sections_data
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: layout
  });
}

/***/ })

};
;