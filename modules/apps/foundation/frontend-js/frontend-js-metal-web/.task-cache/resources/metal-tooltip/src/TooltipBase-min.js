define("frontend-js-metal-web@1.0.4/metal-tooltip/src/TooltipBase-min", ["exports","metal/src/metal","metal-dom/src/all/dom","metal-position/src/all/position","metal-component/src/all/component","metal-events/src/events","metal-soy/src/soy","metal-jquery-adapter/src/JQueryAdapter"], function(t,e,i,n,o,s,l,r){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(t,"__esModule",{value:!0});var u=a(e),p=a(i),y=a(o),f=a(r),m=function(t){function e(i){c(this,e);var n=d(this,t.call(this,i));return (n.eventHandler_=new s.EventHandler, n)}return (h(e,t), e.prototype.attached=function(){this.align(),this.syncTriggerEvents(this.triggerEvents)}, e.prototype.detached=function(){this.eventHandler_.removeAllListeners()}, e.prototype.disposeInternal=function(){t.prototype.disposeInternal.call(this),clearTimeout(this.delay_)}, e.prototype.align=function(t){this.syncAlignElement(t||this.alignElement)}, e.prototype.callAsync_=function(t,e){clearTimeout(this.delay_),this.delay_=setTimeout(t.bind(this),e)}, e.prototype.handleHide=function(t){var e=t.delegateTarget,i=e&&e!==this.alignElement;this.callAsync_(function(){this.locked_||(i?this.alignElement=e:(this.visible=!1,this.syncVisible(!1)))},this.delay[1])}, e.prototype.handleShow=function(e){var i=e.delegateTarget;t.prototype.syncVisible.call(this,!0),this.callAsync_(function(){this.alignElement=i,this.visible=!0},this.delay[0])}, e.prototype.handleToggle=function(t){this.visible?this.handleHide(t):this.handleShow(t)}, e.prototype.lock=function(){this.locked_=!0}, e.prototype.unlock=function(t){this.locked_=!1,this.handleHide(t)}, e.prototype.syncAlignElement=function(t,i){if(i&&t.removeAttribute("aria-describedby"),t){var n=t.getAttribute("data-title");if(n&&(this.title=n),this.visible?t.setAttribute("aria-describedby",this.id):t.removeAttribute("aria-describedby"),this.inDocument){var o=e.Align.align(this.element,t,this.position);this.updatePositionCSS(o)}}}, e.prototype.syncPosition=function(){this.syncAlignElement(this.alignElement)}, e.prototype.syncSelector=function(){this.syncTriggerEvents(this.triggerEvents)}, e.prototype.syncTriggerEvents=function(t){if(this.inDocument){this.eventHandler_.removeAllListeners();var e=this.selector;e&&(this.eventHandler_.add(this.on("mouseenter",this.lock),this.on("mouseleave",this.unlock)),t[0]===t[1]?this.eventHandler_.add(p["default"].delegate(document,t[0],e,this.handleToggle.bind(this))):this.eventHandler_.add(p["default"].delegate(document,t[0],e,this.handleShow.bind(this)),p["default"].delegate(document,t[1],e,this.handleHide.bind(this))))}}, e.prototype.syncVisible=function(){this.align()}, e.prototype.updatePositionCSS=function(t){p["default"].removeClasses(this.element,e.PositionClasses.join(" ")),p["default"].addClasses(this.element,e.PositionToClass[t])}, e)}(y["default"]);m.prototype.registerMetalComponent&&m.prototype.registerMetalComponent(m,"TooltipBase"),m.Align=n.Align,m.ATTRS={alignElement:{setter:p["default"].toElement},delay:{validator:Array.isArray,value:[500,250]},triggerEvents:{validator:Array.isArray,value:["mouseenter","mouseleave"]},selector:{validator:u["default"].isString},position:{validator:m.Align.isValidPosition,value:m.Align.Bottom},title:{}},m.PositionClasses=["top","right","bottom","left"],m.PositionToClass=["top","top","right","bottom","bottom","bottom","left","top"],m.RENDERER=l.SoyRenderer,t["default"]=m,f["default"].register("tooltipBase",m)});