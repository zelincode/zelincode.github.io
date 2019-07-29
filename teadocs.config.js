'use strict';
const path = require('path')

module.exports = {
    doc: {
        name: "Zelincode",
        description: "Talk is cheap, show me the code.",
        version: "",
        dir: "./docs",
        outDir: "./build",
        staticDir: "./static"
    },
    theme: {
        dir: "",
        title: "",
        headHtml: "",
        footHtml: "",
        isMinify: true,
        rootPath: "/"
    },
    nav: {
        tree: "./tree"
    }
}
