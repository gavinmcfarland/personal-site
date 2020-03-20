require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/html");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/runtime/components/renderer");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/runtime/helpers/load-tag");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/runtime/helpers/dynamic-tag");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/core-tags/components/init-components-tag");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.19.1 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/components/Layout/index.marko",
    marko_renderer = __webpack_require__(1),
    module_logo = __webpack_require__(32),
    logo = module_logo.default || module_logo,
    module_favicon32 = __webpack_require__(33),
    favicon32 = module_favicon32.default || module_favicon32,
    module_favicon16 = __webpack_require__(34),
    favicon16 = module_favicon16.default || module_favicon16,
    module_faviconAppleTouch = __webpack_require__(35),
    faviconAppleTouch = module_faviconAppleTouch.default || module_faviconAppleTouch,
    marko_attr = __webpack_require__(9),
    marko_dynamicTag = __webpack_require__(3),
    marko_loadTag = __webpack_require__(2),
    component_globals_tag = marko_loadTag(__webpack_require__(36)),
    init_components_tag = marko_loadTag(__webpack_require__(4)),
    await_reorderer_tag = marko_loadTag(__webpack_require__(37)),
    marko_classAttr = __webpack_require__(12);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width\"><link rel=\"apple-touch-icon\" sizes=\"180x180\"" +
    marko_attr("href", faviconAppleTouch) +
    "><link rel=\"icon\" type=\"image/png\" sizes=\"32x32\"" +
    marko_attr("href", favicon32) +
    "><link rel=\"icon\" type=\"image/png\" sizes=\"16x16\"" +
    marko_attr("href", favicon16) +
    "><title>");

  if (input.title) {
    marko_dynamicTag(out, input.title, null, null, null, null, __component, "8");

    out.w(" | Gavin McFarland");
  } else {
    out.w("Gavin McFarland");
  }

  out.w("</title>");

  marko_dynamicTag(out, input.styles, null, null, null, null, __component, "9");

  out.w("<link href=\"https://fonts.googleapis.com/css?family=Fira+Code|Fira+Mono|Fira+Sans&amp;display=swap\" rel=\"stylesheet\"><script src=\"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/highlight.min.js\"></script><script>hljs.initHighlightingOnLoad();</script><script async defer data-domain=\"gavinmcfarland.co.uk\" src=\"https://plausible.io/js/plausible.js\"></script>");

  out.___renderAssets && out.___renderAssets()

  out.w("</head><body" +
    marko_classAttr(input.class) +
    ">");

  component_globals_tag({}, out);

  out.w("<div class=\"App\"><header class=\"Nav fullwidth\"><span class=\"Logo fullwidth\"><a href=\"/\">G</a></span><nav><a href=\"/thoughts\">Thoughts</a><a href=\"/about\">About</a></nav></header><main class=\"Container\">");

  marko_dynamicTag(out, input.body, null, null, null, null, __component, "20");

  out.w("</main><footer class=\"Footer fullwidth\"><ul><li>Copyright 2020 &copy; Limitless Loop</li><li><a href=\"https://typolize.now.sh/\">Built with Typolize</a></li></ul><ul class=\"Footer_Link\"><li><a href=\"https://twitter.com/gavinmcfarland\">Twitter</a></li><li><a href=\"https://github.com/limitlessloop\">Github</a></li><li><a href=\"https://www.figma.com/@limitlessloop\">Figma</a></li><li><a href=\"https://dribbble.com/limitlessloop\">Dribbble</a></li></ul>");

  marko_dynamicTag(out, input.footer, null, null, null, null, __component, "35");

  out.w("</footer></div>");

  marko_dynamicTag(out, input.scripts, null, null, null, null, __component, "36");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "37");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    deps: [
      "./style.css"
    ],
    id: "/marko-webpack$1.0.0/src/components/Layout/index.marko",
    tags: [
      "marko/dist/core-tags/components/component-globals-tag",
      "marko/dist/core-tags/components/init-components-tag",
      "marko/dist/core-tags/core/await/reorderer-renderer"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
  getBundleName: function(){return "Client"},
  entries: {"404_78An":{"Client":{"css":["404_78An.fc87db01.css"],"js":["404_78An.f8827e7d.js"],"map":["404_78An.f8827e7d.js.map"]}},"about_kzxx":{"Client":{"css":["about_kzxx.fc87db01.css"],"js":["about_kzxx.4de84997.js"],"map":["about_kzxx.4de84997.js.map"]}},"cv_tq48":{"Client":{"css":["cv_tq48.2984fc67.css"],"js":["cv_tq48.c512cac3.js"],"map":["cv_tq48.c512cac3.js.map"]}},"playground_WjPn":{"Client":{"css":["playground_WjPn.b2ca8898.css"],"js":["playground_WjPn.f4299eef.js"],"map":["playground_WjPn.f4299eef.js.map"]}},"post_ffL2":{"Client":{"css":["post_ffL2.b9b9acac.css"],"js":["post_ffL2.42407623.js"],"map":["post_ffL2.42407623.js.map"]}},"posts_SzJm":{"Client":{"css":["posts_SzJm.fc87db01.css"],"js":["posts_SzJm.c69c17fa.js"],"map":["posts_SzJm.c69c17fa.js.map"]}},"project_Qgdo":{"Client":{"css":["project_Qgdo.fc87db01.css"],"js":["project_Qgdo.2e9bf5c0.js"],"map":["project_Qgdo.2e9bf5c0.js.map"]}},"projects_3eZ0":{"Client":{"css":["projects_3eZ0.8d494db6.css"],"js":["projects_3eZ0.581a5eb0.js"],"map":["projects_3eZ0.581a5eb0.js.map"]}},"templates_IwU3":{"Client":{"css":["templates_IwU3.812441e2.css"],"js":["templates_IwU3.c3bba2c1.js"],"map":["templates_IwU3.c3bba2c1.js.map"]}}}
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var MarkdownIt = __webpack_require__(39)

var md = new MarkdownIt({ html: true })
md.use(__webpack_require__(40));
// md.use(require('markdown-it-implicit-figures'), {
// 	figcaption: true, // <figcaption>alternative text</figcaption>, default: false
// });

function removeIndentation(str) {
	// remove the shortest leading indentation from each line (credit: https://github.com/declandewet/common-tags/blob/master/src/stripIndentTransformer/stripIndentTransformer.js)
	const match = str.match(/^[^\S\n]*(?=\S)/gm);
	const indent = match && Math.min(...match.map(el => el.length));
	if (indent) {
		const regexp = new RegExp(`^.{${indent}}`, 'gm');
		return str.replace(regexp, '');
	}

	return str;
}

module.exports = function(string) {
	var bodyText = removeIndentation(string);
	var html = md.render(bodyText);
	return html;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/runtime/html/helpers/escape-xml");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/runtime/html/helpers/attr");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/runtime/helpers/to-string");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.19.1 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/404.marko",
    marko_renderer = __webpack_require__(1),
    template = __webpack_require__(31),
    module_MARKOWEBPACKMANIFEST_module = __webpack_require__(6),
    MARKOWEBPACKMANIFEST_module = module_MARKOWEBPACKMANIFEST_module.default || module_MARKOWEBPACKMANIFEST_module,
    getBundleName = module_MARKOWEBPACKMANIFEST_module.getBundleName,
    entries = module_MARKOWEBPACKMANIFEST_module.entries,
    marko_dynamicTag = __webpack_require__(3),
    marko_loadTag = __webpack_require__(2),
    init_components_tag = marko_loadTag(__webpack_require__(4));

function renderAssets() {
  const assets = this.___assets;
  this.___renderAssets = this.___assets = undefined;
  this.flush = this.___flush;
  this.end = this.___end;

  if (assets) {
    this.write(`<script>window.$mwp=${JSON.stringify(__webpack_require__.p)}`)

    if (assets.js) {
      this.write(
        `;(function(b,h){var e=[],c=0;h.forEach(function(d,f){var a=b.createElement("link");a.relList&&a.relList.supports&&a.relList.supports("preload")?(a.href=d,a.rel="preload",a.as="script",a.addEventListener("load",function(){e[f]=d;if(c===f)for(var a;a=e[c];c++){var g=b.createElement("script");g.src=a;b.head.appendChild(g)}}),b.head.appendChild(a)):(a=b.createElement("script"),a.src=d,a.defer=!0,b.head.appendChild(a))})})(document,${
          JSON.stringify(assets.js.map(js => __webpack_require__.p+js))
        })`
      );
    }

    this.write("</script>")

    if (assets.css) {
      assets.css.forEach(css => {
        this.write(
          `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p+css)}>`
        );
      });
    }
  }
};

function outFlushOverride() {
  this.___renderAssets();
  this.flush();
};

function outEndOverride(data, encoding, callback) {
  this.___renderAssets();
  this.end(data, encoding, callback);
};

function render(input, out, __component, component, state) {
  var data = input;

  out.___flush = out.flush;

  out.___end = out.end;

  out.___renderAssets = renderAssets;

  out.___assets = entries["404_78An"][getBundleName(out.global)];

  out.flush = outFlushOverride;

  out.end = outEndOverride;

  marko_dynamicTag(out, template, function() {
    return input;
  }, null, null, null, __component, "0");

  init_components_tag({}, out);
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/404.marko",
    tags: [
      "./404.marko",
      "marko/dist/core-tags/components/init-components-tag"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/runtime/html/helpers/class-attr");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "/static/ddec45c210eb5fbe79b334925808dff3.png";

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/runtime/helpers/for-of");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/runtime/helpers/class-value");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("express-slash");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

const v = __webpack_require__(27);


// const sanity = require("./sanity");

const toMarkdown = __webpack_require__(28)

// const imageUrlBuilder = require('@sanity/image-url')
// const builder = imageUrlBuilder(myConfiguredSanityClient)

const sanityClient = __webpack_require__(29)
const imageUrlBuilder = __webpack_require__(30)

const client = sanityClient({
	projectId: 'kvqmg9w0',
	dataset: 'production',
	useCdn: true
})

const builder = imageUrlBuilder(client)

function urlFor(source) {
	return builder.image(source)
}

const serializers = {
	types: {
		code: props => '```' + props.node.language + '\n' + props.node.code + '\n```',
		figma: props => `<div class="wide"><div class="aspect-ratio"><iframe
	height="450"
	style="width: 100%"
	src="https://www.figma.com/embed?embed_host=gavinmcfarland.co.uk&url=${props.node.url}"
	allowfullscreen
	frameBorder="no"
	allowTransparency
	></iframe></div></div>`
	}
}

async function getContent() {
	var content = {}
	content.home = {}
	content.resume = {}
	content.resume.sections = {}
	content.home.intro = {}
	content.home.sections = {}

	await client.fetch('*[_type == "project"] | order(publishedAt desc)').then(projects => {

		projects.forEach(project => {
			project.image = {}
			project.body = toMarkdown(project.body, {
				serializers,
				projectId: 'kvqmg9w0',
				dataset: 'production'
			})
			project.url = '/work/' + project.slug.current
			if (project.mainImage) {
				project.image.url = urlFor(project.mainImage).width(543).url()
			}

		})

		return content.projects = projects
	})

	await client.fetch('*[_type == "post"] | order(publishedAt desc)').then(posts => {

		posts.forEach(post => {
			post.image = {}
			post.body = toMarkdown(post.body, {
				serializers,
				projectId: 'kvqmg9w0',
				dataset: 'production'
			})
			post.description = toMarkdown(post.description, {
				serializers,
				projectId: 'kvqmg9w0',
				dataset: 'production'
			})
			post.url = '/thoughts/' + post.slug.current
			if (post.mainImage) {
				post.image.url = urlFor(post.mainImage).width(543).url()
			}

		})

		return content.posts = posts
	})

	await client.fetch(`*[_type == "page" && title == "Site"][0].sections`).then(sections => {
		sections.forEach(section => {
			var name = v.lowerCase(section.value)
			content.home.sections[name] = section.content
		})

	})

	await client.fetch(`*[_type == "page" && title == "Resume"][0].sections`).then(sections => {
		sections.forEach(section => {
			var name = v.kebabCase(section.value)
			content.resume.sections[name] = section.content
		})

	})

	await client.fetch(`*[_type == "page" && title == "Site"][0].intro`).then(intro => {
		content.home.intro = intro
	})



	return content
}

const api = getContent()

// module.exports = {
// 	api: function() {
// 		return api
// 	},
// 	getContent: function() {
// 		return getContent()
// 	}
// }

const myModule = module.exports = api;
myModule.getContent = function () {
	return getContent()
}


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("serve-static");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.19.1 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/post.marko",
    marko_renderer = __webpack_require__(1),
    template = __webpack_require__(38),
    module_MARKOWEBPACKMANIFEST_module = __webpack_require__(6),
    MARKOWEBPACKMANIFEST_module = module_MARKOWEBPACKMANIFEST_module.default || module_MARKOWEBPACKMANIFEST_module,
    getBundleName = module_MARKOWEBPACKMANIFEST_module.getBundleName,
    entries = module_MARKOWEBPACKMANIFEST_module.entries,
    marko_dynamicTag = __webpack_require__(3),
    marko_loadTag = __webpack_require__(2),
    init_components_tag = marko_loadTag(__webpack_require__(4));

function renderAssets() {
  const assets = this.___assets;
  this.___renderAssets = this.___assets = undefined;
  this.flush = this.___flush;
  this.end = this.___end;

  if (assets) {
    this.write(`<script>window.$mwp=${JSON.stringify(__webpack_require__.p)}`)

    if (assets.js) {
      this.write(
        `;(function(b,h){var e=[],c=0;h.forEach(function(d,f){var a=b.createElement("link");a.relList&&a.relList.supports&&a.relList.supports("preload")?(a.href=d,a.rel="preload",a.as="script",a.addEventListener("load",function(){e[f]=d;if(c===f)for(var a;a=e[c];c++){var g=b.createElement("script");g.src=a;b.head.appendChild(g)}}),b.head.appendChild(a)):(a=b.createElement("script"),a.src=d,a.defer=!0,b.head.appendChild(a))})})(document,${
          JSON.stringify(assets.js.map(js => __webpack_require__.p+js))
        })`
      );
    }

    this.write("</script>")

    if (assets.css) {
      assets.css.forEach(css => {
        this.write(
          `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p+css)}>`
        );
      });
    }
  }
};

function outFlushOverride() {
  this.___renderAssets();
  this.flush();
};

function outEndOverride(data, encoding, callback) {
  this.___renderAssets();
  this.end(data, encoding, callback);
};

function render(input, out, __component, component, state) {
  var data = input;

  out.___flush = out.flush;

  out.___end = out.end;

  out.___renderAssets = renderAssets;

  out.___assets = entries["post_ffL2"][getBundleName(out.global)];

  out.flush = outFlushOverride;

  out.end = outEndOverride;

  marko_dynamicTag(out, template, function() {
    return input;
  }, null, null, null, __component, "0");

  init_components_tag({}, out);
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/post.marko",
    tags: [
      "./post.marko",
      "marko/dist/core-tags/components/init-components-tag"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.19.1 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/project.marko",
    marko_renderer = __webpack_require__(1),
    template = __webpack_require__(41),
    module_MARKOWEBPACKMANIFEST_module = __webpack_require__(6),
    MARKOWEBPACKMANIFEST_module = module_MARKOWEBPACKMANIFEST_module.default || module_MARKOWEBPACKMANIFEST_module,
    getBundleName = module_MARKOWEBPACKMANIFEST_module.getBundleName,
    entries = module_MARKOWEBPACKMANIFEST_module.entries,
    marko_dynamicTag = __webpack_require__(3),
    marko_loadTag = __webpack_require__(2),
    init_components_tag = marko_loadTag(__webpack_require__(4));

function renderAssets() {
  const assets = this.___assets;
  this.___renderAssets = this.___assets = undefined;
  this.flush = this.___flush;
  this.end = this.___end;

  if (assets) {
    this.write(`<script>window.$mwp=${JSON.stringify(__webpack_require__.p)}`)

    if (assets.js) {
      this.write(
        `;(function(b,h){var e=[],c=0;h.forEach(function(d,f){var a=b.createElement("link");a.relList&&a.relList.supports&&a.relList.supports("preload")?(a.href=d,a.rel="preload",a.as="script",a.addEventListener("load",function(){e[f]=d;if(c===f)for(var a;a=e[c];c++){var g=b.createElement("script");g.src=a;b.head.appendChild(g)}}),b.head.appendChild(a)):(a=b.createElement("script"),a.src=d,a.defer=!0,b.head.appendChild(a))})})(document,${
          JSON.stringify(assets.js.map(js => __webpack_require__.p+js))
        })`
      );
    }

    this.write("</script>")

    if (assets.css) {
      assets.css.forEach(css => {
        this.write(
          `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p+css)}>`
        );
      });
    }
  }
};

function outFlushOverride() {
  this.___renderAssets();
  this.flush();
};

function outEndOverride(data, encoding, callback) {
  this.___renderAssets();
  this.end(data, encoding, callback);
};

function render(input, out, __component, component, state) {
  var data = input;

  out.___flush = out.flush;

  out.___end = out.end;

  out.___renderAssets = renderAssets;

  out.___assets = entries["project_Qgdo"][getBundleName(out.global)];

  out.flush = outFlushOverride;

  out.end = outEndOverride;

  marko_dynamicTag(out, template, function() {
    return input;
  }, null, null, null, __component, "0");

  init_components_tag({}, out);
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/project.marko",
    tags: [
      "./project.marko",
      "marko/dist/core-tags/components/init-components-tag"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.19.1 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/about.marko",
    marko_renderer = __webpack_require__(1),
    template = __webpack_require__(42),
    module_MARKOWEBPACKMANIFEST_module = __webpack_require__(6),
    MARKOWEBPACKMANIFEST_module = module_MARKOWEBPACKMANIFEST_module.default || module_MARKOWEBPACKMANIFEST_module,
    getBundleName = module_MARKOWEBPACKMANIFEST_module.getBundleName,
    entries = module_MARKOWEBPACKMANIFEST_module.entries,
    marko_dynamicTag = __webpack_require__(3),
    marko_loadTag = __webpack_require__(2),
    init_components_tag = marko_loadTag(__webpack_require__(4));

function renderAssets() {
  const assets = this.___assets;
  this.___renderAssets = this.___assets = undefined;
  this.flush = this.___flush;
  this.end = this.___end;

  if (assets) {
    this.write(`<script>window.$mwp=${JSON.stringify(__webpack_require__.p)}`)

    if (assets.js) {
      this.write(
        `;(function(b,h){var e=[],c=0;h.forEach(function(d,f){var a=b.createElement("link");a.relList&&a.relList.supports&&a.relList.supports("preload")?(a.href=d,a.rel="preload",a.as="script",a.addEventListener("load",function(){e[f]=d;if(c===f)for(var a;a=e[c];c++){var g=b.createElement("script");g.src=a;b.head.appendChild(g)}}),b.head.appendChild(a)):(a=b.createElement("script"),a.src=d,a.defer=!0,b.head.appendChild(a))})})(document,${
          JSON.stringify(assets.js.map(js => __webpack_require__.p+js))
        })`
      );
    }

    this.write("</script>")

    if (assets.css) {
      assets.css.forEach(css => {
        this.write(
          `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p+css)}>`
        );
      });
    }
  }
};

function outFlushOverride() {
  this.___renderAssets();
  this.flush();
};

function outEndOverride(data, encoding, callback) {
  this.___renderAssets();
  this.end(data, encoding, callback);
};

function render(input, out, __component, component, state) {
  var data = input;

  out.___flush = out.flush;

  out.___end = out.end;

  out.___renderAssets = renderAssets;

  out.___assets = entries["about_kzxx"][getBundleName(out.global)];

  out.flush = outFlushOverride;

  out.end = outEndOverride;

  marko_dynamicTag(out, template, function() {
    return input;
  }, null, null, null, __component, "0");

  init_components_tag({}, out);
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/about.marko",
    tags: [
      "./about.marko",
      "marko/dist/core-tags/components/init-components-tag"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.19.1 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/posts.marko",
    marko_renderer = __webpack_require__(1),
    template = __webpack_require__(46),
    module_MARKOWEBPACKMANIFEST_module = __webpack_require__(6),
    MARKOWEBPACKMANIFEST_module = module_MARKOWEBPACKMANIFEST_module.default || module_MARKOWEBPACKMANIFEST_module,
    getBundleName = module_MARKOWEBPACKMANIFEST_module.getBundleName,
    entries = module_MARKOWEBPACKMANIFEST_module.entries,
    marko_dynamicTag = __webpack_require__(3),
    marko_loadTag = __webpack_require__(2),
    init_components_tag = marko_loadTag(__webpack_require__(4));

function renderAssets() {
  const assets = this.___assets;
  this.___renderAssets = this.___assets = undefined;
  this.flush = this.___flush;
  this.end = this.___end;

  if (assets) {
    this.write(`<script>window.$mwp=${JSON.stringify(__webpack_require__.p)}`)

    if (assets.js) {
      this.write(
        `;(function(b,h){var e=[],c=0;h.forEach(function(d,f){var a=b.createElement("link");a.relList&&a.relList.supports&&a.relList.supports("preload")?(a.href=d,a.rel="preload",a.as="script",a.addEventListener("load",function(){e[f]=d;if(c===f)for(var a;a=e[c];c++){var g=b.createElement("script");g.src=a;b.head.appendChild(g)}}),b.head.appendChild(a)):(a=b.createElement("script"),a.src=d,a.defer=!0,b.head.appendChild(a))})})(document,${
          JSON.stringify(assets.js.map(js => __webpack_require__.p+js))
        })`
      );
    }

    this.write("</script>")

    if (assets.css) {
      assets.css.forEach(css => {
        this.write(
          `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p+css)}>`
        );
      });
    }
  }
};

function outFlushOverride() {
  this.___renderAssets();
  this.flush();
};

function outEndOverride(data, encoding, callback) {
  this.___renderAssets();
  this.end(data, encoding, callback);
};

function render(input, out, __component, component, state) {
  var data = input;

  out.___flush = out.flush;

  out.___end = out.end;

  out.___renderAssets = renderAssets;

  out.___assets = entries["posts_SzJm"][getBundleName(out.global)];

  out.flush = outFlushOverride;

  out.end = outEndOverride;

  marko_dynamicTag(out, template, function() {
    return input;
  }, null, null, null, __component, "0");

  init_components_tag({}, out);
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/posts.marko",
    tags: [
      "./posts.marko",
      "marko/dist/core-tags/components/init-components-tag"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.19.1 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/index.marko",
    marko_renderer = __webpack_require__(1),
    template = __webpack_require__(54),
    module_MARKOWEBPACKMANIFEST_module = __webpack_require__(6),
    MARKOWEBPACKMANIFEST_module = module_MARKOWEBPACKMANIFEST_module.default || module_MARKOWEBPACKMANIFEST_module,
    getBundleName = module_MARKOWEBPACKMANIFEST_module.getBundleName,
    entries = module_MARKOWEBPACKMANIFEST_module.entries,
    marko_dynamicTag = __webpack_require__(3),
    marko_loadTag = __webpack_require__(2),
    init_components_tag = marko_loadTag(__webpack_require__(4));

function renderAssets() {
  const assets = this.___assets;
  this.___renderAssets = this.___assets = undefined;
  this.flush = this.___flush;
  this.end = this.___end;

  if (assets) {
    this.write(`<script>window.$mwp=${JSON.stringify(__webpack_require__.p)}`)

    if (assets.js) {
      this.write(
        `;(function(b,h){var e=[],c=0;h.forEach(function(d,f){var a=b.createElement("link");a.relList&&a.relList.supports&&a.relList.supports("preload")?(a.href=d,a.rel="preload",a.as="script",a.addEventListener("load",function(){e[f]=d;if(c===f)for(var a;a=e[c];c++){var g=b.createElement("script");g.src=a;b.head.appendChild(g)}}),b.head.appendChild(a)):(a=b.createElement("script"),a.src=d,a.defer=!0,b.head.appendChild(a))})})(document,${
          JSON.stringify(assets.js.map(js => __webpack_require__.p+js))
        })`
      );
    }

    this.write("</script>")

    if (assets.css) {
      assets.css.forEach(css => {
        this.write(
          `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p+css)}>`
        );
      });
    }
  }
};

function outFlushOverride() {
  this.___renderAssets();
  this.flush();
};

function outEndOverride(data, encoding, callback) {
  this.___renderAssets();
  this.end(data, encoding, callback);
};

function render(input, out, __component, component, state) {
  var data = input;

  out.___flush = out.flush;

  out.___end = out.end;

  out.___renderAssets = renderAssets;

  out.___assets = entries["templates_IwU3"][getBundleName(out.global)];

  out.flush = outFlushOverride;

  out.end = outEndOverride;

  marko_dynamicTag(out, template, function() {
    return input;
  }, null, null, null, __component, "0");

  init_components_tag({}, out);
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/index.marko",
    tags: [
      "./index.marko",
      "marko/dist/core-tags/components/init-components-tag"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express_slash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var express_slash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_slash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var serve_static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var serve_static__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(serve_static__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _templates_404_marko__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _templates_404_marko__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_templates_404_marko__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _templates_post_marko__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21);
/* harmony import */ var _templates_post_marko__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_templates_post_marko__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _templates_project_marko__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22);
/* harmony import */ var _templates_project_marko__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_templates_project_marko__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _templates_about_marko__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23);
/* harmony import */ var _templates_about_marko__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_templates_about_marko__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _templates_projects_marko__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(44);
/* harmony import */ var _templates_projects_marko__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_templates_projects_marko__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _templates_posts_marko__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24);
/* harmony import */ var _templates_posts_marko__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_templates_posts_marko__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _templates_cv_marko__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(47);
/* harmony import */ var _templates_cv_marko__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_templates_cv_marko__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _templates_playground_marko__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(51);
/* harmony import */ var _templates_playground_marko__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_templates_playground_marko__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _templates_index_marko__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(25);
/* harmony import */ var _templates_index_marko__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_templates_index_marko__WEBPACK_IMPORTED_MODULE_13__);



// Enable gzip compression for all HTTP responses

// Allow all of the generated files to be served up by Express


// const sanity = require("./sanity");

// const sanityClient = require('@sanity/client')
// const client = sanityClient({
//   projectId: 'kvqmg9w0',
//   dataset: 'production',
//   useCdn: false // `false` if you want to ensure fresh data
// })

// const query = '*[_type == "post"]'

// client.fetch(query).then(posts => {
//   posts.forEach(post => {
//     console.log(`${post.title}`)
//   })
// })











const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
const port = process.env.PORT || 8080;

app.enable('strict routing');
app.use(compression__WEBPACK_IMPORTED_MODULE_3___default()());
app.use(express_slash__WEBPACK_IMPORTED_MODULE_1___default()());
app.use("/static", serve_static__WEBPACK_IMPORTED_MODULE_4___default()("dist/client"));

_api__WEBPACK_IMPORTED_MODULE_2___default.a.then(content => {

	app.get("/", (req, res) => {
		_templates_index_marko__WEBPACK_IMPORTED_MODULE_13___default.a.render({ projects: content.projects, ...content.home, work: content.projects, posts: content.posts }, res);
	});

	// app.get("/cv", (req, res) => {
	// 	res.setHeader("Content-Type", "text/html; charset=utf-8");
	// 	Cv.render({ ...content.resume }, res);
	// });

	// app.get("/playground", (req, res) => {
	// 	res.setHeader("Content-Type", "text/html; charset=utf-8");
	// 	Playground.render({ ...content.resume }, res);
	// });

	// app.get("/work", (req, res) => {
	// 	res.setHeader("Content-Type", "text/html; charset=utf-8");
	// 	Projects.render({}, res);
	// });

	app.get("/thoughts", (req, res) => {
		res.setHeader("Content-Type", "text/html; charset=utf-8");
		_templates_posts_marko__WEBPACK_IMPORTED_MODULE_10___default.a.render({ posts: content.posts }, res);
	});

	app.get("/about", (req, res) => {
		res.setHeader("Content-Type", "text/html; charset=utf-8");
		_templates_about_marko__WEBPACK_IMPORTED_MODULE_8___default.a.render({}, res);
	});

	app.get("/thoughts/:post", (req, res) => {
		res.setHeader("Content-Type", "text/html; charset=utf-8");

		let err = true;

		for (let post of content.posts) {

			// If page exists then render page
			if (req.params.post === post.slug.current) {
				_templates_post_marko__WEBPACK_IMPORTED_MODULE_6___default.a.render(post, res);
				err = false
			}
		}

		// If page doesn't exist then render 404
		if (err) {
			_templates_404_marko__WEBPACK_IMPORTED_MODULE_5___default.a.render({}, res.status(404));
		}

	});

	app.get("/work/:post", (req, res) => {
		res.setHeader("Content-Type", "text/html; charset=utf-8");

		let err = true;

		for (let post of content.projects) {
			// If page exists then render page
			if (req.params.post === post.slug.current) {
				_templates_project_marko__WEBPACK_IMPORTED_MODULE_7___default.a.render(post, res);
				err = false
			}
		}

		// If page doesn't exist then render 404
		if (err) {
			_templates_404_marko__WEBPACK_IMPORTED_MODULE_5___default.a.render({}, res.status(404));
		}

	});

	// Render 404 for any unkown routes
	app.use(function (req, res) {
		_templates_404_marko__WEBPACK_IMPORTED_MODULE_5___default.a.render({}, res.status(404));
	});

	// Start the server
	app.listen(port, err => {
		if (err) {
			throw err;
		}

		if (port !== "0") {
			console.log(`Listening on port ${port}`);
		}
	});
})


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("voca");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("@sanity/block-content-to-markdown");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("@sanity/client");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("@sanity/image-url");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.19.1 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/404.marko",
    marko_renderer = __webpack_require__(1),
    Layout_template = __webpack_require__(5),
    marko_loadTag = __webpack_require__(2),
    Layout_tag = marko_loadTag(Layout_template);

function render(input, out, __component, component, state) {
  var data = input;

  Layout_tag({
      title: {
          renderBody: function(out) {
            out.w("404");
          }
        },
      body: {
          renderBody: function(out) {
            out.w("<div><h1>404 Page not found</h1>\n</div>");
          }
        }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/404.marko",
    tags: [
      "../components/Layout/index.marko"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "/static/82b22a8115fd8c5bdb93cdb78e081c34.svg";

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "/static/2145b2f935ce58acc36f5e71433802dc.png";

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "/static/f43129be84af87f460c65a386d018725.png";

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "/static/f3bb3f2dfb5d5e234f0ace39f6e30a65.png";

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/core-tags/components/component-globals-tag");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/core-tags/core/await/reorderer-renderer");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.19.1 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/post.marko",
    marko_renderer = __webpack_require__(1),
    module_markdown = __webpack_require__(7),
    markdown = module_markdown.default || module_markdown,
    helpers_escape_xml = __webpack_require__(8),
    marko_escapeXml = helpers_escape_xml.x,
    marko_str = __webpack_require__(10),
    Layout_template = __webpack_require__(5),
    marko_loadTag = __webpack_require__(2),
    Layout_tag = marko_loadTag(Layout_template);

function render(input, out, __component, component, state) {
  var data = input;

  var date = new Date(input.publishedAt);

  const options = { weekday: "short", year: "numeric", month: "long", day: "numeric" };

  Layout_tag({
      title: {
          renderBody: function(out) {
            out.w(marko_escapeXml(input.title));
          }
        },
      body: {
          renderBody: function(out) {
            if (input.publishedAt) {
              out.w("<h6 style=\"margin-bottom: calc(0px - var(--rem-4))\">" +
                marko_escapeXml(date.toLocaleDateString(undefined, options)) +
                "</h6>");
            }

            out.w("<h1 style=\"max-width: 800px; font-size: var(--font-size-h2)\">" +
              marko_escapeXml(input.title) +
              "</h1><div grid class=\"content\"><div span=\"5\">" +
              marko_str(markdown(input.body)) +
              "</div></div>");
          }
        }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    deps: [
      {
          type: "css",
          code: ".content ul {\n\t\tlist-style: square;\n\t}",
          virtualPath: "./post.marko.css",
          path: "./post.marko"
        }
    ],
    id: "/marko-webpack$1.0.0/src/templates/post.marko",
    tags: [
      "../components/Layout/index.marko"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("markdown-it");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("markdown-it-attrs");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.19.1 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/project.marko",
    marko_renderer = __webpack_require__(1),
    module_markdown = __webpack_require__(7),
    markdown = module_markdown.default || module_markdown,
    module_image = __webpack_require__(13),
    image = module_image.default || module_image,
    helpers_escape_xml = __webpack_require__(8),
    marko_escapeXml = helpers_escape_xml.x,
    marko_str = __webpack_require__(10),
    Layout_template = __webpack_require__(5),
    marko_loadTag = __webpack_require__(2),
    Layout_tag = marko_loadTag(Layout_template);

function render(input, out, __component, component, state) {
  var data = input;

  Layout_tag({
      body: {
          renderBody: function(out) {
            if (input.client) {
              out.w("<h6 style=\"margin-bottom: calc(0px - var(--rem-4))\">" +
                marko_escapeXml(input.client) +
                "</h6>");
            }

            out.w("<h1 style=\"max-width: 800px; font-size: var(--font-size-h2)\">" +
              marko_escapeXml(input.title) +
              "</h1><div grid><div span=\"5\" style=\"font-size: var(--font-size-2); margin-bottom: var(--em-3)\">" +
              marko_str(markdown(input.excerpt)) +
              "</div>");

            if (input.goal || input.role) {
              out.w("<div span=\"3\" style=\"margin-bottom: var(--em-4);\">");

              if (input.goal) {
                out.w("<h6>Goal</h6>" +
                  marko_str(markdown(input.goal)));
              }

              if (input.role) {
                out.w("<h6>Role</h6>" +
                  marko_str(markdown(input.role)));
              }

              if (input.duration) {
                out.w("<h6>Duration</h6>" +
                  marko_str(markdown(input.duration)));
              }

              out.w("</div>");
            }

            out.w("<div class=\"Project__Content\" span=\"5\">" +
              marko_str(markdown(input.body)) +
              "</div></div>");
          }
        }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/project.marko",
    tags: [
      "../components/Layout/index.marko"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.19.1 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/about.marko",
    marko_renderer = __webpack_require__(1),
    module_image = __webpack_require__(43),
    image = module_image.default || module_image,
    marko_attr = __webpack_require__(9),
    Layout_template = __webpack_require__(5),
    marko_loadTag = __webpack_require__(2),
    Layout_tag = marko_loadTag(Layout_template);

function render(input, out, __component, component, state) {
  var data = input;

  Layout_tag({
      title: {
          renderBody: function(out) {
            out.w("About");
          }
        },
      body: {
          renderBody: function(out) {
            out.w("<h1 style=\"font-size: var(--font-size-h2)\">About</h1><div grid><div span=\"3\" style=\"margin-top: calc(0px - var(--rem-0)); margin-bottom: var(--rem-3)\"><img" +
              marko_attr("src", image) +
              " style=\"border-radius: 999px; overflow: hidden; max-width: 360px\" width=\"200\" height=\"200\"></div><div span=\"4\"><h3>Designer, Engineer and Maker from London</h3><p>Ever since I can remember I’ve enjoyed taking things apart and seeing how they work. There is a certain feeling you get from having an idea and seeing it happen. For this reason I enjoy working with people to understand how things work (or don’t work in some cases) and helping solve real problems. I choose the right tools and the right methodologies to improve a situation the best I can.</p>\n<p>I've devoted a lot of my time to exploring how design decisions should be captured and how Designs Systems can reflect these decisions. I have created several frameworks that provide benefits to using Design Systems. This site for example was built using <a href=\"https://typolize.now.sh/\">Typolize</a> which helps harmonise typography and spacing. With it you can easily create designs which work well across multiple devices with little effort. If you'd like to see more of the things I've been working on your can check out my <a href=\"https://github.com/limitlessloop\">Github</a> repos or <a href=\"https://dribbble.com/limitlessloop\">Dribbble</a> profile.</p>\n<p>When I’m not creating things, I like to cook, indulge in retro gaming and collect Lego. If you want to know more about me, my projects or would like to collaborate you can message me or follow me on <a href=\"https://twitter.com/gavinmcfarland\">Twitter</a>.</p>\n</div></div>");
          }
        }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/about.marko",
    tags: [
      "../components/Layout/index.marko"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "/static/5f6b64f6d9ea2873cd21afd4970fc2c9.png";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.19.1 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/projects.marko",
    marko_renderer = __webpack_require__(1),
    template = __webpack_require__(45),
    module_MARKOWEBPACKMANIFEST_module = __webpack_require__(6),
    MARKOWEBPACKMANIFEST_module = module_MARKOWEBPACKMANIFEST_module.default || module_MARKOWEBPACKMANIFEST_module,
    getBundleName = module_MARKOWEBPACKMANIFEST_module.getBundleName,
    entries = module_MARKOWEBPACKMANIFEST_module.entries,
    marko_dynamicTag = __webpack_require__(3),
    marko_loadTag = __webpack_require__(2),
    init_components_tag = marko_loadTag(__webpack_require__(4));

function renderAssets() {
  const assets = this.___assets;
  this.___renderAssets = this.___assets = undefined;
  this.flush = this.___flush;
  this.end = this.___end;

  if (assets) {
    this.write(`<script>window.$mwp=${JSON.stringify(__webpack_require__.p)}`)

    if (assets.js) {
      this.write(
        `;(function(b,h){var e=[],c=0;h.forEach(function(d,f){var a=b.createElement("link");a.relList&&a.relList.supports&&a.relList.supports("preload")?(a.href=d,a.rel="preload",a.as="script",a.addEventListener("load",function(){e[f]=d;if(c===f)for(var a;a=e[c];c++){var g=b.createElement("script");g.src=a;b.head.appendChild(g)}}),b.head.appendChild(a)):(a=b.createElement("script"),a.src=d,a.defer=!0,b.head.appendChild(a))})})(document,${
          JSON.stringify(assets.js.map(js => __webpack_require__.p+js))
        })`
      );
    }

    this.write("</script>")

    if (assets.css) {
      assets.css.forEach(css => {
        this.write(
          `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p+css)}>`
        );
      });
    }
  }
};

function outFlushOverride() {
  this.___renderAssets();
  this.flush();
};

function outEndOverride(data, encoding, callback) {
  this.___renderAssets();
  this.end(data, encoding, callback);
};

function render(input, out, __component, component, state) {
  var data = input;

  out.___flush = out.flush;

  out.___end = out.end;

  out.___renderAssets = renderAssets;

  out.___assets = entries["projects_3eZ0"][getBundleName(out.global)];

  out.flush = outFlushOverride;

  out.end = outEndOverride;

  marko_dynamicTag(out, template, function() {
    return input;
  }, null, null, null, __component, "0");

  init_components_tag({}, out);
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/projects.marko",
    tags: [
      "./projects.marko",
      "marko/dist/core-tags/components/init-components-tag"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.19.1 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/projects.marko",
    marko_renderer = __webpack_require__(1),
    Layout_template = __webpack_require__(5),
    marko_loadTag = __webpack_require__(2),
    Layout_tag = marko_loadTag(Layout_template);

function render(input, out, __component, component, state) {
  var data = input;

  Layout_tag({
      title: {
          renderBody: function(out) {
            out.w("Projects");
          }
        },
      body: {
          renderBody: function(out) {
            out.w("<div class=\"w-viewport hero\">Projects</div><div><p>## An example of a heading</p>\n<p>The designers job it's not seeing you be the Gatekeeper of your product full stop and the gate the designer becomes the Gatekeeper when all the decisions around the products are seen through the eyes of the designers visuals and cups and prototypes. I wonder if this is because many people see the relationship with the designer as a one dimensional relationship where the clients tells the designer what they want and expects the designer to be a person who was someone who can use the tools they cant.</p>\n<h2>What dreams may come</h2>\n<p>When your faced with deadlines and you Need to build the  right product.   when you build the product from decisions alone and you have several other decisions you could have made how do you know you've made the right decision? [ it's not enough to think you Are successful from some an uplift in engagement,   increase in conversion, increase in revenue because. This doesn't answer whether you are meeting the needs of users it also doesn't tell you ] If something is unsuccessful either from tracking the conversion or a b testing and finding significant decrease in Analytics where do you look to to understand how to better your product if the only thing you have to go bye is an absolute conclusion.  we can of course try to find the data behind these conversions through the weeds of documentation and by talking but this puts the needs of the user or the learning further away from ourselves to be able to insure the building  the right product.</p>\n<h2>Something else</h2>\n<p>Secondly the needs of the user often only change gradually where us the why don't you see those needs on map could change many times. if you don't capture the user's needs then how can you accurately assess whether your meeting them.</p>\n<p>Often people won't realise they're giving their design A specification rather than requirements or resources to do their job. I don't really know why this is however I have a French that it has something to do with the way that we imagine the solution to problems or the way we perceive how to achieve things.  perhaps when we solving a problem we don't always know what the problem is just that something isn't right therefore it's much easier to explain a problem in the shape of a solution there must be some reason why people do this so regularly. Perhaps it's a feature of our brains to save time. [ there must be some psychology to it]</p>\n</div>");
          }
        }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    deps: [
      {
          type: "css",
          code: ".hero {\n\t\theight: 30vw;\n\t}",
          virtualPath: "./projects.marko.css",
          path: "./projects.marko"
        }
    ],
    id: "/marko-webpack$1.0.0/src/templates/projects.marko",
    tags: [
      "../components/Layout/index.marko"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.19.1 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/posts.marko",
    marko_renderer = __webpack_require__(1),
    marko_forOf = __webpack_require__(14),
    helpers_escape_xml = __webpack_require__(8),
    marko_escapeXml = helpers_escape_xml.x,
    marko_attr = __webpack_require__(9),
    Layout_template = __webpack_require__(5),
    marko_loadTag = __webpack_require__(2),
    Layout_tag = marko_loadTag(Layout_template);

function render(input, out, __component, component, state) {
  var data = input;

  Layout_tag({
      title: {
          renderBody: function(out) {
            out.w("Thoughts");
          }
        },
      body: {
          renderBody: function(out) {
            out.w("<h1 style=\"font-size: var(--font-size-h2)\">Thoughts</h1><ul>");

            var $for$0 = 0;

            marko_forOf(input.posts, function(post, index) {
              var $keyScope$0 = "[" + (($for$0++) + "]");

              out.w("<li class=\"text-crop-none\" style=\"display: inline;\"><h3><a" +
                marko_attr("href", post.url) +
                ">" +
                marko_escapeXml(post.title) +
                "</a></h3></li>");
            });

            out.w("</ul>");
          }
        }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/posts.marko",
    tags: [
      "../components/Layout/index.marko"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.19.1 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/cv.marko",
    marko_renderer = __webpack_require__(1),
    template = __webpack_require__(48),
    module_MARKOWEBPACKMANIFEST_module = __webpack_require__(6),
    MARKOWEBPACKMANIFEST_module = module_MARKOWEBPACKMANIFEST_module.default || module_MARKOWEBPACKMANIFEST_module,
    getBundleName = module_MARKOWEBPACKMANIFEST_module.getBundleName,
    entries = module_MARKOWEBPACKMANIFEST_module.entries,
    marko_dynamicTag = __webpack_require__(3),
    marko_loadTag = __webpack_require__(2),
    init_components_tag = marko_loadTag(__webpack_require__(4));

function renderAssets() {
  const assets = this.___assets;
  this.___renderAssets = this.___assets = undefined;
  this.flush = this.___flush;
  this.end = this.___end;

  if (assets) {
    this.write(`<script>window.$mwp=${JSON.stringify(__webpack_require__.p)}`)

    if (assets.js) {
      this.write(
        `;(function(b,h){var e=[],c=0;h.forEach(function(d,f){var a=b.createElement("link");a.relList&&a.relList.supports&&a.relList.supports("preload")?(a.href=d,a.rel="preload",a.as="script",a.addEventListener("load",function(){e[f]=d;if(c===f)for(var a;a=e[c];c++){var g=b.createElement("script");g.src=a;b.head.appendChild(g)}}),b.head.appendChild(a)):(a=b.createElement("script"),a.src=d,a.defer=!0,b.head.appendChild(a))})})(document,${
          JSON.stringify(assets.js.map(js => __webpack_require__.p+js))
        })`
      );
    }

    this.write("</script>")

    if (assets.css) {
      assets.css.forEach(css => {
        this.write(
          `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p+css)}>`
        );
      });
    }
  }
};

function outFlushOverride() {
  this.___renderAssets();
  this.flush();
};

function outEndOverride(data, encoding, callback) {
  this.___renderAssets();
  this.end(data, encoding, callback);
};

function render(input, out, __component, component, state) {
  var data = input;

  out.___flush = out.flush;

  out.___end = out.end;

  out.___renderAssets = renderAssets;

  out.___assets = entries["cv_tq48"][getBundleName(out.global)];

  out.flush = outFlushOverride;

  out.end = outEndOverride;

  marko_dynamicTag(out, template, function() {
    return input;
  }, null, null, null, __component, "0");

  init_components_tag({}, out);
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/cv.marko",
    tags: [
      "./cv.marko",
      "marko/dist/core-tags/components/init-components-tag"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.19.1 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/cv.marko",
    marko_renderer = __webpack_require__(1),
    module_markdown = __webpack_require__(7),
    markdown = module_markdown.default || module_markdown,
    marko_forIn = __webpack_require__(49),
    helpers_escape_xml = __webpack_require__(8),
    marko_escapeXml = helpers_escape_xml.x,
    marko_str = __webpack_require__(10),
    Section_template = __webpack_require__(50),
    marko_loadTag = __webpack_require__(2),
    Section_tag = marko_loadTag(Section_template),
    Layout_template = __webpack_require__(5),
    Layout_tag = marko_loadTag(Layout_template);

function render(input, out, __component, component, state) {
  var data = input;

  Layout_tag({
      class: "page__cv",
      title: {
          renderBody: function(out) {
            out.w("CV");
          }
        },
      body: {
          renderBody: function(out) {
            var $for$0 = 0;

            marko_forIn(input.sections, function(heading, content) {
              var $keyScope$0 = "[" + (($for$0++) + "]");

              Section_tag({
                  renderBody: function(out) {
                    out.w("<h2>" +
                      marko_escapeXml(heading) +
                      "</h2><div>" +
                      marko_str(markdown(content)) +
                      "</div>");
                  }
                }, out, __component, "3" + $keyScope$0);
            });

            Section_tag({
                renderBody: function(out) {
                  out.w(marko_escapeXml(input.body));
                }
              }, out, __component, "6");
          }
        }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    deps: [
      {
          type: "css",
          code: "@import \"../styles\";\n\n\t.page__cv {\n\t\t& h2 {\n\t\t\t@extend .f-caps, .f-1, .md\\:w-200;\n\t\t}\n\t\t& section {\n\t\t\t@extend .md\\:flex;\n\t\t}\n\t}\n\n\t.page__cv table th {\n\t\tdisplay: none;\n\t}",
          virtualPath: "./cv.marko.css",
          path: "./cv.marko"
        }
    ],
    id: "/marko-webpack$1.0.0/src/templates/cv.marko",
    tags: [
      "../components/Section/index.marko",
      "../components/Layout/index.marko"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/runtime/helpers/for-in");

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.19.1 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_classValue = __webpack_require__(15),
    marko_componentType = "/marko-webpack$1.0.0/src/components/Section/index.marko",
    marko_renderer = __webpack_require__(1),
    marko_dynamicTag = __webpack_require__(3),
    marko_classAttr = __webpack_require__(12);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<section" +
    marko_classAttr(marko_classValue([
    "Section",
    input.class
  ])) +
    ">");

  marko_dynamicTag(out, input, null, null, null, null, __component, "1");

  out.w("</section>");
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/components/Section/index.marko"
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.19.1 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/playground.marko",
    marko_renderer = __webpack_require__(1),
    template = __webpack_require__(52),
    module_MARKOWEBPACKMANIFEST_module = __webpack_require__(6),
    MARKOWEBPACKMANIFEST_module = module_MARKOWEBPACKMANIFEST_module.default || module_MARKOWEBPACKMANIFEST_module,
    getBundleName = module_MARKOWEBPACKMANIFEST_module.getBundleName,
    entries = module_MARKOWEBPACKMANIFEST_module.entries,
    marko_dynamicTag = __webpack_require__(3),
    marko_loadTag = __webpack_require__(2),
    init_components_tag = marko_loadTag(__webpack_require__(4));

function renderAssets() {
  const assets = this.___assets;
  this.___renderAssets = this.___assets = undefined;
  this.flush = this.___flush;
  this.end = this.___end;

  if (assets) {
    this.write(`<script>window.$mwp=${JSON.stringify(__webpack_require__.p)}`)

    if (assets.js) {
      this.write(
        `;(function(b,h){var e=[],c=0;h.forEach(function(d,f){var a=b.createElement("link");a.relList&&a.relList.supports&&a.relList.supports("preload")?(a.href=d,a.rel="preload",a.as="script",a.addEventListener("load",function(){e[f]=d;if(c===f)for(var a;a=e[c];c++){var g=b.createElement("script");g.src=a;b.head.appendChild(g)}}),b.head.appendChild(a)):(a=b.createElement("script"),a.src=d,a.defer=!0,b.head.appendChild(a))})})(document,${
          JSON.stringify(assets.js.map(js => __webpack_require__.p+js))
        })`
      );
    }

    this.write("</script>")

    if (assets.css) {
      assets.css.forEach(css => {
        this.write(
          `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p+css)}>`
        );
      });
    }
  }
};

function outFlushOverride() {
  this.___renderAssets();
  this.flush();
};

function outEndOverride(data, encoding, callback) {
  this.___renderAssets();
  this.end(data, encoding, callback);
};

function render(input, out, __component, component, state) {
  var data = input;

  out.___flush = out.flush;

  out.___end = out.end;

  out.___renderAssets = renderAssets;

  out.___assets = entries["playground_WjPn"][getBundleName(out.global)];

  out.flush = outFlushOverride;

  out.end = outEndOverride;

  marko_dynamicTag(out, template, function() {
    return input;
  }, null, null, null, __component, "0");

  init_components_tag({}, out);
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/playground.marko",
    tags: [
      "./playground.marko",
      "marko/dist/core-tags/components/init-components-tag"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.19.1 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/playground.marko",
    marko_renderer = __webpack_require__(1),
    module_markdown = __webpack_require__(7),
    markdown = module_markdown.default || module_markdown,
    Button_template = __webpack_require__(53),
    marko_loadTag = __webpack_require__(2),
    Button_tag = marko_loadTag(Button_template),
    Layout_template = __webpack_require__(5),
    Layout_tag = marko_loadTag(Layout_template);

function render(input, out, __component, component, state) {
  var data = input;

  Layout_tag({
      class: "page__cv",
      title: {
          renderBody: function(out) {
            out.w("Playground");
          }
        },
      body: {
          renderBody: function(out) {
            out.w("<hr><h4>Headers</h4><h1>Give it a <br>Good Going</h1><h2>Heading 2</h2><h3>Heading 3</h3><h4>Heading 4</h4><h5>Heading 5</h5><hr><h4>Lists</h4><ul><li>Unordered list item<br> with two lines</li><li>Unordered list item</li><li>Unordered list item</li><li>Unordered list item</li><li>Unordered list item</li><li>Unordered list item</li></ul><ol><li>Ordered list item</li><li>Ordered list item</li><li>Ordered list item</li><li>Ordered list item</li><li>Ordered list item</li><li>Ordered list item</li></ol><hr><h4>Paragraphs</h4><p>Cras luctus elementum felis, ut <b>vestibulum</b> est placerat nec. Sed feugiat dolor id <a href=\"/\">vulputate</a> scelerisque. Vestibulum dignissim ligula ut metus consectetur dignissim. Nullam bibendum, massa eget varius malesuada, est turpis ullamcorper libero, quis laoreet libero ligula eget sapien. Pellentesque tempus augue non gravida tempus. Praesent laoreet ex condimentum dui malesuada ornare. Vestibulum vitae quam augue. Suspendisse accumsan tortor non enim porttitor, sed vestibulum purus ultricies. Fusce a sem ac elit luctus malesuada. Sed a consectetur mi. Nullam a lacus quis sem finibus suscipit in id justo. Nulla eget nisi quam. Mauris vitae congue libero. Integer porttitor urna magna, a maximus ipsum sagittis nec.</p><p>Proin ac turpis ornare <i>velit pretium</i> vulputate eget vel leo. Aliquam viverra condimentum dictum. Fusce blandit lectus at nunc fermentum semper. Sed posuere dictum metus, id tincidunt magna vulputate non. Pellentesque vestibulum, erat et elementum malesuada, quam arcu scelerisque eros, eu volutpat ipsum lorem vel sem. Praesent auctor vehicula nibh, at dignissim felis venenatis et. Vestibulum erat dui, sollicitudin non lorem venenatis, dictum aliquam nisi. Nullam ornare eros sed purus varius interdum. Vivamus molestie tellus vel lobortis auctor. Fusce a orci quis nisl volutpat ultricies vel id nibh.</p><hr><h4>Code</h4><code><pre>\n<b>function</b> getProperties(values) {\n    <b>for</b> (let a = 0; a < values.length; a++) {\n        <b>if</b> (values[a].match(NUMBER)) {\n            <b>return</b> true\n        }\n    }\n}</pre></code><hr><h4>PostCSS Plugins</h4><p>A list of <a>PostCSS</a> plugins which I have created</p><ul><li><a href=\"/\">postcss-sqrt</a></li><li><a href=\"/\">postcss-pow</a></li><li><a href=\"/\">postcss-gap-polyfill</a></li><li><a href=\"/\">postcss-border-align</a></li><li><a href=\"/\">postcss-exact-width</a></li><li><a href=\"/\">postcss-negative-padding</a></li><li><a href=\"/\">postcss-proportional-spacing</a></li><li><a href=\"/\">postcss-escape</a></li></ul><hr><h4>Tables</h4><table><thead><tr><th>Company</th><th>Description</th><th>Sector</th></tr></thead><tbody><tr><td>American Express</td><td>Create Design system for online portal for choosing a card.</td><td>Finance</td></tr><tr><td>Dept for International Trade</td><td>New case management system to help caseworkers process applications for export licenses.</td><td>Public</td></tr><tr><td>Home Office</td><td>Redesign government service providing support to refugees seeking asylum.</td><td>Public</td></tr><tr><td>10Lord</td><td>New service to help provide a better renting experience between tenants, landlords and agents.</td><td>Startup</td></tr><tr><td>Dept for Business, Innovation &amp; Skills</td><td>Digital transfromation of Grant funding platform used by research academics.</td><td>Public</td></tr><tr><td>AIMIA</td><td>Evaluate customers feedback and opinion of Nectar iPhone and Android app to mitigate bad reviews.</td><td>Retail</td></tr><tr><td>John Lewis</td><td>Omni-channel experience for iPad, iPhone, Android and Web.</td><td>Retail</td></tr></tbody></table><p>");

            Button_tag({
                class: "Button",
                href: "/",
                renderBody: function(out) {
                  out.w("Button");
                }
              }, out, __component, "102");

            out.w("</p><img src=\"https://cdn.sanity.io/images/kvqmg9w0/production/d5d6c530ef45c5e18eea5511daf5d44dd7e97f9a-4958x3504.jpg\" width=\"4958\" height=\"3504\">");
          }
        }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/playground.marko",
    tags: [
      "../components/Button/index.marko",
      "../components/Layout/index.marko"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.19.1 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_classValue = __webpack_require__(15),
    marko_componentType = "/marko-webpack$1.0.0/src/components/Button/index.marko",
    marko_renderer = __webpack_require__(1),
    marko_dynamicTag = __webpack_require__(3),
    marko_classAttr = __webpack_require__(12);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<a" +
    marko_classAttr(marko_classValue([
    "Button",
    input.class
  ])) +
    ">");

  marko_dynamicTag(out, input, null, null, null, null, __component, "1");

  out.w("</a>");
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    deps: [
      "./style.css"
    ],
    id: "/marko-webpack$1.0.0/src/components/Button/index.marko"
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.19.1 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/index.marko",
    marko_renderer = __webpack_require__(1),
    module_markdown = __webpack_require__(7),
    markdown = module_markdown.default || module_markdown,
    module_image = __webpack_require__(13),
    image = module_image.default || module_image,
    helpers_escape_xml = __webpack_require__(8),
    marko_escapeXml = helpers_escape_xml.x,
    marko_forOf = __webpack_require__(14),
    marko_attr = __webpack_require__(9),
    marko_str = __webpack_require__(10),
    Layout_template = __webpack_require__(5),
    marko_loadTag = __webpack_require__(2),
    Layout_tag = marko_loadTag(Layout_template);

function render(input, out, __component, component, state) {
  var data = input;

  Layout_tag({
      class: "page_home",
      body: {
          renderBody: function(out) {
            out.w("<h2>" +
              marko_escapeXml(input.intro) +
              "</h2><div><div><h5>People I've Helped</h5><div gap=\"5\">");

            var $for$0 = 0;

            marko_forOf(input.work, function(project, index) {
              var $keyScope$0 = "[" + (($for$0++) + "]");

              out.w("<div grid class=\"Card\"><a" +
                marko_attr("href", project.url) +
                " span=\"4\">");

              if (project.image) {
                out.w("<img" +
                  marko_attr("src", project.image.url) +
                  " class=\"Card__Image\" width=\"543\" height=\"305\">");
              }

              out.w("</a><div class=\"Card__Content\" span=\"4\"><h4 style=\"margin-bottom: var(--rem-1)\"><a" +
                marko_attr("href", project.url) +
                ">" +
                marko_escapeXml(project.title) +
                "</a></h4><p style=\"margin-bottom: var(--em-2); opacity: 0.6\">" +
                marko_escapeXml(project.client) +
                "</p>" +
                marko_str(markdown(project.excerpt)) +
                "<p style=\"margin-top: var(--em-2);\"><a" +
                marko_attr("href", project.url) +
                ">Read More &rarr;</a></p></div></div>");
            });

            out.w("</div><hr class=\"fullwidth\"><h5>What I'm Thinking</h5><ul>");

            var $for$1 = 0;

            marko_forOf(input.posts, function(post, index) {
              var $keyScope$1 = "[" + (($for$1++) + "]");

              out.w("<li class=\"text-crop-none\" style=\"display: inline;\"><h4><a" +
                marko_attr("href", post.url) +
                ">" +
                marko_escapeXml(post.title) +
                "</a></h4></li>");
            });

            out.w("</ul></div></div><hr class=\"fullwidth\"><div><div grid><h5 span=\"3\">Things I've Made</h5><div style=\"margin-bottom: var(--em-3);\" span=\"3\"><h6>PostCSS Plugins</h6><ul><li><a href=\"https://github.com/limitlessloop/postcss-proportional-spacing\">Proportional Spacing</a></li><li><a href=\"https://github.com/limitlessloop/postcss-negative-padding\">Negative Padding</a></li><li><a href=\"https://github.com/limitlessloop/postcss-border-align\">Border Align</a></li><li><a href=\"https://github.com/limitlessloop/postcss-custom-values\">Custom Values</a></li><li><a href=\"https://github.com/limitlessloop/postcss-sqrt\">Sqrt and Pow Functions</a></li><li><a href=\"https://github.com/limitlessloop/flex-gap-polyfill\">Flex Gap Polyfill</a></li></ul></div><div span=\"2\"><h6>Figma Resources</h6><ul><li><a href=\"https://www.figma.com/community/file/784773846783975923\">Redlining Kit</a></li><li><a href=\"https://www.figma.com/community/file/776921648331857127\">Device Frames</a></li><li><a href=\"https://www.figma.com/community/file/776917132627530982\">Design Deliverables</a></li><li><a href=\"https://www.figma.com/community/file/776913337659021541\">Icon Template</a></li><li><a href=\"https://www.figma.com/community/file/817057027097651580\">Syntax Designer</a></li></ul></div></div></div>");
          }
        }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    d_: true,
    e_: marko_componentType
  });

marko_template.meta = {
    deps: [
      {
          type: "css",
          code: ".no-styles {\n\t}",
          virtualPath: "./index.marko.css",
          path: "./index.marko"
        }
    ],
    id: "/marko-webpack$1.0.0/src/templates/index.marko",
    tags: [
      "../components/Layout/index.marko"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map