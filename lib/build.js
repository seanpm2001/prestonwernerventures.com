// Builds the All Projects page as a static file in /publish

/* eslint-disable no-console */
require("dotenv").config();
const buildProjects = require("./build_projects");
const buildProjectSearch = require("./build_project_search");

console.info("\n--------------------------");
console.info("  Building Project Pages");
console.info("--------------------------\n");
buildProjects();

console.info("\n---------------------------");
console.info("  Building Project Search");
console.info("---------------------------\n");
buildProjectSearch();