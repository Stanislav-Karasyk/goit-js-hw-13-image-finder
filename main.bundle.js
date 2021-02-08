!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=25)}([function(e,t,r){"use strict";t.__esModule=!0,t.extend=i,t.indexOf=function(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}if(!a.test(e))return e;return e.replace(o,l)},t.isEmpty=function(e){return!e&&0!==e||!(!c(e)||0!==e.length)},t.createFrame=function(e){var t=i({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},o=/[&<>"'`=]/g,a=/[&<>"'`=]/;function l(e){return n[e]}function i(e){for(var t=1;t<arguments.length;t++)for(var r in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],r)&&(e[r]=arguments[t][r]);return e}var s=Object.prototype.toString;t.toString=s;var u=function(e){return"function"==typeof e};u(/x/)&&(t.isFunction=u=function(e){return"function"==typeof e&&"[object Function]"===s.call(e)}),t.isFunction=u;var c=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===s.call(e)};t.isArray=c},function(e,t,r){"use strict";t.__esModule=!0;var n=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function o(e,t){var r=t&&t.loc,a=void 0,l=void 0,i=void 0,s=void 0;r&&(a=r.start.line,l=r.end.line,i=r.start.column,s=r.end.column,e+=" - "+a+":"+i);for(var u=Error.prototype.constructor.call(this,e),c=0;c<n.length;c++)this[n[c]]=u[n[c]];Error.captureStackTrace&&Error.captureStackTrace(this,o);try{r&&(this.lineNumber=a,this.endLineNumber=l,Object.defineProperty?(Object.defineProperty(this,"column",{value:i,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:s,enumerable:!0})):(this.column=i,this.endColumn=s))}catch(e){}}o.prototype=new Error,t.default=o,e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.HandlebarsEnvironment=c;var o=r(0),a=n(r(1)),l=r(3),i=r(18),s=n(r(5)),u=r(6);t.VERSION="4.7.6";t.COMPILER_REVISION=8;t.LAST_COMPATIBLE_COMPILER_REVISION=7;t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function c(e,t,r){this.helpers=e||{},this.partials=t||{},this.decorators=r||{},l.registerDefaultHelpers(this),i.registerDefaultDecorators(this)}c.prototype={constructor:c,logger:s.default,log:s.default.log,registerHelper:function(e,t){if("[object Object]"===o.toString.call(e)){if(t)throw new a.default("Arg not supported with multiple helpers");o.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===o.toString.call(e))o.extend(this.partials,e);else{if(void 0===t)throw new a.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===o.toString.call(e)){if(t)throw new a.default("Arg not supported with multiple decorators");o.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){u.resetLoggedProperties()}};var f=s.default.log;t.log=f,t.createFrame=o.createFrame,t.logger=s.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.registerDefaultHelpers=function(e){o.default(e),a.default(e),l.default(e),i.default(e),s.default(e),u.default(e),c.default(e)},t.moveHelperToHooks=function(e,t,r){e.helpers[t]&&(e.hooks[t]=e.helpers[t],r||delete e.helpers[t])};var o=n(r(11)),a=n(r(12)),l=n(r(13)),i=n(r(14)),s=n(r(15)),u=n(r(16)),c=n(r(17))},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0),o={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=n.indexOf(o.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=o.lookupLevel(e),"undefined"!=typeof console&&o.lookupLevel(o.level)<=e){var t=o.methodMap[e];console[t]||(t="log");for(var r=arguments.length,n=Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];console[t].apply(console,n)}}};t.default=o,e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.createProtoAccessControl=function(e){var t=Object.create(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;var r=Object.create(null);return r.__proto__=!1,{properties:{whitelist:n.createNewLookupObject(r,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:n.createNewLookupObject(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}},t.resultIsAllowed=function(e,t,r){return l("function"==typeof e?t.methods:t.properties,r)},t.resetLoggedProperties=function(){Object.keys(a).forEach((function(e){delete a[e]}))};var n=r(20),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(5)),a=Object.create(null);function l(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==a[e]&&(a[e]=!0,o.log("error",'Handlebars: Access has been denied to resolve the property "'+e+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(t),!1)}},function(e,t,r){var n=r(9);e.exports=(n.default||n).template({1:function(e,t,r,n,o){var a,l=null!=t?t:e.nullContext||{},i=e.hooks.helperMissing,s="function",u=e.escapeExpression,c=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'    <li class="gallery-item">\r\n        <div class="photo-card">\r\n            <img src="'+u(typeof(a=null!=(a=c(r,"webformatURL")||(null!=t?c(t,"webformatURL"):t))?a:i)===s?a.call(l,{name:"webformatURL",hash:{},data:o,loc:{start:{line:5,column:22},end:{line:5,column:38}}}):a)+'" alt="'+u(typeof(a=null!=(a=c(r,"tags")||(null!=t?c(t,"tags"):t))?a:i)===s?a.call(l,{name:"tags",hash:{},data:o,loc:{start:{line:5,column:45},end:{line:5,column:53}}}):a)+'" />\r\n            <div class="stats">\r\n                <p class="stats-item">\r\n                    <i class="material-icons">thumb_up</i>\r\n                    '+u(typeof(a=null!=(a=c(r,"likes")||(null!=t?c(t,"likes"):t))?a:i)===s?a.call(l,{name:"likes",hash:{},data:o,loc:{start:{line:9,column:20},end:{line:9,column:29}}}):a)+'\r\n                </p>\r\n                <p class="stats-item">\r\n                    <i class="material-icons">visibility</i>\r\n                    '+u(typeof(a=null!=(a=c(r,"views")||(null!=t?c(t,"views"):t))?a:i)===s?a.call(l,{name:"views",hash:{},data:o,loc:{start:{line:13,column:20},end:{line:13,column:29}}}):a)+'\r\n                </p>\r\n                <p class="stats-item">\r\n                    <i class="material-icons">comment</i>\r\n                    '+u(typeof(a=null!=(a=c(r,"comments")||(null!=t?c(t,"comments"):t))?a:i)===s?a.call(l,{name:"comments",hash:{},data:o,loc:{start:{line:17,column:20},end:{line:17,column:32}}}):a)+'\r\n                </p>\r\n                <p class="stats-item">\r\n                    <i class="material-icons">cloud_download</i>\r\n                    '+u(typeof(a=null!=(a=c(r,"downloads")||(null!=t?c(t,"downloads"):t))?a:i)===s?a.call(l,{name:"downloads",hash:{},data:o,loc:{start:{line:21,column:20},end:{line:21,column:33}}}):a)+"\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,r,n,o){var a;return'<ul class="gallery">\r\n'+(null!=(a=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(r,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:2,column:4},end:{line:26,column:13}}}))?a:"")+"</ul>"},useData:!0})},function(e,t,r){},function(e,t,r){e.exports=r(10).default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}t.__esModule=!0;var a=o(r(2)),l=n(r(21)),i=n(r(1)),s=o(r(0)),u=o(r(22)),c=n(r(24));function f(){var e=new a.HandlebarsEnvironment;return s.extend(e,a),e.SafeString=l.default,e.Exception=i.default,e.Utils=s,e.escapeExpression=s.escapeExpression,e.VM=u,e.template=function(t){return u.template(t,e)},e}var d=f();d.create=f,c.default(d),d.default=d,t.default=d,e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0);t.default=function(e){e.registerHelper("blockHelperMissing",(function(t,r){var o=r.inverse,a=r.fn;if(!0===t)return a(this);if(!1===t||null==t)return o(this);if(n.isArray(t))return t.length>0?(r.ids&&(r.ids=[r.name]),e.helpers.each(t,r)):o(this);if(r.data&&r.ids){var l=n.createFrame(r.data);l.contextPath=n.appendContextPath(r.data.contextPath,r.name),r={data:l}}return a(t,r)}))},e.exports=t.default},function(e,t,r){"use strict";(function(n){t.__esModule=!0;var o,a=r(0),l=r(1),i=(o=l)&&o.__esModule?o:{default:o};t.default=function(e){e.registerHelper("each",(function(e,t){if(!t)throw new i.default("Must pass iterator to #each");var r,o=t.fn,l=t.inverse,s=0,u="",c=void 0,f=void 0;function d(t,r,n){c&&(c.key=t,c.index=r,c.first=0===r,c.last=!!n,f&&(c.contextPath=f+t)),u+=o(e[t],{data:c,blockParams:a.blockParams([e[t],t],[f+t,null])})}if(t.data&&t.ids&&(f=a.appendContextPath(t.data.contextPath,t.ids[0])+"."),a.isFunction(e)&&(e=e.call(this)),t.data&&(c=a.createFrame(t.data)),e&&"object"==typeof e)if(a.isArray(e))for(var p=e.length;s<p;s++)s in e&&d(s,s,s===e.length-1);else if(n.Symbol&&e[n.Symbol.iterator]){for(var h=[],m=e[n.Symbol.iterator](),v=m.next();!v.done;v=m.next())h.push(v.value);for(p=(e=h).length;s<p;s++)d(s,s,s===e.length-1)}else r=void 0,Object.keys(e).forEach((function(e){void 0!==r&&d(r,s-1),r=e,s++})),void 0!==r&&d(r,s-1,!0);return 0===s&&(u=l(this)),u}))},e.exports=t.default}).call(this,r(4))},function(e,t,r){"use strict";t.__esModule=!0;var n,o=r(1),a=(n=o)&&n.__esModule?n:{default:n};t.default=function(e){e.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new a.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}))},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n,o=r(0),a=r(1),l=(n=a)&&n.__esModule?n:{default:n};t.default=function(e){e.registerHelper("if",(function(e,t){if(2!=arguments.length)throw new l.default("#if requires exactly one argument");return o.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||o.isEmpty(e)?t.inverse(this):t.fn(this)})),e.registerHelper("unless",(function(t,r){if(2!=arguments.length)throw new l.default("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:r.inverse,inverse:r.fn,hash:r.hash})}))},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",(function(){for(var t=[void 0],r=arguments[arguments.length-1],n=0;n<arguments.length-1;n++)t.push(arguments[n]);var o=1;null!=r.hash.level?o=r.hash.level:r.data&&null!=r.data.level&&(o=r.data.level),t[0]=o,e.log.apply(e,t)}))},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",(function(e,t,r){return e?r.lookupProperty(e,t):e}))},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n,o=r(0),a=r(1),l=(n=a)&&n.__esModule?n:{default:n};t.default=function(e){e.registerHelper("with",(function(e,t){if(2!=arguments.length)throw new l.default("#with requires exactly one argument");o.isFunction(e)&&(e=e.call(this));var r=t.fn;if(o.isEmpty(e))return t.inverse(this);var n=t.data;return t.data&&t.ids&&((n=o.createFrame(t.data)).contextPath=o.appendContextPath(t.data.contextPath,t.ids[0])),r(e,{data:n,blockParams:o.blockParams([e],[n&&n.contextPath])})}))},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.registerDefaultDecorators=function(e){a.default(e)};var n,o=r(19),a=(n=o)&&n.__esModule?n:{default:n}},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0);t.default=function(e){e.registerDecorator("inline",(function(e,t,r,o){var a=e;return t.partials||(t.partials={},a=function(o,a){var l=r.partials;r.partials=n.extend({},l,t.partials);var i=e(o,a);return r.partials=l,i}),t.partials[o.args[0]]=o.fn,a}))},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.createNewLookupObject=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.extend.apply(void 0,[Object.create(null)].concat(t))};var n=r(0)},function(e,t,r){"use strict";function n(e){this.string=e}t.__esModule=!0,n.prototype.toString=n.prototype.toHTML=function(){return""+this.string},t.default=n,e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,r=i.COMPILER_REVISION;if(t>=i.LAST_COMPATIBLE_COMPILER_REVISION&&t<=i.COMPILER_REVISION)return;if(t<i.LAST_COMPATIBLE_COMPILER_REVISION){var n=i.REVISION_CHANGES[r],o=i.REVISION_CHANGES[t];throw new l.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+o+").")}throw new l.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")},t.template=function(e,t){if(!t)throw new l.default("No environment passed to template");if(!e||!e.main)throw new l.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var r=e.compiler&&7===e.compiler[0];var n={strict:function(e,t,r){if(!e||!(t in e))throw new l.default('"'+t+'" not defined in '+e,{loc:r});return e[t]},lookupProperty:function(e,t){var r=e[t];return null==r||Object.prototype.hasOwnProperty.call(e,t)||c.resultIsAllowed(r,n.protoAccessControl,t)?r:void 0},lookup:function(e,t){for(var r=e.length,o=0;o<r;o++){if(null!=(e[o]&&n.lookupProperty(e[o],t)))return e[o][t]}},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:o.escapeExpression,invokePartial:function(r,n,a){a.hash&&(n=o.extend({},n,a.hash),a.ids&&(a.ids[0]=!0)),r=t.VM.resolvePartial.call(this,r,n,a);var i=o.extend({},a,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),s=t.VM.invokePartial.call(this,r,n,i);if(null==s&&t.compile&&(a.partials[a.name]=t.compile(r,e.compilerOptions,t),s=a.partials[a.name](n,i)),null!=s){if(a.indent){for(var u=s.split("\n"),c=0,f=u.length;c<f&&(u[c]||c+1!==f);c++)u[c]=a.indent+u[c];s=u.join("\n")}return s}throw new l.default("The partial "+a.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var r=e[t];return r.decorator=e[t+"_d"],r},programs:[],program:function(e,t,r,n,o){var a=this.programs[e],l=this.fn(e);return t||o||n||r?a=f(this,e,l,t,r,n,o):a||(a=this.programs[e]=f(this,e,l)),a},data:function(e,t){for(;e&&t--;)e=e._parent;return e},mergeIfNeeded:function(e,t){var r=e||t;return e&&t&&e!==t&&(r=o.extend({},t,e)),r},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function a(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=r.data;a._setup(r),!r.partial&&e.useData&&(o=p(t,o));var l=void 0,i=e.useBlockParams?[]:void 0;function s(t){return""+e.main(n,t,n.helpers,n.partials,o,i,l)}return e.useDepths&&(l=r.depths?t!=r.depths[0]?[t].concat(r.depths):r.depths:[t]),(s=h(e.main,s,n,r.depths||[],o,i))(t,r)}return a.isTop=!0,a._setup=function(a){if(a.partial)n.protoAccessControl=a.protoAccessControl,n.helpers=a.helpers,n.partials=a.partials,n.decorators=a.decorators,n.hooks=a.hooks;else{var l=o.extend({},t.helpers,a.helpers);!function(e,t){Object.keys(e).forEach((function(r){var n=e[r];e[r]=function(e,t){var r=t.lookupProperty;return u.wrapHelper(e,(function(e){return o.extend({lookupProperty:r},e)}))}(n,t)}))}(l,n),n.helpers=l,e.usePartial&&(n.partials=n.mergeIfNeeded(a.partials,t.partials)),(e.usePartial||e.useDecorators)&&(n.decorators=o.extend({},t.decorators,a.decorators)),n.hooks={},n.protoAccessControl=c.createProtoAccessControl(a);var i=a.allowCallsToHelperMissing||r;s.moveHelperToHooks(n,"helperMissing",i),s.moveHelperToHooks(n,"blockHelperMissing",i)}},a._child=function(t,r,o,a){if(e.useBlockParams&&!o)throw new l.default("must pass block params");if(e.useDepths&&!a)throw new l.default("must pass parent depths");return f(n,t,e[t],r,0,o,a)},a},t.wrapProgram=f,t.resolvePartial=function(e,t,r){e?e.call||r.name||(r.name=e,e=r.partials[e]):e="@partial-block"===r.name?r.data["partial-block"]:r.partials[r.name];return e},t.invokePartial=function(e,t,r){var n=r.data&&r.data["partial-block"];r.partial=!0,r.ids&&(r.data.contextPath=r.ids[0]||r.data.contextPath);var a=void 0;r.fn&&r.fn!==d&&function(){r.data=i.createFrame(r.data);var e=r.fn;a=r.data["partial-block"]=function(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return r.data=i.createFrame(r.data),r.data["partial-block"]=n,e(t,r)},e.partials&&(r.partials=o.extend({},r.partials,e.partials))}();void 0===e&&a&&(e=a);if(void 0===e)throw new l.default("The partial "+r.name+" could not be found");if(e instanceof Function)return e(t,r)},t.noop=d;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(0)),a=r(1),l=(n=a)&&n.__esModule?n:{default:n},i=r(2),s=r(3),u=r(23),c=r(6);function f(e,t,r,n,o,a,l){function i(t){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=l;return!l||t==l[0]||t===e.nullContext&&null===l[0]||(i=[t].concat(l)),r(e,t,e.helpers,e.partials,o.data||n,a&&[o.blockParams].concat(a),i)}return(i=h(r,i,e,l,n,a)).program=t,i.depth=l?l.length:0,i.blockParams=o||0,i}function d(){return""}function p(e,t){return t&&"root"in t||((t=t?i.createFrame(t):{}).root=e),t}function h(e,t,r,n,a,l){if(e.decorator){var i={};t=e.decorator(t,i,r,n&&n[0],a,l,n),o.extend(t,i)}return t}},function(e,t,r){"use strict";t.__esModule=!0,t.wrapHelper=function(e,t){if("function"!=typeof e)return e;return function(){var r=arguments[arguments.length-1];return arguments[arguments.length-1]=t(r),e.apply(this,arguments)}}},function(e,t,r){"use strict";(function(r){t.__esModule=!0,t.default=function(e){var t=void 0!==r?r:window,n=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=n),e}},e.exports=t.default}).call(this,r(4))},function(e,t,r){"use strict";r.r(t);r(8);function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r="20189434-40624adf63a47bf5b286cda72",n="https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(e,"&page=").concat(t,"&per_page=12&key=").concat(r);return fetch(n).then((function(e){return e.json()})).then(d).catch((function(e){return console.log(e)}))}var o=r(7),a=r.n(o),l=document.querySelector("#search-form"),i=document.querySelector("[name=query]"),s=document.querySelector(".gallery-container"),u=document.querySelector("[data-action=load-more]"),c="",f=1;l.addEventListener("submit",(function(e){e.preventDefault(),s.innerHTML="",n(c=i.value,f),u.classList.remove("is-hidden")})),u.addEventListener("click",(function(){n(c,f+=1)}));var d=t.default=function(e){s.insertAdjacentHTML("beforeend",a()(e.hits))}}]);
//# sourceMappingURL=main.bundle.js.map