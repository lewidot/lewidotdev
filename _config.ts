import lume from "lume/mod.ts";
import lightningCSS from "lume/plugins/lightningcss.ts";
import date from "lume/plugins/date.ts";
import shiki from "https://deno.land/x/lume_shiki/mod.ts";

const site = lume();
site.use(
  shiki({
    highlighter: {
      langs: ["go", "gleam", "typescript", "python", "sh"],
      themes: ["gruvbox-light-hard", "gruvbox-dark-hard"],
    },
    themes: {
      light: "gruvbox-light-hard",
      dark: "gruvbox-dark-hard",
    },
    defaultColor: "light",
  }),
);

site.use(date());

site.use(lightningCSS());
site.add("/styles.css");
site.add("static", ".");

export default site;
