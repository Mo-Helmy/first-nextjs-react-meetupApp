module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/new-meetup/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/NewMeetupForm.js":
/*!*********************************************!*\
  !*** ./components/meetups/NewMeetupForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Card */ "./components/ui/Card.js");
/* harmony import */ var _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewMeetupForm.module.css */ "./components/meetups/NewMeetupForm.module.css");
/* harmony import */ var _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\helmy\\OneDrive\\Desktop\\06-bigger-nextjs-app-meetup\\components\\meetups\\NewMeetupForm.js";




function NewMeetupForm(props) {
  const titleInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const imageInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const addressInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const descriptionInputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription
    };
    props.onAddMeetup(meetupData);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.form,
      onSubmit: submitHandler,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "title",
          children: "Meetup Title"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          required: true,
          id: "title",
          ref: titleInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "image",
          children: "Meetup Image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "url",
          required: true,
          id: "image",
          ref: imageInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "address",
          children: "Address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          required: true,
          id: "address",
          ref: addressInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "description",
          children: "Description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
          id: "description",
          required: true,
          rows: "5",
          ref: descriptionInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.actions,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: "Add Meetup"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (NewMeetupForm);

/***/ }),

/***/ "./components/meetups/NewMeetupForm.module.css":
/*!*****************************************************!*\
  !*** ./components/meetups/NewMeetupForm.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "NewMeetupForm_form__2wUf9",
	"control": "NewMeetupForm_control__Vi75y",
	"actions": "NewMeetupForm_actions__2d-nQ"
};


/***/ }),

/***/ "./components/ui/Card.js":
/*!*******************************!*\
  !*** ./components/ui/Card.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ "./components/ui/Card.module.css");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\helmy\\OneDrive\\Desktop\\06-bigger-nextjs-app-meetup\\components\\ui\\Card.js";


function Card(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/ui/Card.module.css":
/*!***************************************!*\
  !*** ./components/ui/Card.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "Card_card__3KSLO"
};


/***/ }),

/***/ "./pages/new-meetup/index.js":
/*!***********************************!*\
  !*** ./pages/new-meetup/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/meetups/NewMeetupForm */ "./components/meetups/NewMeetupForm.js");

var _jsxFileName = "C:\\Users\\helmy\\OneDrive\\Desktop\\06-bigger-nextjs-app-meetup\\pages\\new-meetup\\index.js";





