(function () {
  "use strict";

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkmoonlight"] = self["webpackChunkmoonlight"] || []).push([["src_app_dashboard_dashboard_module_ts"], {
    /***/
    63877: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Toast": function Toast() {
          return (
            /* binding */
            _Toast
          );
        },

        /* harmony export */
        "ToastItem": function ToastItem() {
          return (
            /* binding */
            _ToastItem
          );
        },

        /* harmony export */
        "ToastModule": function ToastModule() {
          return (
            /* binding */
            _ToastModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! primeng/dom */
      57952);
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! primeng/api */
      46976);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/animations */
      97175);

      var _c0 = ["container"];

      function ToastItem_a_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastItem_a_3_Template_a_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.onCloseIconClick($event);
          })("keydown.enter", function ToastItem_a_3_Template_a_keydown_enter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.onCloseIconClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1(a0, a1, a2, a3) {
        return {
          "pi-info-circle": a0,
          "pi-exclamation-triangle": a1,
          "pi-times-circle": a2,
          "pi-check": a3
        };
      };

      function ToastItem_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](3, _c1, ctx_r2.message.severity == "info", ctx_r2.message.severity == "warn", ctx_r2.message.severity == "error", ctx_r2.message.severity == "success"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.message.summary);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.message.detail);
        }
      }

      function ToastItem_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      var _c2 = function _c2(a0, a1, a2, a3) {
        return {
          showTransformParams: a0,
          hideTransformParams: a1,
          showTransitionParams: a2,
          hideTransitionParams: a3
        };
      };

      var _c3 = function _c3(a1) {
        return {
          value: "visible",
          params: a1
        };
      };

      var _c4 = function _c4(a0, a1, a2, a3) {
        return {
          "ui-toast-message-info": a0,
          "ui-toast-message-warn": a1,
          "ui-toast-message-error": a2,
          "ui-toast-message-success": a3
        };
      };

      var _c5 = function _c5(a0) {
        return {
          $implicit: a0
        };
      };

      function Toast_p_toastItem_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-toastItem", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClose", function Toast_p_toastItem_2_Template_p_toastItem_onClose_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.onMessageClose($event);
          })("@toastAnimation.start", function Toast_p_toastItem_2_Template_p_toastItem_animation_toastAnimation_start_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.onAnimationStart($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var msg_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", msg_r2)("index", i_r3)("template", ctx_r1.template)("@toastAnimation", undefined)("showTransformOptions", ctx_r1.showTransformOptions)("hideTransformOptions", ctx_r1.hideTransformOptions)("showTransitionOptions", ctx_r1.showTransitionOptions)("hideTransitionOptions", ctx_r1.hideTransitionOptions);
        }
      }

      var _c6 = function _c6(a1, a2, a3, a4, a5, a6, a7) {
        return {
          "ui-toast ui-widget": true,
          "ui-toast-top-right": a1,
          "ui-toast-top-left": a2,
          "ui-toast-bottom-right": a3,
          "ui-toast-bottom-left": a4,
          "ui-toast-top-center": a5,
          "ui-toast-bottom-center": a6,
          "ui-toast-center": a7
        };
      };

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var _ToastItem = /*#__PURE__*/function () {
        function ToastItem(zone) {
          _classCallCheck(this, ToastItem);

          this.zone = zone;
          this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(ToastItem, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.initTimeout();
          }
        }, {
          key: "initTimeout",
          value: function initTimeout() {
            var _this = this;

            if (!this.message.sticky) {
              this.zone.runOutsideAngular(function () {
                _this.timeout = setTimeout(function () {
                  _this.onClose.emit({
                    index: _this.index,
                    message: _this.message
                  });
                }, _this.message.life || 3000);
              });
            }
          }
        }, {
          key: "clearTimeout",
          value: function (_clearTimeout) {
            function clearTimeout() {
              return _clearTimeout.apply(this, arguments);
            }

            clearTimeout.toString = function () {
              return _clearTimeout.toString();
            };

            return clearTimeout;
          }(function () {
            if (this.timeout) {
              clearTimeout(this.timeout);
              this.timeout = null;
            }
          })
        }, {
          key: "onMouseEnter",
          value: function onMouseEnter() {
            this.clearTimeout();
          }
        }, {
          key: "onMouseLeave",
          value: function onMouseLeave() {
            this.initTimeout();
          }
        }, {
          key: "onCloseIconClick",
          value: function onCloseIconClick(event) {
            this.clearTimeout();
            this.onClose.emit({
              index: this.index,
              message: this.message
            });
            event.preventDefault();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.clearTimeout();
          }
        }]);

        return ToastItem;
      }();

      _ToastItem.ɵfac = function ToastItem_Factory(t) {
        return new (t || _ToastItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
      };

      _ToastItem.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ToastItem,
        selectors: [["p-toastItem"]],
        viewQuery: function ToastItem_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
          }
        },
        inputs: {
          message: "message",
          index: "index",
          template: "template",
          showTransformOptions: "showTransformOptions",
          hideTransformOptions: "hideTransformOptions",
          showTransitionOptions: "showTransitionOptions",
          hideTransitionOptions: "hideTransitionOptions"
        },
        outputs: {
          onClose: "onClose"
        },
        decls: 6,
        vars: 21,
        consts: [["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "ui-toast-message", "ui-shadow", 3, "ngClass", "mouseenter", "mouseleave"], ["container", ""], [1, "ui-toast-message-content"], ["tabindex", "0", "class", "ui-toast-close-icon pi pi-times", 3, "click", "keydown.enter", 4, "ngIf"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "0", 1, "ui-toast-close-icon", "pi", "pi-times", 3, "click", "keydown.enter"], [1, "ui-toast-icon", "pi", 3, "ngClass"], [1, "ui-toast-message-text-content"], [1, "ui-toast-summary"], [1, "ui-toast-detail"]],
        template: function ToastItem_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ToastItem_Template_div_mouseenter_0_listener() {
              return ctx.onMouseEnter();
            })("mouseleave", function ToastItem_Template_div_mouseleave_0_listener() {
              return ctx.onMouseLeave();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ToastItem_a_3_Template, 1, 0, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ToastItem_ng_container_4_Template, 7, 8, "ng-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ToastItem_ng_container_5_Template, 1, 0, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@messageState", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](7, _c2, ctx.showTransformOptions, ctx.hideTransformOptions, ctx.showTransitionOptions, ctx.hideTransitionOptions)))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](14, _c4, ctx.message.severity == "info", ctx.message.severity == "warn", ctx.message.severity == "error", ctx.message.severity == "success"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.message.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message.closable !== false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.template);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c5, ctx.message));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet],
        encapsulation: 2,
        data: {
          animation: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('messageState', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('visible', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
            transform: 'translateY(0)',
            opacity: 1
          })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('void => *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
            transform: '{{showTransformParams}}',
            opacity: 0
          }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{showTransitionParams}}')]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('* => void', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{hideTransitionParams}}', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
            height: 0,
            opacity: 0,
            transform: '{{hideTransformParams}}'
          }))])])]
        }
      });

      _ToastItem.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }];
      };

      __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _ToastItem.prototype, "message", void 0);

      __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _ToastItem.prototype, "index", void 0);

      __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _ToastItem.prototype, "template", void 0);

      __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _ToastItem.prototype, "showTransformOptions", void 0);

      __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _ToastItem.prototype, "hideTransformOptions", void 0);

      __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _ToastItem.prototype, "showTransitionOptions", void 0);

      __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _ToastItem.prototype, "hideTransitionOptions", void 0);

      __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()], _ToastItem.prototype, "onClose", void 0);

      __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild)('container')], _ToastItem.prototype, "containerViewChild", void 0);

      var _Toast = /*#__PURE__*/function () {
        function Toast(messageService, cd) {
          _classCallCheck(this, Toast);

          this.messageService = messageService;
          this.cd = cd;
          this.autoZIndex = true;
          this.baseZIndex = 0;
          this.position = 'top-right';
          this.preventOpenDuplicates = false;
          this.preventDuplicates = false;
          this.showTransformOptions = 'translateY(100%)';
          this.hideTransformOptions = 'translateY(-100%)';
          this.showTransitionOptions = '300ms ease-out';
          this.hideTransitionOptions = '250ms ease-in';
          this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(Toast, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.messageSubscription = this.messageService.messageObserver.subscribe(function (messages) {
              if (messages) {
                if (messages instanceof Array) {
                  var filteredMessages = messages.filter(function (m) {
                    return _this2.canAdd(m);
                  });

                  _this2.add(filteredMessages);
                } else if (_this2.canAdd(messages)) {
                  _this2.add([messages]);
                }

                if (_this2.modal && _this2.messages && _this2.messages.length) {
                  _this2.enableModality();
                }
              }
            });
            this.clearSubscription = this.messageService.clearObserver.subscribe(function (key) {
              if (key) {
                if (_this2.key === key) {
                  _this2.messages = null;
                }
              } else {
                _this2.messages = null;
              }

              if (_this2.modal) {
                _this2.disableModality();
              }
            });
          }
        }, {
          key: "add",
          value: function add(messages) {
            this.messages = this.messages ? [].concat(_toConsumableArray(this.messages), _toConsumableArray(messages)) : _toConsumableArray(messages);

            if (this.preventDuplicates) {
              this.messagesArchieve = this.messagesArchieve ? [].concat(_toConsumableArray(this.messagesArchieve), _toConsumableArray(messages)) : _toConsumableArray(messages);
            }
          }
        }, {
          key: "canAdd",
          value: function canAdd(message) {
            var allow = this.key === message.key;

            if (allow && this.preventOpenDuplicates) {
              allow = !this.containsMessage(this.messages, message);
            }

            if (allow && this.preventDuplicates) {
              allow = !this.containsMessage(this.messagesArchieve, message);
            }

            return allow;
          }
        }, {
          key: "containsMessage",
          value: function containsMessage(collection, message) {
            if (!collection) {
              return false;
            }

            return collection.find(function (m) {
              return m.summary === message.summary && m.detail == message.detail && m.severity === message.severity;
            }) != null;
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this3 = this;

            this.templates.forEach(function (item) {
              switch (item.getType()) {
                case 'message':
                  _this3.template = item.template;
                  break;

                default:
                  _this3.template = item.template;
                  break;
              }
            });
          }
        }, {
          key: "onMessageClose",
          value: function onMessageClose(event) {
            this.messages.splice(event.index, 1);

            if (this.messages.length === 0) {
              this.disableModality();
            }

            this.onClose.emit({
              message: event.message
            });
            this.cd.detectChanges();
          }
        }, {
          key: "enableModality",
          value: function enableModality() {
            if (!this.mask) {
              this.mask = document.createElement('div');
              this.mask.style.zIndex = String(parseInt(this.containerViewChild.nativeElement.style.zIndex) - 1);
              this.mask.style.display = 'block';
              var maskStyleClass = 'ui-widget-overlay ui-dialog-mask';
              primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addMultipleClasses(this.mask, maskStyleClass);
              document.body.appendChild(this.mask);
            }
          }
        }, {
          key: "disableModality",
          value: function disableModality() {
            if (this.mask) {
              document.body.removeChild(this.mask);
              this.mask = null;
            }
          }
        }, {
          key: "onAnimationStart",
          value: function onAnimationStart(event) {
            if (event.fromState === 'void' && this.autoZIndex) {
              this.containerViewChild.nativeElement.style.zIndex = String(this.baseZIndex + ++primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.zindex);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.messageSubscription) {
              this.messageSubscription.unsubscribe();
            }

            if (this.clearSubscription) {
              this.clearSubscription.unsubscribe();
            }

            this.disableModality();
          }
        }]);

        return Toast;
      }();

      _Toast.ɵfac = function Toast_Factory(t) {
        return new (t || _Toast)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
      };

      _Toast.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _Toast,
        selectors: [["p-toast"]],
        contentQueries: function Toast_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, 4);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
          }
        },
        viewQuery: function Toast_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
          }
        },
        inputs: {
          autoZIndex: "autoZIndex",
          baseZIndex: "baseZIndex",
          position: "position",
          preventOpenDuplicates: "preventOpenDuplicates",
          preventDuplicates: "preventDuplicates",
          showTransformOptions: "showTransformOptions",
          hideTransformOptions: "hideTransformOptions",
          showTransitionOptions: "showTransitionOptions",
          hideTransitionOptions: "hideTransitionOptions",
          key: "key",
          style: "style",
          styleClass: "styleClass",
          modal: "modal"
        },
        outputs: {
          onClose: "onClose"
        },
        decls: 3,
        vars: 13,
        consts: [[3, "ngClass", "ngStyle"], ["container", ""], [3, "message", "index", "template", "showTransformOptions", "hideTransformOptions", "showTransitionOptions", "hideTransitionOptions", "onClose", 4, "ngFor", "ngForOf"], [3, "message", "index", "template", "showTransformOptions", "hideTransformOptions", "showTransitionOptions", "hideTransitionOptions", "onClose"]],
        template: function Toast_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Toast_p_toastItem_2_Template, 1, 8, "p-toastItem", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction7"](5, _c6, ctx.position === "top-right", ctx.position === "top-left", ctx.position === "bottom-right", ctx.position === "bottom-left", ctx.position === "top-center", ctx.position === "bottom-center", ctx.position === "center"))("ngStyle", ctx.style);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _ToastItem],
        encapsulation: 2,
        data: {
          animation: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('toastAnimation', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':enter, :leave', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)('@*', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.animateChild)())])])]
        }
      });

      _Toast.ctorParameters = function () {
        return [{
          type: primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }];
      };

      __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _Toast.prototype, "key", void 0);

      __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _Toast.prototype, "autoZIndex", void 0);

      __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _Toast.prototype, "baseZIndex", void 0);

      __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _Toast.prototype, "style", void 0);

      __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _Toast.prototype, "styleClass", void 0);

      __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _Toast.prototype, "position", void 0);

      __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _Toast.prototype, "modal", void 0);

      __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _Toast.prototype, "preventOpenDuplicates", void 0);

      __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _Toast.prototype, "preventDuplicates", void 0);

      __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _Toast.prototype, "showTransformOptions", void 0);

      __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _Toast.prototype, "hideTransformOptions", void 0);

      __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _Toast.prototype, "showTransitionOptions", void 0);

      __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _Toast.prototype, "hideTransitionOptions", void 0);

      __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()], _Toast.prototype, "onClose", void 0);

      __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild)('container')], _Toast.prototype, "containerViewChild", void 0);

      __decorate([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren)(primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate)], _Toast.prototype, "templates", void 0);

      var _ToastModule = function ToastModule() {
        _classCallCheck(this, ToastModule);
      };

      _ToastModule.ɵfac = function ToastModule_Factory(t) {
        return new (t || _ToastModule)();
      };

      _ToastModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _ToastModule
      });
      _ToastModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule], primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ToastItem, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'p-toastItem',
            template: "\n        <div #container [attr.id]=\"message.id\" class=\"ui-toast-message ui-shadow\" [@messageState]=\"{value: 'visible', params: {showTransformParams: showTransformOptions, hideTransformParams: hideTransformOptions, showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\"\n            [ngClass]=\"{'ui-toast-message-info': message.severity == 'info','ui-toast-message-warn': message.severity == 'warn',\n                'ui-toast-message-error': message.severity == 'error','ui-toast-message-success': message.severity == 'success'}\"\n                (mouseenter)=\"onMouseEnter()\" (mouseleave)=\"onMouseLeave()\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\n            <div class=\"ui-toast-message-content\">\n                <a tabindex=\"0\" class=\"ui-toast-close-icon pi pi-times\" (click)=\"onCloseIconClick($event)\" (keydown.enter)=\"onCloseIconClick($event)\" *ngIf=\"message.closable !== false\"></a>\n                <ng-container *ngIf=\"!template\">\n                    <span class=\"ui-toast-icon pi\"\n                        [ngClass]=\"{'pi-info-circle': message.severity == 'info', 'pi-exclamation-triangle': message.severity == 'warn',\n                            'pi-times-circle': message.severity == 'error', 'pi-check' :message.severity == 'success'}\"></span>\n                    <div class=\"ui-toast-message-text-content\">\n                        <div class=\"ui-toast-summary\">{{message.summary}}</div>\n                        <div class=\"ui-toast-detail\">{{message.detail}}</div>\n                    </div>\n                </ng-container>\n                <ng-container *ngTemplateOutlet=\"template; context: {$implicit: message}\"></ng-container>\n            </div>\n        </div>\n    ",
            animations: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('messageState', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('visible', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
              transform: 'translateY(0)',
              opacity: 1
            })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('void => *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
              transform: '{{showTransformParams}}',
              opacity: 0
            }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{showTransitionParams}}')]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('* => void', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('{{hideTransitionParams}}', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
              height: 0,
              opacity: 0,
              transform: '{{hideTransformParams}}'
            }))])])]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }];
        }, {
          onClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          showTransformOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          hideTransformOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          showTransitionOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          hideTransitionOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          containerViewChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['container']
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_Toast, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'p-toast',
            template: "\n        <div #container [ngClass]=\"{'ui-toast ui-widget': true, \n                'ui-toast-top-right': position === 'top-right',\n                'ui-toast-top-left': position === 'top-left',\n                'ui-toast-bottom-right': position === 'bottom-right',\n                'ui-toast-bottom-left': position === 'bottom-left',\n                'ui-toast-top-center': position === 'top-center',\n                'ui-toast-bottom-center': position === 'bottom-center',\n                'ui-toast-center': position === 'center'}\" \n                [ngStyle]=\"style\" [class]=\"styleClass\">\n            <p-toastItem *ngFor=\"let msg of messages; let i=index\" [message]=\"msg\" [index]=\"i\" (onClose)=\"onMessageClose($event)\"\n                    [template]=\"template\" @toastAnimation (@toastAnimation.start)=\"onAnimationStart($event)\" \n                    [showTransformOptions]=\"showTransformOptions\" [hideTransformOptions]=\"hideTransformOptions\" \n                    [showTransitionOptions]=\"showTransitionOptions\" [hideTransitionOptions]=\"hideTransitionOptions\"></p-toastItem>\n        </div>\n    ",
            animations: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('toastAnimation', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':enter, :leave', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)('@*', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.animateChild)())])])],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default
          }]
        }], function () {
          return [{
            type: primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }];
        }, {
          autoZIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          baseZIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          preventOpenDuplicates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          preventDuplicates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          showTransformOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          hideTransformOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          showTransitionOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          hideTransitionOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          onClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          key: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          styleClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          modal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          containerViewChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['container']
          }],
          templates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate]
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ToastModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
            exports: [_Toast, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule],
            declarations: [_Toast, _ToastItem]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_ToastModule, {
          declarations: function declarations() {
            return [_Toast, _ToastItem];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule];
          },
          exports: function exports() {
            return [_Toast, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule];
          }
        });
      })();
      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    66936: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HOME_MESSAGES": function HOME_MESSAGES() {
          return (
            /* binding */
            _HOME_MESSAGES
          );
        }
        /* harmony export */

      });

      var _HOME_MESSAGES = [{
        title: 'Ela',
        content: 'Hey, what are you up to?',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
      }, {
        title: 'Adam',
        content: 'Just exploring Moonlight, this app is insane!',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
      }, {
        title: 'Ela',
        content: 'Moonlight? What’s that?',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
      }, {
        title: 'Adam',
        content: 'It’s where creators bring stories to life and readers become part of them. The most immersive storytelling app ever.',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
      }, {
        title: 'Ela',
        content: 'Sounds cool! But what makes it different?',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
      }, {
        title: 'Adam',
        content: 'Interactive content, incredible creator tools, and even stats showing what readers choose in your stories. Oh, and it’s fast—native apps, no lag!',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
      }, {
        title: 'Ela',
        content: 'Wow, can creators make money too?',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
      }, {
        title: 'Adam',
        content: 'Absolutely! Creators earn $ML tokens for their content—direct tips, premium purchases, you name it. NFTs? You can even mint parts of your story!',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
      }, {
        title: 'Ela',
        content: 'NFTs for content?! That’s next-level. Feels like creators’ turn, like designers with NFT art last year.',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
      }, {
        title: 'Adam',
        content: 'Exactly! Moonlight is like the future of storytelling—high-tech, creator-first, and powered by AI tools for writing. Our team has already built apps for millions of users!',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
      }, {
        title: 'Ela',
        content: 'AI? Tell me more!',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
      }, {
        title: 'Adam',
        content: 'There’s a custom LLM behind it. It helps with tone adjustments, story generation, even fixing grammar. And it’s super easy to use.',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
      }, {
        title: 'Ela',
        content: 'What about stats? Can creators see how their content performs?',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
      }, {
        title: 'Adam',
        content: 'Oh, 100%. You get deep stats—how people interact with your content, what choices they made, and where they spent the most time. It’s perfect for improving and understanding your audience.',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
      }, {
        title: 'Ela',
        content: 'This feels like such a game-changer. Anything else cool I should know?',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
      }, {
        title: 'Adam',
        content: 'Yeah, it’s fast—apps are native and crazy smooth. The team behind Moonlight knows their stuff. They’ve shipped apps for millions before.',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
      }, {
        title: 'Ela',
        content: 'Is Moonlight out now? I need this.',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
      }, {
        title: 'Adam',
        content: 'It’s in beta, but already has over 1k users! And the public launch is coming soon, so stay tuned!',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
      }, {
        title: 'Ela',
        content: 'This sounds amazing. I’m all in!',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
      }, {
        title: 'Adam',
        content: 'Trust me, you’ll love it. Moonlight is changing the game for creators and readers alike.',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
      }, {
        title: 'Ela',
        content: 'Okay, so tell me more about this $ML token. What’s the plan?',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
      }, {
        title: 'Adam',
        content: '$ML has a 1 billion total supply, and it’s all about rewarding creators, engaging the community, and supporting Moonlight’s growth.',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
      }, {
        title: 'Ela',
        content: 'How’s it all distributed? Is it fair?',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
      }, {
        title: 'Adam',
        content: 'Totally. 25% for community rewards, 32.5% for liquidity, 7.5% for public sale, 5.5% for ecosystem growth, and the rest for development, team, and treasury.',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
      }, {
        title: 'Ela',
        content: 'Interesting! So it’s not just a money grab, right?',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
      }, {
        title: 'Adam',
        content: 'Nope! It’s about empowering creators and building something sustainable. Community rewards alone will be distributed over 20 years to keep the ecosystem strong.',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
      }, {
        title: 'Ela',
        content: 'What’s the use for $ML? Why would people need it?',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
      }, {
        title: 'Adam',
        content: 'Loads of uses—tipping creators, buying premium content, governance voting, holding contests, and even accessing special features on Moonlight.',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
      }, {
        title: 'Ela',
        content: 'And what’s the public sale about? Can anyone join?',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
      }, {
        title: 'Adam',
        content: 'Yep, the public sale is for everyone. It’s 7.5% of the total supply, and 25% is unlocked immediately at the Token Generation Event (TGE). The rest unlocks over 6 months.',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
      }, {
        title: 'Ela',
        content: 'What’s a TGE?',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
      }, {
        title: 'Adam',
        content: 'It’s the Token Generation Event, basically when $ML goes live, and people can start buying, earning, and trading it.',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
      }, {
        title: 'Ela',
        content: 'How’s Moonlight planning to grow? What’s next?',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
      }, {
        title: 'Adam',
        content: 'We’re following a clear roadmap—MVP launched, AI tools integrated, beta testing with 1K+ users, and next, we’re launching 1.0 with blockchain integration and $ML token!',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
      }, {
        title: 'Ela',
        content: 'What comes after 1.0?',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
      }, {
        title: 'Adam',
        content: 'Big things! Staking $ML, expanding globally, creating a DAO for decentralized governance, and constant feature upgrades based on user feedback.',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
      }, {
        title: 'Ela',
        content: 'A DAO? So $ML holders get a say?',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
      }, {
        title: 'Adam',
        content: 'Exactly. If you hold $ML, you can vote on important decisions—like what features to build next or how funds should be used.',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
      }, {
        title: 'Ela',
        content: 'I can’t wait for the launch. How do I get started?',
        color: '#58E5C4',
        isQuestion: false,
        isVisible: false
      }, {
        title: 'Adam',
        content: 'Sign up now to secure your spot! And don’t forget to follow the journey—we’re just getting started.',
        color: '#F9E3A7',
        isQuestion: true,
        isVisible: false
      }];
      /***/
    },

    /***/
    28973: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TEAM_INFO_CARD_ITEMS": function TEAM_INFO_CARD_ITEMS() {
          return (
            /* binding */
            _TEAM_INFO_CARD_ITEMS
          );
        }
        /* harmony export */

      });

      var _TEAM_INFO_CARD_ITEMS = [{
        image: 'assets/images/quality.svg',
        title: 'QUALITY',
        description: 'We have seen poor quality and we are not going down that road. A product that is easy to use will give the user a pleasant user experience. It will enable the user to focus on what is important instead of worrying or being slowed down.'
      }, {
        image: 'assets/images/impact.svg',
        title: 'IMPACT',
        description: 'We aim to make our product as powerful and innovative as possible. Yet super simple and efficient to use. This is how we enable user sustainability. We´ll give the user all the tools and features they need to get their message out in the world.'
      }, {
        image: 'assets/images/education.svg',
        title: 'EDUCATION',
        description: 'Learning and growing is one of the primary reasons we exist. We want to enable people to enjoy themselves and find new ways to share across the globe. To learn, teach and connect in new and unique ways. Everyone can be the student and the teacher.'
      }, {
        image: 'assets/images/creativity.svg',
        title: 'CREATIVITY',
        description: 'We pride ourselves in making a new-thinking, fun and highly customizable product. Leaving the power of the experience up to the users. We´re the balance between clever and crazy, which is needed to solve any issue.'
      }, {
        image: 'assets/images/passion.svg',
        title: 'PASSION',
        description: 'The common factor of all of our team members are a build in passion for what we are creating. In short we love to create. To go from idea til finished product. Everyone is driven by the fact that this app will change many lives.'
      }, {
        image: 'assets/images/diversity.svg',
        title: 'DIVERSITY',
        description: 'Our team is put together by people from different areas, each their own expertise and experience. It’s important to make a broad use product. We co create to make sure our product is versatile for the users.'
      }];
      /***/
    },

    /***/
    85521: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TEAM_MESSAGES": function TEAM_MESSAGES() {
          return (
            /* binding */
            _TEAM_MESSAGES
          );
        }
        /* harmony export */

      });

      var _TEAM_MESSAGES = [{
        title: 'Deg',
        content: 'Hei, hva er moonlight?',
        isQuestion: true,
        isVisible: false
      }, {
        title: '',
        content: 'Yo! Moonlight er et app der du kan utforske eller skape de beste fiction-historier i form av chat.',
        avatar: './assets/images/moonlight-logo.png',
        isQuestion: false,
        isVisible: false
      }, {
        title: 'Deg',
        content: 'Det hores bra ut! Hvem har laget dette?',
        isQuestion: true,
        isVisible: false
      }, {
        title: '',
        content: 'Dette er utviklet av noen veldig entusiastiske ungdommer her i Oslo.',
        avatar: './assets/images/moonlight-logo.png',
        isQuestion: false,
        isVisible: false
      }, {
        title: '',
        content: 'Jeg kan møte deg med teamet',
        avatar: './assets/images/moonlight-logo.png',
        isQuestion: false,
        isVisible: false
      }, {
        title: 'Marius',
        content: 'Hi, jeg er ansvarlig for iOS-appen',
        avatar: './assets/images/people/marius.jpg',
        isQuestion: false,
        isVisible: false
      }, {
        title: 'Deg',
        content: 'Hyggelig, hvem lagte android?',
        isQuestion: true,
        isVisible: false
      }, {
        title: 'Ardian',
        content: 'Hi, jeg har vært ansvarlig for å bygge Android-versjonen av appen',
        avatar: 'https://t4.ftcdn.net/jpg/01/05/72/55/240_F_105725589_JZfWRosnHjBUXOoYCVXTVQsKwf2CU3gd.jpg',
        isQuestion: false,
        isVisible: false
      }];
      /***/
    },

    /***/
    21630: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BetaComponent": function BetaComponent() {
          return (
            /* binding */
            _BetaComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_bejtullaajeti_Downloads_moonlight_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_beta_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./beta.component.html */
      46824);
      /* harmony import */


      var _beta_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./beta.component.scss */
      89234);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _services_beta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/beta.service */
      25948);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      22663);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      71435);
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! primeng/api */
      46976);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      79441);

      var _BetaComponent = /*#__PURE__*/function () {
        function BetaComponent(betaService, messageService) {
          _classCallCheck(this, BetaComponent);

          this.betaService = betaService;
          this.messageService = messageService;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
          this.successMessage = 'Successfully submitted, you’ll receive beta invite soon.!';
        }

        _createClass(BetaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initForm();
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
              subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
              message: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null)
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this4 = this;

            if (this.form.invalid || this.deviceType === undefined) return;
            this.showLoader = true;
            this.form.get('subject').patchValue(this.deviceType ? 'Android' : 'IOS');
            this.form.get('message').patchValue(this.form.value.email);
            this.betaService.send(this.form.value).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.finalize)(function () {
              return _this4.showLoader = false;
            })).subscribe(function (_) {
              _this4.form.reset();

              _this4.showSuccessMessage();
            });
          }
        }, {
          key: "showSuccessMessage",
          value: function showSuccessMessage() {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: this.successMessage
            });
          }
        }, {
          key: "getSelectedDevice",
          value: function getSelectedDevice(event) {
            this.deviceType = event === 1;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next(true);
            this.destroy$.unsubscribe();
          }
        }]);

        return BetaComponent;
      }();

      _BetaComponent.ctorParameters = function () {
        return [{
          type: _services_beta_service__WEBPACK_IMPORTED_MODULE_2__.BetaService
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService
        }];
      };

      _BetaComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-settings',
        template: _Users_bejtullaajeti_Downloads_moonlight_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_beta_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_beta_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _BetaComponent);
      /***/
    },

    /***/
    794: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactComponent": function ContactComponent() {
          return (
            /* binding */
            _ContactComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_bejtullaajeti_Downloads_moonlight_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contact_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./contact.component.html */
      74273);
      /* harmony import */


      var _contact_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./contact.component.scss */
      49035);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _services_feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/feedback.service */
      4016);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! primeng/api */
      46976);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      71435);

      var _ContactComponent = /*#__PURE__*/function () {
        function ContactComponent(feedBackService, messageService) {
          _classCallCheck(this, ContactComponent);

          this.feedBackService = feedBackService;
          this.messageService = messageService;
        }

        _createClass(ContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initForm();
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
              subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
              message: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required)
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this5 = this;

            this.showLoader = true;
            this.feedbackSub = this.feedBackService.sendFeedBack(this.form.value).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.finalize)(function () {
              return _this5.showLoader = false;
            })).subscribe(function (res) {
              _this5.form.reset();
            }); // this.addSingle();
            // this.messageService.add({severity: 'info', summary: 'Service Message', detail: 'Via MessageService'});
          }
        }, {
          key: "addSingle",
          value: function addSingle() {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Your Feedback Submitted Successfully. '
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.feedbackSub && this.feedbackSub.unsubscribe();
          }
        }]);

        return ContactComponent;
      }();

      _ContactComponent.ctorParameters = function () {
        return [{
          type: _services_feedback_service__WEBPACK_IMPORTED_MODULE_2__.FeedbackService
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_5__.MessageService
        }];
      };

      _ContactComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-contact',
        template: _Users_bejtullaajeti_Downloads_moonlight_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contact_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_contact_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _ContactComponent);
      /***/
    },

    /***/
    50425: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardRoutingModule": function DashboardRoutingModule() {
          return (
            /* binding */
            _DashboardRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _invest_in_us_invest_in_us_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./invest-in-us/invest-in-us.component */
      83048);
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      32488);
      /* harmony import */


      var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./contact/contact.component */
      794);
      /* harmony import */


      var _beta_beta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./beta/beta.component */
      21630);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home/home.component */
      50257);
      /* harmony import */


      var _team_team_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./team/team.component */
      57130);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
        children: [{
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
        }, {
          path: 'home',
          component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent
        }, {
          path: 'about',
          component: _team_team_component__WEBPACK_IMPORTED_MODULE_5__.TeamComponent
        }, {
          path: 'contact',
          component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__.ContactComponent
        }, {
          path: 'beta',
          component: _beta_beta_component__WEBPACK_IMPORTED_MODULE_3__.BetaComponent
        }, {
          path: 'invest-in-us',
          component: _invest_in_us_invest_in_us_component__WEBPACK_IMPORTED_MODULE_0__.InvestInUsComponent
        }]
      }];

      var _DashboardRoutingModule = function DashboardRoutingModule() {
        _classCallCheck(this, DashboardRoutingModule);
      };

      _DashboardRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
      })], _DashboardRoutingModule);
      /***/
    },

    /***/
    34814: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardModule": function DashboardModule() {
          return (
            /* binding */
            _DashboardModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _ui_fragments_user_profile_user_profile_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../ui-fragments/user-profile/user-profile.module */
      73372);
      /* harmony import */


      var _ui_kits_success_modal_success_modal_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../ui-kits/success-modal/success-modal.module */
      34267);
      /* harmony import */


      var _ui_fragments_message_box_message_box_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../ui-fragments/message-box/message-box.module */
      20215);
      /* harmony import */


      var _ui_kits_input_switch_input_switch_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../ui-kits/input-switch/input-switch.module */
      40387);
      /* harmony import */


      var _ui_kits_radio_button_radio_button_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../ui-kits/radio-button/radio-button.module */
      88183);
      /* harmony import */


      var _invest_in_us_invest_in_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./invest-in-us/invest-in-us.component */
      83048);
      /* harmony import */


      var _ui_fragments_info_card_info_card_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../ui-fragments/info-card/info-card.module */
      31464);
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      32488);
      /* harmony import */


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      50425);
      /* harmony import */


      var _ui_fragments_header_header_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../ui-fragments/header/header.module */
      28562);
      /* harmony import */


      var _services_feedback_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../services/feedback.service */
      4016);
      /* harmony import */


      var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./contact/contact.component */
      794);
      /* harmony import */


      var _services_beta_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../services/beta.service */
      25948);
      /* harmony import */


      var _beta_beta_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./beta/beta.component */
      21630);
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./home/home.component */
      50257);
      /* harmony import */


      var _team_team_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./team/team.component */
      57130);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! primeng/api */
      46976);
      /* harmony import */


      var primeng_toast__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! primeng/toast */
      63877);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _DashboardModule = function DashboardModule() {
        _classCallCheck(this, DashboardModule);
      };

      _DashboardModule = (0, tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_17__.NgModule)({
        declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_14__.HomeComponent, _team_team_component__WEBPACK_IMPORTED_MODULE_15__.TeamComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__.ContactComponent, _beta_beta_component__WEBPACK_IMPORTED_MODULE_13__.BetaComponent, _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__.DashboardComponent, _invest_in_us_invest_in_us_component__WEBPACK_IMPORTED_MODULE_5__.InvestInUsComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_8__.DashboardRoutingModule, _ui_fragments_header_header_module__WEBPACK_IMPORTED_MODULE_9__.HeaderModule, primeng_toast__WEBPACK_IMPORTED_MODULE_19__.ToastModule, _ui_fragments_message_box_message_box_module__WEBPACK_IMPORTED_MODULE_2__.MessageBoxModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, _ui_kits_success_modal_success_modal_module__WEBPACK_IMPORTED_MODULE_1__.SuccessModalModule, _ui_fragments_user_profile_user_profile_module__WEBPACK_IMPORTED_MODULE_0__.UserProfileModule, _ui_kits_input_switch_input_switch_module__WEBPACK_IMPORTED_MODULE_3__.InputSwitchModule, _ui_kits_radio_button_radio_button_module__WEBPACK_IMPORTED_MODULE_4__.RadioButtonModule, _ui_fragments_info_card_info_card_module__WEBPACK_IMPORTED_MODULE_6__.InfoCardModule],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_21__.MessageService, _services_feedback_service__WEBPACK_IMPORTED_MODULE_10__.FeedbackService, _services_beta_service__WEBPACK_IMPORTED_MODULE_12__.BetaService]
      })], _DashboardModule);
      /***/
    },

    /***/
    32488: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardComponent": function DashboardComponent() {
          return (
            /* binding */
            _DashboardComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_bejtullaajeti_Downloads_moonlight_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./dashboard.component.html */
      98541);
      /* harmony import */


      var _dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard.component.scss */
      5060);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent() {
          _classCallCheck(this, DashboardComponent);
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DashboardComponent;
      }();

      _DashboardComponent.ctorParameters = function () {
        return [];
      };

      _DashboardComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-dashboard',
        template: _Users_bejtullaajeti_Downloads_moonlight_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _DashboardComponent);
      /***/
    },

    /***/
    50257: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeComponent": function HomeComponent() {
          return (
            /* binding */
            _HomeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_bejtullaajeti_Downloads_moonlight_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.component.html */
      41);
      /* harmony import */


      var _home_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.component.scss */
      82294);
      /* harmony import */


      var _constants_home_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../constants/home.messages */
      66936);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);

          this.showMessageBox = true;
          this.showTapIcon = true;
          this.messages = JSON.parse(JSON.stringify(_constants_home_messages__WEBPACK_IMPORTED_MODULE_2__.HOME_MESSAGES));
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleModal",
          value: function toggleModal() {
            var _this6 = this;

            this.showMessageBox = !this.showMessageBox;
            this.messages = _toConsumableArray(this.messages);
            setTimeout(function () {
              _this6.showScale = _this6.showMessageBox;
            }, 200);
          }
        }, {
          key: "onLastMessage",
          value: function onLastMessage() {
            var _this7 = this;

            this.showMessageBox = false;
            this.showMessageBoxModal = false;
            setTimeout(function () {
              _this7.showTapIcon = true;
            }, 1500);
            setTimeout(function () {
              // this.showMessageBox = !this.showMessageBox;
              _this7.showMessageBox = true;
            }, 650);
            setTimeout(function () {
              _this7.showDownloadInfoContent = !_this7.showDownloadInfoContent;
            }, 0);
            this.showDownloadInfo = false;
            this.showScale = false;
          }
        }, {
          key: "navigateToHome",
          value: function navigateToHome() {
            var _this8 = this;

            setTimeout(function () {
              _this8.showDownloadInfo = false;
            }, 500);
            this.showDownloadInfoContent = !this.showDownloadInfoContent;
          }
        }, {
          key: "openMessageBoxModal",
          value: function openMessageBoxModal() {
            this.showMessageBoxModal = true;
            this.showMessageBox = false;
          }
        }, {
          key: "navigateToWebStore",
          value: function navigateToWebStore() {
            window.open('https://testflight.apple.com/join/yb3jdbl6', '_blank');
          }
        }, {
          key: "onFirstTimeClick",
          value: function onFirstTimeClick() {
            this.showTapIcon = false;
          }
        }]);

        return HomeComponent;
      }();

      _HomeComponent.ctorParameters = function () {
        return [];
      };

      _HomeComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _Users_bejtullaajeti_Downloads_moonlight_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _HomeComponent);
      /***/
    },

    /***/
    83048: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InvestInUsComponent": function InvestInUsComponent() {
          return (
            /* binding */
            _InvestInUsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_bejtullaajeti_Downloads_moonlight_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_invest_in_us_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./invest-in-us.component.html */
      83111);
      /* harmony import */


      var _invest_in_us_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./invest-in-us.component.scss */
      94831);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _services_feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/feedback.service */
      4016);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      71435);

      var _InvestInUsComponent = /*#__PURE__*/function () {
        function InvestInUsComponent(feedBackService) {
          _classCallCheck(this, InvestInUsComponent);

          this.feedBackService = feedBackService;
        }

        _createClass(InvestInUsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initForm();
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
              phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required)
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this9 = this;

            this.showLoader = true;
            this.feedbackSub = this.feedBackService.sendFeedBack(this.form.value).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.finalize)(function () {
              return _this9.showLoader = false;
            })).subscribe(function (res) {
              _this9.form.reset();
            });
          }
        }]);

        return InvestInUsComponent;
      }();

      _InvestInUsComponent.ctorParameters = function () {
        return [{
          type: _services_feedback_service__WEBPACK_IMPORTED_MODULE_2__.FeedbackService
        }];
      };

      _InvestInUsComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-invest-in-us',
        template: _Users_bejtullaajeti_Downloads_moonlight_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_invest_in_us_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_invest_in_us_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _InvestInUsComponent);
      /***/
    },

    /***/
    57130: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TeamComponent": function TeamComponent() {
          return (
            /* binding */
            _TeamComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_bejtullaajeti_Downloads_moonlight_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_team_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./team.component.html */
      69419);
      /* harmony import */


      var _team_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./team.component.scss */
      2123);
      /* harmony import */


      var _constants_team_info_card_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../constants/team-info-card-items */
      28973);
      /* harmony import */


      var _constants_team_messaages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../constants/team.messaages */
      85521);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _TeamComponent = /*#__PURE__*/function () {
        function TeamComponent() {
          _classCallCheck(this, TeamComponent);

          this.messages = JSON.parse(JSON.stringify(_constants_team_messaages__WEBPACK_IMPORTED_MODULE_3__.TEAM_MESSAGES));
          this.profileMode = true;
          this.teamInfoItems = _constants_team_info_card_items__WEBPACK_IMPORTED_MODULE_2__.TEAM_INFO_CARD_ITEMS;
          this.profiles = [{
            firstName: 'Besar',
            lastName: 'Ismaili',
            role: 'Founder',
            avatar: 'assets/images/people/besar.jpg'
          }, {
            firstName: 'Marius',
            lastName: 'Fargerhol',
            role: 'iOS developer',
            avatar: 'assets/images/people/marius.jpg'
          }, {
            firstName: 'Elin',
            lastName: 'Gundersen',
            role: 'Company & Product developer',
            avatar: '/assets/images/people/elin.jpg'
          }, {
            firstName: 'Taaha',
            lastName: 'Bin Khaled',
            role: 'Interaction and Service designer',
            avatar: '/assets/images/people/taaha.jpg'
          }, {
            firstName: 'Valdrin',
            lastName: 'Muharemi',
            role: 'Server-side',
            avatar: '/assets/images/people/valdrin.jpg'
          }, {
            firstName: 'Thomas',
            lastName: 'Pettersen',
            role: 'Tech & Early investor',
            avatar: '/assets/images/people/thomas.jpg'
          }, {
            firstName: 'Ardian',
            lastName: 'Saidi',
            role: 'Android developer',
            avatar: '/assets/images/people/profile.jpg'
          }, {
            firstName: 'Endre',
            lastName: 'Grønmyr',
            role: 'Finance',
            avatar: '/assets/images/people/endre.jpg'
          }, {
            firstName: 'Besim',
            lastName: 'Ismaili',
            role: 'Data Analytics',
            avatar: '/assets/images/people/besim.jpg'
          }, {
            firstName: 'Fitim',
            lastName: 'Beqiri',
            role: 'Business dev',
            avatar: '/assets/images/people/fitim.jpg'
          }, {
            firstName: 'Sunil',
            lastName: 'Shivanand',
            role: 'Cloud Architect',
            avatar: '/assets/images/people/sunil.jpg'
          }, {
            firstName: 'Veton',
            lastName: 'Neziri',
            role: 'Android developer',
            avatar: '/assets/images/people/profile.jpg'
          }, {
            firstName: 'Perparim',
            lastName: 'Shala',
            role: 'Machine Learning',
            avatar: '/assets/images/people/perparim.jpg'
          }, {
            firstName: 'Dona',
            lastName: 'Mulaku',
            role: 'UI/UX',
            avatar: '/assets/images/people/profile.jpg'
          }, {
            firstName: 'David',
            lastName: 'Mkrtchyan',
            role: 'Front-end',
            avatar: '/assets/images/people/profile.jpg'
          }, {
            firstName: 'You?',
            lastName: 'Contact us',
            role: 'What you do best',
            avatar: '/assets/images/people/profile.jpg'
          }];
        }

        _createClass(TeamComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log('++++++++++++++++++++++++++++', this.teamInfoItems);
          }
        }]);

        return TeamComponent;
      }();

      _TeamComponent.ctorParameters = function () {
        return [];
      };

      _TeamComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-team',
        template: _Users_bejtullaajeti_Downloads_moonlight_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_team_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_team_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _TeamComponent);
      /***/
    },

    /***/
    25948: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BetaService": function BetaService() {
          return (
            /* binding */
            _BetaService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _BetaService = /*#__PURE__*/function () {
        function BetaService(httpClient) {
          _classCallCheck(this, BetaService);

          this.httpClient = httpClient;
        }

        _createClass(BetaService, [{
          key: "send",
          value: function send(data) {
            return this.httpClient.post('https://formspree.io/mbnkornm', data); // return this.httpClient.post('http://ec2-52-30-111-90.eu-west-1.compute.amazonaws.com:8080/users/beta', data);
          }
        }]);

        return BetaService;
      }();

      _BetaService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _BetaService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], _BetaService);
      /***/
    },

    /***/
    4016: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FeedbackService": function FeedbackService() {
          return (
            /* binding */
            _FeedbackService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _FeedbackService = /*#__PURE__*/function () {
        function FeedbackService(http) {
          _classCallCheck(this, FeedbackService);

          this.http = http;
        }

        _createClass(FeedbackService, [{
          key: "sendFeedBack",
          value: function sendFeedBack(formValue) {
            return this.http.post('https://formspree.io/mbnkornm', formValue);
          }
        }]);

        return FeedbackService;
      }();

      _FeedbackService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _FeedbackService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], _FeedbackService);
      /***/
    },

    /***/
    40082: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InfoCardComponent": function InfoCardComponent() {
          return (
            /* binding */
            _InfoCardComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_bejtullaajeti_Downloads_moonlight_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_info_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./info-card.component.html */
      44521);
      /* harmony import */


      var _info_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./info-card.component.scss */
      97016);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _InfoCardComponent = /*#__PURE__*/function () {
        function InfoCardComponent() {
          _classCallCheck(this, InfoCardComponent);
        }

        _createClass(InfoCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return InfoCardComponent;
      }();

      _InfoCardComponent.ctorParameters = function () {
        return [];
      };

      _InfoCardComponent.propDecorators = {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };
      _InfoCardComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-info-card',
        template: _Users_bejtullaajeti_Downloads_moonlight_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_info_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_info_card_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _InfoCardComponent);
      /***/
    },

    /***/
    31464: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InfoCardModule": function InfoCardModule() {
          return (
            /* binding */
            _InfoCardModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _info_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./info-card.component */
      40082);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _InfoCardModule = function InfoCardModule() {
        _classCallCheck(this, InfoCardModule);
      };

      _InfoCardModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_info_card_component__WEBPACK_IMPORTED_MODULE_0__.InfoCardComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
        exports: [_info_card_component__WEBPACK_IMPORTED_MODULE_0__.InfoCardComponent]
      })], _InfoCardModule);
      /***/
    },

    /***/
    58606: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MessageBoxComponent": function MessageBoxComponent() {
          return (
            /* binding */
            _MessageBoxComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_bejtullaajeti_Downloads_moonlight_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_message_box_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./message-box.component.html */
      46129);
      /* harmony import */


      var _message_box_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./message-box.component.scss */
      60282);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _MessageBoxComponent = /*#__PURE__*/function () {
        function MessageBoxComponent() {
          _classCallCheck(this, MessageBoxComponent);

          this.lastMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.onFirstTimeClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.index = 1;
          this.isInited = false;
          this.hideMessageBox = false;
        }

        _createClass(MessageBoxComponent, [{
          key: "onKeyDown",
          value: function onKeyDown(event) {
            if (event.keyCode === 40) {
              this.displayMessagesByIndex();
            }
          }
        }, {
          key: "onClick",
          value: function onClick(event) {
            if (!this.firstTimeClick) {
              this.firstTimeClick = true;
              this.onFirstTimeClick.emit(true);
            }

            this.isInited && this.displayMessagesByIndex();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this10 = this;

            setTimeout(function () {
              _this10.messages[0].isVisible = true;
              _this10.isInited = true;
            }, 800);
          }
        }, {
          key: "displayMessagesByIndex",
          value: function displayMessagesByIndex() {
            var _this11 = this;

            var container = document.getElementById('message-box-container');
            var items = Array.from(document.getElementsByClassName('message-box-container')[0].querySelectorAll('.message-item'));

            if (this.index > this.messages.length - 1) {
              if (!this.isHomePage) {
                this.index = 1;
                container['style'].transform = "translate(-50%, ".concat(-90, "px)");
                this.messages.forEach(function (message, index) {
                  return index ? message.isVisible = false : message.isVisible = true;
                });
                return;
              } // this.messages.forEach(message => message.isVisible = false);


              this.index = 1;
              this.messages.forEach(function (message, index) {
                return index ? message.isVisible = false : message.isVisible = true;
              });
              this.hideMessageBox = true;
              this.lastMessage.emit(true);
            } else {
              this.messages[this.index].isVisible = true;
              var el = document.getElementById('' + this.index);
              container['style'].transform = "translate(-50%, ".concat(-(el.offsetTop + 90), "px)");
            }

            setTimeout(function () {
              items.forEach(function (item, index) {
                if (item.getBoundingClientRect().top < 120 && _this11.messages[index].isVisible) {
                  _this11.messages[index].isVisible = false;
                }
              });
            }, 300);
            this.index++;
          }
        }]);

        return MessageBoxComponent;
      }();

      _MessageBoxComponent.ctorParameters = function () {
        return [];
      };

      _MessageBoxComponent.propDecorators = {
        modalIsVisible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        isHomePage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        messages: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        lastMessage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        onFirstTimeClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        onKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
          args: ['document:keydown', ['$event']]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
          args: ['document:click', ['$event']]
        }]
      };
      _MessageBoxComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-message-box',
        template: _Users_bejtullaajeti_Downloads_moonlight_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_message_box_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_message_box_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _MessageBoxComponent);
      /***/
    },

    /***/
    20215: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MessageBoxModule": function MessageBoxModule() {
          return (
            /* binding */
            _MessageBoxModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _ui_kits_message_item_message_item_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../ui-kits/message-item/message-item.module */
      82073);
      /* harmony import */


      var _message_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./message-box.component */
      58606);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _MessageBoxModule = function MessageBoxModule() {
        _classCallCheck(this, MessageBoxModule);
      };

      _MessageBoxModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_message_box_component__WEBPACK_IMPORTED_MODULE_1__.MessageBoxComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ui_kits_message_item_message_item_module__WEBPACK_IMPORTED_MODULE_0__.MessageItemModule],
        exports: [_message_box_component__WEBPACK_IMPORTED_MODULE_1__.MessageBoxComponent]
      })], _MessageBoxModule);
      /***/
    },

    /***/
    5266: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserProfileComponent": function UserProfileComponent() {
          return (
            /* binding */
            _UserProfileComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_bejtullaajeti_Downloads_moonlight_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-profile.component.html */
      54366);
      /* harmony import */


      var _user_profile_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user-profile.component.scss */
      47667);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _UserProfileComponent = /*#__PURE__*/function () {
        function UserProfileComponent() {
          _classCallCheck(this, UserProfileComponent);
        }

        _createClass(UserProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UserProfileComponent;
      }();

      _UserProfileComponent.ctorParameters = function () {
        return [];
      };

      _UserProfileComponent.propDecorators = {
        user: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };
      _UserProfileComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-user-profile',
        template: _Users_bejtullaajeti_Downloads_moonlight_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_profile_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_profile_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _UserProfileComponent);
      /***/
    },

    /***/
    73372: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserProfileModule": function UserProfileModule() {
          return (
            /* binding */
            _UserProfileModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _user_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./user-profile.component */
      5266);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _UserProfileModule = function UserProfileModule() {
        _classCallCheck(this, UserProfileModule);
      };

      _UserProfileModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_user_profile_component__WEBPACK_IMPORTED_MODULE_0__.UserProfileComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
        exports: [_user_profile_component__WEBPACK_IMPORTED_MODULE_0__.UserProfileComponent]
      })], _UserProfileModule);
      /***/
    },

    /***/
    50672: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MessageItemComponent": function MessageItemComponent() {
          return (
            /* binding */
            _MessageItemComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_bejtullaajeti_Downloads_moonlight_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_message_item_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./message-item.component.html */
      22289);
      /* harmony import */


      var _message_item_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./message-item.component.scss */
      50148);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _MessageItemComponent = /*#__PURE__*/function () {
        function MessageItemComponent() {
          _classCallCheck(this, MessageItemComponent);

          this.message = {};
        }

        _createClass(MessageItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MessageItemComponent;
      }();

      _MessageItemComponent.ctorParameters = function () {
        return [];
      };

      _MessageItemComponent.propDecorators = {
        message: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        isHomePage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };
      _MessageItemComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-message-item',
        template: _Users_bejtullaajeti_Downloads_moonlight_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_message_item_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_message_item_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _MessageItemComponent);
      /***/
    },

    /***/
    82073: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MessageItemModule": function MessageItemModule() {
          return (
            /* binding */
            _MessageItemModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _message_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./message-item.component */
      50672);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _MessageItemModule = function MessageItemModule() {
        _classCallCheck(this, MessageItemModule);
      };

      _MessageItemModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_message_item_component__WEBPACK_IMPORTED_MODULE_0__.MessageItemComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
        exports: [_message_item_component__WEBPACK_IMPORTED_MODULE_0__.MessageItemComponent]
      })], _MessageItemModule);
      /***/
    },

    /***/
    51607: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RadioButtonComponent": function RadioButtonComponent() {
          return (
            /* binding */
            _RadioButtonComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_bejtullaajeti_Downloads_moonlight_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_radio_button_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./radio-button.component.html */
      1914);
      /* harmony import */


      var _radio_button_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./radio-button.component.scss */
      85513);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _RadioButtonComponent = /*#__PURE__*/function () {
        function RadioButtonComponent() {
          _classCallCheck(this, RadioButtonComponent);

          this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        }

        _createClass(RadioButtonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onClick",
          value: function onClick() {
            this.select.emit(this.selectedValue);
          }
        }]);

        return RadioButtonComponent;
      }();

      _RadioButtonComponent.ctorParameters = function () {
        return [];
      };

      _RadioButtonComponent.propDecorators = {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        selectedValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        select: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };
      _RadioButtonComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-radio-button',
        template: _Users_bejtullaajeti_Downloads_moonlight_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_radio_button_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_radio_button_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _RadioButtonComponent);
      /***/
    },

    /***/
    88183: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RadioButtonModule": function RadioButtonModule() {
          return (
            /* binding */
            _RadioButtonModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _radio_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./radio-button.component */
      51607);
      /* harmony import */


      var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! primeng/radiobutton */
      35751);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);

      var _RadioButtonModule = function RadioButtonModule() {
        _classCallCheck(this, RadioButtonModule);
      };

      _RadioButtonModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_radio_button_component__WEBPACK_IMPORTED_MODULE_0__.RadioButtonComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_5__.RadioButtonModule],
        exports: [_radio_button_component__WEBPACK_IMPORTED_MODULE_0__.RadioButtonComponent]
      })], _RadioButtonModule);
      /***/
    },

    /***/
    52258: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SuccessModalComponent": function SuccessModalComponent() {
          return (
            /* binding */
            _SuccessModalComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_bejtullaajeti_Downloads_moonlight_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_success_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./success-modal.component.html */
      7848);
      /* harmony import */


      var _success_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./success-modal.component.scss */
      60129);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _SuccessModalComponent = /*#__PURE__*/function () {
        function SuccessModalComponent() {
          _classCallCheck(this, SuccessModalComponent);
        }

        _createClass(SuccessModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SuccessModalComponent;
      }();

      _SuccessModalComponent.ctorParameters = function () {
        return [];
      };

      _SuccessModalComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-success-modal',
        template: _Users_bejtullaajeti_Downloads_moonlight_web_node_modules_ngtools_webpack_src_loaders_direct_resource_js_success_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_success_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _SuccessModalComponent);
      /***/
    },

    /***/
    34267: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SuccessModalModule": function SuccessModalModule() {
          return (
            /* binding */
            _SuccessModalModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _success_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./success-modal.component */
      52258);

      var _SuccessModalModule = function SuccessModalModule() {
        _classCallCheck(this, SuccessModalModule);
      };

      _SuccessModalModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_success_modal_component__WEBPACK_IMPORTED_MODULE_0__.SuccessModalComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
        exports: [_success_modal_component__WEBPACK_IMPORTED_MODULE_0__.SuccessModalComponent]
      })], _SuccessModalModule);
      /***/
    },

    /***/
    46824: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"beta-container\">\n    <div class=\"container\">\n\n        <div class=\"title\">\n            <h1>Beta is now out</h1>\n            <h5>This is a description text for beta version</h5>\n            <h5>Our beta version is already out, please submit the form to receive beta version</h5>\n        </div>\n\n        <form [formGroup]=\"form\" action=\"https://formspree.io/mbnkornm\" method=\"POST\">\n            <label for=\"email\">Email</label>\n            <input type=\"text\" id=\"email\" placeholder=\"Email\" [formControl]=\"form.get('email')\">\n\n            <div class=\"radio-button\">\n                <app-radio-button [label]=\"'Android'\" [selectedValue]=\"1\"\n                                  (select)=\"getSelectedDevice($event)\"></app-radio-button>\n            </div>\n\n            <div class=\"radio-button\">\n                <app-radio-button [label]=\"'iPhone'\" [selectedValue]=\"2\"\n                                  (select)=\"getSelectedDevice($event)\"></app-radio-button>\n            </div>\n\n            <button (click)=\"form.valid && submitForm()\">Submit</button>\n        </form>\n    </div>\n</div>\n\n<p-toast baseZIndex=\"100\" position=\"top-right\"></p-toast>\n\n<div id=\"myModal\" class=\"modal\" *ngIf=\"showLoader\">\n    <div class=\"modal-content\">\n        <img src=\"../../../assets/images/loading.gif\" alt=\"\">\n    </div>\n\n</div>\n";
      /***/
    },

    /***/
    74273: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"contact-container\">\n\n    <img src=\"assets/images/contact-page-image.svg\" alt=\"Contact Us\">\n\n    <div class=\"container\">\n        <form [formGroup]=\"form\" action=\"https://formspree.io/mbnkornm\" method=\"POST\">\n            <label for=\"email\">E Post</label>\n            <input type=\"text\" id=\"email\" [formControl]=\"form.get('email')\">\n\n            <label for=\"subject\">Subject</label>\n            <input type=\"text\" id=\"subject\" [formControl]=\"form.get('subject')\">\n\n            <label for=\"message\">Message</label>\n            <textarea id=\"message\" [formControl]=\"form.get('message')\"></textarea>\n\n            <button [disabled]=\"form.invalid\" (click)=\"submitForm()\">Send</button>\n        </form>\n\n        <div class=\"info-text\">\n            Important Note: We respect privacy and will only use your email to answer your queries.\n        </div>\n    </div>\n</div>\n\n<p-toast baseZIndex=\"100\" position=\"top-right\"></p-toast>\n\n<div class=\"modal\" *ngIf=\"showLoader\">\n    <div class=\"modal-content\">\n        <img src=\"../../../assets/images/loading.gif\" alt=\"\">\n    </div>\n</div>\n";
      /***/
    },

    /***/
    98541: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"dashboard\">\n    <div class=\"main-container\">\n        <div class=\"header\">\n            <app-header></app-header>\n        </div>\n\n        <div class=\"container\">\n            <router-outlet></router-outlet>\n        </div>\n\n        <div class=\"download-links\" *ngIf=\"false\">\n            <ul (click)=\"$event.stopPropagation()\">\n                <li>\n                    <a [routerLink]=\"['/']\">\n                        <i class=\"icon-appleinc\"></i>\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/']\">\n                        <i class=\"icon-googleplay\"></i>\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/']\">\n                        <i class=\"icon-facebook2\"></i>\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/']\">\n                        <i class=\"icon-instagram\"></i>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    41: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"home-container\">\n    <div class=\"home-section\">\n        <!--        <h1 class=\"section-title\">-->\n        <!--            <div>Chat</div>-->\n        <!--            <div>historier!</div>-->\n        <!--        </h1>-->\n\n        <div class=\"home-section-message-box\">\n            <app-message-box *ngIf=\"showMessageBox\"\n                             (lastMessage)=\"onLastMessage()\"\n                             (onFirstTimeClick)=\"onFirstTimeClick()\"\n                             [isHomePage]=\"true\"\n                             [messages]=\"messages\"\n                             [modalIsVisible]=\"showMessageBox\"></app-message-box>\n        </div>\n\n\n    </div>\n\n    <!--    <ng-container *ngIf=\"showMessageBox\">--> <!--no-scale-->\n    <div class=\"message-box-modal scale\" *ngIf=\"showMessageBoxModal\">\n        <app-message-box (lastMessage)=\"onLastMessage()\"\n                         (onFirstTimeClick)=\"onFirstTimeClick()\"\n                         [isHomePage]=\"true\"\n                         [messages]=\"messages\"\n                         [modalIsVisible]=\"showMessageBox\"></app-message-box>\n\n        <img height=\"70\" width=\"200\" src=\"assets/images/app-store-logo.png\" (click)=\"navigateToWebStore()\"\n             alt=\"App Store\">\n    </div>\n    <!--    </ng-container>-->\n\n    <ng-container *ngIf=\"showDownloadInfo\">\n        <div class=\"message-box-modal hide\"\n             [class.show]=\"showDownloadInfoContent\">\n            <div class=\"message-box-content\">\n                <p>Last ned appen for å fortsette å lese historien!</p>\n\n                <div class=\"pointer\" (click)=\"navigateToHome()\">\n                    <div class=\"angle-top\">\n                        <i class=\"icon-angle-top\"></i>\n                    </div>\n\n                    <div class=\"back-button-text\">\n                        Back to top\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </ng-container>\n\n    <!--    <div class=\"angle\" (click)=\"toggleModal()\" *ngIf=\"true\">-->\n    <!--        <img src=\"../../../assets/images/2x/baseline_play_circle_filled_white_48dp.png\" alt=\"\">-->\n    <!--    </div>-->\n\n    <div class=\"angle\" (click)=\"toggleModal()\" *ngIf=\"showTapIcon\">\n        <img src=\"../../../assets/images/icon_tap.png\" alt=\"Tap\">\n    </div>\n\n    <div class=\"play-icon-container\" (click)=\"openMessageBoxModal()\">\n        <img height=\"70\" width=\"70\" src=\"assets/images/play-icon-yellow.svg\" alt=\"Play\">\n    </div>\n</div>\n";
      /***/
    },

    /***/
    83111: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"invest-on-us-container scroll\">\n    <div class=\"container-header\">\n        <img src=\"assets/images/invest-on-us-image.svg\" alt=\"Invest on Us\">\n\n        <div class=\"container-content\">\n            <p>\n                Willing to take a stake and be part of this venture?\n            </p>\n            <p>\n                We are aiming for market leader position, and we believe we have found a gap in the market that no one\n                is currently filling.\n            </p>\n            <p>\n                We are a solid team, experienced in the most important key areas. With this digital shift we are well\n                connected and flixible in working from anywhere anytime. Our team is super commited to Moonlight and we\n                don't give up no matter how complex the problem is.\n            </p>\n            <p>\n                If you aim to be a part of this next big tech venture, fill out the details below and <b>let us present\n                to you Moonlight!</b>\n            </p>\n        </div>\n    </div>\n\n    <div class=\"container-footer\">\n        <div class=\"footer-title\">\n            It's now or never. We won’t ask for investments forever.\n        </div>\n        <div class=\"form-container\">\n            <div>\n                <input [formControl]=\"form.get('name')\" placeholder=\"Full Name\" type=\"text\">\n                <input [formControl]=\"form.get('email')\" placeholder=\"Email\" type=\"email\">\n            </div>\n            <div>\n                <input [formControl]=\"form.get('phone')\" placeholder=\"Contact Number\" type=\"tel\">\n                <button [disabled]=\"form.invalid\" (click)=\"submit()\">Request a call</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal\" *ngIf=\"showLoader\">\n    <div class=\"modal-content\">\n        <img src=\"../../../assets/images/loading.gif\" alt=\"\">\n    </div>\n</div>\n";
      /***/
    },

    /***/
    69419: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"team-container scroll\">\n<!--    <div class=\"switch-profile\">-->\n<!--        <app-input-switch [checked]=\"profileMode\"-->\n<!--                          (onChange)=\"profileMode = $event\"-->\n<!--                          [label]=\"profileMode ? 'Grid' : 'List'\"-->\n<!--                          [showSwitchValue]=\"false\"></app-input-switch>-->\n<!--    </div>-->\n<!--    <div class=\"container message-box-container\" *ngIf=\"!profileMode\">-->\n<!--        <app-message-box [modalIsVisible]=\"true\"-->\n<!--                         [messages]=\"messages\"></app-message-box>-->\n<!--    </div>-->\n\n    <div class=\"team-header-container\">\n        <div class=\"image-container\">\n            <img src=\"assets/images/about_page_header_image.png\" alt=\"About us image\">\n        </div>\n        <div class=\"description-container\">\n            There is a huge market opportunity, yet to be utilized  in combining creating, reading, educating and learning with a bite sized formula. Currently we are the only bite size formula app that offer freedom of usage, style and genre across these categories without paid limitations.\n            We offer an easy to use, safe, fun and interactive product wrapped up in a beautiful intuitive and user friendly experience.\n        </div>\n    </div>\n\n    <div class=\"team-info-container\">\n        <div class=\"info-card-item\" *ngFor=\"let item of teamInfoItems\">\n            <app-info-card [item]=\"item\"></app-info-card>\n        </div>\n    </div>\n\n    <div class=\"team-box-container\" *ngIf=\"profileMode\">\n        <div class=\"team-title\">\n            THE PEOPLE RESPONSIBLE FOR THE FUTURE SUCCESS OF MOONLIGHT:\n        </div>\n\n        <div class=\"team-box-container-content\">\n            <div class=\"team-member\" *ngFor=\"let profile of profiles\">\n                <app-user-profile [user]=\"profile\"></app-user-profile>\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    44521: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"info-card-container\">\n    <ul>\n        <li>\n            <div class=\"image-container\">\n                <img height=\"30\" width=\"30\" [src]=\"item.image\" alt=\"Image\">\n            </div>\n        </li>\n        <li>\n            <div class=\"title\">\n                {{ item.title }}\n            </div>\n        </li>\n        <li>\n            <div class=\"description\">\n                {{ item.description }}\n            </div>\n        </li>\n    </ul>\n</div>\n";
      /***/
    },

    /***/
    46129: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"message-box-container\" id=\"message-box-container\">\n    <div class=\"message-item clearfix\"\n         *ngFor=\"let message of messages; index as index\"\n         [attr.id]=\"index\"\n         [hidden]=\"hideMessageBox\"\n         [class.visible]=\"message.isVisible\">\n        <app-message-item [isHomePage]=\"isHomePage\" [message]=\"message\"></app-message-item>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    54366: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"user-profile-container\">\n    <div class=\"avatar\" [ngStyle]=\"{backgroundImage: 'url('+user.avatar+')'}\">\n    </div>\n    <div class=\"credentials\">\n        {{ user.firstName }} {{ user.lastName }}\n    </div>\n    <div class=\"role\">\n        {{ user.role }}\n    </div>\n</div>\n";
      /***/
    },

    /***/
    22289: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"message-item-container clearfix\" [class.float-right]=\"message.isQuestion\">\n    <div class=\"avatar float-left\" *ngIf=\"!message.isQuestion && !isHomePage\">\n        <img [src]=\"message.avatar\" alt=\"UserAvatar\">\n    </div>\n    <div class=\"credentials\">\n<!--        <div  class=\"message-title\"-->\n<!--              [class.color-orange]=\"message.isQuestion\"-->\n<!--              [class.color-light-blue]=\"!message.isQuestion\">-->\n<!--            {{message.title}}-->\n<!--        </div>-->\n        <div  class=\"message-title\" [ngStyle]=\"{color: message.color}\">\n            {{message.title}}\n        </div>\n        <div class=\"message-content\">{{message.content}}</div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    1914: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p-radioButton name=\"groupname\"\n               [label]=\"label\"\n               (onClick)=\"onClick()\"\n               [value]=\"selectedValue\"></p-radioButton>\n";
      /***/
    },

    /***/
    7848: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Modal -->\n<div id=\"success_tic\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <a class=\"close\" href=\"#\" data-dismiss=\"modal\">&times;</a>\n            <div class=\"page-body\">\n                <div class=\"head\">\n                    <h3 style=\"margin-top:5px;\">Lorem ipsum dolor sit amet</h3>\n                    <h4>Lorem ipsum dolor sit amet</h4>\n                </div>\n\n                <h1 style=\"text-align:center;\">\n                    <div class=\"checkmark-circle\">\n                        <div class=\"background\"></div>\n                        <div class=\"checkmark draw\"></div>\n                    </div>\n                </h1>\n\n            </div>\n        </div>\n    </div>\n\n</div>\n";
      /***/
    },

    /***/
    89234: function _(module) {
      module.exports = ".beta-container {\n  padding-top: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  max-width: 820px;\n}\n.beta-container .title {\n  color: #F9E3A7;\n  margin-bottom: 20px;\n}\n.beta-container h1 {\n  color: #F9E3A7;\n  margin-bottom: 5px;\n}\n.beta-container h5 {\n  margin-bottom: 2px;\n}\n.beta-container label {\n  color: #F9E3A7;\n}\n.beta-container input[type=text], .beta-container textarea {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #EAEAEA;\n  border-radius: 4px;\n  box-sizing: border-box;\n  margin-top: 6px;\n  margin-bottom: 16px;\n  resize: vertical;\n  background-color: #EAEAEA;\n}\n.beta-container button {\n  background-color: #F9E3A7;\n  color: #181727;\n  font-size: 16px;\n  font-weight: 800;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  width: 100%;\n  margin-top: 15px;\n}\n.beta-container .radio-button {\n  display: inline-block;\n  margin-right: 10px;\n}\n.modal {\n  position: fixed;\n  z-index: 1;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.modal-content {\n  text-align: center;\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJldGEuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2hlbHBlcnMvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBSUEsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUdJO0VBRUksY0NkRDtFRGVDLG1CQUFBO0FBRlI7QUFLSTtFQUNJLGNDbkJEO0VEb0JDLGtCQUFBO0FBSFI7QUFNSTtFQUNJLGtCQUFBO0FBSlI7QUFPSTtFQUNJLGNDNUJEO0FEdUJQO0FBUUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFOUjtBQVNJO0VBQ0kseUJDNUNEO0VENkNDLGNDdkNTO0VEd0NULGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQVBSO0FBVUk7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FBUlI7QUFZQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7QUFUSjtBQVlBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLGdDQUFBO0FBVEoiLCJmaWxlIjoiYmV0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2hlbHBlcnMvY29sb3JzXCI7XG5cbi5iZXRhLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogODIwcHg7XG5cbiAgICAudGl0bGUge1xuICAgICAgICAvL21hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIGNvbG9yOiAkZ29sZDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICBoMSB7XG4gICAgICAgIGNvbG9yOiAkZ29sZDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cblxuICAgIGg1IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIH1cblxuICAgIGxhYmVsIHtcbiAgICAgICAgY29sb3I6ICRnb2xkOztcbiAgICB9XG5cbiAgICBpbnB1dFt0eXBlPXRleHRdLCB0ZXh0YXJlYSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRUFFQUVBO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VBRUFFQTtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ29sZDtcbiAgICAgICAgY29sb3I6ICRibHVlLWRlZXAtZGFyaztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIH1cblxuICAgIC5yYWRpby1idXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG59XG5cbi5tb2RhbCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDE7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbiIsIiRibGFjazogIzFiMWIxYjtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRnb2xkOiAjRjlFM0E3O1xuXG4kYmx1ZTogIzQ4ODZmZjtcbiRibHVlLWRhcms6ICMzMDczZjY7XG4kYmx1ZS1zaGFkb3c6IHJnYmEoNzIsIDEzNCwgMjU1LCAwLjQ1KTtcbiRibHVlLWxpZ2h0OiAjMTJhNWY0O1xuJGJsdWUtZGVlcC1kYXJrOiAjMTgxNzI3O1xuXG4kZ3JleTogI2JjYzBkMTtcbiRncmV5LWxpZ2h0OiAjZTllY2Y2O1xuJGdyZXktbWlkZGxlLWxpZ2h0OiAjZDhkOGQ4O1xuJGdyZXktZGFyazogIzhjOTZhOTtcbiRncmV5LXNoYWRvdzogcmdiYSg0OSwgNTYsIDc4LCAwLjE4KTtcblxuJHJlZDogI2Q1MDAwMDtcbiRwaW5rOiAjZWE0MTgzO1xuJGNvcmFsOiAjZmY2YzVmO1xuJGdyZWVuOiAjMjBhZDIzO1xuJGdyZWVuLWRhcms6ICMxMDdmMTI7XG4kZ3JlZW4tbGlnaHQ6ICNiOWMyMzc7XG4kb3JhbmdlLWxpZ2h0OiAjRjlFM0E3O1xuJG9yYW5nZTogI2ZiYWQ1MDtcbiRwdXJwbGU6ICM2YjRmZWI7XG4kYmx1ZS1ncmVlbjogIzAwYTI4OTtcbiRkYXJrLWJsdWU6ICMyOTJGM0Y7XG5cblxuIl19 */";
      /***/
    },

    /***/
    49035: function _(module) {
      module.exports = ".contact-container {\n  padding-top: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  max-width: 1200px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.contact-container img {\n  width: 45%;\n}\n.contact-container label {\n  color: #F9E3A7;\n  font-size: 16px;\n}\n.contact-container input[type=text], .contact-container textarea {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  margin-top: 6px;\n  margin-bottom: 16px;\n  resize: vertical;\n  background-color: #EAEAEA;\n}\n.contact-container button {\n  background-color: #F9E3A7;\n  color: #181727;\n  font-weight: 800;\n  font-size: 16px;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  width: 100%;\n}\n.contact-container button[disabled] {\n  border: 1px solid #999999;\n  background-color: #cccccc;\n  color: #666666;\n}\n.contact-container textarea {\n  height: 200px;\n}\n.contact-container .info-text {\n  margin-top: 15px;\n  font-size: 12px;\n  font-style: italic;\n}\n.modal {\n  position: fixed;\n  z-index: 1;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.modal .modal-content {\n  text-align: center;\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n@media only screen and (max-width: 520px) {\n  .contact-container {\n    flex-wrap: wrap;\n    padding-top: 30px;\n  }\n  .contact-container img {\n    width: 70%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2hlbHBlcnMvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBSUEsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQURKO0FBR0k7RUFDSSxVQUFBO0FBRFI7QUFJSTtFQUNJLGNDcEJEO0VEcUJDLGVBQUE7QUFGUjtBQUtJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBSFI7QUFNSTtFQUNJLHlCQ3JDRDtFRHNDQyxjQ2hDUztFRGlDVCxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBSlI7QUFNUTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBSlo7QUFRSTtFQUNJLGFBQUE7QUFOUjtBQVNJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFQUjtBQVdBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtBQVJKO0FBVUk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsZ0NBQUE7QUFSUjtBQWFBO0VBQ0k7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7RUFWTjtFQVlNO0lBQ0ksVUFBQTtFQVZWO0FBQ0YiLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2hlbHBlcnMvY29sb3JzXCI7XG5cbi5jb250YWN0LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogNDUlO1xuICAgIH1cblxuICAgIGxhYmVsIHtcbiAgICAgICAgY29sb3I6ICRnb2xkO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgaW5wdXRbdHlwZT10ZXh0XSwgdGV4dGFyZWEge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgIHJlc2l6ZTogdmVydGljYWw7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQUVBRUE7XG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGQ7XG4gICAgICAgIGNvbG9yOiAkYmx1ZS1kZWVwLWRhcms7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGV4dGFyZWEge1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIH1cblxuICAgIC5pbmZvLXRleHQge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICB9XG59XG5cbi5tb2RhbCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDE7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuXG4gICAgLm1vZGFsLWNvbnRlbnQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cblxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyMHB4KSB7XG4gICAgLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIiRibGFjazogIzFiMWIxYjtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRnb2xkOiAjRjlFM0E3O1xuXG4kYmx1ZTogIzQ4ODZmZjtcbiRibHVlLWRhcms6ICMzMDczZjY7XG4kYmx1ZS1zaGFkb3c6IHJnYmEoNzIsIDEzNCwgMjU1LCAwLjQ1KTtcbiRibHVlLWxpZ2h0OiAjMTJhNWY0O1xuJGJsdWUtZGVlcC1kYXJrOiAjMTgxNzI3O1xuXG4kZ3JleTogI2JjYzBkMTtcbiRncmV5LWxpZ2h0OiAjZTllY2Y2O1xuJGdyZXktbWlkZGxlLWxpZ2h0OiAjZDhkOGQ4O1xuJGdyZXktZGFyazogIzhjOTZhOTtcbiRncmV5LXNoYWRvdzogcmdiYSg0OSwgNTYsIDc4LCAwLjE4KTtcblxuJHJlZDogI2Q1MDAwMDtcbiRwaW5rOiAjZWE0MTgzO1xuJGNvcmFsOiAjZmY2YzVmO1xuJGdyZWVuOiAjMjBhZDIzO1xuJGdyZWVuLWRhcms6ICMxMDdmMTI7XG4kZ3JlZW4tbGlnaHQ6ICNiOWMyMzc7XG4kb3JhbmdlLWxpZ2h0OiAjRjlFM0E3O1xuJG9yYW5nZTogI2ZiYWQ1MDtcbiRwdXJwbGU6ICM2YjRmZWI7XG4kYmx1ZS1ncmVlbjogIzAwYTI4OTtcbiRkYXJrLWJsdWU6ICMyOTJGM0Y7XG5cblxuIl19 */";
      /***/
    },

    /***/
    5060: function _(module) {
      module.exports = ".dashboard {\n  background-image: url('main-background.svg');\n  color: white;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.dashboard .main-container {\n  max-width: 1240px;\n  width: 100%;\n  margin: 0 auto;\n}\n.dashboard .header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1500;\n  transition: transform 800ms;\n}\n.dashboard .download-links {\n  position: absolute;\n  bottom: 20px;\n  right: 87px;\n  z-index: 10;\n}\n.dashboard .download-links ul {\n  border-radius: 5px;\n}\n.dashboard .download-links ul li {\n  display: inline-block;\n  padding: 10px 15px;\n  transition: 1s;\n  cursor: pointer;\n  background-color: #F9E3A7;\n}\n.dashboard .download-links ul li:not(:last-child) {\n  border-right: 1px solid grey;\n}\n.dashboard .download-links ul li a {\n  color: #ffffff;\n  font-size: 15px;\n}\n.dashboard .download-links ul li:hover {\n  background-color: #181727;\n  color: #ffffff;\n  border-radius: 5px;\n  transition: 0.5s;\n}\n.icon-googleplay:before {\n  color: white;\n}\n@media only screen and (max-width: 800px) {\n  .dashboard .download-links {\n    right: 10px;\n  }\n\n  .switch-profile {\n    right: 0;\n  }\n}\n@media only screen and (max-width: 410px) {\n  .dashboard .download-links ul li {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvaGVscGVycy9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSw0Q0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFGSjtBQUlJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUZSO0FBS0k7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFHQSwyQkFBQTtBQUxSO0FBUUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQU5SO0FBUVE7RUFDSSxrQkFBQTtBQU5aO0FBUVk7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkMzQ1Q7QURxQ1A7QUFRZ0I7RUFDSSw0QkFBQTtBQU5wQjtBQVNnQjtFQUNJLGNDbkRaO0VEb0RZLGVBQUE7QUFQcEI7QUFVZ0I7RUFDSSx5QkNqREg7RURrREcsY0N6RFo7RUQwRFksa0JBQUE7RUFDQSxnQkFBQTtBQVJwQjtBQWVBO0VBQ0ksWUFBQTtBQVpKO0FBZUE7RUFNUTtJQUNJLFdBQUE7RUFqQlY7O0VBcUJFO0lBQ0ksUUFBQTtFQWxCTjtBQUNGO0FBNkJBO0VBSWdCO0lBQ0ksY0FBQTtFQTlCbEI7QUFDRiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9oZWxwZXJzL2NvbG9yc1wiO1xuXG4uZGFzaGJvYXJkIHtcbiAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmdfc3RhcnMucG5nXCIpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFpbi1iYWNrZ3JvdW5kLnN2Z1wiKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgICAubWFpbi1jb250YWluZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDEyNDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cblxuICAgIC5oZWFkZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHotaW5kZXg6IDE1MDA7XG4gICAgICAgIC8vcGFkZGluZy1yaWdodDogMjVweDtcbiAgICAgICAgLy9wYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDgwMG1zO1xuICAgIH1cblxuICAgIC5kb3dubG9hZC1saW5rcyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICByaWdodDogODdweDtcbiAgICAgICAgei1pbmRleDogMTA7XG5cbiAgICAgICAgdWwge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAxcztcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdvbGQ7XG5cbiAgICAgICAgICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmV5O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlLWRlZXAtZGFyaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uaWNvbi1nb29nbGVwbGF5OmJlZm9yZSB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgLmRhc2hib2FyZCB7XG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgLy9wYWRkaW5nOiAzMHB4IDE1cHggMzBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRvd25sb2FkLWxpbmtzIHtcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnN3aXRjaC1wcm9maWxlIHtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ5MHB4KSB7XG4gICAgLmRhc2hib2FyZCB7XG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgLy9wYWRkaW5nOiAzMHB4IDE1cHggMzBweCAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxMHB4KSB7XG4gICAgLmRhc2hib2FyZCB7XG4gICAgICAgIC5kb3dubG9hZC1saW5rcyB7XG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIkYmxhY2s6ICMxYjFiMWI7XG4kd2hpdGU6ICNmZmZmZmY7XG4kZ29sZDogI0Y5RTNBNztcblxuJGJsdWU6ICM0ODg2ZmY7XG4kYmx1ZS1kYXJrOiAjMzA3M2Y2O1xuJGJsdWUtc2hhZG93OiByZ2JhKDcyLCAxMzQsIDI1NSwgMC40NSk7XG4kYmx1ZS1saWdodDogIzEyYTVmNDtcbiRibHVlLWRlZXAtZGFyazogIzE4MTcyNztcblxuJGdyZXk6ICNiY2MwZDE7XG4kZ3JleS1saWdodDogI2U5ZWNmNjtcbiRncmV5LW1pZGRsZS1saWdodDogI2Q4ZDhkODtcbiRncmV5LWRhcms6ICM4Yzk2YTk7XG4kZ3JleS1zaGFkb3c6IHJnYmEoNDksIDU2LCA3OCwgMC4xOCk7XG5cbiRyZWQ6ICNkNTAwMDA7XG4kcGluazogI2VhNDE4MztcbiRjb3JhbDogI2ZmNmM1ZjtcbiRncmVlbjogIzIwYWQyMztcbiRncmVlbi1kYXJrOiAjMTA3ZjEyO1xuJGdyZWVuLWxpZ2h0OiAjYjljMjM3O1xuJG9yYW5nZS1saWdodDogI0Y5RTNBNztcbiRvcmFuZ2U6ICNmYmFkNTA7XG4kcHVycGxlOiAjNmI0ZmViO1xuJGJsdWUtZ3JlZW46ICMwMGEyODk7XG4kZGFyay1ibHVlOiAjMjkyRjNGO1xuXG5cbiJdfQ== */";
      /***/
    },

    /***/
    82294: function _(module) {
      module.exports = ".home-container .no-scale {\n  transform: scale(1, 0);\n  transition: 0.8s;\n  transform-origin: bottom;\n}\n.home-container .scale {\n  transform: scale(1, 1);\n  transition: 0.5s;\n  transform-origin: bottom;\n}\n.home-container .message-box-modal {\n  display: none;\n  position: absolute;\n  background-image: url('main-background.svg');\n  z-index: 2;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n}\n.home-container .message-box-modal img {\n  position: absolute;\n  bottom: 30px;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.home-container .hide {\n  transform: scale(1, 0);\n  transition: 0.8s;\n  transform-origin: top;\n}\n.home-container .show {\n  transform: scale(1, 1);\n  transition: 0.5s;\n  transform-origin: top;\n}\n.home-container .message-box-content {\n  top: 50%;\n  left: 50%;\n  text-align: center;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  width: 100%;\n  max-width: 1200px;\n}\n.home-container .message-box-content p {\n  color: white;\n  font-size: 45px;\n}\n.home-container .message-box-content .angle-top {\n  margin-top: 30px;\n}\n.home-container .message-box-content .angle-top i {\n  font-size: 12px;\n  color: #12a5f4;\n}\n.home-container .message-box-content .back-button-text {\n  font-size: 15px;\n  margin-top: 10px;\n}\n.home-container .home-section {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  max-width: 1200px;\n  height: 800px;\n  background: url('mockupiphone.svg') no-repeat left;\n  background-size: 800px;\n  background-position: -10% 25%;\n}\n.home-container .home-section .section-title {\n  font-size: 80px;\n  margin: 130px 0 0;\n  color: #ffffff;\n}\n.home-container .angle {\n  position: absolute;\n  bottom: 20px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: 100px;\n  height: 100px;\n  font-size: 20px;\n}\n.home-container .angle img {\n  cursor: pointer;\n  height: auto;\n  width: 50px;\n}\n.home-container .angle i {\n  cursor: pointer;\n}\n.home-container div.angle {\n  -webkit-animation: mover 1s infinite alternate;\n  animation: mover 1s infinite alternate;\n}\n.home-container div.angle {\n  -webkit-animation: mover 1s infinite alternate;\n  animation: mover 1s infinite alternate;\n}\n@-webkit-keyframes mover {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-10px);\n  }\n}\n@keyframes mover {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-10px);\n  }\n}\n.home-container .play-icon-container {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  cursor: pointer;\n  height: 77px;\n  width: 77px;\n  border-radius: 50%;\n  background-color: rgba(255, 255, 255, 0.5);\n  justify-content: center;\n  align-items: center;\n}\n.icon-googleplay:before {\n  color: white;\n}\n@media only screen and (max-width: 800px) {\n  .home-container .angle {\n    display: none;\n  }\n  .home-container .home-section-message-box {\n    display: none;\n  }\n  .home-container .message-box-modal {\n    display: block;\n  }\n  .home-container .play-icon-container {\n    display: flex;\n  }\n  .home-container .home-section {\n    background-size: 1000px;\n    background-position: 43% 5%;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2hlbHBlcnMvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBRlI7QUFLSTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQUhSO0FBTUk7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBSlI7QUFNUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQUpaO0FBVUk7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFSUjtBQVdJO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBVFI7QUFZSTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFJQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBVlI7QUFZUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBVlo7QUFhUTtFQUNJLGdCQUFBO0FBWFo7QUFhWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBWGhCO0FBZVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFiWjtBQWlCSTtFQUNJLGtCQUFBO0VBRUEsUUFBQTtFQUNBLFNBQUE7RUFJQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrREFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFoQlI7QUFrQlE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQ2pHSjtBRGlGUjtBQW9CSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQWxCUjtBQW9CUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQWxCWjtBQXFCUTtFQUNJLGVBQUE7QUFuQlo7QUF1Qkk7RUFDSSw4Q0FBQTtFQUNBLHNDQUFBO0FBckJSO0FBd0JJO0VBQ0ksOENBQUE7RUFDQSxzQ0FBQTtBQXRCUjtBQXlCSTtFQUNJO0lBQ0ksd0JBQUE7RUF2QlY7RUF5Qk07SUFDSSw0QkFBQTtFQXZCVjtBQUNGO0FBeUJJO0VBQ0k7SUFDSSx3QkFBQTtFQXZCVjtFQXlCTTtJQUNJLDRCQUFBO0VBdkJWO0FBQ0Y7QUEwQkk7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUF4QlI7QUE0QkE7RUFDSSxZQUFBO0FBekJKO0FBNEJBO0VBR1E7SUFDSSxhQUFBO0VBM0JWO0VBOEJNO0lBQ0ksYUFBQTtFQTVCVjtFQStCTTtJQUNJLGNBQUE7RUE3QlY7RUFnQ007SUFDSSxhQUFBO0VBOUJWO0VBaUNNO0lBQ0ksdUJBQUE7SUFDQSwyQkFBQTtJQUNBLFdBQUE7RUEvQlY7QUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvaGVscGVycy9jb2xvcnNcIjtcblxuLmhvbWUtY29udGFpbmVyIHtcbiAgICAubm8tc2NhbGUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDApO1xuICAgICAgICB0cmFuc2l0aW9uOiAuOHM7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcbiAgICB9XG5cbiAgICAuc2NhbGUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcbiAgICB9XG5cbiAgICAubWVzc2FnZS1ib3gtbW9kYWwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFpbi1iYWNrZ3JvdW5kLnN2Z1wiKTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDMwcHg7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKVxuICAgICAgICB9XG5cbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMjkyRjNGO1xuICAgIH1cblxuICAgIC5oaWRlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAwKTtcbiAgICAgICAgdHJhbnNpdGlvbjogLjhzO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgfVxuXG4gICAgLnNob3cge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICB9XG5cbiAgICAubWVzc2FnZS1ib3gtY29udGVudCB7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYW5nbGUtdG9wIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzEyYTVmNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5iYWNrLWJ1dHRvbi10ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaG9tZS1zZWN0aW9uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAvL2JvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgICAgIGhlaWdodDogODAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL21vY2t1cGlwaG9uZS5zdmcpIG5vLXJlcGVhdCBsZWZ0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDgwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTAlIDI1JTtcblxuICAgICAgICAuc2VjdGlvbi10aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDEzMHB4IDAgMDtcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYW5nbGUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBpIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpdi5hbmdsZSB7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlciAxcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gICAgICAgIGFuaW1hdGlvbjogbW92ZXIgMXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIH1cblxuICAgIGRpdi5hbmdsZSB7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlciAxcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gICAgICAgIGFuaW1hdGlvbjogbW92ZXIgMXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIH1cblxuICAgIEAtd2Via2l0LWtleWZyYW1lcyBtb3ZlciB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBtb3ZlciB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucGxheS1pY29uLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgaGVpZ2h0OiA3N3B4O1xuICAgICAgICB3aWR0aDogNzdweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxufVxuXG4uaWNvbi1nb29nbGVwbGF5OmJlZm9yZSB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgLmhvbWUtY29udGFpbmVyIHtcblxuICAgICAgICAuYW5nbGUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ob21lLXNlY3Rpb24tbWVzc2FnZS1ib3gge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZXNzYWdlLWJveC1tb2RhbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5wbGF5LWljb24tY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cblxuICAgICAgICAuaG9tZS1zZWN0aW9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDMlIDUlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIkYmxhY2s6ICMxYjFiMWI7XG4kd2hpdGU6ICNmZmZmZmY7XG4kZ29sZDogI0Y5RTNBNztcblxuJGJsdWU6ICM0ODg2ZmY7XG4kYmx1ZS1kYXJrOiAjMzA3M2Y2O1xuJGJsdWUtc2hhZG93OiByZ2JhKDcyLCAxMzQsIDI1NSwgMC40NSk7XG4kYmx1ZS1saWdodDogIzEyYTVmNDtcbiRibHVlLWRlZXAtZGFyazogIzE4MTcyNztcblxuJGdyZXk6ICNiY2MwZDE7XG4kZ3JleS1saWdodDogI2U5ZWNmNjtcbiRncmV5LW1pZGRsZS1saWdodDogI2Q4ZDhkODtcbiRncmV5LWRhcms6ICM4Yzk2YTk7XG4kZ3JleS1zaGFkb3c6IHJnYmEoNDksIDU2LCA3OCwgMC4xOCk7XG5cbiRyZWQ6ICNkNTAwMDA7XG4kcGluazogI2VhNDE4MztcbiRjb3JhbDogI2ZmNmM1ZjtcbiRncmVlbjogIzIwYWQyMztcbiRncmVlbi1kYXJrOiAjMTA3ZjEyO1xuJGdyZWVuLWxpZ2h0OiAjYjljMjM3O1xuJG9yYW5nZS1saWdodDogI0Y5RTNBNztcbiRvcmFuZ2U6ICNmYmFkNTA7XG4kcHVycGxlOiAjNmI0ZmViO1xuJGJsdWUtZ3JlZW46ICMwMGEyODk7XG4kZGFyay1ibHVlOiAjMjkyRjNGO1xuXG5cbiJdfQ== */";
      /***/
    },

    /***/
    94831: function _(module) {
      module.exports = ".invest-on-us-container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  max-width: 820px;\n  width: 100%;\n  height: 90vh;\n  overflow-y: auto;\n  margin-top: 80px;\n  padding-bottom: 100px;\n}\n.invest-on-us-container .container-header {\n  display: flex;\n  align-items: center;\n}\n.invest-on-us-container .container-header img {\n  width: 45%;\n}\n.invest-on-us-container .container-header .container-content p {\n  color: #F9E3A7;\n}\n.invest-on-us-container .container-header .container-content p:not(:last-child) {\n  margin-bottom: 20px;\n}\n.invest-on-us-container .container-header .container-content p:first-child {\n  font-size: 20px;\n  font-weight: 800;\n}\n.invest-on-us-container .container-footer {\n  margin-bottom: 50px;\n  background-color: #EAEAEA;\n  padding: 40px;\n  margin-top: 50px;\n}\n.invest-on-us-container .container-footer .footer-title {\n  text-align: center;\n  font-size: 16px;\n  color: #181727;\n  font-weight: 800;\n  margin-bottom: 20px;\n}\n.invest-on-us-container .container-footer .form-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  flex: 1;\n}\n.invest-on-us-container .container-footer .form-container div {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  grid-gap: 20px;\n  gap: 20px;\n}\n.invest-on-us-container .container-footer .form-container div:not(:last-child) {\n  margin-bottom: 20px;\n}\n.invest-on-us-container .container-footer .form-container div input {\n  padding: 10px;\n}\n.invest-on-us-container .container-footer .form-container div input, .invest-on-us-container .container-footer .form-container div button {\n  height: 35px;\n  width: 50%;\n  border-radius: 5px;\n  border: none;\n}\n.invest-on-us-container .container-footer .form-container div button {\n  background-color: #181727;\n  color: #ffffff;\n  border: none;\n  cursor: pointer;\n}\n.invest-on-us-container .container-footer .form-container div button[disabled] {\n  border: 1px solid #999999;\n  background-color: #cccccc;\n  color: #666666;\n}\n.modal {\n  position: fixed;\n  z-index: 1;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.modal .modal-content {\n  text-align: center;\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #F9E3A7;\n}\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n/* Hide scrollbar for Chrome, Safari and Opera */\n.scroll::-webkit-scrollbar {\n  display: none;\n}\n/* Hide scrollbar for IE, Edge and Firefox */\n.scroll {\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n}\n@media only screen and (max-width: 800px) {\n  .invest-on-us-container {\n    padding: 20px;\n  }\n  .invest-on-us-container .container-header {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  .invest-on-us-container .container-header img {\n    width: 55%;\n  }\n  .invest-on-us-container .container-footer {\n    margin-bottom: 50px;\n  }\n  .invest-on-us-container .container-footer .form-container div {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  .invest-on-us-container .container-footer .form-container div input, .invest-on-us-container .container-footer .form-container div button {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludmVzdC1pbi11cy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvaGVscGVycy9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBSUEsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBREo7QUFHSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQURSO0FBR1E7RUFDSSxVQUFBO0FBRFo7QUFLWTtFQUNJLGNDekJUO0FEc0JQO0FBS2dCO0VBQ0ksbUJBQUE7QUFIcEI7QUFNZ0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFKcEI7QUFVSTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFSUjtBQVVRO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0MxQ0s7RUQyQ0wsZ0JBQUE7RUFDQSxtQkFBQTtBQVJaO0FBV1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0FBVFo7QUFZWTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBVmhCO0FBWWdCO0VBQ0ksbUJBQUE7QUFWcEI7QUFhZ0I7RUFDSSxhQUFBO0FBWHBCO0FBY2dCO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFacEI7QUFlZ0I7RUFDSSx5QkFBQTtFQUNBLGNDdEZaO0VEdUZZLFlBQUE7RUFDQSxlQUFBO0FBYnBCO0FBZW9CO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFieEI7QUFxQkE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG9DQUFBO0FBbEJKO0FBb0JJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLGdDQUFBO0FBbEJSO0FBdUJBO0VBQ0ksUUFBQTtBQXBCSjtBQXVCQSxVQUFBO0FBQ0E7RUFDSSxtQkFBQTtBQXBCSjtBQXVCQSxXQUFBO0FBQ0E7RUFFSSxtQkN4SUc7QURtSFA7QUF3QkEsb0JBQUE7QUFDQTtFQUNJLGdCQUFBO0FBckJKO0FBd0JBLGdEQUFBO0FBQ0E7RUFDSSxhQUFBO0FBckJKO0FBd0JBLDRDQUFBO0FBQ0E7RUFDSSx3QkFBQTtFQUEyQixnQkFBQTtFQUMzQixxQkFBQTtFQUF3QixZQUFBO0FBbkI1QjtBQXNCQTtFQUNJO0lBQ0ksYUFBQTtFQW5CTjtFQXFCTTtJQUNJLGVBQUE7SUFDQSx1QkFBQTtFQW5CVjtFQXFCVTtJQUNJLFVBQUE7RUFuQmQ7RUF1Qk07SUFDSSxtQkFBQTtFQXJCVjtFQXVCYztJQUNJLGVBQUE7SUFDQSx1QkFBQTtFQXJCbEI7RUF1QmtCO0lBQ0ksV0FBQTtFQXJCdEI7QUFDRiIsImZpbGUiOiJpbnZlc3QtaW4tdXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9oZWxwZXJzL2NvbG9yc1wiO1xuXG4uaW52ZXN0LW9uLXVzLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIG1heC13aWR0aDogODIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogODBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG5cbiAgICAuY29udGFpbmVyLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyLWNvbnRlbnQge1xuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRnb2xkO1xuXG4gICAgICAgICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb250YWluZXItZm9vdGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VBRUFFQTtcbiAgICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcblxuICAgICAgICAuZm9vdGVyLXRpdGxlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGNvbG9yOiAkYmx1ZS1kZWVwLWRhcms7XG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIGZsZXg6IDE7XG5cblxuICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGdhcDogMjBweDtcblxuICAgICAgICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlucHV0LCBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxODE3Mjc7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICAgICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk5OTk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2NjY2NjY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5tb2RhbCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDE7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuXG4gICAgLm1vZGFsLWNvbnRlbnQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cblxufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbi8qIEhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgLy9iYWNrZ3JvdW5kOiAkYmx1ZTtcbiAgICBiYWNrZ3JvdW5kOiAkZ29sZDtcbn1cblxuLyogSGFuZGxlIG9uIGhvdmVyICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xufVxuXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXG4uc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXG4uc2Nyb2xsIHtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJRSBhbmQgRWRnZSAqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8qIEZpcmVmb3ggKi9cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5pbnZlc3Qtb24tdXMtY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZzogMjBweDtcblxuICAgICAgICAuY29udGFpbmVyLWhlYWRlciB7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTUlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lci1mb290ZXIge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgICAgICBpbnB1dCwgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4iLCIkYmxhY2s6ICMxYjFiMWI7XG4kd2hpdGU6ICNmZmZmZmY7XG4kZ29sZDogI0Y5RTNBNztcblxuJGJsdWU6ICM0ODg2ZmY7XG4kYmx1ZS1kYXJrOiAjMzA3M2Y2O1xuJGJsdWUtc2hhZG93OiByZ2JhKDcyLCAxMzQsIDI1NSwgMC40NSk7XG4kYmx1ZS1saWdodDogIzEyYTVmNDtcbiRibHVlLWRlZXAtZGFyazogIzE4MTcyNztcblxuJGdyZXk6ICNiY2MwZDE7XG4kZ3JleS1saWdodDogI2U5ZWNmNjtcbiRncmV5LW1pZGRsZS1saWdodDogI2Q4ZDhkODtcbiRncmV5LWRhcms6ICM4Yzk2YTk7XG4kZ3JleS1zaGFkb3c6IHJnYmEoNDksIDU2LCA3OCwgMC4xOCk7XG5cbiRyZWQ6ICNkNTAwMDA7XG4kcGluazogI2VhNDE4MztcbiRjb3JhbDogI2ZmNmM1ZjtcbiRncmVlbjogIzIwYWQyMztcbiRncmVlbi1kYXJrOiAjMTA3ZjEyO1xuJGdyZWVuLWxpZ2h0OiAjYjljMjM3O1xuJG9yYW5nZS1saWdodDogI0Y5RTNBNztcbiRvcmFuZ2U6ICNmYmFkNTA7XG4kcHVycGxlOiAjNmI0ZmViO1xuJGJsdWUtZ3JlZW46ICMwMGEyODk7XG4kZGFyay1ibHVlOiAjMjkyRjNGO1xuXG5cbiJdfQ== */";
      /***/
    },

    /***/
    2123: function _(module) {
      module.exports = ".team-container {\n  height: 100vh;\n  overflow-y: auto;\n}\n.team-container .switch-profile {\n  position: absolute;\n  right: 90px;\n  margin-top: 5px;\n  z-index: 1600;\n  top: 70px;\n}\n.team-container .container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n}\n.team-container .team-header-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-gap: 80px;\n  gap: 80px;\n  max-width: 900px;\n  width: 100%;\n  margin: 0 auto;\n  margin-top: 150px;\n  margin-bottom: 70px;\n  flex-wrap: wrap;\n  padding: 10px;\n}\n.team-container .team-header-container .image-container {\n  flex: 1 1 160px;\n}\n.team-container .team-header-container .image-container img {\n  width: 100%;\n}\n.team-container .team-header-container .description-container {\n  flex: 1 1 160px;\n  line-height: 30px;\n  word-break: break-word;\n  color: #F9E3A7;\n}\n.team-container .team-info-container {\n  background-color: #E5E5E5;\n  text-align: center;\n  padding: 15px;\n  padding-top: 50px;\n}\n.team-container .team-info-container .info-card-item {\n  display: inline-block;\n  vertical-align: top;\n  max-width: 200px;\n  width: 100%;\n  margin-bottom: 50px;\n  margin-right: 100px;\n}\n.team-container .message-box-container {\n  height: 650px;\n  max-width: 820px;\n}\n.team-container .team-box-container {\n  max-width: 1180px;\n  padding: 10px 15px;\n  transition: 0.5s;\n  margin-top: 120px;\n  padding-bottom: 50px;\n}\n.team-container .team-box-container .team-title {\n  color: #F9E3A7;\n  margin-left: 95px;\n  font-size: 20px;\n  font-weight: 800;\n  text-align: left;\n  margin-bottom: 80px;\n}\n.team-container .team-box-container .team-box-container-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-gap: 100px;\n  gap: 100px;\n  flex-wrap: wrap;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #F9E3A7;\n}\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n/* Hide scrollbar for Chrome, Safari and Opera */\n.scroll::-webkit-scrollbar {\n  display: none;\n}\n/* Hide scrollbar for IE, Edge and Firefox */\n.scroll {\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n}\n@media only screen and (max-width: 800px) {\n  .team-container .switch-profile {\n    right: 5px;\n  }\n  .team-container .team-info-container .info-card-item {\n    margin-right: unset;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYW0uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2hlbHBlcnMvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBRko7QUFJSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQUZSO0FBS0k7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBSUEsZ0NBQUE7RUFDQSxXQUFBO0FBSFI7QUFNSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBSlI7QUFNUTtFQUNJLGVBQUE7QUFKWjtBQUtZO0VBQ0ksV0FBQTtBQUhoQjtBQU9RO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBTFo7QUFTSTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFQUjtBQVNRO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFQWjtBQVdJO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBVFI7QUFZSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFWUjtBQVlRO0VBQ0ksY0NqRkw7RURrRkssaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBVlo7QUFhUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUFBLFVBQUE7RUFDQSxlQUFBO0FBWFo7QUFvQkE7RUFDSSxRQUFBO0FBbEJKO0FBcUJBLFVBQUE7QUFDQTtFQUNJLG1CQUFBO0FBbEJKO0FBcUJBLFdBQUE7QUFDQTtFQUVJLG1CQ25IRztBRGdHUDtBQXNCQSxvQkFBQTtBQUNBO0VBQ0ksZ0JBQUE7QUFuQko7QUFzQkEsZ0RBQUE7QUFDQTtFQUNJLGFBQUE7QUFuQko7QUFzQkEsNENBQUE7QUFDQTtFQUNJLHdCQUFBO0VBQTJCLGdCQUFBO0VBQzNCLHFCQUFBO0VBQXdCLFlBQUE7QUFqQjVCO0FBb0JBO0VBRVE7SUFDSSxVQUFBO0VBbEJWO0VBc0JVO0lBQ0ksbUJBQUE7RUFwQmQ7QUFDRiIsImZpbGUiOiJ0ZWFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvaGVscGVycy9jb2xvcnNcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2hlbHBlcnMvbWl4aW5zXCI7XG5cbi50ZWFtLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gICAgLnN3aXRjaC1wcm9maWxlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogOTBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICB6LWluZGV4OiAxNjAwO1xuICAgICAgICB0b3A6IDcwcHg7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnRlYW0taGVhZGVyLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBnYXA6IDgwcHg7XG4gICAgICAgIG1heC13aWR0aDogOTAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcblxuICAgICAgICAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGZsZXg6IDEgMSAxNjBweDtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZGVzY3JpcHRpb24tY29udGFpbmVyICB7XG4gICAgICAgICAgICBmbGV4OiAxIDEgMTYwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICBjb2xvcjogI0Y5RTNBNztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50ZWFtLWluZm8tY29udGFpbmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTVFNTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcblxuICAgICAgICAuaW5mby1jYXJkLWl0ZW0ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm1lc3NhZ2UtYm94LWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogNjUwcHg7XG4gICAgICAgIG1heC13aWR0aDogODIwcHg7XG4gICAgfVxuXG4gICAgLnRlYW0tYm94LWNvbnRhaW5lciB7XG4gICAgICAgIG1heC13aWR0aDogMTE4MHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICAgIHRyYW5zaXRpb246IC41cztcbiAgICAgICAgbWFyZ2luLXRvcDogMTIwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuXG4gICAgICAgIC50ZWFtLXRpdGxlIHtcbiAgICAgICAgICAgIGNvbG9yOiAkZ29sZDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA5NXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRlYW0tYm94LWNvbnRhaW5lci1jb250ZW50IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBnYXA6IDEwMHB4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgICAgICAudGVhbS1tZW1iZXIge1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAwO1xufVxuXG4vKiBUcmFjayAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAvL2JhY2tncm91bmQ6ICRibHVlO1xuICAgIGJhY2tncm91bmQ6ICRnb2xkO1xufVxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICM1NTU7XG59XG5cbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cbi5zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cbi5zY3JvbGwge1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8qIElFIGFuZCBFZGdlICovXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgLyogRmlyZWZveCAqL1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgLnRlYW0tY29udGFpbmVyIHtcbiAgICAgICAgLnN3aXRjaC1wcm9maWxlIHtcbiAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGVhbS1pbmZvLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAuaW5mby1jYXJkLWl0ZW0ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIkYmxhY2s6ICMxYjFiMWI7XG4kd2hpdGU6ICNmZmZmZmY7XG4kZ29sZDogI0Y5RTNBNztcblxuJGJsdWU6ICM0ODg2ZmY7XG4kYmx1ZS1kYXJrOiAjMzA3M2Y2O1xuJGJsdWUtc2hhZG93OiByZ2JhKDcyLCAxMzQsIDI1NSwgMC40NSk7XG4kYmx1ZS1saWdodDogIzEyYTVmNDtcbiRibHVlLWRlZXAtZGFyazogIzE4MTcyNztcblxuJGdyZXk6ICNiY2MwZDE7XG4kZ3JleS1saWdodDogI2U5ZWNmNjtcbiRncmV5LW1pZGRsZS1saWdodDogI2Q4ZDhkODtcbiRncmV5LWRhcms6ICM4Yzk2YTk7XG4kZ3JleS1zaGFkb3c6IHJnYmEoNDksIDU2LCA3OCwgMC4xOCk7XG5cbiRyZWQ6ICNkNTAwMDA7XG4kcGluazogI2VhNDE4MztcbiRjb3JhbDogI2ZmNmM1ZjtcbiRncmVlbjogIzIwYWQyMztcbiRncmVlbi1kYXJrOiAjMTA3ZjEyO1xuJGdyZWVuLWxpZ2h0OiAjYjljMjM3O1xuJG9yYW5nZS1saWdodDogI0Y5RTNBNztcbiRvcmFuZ2U6ICNmYmFkNTA7XG4kcHVycGxlOiAjNmI0ZmViO1xuJGJsdWUtZ3JlZW46ICMwMGEyODk7XG4kZGFyay1ibHVlOiAjMjkyRjNGO1xuXG5cbiJdfQ== */";
      /***/
    },

    /***/
    97016: function _(module) {
      module.exports = ".info-card-container {\n  color: #181727;\n}\n.info-card-container ul li .image-container {\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  background-color: #181727;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.info-card-container ul li .title {\n  word-break: break-word;\n  font-weight: 800;\n  font-size: 20px;\n  text-align: left;\n}\n.info-card-container ul li .description {\n  font-size: 12px;\n  text-align: left;\n}\n.info-card-container ul li:not(:last-child) {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8tY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjtBQUdZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFEaEI7QUFJWTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFGaEI7QUFLWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUhoQjtBQU1ZO0VBQ0ksbUJBQUE7QUFKaEIiLCJmaWxlIjoiaW5mby1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm8tY2FyZC1jb250YWluZXIge1xuICAgIGNvbG9yOiAjMTgxNzI3O1xuXG4gICAgdWwge1xuICAgICAgICBsaSB7XG4gICAgICAgICAgICAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxODE3Mjc7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    60282: function _(module) {
      module.exports = ".message-box-container {\n  margin: auto;\n  max-width: 350px;\n  margin-left: 90px;\n  width: 100%;\n  min-width: 250px;\n  position: fixed;\n  top: 40%;\n  left: 60%;\n  transition: all 0.5s;\n  transform: translate(-50%, -90px);\n}\n.message-box-container .visible {\n  opacity: 1 !important;\n}\n.message-box-container .message-item {\n  position: relative;\n  padding: 5px 2.5px;\n  border-radius: 25px;\n  font-family: Verdana sans-serif;\n  letter-spacing: 0.02em;\n  font-size: 20px;\n  line-height: 1.2;\n  font-weight: normal;\n  opacity: 0;\n  transform: translateY(20px) scale(0.9);\n  transition: transform 150ms, opacity 150ms;\n}\n@media only screen and (max-width: 800px) {\n  .message-box-container {\n    margin-left: 0;\n    top: 50%;\n    left: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UtYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGlDQUFBO0FBRko7QUFJSTtFQUNJLHFCQUFBO0FBRlI7QUFLSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFJQSxzQ0FBQTtFQUNBLDBDQUFBO0FBSFI7QUFPQTtFQUNJO0lBQ0ksY0FBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0VBSk47QUFDRiIsImZpbGUiOiJtZXNzYWdlLWJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2hlbHBlcnMvY29sb3JzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9oZWxwZXJzL21peGluc1wiO1xuXG4ubWVzc2FnZS1ib3gtY29udGFpbmVyIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWF4LXdpZHRoOiAzNTBweDtcbiAgICBtYXJnaW4tbGVmdDogOTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDQwJTtcbiAgICBsZWZ0OiA2MCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTkwcHgpO1xuXG4gICAgLnZpc2libGUge1xuICAgICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1lc3NhZ2UtaXRlbSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZzogNXB4IDIuNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICBmb250LWZhbWlseTogVmVyZGFuYSBzYW5zLXNlcmlmO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpIHNjYWxlKC45KTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCkgc2NhbGUoLjkpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpIHNjYWxlKC45KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpIHNjYWxlKC45KTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zICwgb3BhY2l0eSAxNTBtcztcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAubWVzc2FnZS1ib3gtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    47667: function _(module) {
      module.exports = ".user-profile-container {\n  width: 170px;\n  text-align: center;\n}\n.user-profile-container .avatar {\n  height: 120px;\n  width: 120px;\n  margin: 0 auto;\n  border-radius: 50%;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: cover;\n  border: 1px solid #e9ecf6;\n}\n.user-profile-container .credentials {\n  max-width: 170px;\n  font-size: 16px;\n  font-weight: 800;\n  text-align: center;\n  margin-top: 7px;\n  word-break: break-word;\n}\n.user-profile-container .role {\n  font-size: 12px;\n  margin-top: 5px;\n  word-break: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQUZKO0FBSUk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBRlI7QUFLSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFIUjtBQU1JO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFFQSxzQkFBQTtBQUxSIiwiZmlsZSI6InVzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2hlbHBlcnMvY29sb3JzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9oZWxwZXJzL21peGluc1wiO1xuXG4udXNlci1wcm9maWxlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDE3MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC5hdmF0YXIge1xuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRncmV5LWxpZ2h0O1xuICAgIH1cblxuICAgIC5jcmVkZW50aWFscyB7XG4gICAgICAgIG1heC13aWR0aDogMTcwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgfVxuXG4gICAgLnJvbGUge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgLy9mb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    50148: function _(module) {
      module.exports = ".message-item-container {\n  min-height: 45px;\n  max-width: 250px;\n  width: 100%;\n  padding: 10px;\n  border-radius: 7px;\n  background: rgba(196, 196, 196, 0.1);\n}\n.message-item-container .message-title {\n  margin-bottom: 10px;\n}\n.message-item-container .message-content {\n  color: #ffffff;\n  word-break: break-word;\n}\n.message-item-container .color-orange {\n  color: #fbad50;\n}\n.message-item-container .color-light-blue {\n  color: #12a5f4;\n}\n.message-item-container .avatar {\n  width: 100px;\n  margin-right: 10px;\n}\n.message-item-container .avatar img {\n  border-radius: 50%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UtaXRlbS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvaGVscGVycy9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFSSxnQkFBQTtFQUVBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0FBSko7QUFNSTtFQUNJLG1CQUFBO0FBSlI7QUFPSTtFQUNJLGNDakJBO0VEa0JBLHNCQUFBO0FBTFI7QUFRSTtFQUNJLGNBQUE7QUFOUjtBQVNJO0VBQ0ksY0NwQks7QURhYjtBQVVJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBUlI7QUFTUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQVBaIiwiZmlsZSI6Im1lc3NhZ2UtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL2hlbHBlcnMvY29sb3JzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9oZWxwZXJzL21peGluc1wiO1xuXG4ubWVzc2FnZS1pdGVtLWNvbnRhaW5lciB7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDg5LCA0MyUsIDUxJSwgMC4xKTtcbiAgICBtaW4taGVpZ2h0OiA0NXB4O1xuICAgIC8vbWF4LXdpZHRoOiAzNTBweDtcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC4xKTtcblxuICAgIC5tZXNzYWdlLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAubWVzc2FnZS1jb250ZW50IHtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICB9XG5cbiAgICAuY29sb3Itb3JhbmdlIHtcbiAgICAgICAgY29sb3I6ICRvcmFuZ2U7XG4gICAgfVxuXG4gICAgLmNvbG9yLWxpZ2h0LWJsdWUge1xuICAgICAgICBjb2xvcjogJGJsdWUtbGlnaHQ7XG4gICAgfVxuXG4gICAgLmF2YXRhciB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIkYmxhY2s6ICMxYjFiMWI7XG4kd2hpdGU6ICNmZmZmZmY7XG4kZ29sZDogI0Y5RTNBNztcblxuJGJsdWU6ICM0ODg2ZmY7XG4kYmx1ZS1kYXJrOiAjMzA3M2Y2O1xuJGJsdWUtc2hhZG93OiByZ2JhKDcyLCAxMzQsIDI1NSwgMC40NSk7XG4kYmx1ZS1saWdodDogIzEyYTVmNDtcbiRibHVlLWRlZXAtZGFyazogIzE4MTcyNztcblxuJGdyZXk6ICNiY2MwZDE7XG4kZ3JleS1saWdodDogI2U5ZWNmNjtcbiRncmV5LW1pZGRsZS1saWdodDogI2Q4ZDhkODtcbiRncmV5LWRhcms6ICM4Yzk2YTk7XG4kZ3JleS1zaGFkb3c6IHJnYmEoNDksIDU2LCA3OCwgMC4xOCk7XG5cbiRyZWQ6ICNkNTAwMDA7XG4kcGluazogI2VhNDE4MztcbiRjb3JhbDogI2ZmNmM1ZjtcbiRncmVlbjogIzIwYWQyMztcbiRncmVlbi1kYXJrOiAjMTA3ZjEyO1xuJGdyZWVuLWxpZ2h0OiAjYjljMjM3O1xuJG9yYW5nZS1saWdodDogI0Y5RTNBNztcbiRvcmFuZ2U6ICNmYmFkNTA7XG4kcHVycGxlOiAjNmI0ZmViO1xuJGJsdWUtZ3JlZW46ICMwMGEyODk7XG4kZGFyay1ibHVlOiAjMjkyRjNGO1xuXG5cbiJdfQ== */";
      /***/
    },

    /***/
    85513: function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYWRpby1idXR0b24uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    60129: function _(module) {
      module.exports = "#success_tic .page-body {\n  max-width: 300px;\n  background-color: #FFFFFF;\n  margin: 10% auto;\n}\n\n#success_tic .page-body .head {\n  text-align: center;\n}\n\n/* #success_tic .tic{\n  font-size:186px;\n} */\n\n#success_tic .close {\n  opacity: 1;\n  position: absolute;\n  right: 0px;\n  font-size: 30px;\n  padding: 3px 15px;\n  margin-bottom: 10px;\n}\n\n#success_tic .checkmark-circle {\n  width: 150px;\n  height: 150px;\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.checkmark-circle .background {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  background: #1ab394;\n  position: absolute;\n}\n\n#success_tic .checkmark-circle .checkmark {\n  border-radius: 5px;\n}\n\n#success_tic .checkmark-circle .checkmark.draw:after {\n  -webkit-animation-delay: 300ms;\n  animation-delay: 300ms;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-timing-function: ease;\n  animation-timing-function: ease;\n  -webkit-animation-name: checkmark;\n  animation-name: checkmark;\n  transform: scaleX(-1) rotate(135deg);\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n}\n\n#success_tic .checkmark-circle .checkmark:after {\n  opacity: 1;\n  height: 75px;\n  width: 37.5px;\n  transform-origin: left top;\n  border-right: 15px solid #fff;\n  border-top: 15px solid #fff;\n  border-radius: 2.5px !important;\n  content: \"\";\n  left: 35px;\n  top: 80px;\n  position: absolute;\n}\n\n@-webkit-keyframes checkmark {\n  0% {\n    height: 0;\n    width: 0;\n    opacity: 1;\n  }\n  20% {\n    height: 0;\n    width: 37.5px;\n    opacity: 1;\n  }\n  40% {\n    height: 75px;\n    width: 37.5px;\n    opacity: 1;\n  }\n  100% {\n    height: 75px;\n    width: 37.5px;\n    opacity: 1;\n  }\n}\n\n@keyframes checkmark {\n  0% {\n    height: 0;\n    width: 0;\n    opacity: 1;\n  }\n  20% {\n    height: 0;\n    width: 37.5px;\n    opacity: 1;\n  }\n  40% {\n    height: 75px;\n    width: 37.5px;\n    opacity: 1;\n  }\n  100% {\n    height: 75px;\n    width: 37.5px;\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Y2Nlc3MtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQUE7O0dBQUE7O0FBR0E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7QUFNSjs7QUFKQTtFQUNJLDhCQUFBO0VBRUEsc0JBQUE7RUFDQSw4QkFBQTtFQUVBLHNCQUFBO0VBQ0EsdUNBQUE7RUFFQSwrQkFBQTtFQUNBLGlDQUFBO0VBRUEseUJBQUE7RUFLQSxvQ0FBQTtFQUNBLHFDQUFBO0VBRUEsNkJBQUE7QUFPSjs7QUFMQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUtBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFRSjs7QUFMQTtFQUNJO0lBQ0ksU0FBQTtJQUNBLFFBQUE7SUFDQSxVQUFBO0VBUU47RUFORTtJQUNJLFNBQUE7SUFDQSxhQUFBO0lBQ0EsVUFBQTtFQVFOO0VBTkU7SUFDSSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFVBQUE7RUFRTjtFQU5FO0lBQ0ksWUFBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0VBUU47QUFDRjs7QUFnQkE7RUFDSTtJQUNJLFNBQUE7SUFDQSxRQUFBO0lBQ0EsVUFBQTtFQVFOO0VBTkU7SUFDSSxTQUFBO0lBQ0EsYUFBQTtJQUNBLFVBQUE7RUFRTjtFQU5FO0lBQ0ksWUFBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0VBUU47RUFORTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBQ0EsVUFBQTtFQVFOO0FBQ0YiLCJmaWxlIjoic3VjY2Vzcy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzdWNjZXNzX3RpYyAucGFnZS1ib2R5e1xuICAgIG1heC13aWR0aDozMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkY7XG4gICAgbWFyZ2luOjEwJSBhdXRvO1xufVxuI3N1Y2Nlc3NfdGljIC5wYWdlLWJvZHkgLmhlYWR7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG4vKiAjc3VjY2Vzc190aWMgLnRpY3tcbiAgZm9udC1zaXplOjE4NnB4O1xufSAqL1xuI3N1Y2Nlc3NfdGljIC5jbG9zZXtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBwYWRkaW5nOiAzcHggMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuI3N1Y2Nlc3NfdGljIC5jaGVja21hcmstY2lyY2xlIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG4uY2hlY2ttYXJrLWNpcmNsZSAuYmFja2dyb3VuZCB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICMxYWIzOTQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuI3N1Y2Nlc3NfdGljIC5jaGVja21hcmstY2lyY2xlIC5jaGVja21hcmsge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbiNzdWNjZXNzX3RpYyAuY2hlY2ttYXJrLWNpcmNsZSAuY2hlY2ttYXJrLmRyYXc6YWZ0ZXIge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzMDBtcztcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMzAwbXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAzMDBtcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGNoZWNrbWFyaztcbiAgICAtbW96LWFuaW1hdGlvbi1uYW1lOiBjaGVja21hcms7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGNoZWNrbWFyaztcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKC0xKSByb3RhdGUoMTM1ZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGVYKC0xKSByb3RhdGUoMTM1ZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVgoLTEpIHJvdGF0ZSgxMzVkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGVYKC0xKSByb3RhdGUoMTM1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSkgcm90YXRlKDEzNWRlZyk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuI3N1Y2Nlc3NfdGljIC5jaGVja21hcmstY2lyY2xlIC5jaGVja21hcms6YWZ0ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIHdpZHRoOiAzNy41cHg7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbiAgICAtby10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbiAgICBib3JkZXItcmlnaHQ6IDE1cHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItdG9wOiAxNXB4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMi41cHggIWltcG9ydGFudDtcbiAgICBjb250ZW50OiAnJztcbiAgICBsZWZ0OiAzNXB4O1xuICAgIHRvcDogODBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBjaGVja21hcmsge1xuICAgIDAlIHtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMjAlIHtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogMzcuNXB4O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICA0MCUge1xuICAgICAgICBoZWlnaHQ6IDc1cHg7XG4gICAgICAgIHdpZHRoOiAzNy41cHg7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBoZWlnaHQ6IDc1cHg7XG4gICAgICAgIHdpZHRoOiAzNy41cHg7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGNoZWNrbWFyayB7XG4gICAgMCUge1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAyMCUge1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiAzNy41cHg7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICAgIGhlaWdodDogNzVweDtcbiAgICAgICAgd2lkdGg6IDM3LjVweDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGhlaWdodDogNzVweDtcbiAgICAgICAgd2lkdGg6IDM3LjVweDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5Aa2V5ZnJhbWVzIGNoZWNrbWFyayB7XG4gICAgMCUge1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAyMCUge1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiAzNy41cHg7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICAgIGhlaWdodDogNzVweDtcbiAgICAgICAgd2lkdGg6IDM3LjVweDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGhlaWdodDogNzVweDtcbiAgICAgICAgd2lkdGg6IDM3LjVweDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts-es5.js.map