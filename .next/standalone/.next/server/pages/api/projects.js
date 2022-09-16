"use strict";
(() => {
var exports = {};
exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 7678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ projects),
  "getProjects": () => (/* binding */ getProjects)
});

;// CONCATENATED MODULE: ./pages/api/projects.json
const projects_namespaceObject = JSON.parse('[{"id":1,"name":"OpenCortex.ai","image":"https://imgur.com/hNkLZ3c.gif","description":"A data visualization app for data scientists and curious people. Built with ArcGIS API for JavaScript, serving data over Esri and NASA maps of earth in 3D.","tags":["next","node","mongodb","css-modules","tailwind","react-query"],"source_code_gh":"https://github.com/ClaireYurev/opencortex","source_code_bb":"https://bitbucket.org/claireyurev/opencortex","demo":"https://opencortex.ai/"},{"id":2,"name":"Cleanly.so","image":"https://imgur.com/KZCxCzE.jpg","description":"Cleanly is an iOS, Android, and Web app that washes your car at your place: home, work - wherever you are. Don\'t feel like searching google maps for the nearest carwash? Cleanly is here to help!","tags":["react","node","mongodb","redux","material-ui"],"source_code_gh":"https://github.com/ClaireYurev/cleanly","source_code_bb":"https://bitbucket.org/claireyurev/cleanly","demo":"https://cleanly.so"},{"id":3,"name":"Matchy.dev","image":"https://imgur.com/fABFcSG.jpg","description":"Mobile game inspired by match-three vintage games and Kurzgesagt. Ported to WebGL 2.0 via WebAssembly, and hosted online.","tags":["react","node","mongodb","redux","material-ui"],"source_code_gh":"https://github.com/ClaireYurev/matchy","source_code_bb":"https://bitbucket.org/claireyurev/matchy","demo":"https://matchy.dev"},{"id":4,"name":"Unicorn Runner","image":"https://imgur.com/YhhwYmb.gif","description":"Currently under development in C++ within Unreal Engine, and coming soon for iOS and Android: open-world unicorn runner ✨","tags":["next","css-modules","redux","react-query"],"source_code_gh":"https://github.com/ClaireYurev/runner","source_code_bb":"https://bitbucket.org/claireyurev/runner","demo":"https://i.imgur.com/FG2Th3F.jpg"}]');
;// CONCATENATED MODULE: ./pages/api/projects.js

const getProjects = ()=>{
    return projects_namespaceObject;
};
/* harmony default export */ const projects = ((req, res)=>{
    const projects = getProjects();
    res.json(projects);
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7678));
module.exports = __webpack_exports__;

})();