const newMeetup = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  const addMeetupHandler = async enteredMeetupData => {
    console.log(enteredMeetupData);
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Nextjs React Add New Meetup"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "this is a Nextjs React Add New Meetup description"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onAddMeetup: addMeetupHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (newMeetup);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZWV0dXBzL05ld01lZXR1cEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZWV0dXBzL05ld01lZXR1cEZvcm0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91aS9DYXJkLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbmV3LW1lZXR1cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTmV3TWVldHVwRm9ybSIsInByb3BzIiwidGl0bGVJbnB1dFJlZiIsInVzZVJlZiIsImltYWdlSW5wdXRSZWYiLCJhZGRyZXNzSW5wdXRSZWYiLCJkZXNjcmlwdGlvbklucHV0UmVmIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkVGl0bGUiLCJjdXJyZW50IiwidmFsdWUiLCJlbnRlcmVkSW1hZ2UiLCJlbnRlcmVkQWRkcmVzcyIsImVudGVyZWREZXNjcmlwdGlvbiIsIm1lZXR1cERhdGEiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwib25BZGRNZWV0dXAiLCJjbGFzc2VzIiwiZm9ybSIsImNvbnRyb2wiLCJhY3Rpb25zIiwiQ2FyZCIsImNhcmQiLCJjaGlsZHJlbiIsIm5ld01lZXR1cCIsInJvdXRlciIsInVzZVJvdXRlciIsImFkZE1lZXR1cEhhbmRsZXIiLCJlbnRlcmVkTWVldHVwRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiZGF0YSIsImpzb24iLCJwdXNoIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDNUIsUUFBTUMsYUFBYSxHQUFHQyxvREFBTSxFQUE1QjtBQUNBLFFBQU1DLGFBQWEsR0FBR0Qsb0RBQU0sRUFBNUI7QUFDQSxRQUFNRSxlQUFlLEdBQUdGLG9EQUFNLEVBQTlCO0FBQ0EsUUFBTUcsbUJBQW1CLEdBQUdILG9EQUFNLEVBQWxDOztBQUVBLFdBQVNJLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQzVCQSxTQUFLLENBQUNDLGNBQU47QUFFQSxVQUFNQyxZQUFZ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Q2VILHdFQUFmLEU7Ozs7Ozs7Ozs7O0FDeENBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL25ldy1tZWV0dXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL25ldy1tZWV0dXAvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL3VpL0NhcmRcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL05ld01lZXR1cEZvcm0ubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBOZXdNZWV0dXBGb3JtKHByb3BzKSB7XG4gIGNvbnN0IHRpdGxlSW5wdXRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgaW1hZ2VJbnB1dFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBhZGRyZXNzSW5wdXRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dFJlZiA9IHVzZVJlZigpO1xuXG4gIGZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZW50ZXJlZFRpdGxlID0gdGl0bGVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWRJbWFnZSA9IGltYWdlSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcbiAgICBjb25zdCBlbnRlcmVkQWRkcmVzcyA9IGFkZHJlc3NJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWREZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcblxuICAgIGNvbnN0IG1lZXR1cERhdGEgPSB7XG4gICAgICB0aXRsZTogZW50ZXJlZFRpdGxlLFxuICAgICAgaW1hZ2U6IGVudGVyZWRJbWFnZSxcbiAgICAgIGFkZHJlc3M6IGVudGVyZWRBZGRyZXNzLFxuICAgICAgZGVzY3JpcHRpb246IGVudGVyZWREZXNjcmlwdGlvbixcbiAgICB9O1xuXG4gICAgcHJvcHMub25BZGRNZWV0dXAobWVldHVwRGF0YSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDYXJkPlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiPk1lZXR1cCBUaXRsZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgaWQ9XCJ0aXRsZVwiIHJlZj17dGl0bGVJbnB1dFJlZn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VcIj5NZWV0dXAgSW1hZ2U8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidXJsXCIgcmVxdWlyZWQgaWQ9XCJpbWFnZVwiIHJlZj17aW1hZ2VJbnB1dFJlZn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWRkcmVzc1wiPkFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIGlkPVwiYWRkcmVzc1wiIHJlZj17YWRkcmVzc0lucHV0UmVmfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIHJvd3M9XCI1XCJcbiAgICAgICAgICAgIHJlZj17ZGVzY3JpcHRpb25JbnB1dFJlZn1cbiAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxuICAgICAgICAgIDxidXR0b24+QWRkIE1lZXR1cDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L0NhcmQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld01lZXR1cEZvcm07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb3JtXCI6IFwiTmV3TWVldHVwRm9ybV9mb3JtX18yd1VmOVwiLFxuXHRcImNvbnRyb2xcIjogXCJOZXdNZWV0dXBGb3JtX2NvbnRyb2xfX1ZpNzV5XCIsXG5cdFwiYWN0aW9uc1wiOiBcIk5ld01lZXR1cEZvcm1fYWN0aW9uc19fMmQtblFcIlxufTtcbiIsImltcG9ydCBjbGFzc2VzIGZyb20gJy4vQ2FyZC5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gQ2FyZChwcm9wcykge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+e3Byb3BzLmNoaWxkcmVufTwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhcmRcIjogXCJDYXJkX2NhcmRfXzNLU0xPXCJcbn07XG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IE5ld01lZXR1cEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9OZXdNZWV0dXBGb3JtXCI7XHJcblxyXG5jb25zdCBuZXdNZWV0dXAgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGFkZE1lZXR1cEhhbmRsZXIgPSBhc3luYyAoZW50ZXJlZE1lZXR1cERhdGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVudGVyZWRNZWV0dXBEYXRhKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL25ldy1tZWV0dXBcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShlbnRlcmVkTWVldHVwRGF0YSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5OZXh0anMgUmVhY3QgQWRkIE5ldyBNZWV0dXA8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD1cInRoaXMgaXMgYSBOZXh0anMgUmVhY3QgQWRkIE5ldyBNZWV0dXAgZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPE5ld01lZXR1cEZvcm0gb25BZGRNZWV0dXA9e2FkZE1lZXR1cEhhbmRsZXJ9IC8+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXdNZWV0dXA7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==