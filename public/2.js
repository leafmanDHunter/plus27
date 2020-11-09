(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/book/components/DeleteBookModal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/book/components/DeleteBookModal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: 'DeleteBook',
  props: {
    book: {
      required: true,
      type: Object
    }
  },
  computed: {
    openModal: function openModal() {
      return $("#delete-book-".concat(this.book.id));
    }
  },
  methods: {
    open: function open() {
      this.openModal.modal('toggle');
    },
    submit: function submit() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$axios$delete, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios["delete"]("/api/book/".concat(_this.book.id, "/delete"));

              case 3:
                _yield$axios$delete = _context.sent;
                data = _yield$axios$delete.data;

                _this.$emit('isDeleted', data.book);

                _this.open();

                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/book/components/RestoreBookModal.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/book/components/RestoreBookModal.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: 'RestoreBook',
  props: {
    book: {
      required: true,
      type: Object
    }
  },
  computed: {
    openModal: function openModal() {
      return $("#restore-book-".concat(this.book.id));
    }
  },
  methods: {
    open: function open() {
      this.openModal.modal('toggle');
    },
    submit: function submit() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$axios$patch, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.patch("/api/book/".concat(_this.book.id, "/restore"));

              case 3:
                _yield$axios$patch = _context.sent;
                data = _yield$axios$patch.data;

                _this.$emit('isRestore', data.book_is_restored);

                _this.open();

                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/book/pages/Archive.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/book/pages/Archive.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_DeleteBookModal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/DeleteBookModal.vue */ "./resources/js/book/components/DeleteBookModal.vue");
/* harmony import */ var _components_RestoreBookModal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/RestoreBookModal.vue */ "./resources/js/book/components/RestoreBookModal.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: "BookArchive",
  components: {
    DeleteBook: _components_DeleteBookModal_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    RestoreBook: _components_RestoreBookModal_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      books: [],
      is_deleted: false,
      is_restored: false
    };
  },
  created: function created() {
    this.getBookArchives();
  },
  methods: {
    getBookArchives: function getBookArchives() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.get('/api/book/archive');

              case 3:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                _this.books = data.books;
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }))();
    },
    bookDeleted: function bookDeleted() {
      var _this2 = this;

      this.getBookArchives();
      this.is_deleted = !this.is_deleted;
      window.setTimeout(function () {
        _this2.is_deleted = !_this2.is_deleted;
      }, 1500);
    },
    bookRestored: function bookRestored() {
      var _this3 = this;

      this.getBookArchives();
      this.is_restored = !this.is_restored;
      window.setTimeout(function () {
        _this3.is_restored = !_this3.is_restored;
      }, 1500);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/book/components/DeleteBookModal.vue?vue&type=template&id=47fb7ad0&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/book/components/DeleteBookModal.vue?vue&type=template&id=47fb7ad0& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "button",
      {
        staticClass: "btn btn-outline-danger btn-sm",
        attrs: { type: "button", title: "Delete Book", "data-toggle": "modal" },
        on: {
          click: function($event) {
            $event.preventDefault()
            return _vm.open($event)
          }
        }
      },
      [_c("i", { staticClass: "ni ni-fat-remove" })]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "delete-book-" + _vm.book.id,
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "deleteBookModallLabel",
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
              _vm._m(0),
              _vm._v(" "),
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.submit($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "modal-body" }, [
                    _c("p", [
                      _vm._v("Are you sure you want to delete this "),
                      _c("br"),
                      _vm._v(
                        "\n\t\t      \t\t " + _vm._s(_vm.book.title) + " book "
                      ),
                      _c("strong", [_vm._v("permanently?")])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(1)
                ]
              )
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
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
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
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
        { staticClass: "btn btn-danger", attrs: { type: "submit" } },
        [_vm._v("Yes, Delete")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/book/components/RestoreBookModal.vue?vue&type=template&id=62bddbb2&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/book/components/RestoreBookModal.vue?vue&type=template&id=62bddbb2& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "button",
      {
        staticClass: "btn btn-outline-success btn-sm",
        attrs: {
          type: "button",
          title: "Restore Book",
          "data-toggle": "modal"
        },
        on: {
          click: function($event) {
            $event.preventDefault()
            return _vm.open($event)
          }
        }
      },
      [_c("i", { staticClass: "fas fa-trash-restore" })]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "restore-book-" + _vm.book.id,
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "restoreBookModallLabel",
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
              _vm._m(0),
              _vm._v(" "),
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.submit($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "modal-body" }, [
                    _c("p", [
                      _vm._v("Are you sure you want to restore this "),
                      _c("br"),
                      _vm._v(
                        "\n\t\t      \t\t " + _vm._s(_vm.book.title) + " book "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(1)
                ]
              )
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
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
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
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
        { staticClass: "btn btn-success", attrs: { type: "submit" } },
        [_vm._v("Yes, Restore")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/book/pages/Archive.vue?vue&type=template&id=bf6a31a2&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/book/pages/Archive.vue?vue&type=template&id=bf6a31a2& ***!
  \**********************************************************************************************************************************************************************************************************/
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
            {
              staticClass: "card-header border-0 d-flex justify-content-between"
            },
            [
              _c("h3", { staticClass: "mb-0" }, [
                _vm.books.length > 0
                  ? _c("span", [
                      _vm._v(
                        "\n\t\t\t\t\t\t\tList of Book Archives\n\t\t\t\t\t\t"
                      )
                    ])
                  : _c("span", { staticClass: "text-danger" }, [
                      _vm._v("No Record Found!")
                    ])
              ])
            ]
          ),
          _vm._v(" "),
          _vm.is_deleted
            ? _c(
                "div",
                {
                  staticClass:
                    "alert alert-danger font-weight-bold text-center",
                  attrs: { role: "alert" }
                },
                [_vm._v("Record Deleted!")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.is_restored
            ? _c(
                "div",
                {
                  staticClass:
                    "alert alert-success font-weight-bold text-center",
                  attrs: { role: "alert" }
                },
                [_vm._v("Record Restored!")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.books.length > 0
            ? _c("div", { staticClass: "table-responsive" }, [
                _c(
                  "table",
                  { staticClass: "table align-items-center table-flush" },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.books, function(book, index) {
                        return _c("tr", { key: index }, [
                          _c("td", [_vm._v(_vm._s(book.title))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(book.isbn))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(book.publisher))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(book.page_numbers))]),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "d-flex justify-content-around" },
                            [
                              _c("delete-book", {
                                attrs: { book: book },
                                on: { isDeleted: _vm.bookDeleted }
                              }),
                              _vm._v(" "),
                              _c("restore-book", {
                                attrs: { book: book },
                                on: { isRestore: _vm.bookRestored }
                              })
                            ],
                            1
                          )
                        ])
                      }),
                      0
                    )
                  ]
                )
              ])
            : _vm._e()
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
    return _c("thead", { staticClass: "thead-light" }, [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Isbn")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Publishers")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Page Numbers")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/book/components/DeleteBookModal.vue":
/*!**********************************************************!*\
  !*** ./resources/js/book/components/DeleteBookModal.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeleteBookModal_vue_vue_type_template_id_47fb7ad0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteBookModal.vue?vue&type=template&id=47fb7ad0& */ "./resources/js/book/components/DeleteBookModal.vue?vue&type=template&id=47fb7ad0&");
/* harmony import */ var _DeleteBookModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteBookModal.vue?vue&type=script&lang=js& */ "./resources/js/book/components/DeleteBookModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeleteBookModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeleteBookModal_vue_vue_type_template_id_47fb7ad0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DeleteBookModal_vue_vue_type_template_id_47fb7ad0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/book/components/DeleteBookModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/book/components/DeleteBookModal.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/book/components/DeleteBookModal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteBookModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DeleteBookModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/book/components/DeleteBookModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteBookModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/book/components/DeleteBookModal.vue?vue&type=template&id=47fb7ad0&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/book/components/DeleteBookModal.vue?vue&type=template&id=47fb7ad0& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteBookModal_vue_vue_type_template_id_47fb7ad0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DeleteBookModal.vue?vue&type=template&id=47fb7ad0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/book/components/DeleteBookModal.vue?vue&type=template&id=47fb7ad0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteBookModal_vue_vue_type_template_id_47fb7ad0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteBookModal_vue_vue_type_template_id_47fb7ad0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/book/components/RestoreBookModal.vue":
/*!***********************************************************!*\
  !*** ./resources/js/book/components/RestoreBookModal.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RestoreBookModal_vue_vue_type_template_id_62bddbb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RestoreBookModal.vue?vue&type=template&id=62bddbb2& */ "./resources/js/book/components/RestoreBookModal.vue?vue&type=template&id=62bddbb2&");
