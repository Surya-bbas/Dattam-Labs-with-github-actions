"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/TableOfContents.js":
/*!*******************************************!*\
  !*** ./src/components/TableOfContents.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_List_ListItem_ListItemText_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,List,ListItem,ListItemText,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_List_ListItem_ListItemText_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,List,ListItem,ListItemText,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_List_ListItem_ListItemText_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Box,List,ListItem,ListItemText,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/List/List.js\");\n/* harmony import */ var _barrel_optimize_names_Box_List_ListItem_ListItemText_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Box,List,ListItem,ListItemText,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/ListItem/ListItem.js\");\n/* harmony import */ var _barrel_optimize_names_Box_List_ListItem_ListItemText_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Box,List,ListItem,ListItemText,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/ListItemText/ListItemText.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst TableOfContents = ()=>{\n    _s();\n    const { scrollY } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll)();\n    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform)(scrollY, [\n        0,\n        500\n    ], [\n        0,\n        -700\n    ]);\n    const menuItems = [\n        {\n            title: 'Introduction',\n            link: '#introduction'\n        },\n        {\n            title: 'Getting Started',\n            link: '#getting-started'\n        },\n        {\n            title: 'Advanced Topics',\n            link: '#advanced-topics'\n        },\n        {\n            title: 'Best Practices',\n            link: '#best-practices'\n        },\n        {\n            title: 'Conclusion',\n            link: '#conclusion'\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        style: {\n            y,\n            position: 'sticky',\n            top: 500,\n            width: '100%'\n        },\n        initial: {\n            opacity: 0,\n            y: 20\n        },\n        animate: {\n            opacity: 1,\n            y: 0\n        },\n        transition: {\n            duration: 0.5\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_List_ListItem_ListItemText_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            sx: {\n                width: '100%',\n                bgcolor: 'background.paper',\n                borderRadius: 2,\n                boxShadow: '0 0 10px rgba(0,0,0,0.1)',\n                p: 2\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_List_ListItem_ListItemText_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    variant: \"h6\",\n                    component: \"h2\",\n                    sx: {\n                        fontWeight: 'bold',\n                        mb: 2,\n                        borderBottom: '2px solid #eaeaea',\n                        pb: 1\n                    },\n                    children: \"Table of Contents\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Dattam Labs next.js\\\\material-ui-nextjs\\\\src\\\\components\\\\TableOfContents.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_List_ListItem_ListItemText_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    component: \"nav\",\n                    sx: {\n                        p: 0\n                    },\n                    children: menuItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                            initial: {\n                                opacity: 0,\n                                x: -20\n                            },\n                            animate: {\n                                opacity: 1,\n                                x: 0\n                            },\n                            transition: {\n                                duration: 0.3,\n                                delay: index * 0.1\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_List_ListItem_ListItemText_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                component: \"a\",\n                                href: item.link,\n                                sx: {\n                                    p: 1,\n                                    '&:hover': {\n                                        bgcolor: 'rgba(0, 0, 0, 0.04)',\n                                        borderRadius: 1\n                                    },\n                                    textDecoration: 'none',\n                                    color: 'inherit'\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_List_ListItem_ListItemText_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    primary: item.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Dattam Labs next.js\\\\material-ui-nextjs\\\\src\\\\components\\\\TableOfContents.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Dattam Labs next.js\\\\material-ui-nextjs\\\\src\\\\components\\\\TableOfContents.js\",\n                                lineNumber: 63,\n                                columnNumber: 15\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Dattam Labs next.js\\\\material-ui-nextjs\\\\src\\\\components\\\\TableOfContents.js\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Dattam Labs next.js\\\\material-ui-nextjs\\\\src\\\\components\\\\TableOfContents.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Dattam Labs next.js\\\\material-ui-nextjs\\\\src\\\\components\\\\TableOfContents.js\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Dattam Labs next.js\\\\material-ui-nextjs\\\\src\\\\components\\\\TableOfContents.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TableOfContents, \"sZC7D7RRTAF+ZcJsaIkRSEitHwo=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform\n    ];\n});\n_c = TableOfContents;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableOfContents);\nvar _c;\n$RefreshReg$(_c, \"TableOfContents\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1RhYmxlT2ZDb250ZW50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUMrQztBQUNkO0FBRWhFLE1BQU1TLGtCQUFrQjs7SUFDdEIsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBR0gsd0RBQVNBO0lBRzdCLE1BQU1JLElBQUlILDJEQUFZQSxDQUFDRSxTQUNyQjtRQUFDO1FBQUc7S0FBSSxFQUNSO1FBQUM7UUFBRyxDQUFDO0tBQUk7SUFHWCxNQUFNRSxZQUFZO1FBQ2hCO1lBQUVDLE9BQU87WUFBZ0JDLE1BQU07UUFBZ0I7UUFDL0M7WUFBRUQsT0FBTztZQUFtQkMsTUFBTTtRQUFtQjtRQUNyRDtZQUFFRCxPQUFPO1lBQW1CQyxNQUFNO1FBQW1CO1FBQ3JEO1lBQUVELE9BQU87WUFBa0JDLE1BQU07UUFBa0I7UUFDbkQ7WUFBRUQsT0FBTztZQUFjQyxNQUFNO1FBQWM7S0FDNUM7SUFFRCxxQkFDRSw4REFBQ1IsaURBQU1BLENBQUNTLEdBQUc7UUFDVEMsT0FBTztZQUNMTDtZQUNBTSxVQUFVO1lBQ1ZDLEtBQUs7WUFDTEMsT0FBTztRQUNUO1FBQ0FDLFNBQVM7WUFBRUMsU0FBUztZQUFHVixHQUFHO1FBQUc7UUFDN0JXLFNBQVM7WUFBRUQsU0FBUztZQUFHVixHQUFHO1FBQUU7UUFDNUJZLFlBQVk7WUFBRUMsVUFBVTtRQUFJO2tCQUU1Qiw0RUFBQ3ZCLHFIQUFHQTtZQUNGd0IsSUFBSTtnQkFDRk4sT0FBTztnQkFDUE8sU0FBUztnQkFDVEMsY0FBYztnQkFDZEMsV0FBVztnQkFDWEMsR0FBRztZQUNMOzs4QkFFQSw4REFBQzNCLHFIQUFVQTtvQkFDVDRCLFNBQVE7b0JBQ1JDLFdBQVU7b0JBQ1ZOLElBQUk7d0JBQ0ZPLFlBQVk7d0JBQ1pDLElBQUk7d0JBQ0pDLGNBQWM7d0JBQ2RDLElBQUk7b0JBQ047OEJBQ0Q7Ozs7Ozs4QkFHRCw4REFBQ2hDLHFIQUFJQTtvQkFBQzRCLFdBQVU7b0JBQU1OLElBQUk7d0JBQUVJLEdBQUc7b0JBQUU7OEJBQzlCakIsVUFBVXdCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDcEIsOERBQUNoQyxpREFBTUEsQ0FBQ1MsR0FBRzs0QkFFVEssU0FBUztnQ0FBRUMsU0FBUztnQ0FBR2tCLEdBQUcsQ0FBQzs0QkFBRzs0QkFDOUJqQixTQUFTO2dDQUFFRCxTQUFTO2dDQUFHa0IsR0FBRzs0QkFBRTs0QkFDNUJoQixZQUFZO2dDQUFFQyxVQUFVO2dDQUFLZ0IsT0FBT0YsUUFBUTs0QkFBSTtzQ0FFaEQsNEVBQUNsQyxxSEFBUUE7Z0NBQ1AyQixXQUFVO2dDQUNWVSxNQUFNSixLQUFLdkIsSUFBSTtnQ0FDZlcsSUFBSTtvQ0FDRkksR0FBRztvQ0FDSCxXQUFXO3dDQUNUSCxTQUFTO3dDQUNUQyxjQUFjO29DQUNoQjtvQ0FDQWUsZ0JBQWdCO29DQUNoQkMsT0FBTztnQ0FDVDswQ0FFQSw0RUFBQ3RDLHFIQUFZQTtvQ0FBQ3VDLFNBQVNQLEtBQUt4QixLQUFLOzs7Ozs7Ozs7OzsyQkFsQjlCeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCbkI7R0EvRU03Qjs7UUFDZ0JGLG9EQUFTQTtRQUduQkMsdURBQVlBOzs7S0FKbEJDO0FBaUZOLGlFQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEFkbWluXFxEZXNrdG9wXFxEYXR0YW0gTGFicyBuZXh0LmpzXFxtYXRlcmlhbC11aS1uZXh0anNcXHNyY1xcY29tcG9uZW50c1xcVGFibGVPZkNvbnRlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBUeXBvZ3JhcGh5LCBMaXN0LCBMaXN0SXRlbSwgTGlzdEl0ZW1UZXh0IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IG1vdGlvbiwgdXNlU2Nyb2xsLCB1c2VUcmFuc2Zvcm0gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuXHJcbmNvbnN0IFRhYmxlT2ZDb250ZW50cyA9ICgpID0+IHtcclxuICBjb25zdCB7IHNjcm9sbFkgfSA9IHVzZVNjcm9sbCgpO1xyXG4gIFxyXG5cclxuICBjb25zdCB5ID0gdXNlVHJhbnNmb3JtKHNjcm9sbFksIFxyXG4gICAgWzAsIDUwMF0sIFxyXG4gICAgWzAsIC03MDBdICAgXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgbWVudUl0ZW1zID0gW1xyXG4gICAgeyB0aXRsZTogJ0ludHJvZHVjdGlvbicsIGxpbms6ICcjaW50cm9kdWN0aW9uJyB9LFxyXG4gICAgeyB0aXRsZTogJ0dldHRpbmcgU3RhcnRlZCcsIGxpbms6ICcjZ2V0dGluZy1zdGFydGVkJyB9LFxyXG4gICAgeyB0aXRsZTogJ0FkdmFuY2VkIFRvcGljcycsIGxpbms6ICcjYWR2YW5jZWQtdG9waWNzJyB9LFxyXG4gICAgeyB0aXRsZTogJ0Jlc3QgUHJhY3RpY2VzJywgbGluazogJyNiZXN0LXByYWN0aWNlcycgfSxcclxuICAgIHsgdGl0bGU6ICdDb25jbHVzaW9uJywgbGluazogJyNjb25jbHVzaW9uJyB9XHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgeSxcclxuICAgICAgICBwb3NpdGlvbjogJ3N0aWNreScsXHJcbiAgICAgICAgdG9wOiA1MDAsIC8vIEFkanVzdCBiYXNlZCBvbiBuYXZiYXIgaGVpZ2h0XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xyXG4gICAgICB9fVxyXG4gICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XHJcbiAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxyXG4gICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cclxuICAgID5cclxuICAgICAgPEJveCBcclxuICAgICAgICBzeD17eyBcclxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXHJcbiAgICAgICAgICBib3hTaGFkb3c6ICcwIDAgMTBweCByZ2JhKDAsMCwwLDAuMSknLFxyXG4gICAgICAgICAgcDogMlxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgIGNvbXBvbmVudD1cImgyXCJcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgICAgICAgbWI6IDIsXHJcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJzJweCBzb2xpZCAjZWFlYWVhJyxcclxuICAgICAgICAgICAgcGI6IDFcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgVGFibGUgb2YgQ29udGVudHNcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPExpc3QgY29tcG9uZW50PVwibmF2XCIgc3g9e3sgcDogMCB9fT5cclxuICAgICAgICAgIHttZW51SXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB4OiAtMjAgfX1cclxuICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHg6IDAgfX1cclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjMsIGRlbGF5OiBpbmRleCAqIDAuMSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcclxuICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0ubGlua31cclxuICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgIHA6IDEsXHJcbiAgICAgICAgICAgICAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJnY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMDQpJyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDFcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICdpbmhlcml0J1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2l0ZW0udGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvbW90aW9uLmRpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFibGVPZkNvbnRlbnRzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJUeXBvZ3JhcGh5IiwiTGlzdCIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1UZXh0IiwibW90aW9uIiwidXNlU2Nyb2xsIiwidXNlVHJhbnNmb3JtIiwiVGFibGVPZkNvbnRlbnRzIiwic2Nyb2xsWSIsInkiLCJtZW51SXRlbXMiLCJ0aXRsZSIsImxpbmsiLCJkaXYiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwid2lkdGgiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJzeCIsImJnY29sb3IiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJwIiwidmFyaWFudCIsImNvbXBvbmVudCIsImZvbnRXZWlnaHQiLCJtYiIsImJvcmRlckJvdHRvbSIsInBiIiwibWFwIiwiaXRlbSIsImluZGV4IiwieCIsImRlbGF5IiwiaHJlZiIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJwcmltYXJ5Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/TableOfContents.js\n"));

/***/ })

});