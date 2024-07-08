import { c as create_ssr_component, e as escape, b as null_to_empty, d as add_attribute, f as each, v as validate_component } from "../../chunks/ssr.js";
import { T as TITLE, S as SECTIONS, E as EMAIL, G as GITHUB } from "../../chunks/constants.js";
const css$2 = {
  code: "section#hero.svelte-fu0h8r.svelte-fu0h8r{height:100vh;padding-top:6rem;padding-bottom:6rem;background-color:var(--color-primary);background-image:url(/photos/photo_7.jpg);background-position:center center;background-size:cover}.inner.svelte-fu0h8r.svelte-fu0h8r{width:unset;max-width:unset}h1.svelte-fu0h8r.svelte-fu0h8r{margin:0;font-size:65px;font-weight:var(--font-weight-display-bold);text-align:center;text-shadow:0px 0px 25px rgba(0,0,0,0.45)}h1.svelte-fu0h8r span.svelte-fu0h8r:first-child{color:var(--color-secondary)}h1.svelte-fu0h8r span.svelte-fu0h8r:last-child{color:var(--color-secondary-dark)}#tagline.svelte-fu0h8r.svelte-fu0h8r{color:var(--color-secondary);font-size:23px;font-family:var(--font-display);font-weight:var(--font-weight-display-normal);text-align:center;margin:var(--space-4) 0 0 0;text-shadow:0px 0px 25px rgba(0,0,0,0.45)}",
  map: `{"version":3,"file":"Hero.svelte","sources":["Hero.svelte"],"sourcesContent":["<script>\\n\\timport { TITLE } from '$src/constants'\\n<\/script>\\n\\n<section\\n\\tid=\\"hero\\"\\n>\\n\\t<div class=\\"inner\\">\\n\\t\\t<h1>\\n\\t\\t\\t<span>Show Your Work</span> <span>Lab</span>\\n\\t\\t</h1>\\n\\t\\t<div\\n\\t\\t\\tid=\\"tagline\\"\\n\\t\\t>\\n\\t\\t\\tWe prove what's real rather than identify what's fake\\n\\t\\t</div>\\n\\t\\t<!-- <img\\n\\t\\t\\tsrc=\\"/images/logo-light.svg\\"\\n\\t\\t/> -->\\n\\t</div>\\n</section>\\n\\n<style>\\n\\tsection#hero {\\n\\t\\theight: 100vh;\\n\\t\\tpadding-top: 6rem;\\n\\t\\tpadding-bottom: 6rem;\\n\\t\\tbackground-color: var(--color-primary);\\n\\t\\tbackground-image: url(/photos/photo_7.jpg);\\n\\t\\tbackground-position: center center;\\n\\t\\tbackground-size: cover;\\n\\t}\\n\\t.inner {\\n\\t\\twidth: unset;\\n\\t\\tmax-width: unset;\\n\\t}\\n\\th1 {\\n\\t\\tmargin: 0;\\n\\t\\tfont-size: 65px;\\n\\t\\tfont-weight: var(--font-weight-display-bold);\\n\\t\\ttext-align: center;\\n\\n\\t\\ttext-shadow: 0px 0px 25px rgba(0,0,0,0.45);\\n\\n\\t\\t/*background: var(--color-primary);\\n\\t\\tpadding: 0.125em 0.25em;*/\\n\\t}\\n\\th1 span:first-child {\\n\\t\\tcolor: var(--color-secondary);\\n\\t}\\n\\th1 span:last-child {\\n\\t\\tcolor: var(--color-secondary-dark);\\n\\t}\\n\\t#tagline {\\n\\t\\tcolor: var(--color-secondary);\\n\\t\\tfont-size: 23px;\\n\\t\\tfont-family: var(--font-display);\\n\\t\\tfont-weight: var(--font-weight-display-normal);\\n\\t\\ttext-align: center;\\n\\t\\tmargin: var(--space-4) 0 0 0;\\n\\n\\t\\ttext-shadow: 0px 0px 25px rgba(0,0,0,0.45);\\n\\n\\t\\t/*background: var(--color-primary);\\n\\t\\tpadding: 0.125em 0.25em;*/\\n\\t}\\n\\timg {\\n\\t\\twidth: 100%;\\n\\t}\\n</style>"],"names":[],"mappings":"AAuBC,OAAO,iCAAM,CACZ,MAAM,CAAE,KAAK,CACb,WAAW,CAAE,IAAI,CACjB,cAAc,CAAE,IAAI,CACpB,gBAAgB,CAAE,IAAI,eAAe,CAAC,CACtC,gBAAgB,CAAE,wBAAwB,CAC1C,mBAAmB,CAAE,MAAM,CAAC,MAAM,CAClC,eAAe,CAAE,KAClB,CACA,kCAAO,CACN,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,KACZ,CACA,8BAAG,CACF,MAAM,CAAE,CAAC,CACT,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,0BAA0B,CAAC,CAC5C,UAAU,CAAE,MAAM,CAElB,WAAW,CAAE,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAI1C,CACA,gBAAE,CAAC,kBAAI,YAAa,CACnB,KAAK,CAAE,IAAI,iBAAiB,CAC7B,CACA,gBAAE,CAAC,kBAAI,WAAY,CAClB,KAAK,CAAE,IAAI,sBAAsB,CAClC,CACA,oCAAS,CACR,KAAK,CAAE,IAAI,iBAAiB,CAAC,CAC7B,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,cAAc,CAAC,CAChC,WAAW,CAAE,IAAI,4BAA4B,CAAC,CAC9C,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,IAAI,SAAS,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAE5B,WAAW,CAAE,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAI1C"}`
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section id="hero" class="svelte-fu0h8r" data-svelte-h="svelte-f34aw9"><div class="inner svelte-fu0h8r"><h1 class="svelte-fu0h8r"><span class="svelte-fu0h8r">Show Your Work</span> <span class="svelte-fu0h8r">Lab</span></h1> <div id="tagline" class="svelte-fu0h8r">We prove what&#39;s real rather than identify what&#39;s fake</div> </div> </section>`;
});
const css$1 = {
  code: "header.svelte-11hl1n7.svelte-11hl1n7{width:100%;height:3.5rem;position:fixed;top:0;left:0;z-index:2;padding:0.5rem 1rem;display:flex;flex-wrap:wrap;flex-direction:row;align-items:center;justify-content:space-between;color:var(--color-secondary);transition:background-color 50ms ease;@media (min-width: 768px) {\n			padding: 0.5rem 2rem;\n		}}header.below-fold.svelte-11hl1n7.svelte-11hl1n7{background-color:var(--color-primary)}#title.svelte-11hl1n7.svelte-11hl1n7{padding:0;outline:none;display:flex;font-weight:var(--font-weight-display-bold);text-decoration:none;text-transform:lowercase}img#logo-lg.svelte-11hl1n7.svelte-11hl1n7{height:1.25rem;width:auto;display:none}header.below-fold.svelte-11hl1n7 img#logo-lg.svelte-11hl1n7{display:block}img#logo-sm.svelte-11hl1n7.svelte-11hl1n7{height:1.75rem;width:auto;display:block}header.below-fold.svelte-11hl1n7 img#logo-sm.svelte-11hl1n7{display:none}nav.svelte-11hl1n7.svelte-11hl1n7{position:relative;display:none;@media (min-width: 768px) {\n			display: block;\n		}}ul.svelte-11hl1n7.svelte-11hl1n7{padding:0;margin:0;display:flex;flex-wrap:wrap;flex-direction:row;list-style-type:none}li.svelte-11hl1n7.svelte-11hl1n7{padding:0;margin-right:0.25em;white-space:nowrap}li.svelte-11hl1n7 a.button.svelte-11hl1n7{color:var(--color-secondary);text-transform:lowercase;font-family:var(--font-display);font-weight:var(--font-weight-display-normal);text-decoration-color:var(--color-primary-light)}li.svelte-11hl1n7 a.button.svelte-11hl1n7:is(:hover, :focus){background-color:var(--color-secondary-dark);color:var(--color-primary)}",
  map: `{"version":3,"file":"Header.svelte","sources":["Header.svelte"],"sourcesContent":["<script>\\n\\timport { TITLE, SECTIONS } from '$src/constants'\\n\\texport let header = ''\\n\\texport let belowFold = false\\n<\/script>\\n\\n<header\\n\\tbind:this={header}\\n\\tclass=\\"{belowFold ? \\"below-fold\\" : \\"\\"}\\"\\n>\\n\\t<a\\n\\t\\thref=\\"#home\\"\\n\\t\\tid=\\"title\\"\\n\\t>\\n\\t\\t<span\\n\\t\\t\\tclass=\\"sr\\"\\n\\t\\t>\\n\\t\\t\\t{TITLE}\\n\\t\\t</span>\\n\\t\\t<img\\n\\t\\t\\tsrc=\\"/images/logo-light.svg\\"\\n\\t\\t\\talt=\\"Logo for Show Your Work Lab\\"\\n\\t\\t\\tid=\\"logo-lg\\"\\n\\t\\t\\tclass=\\"logo\\"\\n\\t\\t/>\\n\\t\\t<img\\n\\t\\t\\tsrc=\\"/images/logo-sm-light.svg\\"\\n\\t\\t\\talt=\\"Logo for Show Your Work Lab\\"\\n\\t\\t\\tid=\\"logo-sm\\"\\n\\t\\t\\tclass=\\"logo\\"\\n\\t\\t/>\\n\\t</a>\\n\\t<nav>\\n\\t\\t<ul>\\n\\t\\t\\t{#each SECTIONS as section}\\n\\t\\t\\t\\t<li>\\n\\t\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\t\\thref=\\"#{section.slug}\\"\\n\\t\\t\\t\\t\\t\\tclass=\\"button\\"\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t{section.title}\\n\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t</li>\\n\\t\\t\\t{/each}\\n\\t\\t</ul>\\n\\t</nav>\\n</header>\\n\\n<style>\\n\\theader {\\n\\t\\twidth: 100%;\\n\\t\\theight: 3.5rem;\\n\\t\\tposition: fixed;\\n\\t\\ttop: 0;\\n\\t\\tleft: 0;\\n\\t\\tz-index: 2;\\n\\t\\tpadding: 0.5rem 1rem;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-wrap: wrap;\\n\\t\\tflex-direction: row;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: space-between;\\n\\t\\tcolor: var(--color-secondary);\\n\\t\\ttransition: background-color 50ms ease;\\n\\t\\t@media (min-width: 768px) {\\n\\t\\t\\tpadding: 0.5rem 2rem;\\n\\t\\t}\\n\\t}\\n\\theader.below-fold {\\n\\t\\tbackground-color: var(--color-primary);\\n\\t}\\n\\t#title {\\n\\t\\tpadding: 0;\\n\\t\\toutline: none;\\n\\t\\tdisplay: flex;\\n\\t\\tfont-weight: var(--font-weight-display-bold);\\n\\t\\ttext-decoration: none;\\n\\t\\ttext-transform: lowercase;\\n\\t}\\n\\timg.logo {\\n\\n\\t}\\n\\timg#logo-lg {\\n\\t\\theight: 1.25rem;\\n\\t\\twidth: auto;\\n\\t\\tdisplay: none;\\n\\t}\\n\\theader.below-fold img#logo-lg {\\n\\t\\tdisplay: block;\\n\\t}\\n\\timg#logo-sm {\\n\\t\\theight: 1.75rem;\\n\\t\\twidth: auto;\\n\\t\\tdisplay: block;\\n\\t}\\n\\theader.below-fold img#logo-sm {\\n\\t\\tdisplay: none;\\n\\t}\\n\\tnav {\\n\\t\\tposition: relative;\\n\\t\\tdisplay: none;\\n\\t\\t@media (min-width: 768px) {\\n\\t\\t\\tdisplay: block;\\n\\t\\t}\\n\\t}\\n\\tul {\\n\\t\\tpadding: 0;\\n\\t\\tmargin: 0;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-wrap: wrap;\\n\\t\\tflex-direction: row;\\n\\t\\tlist-style-type: none;\\n\\t}\\n\\tli {\\n\\t\\tpadding: 0;\\n\\t\\tmargin-right: 0.25em;\\n\\t\\twhite-space: nowrap;\\n\\t}\\n\\tli a.button {\\n\\t\\tcolor: var(--color-secondary);\\n\\t\\ttext-transform: lowercase;\\n\\t\\tfont-family: var(--font-display);\\n\\t\\tfont-weight: var(--font-weight-display-normal);\\n\\t\\ttext-decoration-color: var(--color-primary-light);\\n\\t}\\n\\tli a.button:is(:hover, :focus) {\\n\\t\\tbackground-color: var(--color-secondary-dark);\\n\\t\\tcolor: var(--color-primary);\\n\\t\\t/*text-decoration-color: var(--color-secondary);*/\\n\\t}\\n\\theader.below-fold li a.button {\\n\\t\\t\\n\\t}\\n</style>"],"names":[],"mappings":"AAiDC,oCAAO,CACN,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,MAAM,CACd,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,MAAM,CAAC,IAAI,CACpB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,cAAc,CAAE,GAAG,CACnB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,aAAa,CAC9B,KAAK,CAAE,IAAI,iBAAiB,CAAC,CAC7B,UAAU,CAAE,gBAAgB,CAAC,IAAI,CAAC,IAAI,CACtC,OAAO,YAAY,KAAK,CAAC,CAAC;AAC5B,GAAG,SAAS,MAAM,CAAC,IAAI;AACvB,GACC,CACA,MAAM,yCAAY,CACjB,gBAAgB,CAAE,IAAI,eAAe,CACtC,CACA,oCAAO,CACN,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,IAAI,0BAA0B,CAAC,CAC5C,eAAe,CAAE,IAAI,CACrB,cAAc,CAAE,SACjB,CAIA,GAAG,sCAAS,CACX,MAAM,CAAE,OAAO,CACf,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IACV,CACA,MAAM,0BAAW,CAAC,GAAG,uBAAS,CAC7B,OAAO,CAAE,KACV,CACA,GAAG,sCAAS,CACX,MAAM,CAAE,OAAO,CACf,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,KACV,CACA,MAAM,0BAAW,CAAC,GAAG,uBAAS,CAC7B,OAAO,CAAE,IACV,CACA,iCAAI,CACH,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,OAAO,YAAY,KAAK,CAAC,CAAC;AAC5B,GAAG,SAAS,KAAK;AACjB,GACC,CACA,gCAAG,CACF,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,cAAc,CAAE,GAAG,CACnB,eAAe,CAAE,IAClB,CACA,gCAAG,CACF,OAAO,CAAE,CAAC,CACV,YAAY,CAAE,MAAM,CACpB,WAAW,CAAE,MACd,CACA,iBAAE,CAAC,CAAC,sBAAQ,CACX,KAAK,CAAE,IAAI,iBAAiB,CAAC,CAC7B,cAAc,CAAE,SAAS,CACzB,WAAW,CAAE,IAAI,cAAc,CAAC,CAChC,WAAW,CAAE,IAAI,4BAA4B,CAAC,CAC9C,qBAAqB,CAAE,IAAI,qBAAqB,CACjD,CACA,iBAAE,CAAC,CAAC,sBAAO,IAAI,MAAM,EAAE,MAAM,CAAE,CAC9B,gBAAgB,CAAE,IAAI,sBAAsB,CAAC,CAC7C,KAAK,CAAE,IAAI,eAAe,CAE3B"}`
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { header = "" } = $$props;
  let { belowFold = false } = $$props;
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.belowFold === void 0 && $$bindings.belowFold && belowFold !== void 0)
    $$bindings.belowFold(belowFold);
  $$result.css.add(css$1);
  return `<header class="${escape(null_to_empty(belowFold ? "below-fold" : ""), true) + " svelte-11hl1n7"}"${add_attribute("this", header, 0)}><a href="#home" id="title" class="svelte-11hl1n7"><span class="sr">${escape(TITLE)}</span> <img src="/images/logo-light.svg" alt="Logo for Show Your Work Lab" id="logo-lg" class="logo svelte-11hl1n7"> <img src="/images/logo-sm-light.svg" alt="Logo for Show Your Work Lab" id="logo-sm" class="logo svelte-11hl1n7"></a> <nav class="svelte-11hl1n7"><ul class="svelte-11hl1n7">${each(SECTIONS, (section) => {
    return `<li class="svelte-11hl1n7"><a href="${"#" + escape(section.slug, true)}" class="button svelte-11hl1n7">${escape(section.title)}</a> </li>`;
  })}</ul></nav> </header>`;
});
const css = {
  code: 'footer.svelte-yvltmk.svelte-yvltmk{display:flex;background-color:var(--color-primary);color:var(--color-secondary)}a[href="#home"].svelte-yvltmk.svelte-yvltmk{text-decoration:none}a[href="#home"].svelte-yvltmk img.svelte-yvltmk{width:10rem;height:auto}.inner.svelte-yvltmk.svelte-yvltmk{padding:2rem;max-width:unset}.inner.svelte-yvltmk>div.svelte-yvltmk:first-child{margin-bottom:1rem;padding-bottom:1rem}ul.svelte-yvltmk.svelte-yvltmk{margin:0;padding:0;list-style:none;max-width:unset;font-size:var(--text-2)}li.svelte-yvltmk.svelte-yvltmk{padding-left:0}li.svelte-yvltmk a.svelte-yvltmk{text-transform:lowercase}.svelte-yvltmk:not(nav)>ul.svelte-yvltmk{text-align:right}',
  map: `{"version":3,"file":"Footer.svelte","sources":["Footer.svelte"],"sourcesContent":["<script>\\n\\timport { TITLE, SECTIONS, GITHUB, EMAIL } from '$src/constants'\\n<\/script>\\n\\n<footer>\\n\\t<div class=\\"inner\\">\\n\\t\\t<div>\\n\\t\\t\\t<a href=\\"#home\\">\\n\\t\\t\\t\\t<span\\n\\t\\t\\t\\t\\tclass=\\"sr\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t{TITLE}\\n\\t\\t\\t\\t</span>\\n\\t\\t\\t\\t<img\\n\\t\\t\\t\\t\\tsrc=\\"/images/logo-light.svg\\"\\n\\t\\t\\t\\t\\talt=\\"Logo for Show Your Work Lab\\"\\n\\t\\t\\t\\t/>\\n\\t\\t\\t</a>\\n\\t\\t</div>\\n\\t\\t<div class=\\"cols\\">\\n\\t\\t\\t<div class=\\"col\\">\\n\\t\\t\\t\\t<nav>\\n\\t\\t\\t\\t\\t<ul>\\n\\t\\t\\t\\t\\t\\t{#each SECTIONS as section}\\n\\t\\t\\t\\t\\t\\t\\t<li>\\n\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\"#{section.slug}\\" class=\\"button\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{section.title}\\n\\t\\t\\t\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</ul>\\n\\t\\t\\t\\t</nav>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"col\\">\\n\\t\\t\\t\\t<ul>\\n\\t\\t\\t\\t\\t<li>\\n\\t\\t\\t\\t\\t\\t<a href=\\"{GITHUB}\\" target=\\"_blank\\" class=\\"button\\">Find us on GitHub</a>\\n\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t<li>\\n\\t\\t\\t\\t\\t\\t<a href=\\"mailto:{EMAIL}\\" class=\\"button\\">{EMAIL}</a>\\n\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t<!-- <li>\\n\\t\\t\\t\\t\\t\\t<a href=\\"#contact\\">Contact</a>\\n\\t\\t\\t\\t\\t</li> -->\\n\\t\\t\\t\\t</ul>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n</footer>\\n\\n<style>\\n\\tfooter {\\n\\t\\tdisplay: flex;\\n\\t\\tbackground-color: var(--color-primary);\\n\\t\\tcolor: var(--color-secondary);\\n\\t}\\n\\ta {\\n\\t\\t/* outline: none;\\t */\\n\\t\\t/* text-decoration: underline; */\\n\\t\\t/* padding: 0; */\\n\\t\\t/* margin: 0; */\\n\\t}\\n\\ta[href=\\"#home\\"] {\\n\\t\\ttext-decoration: none;\\n\\t}\\n\\ta[href=\\"#home\\"] img {\\n\\t\\twidth: 10rem;\\n\\t\\theight: auto;\\n\\t}\\n\\t.inner {\\n\\t\\tpadding: 2rem;\\n\\t\\tmax-width: unset;\\n\\t}\\n\\t.inner > div:first-child {\\n\\t\\tmargin-bottom: 1rem;\\n\\t\\tpadding-bottom: 1rem;\\n\\t\\t/*border-bottom: 1px currentColor dotted;*/\\n\\t}\\n\\tul {\\n\\t\\tmargin: 0;\\n\\t\\tpadding: 0;\\n\\t\\tlist-style: none;\\n\\t\\tmax-width: unset;\\n\\t\\tfont-size: var(--text-2);\\n\\t}\\n\\tli {\\n\\t\\tpadding-left: 0;\\n\\t}\\n\\tli a {\\n\\t\\ttext-transform: lowercase;\\n\\t}\\n\\t:not(nav) > ul {\\n\\t\\ttext-align: right;\\n\\t}\\n</style>"],"names":[],"mappings":"AAmDC,kCAAO,CACN,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,IAAI,eAAe,CAAC,CACtC,KAAK,CAAE,IAAI,iBAAiB,CAC7B,CAOA,CAAC,CAAC,IAAI,CAAC,OAAO,6BAAE,CACf,eAAe,CAAE,IAClB,CACA,CAAC,CAAC,IAAI,CAAC,OAAO,eAAC,CAAC,iBAAI,CACnB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IACT,CACA,kCAAO,CACN,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,KACZ,CACA,oBAAM,CAAG,iBAAG,YAAa,CACxB,aAAa,CAAE,IAAI,CACnB,cAAc,CAAE,IAEjB,CACA,8BAAG,CACF,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,KAAK,CAChB,SAAS,CAAE,IAAI,QAAQ,CACxB,CACA,8BAAG,CACF,YAAY,CAAE,CACf,CACA,gBAAE,CAAC,eAAE,CACJ,cAAc,CAAE,SACjB,eACA,KAAK,GAAG,CAAC,CAAG,gBAAG,CACd,UAAU,CAAE,KACb"}`
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="svelte-yvltmk"><div class="inner svelte-yvltmk"><div class="svelte-yvltmk"><a href="#home" class="svelte-yvltmk"><span class="sr">${escape(TITLE)}</span> <img src="/images/logo-light.svg" alt="Logo for Show Your Work Lab" class="svelte-yvltmk"></a></div> <div class="cols svelte-yvltmk"><div class="col"><nav class="svelte-yvltmk"><ul class="svelte-yvltmk">${each(SECTIONS, (section) => {
    return `<li class="svelte-yvltmk"><a href="${"#" + escape(section.slug, true)}" class="button svelte-yvltmk">${escape(section.title)}</a> </li>`;
  })}</ul></nav></div> <div class="col svelte-yvltmk"><ul class="svelte-yvltmk"><li class="svelte-yvltmk" data-svelte-h="svelte-gyh4mm"><a${add_attribute("href", GITHUB, 0)} target="_blank" class="button svelte-yvltmk">Find us on GitHub</a></li> <li class="svelte-yvltmk"><a href="${"mailto:" + escape(EMAIL, true)}" class="button svelte-yvltmk">${escape(EMAIL)}</a></li> </ul></div></div></div> </footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let main;
  let header;
  let belowFold = false;
  const onScroll = () => {
    const mainTop = null;
    header ? header?.getBoundingClientRect()?.height : null;
    belowFold = Boolean(mainTop !== null);
  };
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      onScroll();
    }
    $$rendered = ` <div id="home"></div> ${validate_component(Header, "Header").$$render(
      $$result,
      { belowFold, header },
      {
        header: ($$value) => {
          header = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} <main${add_attribute("this", main, 0)}>${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Layout as default
};
