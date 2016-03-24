define("frontend-js-metal-web@1.0.4/metal-component/src/ComponentRenderer-min", ["exports","metal-events/src/events"], function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var p=function(e){function p(r){n(this,p);var i=o(this,e.call(this));return (i.component_=r, i.componentRendererEvents_=new t.EventHandler, i.componentRendererEvents_.add(i.component_.on("attrsChanged",i.handleComponentRendererAttrsChanged_.bind(i)),i.component_.once("render",i.render.bind(i))), i)}return (r(p,e), p.prototype.buildElement=function(){return document.createElement("div")}, p.prototype.disposeInternal=function(){this.componentRendererEvents_.removeAllListeners(),this.componentRendererEvents_=null}, p.prototype.handleComponentRendererAttrsChanged_=function(e){this.component_.wasRendered&&this.update(e)}, p.prototype.render=function(){}, p.prototype.update=function(){}, p)}(t.EventEmitter);p.prototype.registerMetalComponent&&p.prototype.registerMetalComponent(p,"ComponentRenderer"),e["default"]=p});