/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "./build/" + chunkId + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*
	Copyright 2016 Google Inc. All Rights Reserved.

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	    http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
	*/

	__webpack_require__(1);
	var Config = __webpack_require__(9);

	__webpack_require__.e/* require */(1, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(10)]; (function(domReady){

		domReady(function(){

			document.onselectstart = function () { return false; };

			__webpack_require__.e/* require */(2, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(11)]; (function(Drums){
				
				var drums = new Drums();

				var aboutButton = document.getElementById("aboutLink");
				var startLink = document.getElementById("startLink");
				var badges = document.getElementById("badges");
				var cover = document.getElementById("cover");

				var onBadges = function (event) {
					event.stopPropagation();
					event.preventDefault();
				};

				var onAbout = function(event){
					event.preventDefault();
					event.stopPropagation();
				};

				var onStart = function(event){
					drums.beginExperience();

					badges.removeEventListener("click", onBadges,false);
					startLink.removeEventListener('click', onStart, false);
					aboutButton.removeEventListener('click', onAbout, false);
					event.preventDefault();
					event.stopPropagation();
				};

				drums.addEventListener("DRUMS_LOADED",function(){
					if(Config.isSplashDisabled){
						drums.beginExperience();
					} else {
						badges.addEventListener("click", onBadges,false);
						startLink.addEventListener('click', onStart, false);
						aboutButton.addEventListener('click', onAbout, false);
					}
				});
				drums.init();

				cover.classList.add("show");

			}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});

		});

	}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/autoprefixer-loader/index.js!../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/autoprefixer-loader/index.js!../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "#about {\n  display: none;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(15, 15, 15, 0.8);\n  overflow: auto; }\n\n#about > .container > h1 {\n  color: #CCC;\n  font-family: 'Roboto Mono', sans-serif;\n  font-size: 20px;\n  font-weight: 300;\n  letter-spacing: 2px;\n  position: relative;\n  min-width: 300px;\n  max-width: 580px;\n  padding: 10px;\n  margin-top: 60px;\n  margin-bottom: 0px;\n  left: 50%;\n  transform: translateX(-50%); }\n\n* ::-webkit-scrollbar {\n  width: 10px;\n  height: 10px; }\n\n* ::-webkit-scrollbar-thumb {\n  background: #3f3d52; }\n\n* ::-webkit-scrollbar-track {\n  background: #262536; }\n\n#about > .container > p {\n  padding: 0px 10px 30px 10px;\n  font-family: 'Roboto Mono', sans-serif;\n  color: #CCC;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 180%;\n  margin: 0 auto;\n  max-width: 600px; }\n\n#about > .container {\n  position: relative;\n  top: 0px;\n  left: 50%;\n  transform: translateX(-50%);\n  min-width: 300px;\n  max-width: 600px; }\n\n#about > .container > p > a {\n  color: #1babff;\n  text-decoration: none; }\n\n#about > .clearButton {\n  position: absolute;\n  top: 35px;\n  width: 20px;\n  height: 20px;\n  right: 35px;\n  cursor: pointer;\n  background: url(" + __webpack_require__(4) + ") no-repeat scroll 0px 0px; }\n\n#about.show {\n  display: block; }\n\n#about > .container > .videoContainer {\n  overflow: hidden;\n  position: relative;\n  width: calc(100% - 20px);\n  padding-bottom: 56.25%;\n  float: left;\n  height: 0;\n  margin: 10px;\n  background-color: #060;\n  margin-top: 20px;\n  margin-bottom: 30px; }\n\n#about > .container > .videoContainer > .playButton {\n  width: 90px;\n  height: 90px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  z-index: 2;\n  cursor: pointer; }\n\n#about > .container > .videoContainer > .thumbnail {\n  width: 100%;\n  height: 133%;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  z-index: 1; }\n\n#about > .container > .videoContainer > .drumsVideo {\n  width: 100%;\n  height: 100%;\n  position: absolute; }\n\n#intro {\n  display: block; }\n\n#intro.hide {\n  display: none; }\n\n#introBlock {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  color: #e8e6f2;\n  font-family: 'Roboto Mono', sans-serif;\n  transform: translateX(-50%) translateY(-50%);\n  text-align: center;\n  width: 450px; }\n\n#introBlock > .header {\n  font-family: 'Roboto Mono', sans-serif;\n  font-weight: 300;\n  letter-spacing: 1px;\n  font-size: 22px;\n  padding: 0px; }\n\n#introBlock > p {\n  font-family: 'Roboto Mono', sans-serif;\n  font-weight: 300;\n  letter-spacing: 0px;\n  line-height: 180%;\n  font-size: 14px;\n  margin: 0;\n  padding: 30px 50px; }\n\n@media (max-width: 720px) {\n  #introBlock > .header {\n    padding: 0px 110px; }\n  #introBlock > p {\n    padding: 30px 100px; } }\n\n#introBlock > .startLink {\n  visibility: hidden;\n  display: inline-block;\n  cursor: default;\n  line-height: 22px;\n  white-space: nowrap;\n  background-color: rgba(15, 15, 15, 0.75);\n  cursor: pointer;\n  font-family: 'Roboto Mono', sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  letter-spacing: 1px;\n  padding: 10px 20px 10px 20px;\n  color: #29c4c5;\n  border: 1px solid #29c4c5; }\n\n#introBlock > .startLink.show {\n  visibility: visible; }\n\n#introBlock > .aboutLink {\n  visibility: hidden;\n  color: #29c4c5;\n  display: inline-block;\n  font-weight: 400;\n  letter-spacing: 2px;\n  font-size: 12px;\n  padding-top: 20px;\n  padding-bottom: 3px;\n  border-bottom: 1px solid #29c4c5;\n  text-decoration: none;\n  cursor: pointer; }\n\n#introBlock > .aboutLink.show {\n  visibility: visible; }\n\n#legal {\n  opacity: 0.5;\n  position: absolute;\n  right: 20px;\n  bottom: 21px;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 11px;\n  color: #FFF; }\n\na {\n  text-decoration: none;\n  color: #FFF; }\n\n#badges {\n  opacity: 0.5;\n  position: absolute;\n  display: -ms-flexbox;\n  display: flex;\n  left: 10px;\n  bottom: 20px; }\n\n#badges > .badgeAI {\n  background-image: url(" + __webpack_require__(5) + ");\n  background-repeat: no-repeat; }\n\n#badges > .pipe {\n  border-right: 1px solid rgba(255, 255, 255, 0.75); }\n\n#badges > .badgeFriends {\n  background-image: url(" + __webpack_require__(6) + ");\n  background-repeat: no-repeat; }\n\n/* desktop */\n@media all {\n  #badges > .badgeAI {\n    width: 110px;\n    height: 60px;\n    margin-left: 20px;\n    margin-right: 20px; }\n  #badges > .pipe {\n    border-right: 1px solid rgba(255, 255, 255, 0.75); }\n  #badges > .badgeFriends {\n    width: 110px;\n    height: 60px;\n    margin-left: 20px;\n    margin-right: 20px; } }\n\n/* phones */\n@media (max-width: 380px) {\n  #badges > .badgeAI {\n    width: 73px;\n    height: 40px;\n    margin-left: 20px;\n    margin-right: 20px; }\n  #badges > .pipe {\n    border-right: 1px solid rgba(255, 255, 255, 0.75); }\n  #badges > .badgeFriends {\n    width: 73px;\n    height: 40px;\n    margin-left: 20px;\n    margin-right: 20px; } }\n\nbody {\n  background-color: #000000;\n  margin: 0;\n  padding: 0;\n  overflow: hidden; }\n\n#cover {\n  display: none;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(15, 15, 15, 0.8); }\n\n#cover.show {\n  display: block; }\n\n#drums {\n  display: block;\n  overflow: hidden; }\n\n/* fallbacks */\n#reorient {\n  display: none;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #000; }\n\n#reorient.show {\n  display: block; }\n\n#reorient > .container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  text-align: center;\n  font-family: 'Roboto Mono', sans-serif;\n  font-size: 16px;\n  color: #FFF; }\n\n#reorient > .container > .rotatePhone {\n  width: 180px;\n  height: 140px;\n  position: relative;\n  left: 50%;\n  transform: translateX(-50%);\n  padding-bottom: 40px;\n  background-image: url(" + __webpack_require__(7) + ");\n  background-repeat: no-repeat; }\n\n#noGL {\n  display: none;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #000; }\n\n#noGL.show {\n  display: block; }\n\n#noGL > .container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  text-align: center;\n  font-family: 'Roboto Mono', sans-serif;\n  font-size: 16px;\n  color: #FFF; }\n\n#noGL > .title > a {\n  color: #1cbf8a; }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/font/4a27a7a4f6d3cfbe4a66698144dbe212.svg";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/font/a1e051fac93aea88de058a7f9be6f9bb.svg";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/font/b951fb66d151a511773ea697ad845cfe.svg";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/font/3ba35ec4dfe45291d5693128173923e1.svg";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 9 */
/***/ function(module, exports) {

	/*
	Copyright 2016 Google Inc. All Rights Reserved.

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	    http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
	*/
	/*
		last modified on 2021-07-08
		by Michael Pannekoek (micsthepick):
		change maxChunks (disable chunks entirely because they are too buggy)
	*/ 

	var Config = module.exports = {
		isStatsEnabled: false,
		isDebugEnabled: false,
		isAudioDisabled: false,
		isResizeDisabled: false,
		isSplashDisabled: false,
		maxChunks: 1,
		maxChunksMobile: 1,
		domain: "./", 	
		paths: {
			tsne: "meta/",
			audio: "audio/"
		}

	};

/***/ }
/******/ ]);