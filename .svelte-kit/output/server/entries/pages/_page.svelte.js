<<<<<<< HEAD
import { c as create_ssr_component } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
=======
import { c as create_ssr_component, i as compute_rest_props, f as each, v as validate_component, m as missing_component, e as escape, g as getContext, d as add_attribute, j as createEventDispatcher, a as setContext } from "../../chunks/ssr.js";
import { A as ABOUT, C as CODE, a as TEAM, P as PEOPLE, b as CONTACT, E as EMAIL } from "../../chunks/constants.js";
import { Slugger, Lexer } from "marked";
function supressWarnings() {
  const origWarn = console.warn;
  console.warn = (message) => {
    if (message.includes("unknown prop"))
      return;
    if (message.includes("unexpected slot"))
      return;
    origWarn(message);
  };
}
const Parser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["type", "tokens", "header", "rows", "ordered", "renderers"]);
  let { type = void 0 } = $$props;
  let { tokens = void 0 } = $$props;
  let { header = void 0 } = $$props;
  let { rows = void 0 } = $$props;
  let { ordered = false } = $$props;
  let { renderers } = $$props;
  supressWarnings();
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.tokens === void 0 && $$bindings.tokens && tokens !== void 0)
    $$bindings.tokens(tokens);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.ordered === void 0 && $$bindings.ordered && ordered !== void 0)
    $$bindings.ordered(ordered);
  if ($$props.renderers === void 0 && $$bindings.renderers && renderers !== void 0)
    $$bindings.renderers(renderers);
  return `${!type ? `${each(tokens, (token) => {
    return `${validate_component(Parser, "svelte:self").$$render($$result, Object.assign({}, token, { renderers }), {}, {})}`;
  })}` : `${renderers[type] ? `${type === "table" ? `${validate_component(renderers.table || missing_component, "svelte:component").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(renderers.tablehead || missing_component, "svelte:component").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(renderers.tablerow || missing_component, "svelte:component").$$render($$result, {}, {}, {
            default: () => {
              return `${each(header, (headerItem, i) => {
                return `${validate_component(renderers.tablecell || missing_component, "svelte:component").$$render(
                  $$result,
                  {
                    header: true,
                    align: $$restProps.align[i] || "center"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(Parser, "svelte:self").$$render($$result, { tokens: headerItem.tokens, renderers }, {}, {})} `;
                    }
                  }
                )}`;
              })}`;
            }
          })}`;
        }
      })} ${validate_component(renderers.tablebody || missing_component, "svelte:component").$$render($$result, {}, {}, {
        default: () => {
          return `${each(rows, (row) => {
            return `${validate_component(renderers.tablerow || missing_component, "svelte:component").$$render($$result, {}, {}, {
              default: () => {
                return `${each(row, (cells, i) => {
                  return `${validate_component(renderers.tablecell || missing_component, "svelte:component").$$render(
                    $$result,
                    {
                      header: false,
                      align: $$restProps.align[i] || "center"
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(Parser, "svelte:self").$$render($$result, { tokens: cells.tokens, renderers }, {}, {})} `;
                      }
                    }
                  )}`;
                })} `;
              }
            })}`;
          })}`;
        }
      })}`;
    }
  })}` : `${type === "list" ? `${ordered ? `${validate_component(renderers.list || missing_component, "svelte:component").$$render($$result, Object.assign({}, { ordered }, $$restProps), {}, {
    default: () => {
      return `${each($$restProps.items, (item) => {
        return `${validate_component(renderers.orderedlistitem || renderers.listitem || missing_component, "svelte:component").$$render($$result, Object.assign({}, item), {}, {
          default: () => {
            return `${validate_component(Parser, "svelte:self").$$render($$result, { tokens: item.tokens, renderers }, {}, {})} `;
          }
        })}`;
      })}`;
    }
  })}` : `${validate_component(renderers.list || missing_component, "svelte:component").$$render($$result, Object.assign({}, { ordered }, $$restProps), {}, {
    default: () => {
      return `${each($$restProps.items, (item) => {
        return `${validate_component(renderers.unorderedlistitem || renderers.listitem || missing_component, "svelte:component").$$render($$result, Object.assign({}, item), {}, {
          default: () => {
            return `${validate_component(Parser, "svelte:self").$$render($$result, { tokens: item.tokens, renderers }, {}, {})} `;
          }
        })}`;
      })}`;
    }
  })}`}` : `${validate_component(renderers[type] || missing_component, "svelte:component").$$render($$result, Object.assign({}, $$restProps), {}, {
    default: () => {
      return `${tokens ? `${validate_component(Parser, "svelte:self").$$render($$result, { tokens, renderers }, {}, {})}` : `${escape($$restProps.raw)}`}`;
    }
  })}`}`}` : ``}`}`;
});
const key = {};
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let id;
  let { depth } = $$props;
  let { raw } = $$props;
  let { text } = $$props;
  const { slug, getOptions } = getContext(key);
  const options = getOptions();
  if ($$props.depth === void 0 && $$bindings.depth && depth !== void 0)
    $$bindings.depth(depth);
  if ($$props.raw === void 0 && $$bindings.raw && raw !== void 0)
    $$bindings.raw(raw);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  id = options.headerIds ? options.headerPrefix + slug(text) : void 0;
  return `${depth === 1 ? `<h1${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h1>` : `${depth === 2 ? `<h2${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h2>` : `${depth === 3 ? `<h3${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h3>` : `${depth === 4 ? `<h4${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h4>` : `${depth === 5 ? `<h5${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h5>` : `${depth === 6 ? `<h6${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h6>` : `${escape(raw)}`}`}`}`}`}`}`;
});
const Paragraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>${slots.default ? slots.default({}) : ``}</p>`;
});
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { raw } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.raw === void 0 && $$bindings.raw && raw !== void 0)
    $$bindings.raw(raw);
  return `${slots.default ? slots.default({}) : ``}`;
});
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "" } = $$props;
  let { title = void 0 } = $$props;
  let { text = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<img${add_attribute("src", href, 0)}${add_attribute("title", title, 0)}${add_attribute("alt", text, 0)}>`;
});
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "" } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<a${add_attribute("href", href, 0)}${add_attribute("title", title, 0)}>${slots.default ? slots.default({}) : ``}</a>`;
});
const Em = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<em>${slots.default ? slots.default({}) : ``}</em>`;
});
const Del = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<del>${slots.default ? slots.default({}) : ``}</del>`;
});
const Codespan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { raw } = $$props;
  if ($$props.raw === void 0 && $$bindings.raw && raw !== void 0)
    $$bindings.raw(raw);
  return `<code>${escape(raw.replace(/`/g, ""))}</code>`;
});
const Strong = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<strong>${slots.default ? slots.default({}) : ``}</strong>`;
});
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<table>${slots.default ? slots.default({}) : ``}</table>`;
});
const TableHead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<thead>${slots.default ? slots.default({}) : ``}</thead>`;
});
const TableBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<tbody>${slots.default ? slots.default({}) : ``}</tbody>`;
});
const TableRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<tr>${slots.default ? slots.default({}) : ``}</tr>`;
});
const TableCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { header } = $$props;
  let { align } = $$props;
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  return `${header ? `<th${add_attribute("align", align, 0)}>${slots.default ? slots.default({}) : ``}</th>` : `<td${add_attribute("align", align, 0)}>${slots.default ? slots.default({}) : ``}</td>`}`;
});
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ordered } = $$props;
  let { start } = $$props;
  if ($$props.ordered === void 0 && $$bindings.ordered && ordered !== void 0)
    $$bindings.ordered(ordered);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0)
    $$bindings.start(start);
  return `${ordered ? `<ol${add_attribute("start", start, 0)}>${slots.default ? slots.default({}) : ``}</ol>` : `<ul>${slots.default ? slots.default({}) : ``}</ul>`}`;
});
const ListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<li>${slots.default ? slots.default({}) : ``}</li>`;
});
const Hr = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<hr>`;
});
const Html = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<!-- HTML_TAG_START -->${text}<!-- HTML_TAG_END -->`;
});
const Blockquote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<blockquote>${slots.default ? slots.default({}) : ``}</blockquote>`;
});
const Code$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { lang } = $$props;
  let { text } = $$props;
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<pre${add_attribute("class", lang, 0)}><code>${escape(text)}</code></pre>`;
});
const Br = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<br>${slots.default ? slots.default({}) : ``}`;
});
const defaultRenderers = {
  heading: Heading,
  paragraph: Paragraph,
  text: Text,
  image: Image,
  link: Link,
  em: Em,
  strong: Strong,
  codespan: Codespan,
  del: Del,
  table: Table,
  tablehead: TableHead,
  tablebody: TableBody,
  tablerow: TableRow,
  tablecell: TableCell,
  list: List,
  orderedlistitem: null,
  unorderedlistitem: null,
  listitem: ListItem,
  hr: Hr,
  html: Html,
  blockquote: Blockquote,
  code: Code$1,
  br: Br
};
const defaultOptions = {
  baseUrl: null,
  breaks: false,
  gfm: true,
  headerIds: true,
  headerPrefix: "",
  highlight: null,
  langPrefix: "language-",
  mangle: true,
  pedantic: false,
  renderer: null,
  sanitize: false,
  sanitizer: null,
  silent: false,
  smartLists: false,
  smartypants: false,
  tokenizer: null,
  xhtml: false
};
const SvelteMarkdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let preprocessed;
  let slugger;
  let combinedOptions;
  let combinedRenderers;
  let { source = [] } = $$props;
  let { renderers = {} } = $$props;
  let { options = {} } = $$props;
  let { isInline = false } = $$props;
  const dispatch = createEventDispatcher();
  let tokens;
  let lexer;
  setContext(key, {
    slug: (val) => slugger ? slugger.slug(val) : "",
    getOptions: () => combinedOptions
  });
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  if ($$props.renderers === void 0 && $$bindings.renderers && renderers !== void 0)
    $$bindings.renderers(renderers);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.isInline === void 0 && $$bindings.isInline && isInline !== void 0)
    $$bindings.isInline(isInline);
  preprocessed = Array.isArray(source);
  slugger = source ? new Slugger() : void 0;
  combinedOptions = { ...defaultOptions, ...options };
  {
    if (preprocessed) {
      tokens = source;
    } else {
      lexer = new Lexer(combinedOptions);
      tokens = isInline ? lexer.inlineTokens(source) : lexer.lex(source);
      dispatch("parsed", { tokens });
    }
  }
  combinedRenderers = { ...defaultRenderers, ...renderers };
  return `${validate_component(Parser, "Parser").$$render($$result, { tokens, renderers: combinedRenderers }, {}, {})}`;
});
const MarkdownLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<a${add_attribute("href", href, 0)} target="_blank">${slots.default ? slots.default({}) : ``} </a>`;
});
const css$2 = {
  code: "figure.svelte-5e1xjl{margin:0;width:100%;position:relative}img.svelte-5e1xjl{width:100%}figcaption.svelte-5e1xjl{width:100%;position:absolute;bottom:0;left:0;padding:var(--space-2);color:var(--color-secondary);font-size:var(--text-1);text-align:right;line-height:1;text-shadow:0px 0px 5px rgba(0,0,0,1);opacity:0.75}",
  map: `{"version":3,"file":"Figure.svelte","sources":["Figure.svelte"],"sourcesContent":["<script>\\n\\timport SvelteMarkdown from 'svelte-markdown'\\n\\timport MarkdownLink from './MarkdownLink.svelte'\\n\\texport let src = null\\n\\texport let alt = \\"\\"\\n\\texport let caption = null\\n<\/script>\\n\\n<figure>\\n\\t<img\\n\\t\\tsrc={src}\\n\\t\\talt={alt}\\n\\t/>\\n\\t{#if caption}\\n\\t\\t<figcaption>\\n\\t\\t\\t{caption}\\n\\t\\t</figcaption>\\n\\t{/if}\\n</figure>\\n\\n<style>\\n\\tfigure {\\n\\t\\tmargin: 0;\\n\\t\\twidth: 100%;\\n\\t\\tposition: relative;\\n\\t}\\n\\timg {\\n\\t\\twidth: 100%;\\n\\t}\\n\\tfigcaption {\\n\\t\\twidth: 100%;\\n\\t\\tposition: absolute;\\n\\t\\tbottom: 0;\\n\\t\\tleft: 0;\\n\\t\\tpadding: var(--space-2);\\n\\t\\tcolor: var(--color-secondary);\\n\\t\\tfont-size: var(--text-1);\\n\\t\\ttext-align: right;\\n\\t\\tline-height: 1;\\n\\t\\ttext-shadow: 0px 0px 5px rgba(0,0,0,1);\\n\\t\\topacity: 0.75;\\n\\t\\t/*transition: opacity 100ms ease;*/\\n\\t\\t/*opacity: 0;*/\\n\\t}\\n\\t/*figure:hover figcaption {\\n\\t\\topacity: 0.75;\\n\\t}*/\\n</style>"],"names":[],"mappings":"AAqBC,oBAAO,CACN,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,IAAI,CACX,QAAQ,CAAE,QACX,CACA,iBAAI,CACH,KAAK,CAAE,IACR,CACA,wBAAW,CACV,KAAK,CAAE,IAAI,CACX,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,CAAC,CACT,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,IAAI,SAAS,CAAC,CACvB,KAAK,CAAE,IAAI,iBAAiB,CAAC,CAC7B,SAAS,CAAE,IAAI,QAAQ,CAAC,CACxB,UAAU,CAAE,KAAK,CACjB,WAAW,CAAE,CAAC,CACd,WAAW,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACtC,OAAO,CAAE,IAGV"}`
};
const Figure = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src = null } = $$props;
  let { alt = "" } = $$props;
  let { caption = null } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0)
    $$bindings.caption(caption);
  $$result.css.add(css$2);
  return `<figure class="svelte-5e1xjl"><img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} class="svelte-5e1xjl"> ${caption ? `<figcaption class="svelte-5e1xjl">${escape(caption)}</figcaption>` : ``} </figure>`;
});
const css$1 = {
  code: "#journalism figure img{object-position:center right}",
  map: `{"version":3,"file":"AboutJournalism.svelte","sources":["AboutJournalism.svelte"],"sourcesContent":["<script>\\n\\timport Figure from '$lib/common/Figure.svelte'\\n<\/script>\\n\\n<section id=\\"journalism\\">\\n\\t<div class=\\"cols\\">\\n\\t\\t<div class=\\"col image\\">\\n\\t\\t\\t<Figure\\n\\t\\t\\t\\tsrc=\\"photos/photo_5.jpg\\"\\n\\t\\t\\t\\talt=\\"\\"\\n\\t\\t\\t\\tcaption=\\"Photo by Nora Savosnick\\"\\n\\t\\t\\t/>\\n\\t\\t</div>\\n\\t\\t<div class=\\"col text\\">\\n\\t\\t\\t<div class=\\"inner\\">\\n\\t\\t\\t\\t<!-- <div class=\\"overline\\">Journalism</div> -->\\n\\t\\t\\t\\t<h3>\\n\\t\\t\\t\\t\\tJournalism\\n\\t\\t\\t\\t</h3>\\n\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\tWe collaborate with newsrooms, engaging with both technical and editorial teams, in the entire storytelling process, from pitching stories and going on assignments with C2PA-compliant cameras to publication. We also assist in integrating our tool into a website’s frontend and CMS and onboarding staff to the workflow.\\n\\t\\t\\t\\t</p>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n</section>\\n\\n<style>\\n\\t:global(#journalism) :global(figure) :global(img) {\\n\\t\\tobject-position: center right;\\n\\t}\\n</style>"],"names":[],"mappings":"AA4BS,WAAY,CAAS,MAAO,CAAS,GAAK,CACjD,eAAe,CAAE,MAAM,CAAC,KACzB"}`
};
const AboutJournalism = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section id="journalism"><div class="cols"><div class="col image">${validate_component(Figure, "Figure").$$render(
    $$result,
    {
      src: "photos/photo_5.jpg",
      alt: "",
      caption: "Photo by Nora Savosnick"
    },
    {},
    {}
  )}</div> <div class="col text" data-svelte-h="svelte-g0iy3c"><div class="inner"> <h3>Journalism</h3> <p>We collaborate with newsrooms, engaging with both technical and editorial teams, in the entire storytelling process, from pitching stories and going on assignments with C2PA-compliant cameras to publication. We also assist in integrating our tool into a website’s frontend and CMS and onboarding staff to the workflow.</p></div></div></div> </section>`;
});
const AboutHumanRights = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="human-rights"><div class="cols cols-reverse"><div class="col image">${validate_component(Figure, "Figure").$$render(
    $$result,
    {
      src: "photos/photo_9.jpg",
      alt: "",
      caption: "Photo by Nora Savosnick"
    },
    {},
    {}
  )}</div> <div class="col text" data-svelte-h="svelte-af831b"><div class="inner"> <h3>Human Rights</h3> <p>Advocacy organizations, NGOs, and lawyers often rely on photographs as evidence of violations and abuses to be shared with the wider public and in the courts to hold perpetrators accountable. However, the growing distrust in photography threatens its effectiveness. To address this, we plan to collaborate with these groups on projects that verify the authenticity of their images.</p></div></div></div> </section>`;
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="about"><div class="inner"> <h2>${escape(ABOUT.title)}</h2> <p class="subtitle" data-svelte-h="svelte-1pxtjb1">We create impactful <u>photojournalism</u>, image-driven <u>human rights campaigns</u>, and innovative <u>digital publishing tools</u>.</p> <p data-svelte-h="svelte-nbbwbl">The images we see online are increasingly difficult to trust and understand. Information about where, when, and how an image is made is often minimal, unverified, nonexistent, or intentionally misleading. The rise of synthetic AI images further amplifies this issue, sowing distrust and confusion in what we see online.</p> <p data-svelte-h="svelte-1vxghd5">We see a void in how the industry addresses this issue and believe a new standard for verifiable images online are urgently needed.</p> <p data-svelte-h="svelte-7g741i">The Show Your Work Lab helps fill this void. We partner with news organizations and human rights groups to define a new standard for verifiable images to increase transparency and foster trust with their audiences. We use verify-at-capture technology to produce original visual journalism covering critical stories and create innovative methods to ensure images are engaging, context-rich, and trustworthy. We prove what&#39;s real rather than identify what&#39;s fake.</p></div> ${validate_component(AboutJournalism, "AboutJournalism").$$render($$result, {}, {}, {})} ${validate_component(AboutHumanRights, "AboutHumanRights").$$render($$result, {}, {}, {})} </section>`;
});
const Code = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="code"><div class="inner"> <h2>${escape(CODE.title)}</h2> <p class="subtitle" data-svelte-h="svelte-x4pl57">Build trust with your audience by displaying C2PA-compliant images within an interactive frame that exposes verifiable data about how an image was made.</p> <p data-svelte-h="svelte-r4hs3k">We’re creating a tool that lets you augment your site&#39;s images with optional C2PA provenance data. The tool wraps your images within a frame allowing users to explore multiple layers of verifiable data about how an image is made, including whether it was captured with a camera or generated with AI.</p> <p data-svelte-h="svelte-u21puq">The tool is being developed to easily integrate into your newsroom or organization&#39;s workflow. We&#39;re developing the tool for <code>React</code>, <code>Svelte</code>, and as a <code>WordPress</code> block.</p> <p data-svelte-h="svelte-1vjdjwj">Contact us at <a href="mailto:info@showyourworklab.org">info@showyourworklab.org</a> to learn more and view a demo.</p></div></section>`;
});
const Markdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  return `${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render(
    $$result,
    {
      source: content,
      renderers: { link: MarkdownLink }
    },
    {},
    {}
  )}`;
});
const css = {
  code: "ul.svelte-5v2jks{list-style:none;padding-left:0;margin:0 calc(var(--space-2) * -1);max-width:unset}li.svelte-5v2jks{max-width:var(--width-paragraph);padding:0 var(--space-2) var(--space-10) var(--space-2);line-height:1.3}h3.svelte-5v2jks{color:inherit;font-size:inherit;text-transform:none}.label.svelte-5v2jks{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.name.svelte-5v2jks{font-weight:var(--font-weight-body-bold);width:160px}.role.svelte-5v2jks{font-size:var(--text-2);white-space:nowrap;color:var(--color-primary-light)}.website.svelte-5v2jks{font-size:var(--text-1)}.bio.svelte-5v2jks{margin-top:var(--space-2);font-size:var(--text-2)}",
  map: `{"version":3,"file":"Team.svelte","sources":["Team.svelte"],"sourcesContent":["<script>\\n\\timport { TEAM, PEOPLE } from '$src/constants'\\n\\timport Figure from '$lib/common/Figure.svelte'\\n\\timport Markdown from '$lib/common/Markdown.svelte'\\n<\/script>\\n\\n<section id=\\"team\\">\\n\\t<div class=\\"inner\\">\\n\\t\\t<!-- <div class=\\"overline\\">\\n\\t\\t\\t{TEAM.overline}\\n\\t\\t</div> -->\\n\\t\\t<h2>\\n\\t\\t\\t{TEAM.title}\\n\\t\\t</h2>\\n\\n\\t\\t<p>\\n\\t\\t\\t\\n\\t\\t</p>\\n\\n\\t\\t<ul class=\\"cols\\">\\n\\t\\t\\t{#each PEOPLE as person}\\n\\t\\t\\t\\t<li class=\\"col\\">\\n\\t\\t\\t\\t\\t<Figure\\n\\t\\t\\t\\t\\t\\tsrc=\\"/photos/syw_{person.slug}.jpg\\"\\n\\t\\t\\t\\t\\t\\talt=\\"Portrait of {person.name}\\"\\n\\t\\t\\t\\t\\t\\tcaption=\\"Photo by Roshni Khatri\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t<div class=\\"label\\">\\n\\t\\t\\t\\t\\t\\t<h3 class=\\"name\\">\\n\\t\\t\\t\\t\\t\\t\\t{person.name}\\n\\t\\t\\t\\t\\t\\t</h3>\\n\\t\\t\\t\\t\\t\\t<div class=\\"website\\">\\n\\t\\t\\t\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\t\\t\\t\\thref=\\"{person.website}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\ttarget=\\"_blank\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"button\\"\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t{person.website.replace('https://', '')}\\n\\t\\t\\t\\t\\t\\t\\t\\t<!-- Website -->\\n\\t\\t\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"role\\">\\n\\t\\t\\t\\t\\t\\t{person.role}\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"bio\\">\\n\\t\\t\\t\\t\\t\\t<Markdown\\n\\t\\t\\t\\t\\t\\t\\tcontent={person.bio}\\n\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</li>\\n\\t\\t\\t{/each}\\n\\t\\t</ul>\\n\\t</div>\\n</section>\\n\\n<style>\\n\\tul {\\n\\t\\tlist-style: none;\\n\\t\\tpadding-left: 0;\\n\\t\\tmargin: 0 calc(var(--space-2) * -1);\\n\\t\\tmax-width: unset;\\n\\t}\\n\\tli {\\n\\t\\tmax-width: var(--width-paragraph);\\n\\t\\tpadding: 0 var(--space-2) var(--space-10) var(--space-2);\\n\\t\\tline-height: 1.3;\\n\\t}\\n\\th3 {\\n\\t\\tcolor: inherit;\\n\\t\\tfont-size: inherit;\\n\\t\\ttext-transform: none;\\n\\t}\\n\\t.label {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-wrap: wrap;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: space-between;\\n\\t}\\n\\t.name {\\n\\t\\tfont-weight: var(--font-weight-body-bold);\\n\\t\\twidth: 160px;\\n\\t}\\n\\t.role {\\n\\t\\tfont-size: var(--text-2);\\n\\t\\twhite-space: nowrap;\\n\\t\\tcolor: var(--color-primary-light);\\n\\t}\\n\\t.website {\\n\\t\\tfont-size: var(--text-1);\\n\\t}\\n\\t.bio {\\n\\t\\tmargin-top: var(--space-2);\\n\\t\\tfont-size: var(--text-2);\\n\\t}\\n</style>"],"names":[],"mappings":"AAyDC,gBAAG,CACF,UAAU,CAAE,IAAI,CAChB,YAAY,CAAE,CAAC,CACf,MAAM,CAAE,CAAC,CAAC,KAAK,IAAI,SAAS,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CACnC,SAAS,CAAE,KACZ,CACA,gBAAG,CACF,SAAS,CAAE,IAAI,iBAAiB,CAAC,CACjC,OAAO,CAAE,CAAC,CAAC,IAAI,SAAS,CAAC,CAAC,IAAI,UAAU,CAAC,CAAC,IAAI,SAAS,CAAC,CACxD,WAAW,CAAE,GACd,CACA,gBAAG,CACF,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,OAAO,CAClB,cAAc,CAAE,IACjB,CACA,oBAAO,CACN,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,aAClB,CACA,mBAAM,CACL,WAAW,CAAE,IAAI,uBAAuB,CAAC,CACzC,KAAK,CAAE,KACR,CACA,mBAAM,CACL,SAAS,CAAE,IAAI,QAAQ,CAAC,CACxB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,IAAI,qBAAqB,CACjC,CACA,sBAAS,CACR,SAAS,CAAE,IAAI,QAAQ,CACxB,CACA,kBAAK,CACJ,UAAU,CAAE,IAAI,SAAS,CAAC,CAC1B,SAAS,CAAE,IAAI,QAAQ,CACxB"}`
};
const Team = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section id="team"><div class="inner"> <h2>${escape(TEAM.title)}</h2> <p data-svelte-h="svelte-ke771t"></p> <ul class="cols svelte-5v2jks">${each(PEOPLE, (person) => {
    return `<li class="col svelte-5v2jks">${validate_component(Figure, "Figure").$$render(
      $$result,
      {
        src: "/photos/syw_" + person.slug + ".jpg",
        alt: "Portrait of " + person.name,
        caption: "Photo by Roshni Khatri"
      },
      {},
      {}
    )} <div class="label svelte-5v2jks"><h3 class="name svelte-5v2jks">${escape(person.name)}</h3> <div class="website svelte-5v2jks"><a${add_attribute("href", person.website, 0)} target="_blank" class="button">${escape(person.website.replace("https://", ""))} </a> </div></div> <div class="role svelte-5v2jks">${escape(person.role)}</div> <div class="bio svelte-5v2jks">${validate_component(Markdown, "Markdown").$$render($$result, { content: person.bio }, {}, {})}</div> </li>`;
  })}</ul></div> </section>`;
});
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="contact"><div class="inner"> <h2>${escape(CONTACT.title)}</h2> <p>Write to us at <a href="${"mailto:" + escape(EMAIL, true)}" class="button">${escape(EMAIL)}</a> if you would like to:</p> <ul data-svelte-h="svelte-ge8noi"><li>Collaborate on a story with us;</li> <li>Use our technology on your website;</li> <li>Support us financially; or</li> <li>Learn more about our work and mission.</li></ul> <p data-svelte-h="svelte-1qoeo5h">We look forward to hearing from you.</p></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(About, "About").$$render($$result, {}, {}, {})} ${validate_component(Code, "Code").$$render($$result, {}, {}, {})} ${validate_component(Team, "Team").$$render($$result, {}, {}, {})} ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}`;
>>>>>>> 8930d919615d9555715455fd33e7dd7adbf502b6
});
export {
  Page as default
};
