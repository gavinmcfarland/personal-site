require("source-map-support").install();
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 965:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const v = __webpack_require__(374);


// const sanity = require("./sanity");

const toMarkdown = __webpack_require__(496)

// const imageUrlBuilder = require('@sanity/image-url')
// const builder = imageUrlBuilder(myConfiguredSanityClient)

const sanityClient = __webpack_require__(809)
const imageUrlBuilder = __webpack_require__(817)

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
		figma: props => `<div class="Frame wide"><div class="aspect-ratio"><iframe
	height="450"
	style="width: 100%"
	src="https://www.figma.com/embed?embed_host=gavinmcfarland.co.uk&url=${props.node.url}"
	allowfullscreen
	frameBorder="no"
	allowTransparency
	></iframe></div></div>`,
		codesandbox: props => `<div class="Frame wide"><iframe
	src="https://codesandbox.io/embed/${props.node.container}?codemirror=1&autoresize=0&hidedevtools=1&fontsize=14&hidenavigation=1&module=%2Fstyles.css&theme=${props.node.theme}"
	style="width:100%; height:500px; border:0; verflow:hidden;"
	title="zealous-fast-c2dng"
	allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
	sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
  ></iframe></div>`
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

/***/ 998:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MarkdownIt = __webpack_require__(446)

var md = new MarkdownIt({ html: true })
md.use(__webpack_require__(644));
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

/***/ 496:
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/block-content-to-markdown");

/***/ }),

/***/ 809:
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/client");

/***/ }),

/***/ 817:
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/image-url");

/***/ }),

/***/ 446:
/***/ ((module) => {

"use strict";
module.exports = require("markdown-it");

/***/ }),

/***/ 644:
/***/ ((module) => {

"use strict";
module.exports = require("markdown-it-attrs");

/***/ }),

