/** @type {import('postcss-load-config').Config} */

import postcssNesting from "postcss-nesting"

export default {
    plugins: [
        postcssNesting()
    ]
}