/* harmony import */ var _RestoreBookModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RestoreBookModal.vue?vue&type=script&lang=js& */ "./resources/js/book/components/RestoreBookModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RestoreBookModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RestoreBookModal_vue_vue_type_template_id_62bddbb2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RestoreBookModal_vue_vue_type_template_id_62bddbb2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/book/components/RestoreBookModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/book/components/RestoreBookModal.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/book/components/RestoreBookModal.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RestoreBookModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RestoreBookModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/book/components/RestoreBookModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RestoreBookModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/book/components/RestoreBookModal.vue?vue&type=template&id=62bddbb2&":
/*!******************************************************************************************!*\
  !*** ./resources/js/book/components/RestoreBookModal.vue?vue&type=template&id=62bddbb2& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RestoreBookModal_vue_vue_type_template_id_62bddbb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RestoreBookModal.vue?vue&type=template&id=62bddbb2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/book/components/RestoreBookModal.vue?vue&type=template&id=62bddbb2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RestoreBookModal_vue_vue_type_template_id_62bddbb2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RestoreBookModal_vue_vue_type_template_id_62bddbb2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/book/pages/Archive.vue":
/*!*********************************************!*\
  !*** ./resources/js/book/pages/Archive.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Archive_vue_vue_type_template_id_bf6a31a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Archive.vue?vue&type=template&id=bf6a31a2& */ "./resources/js/book/pages/Archive.vue?vue&type=template&id=bf6a31a2&");
/* harmony import */ var _Archive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Archive.vue?vue&type=script&lang=js& */ "./resources/js/book/pages/Archive.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Archive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Archive_vue_vue_type_template_id_bf6a31a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Archive_vue_vue_type_template_id_bf6a31a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/book/pages/Archive.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/book/pages/Archive.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/book/pages/Archive.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Archive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Archive.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/book/pages/Archive.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Archive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/book/pages/Archive.vue?vue&type=template&id=bf6a31a2&":
/*!****************************************************************************!*\
  !*** ./resources/js/book/pages/Archive.vue?vue&type=template&id=bf6a31a2& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Archive_vue_vue_type_template_id_bf6a31a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Archive.vue?vue&type=template&id=bf6a31a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/book/pages/Archive.vue?vue&type=template&id=bf6a31a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Archive_vue_vue_type_template_id_bf6a31a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Archive_vue_vue_type_template_id_bf6a31a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);