/***/ 374:
/***/ ((module) => {

"use strict";
module.exports = require("voca");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/static/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: external "express"
const external_express_namespaceObject = require("express");
var external_express_default = /*#__PURE__*/__webpack_require__.n(external_express_namespaceObject);
;// CONCATENATED MODULE: external "express-slash"
const external_express_slash_namespaceObject = require("express-slash");
var external_express_slash_default = /*#__PURE__*/__webpack_require__.n(external_express_slash_namespaceObject);
// EXTERNAL MODULE: ./src/api.js
var api = __webpack_require__(965);
var api_default = /*#__PURE__*/__webpack_require__.n(api);
;// CONCATENATED MODULE: external "compression"
const external_compression_namespaceObject = require("compression");
var external_compression_default = /*#__PURE__*/__webpack_require__.n(external_compression_namespaceObject);
;// CONCATENATED MODULE: external "serve-static"
const external_serve_static_namespaceObject = require("serve-static");
var external_serve_static_default = /*#__PURE__*/__webpack_require__.n(external_serve_static_namespaceObject);
;// CONCATENATED MODULE: external "marko/dist/runtime/html"
const html_namespaceObject = require("marko/dist/runtime/html");
// EXTERNAL MODULE: ./src/scripts/markdown.js
var markdown = __webpack_require__(998);
var markdown_default = /*#__PURE__*/__webpack_require__.n(markdown);
;// CONCATENATED MODULE: external "marko/dist/runtime/helpers/to-string"
const to_string_namespaceObject = require("marko/dist/runtime/helpers/to-string");
var to_string_default = /*#__PURE__*/__webpack_require__.n(to_string_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Layout/favicon-32x32.png
/* harmony default export */ const favicon_32x32 = ("/static/92dbaca3b8ea16114bf6655aeeed237f.png");
;// CONCATENATED MODULE: ./src/components/Layout/favicon-16x16.png
/* harmony default export */ const favicon_16x16 = ("/static/f1c5282cfaef34c863480b0f9d95837d.png");
;// CONCATENATED MODULE: ./src/components/Layout/apple-touch-icon.png
/* harmony default export */ const apple_touch_icon = ("/static/2ca38292033f09f3848b63ee26241871.png");
;// CONCATENATED MODULE: external "marko/dist/runtime/html/helpers/attr"
const attr_namespaceObject = require("marko/dist/runtime/html/helpers/attr");
var attr_default = /*#__PURE__*/__webpack_require__.n(attr_namespaceObject);
;// CONCATENATED MODULE: external "marko/dist/runtime/helpers/dynamic-tag"
const dynamic_tag_namespaceObject = require("marko/dist/runtime/helpers/dynamic-tag");
var dynamic_tag_default = /*#__PURE__*/__webpack_require__.n(dynamic_tag_namespaceObject);
;// CONCATENATED MODULE: external "marko/dist/core-tags/components/init-components-tag.js"
const init_components_tag_js_namespaceObject = require("marko/dist/core-tags/components/init-components-tag.js");
var init_components_tag_js_default = /*#__PURE__*/__webpack_require__.n(init_components_tag_js_namespaceObject);
;// CONCATENATED MODULE: external "marko/dist/runtime/helpers/render-tag"
const render_tag_namespaceObject = require("marko/dist/runtime/helpers/render-tag");
var render_tag_default = /*#__PURE__*/__webpack_require__.n(render_tag_namespaceObject);
;// CONCATENATED MODULE: external "marko/dist/core-tags/core/await/reorderer-renderer.js"
const reorderer_renderer_js_namespaceObject = require("marko/dist/core-tags/core/await/reorderer-renderer.js");
var reorderer_renderer_js_default = /*#__PURE__*/__webpack_require__.n(reorderer_renderer_js_namespaceObject);
;// CONCATENATED MODULE: external "marko/dist/core-tags/components/preferred-script-location-tag.js"
const preferred_script_location_tag_js_namespaceObject = require("marko/dist/core-tags/components/preferred-script-location-tag.js");
var preferred_script_location_tag_js_default = /*#__PURE__*/__webpack_require__.n(preferred_script_location_tag_js_namespaceObject);
;// CONCATENATED MODULE: external "marko/dist/runtime/helpers/class-value"
const class_value_namespaceObject = require("marko/dist/runtime/helpers/class-value");
var class_value_default = /*#__PURE__*/__webpack_require__.n(class_value_namespaceObject);
;// CONCATENATED MODULE: external "marko/dist/runtime/components/renderer"
const renderer_namespaceObject = require("marko/dist/runtime/components/renderer");
var renderer_default = /*#__PURE__*/__webpack_require__.n(renderer_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Layout/index.marko


const _marko_componentType = "mXo7UyZd",
      _marko_template = (0,html_namespaceObject.t)(_marko_componentType);

/* harmony default export */ const index_marko = (_marko_template);












const _marko_component = {};
_marko_template._ = renderer_default()(function (input, out, _componentDef, _component, state) {
  out.w(`<!DOCTYPE html><html lang=en><head><meta charset=UTF-8><meta name=viewport content=width=device-width><link rel=apple-touch-icon sizes=180x180${attr_default()("href", apple_touch_icon)}><link rel=icon type=image/png sizes=32x32${attr_default()("href", favicon_32x32)}><link rel=icon type=image/png sizes=16x16${attr_default()("href", favicon_16x16)}><title>`);

  if (input.title) {
    dynamic_tag_default()(out, input.title, null, null, null, null, _componentDef, "8");

    out.w(" | Gavin McFarland");
  } else {
    out.w("Gavin McFarland - Product Designer and Engineer");
  }

  out.w("</title>");

  dynamic_tag_default()(out, input.head, null, null, null, null, _componentDef, "9");

  dynamic_tag_default()(out, input.styles, null, null, null, null, _componentDef, "10");

  out.w("<link href=https://fonts.googleapis.com/css?family=Fira+Code|Fira+Mono|Fira+Sans&display=swap rel=stylesheet><script src=//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/highlight.min.js></script><script>hljs.initHighlightingOnLoad();</script><script async defer data-domain=gavinmcfarland.co.uk src=https://plausible.io/js/plausible.js></script>");
  out.global.___renderAssets && out.global.___renderAssets(out);
  out.w(`</head><body${attr_default()("class", class_value_default()(input.class))}><div class="App has-bfc"><header class="Nav fullwidth has-bfc"><span class="Logo fullwidth"><a href=/ >G</a></span><nav><a href=/thoughts>Thoughts</a><a href=/about>About</a></nav></header><main class=Container>`);

  dynamic_tag_default()(out, input.body, null, null, null, null, _componentDef, "24");

  out.w("</main><footer class=\"Footer fullwidth\"><ul><li>Copyright 2021 &copy; Limitless Loop</li><li><a href=https://typolize.now.sh/ >Built with Typolize</a></li></ul><ul class=Footer_Link><li><a href=https://twitter.com/gavinmcfarland>Twitter</a></li><li><a href=https://github.com/limitlessloop>Github</a></li><li><a href=https://www.figma.com/@gavinmcfarland>Figma</a></li><li><a href=https://dribbble.com/gavinmcfarland>Dribbble</a></li><li><a href=https://www.linkedin.com/in/gavinmcfarland/ >LinkedIn</a></li></ul>");

  dynamic_tag_default()(out, input.footer, null, null, null, null, _componentDef, "41");

  out.w("</footer></div>");

  dynamic_tag_default()(out, input.scripts, null, null, null, null, _componentDef, "42");

  render_tag_default()((init_components_tag_js_default()), {}, out, _componentDef, "43");

  render_tag_default()((reorderer_renderer_js_default()), {}, out, _componentDef, "44");

  render_tag_default()((preferred_script_location_tag_js_default()), {}, out, _componentDef, "45");

  out.w("</body></html>");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
;// CONCATENATED MODULE: ./src/templates/404.marko


const _404_marko_marko_componentType = "SorPSJJL",
      _404_marko_marko_template = (0,html_namespaceObject.t)(_404_marko_marko_componentType);

/* harmony default export */ const _404_marko = (_404_marko_marko_template);





const _404_marko_marko_component = {};
_404_marko_marko_template._ = renderer_default()(function (input, out, _componentDef, _component, state) {
  render_tag_default()(index_marko, {
    "title": {
      "renderBody": out => {
        out.w("404");
      }
    },
    "body": {
      "renderBody": out => {
        out.w(`<div>${to_string_default()(markdown_default()(`# 404 Page not found`))}</div>`);
      }
    }
  }, out, _componentDef, "0");
}, {
  t: _404_marko_marko_componentType,
  i: true
}, _404_marko_marko_component);
;// CONCATENATED MODULE: ./node_modules/@marko/webpack/dist/loader/index.js!?manifest
/* harmony default export */ const index_js_manifest = ({
  getAssets(entry) {
    return this.build[entry];
  },
  build: {"404_SorP":{"css":["539.672686c3.css"],"js":["404_SorP.d824eec0.js"]},"about_j7b7":{"css":["539.672686c3.css"],"js":["about_j7b7.9ff75005.js"]},"cv_NVa3":{"css":["539.672686c3.css","cv_NVa3.b2ee4b3d.css"],"js":["cv_NVa3.63c9d81a.js"]},"playground_XpWT":{"css":["539.672686c3.css"],"js":["playground_XpWT.57e8f7cc.js"]},"post_Zj91":{"css":["539.672686c3.css","post_Zj91.43018e42.css"],"js":["post_Zj91.b3ef2fc6.js"]},"posts_rK6z":{"css":["539.672686c3.css"],"js":["posts_rK6z.c014c60f.js"]},"project_Fc9u":{"css":["539.672686c3.css"],"js":["project_Fc9u.0f871272.js"]},"projects_FXQR":{"css":["539.672686c3.css","projects_FXQR.0e0058af.css"],"js":["projects_FXQR.1f54cd66.js"]},"templates_-xIm":{"css":["539.672686c3.css"],"js":["templates_-xIm.75cc751e.js"]}}
});
;// CONCATENATED MODULE: external "marko/dist/core-tags/core/__flush_here_and_after__.js"
const _flush_here_and_after_js_namespaceObject = require("marko/dist/core-tags/core/__flush_here_and_after__.js");
var _flush_here_and_after_js_default = /*#__PURE__*/__webpack_require__.n(_flush_here_and_after_js_namespaceObject);
;// CONCATENATED MODULE: ./src/templates/404.marko?server-entry


const _404_marko_server_entry_marko_componentType = "SorPSJJL",
      _404_marko_server_entry_marko_template = (0,html_namespaceObject.t)(_404_marko_server_entry_marko_componentType);

/* harmony default export */ const _404_marko_server_entry = (_404_marko_server_entry_marko_template);




function renderAssets(out) {
  const entries = this.___entries;
  this.___entries = undefined;

  if (entries) {
    const buildName = this.buildName;
    const nonce = this.cspNonce;
    const nonceAttr = nonce ? ` nonce=${JSON.stringify(nonce)}` : "";
    const written = this.___writtenAssets || (this.___writtenAssets = new Set());
    let scripts = "";
    let styles = "";

    for (const entry of entries) {
      const assets = index_js_manifest.getAssets(entry, buildName);

      if (assets.js) {
        for (const href of assets.js) {
          if (!written.has(href)) {
            written.add(href);
            scripts += `<script src=${JSON.stringify(__webpack_require__.p + href)}${nonceAttr} async></script>`;
          }
        }
      }

      if (assets.css) {
        for (const href of assets.css) {
          if (!written.has(href)) {
            written.add(href);
            styles += `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p + href)}>`;
          }
        }
      }
    }

    out.write(scripts + styles);
  }
}






const _404_marko_server_entry_marko_component = {};
_404_marko_server_entry_marko_template._ = renderer_default()(function (input, out, _componentDef, _component, state) {
  out.global.___renderAssets = renderAssets;
  (out.global.___entries || (out.global.___entries = [])).push("404_SorP");

  render_tag_default()((_flush_here_and_after_js_default()), {
    "renderBody": out => {
      out.global.___renderAssets && out.global.___renderAssets(out);
    }
  }, out, _componentDef, "0");

  render_tag_default()(_404_marko, input, out, _componentDef, "1");

  render_tag_default()((init_components_tag_js_default()), {}, out, _componentDef, "2");

  render_tag_default()((reorderer_renderer_js_default()), {}, out, _componentDef, "3");
}, {
  t: _404_marko_server_entry_marko_componentType,
  i: true
}, _404_marko_server_entry_marko_component);
;// CONCATENATED MODULE: ./src/templates/avatar.png
/* harmony default export */ const avatar = ("/static/72bc34d22374d7f5a498b95c4162bc5e.png");
;// CONCATENATED MODULE: external "marko/dist/runtime/html/helpers/escape-xml"
const escape_xml_namespaceObject = require("marko/dist/runtime/html/helpers/escape-xml");
;// CONCATENATED MODULE: ./src/templates/post.marko


const post_marko_marko_componentType = "Zj91//lR",
      post_marko_marko_template = (0,html_namespaceObject.t)(post_marko_marko_componentType);

/* harmony default export */ const post_marko = (post_marko_marko_template);








const post_marko_marko_component = {};
post_marko_marko_template._ = renderer_default()(function (input, out, _componentDef, _component, state) {
  var date = new Date(input.publishedAt);
  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  render_tag_default()(index_marko, {
    "title": {
      "renderBody": out => {
        out.w((0,escape_xml_namespaceObject.x)(input.title));
      }
    },
    "head": {
      "renderBody": out => {
        out.w(`<meta name=twitter:card content=summary><meta name=twitter:creator content=@gavinmcfarland><meta property=og:title${attr_default()("content", `${input.title}`)}>`);

        if (input.url) {
          out.w(`<meta property=og:url${attr_default()("content", `https://gavinmcfarland.co.uk${input.url}`)}>`);
        }

        if (input.excerpt) {
          out.w(`<meta property=og:description${attr_default()("content", `${input.excerpt}`)}>`);
        }

        if (input.mainImage) {
          out.w(`<meta property=og:image${attr_default()("content", `https://gavinmcfarland.co.uk${input.mainImage}`)}>`);
        } else {
          out.w(`<meta property=og:image${attr_default()("content", `https://gavinmcfarland.co.uk${avatar}`)}>`);
        }
      }
    },
    "body": {
      "renderBody": out => {
        if (input.publishedAt) {
          out.w(`<h6 style="margin-bottom: calc(0px - var(--rem-4))">${(0,escape_xml_namespaceObject.x)(date.toLocaleDateString(undefined, options))}</h6>`);
        }

        out.w(`<h1 style="max-width: 25ch; font-size: var(--font-size-h2)">${(0,escape_xml_namespaceObject.x)(input.title)}</h1><div grid class=content><div span=5>${to_string_default()(markdown_default()(input.body))}</div></div>`);
      }
    }
  }, out, _componentDef, "0");
}, {
  t: post_marko_marko_componentType,
  i: true
}, post_marko_marko_component);
;// CONCATENATED MODULE: ./src/templates/post.marko?server-entry


const post_marko_server_entry_marko_componentType = "Zj91//lR",
      post_marko_server_entry_marko_template = (0,html_namespaceObject.t)(post_marko_server_entry_marko_componentType);

/* harmony default export */ const post_marko_server_entry = (post_marko_server_entry_marko_template);




function post_marko_server_entry_renderAssets(out) {
  const entries = this.___entries;
  this.___entries = undefined;

  if (entries) {
    const buildName = this.buildName;
    const nonce = this.cspNonce;
    const nonceAttr = nonce ? ` nonce=${JSON.stringify(nonce)}` : "";
    const written = this.___writtenAssets || (this.___writtenAssets = new Set());
    let scripts = "";
    let styles = "";

    for (const entry of entries) {
      const assets = index_js_manifest.getAssets(entry, buildName);

      if (assets.js) {
        for (const href of assets.js) {
          if (!written.has(href)) {
            written.add(href);
            scripts += `<script src=${JSON.stringify(__webpack_require__.p + href)}${nonceAttr} async></script>`;
          }
        }
      }

      if (assets.css) {
        for (const href of assets.css) {
          if (!written.has(href)) {
            written.add(href);
            styles += `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p + href)}>`;
          }
        }
      }
    }

    out.write(scripts + styles);
  }
}






const post_marko_server_entry_marko_component = {};
post_marko_server_entry_marko_template._ = renderer_default()(function (input, out, _componentDef, _component, state) {
  out.global.___renderAssets = post_marko_server_entry_renderAssets;
  (out.global.___entries || (out.global.___entries = [])).push("post_Zj91");

  render_tag_default()((_flush_here_and_after_js_default()), {
    "renderBody": out => {
      out.global.___renderAssets && out.global.___renderAssets(out);
    }
  }, out, _componentDef, "0");

  render_tag_default()(post_marko, input, out, _componentDef, "1");

  render_tag_default()((init_components_tag_js_default()), {}, out, _componentDef, "2");

  render_tag_default()((reorderer_renderer_js_default()), {}, out, _componentDef, "3");
}, {
  t: post_marko_server_entry_marko_componentType,
  i: true
}, post_marko_server_entry_marko_component);
;// CONCATENATED MODULE: ./src/templates/project.marko


const project_marko_marko_componentType = "Fc9ukEKV",
      project_marko_marko_template = (0,html_namespaceObject.t)(project_marko_marko_componentType);

/* harmony default export */ const project_marko = (project_marko_marko_template);







const project_marko_marko_component = {};
project_marko_marko_template._ = renderer_default()(function (input, out, _componentDef, _component, state) {
  render_tag_default()(index_marko, {
    "body": {
      "renderBody": out => {
        if (input.client) {
          out.w(`<h6 style="margin-bottom: calc(0px - var(--rem-4))">${(0,escape_xml_namespaceObject.x)(input.client)}</h6>`);
        }

        out.w(`<h1 style="max-width: 800px; font-size: var(--font-size-h2)">${(0,escape_xml_namespaceObject.x)(input.title)}</h1><div grid><div span=5 style="font-size: var(--font-size-2); margin-bottom: var(--em-3)">${to_string_default()(markdown_default()(input.excerpt))}</div>`);

        if (input.goal || input.role) {
          out.w("<div span=3 style=\"margin-bottom: var(--em-4);\">");

          if (input.goal) {
            out.w(`<h6>Goal</h6>${to_string_default()(markdown_default()(input.goal))}`);
          }

          if (input.role) {
            out.w(`<h6>Role</h6>${to_string_default()(markdown_default()(input.role))}`);
          }

          if (input.duration) {
            out.w(`<h6>Duration</h6>${to_string_default()(markdown_default()(input.duration))}`);
          }

          out.w("</div>");
        }

        out.w(`<div class=Project__Content span=5>${to_string_default()(markdown_default()(input.body))}</div></div>`);
      }
    }
  }, out, _componentDef, "0");
}, {
  t: project_marko_marko_componentType,
  i: true
}, project_marko_marko_component);
;// CONCATENATED MODULE: ./src/templates/project.marko?server-entry


const project_marko_server_entry_marko_componentType = "Fc9ukEKV",
      project_marko_server_entry_marko_template = (0,html_namespaceObject.t)(project_marko_server_entry_marko_componentType);

/* harmony default export */ const project_marko_server_entry = (project_marko_server_entry_marko_template);




function project_marko_server_entry_renderAssets(out) {
  const entries = this.___entries;
  this.___entries = undefined;

  if (entries) {
    const buildName = this.buildName;
    const nonce = this.cspNonce;
    const nonceAttr = nonce ? ` nonce=${JSON.stringify(nonce)}` : "";
    const written = this.___writtenAssets || (this.___writtenAssets = new Set());
    let scripts = "";
    let styles = "";

    for (const entry of entries) {
      const assets = index_js_manifest.getAssets(entry, buildName);

      if (assets.js) {
        for (const href of assets.js) {
          if (!written.has(href)) {
            written.add(href);
            scripts += `<script src=${JSON.stringify(__webpack_require__.p + href)}${nonceAttr} async></script>`;
          }
        }
      }

      if (assets.css) {
        for (const href of assets.css) {
          if (!written.has(href)) {
            written.add(href);
            styles += `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p + href)}>`;
          }
        }
      }
    }

    out.write(scripts + styles);
  }
}






const project_marko_server_entry_marko_component = {};
project_marko_server_entry_marko_template._ = renderer_default()(function (input, out, _componentDef, _component, state) {
  out.global.___renderAssets = project_marko_server_entry_renderAssets;
  (out.global.___entries || (out.global.___entries = [])).push("project_Fc9u");

  render_tag_default()((_flush_here_and_after_js_default()), {
    "renderBody": out => {
      out.global.___renderAssets && out.global.___renderAssets(out);
    }
  }, out, _componentDef, "0");

  render_tag_default()(project_marko, input, out, _componentDef, "1");

  render_tag_default()((init_components_tag_js_default()), {}, out, _componentDef, "2");

  render_tag_default()((reorderer_renderer_js_default()), {}, out, _componentDef, "3");
}, {
  t: project_marko_server_entry_marko_componentType,
  i: true
}, project_marko_server_entry_marko_component);
;// CONCATENATED MODULE: ./src/templates/about.marko


const about_marko_marko_componentType = "j7b7Vdka",
      about_marko_marko_template = (0,html_namespaceObject.t)(about_marko_marko_componentType);

/* harmony default export */ const about_marko = (about_marko_marko_template);







const about_marko_marko_component = {};
about_marko_marko_template._ = renderer_default()(function (input, out, _componentDef, _component, state) {
  render_tag_default()(index_marko, {
    "title": {
      "renderBody": out => {
        out.w("About");
      }
    },
    "body": {
      "renderBody": out => {
        out.w(`<h1 style="font-size: var(--font-size-h2)">About</h1><div grid><div span=3 style="margin-top: calc(0px - var(--rem-0)); margin-bottom: var(--rem-3)"><img${attr_default()("src", avatar)} style="border-radius: 999px; overflow: hidden; max-width: 360px" width=200 height=200></div><div span=4><h3>Designer, Engineer and Maker from London</h3>${to_string_default()(markdown_default()(`Ever since I can remember I’ve enjoyed taking things apart and seeing how they work. There is a certain feeling you get from having an idea and seeing it happen. For this reason I enjoy working with people to understand how things work (or don’t work in some cases) and helping solve real problems. I choose the right tools and the right methodologies to improve a situation the best I can.

I've devoted a lot of my time to exploring how design decisions should be captured and how Designs Systems can reflect these decisions. I have created several frameworks that provide benefits to using Design Systems. This site for example was built using [Typolize](https://typolize.now.sh/) which helps harmonise typography and spacing. With it you can easily create designs which work well across multiple devices with little effort. If you'd like to see more of the things I've been working on your can check out my [Github](https://github.com/limitlessloop) repos or [Dribbble](https://dribbble.com/limitlessloop) profile.

When I’m not creating things, I like to cook, indulge in retro gaming and collect Lego. If you want to know more about me, my projects or would like to collaborate you can message me or follow me on [Twitter](https://twitter.com/gavinmcfarland).`))}</div></div>`);
      }
    }
  }, out, _componentDef, "0");
}, {
  t: about_marko_marko_componentType,
  i: true
}, about_marko_marko_component);
;// CONCATENATED MODULE: ./src/templates/about.marko?server-entry


const about_marko_server_entry_marko_componentType = "j7b7Vdka",
      about_marko_server_entry_marko_template = (0,html_namespaceObject.t)(about_marko_server_entry_marko_componentType);

/* harmony default export */ const about_marko_server_entry = (about_marko_server_entry_marko_template);




function about_marko_server_entry_renderAssets(out) {
  const entries = this.___entries;
  this.___entries = undefined;

  if (entries) {
    const buildName = this.buildName;
    const nonce = this.cspNonce;
    const nonceAttr = nonce ? ` nonce=${JSON.stringify(nonce)}` : "";
    const written = this.___writtenAssets || (this.___writtenAssets = new Set());
    let scripts = "";
    let styles = "";

    for (const entry of entries) {
      const assets = index_js_manifest.getAssets(entry, buildName);

      if (assets.js) {
        for (const href of assets.js) {
          if (!written.has(href)) {
            written.add(href);
            scripts += `<script src=${JSON.stringify(__webpack_require__.p + href)}${nonceAttr} async></script>`;
          }
        }
      }

      if (assets.css) {
        for (const href of assets.css) {
          if (!written.has(href)) {
            written.add(href);
            styles += `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p + href)}>`;
          }
        }
      }
    }

    out.write(scripts + styles);
  }
}






const about_marko_server_entry_marko_component = {};
about_marko_server_entry_marko_template._ = renderer_default()(function (input, out, _componentDef, _component, state) {
  out.global.___renderAssets = about_marko_server_entry_renderAssets;
  (out.global.___entries || (out.global.___entries = [])).push("about_j7b7");

  render_tag_default()((_flush_here_and_after_js_default()), {
    "renderBody": out => {
      out.global.___renderAssets && out.global.___renderAssets(out);
    }
  }, out, _componentDef, "0");

  render_tag_default()(about_marko, input, out, _componentDef, "1");

  render_tag_default()((init_components_tag_js_default()), {}, out, _componentDef, "2");

  render_tag_default()((reorderer_renderer_js_default()), {}, out, _componentDef, "3");
}, {
  t: about_marko_server_entry_marko_componentType,
  i: true
}, about_marko_server_entry_marko_component);
;// CONCATENATED MODULE: ./src/templates/projects.marko


const projects_marko_marko_componentType = "FXQRbNHO",
      projects_marko_marko_template = (0,html_namespaceObject.t)(projects_marko_marko_componentType);

/* harmony default export */ const projects_marko = (projects_marko_marko_template);



const projects_marko_marko_component = {};
projects_marko_marko_template._ = renderer_default()(function (input, out, _componentDef, _component, state) {
  render_tag_default()(index_marko, {
    "title": {
      "renderBody": out => {
        out.w("Projects");
      }
    },
    "body": {
      "renderBody": out => {
        out.w("<div class=\"w-viewport hero\">Projects</div><div></div>");
      }
    }
  }, out, _componentDef, "0");
}, {
  t: projects_marko_marko_componentType,
  i: true
}, projects_marko_marko_component);
;// CONCATENATED MODULE: ./src/templates/projects.marko?server-entry


const projects_marko_server_entry_marko_componentType = "FXQRbNHO",
      projects_marko_server_entry_marko_template = (0,html_namespaceObject.t)(projects_marko_server_entry_marko_componentType);

/* harmony default export */ const projects_marko_server_entry = ((/* unused pure expression or super */ null && (projects_marko_server_entry_marko_template)));




function projects_marko_server_entry_renderAssets(out) {
  const entries = this.___entries;
  this.___entries = undefined;

  if (entries) {
    const buildName = this.buildName;
    const nonce = this.cspNonce;
    const nonceAttr = nonce ? ` nonce=${JSON.stringify(nonce)}` : "";
    const written = this.___writtenAssets || (this.___writtenAssets = new Set());
    let scripts = "";
    let styles = "";

    for (const entry of entries) {
      const assets = index_js_manifest.getAssets(entry, buildName);

      if (assets.js) {
        for (const href of assets.js) {
          if (!written.has(href)) {
            written.add(href);
            scripts += `<script src=${JSON.stringify(__webpack_require__.p + href)}${nonceAttr} async></script>`;
          }
        }
      }

      if (assets.css) {
        for (const href of assets.css) {
          if (!written.has(href)) {
            written.add(href);
            styles += `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p + href)}>`;
          }
        }
      }
    }

    out.write(scripts + styles);
  }
}






const projects_marko_server_entry_marko_component = {};
projects_marko_server_entry_marko_template._ = renderer_default()(function (input, out, _componentDef, _component, state) {
  out.global.___renderAssets = projects_marko_server_entry_renderAssets;
  (out.global.___entries || (out.global.___entries = [])).push("projects_FXQR");

  render_tag_default()((_flush_here_and_after_js_default()), {
    "renderBody": out => {
      out.global.___renderAssets && out.global.___renderAssets(out);
    }
  }, out, _componentDef, "0");

  render_tag_default()(projects_marko, input, out, _componentDef, "1");

  render_tag_default()((init_components_tag_js_default()), {}, out, _componentDef, "2");

  render_tag_default()((reorderer_renderer_js_default()), {}, out, _componentDef, "3");
}, {
  t: projects_marko_server_entry_marko_componentType,
  i: true
}, projects_marko_server_entry_marko_component);
;// CONCATENATED MODULE: ./src/templates/posts.marko


const posts_marko_marko_componentType = "rK6zvBIV",
      posts_marko_marko_template = (0,html_namespaceObject.t)(posts_marko_marko_componentType);

/* harmony default export */ const posts_marko = (posts_marko_marko_template);





const posts_marko_marko_component = {};
posts_marko_marko_template._ = renderer_default()(function (input, out, _componentDef, _component, state) {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  render_tag_default()(index_marko, {
    "title": {
      "renderBody": out => {
        out.w("Thoughts");
      }
    },
    "body": {
      "renderBody": out => {
        out.w("<h1 style=\"font-size: var(--font-size-h2)\">Thoughts</h1><ul>");
        {
          let _index = 0;

          for (const post of input.posts) {
            let index = _index++;
            const _keyScope = `[${index}]`;
            out.w(`<li class=text-crop-none style="display: inline;"><h3><a${attr_default()("href", post.url)}>${(0,escape_xml_namespaceObject.x)(post.title)}</a></h3>`);

            if (post.publishedAt) {
              out.w(`<p style="margin-top: calc(0px - var(--em-3))">${(0,escape_xml_namespaceObject.x)(new Date(post.publishedAt).toLocaleDateString(undefined, options))}</p>`);
            }

            out.w("</li>");
          }
        }
        out.w("</ul>");
      }
    }
  }, out, _componentDef, "0");
}, {
  t: posts_marko_marko_componentType,
  i: true
}, posts_marko_marko_component);
;// CONCATENATED MODULE: ./src/templates/posts.marko?server-entry


const posts_marko_server_entry_marko_componentType = "rK6zvBIV",
      posts_marko_server_entry_marko_template = (0,html_namespaceObject.t)(posts_marko_server_entry_marko_componentType);

/* harmony default export */ const posts_marko_server_entry = (posts_marko_server_entry_marko_template);




function posts_marko_server_entry_renderAssets(out) {
  const entries = this.___entries;
  this.___entries = undefined;

  if (entries) {
    const buildName = this.buildName;
    const nonce = this.cspNonce;
    const nonceAttr = nonce ? ` nonce=${JSON.stringify(nonce)}` : "";
    const written = this.___writtenAssets || (this.___writtenAssets = new Set());
    let scripts = "";
    let styles = "";

    for (const entry of entries) {
      const assets = index_js_manifest.getAssets(entry, buildName);

      if (assets.js) {
        for (const href of assets.js) {
          if (!written.has(href)) {
            written.add(href);
            scripts += `<script src=${JSON.stringify(__webpack_require__.p + href)}${nonceAttr} async></script>`;
          }
        }
      }

      if (assets.css) {
        for (const href of assets.css) {
          if (!written.has(href)) {
            written.add(href);
            styles += `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p + href)}>`;
          }
        }
      }
    }

    out.write(scripts + styles);
  }
}






const posts_marko_server_entry_marko_component = {};
posts_marko_server_entry_marko_template._ = renderer_default()(function (input, out, _componentDef, _component, state) {
  out.global.___renderAssets = posts_marko_server_entry_renderAssets;
  (out.global.___entries || (out.global.___entries = [])).push("posts_rK6z");

  render_tag_default()((_flush_here_and_after_js_default()), {
    "renderBody": out => {
      out.global.___renderAssets && out.global.___renderAssets(out);
    }
  }, out, _componentDef, "0");

  render_tag_default()(posts_marko, input, out, _componentDef, "1");

  render_tag_default()((init_components_tag_js_default()), {}, out, _componentDef, "2");

  render_tag_default()((reorderer_renderer_js_default()), {}, out, _componentDef, "3");
}, {
  t: posts_marko_server_entry_marko_componentType,
  i: true
}, posts_marko_server_entry_marko_component);
;// CONCATENATED MODULE: ./src/components/Section/index.marko


const index_marko_marko_componentType = "pk0+kHE1",
      index_marko_marko_template = (0,html_namespaceObject.t)(index_marko_marko_componentType);

/* harmony default export */ const Section_index_marko = (index_marko_marko_template);




const index_marko_marko_component = {};
index_marko_marko_template._ = renderer_default()(function (input, out, _componentDef, _component, state) {
  out.w(`<section${attr_default()("class", class_value_default()(["Section", input.class]))}>`);

  dynamic_tag_default()(out, input, null, null, null, null, _componentDef, "1");

  out.w("</section>");
}, {
  t: index_marko_marko_componentType,
  i: true
}, index_marko_marko_component);
;// CONCATENATED MODULE: ./src/templates/cv.marko


const cv_marko_marko_componentType = "NVa3c/aI",
      cv_marko_marko_template = (0,html_namespaceObject.t)(cv_marko_marko_componentType);

/* harmony default export */ const cv_marko = (cv_marko_marko_template);







const cv_marko_marko_component = {};
cv_marko_marko_template._ = renderer_default()(function (input, out, _componentDef, _component, state) {
  render_tag_default()(index_marko, {
    "class": "page__cv",
    "title": {
      "renderBody": out => {
        out.w("CV");
      }
    },
    "body": {
      "renderBody": out => {
        for (const heading in input.sections) {
          const content = input.sections[heading];
          const _keyScope = `[${heading}]`;

          render_tag_default()(Section_index_marko, {
            "renderBody": out => {
              out.w(`<h2>${(0,escape_xml_namespaceObject.x)(heading)}</h2><div>${to_string_default()(markdown_default()(content))}</div>`);
            }
          }, out, _componentDef, "1" + _keyScope);
        }

        render_tag_default()(Section_index_marko, {
          "renderBody": out => {
            out.w((0,escape_xml_namespaceObject.x)(input.body));
          }
        }, out, _componentDef, "4");
      }
    }
  }, out, _componentDef, "0");
}, {
  t: cv_marko_marko_componentType,
  i: true
}, cv_marko_marko_component);
;// CONCATENATED MODULE: ./src/templates/cv.marko?server-entry


const cv_marko_server_entry_marko_componentType = "NVa3c/aI",
      cv_marko_server_entry_marko_template = (0,html_namespaceObject.t)(cv_marko_server_entry_marko_componentType);

/* harmony default export */ const cv_marko_server_entry = ((/* unused pure expression or super */ null && (cv_marko_server_entry_marko_template)));




function cv_marko_server_entry_renderAssets(out) {
  const entries = this.___entries;
  this.___entries = undefined;

  if (entries) {
    const buildName = this.buildName;
    const nonce = this.cspNonce;
    const nonceAttr = nonce ? ` nonce=${JSON.stringify(nonce)}` : "";
    const written = this.___writtenAssets || (this.___writtenAssets = new Set());
    let scripts = "";
    let styles = "";

    for (const entry of entries) {
      const assets = index_js_manifest.getAssets(entry, buildName);

      if (assets.js) {
        for (const href of assets.js) {
          if (!written.has(href)) {
            written.add(href);
            scripts += `<script src=${JSON.stringify(__webpack_require__.p + href)}${nonceAttr} async></script>`;
          }
        }
      }

      if (assets.css) {
        for (const href of assets.css) {
          if (!written.has(href)) {
            written.add(href);
            styles += `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p + href)}>`;
          }
        }
      }
    }

    out.write(scripts + styles);
  }
}






const cv_marko_server_entry_marko_component = {};
cv_marko_server_entry_marko_template._ = renderer_default()(function (input, out, _componentDef, _component, state) {
  out.global.___renderAssets = cv_marko_server_entry_renderAssets;
  (out.global.___entries || (out.global.___entries = [])).push("cv_NVa3");

  render_tag_default()((_flush_here_and_after_js_default()), {
    "renderBody": out => {
      out.global.___renderAssets && out.global.___renderAssets(out);
    }
  }, out, _componentDef, "0");

  render_tag_default()(cv_marko, input, out, _componentDef, "1");

  render_tag_default()((init_components_tag_js_default()), {}, out, _componentDef, "2");

  render_tag_default()((reorderer_renderer_js_default()), {}, out, _componentDef, "3");
}, {
  t: cv_marko_server_entry_marko_componentType,
  i: true
}, cv_marko_server_entry_marko_component);
;// CONCATENATED MODULE: ./src/components/Button/index.marko


const Button_index_marko_marko_componentType = "ZUc8nlQZ",
      Button_index_marko_marko_template = (0,html_namespaceObject.t)(Button_index_marko_marko_componentType);

/* harmony default export */ const Button_index_marko = (Button_index_marko_marko_template);




const Button_index_marko_marko_component = {};
Button_index_marko_marko_template._ = renderer_default()(function (input, out, _componentDef, _component, state) {
  out.w(`<a${attr_default()("class", class_value_default()(["Button", input.class]))}>`);

  dynamic_tag_default()(out, input, null, null, null, null, _componentDef, "1");

  out.w("</a>");
}, {
  t: Button_index_marko_marko_componentType,
  i: true
}, Button_index_marko_marko_component);
;// CONCATENATED MODULE: ./src/templates/playground.marko


const playground_marko_marko_componentType = "XpWTtFvY",
      playground_marko_marko_template = (0,html_namespaceObject.t)(playground_marko_marko_componentType);

/* harmony default export */ const playground_marko = (playground_marko_marko_template);





const playground_marko_marko_component = {};
playground_marko_marko_template._ = renderer_default()(function (input, out, _componentDef, _component, state) {
  render_tag_default()(index_marko, {
    "class": "page__cv",
    "title": {
      "renderBody": out => {
        out.w("Playground");
      }
    },
    "body": {
      "renderBody": out => {
        out.w("<hr><h4>Headers</h4><h1>Give it a <br>Good Going</h1><h2>Heading 2</h2><h3>Heading 3</h3><h4>Heading 4</h4><h5>Heading 5</h5><hr><h4>Lists</h4><ul><li>Unordered list item<br> with two lines</li><li>Unordered list item</li><li>Unordered list item</li><li>Unordered list item</li><li>Unordered list item</li><li>Unordered list item</li></ul><ol><li>Ordered list item</li><li>Ordered list item</li><li>Ordered list item</li><li>Ordered list item</li><li>Ordered list item</li><li>Ordered list item</li></ol><hr><h4>Paragraphs</h4><p>Cras luctus elementum felis, ut <b>vestibulum</b> est placerat nec. Sed feugiat dolor id <a href=/ >vulputate</a> scelerisque. Vestibulum dignissim ligula ut metus consectetur dignissim. Nullam bibendum, massa eget varius malesuada, est turpis ullamcorper libero, quis laoreet libero ligula eget sapien. Pellentesque tempus augue non gravida tempus. Praesent laoreet ex condimentum dui malesuada ornare. Vestibulum vitae quam augue. Suspendisse accumsan tortor non enim porttitor, sed vestibulum purus ultricies. Fusce a sem ac elit luctus malesuada. Sed a consectetur mi. Nullam a lacus quis sem finibus suscipit in id justo. Nulla eget nisi quam. Mauris vitae congue libero. Integer porttitor urna magna, a maximus ipsum sagittis nec.</p><p>Proin ac turpis ornare <i>velit pretium</i> vulputate eget vel leo. Aliquam viverra condimentum dictum. Fusce blandit lectus at nunc fermentum semper. Sed posuere dictum metus, id tincidunt magna vulputate non. Pellentesque vestibulum, erat et elementum malesuada, quam arcu scelerisque eros, eu volutpat ipsum lorem vel sem. Praesent auctor vehicula nibh, at dignissim felis venenatis et. Vestibulum erat dui, sollicitudin non lorem venenatis, dictum aliquam nisi. Nullam ornare eros sed purus varius interdum. Vivamus molestie tellus vel lobortis auctor. Fusce a orci quis nisl volutpat ultricies vel id nibh.</p><hr><h4>Code</h4><code><pre>\n<b>function</b> getProperties(values) {\n    <b>for</b> (let a = 0; a < values.length; a++) {\n        <b>if</b> (values[a].match(NUMBER)) {\n            <b>return</b> true\n        }\n    }\n}</pre></code><hr><h4>PostCSS Plugins</h4><p>A list of <a>PostCSS</a> plugins which I have created</p><ul><li><a href=/ >postcss-sqrt</a></li><li><a href=/ >postcss-pow</a></li><li><a href=/ >postcss-gap-polyfill</a></li><li><a href=/ >postcss-border-align</a></li><li><a href=/ >postcss-exact-width</a></li><li><a href=/ >postcss-negative-padding</a></li><li><a href=/ >postcss-proportional-spacing</a></li><li><a href=/ >postcss-escape</a></li></ul><hr><h4>Tables</h4><table><thead><tr><th>Company</th><th>Description</th><th>Sector</th></tr></thead><tbody><tr><td>American Express</td><td>Create Design system for online portal for choosing a card.</td><td>Finance</td></tr><tr><td>Dept for International Trade</td><td>New case management system to help caseworkers process applications for export licenses.</td><td>Public</td></tr><tr><td>Home Office</td><td>Redesign government service providing support to refugees seeking asylum.</td><td>Public</td></tr><tr><td>10Lord</td><td>New service to help provide a better renting experience between tenants, landlords and agents.</td><td>Startup</td></tr><tr><td>Dept for Business, Innovation &amp; Skills</td><td>Digital transfromation of Grant funding platform used by research academics.</td><td>Public</td></tr><tr><td>AIMIA</td><td>Evaluate customers feedback and opinion of Nectar iPhone and Android app to mitigate bad reviews.</td><td>Retail</td></tr><tr><td>John Lewis</td><td>Omni-channel experience for iPad, iPhone, Android and Web.</td><td>Retail</td></tr></tbody></table><p>");

        render_tag_default()(Button_index_marko, {
          "class": "Button",
          "href": "/",
          "renderBody": out => {
            out.w("Button");
          }
        }, out, _componentDef, "100");

        out.w("</p><img src=https://cdn.sanity.io/images/kvqmg9w0/production/d5d6c530ef45c5e18eea5511daf5d44dd7e97f9a-4958x3504.jpg width=4958 height=3504>");
      }
    }
  }, out, _componentDef, "0");
}, {
  t: playground_marko_marko_componentType,
  i: true
}, playground_marko_marko_component);
;// CONCATENATED MODULE: ./src/templates/playground.marko?server-entry


const playground_marko_server_entry_marko_componentType = "XpWTtFvY",
      playground_marko_server_entry_marko_template = (0,html_namespaceObject.t)(playground_marko_server_entry_marko_componentType);

/* harmony default export */ const playground_marko_server_entry = ((/* unused pure expression or super */ null && (playground_marko_server_entry_marko_template)));




function playground_marko_server_entry_renderAssets(out) {
  const entries = this.___entries;
  this.___entries = undefined;

  if (entries) {
    const buildName = this.buildName;
    const nonce = this.cspNonce;
    const nonceAttr = nonce ? ` nonce=${JSON.stringify(nonce)}` : "";
    const written = this.___writtenAssets || (this.___writtenAssets = new Set());
    let scripts = "";
    let styles = "";

    for (const entry of entries) {
      const assets = index_js_manifest.getAssets(entry, buildName);

      if (assets.js) {
        for (const href of assets.js) {
          if (!written.has(href)) {
            written.add(href);
            scripts += `<script src=${JSON.stringify(__webpack_require__.p + href)}${nonceAttr} async></script>`;
          }
        }
      }

      if (assets.css) {
        for (const href of assets.css) {
          if (!written.has(href)) {
            written.add(href);
            styles += `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p + href)}>`;
          }
        }
      }
    }

    out.write(scripts + styles);
  }
}






const playground_marko_server_entry_marko_component = {};
playground_marko_server_entry_marko_template._ = renderer_default()(function (input, out, _componentDef, _component, state) {
  out.global.___renderAssets = playground_marko_server_entry_renderAssets;
  (out.global.___entries || (out.global.___entries = [])).push("playground_XpWT");

  render_tag_default()((_flush_here_and_after_js_default()), {
    "renderBody": out => {
      out.global.___renderAssets && out.global.___renderAssets(out);
    }
  }, out, _componentDef, "0");

  render_tag_default()(playground_marko, input, out, _componentDef, "1");

  render_tag_default()((init_components_tag_js_default()), {}, out, _componentDef, "2");

  render_tag_default()((reorderer_renderer_js_default()), {}, out, _componentDef, "3");
}, {
  t: playground_marko_server_entry_marko_componentType,
  i: true
}, playground_marko_server_entry_marko_component);
;// CONCATENATED MODULE: ./src/templates/index.marko


const templates_index_marko_marko_componentType = "+xImFnLu",
      templates_index_marko_marko_template = (0,html_namespaceObject.t)(templates_index_marko_marko_componentType);

/* harmony default export */ const templates_index_marko = (templates_index_marko_marko_template);








const templates_index_marko_marko_component = {};
templates_index_marko_marko_template._ = renderer_default()(function (input, out, _componentDef, _component, state) {
  render_tag_default()(index_marko, {
    "class": "page_home",
    "body": {
      "renderBody": out => {
        out.w(`<h1 style="font-size: var(--font-size-h2); max-width: 25ch">${(0,escape_xml_namespaceObject.x)(input.intro)}</h1><div><div><h5>People I've Helped</h5><div text-gap=5 class=has-bfc>`);
        {
          let _index = 0;

          for (const project of input.work) {
            let index = _index++;
            const _keyScope = `[${index}]`;
            out.w(`<div grid class=Card><a${attr_default()("href", project.url)} span=4>`);

            if (project.image) {
              out.w(`<img${attr_default()("src", project.image.url)} class=Card__Image width=543 height=305>`);
            }

            out.w(`</a><div class=Card__Content span=4><h4 style="margin-bottom: var(--rem-1)"><a${attr_default()("href", project.url)}>${(0,escape_xml_namespaceObject.x)(project.title)}</a></h4><p style="margin-bottom: var(--em-2); opacity: 0.6">${(0,escape_xml_namespaceObject.x)(project.client)}</p>${to_string_default()(markdown_default()(project.excerpt))}<p style="margin-top: var(--em-2);"><a${attr_default()("href", project.url)}>Read More &rarr;</a></p></div></div>`);
          }
        }
        out.w("</div><hr class=fullwidth><h5>What I'm Thinking</h5><ul>");
        {
          let _index2 = 0;

          for (const post of input.posts) {
            let index = _index2++;
            const _keyScope2 = `[${index}]`;
            out.w(`<li class=text-crop-none style="display: inline;"><h4><a${attr_default()("href", post.url)}>${(0,escape_xml_namespaceObject.x)(post.title)}</a></h4></li>`);
          }
        }
        out.w("</ul></div></div><hr class=fullwidth><div><div grid><h5 span=3>Things I've Made</h5><div style=\"margin-bottom: var(--em-3);\" span=3><h6>PostCSS Plugins</h6><ul><li><a href=https://github.com/limitlessloop/postcss-proportional-spacing>Proportional Spacing</a></li><li><a href=https://github.com/limitlessloop/postcss-negative-padding>Negative Padding</a></li><li><a href=https://github.com/limitlessloop/postcss-border-align>Border Align</a></li><li><a href=https://github.com/limitlessloop/postcss-custom-values>Custom Values</a></li><li><a href=https://github.com/limitlessloop/postcss-sqrt>Sqrt and Pow Functions</a></li><li><a href=https://github.com/limitlessloop/flex-gap-polyfill>Flex Gap Polyfill</a></li></ul></div><div span=2><h6>Figma Resources</h6><ul><li><a href=https://www.figma.com/community/plugin/908303483495091267/Layer-Styles>Layer Styles</a></li><li><a href=https://www.figma.com/community/plugin/885838970710285271/Table-Creator>Table Creator</a></li><li><a href=https://www.figma.com/community/file/776921648331857127>Device Frames</a></li><li><a href=https://www.figma.com/community/file/776913337659021541>Icon Template</a></li><li><a href=https://www.figma.com/community/file/817057027097651580>Syntax Designer</a></li></ul></div></div></div>");
      }
    }
  }, out, _componentDef, "0");
}, {
  t: templates_index_marko_marko_componentType,
  i: true
}, templates_index_marko_marko_component);
;// CONCATENATED MODULE: ./src/templates/index.marko?server-entry


const index_marko_server_entry_marko_componentType = "+xImFnLu",
      index_marko_server_entry_marko_template = (0,html_namespaceObject.t)(index_marko_server_entry_marko_componentType);

/* harmony default export */ const index_marko_server_entry = (index_marko_server_entry_marko_template);




function index_marko_server_entry_renderAssets(out) {
  const entries = this.___entries;
  this.___entries = undefined;

  if (entries) {
    const buildName = this.buildName;
    const nonce = this.cspNonce;
    const nonceAttr = nonce ? ` nonce=${JSON.stringify(nonce)}` : "";
    const written = this.___writtenAssets || (this.___writtenAssets = new Set());
    let scripts = "";
    let styles = "";

    for (const entry of entries) {
      const assets = index_js_manifest.getAssets(entry, buildName);

      if (assets.js) {
        for (const href of assets.js) {
          if (!written.has(href)) {
            written.add(href);
            scripts += `<script src=${JSON.stringify(__webpack_require__.p + href)}${nonceAttr} async></script>`;
          }
        }
      }

      if (assets.css) {
        for (const href of assets.css) {
          if (!written.has(href)) {
            written.add(href);
            styles += `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p + href)}>`;
          }
        }
      }
    }

    out.write(scripts + styles);
  }
}






const index_marko_server_entry_marko_component = {};
index_marko_server_entry_marko_template._ = renderer_default()(function (input, out, _componentDef, _component, state) {
  out.global.___renderAssets = index_marko_server_entry_renderAssets;
  (out.global.___entries || (out.global.___entries = [])).push("templates_-xIm");

  render_tag_default()((_flush_here_and_after_js_default()), {
    "renderBody": out => {
      out.global.___renderAssets && out.global.___renderAssets(out);
    }
  }, out, _componentDef, "0");

  render_tag_default()(templates_index_marko, input, out, _componentDef, "1");

  render_tag_default()((init_components_tag_js_default()), {}, out, _componentDef, "2");

  render_tag_default()((reorderer_renderer_js_default()), {}, out, _componentDef, "3");
}, {
  t: index_marko_server_entry_marko_componentType,
  i: true
}, index_marko_server_entry_marko_component);
;// CONCATENATED MODULE: ./src/index.js



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











const app = external_express_default()();
const port = process.env.PORT || 8080;

app.enable('strict routing');
app.use(external_compression_default()());
app.use(external_express_slash_default()());
app.use('/static', external_serve_static_default()('dist/client'));

api_default().then((content) => {
	app.get('/', (req, res) => {
		index_marko_server_entry.render({ projects: content.projects, ...content.home, work: content.projects, posts: content.posts }, res);
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

	app.get('/thoughts', (req, res) => {
		res.setHeader('Content-Type', 'text/html; charset=utf-8');
		posts_marko_server_entry.render({ posts: content.posts }, res);
	});

	app.get('/about', (req, res) => {
		res.setHeader('Content-Type', 'text/html; charset=utf-8');
		about_marko_server_entry.render({}, res);
	});

	app.get('/thoughts/:post', (req, res) => {
		res.setHeader('Content-Type', 'text/html; charset=utf-8');

		let err = true;

		for (let post of content.posts) {
			// If page exists then render page
			if (req.params.post === post.slug.current) {
				post_marko_server_entry.render(post, res);
				err = false;
			}
		}

		// If page doesn't exist then render 404
		if (err) {
			_404_marko_server_entry.render({}, res.status(404));
		}
	});

	app.get('/work/:post', (req, res) => {
		res.setHeader('Content-Type', 'text/html; charset=utf-8');

		let err = true;

		for (let post of content.projects) {
			// If page exists then render page
			if (req.params.post === post.slug.current) {
				project_marko_server_entry.render(post, res);
				err = false;
			}
		}

		// If page doesn't exist then render 404
		if (err) {
			_404_marko_server_entry.render({}, res.status(404));
		}
	});

	// Render 404 for any unkown routes
	app.use(function(req, res) {
		_404_marko_server_entry.render({}, res.status(404));
	});

	// Start the server
	app.listen(port, (err) => {
		if (err) {
			throw err;
		}

		if (port !== '0') {
			console.log(`Listening on port ${port}`);
		}
	});
});

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=main.js.map