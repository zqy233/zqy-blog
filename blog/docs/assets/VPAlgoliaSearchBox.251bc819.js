"use strict";
exports[Symbol.toStringTag] = "Module";
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
var docsearch = require("@docsearch/js");
var app = require("../app.js");
require("./plugin-vue_export-helper.db096aab.js");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var docsearch__default = /* @__PURE__ */ _interopDefaultLegacy(docsearch);
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const { theme } = app.useData();
    const route = app.useRoute();
    const router = app.useRouter();
    vue.onMounted(() => {
      initialize(theme.value.algolia);
      setTimeout(poll, 16);
    });
    function poll() {
      const e = new Event("keydown");
      e.key = "k";
      e.metaKey = true;
      window.dispatchEvent(e);
      setTimeout(() => {
        if (!document.querySelector(".DocSearch-Modal")) {
          poll();
        }
      }, 16);
    }
    function initialize(userOptions) {
      const options = Object.assign({}, userOptions, {
        container: "#docsearch",
        navigator: {
          navigate: ({ itemUrl }) => {
            const { pathname: hitPathname } = new URL(window.location.origin + itemUrl);
            if (route.path === hitPathname) {
              window.location.assign(window.location.origin + itemUrl);
            } else {
              router.go(itemUrl);
            }
          }
        },
        transformItems: (items) => {
          return items.map((item) => {
            return Object.assign({}, item, {
              url: getRelativePath(item.url)
            });
          });
        },
        hitComponent: ({ hit, children }) => {
          const relativeHit = hit.url.startsWith("http") ? getRelativePath(hit.url) : hit.url;
          return {
            type: "a",
            ref: void 0,
            constructor: void 0,
            key: void 0,
            props: {
              href: hit.url,
              onClick: (event) => {
                if (isSpecialClick(event)) {
                  return;
                }
                if (route.path === relativeHit) {
                  return;
                }
                if (route.path !== relativeHit) {
                  event.preventDefault();
                }
                router.go(relativeHit);
              },
              children
            },
            __v: null
          };
        }
      });
      docsearch__default["default"](options);
    }
    function isSpecialClick(event) {
      return event.button === 1 || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
    }
    function getRelativePath(absoluteUrl) {
      const { pathname, hash } = new URL(absoluteUrl);
      return pathname + hash;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ id: "docsearch" }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../src/vitepress/components/VPAlgoliaSearchBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
