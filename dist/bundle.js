/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/** ****/ (() => {
  // webpackBootstrap
  /** ****/ let __webpack_modules__ = {
    /***/ "./src/index.ts":
      /* !**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
      /***/ () => {
        eval(
          'var HANDLE_EVENT = "app.record.create.show";\nkintone.events.on(HANDLE_EVENT, function (event) {\n  event.record.正解.value = "bbbb";\n  return event;\n});\n\n//# sourceURL=webpack://kintonetsdev/./src/index.ts?'
        );

        /***/
      },

    /** ****/
  };
  /** **********************************************************************/
  /** ****/
  /** ****/ // startup
  /** ****/ // Load entry module and return exports
  /** ****/ // This entry module can't be inlined because the eval devtool is used.
  /** ****/ let __webpack_exports__ = {};
  /** ****/ __webpack_modules__["./src/index.ts"]();
  /** ****/
  /** ****/
})();
