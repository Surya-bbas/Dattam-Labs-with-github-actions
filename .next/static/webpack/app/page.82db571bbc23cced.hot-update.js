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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_List_ListItem_ListItemText_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,List,ListItem,ListItemText,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_List_ListItem_ListItemText_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,List,ListItem,ListItemText,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_List_ListItem_ListItemText_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Box,List,ListItem,ListItemText,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/List/List.js\");\n/* harmony import */ var _barrel_optimize_names_Box_List_ListItem_ListItemText_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Box,List,ListItem,ListItemText,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/ListItem/ListItem.js\");\n/* harmony import */ var _barrel_optimize_names_Box_List_ListItem_ListItemText_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Box,List,ListItem,ListItemText,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/ListItemText/ListItemText.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst TableOfContents = ()=>{\n    _s();\n    const { scrollY } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll)();\n    // Create a parallax effect by transforming the Y position\n    // The division factor (3) controls the parallax intensity\n    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform)(scrollY, [\n        500,\n        1000\n    ], [\n        0,\n        100\n    ] // Output range (transform values)\n    );\n    const menuItems = [\n        {\n            title: 'Introduction',\n            link: '#introduction'\n        },\n        {\n            title: 'Getting Started',\n            link: '#getting-started'\n        },\n        {\n            title: 'Advanced Topics',\n            link: '#advanced-topics'\n        },\n        {\n            title: 'Best Practices',\n            link: '#best-practices'\n        },\n        {\n            title: 'Conclusion',\n            link: '#conclusion'\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        style: {\n            y,\n            position: 'sticky',\n            top: 500,\n            width: '100%'\n        },\n        initial: {\n            opacity: 0,\n            y: 20\n        },\n        animate: {\n            opacity: 1,\n            y: 0\n        },\n        transition: {\n            duration: 0.5\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_List_ListItem_ListItemText_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            sx: {\n                width: '100%',\n                bgcolor: 'background.paper',\n                borderRadius: 2,\n                boxShadow: '0 0 10px rgba(0,0,0,0.1)',\n                p: 2\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_List_ListItem_ListItemText_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    variant: \"h6\",\n                    component: \"h2\",\n                    sx: {\n                        fontWeight: 'bold',\n                        mb: 2,\n                        borderBottom: '2px solid #eaeaea',\n                        pb: 1\n                    },\n                    children: \"Table of Contents\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Dattam Labs next.js\\\\material-ui-nextjs\\\\src\\\\components\\\\TableOfContents.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_List_ListItem_ListItemText_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    component: \"nav\",\n                    sx: {\n                        p: 0\n                    },\n                    children: menuItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                            initial: {\n                                opacity: 0,\n                                x: -20\n                            },\n                            animate: {\n                                opacity: 1,\n                                x: 0\n                            },\n                            transition: {\n                                duration: 0.3,\n                                delay: index * 0.1\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_List_ListItem_ListItemText_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                component: \"a\",\n                                href: item.link,\n                                sx: {\n                                    p: 1,\n                                    '&:hover': {\n                                        bgcolor: 'rgba(0, 0, 0, 0.04)',\n                                        borderRadius: 1\n                                    },\n                                    textDecoration: 'none',\n                                    color: 'inherit'\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_List_ListItem_ListItemText_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    primary: item.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Dattam Labs next.js\\\\material-ui-nextjs\\\\src\\\\components\\\\TableOfContents.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Dattam Labs next.js\\\\material-ui-nextjs\\\\src\\\\components\\\\TableOfContents.js\",\n                                lineNumber: 64,\n                                columnNumber: 15\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Dattam Labs next.js\\\\material-ui-nextjs\\\\src\\\\components\\\\TableOfContents.js\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Dattam Labs next.js\\\\material-ui-nextjs\\\\src\\\\components\\\\TableOfContents.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Dattam Labs next.js\\\\material-ui-nextjs\\\\src\\\\components\\\\TableOfContents.js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\Dattam Labs next.js\\\\material-ui-nextjs\\\\src\\\\components\\\\TableOfContents.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TableOfContents, \"sZC7D7RRTAF+ZcJsaIkRSEitHwo=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform\n    ];\n});\n_c = TableOfContents;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableOfContents);\nvar _c;\n$RefreshReg$(_c, \"TableOfContents\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1RhYmxlT2ZDb250ZW50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUMrQztBQUNkO0FBRWhFLE1BQU1TLGtCQUFrQjs7SUFDdEIsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBR0gsd0RBQVNBO0lBRTdCLDBEQUEwRDtJQUMxRCwwREFBMEQ7SUFDMUQsTUFBTUksSUFBSUgsMkRBQVlBLENBQUNFLFNBQ3JCO1FBQUM7UUFBSztLQUFLLEVBQ1g7UUFBQztRQUFHO0tBQUksQ0FBRSxrQ0FBa0M7O0lBRzlDLE1BQU1FLFlBQVk7UUFDaEI7WUFBRUMsT0FBTztZQUFnQkMsTUFBTTtRQUFnQjtRQUMvQztZQUFFRCxPQUFPO1lBQW1CQyxNQUFNO1FBQW1CO1FBQ3JEO1lBQUVELE9BQU87WUFBbUJDLE1BQU07UUFBbUI7UUFDckQ7WUFBRUQsT0FBTztZQUFrQkMsTUFBTTtRQUFrQjtRQUNuRDtZQUFFRCxPQUFPO1lBQWNDLE1BQU07UUFBYztLQUM1QztJQUVELHFCQUNFLDhEQUFDUixpREFBTUEsQ0FBQ1MsR0FBRztRQUNUQyxPQUFPO1lBQ0xMO1lBQ0FNLFVBQVU7WUFDVkMsS0FBSztZQUNMQyxPQUFPO1FBQ1Q7UUFDQUMsU0FBUztZQUFFQyxTQUFTO1lBQUdWLEdBQUc7UUFBRztRQUM3QlcsU0FBUztZQUFFRCxTQUFTO1lBQUdWLEdBQUc7UUFBRTtRQUM1QlksWUFBWTtZQUFFQyxVQUFVO1FBQUk7a0JBRTVCLDRFQUFDdkIscUhBQUdBO1lBQ0Z3QixJQUFJO2dCQUNGTixPQUFPO2dCQUNQTyxTQUFTO2dCQUNUQyxjQUFjO2dCQUNkQyxXQUFXO2dCQUNYQyxHQUFHO1lBQ0w7OzhCQUVBLDhEQUFDM0IscUhBQVVBO29CQUNUNEIsU0FBUTtvQkFDUkMsV0FBVTtvQkFDVk4sSUFBSTt3QkFDRk8sWUFBWTt3QkFDWkMsSUFBSTt3QkFDSkMsY0FBYzt3QkFDZEMsSUFBSTtvQkFDTjs4QkFDRDs7Ozs7OzhCQUdELDhEQUFDaEMscUhBQUlBO29CQUFDNEIsV0FBVTtvQkFBTU4sSUFBSTt3QkFBRUksR0FBRztvQkFBRTs4QkFDOUJqQixVQUFVd0IsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNwQiw4REFBQ2hDLGlEQUFNQSxDQUFDUyxHQUFHOzRCQUVUSyxTQUFTO2dDQUFFQyxTQUFTO2dDQUFHa0IsR0FBRyxDQUFDOzRCQUFHOzRCQUM5QmpCLFNBQVM7Z0NBQUVELFNBQVM7Z0NBQUdrQixHQUFHOzRCQUFFOzRCQUM1QmhCLFlBQVk7Z0NBQUVDLFVBQVU7Z0NBQUtnQixPQUFPRixRQUFROzRCQUFJO3NDQUVoRCw0RUFBQ2xDLHFIQUFRQTtnQ0FDUDJCLFdBQVU7Z0NBQ1ZVLE1BQU1KLEtBQUt2QixJQUFJO2dDQUNmVyxJQUFJO29DQUNGSSxHQUFHO29DQUNILFdBQVc7d0NBQ1RILFNBQVM7d0NBQ1RDLGNBQWM7b0NBQ2hCO29DQUNBZSxnQkFBZ0I7b0NBQ2hCQyxPQUFPO2dDQUNUOzBDQUVBLDRFQUFDdEMscUhBQVlBO29DQUFDdUMsU0FBU1AsS0FBS3hCLEtBQUs7Ozs7Ozs7Ozs7OzJCQWxCOUJ5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJuQjtHQWhGTTdCOztRQUNnQkYsb0RBQVNBO1FBSW5CQyx1REFBWUE7OztLQUxsQkM7QUFrRk4saUVBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWRtaW5cXERlc2t0b3BcXERhdHRhbSBMYWJzIG5leHQuanNcXG1hdGVyaWFsLXVpLW5leHRqc1xcc3JjXFxjb21wb25lbnRzXFxUYWJsZU9mQ29udGVudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIFR5cG9ncmFwaHksIExpc3QsIExpc3RJdGVtLCBMaXN0SXRlbVRleHQgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IHsgbW90aW9uLCB1c2VTY3JvbGwsIHVzZVRyYW5zZm9ybSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5cclxuY29uc3QgVGFibGVPZkNvbnRlbnRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgc2Nyb2xsWSB9ID0gdXNlU2Nyb2xsKCk7XHJcbiAgXHJcbiAgLy8gQ3JlYXRlIGEgcGFyYWxsYXggZWZmZWN0IGJ5IHRyYW5zZm9ybWluZyB0aGUgWSBwb3NpdGlvblxyXG4gIC8vIFRoZSBkaXZpc2lvbiBmYWN0b3IgKDMpIGNvbnRyb2xzIHRoZSBwYXJhbGxheCBpbnRlbnNpdHlcclxuICBjb25zdCB5ID0gdXNlVHJhbnNmb3JtKHNjcm9sbFksIFxyXG4gICAgWzUwMCwgMTAwMF0sIC8vIElucHV0IHJhbmdlIChzY3JvbGwgdmFsdWVzKVxyXG4gICAgWzAsIDEwMF0gIC8vIE91dHB1dCByYW5nZSAodHJhbnNmb3JtIHZhbHVlcylcclxuICApO1xyXG5cclxuICBjb25zdCBtZW51SXRlbXMgPSBbXHJcbiAgICB7IHRpdGxlOiAnSW50cm9kdWN0aW9uJywgbGluazogJyNpbnRyb2R1Y3Rpb24nIH0sXHJcbiAgICB7IHRpdGxlOiAnR2V0dGluZyBTdGFydGVkJywgbGluazogJyNnZXR0aW5nLXN0YXJ0ZWQnIH0sXHJcbiAgICB7IHRpdGxlOiAnQWR2YW5jZWQgVG9waWNzJywgbGluazogJyNhZHZhbmNlZC10b3BpY3MnIH0sXHJcbiAgICB7IHRpdGxlOiAnQmVzdCBQcmFjdGljZXMnLCBsaW5rOiAnI2Jlc3QtcHJhY3RpY2VzJyB9LFxyXG4gICAgeyB0aXRsZTogJ0NvbmNsdXNpb24nLCBsaW5rOiAnI2NvbmNsdXNpb24nIH1cclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICB5LFxyXG4gICAgICAgIHBvc2l0aW9uOiAnc3RpY2t5JyxcclxuICAgICAgICB0b3A6IDUwMCwgLy8gQWRqdXN0IGJhc2VkIG9uIG5hdmJhciBoZWlnaHRcclxuICAgICAgICB3aWR0aDogJzEwMCUnXHJcbiAgICAgIH19XHJcbiAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cclxuICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XHJcbiAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxyXG4gICAgPlxyXG4gICAgICA8Qm94IFxyXG4gICAgICAgIHN4PXt7IFxyXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogMixcclxuICAgICAgICAgIGJveFNoYWRvdzogJzAgMCAxMHB4IHJnYmEoMCwwLDAsMC4xKScsXHJcbiAgICAgICAgICBwOiAyXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgY29tcG9uZW50PVwiaDJcIlxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgICAgICBtYjogMixcclxuICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnMnB4IHNvbGlkICNlYWVhZWEnLFxyXG4gICAgICAgICAgICBwYjogMVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBUYWJsZSBvZiBDb250ZW50c1xyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8TGlzdCBjb21wb25lbnQ9XCJuYXZcIiBzeD17eyBwOiAwIH19PlxyXG4gICAgICAgICAge21lbnVJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHg6IC0yMCB9fVxyXG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeDogMCB9fVxyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMywgZGVsYXk6IGluZGV4ICogMC4xIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxyXG4gICAgICAgICAgICAgICAgaHJlZj17aXRlbS5saW5rfVxyXG4gICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgcDogMSxcclxuICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4wNCknLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ2luaGVyaXQnXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17aXRlbS50aXRsZX0gLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZU9mQ29udGVudHM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIlR5cG9ncmFwaHkiLCJMaXN0IiwiTGlzdEl0ZW0iLCJMaXN0SXRlbVRleHQiLCJtb3Rpb24iLCJ1c2VTY3JvbGwiLCJ1c2VUcmFuc2Zvcm0iLCJUYWJsZU9mQ29udGVudHMiLCJzY3JvbGxZIiwieSIsIm1lbnVJdGVtcyIsInRpdGxlIiwibGluayIsImRpdiIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJ3aWR0aCIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInN4IiwiYmdjb2xvciIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsInAiLCJ2YXJpYW50IiwiY29tcG9uZW50IiwiZm9udFdlaWdodCIsIm1iIiwiYm9yZGVyQm90dG9tIiwicGIiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ4IiwiZGVsYXkiLCJocmVmIiwidGV4dERlY29yYXRpb24iLCJjb2xvciIsInByaW1hcnkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/TableOfContents.js\n"));

/***/ })

});