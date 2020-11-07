(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/book/pages/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/book/pages/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_AddBookModal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/AddBookModal.vue */ "./resources/js/book/components/AddBookModal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "BookIndex",
  components: {
    AddBook: _components_AddBookModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/book/components/AddBookModal.vue?vue&type=template&id=34e9b118&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/book/components/AddBookModal.vue?vue&type=template&id=34e9b118& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "button",
        {
          staticClass: "btn btn-primary",
          attrs: {
            type: "button",
            "data-toggle": "modal",
            "data-target": "#exampleModal"
          }
        },
        [_vm._v("\n            Add Book\n        ")]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "exampleModal",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "exampleModalLabel",
            "aria-hidden": "true"
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "modal-dialog modal-dialog-centered",
              attrs: { role: "document" }
            },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-header" }, [
                  _c(
                    "h5",
                    {
                      staticClass: "modal-title",
                      attrs: { id: "exampleModalLabel" }
                    },
                    [_vm._v("Modal title")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: {
                        type: "button",
                        "data-dismiss": "modal",
                        "aria-label": "Close"
                      }
                    },
                    [
                      _c("span", { attrs: { "aria-hidden": "true" } }, [
                        _vm._v("×")
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _vm._v("\n\t\t        ...\n\t\t      ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      attrs: { type: "button", "data-dismiss": "modal" }
                    },
                    [_vm._v("Close")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "button" }
                    },
                    [_vm._v("Save changes")]
                  )
                ])
              ])
            ]
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/book/pages/Index.vue?vue&type=template&id=7f2fd87f&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/book/pages/Index.vue?vue&type=template&id=7f2fd87f& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid mt--6" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col" }, [
        _c("div", { staticClass: "card" }, [
          _c(
            "div",
            { staticClass: "card-header border-0" },
            [
              _c("h3", { staticClass: "mb-0" }, [_vm._v("List of Tables")]),
              _vm._v(" "),
              _c("add-book")
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(0)
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "table-responsive" }, [
      _c("table", { staticClass: "table align-items-center table-flush" }, [
        _c("thead", { staticClass: "thead-light" }, [
          _c("tr", [
            _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
            _vm._v(" "),
            _c("th", { attrs: { scope: "col" } }, [_vm._v("Isbn")]),
            _vm._v(" "),
            _c("th", { attrs: { scope: "col" } }, [_vm._v("Page Numbers")]),
            _vm._v(" "),
            _c("th", { attrs: { scope: "col" } }, [_vm._v("Publishers")]),
            _vm._v(" "),
            _c("th", { attrs: { scope: "col" } })
          ])
        ]),
        _vm._v(" "),
        _c("tbody", [
          _c("tr", [
            _c("td", [_vm._v("One")]),
            _vm._v(" "),
            _c("td", [_vm._v("One")]),
            _vm._v(" "),
            _c("td", [_vm._v("One")]),
            _vm._v(" "),
            _c("td", [_vm._v("One")]),
            _vm._v(" "),
            _c("td")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/book/components/AddBookModal.vue":
/*!*******************************************************!*\
  !*** ./resources/js/book/components/AddBookModal.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddBookModal_vue_vue_type_template_id_34e9b118___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddBookModal.vue?vue&type=template&id=34e9b118& */ "./resources/js/book/components/AddBookModal.vue?vue&type=template&id=34e9b118&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _AddBookModal_vue_vue_type_template_id_34e9b118___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddBookModal_vue_vue_type_template_id_34e9b118___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/book/components/AddBookModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/book/components/AddBookModal.vue?vue&type=template&id=34e9b118&":
/*!**************************************************************************************!*\
  !*** ./resources/js/book/components/AddBookModal.vue?vue&type=template&id=34e9b118& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBookModal_vue_vue_type_template_id_34e9b118___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddBookModal.vue?vue&type=template&id=34e9b118& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/book/components/AddBookModal.vue?vue&type=template&id=34e9b118&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBookModal_vue_vue_type_template_id_34e9b118___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBookModal_vue_vue_type_template_id_34e9b118___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/book/pages/Index.vue":
/*!*******************************************!*\
  !*** ./resources/js/book/pages/Index.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_7f2fd87f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=7f2fd87f& */ "./resources/js/book/pages/Index.vue?vue&type=template&id=7f2fd87f&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/book/pages/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_7f2fd87f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_7f2fd87f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/book/pages/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/book/pages/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/book/pages/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/book/pages/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/book/pages/Index.vue?vue&type=template&id=7f2fd87f&":
/*!**************************************************************************!*\
  !*** ./resources/js/book/pages/Index.vue?vue&type=template&id=7f2fd87f& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7f2fd87f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=7f2fd87f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/book/pages/Index.vue?vue&type=template&id=7f2fd87f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7f2fd87f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7f2fd87f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);