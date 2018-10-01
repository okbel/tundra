require("ts-node/register");

const kebabCase = require("lodash/kebabCase");
const mapKeys = require("lodash/mapKeys");
const mapValues = require("lodash/mapValues");
const flat = require("flat");
const autoprefixer = require("autoprefixer");
const postcssVariables = require("postcss-css-variables");
const cssVariables = require("./src/theme");
const flatVariables = mapKeys(
  mapValues(flat(cssVariables, { delimiter: "-" }), v => v.toString()),
  (_, k) => kebabCase(k)
);

var flatten = require("flat");
module.exports = {
  ident: "postcss",
  plugins: [
    postcssVariables({
      variables: flatVariables
    }),
    autoprefixer({
      browsers: [">1%", "last 4 versions", "Firefox ESR", "not ie < 9"],
      flexbox: "no-2009"
    })
  ]
};
