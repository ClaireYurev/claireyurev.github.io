(() => {
var exports = {};
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 7068:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "ProjectCard_card__Ilp8p",
	"content": "ProjectCard_content__SHdnM",
	"tags": "ProjectCard_tags__Atl1P",
	"cta": "ProjectCard_cta__J86_O",
	"underline": "ProjectCard_underline__IoTds"
};


/***/ }),

/***/ 9872:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "ProjectsPage_container__f2WwY"
};


/***/ }),

/***/ 5761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_projects),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./styles/ProjectCard.module.css
var ProjectCard_module = __webpack_require__(7068);
var ProjectCard_module_default = /*#__PURE__*/__webpack_require__.n(ProjectCard_module);
;// CONCATENATED MODULE: ./components/ProjectCard.jsx



const ProjectCard = ({ project  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (ProjectCard_module_default()).card,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: project.image,
                height: 324,
                width: 600,
                alt: project.name
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (ProjectCard_module_default()).content,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: project.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: project.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (ProjectCard_module_default()).tags,
                        children: project.tags.map((tag)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: tag,
                                children: tag
                            }, tag))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (ProjectCard_module_default()).cta,
                        children: [
                            project.source_code_gh && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: project.source_code_gh,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: (ProjectCard_module_default()).underline,
                                children: "GitHub"
                            }),
                            project.source_code_gh && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: project.source_code_bb,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: (ProjectCard_module_default()).underline,
                                children: "BitBucket"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: project.demo,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: (ProjectCard_module_default()).underline,
                                children: "Live Demo"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_ProjectCard = (ProjectCard);

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

// EXTERNAL MODULE: ./styles/ProjectsPage.module.css
var ProjectsPage_module = __webpack_require__(9872);
var ProjectsPage_module_default = /*#__PURE__*/__webpack_require__.n(ProjectsPage_module);
;// CONCATENATED MODULE: ./pages/projects.jsx




const ProjectsPage = ({ projects  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: "My Projects"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (ProjectsPage_module_default()).container,
                children: projects.map((project)=>/*#__PURE__*/ jsx_runtime_.jsx(components_ProjectCard, {
                        project: project
                    }, project.id))
            })
        ]
    });
};
async function getStaticProps() {
    const projects = getProjects();
    return {
        props: {
            title: "Projects",
            projects
        }
    };
}
/* harmony default export */ const pages_projects = (ProjectsPage);


/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [311,910,675], () => (__webpack_exec__(5761)));
module.exports = __webpack_exports__;

})();