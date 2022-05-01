"use strict";

const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public/");

module.exports = { rootDir, publicDir };
