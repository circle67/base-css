import { readFile } from "node:fs/promises";

import postcss_preset_env from "postcss-preset-env";
import postcss_banner from "postcss-banner";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

const packageURL = new URL("./package.json", import.meta.url);
const version = JSON.parse(await readFile(packageURL, { encoding: "utf8" }))[
    "version"
];

const plugins = [
    postcss_preset_env(),
    postcss_banner({
        banner: `base.css v${version} | MIT License | https://github.com/circle67/base-css`,
        important: true,
        inline: true,
    }),
    autoprefixer(),
    cssnano({
        preset: "default",
    }),
];

export default {
    plugins,
};
