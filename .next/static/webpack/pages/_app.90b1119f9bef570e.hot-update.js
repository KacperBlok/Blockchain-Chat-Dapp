"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./Components/NavBar/NavBar.jsx":
/*!**************************************!*\
  !*** ./Components/NavBar/NavBar.jsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _NavBar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavBar.module.css */ \"./Components/NavBar/NavBar.module.css\");\n/* harmony import */ var _NavBar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_NavBar_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Context_ChatAppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Context/ChatAppContext */ \"./Context/ChatAppContext.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../index */ \"./Components/index.js\");\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets */ \"./assets/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst NavBar = ()=>{\n    _s();\n    const menuItems = [\n        {\n            menu: \"All Users\",\n            link: \"alluser\"\n        },\n        {\n            menu: \"CHAT\",\n            link: \"/\"\n        },\n        {\n            menu: \"SETTINGS\",\n            link: \"/\"\n        },\n        {\n            menu: \"FAQ\",\n            link: \"/\"\n        },\n        {\n            menu: \"TERMS OF USE\",\n            link: \"/\"\n        }\n    ];\n    //usestate\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2);\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [openModel, setOpenModel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { account, userName, connectWallet } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Context_ChatAppContext__WEBPACK_IMPORTED_MODULE_5__.ChatAppContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().Navbar),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().NavBar_box),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().Navbar_box_left),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _assets__WEBPACK_IMPORTED_MODULE_7__[\"default\"].logo,\n                        alt: \"logo\",\n                        width: 300,\n                        height: 75\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Blokchain-Chat-Dapp\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Blokchain-Chat-Dapp\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Blokchain-Chat-Dapp\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().Navbar_box_right),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().Navbar_box_right_menu),\n                        children: menuItems.map((el, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>setActive(i + 1),\n                                className: \"\".concat((_NavBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().Navbar_box_right_menu_items), \" \").concat(active === i + 1 ? (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().active_btn) : \"\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().Navbar_box_right_menu_items_link),\n                                    href: el.link,\n                                    children: el.menu\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Blokchain-Chat-Dapp\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, 1 + 1, false, {\n                                fileName: \"D:\\\\Blokchain-Chat-Dapp\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 25\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Blokchain-Chat-Dapp\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, undefined),\n                    open && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().mobile_menu),\n                        children: [\n                            menuItems.map((el, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    onClick: ()=>setActive(i + 1),\n                                    className: \"\".concat((_NavBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().mobile_menu_items), \" \").concat(active === i + 1 ? (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().active_btn) : \"\"),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().mobile_menu_items_link),\n                                        href: el.link,\n                                        children: el.menu\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Blokchain-Chat-Dapp\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, 1 + 1, false, {\n                                    fileName: \"D:\\\\Blokchain-Chat-Dapp\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 29\n                                }, undefined)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().mobile_menu_btn),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: _assets__WEBPACK_IMPORTED_MODULE_7__[\"default\"].close,\n                                    alt: \"close\",\n                                    width: 50,\n                                    height: 50,\n                                    onClick: ()=>setOpen(false)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Blokchain-Chat-Dapp\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 27\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Blokchain-Chat-Dapp\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Blokchain-Chat-Dapp\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().Navbar_box_right_connect),\n                        children: account == \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>connectWallet(),\n                            children: [\n                                \"\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Connect Wallet\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Blokchain-Chat-Dapp\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 23\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Blokchain-Chat-Dapp\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                            lineNumber: 83,\n                            columnNumber: 21\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setOpenModel(true),\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: UserName ? _assets__WEBPACK_IMPORTED_MODULE_7__[\"default\"].accountName : _assets__WEBPACK_IMPORTED_MODULE_7__[\"default\"].create2,\n                                    alt: \"account image\",\n                                    width: 20,\n                                    height: 20\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Blokchain-Chat-Dapp\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 23\n                                }, undefined),\n                                '',\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                    children: userName || \"Create Account\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Blokchain-Chat-Dapp\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 23\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Blokchain-Chat-Dapp\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                            lineNumber: 88,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Blokchain-Chat-Dapp\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().Navbar_box_right_open),\n                        onClick: ()=>setOpen(true),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _assets__WEBPACK_IMPORTED_MODULE_7__[\"default\"].open,\n                            alt: \"open\",\n                            width: 30,\n                            height: 30\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Blokchain-Chat-Dapp\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                            lineNumber: 104,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Blokchain-Chat-Dapp\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                        lineNumber: 101,\n                        columnNumber: 19\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Blokchain-Chat-Dapp\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Blokchain-Chat-Dapp\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, undefined);\n};\n_s(NavBar, \"d27JqHymTp8aWtpgqchpB7T4ciA=\");\n_c = NavBar;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0EsdURBQWM7b0NBQ3hEcUIsS0FBSTtvQ0FDSkMsT0FBTztvQ0FDUEMsUUFBUTs7Ozs7O2dDQUVUOzhDQUNELDhEQUFDdUI7OENBQU9sQyxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLeEIsOERBQUNFO3dCQUFJQyxXQUFXbkIsaUZBQTJCO3dCQUMzQ2lDLFNBQVMsSUFBTXJCLFFBQVE7a0NBRXJCLDRFQUFDZCxtREFBS0E7NEJBQUN5QixLQUFLbkIsb0RBQVc7NEJBQUVxQixLQUFJOzRCQUFPQyxPQUFPOzRCQUFJQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszRTtHQW5HTXRCO0tBQUFBO0FBcUdOLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvTmF2QmFyL05hdkJhci5qc3g/ZmYyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IFN0eWxlIGZyb20gJy4vTmF2QmFyLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBDaGF0QXBwQ29udGV4dCB9IGZyb20gJy4uLy4uL0NvbnRleHQvQ2hhdEFwcENvbnRleHQnO1xyXG5pbXBvcnQgeyBNb2RlbCwgRXJyb3IgfSBmcm9tICcuLi9pbmRleCc7XHJcbmltcG9ydCBpbWFnZXMgZnJvbSBcIi4uLy4uL2Fzc2V0c1wiO1xyXG5cclxuY29uc3QgTmF2QmFyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWVudUl0ZW1zID0gW1xyXG4gICAgICB7IG1lbnU6IFwiQWxsIFVzZXJzXCIsIGxpbms6IFwiYWxsdXNlclwiIH0sXHJcbiAgICAgIHsgbWVudTogXCJDSEFUXCIsIGxpbms6IFwiL1wiIH0sXHJcbiAgICAgIHsgbWVudTogXCJTRVRUSU5HU1wiLCBsaW5rOiBcIi9cIiB9LFxyXG4gICAgICB7IG1lbnU6IFwiRkFRXCIsIGxpbms6IFwiL1wiIH0sXHJcbiAgICAgIHsgbWVudTogXCJURVJNUyBPRiBVU0VcIiwgbGluazogXCIvXCIgfSxcclxuICAgIF07XHJcblxyXG4gICAgLy91c2VzdGF0ZVxyXG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDIpO1xyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW29wZW5Nb2RlbCwgc2V0T3Blbk1vZGVsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB7IGFjY291bnQsIHVzZXJOYW1lLCBjb25uZWN0V2FsbGV0IH0gPSB1c2VDb250ZXh0KENoYXRBcHBDb250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5OYXZiYXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuTmF2QmFyX2JveH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5OYXZiYXJfYm94X2xlZnR9PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2VzLmxvZ299IGFsdD1cImxvZ29cIiB3aWR0aD17MzAwfSBoZWlnaHQ9ezc1fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuTmF2YmFyX2JveF9yaWdodH0+XHJcbiAgICAgICAgICAgICAgICB7LyogRGVza3RvcCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5OYXZiYXJfYm94X3JpZ2h0X21lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHttZW51SXRlbXMubWFwKChlbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoaSArIDEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsxICsgMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7U3R5bGUuTmF2YmFyX2JveF9yaWdodF9tZW51X2l0ZW1zfSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA9PT0gaSArIDEgPyBTdHlsZS5hY3RpdmVfYnRuIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtTdHlsZS5OYXZiYXJfYm94X3JpZ2h0X21lbnVfaXRlbXNfbGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtlbC5saW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbC5tZW51fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIE1vYmlsZSAqL31cclxuICAgICAgICAgICAgICAgIHtvcGVuICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUubW9iaWxlX21lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoZWwsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoaSArIDEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17MSsgMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1N0eWxlLm1vYmlsZV9tZW51X2l0ZW1zfSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPT09IGkgKyAxID8gU3R5bGUuYWN0aXZlX2J0biA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1N0eWxlLm1vYmlsZV9tZW51X2l0ZW1zX2xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2VsLmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWwubWVudX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17U3R5bGUubW9iaWxlX21lbnVfYnRufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjID0ge2ltYWdlcy5jbG9zZX0gYWx0PVwiY2xvc2VcIiB3aWR0aD17NTB9IGhlaWdodD17NTB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PiBzZXRPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBDb25uZWN0IFdhbGxldCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5OYXZiYXJfYm94X3JpZ2h0X2Nvbm5lY3R9PlxyXG4gICAgICAgICAgICAgICAgICB7YWNjb3VudCA9PSBcIlwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PiBjb25uZWN0V2FsbGV0KCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db25uZWN0IFdhbGxldDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE9wZW5Nb2RlbCh0cnVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtVc2VyTmFtZSA/IGltYWdlcy5hY2NvdW50TmFtZSA6IGltYWdlcy5jcmVhdGUyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJhY2NvdW50IGltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIHsnJ31cclxuICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD57dXNlck5hbWUgfHwgXCJDcmVhdGUgQWNjb3VudFwifTwvc21hbGw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLk5hdmJhcl9ib3hfcmlnaHRfb3Blbn1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3Blbih0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlcy5vcGVufSBhbHQ9XCJvcGVuXCIgd2lkdGg9ezMwfSBoZWlnaHQ9ezMwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsIkltYWdlIiwiTGluayIsIlN0eWxlIiwiQ2hhdEFwcENvbnRleHQiLCJNb2RlbCIsIkVycm9yIiwiaW1hZ2VzIiwiTmF2QmFyIiwibWVudUl0ZW1zIiwibWVudSIsImxpbmsiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJvcGVuIiwic2V0T3BlbiIsIm9wZW5Nb2RlbCIsInNldE9wZW5Nb2RlbCIsImFjY291bnQiLCJ1c2VyTmFtZSIsImNvbm5lY3RXYWxsZXQiLCJkaXYiLCJjbGFzc05hbWUiLCJOYXZiYXIiLCJOYXZCYXJfYm94IiwiTmF2YmFyX2JveF9sZWZ0Iiwic3JjIiwibG9nbyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiTmF2YmFyX2JveF9yaWdodCIsIk5hdmJhcl9ib3hfcmlnaHRfbWVudSIsIm1hcCIsImVsIiwiaSIsIm9uQ2xpY2siLCJOYXZiYXJfYm94X3JpZ2h0X21lbnVfaXRlbXMiLCJhY3RpdmVfYnRuIiwiTmF2YmFyX2JveF9yaWdodF9tZW51X2l0ZW1zX2xpbmsiLCJocmVmIiwibW9iaWxlX21lbnUiLCJtb2JpbGVfbWVudV9pdGVtcyIsIm1vYmlsZV9tZW51X2l0ZW1zX2xpbmsiLCJwIiwibW9iaWxlX21lbnVfYnRuIiwiY2xvc2UiLCJOYXZiYXJfYm94X3JpZ2h0X2Nvbm5lY3QiLCJidXR0b24iLCJzcGFuIiwiVXNlck5hbWUiLCJhY2NvdW50TmFtZSIsImNyZWF0ZTIiLCJzbWFsbCIsIk5hdmJhcl9ib3hfcmlnaHRfb3BlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/NavBar/NavBar.jsx\n"));

/***/ })

});