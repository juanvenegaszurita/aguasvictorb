(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar *ngIf=\"removeNavbar()\"></app-navbar>\n<router-outlet></router-outlet>\n<app-footer *ngIf=\"removeFooter()\"></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"page-header section-dark\" style=\"background-image: url('assets/img/antoine-barres.jpg')\">\n        <div class=\"filter\"></div>\n        <div class=\"content-center\">\n            <div class=\"container\">\n                <div class=\"title-brand\">\n                    <div class=\"angular-logo\">\n                        <img src=\"assets/img/angular2-logo.png\" alt=\"\">\n                    </div>\n                    <h1 class=\"presentation-title\">Paper Kit 2 Angular</h1>\n                    <div class=\"fog-low\">\n                        <img src=\"assets/img/fog-low.png\" alt=\"\">\n                    </div>\n                    <div class=\"fog-low right\">\n                        <img src=\"assets/img/fog-low.png\" alt=\"\">\n                    </div>\n                </div>\n\n                <h2 class=\"presentation-subtitle text-center\">Free Bootstrap 4 UI Kit for Angular 7</h2>\n            </div>\n        </div>\n        <div class=\"moving-clouds\" style=\"background-image: url('assets/img/clouds.png'); \"></div>\n        <h6 class=\" category-absolute ml-auto mr-auto\">Designed and coded by\n        <!-- <h6 class=\"category category-absolute\">Designed and coded by -->\n\n            <a href=\"https://www.creative-tim.com\" target=\"_blank\">\n                <img src=\"assets/img/creative-tim-white-slim2.png\" class=\"creative-tim-logo\">\n            </a>\n        </h6>\n    </div>\n    <div class=\"main\">\n      <app-basicelements></app-basicelements>\n      <app-navigation></app-navigation>\n      <div class=\"section\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-md-6\">\n                      <div class=\"tim-title\">\n                          <h3>Progress Bar</h3>\n                          <br/>\n                      </div>\n                      <ngb-progressbar type=\"success\" [value]=\"25\">25</ngb-progressbar><br>\n                      <ngb-progressbar type=\"info\" [value]=\"50\">Copying file <b>2 of 4</b>...</ngb-progressbar><br>\n                      <ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\"><i>50%</i></ngb-progressbar><br>\n                      <ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\">Completed!</ngb-progressbar>\n\n                  </div>\n                  <div class=\"col-md-6\">\n                      <div class=\"tim-title\">\n                          <h3>Pagination</h3>\n                          <br/>\n                      </div>\n                      <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" aria-label=\"Default pagination\"></ngb-pagination>\n                      <br/>\n                      <ngb-pagination [collectionSize]=\"100\" [(page)]=\"page1\" [maxSize]=\"5\" [rotate]=\"true\"></ngb-pagination>\n                  </div>\n              </div>\n              <br/>\n              <div class=\"row\">\n                  <div class=\"col-md-6\">\n                      <div class=\"tim-title\">\n                          <h3>Navigation Tabs</h3>\n                      </div>\n\n                      <div class=\"nav-tabs-navigation\">\n                          <div class=\"nav-tabs-wrapper\">\n                              <ngb-tabset [justify]=\"'center'\">\n                                  <ngb-tab title=\"Home\">\n                                      <ng-template ngbTabContent>\n                                          <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD display.</p>\n                                      </ng-template>\n                                  </ngb-tab>\n                                  <ngb-tab title=\"Profile\">\n                                      <ng-template ngbTabContent>\n                                          <p>Here is your profile.</p>\n                                      </ng-template>\n                                  </ngb-tab>\n                                  <ngb-tab title=\"Messages\">\n                                      <ng-template ngbTabContent>\n                                          <p>Here are your messages.</p>\n                                      </ng-template>\n                                  </ngb-tab>\n                              </ngb-tabset>\n                          </div>\n                      </div>\n\n                  </div>\n\n                  <div class=\"col-md-6\">\n                      <div class=\"tim-title\">\n                          <h3>Labels</h3>\n                      </div>\n                      <span class=\"label label-default\">Default</span>\n                      <span class=\"label label-primary\">Primary</span>\n                      <span class=\"label label-info\">Info</span>\n                      <span class=\"label label-success\">Success</span>\n                      <span class=\"label label-warning\">Warning</span>\n                      <span class=\"label label-danger\">Danger</span>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"section section-notifications\" id=\"notifications\">\n          <div class=\"container\">\n              <div class=\"tim-title\">\n                  <h3>Notification</h3>\n              </div>\n          </div>\n          <app-notification></app-notification>\n      </div>\n      <app-typography></app-typography>\n      <div class=\"section javascript-components\">\n          <div class=\"container\">\n              <div class=\"tim-title\">\n                  <h2>Angular Native Components</h2>\n              </div>\n              <div class=\"row\" id=\"modals\">\n                  <div class=\"col-md-6\">\n                      <div class=\"tim-title\">\n                          <h3>Modal</h3>\n                      </div>\n                      <app-modal-component></app-modal-component>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <div class=\"tim-title\">\n                          <h3>Popovers</h3>\n                      </div>\n\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"right\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on right\">\n                          on right\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"top\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on top\">\n                          on top\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"left\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on left\">\n                          on left\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"bottom\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on bottom\">\n                          on bottom\n                      </button>\n\n                  </div>\n                  <br/>\n                  <div class=\"col-md-6\">\n                      <div class=\"tim-title\">\n                          <h3>Datepicker</h3>\n                      </div>\n                      <div class=\"row\">\n                          <div class='col-sm-6'>\n                              <form class=\"form-inline\">\n                                  <div class=\"form-group\">\n                                      <div class=\"input-group date\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                          <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                                               name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" (focus)=\"focus=true\" (blur)=\"focus=false\" />\n                                          <div class=\"input-group-append\">\n                                              <span class=\"glyphicon glyphicon-calendar input-group-text\">\n                                                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                                              </span>\n                                          </div>\n                                      </div>\n                                  </div>\n                              </form>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <div class=\"tim-title\">\n                          <h3>Tooltips</h3>\n                      </div>\n\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\n                         on right\n                     </button>\n                     <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\n                        on left\n                     </button>\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\n                         on top\n                      </button>\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\n                         on bottom\n                      </button>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"section\" id=\"carousel\">\n          <div class=\"container\">\n              <div class=\"tim-title\">\n                  <h3>Carousel</h3>\n              </div>\n              <div class=\"row\">\n                  <div class=\"col-md-8 mr-auto ml-auto\">\n                      <div class=\"card page-carousel\">\n                          <ngb-carousel>\n                              <ng-template ngbSlide>\n                                  <img src=\"./assets/img/soroush-karimi.jpg\" alt=\"Random first slide\">\n                                  <div class=\"carousel-caption\">\n                                      <p>Somewhere</p>\n                                  </div>\n                              </ng-template>\n                              <ng-template ngbSlide>\n                                  <img src=\"./assets/img/federico-beccari.jpg\" alt=\"Random second slide\">\n                                  <div class=\"carousel-caption\">\n                                      <p>Somewhere else</p>\n                                  </div>\n                              </ng-template>\n                              <ng-template ngbSlide>\n                                  <img src=\"./assets/img/joshua-stannard.jpg\" alt=\"Random third slide\">\n                                  <div class=\"carousel-caption\">\n                                      <p>Here it is</p>\n                                  </div>\n                              </ng-template>\n                          </ngb-carousel>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n        <div class=\"section section-dark section-nucleo-icons\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-6 col-md-12\">\n                        <h2 class=\"title\">Nucleo Icons</h2><br/>\n                        <p class=\"description\">\n                            Now UI Kit comes with 100 custom icons made by our friends from NucleoApp. The official package contains over 2.100 thin icons which are looking great in combination with Now UI Kit Make sure you check all of them and use those that you like the most.\n                        </p><br/>\n                        <a [routerLink]=\"['/nucleoicons']\" class=\"btn btn-danger btn-round\">View Demo Icons</a>\n                        <a href=\"https://nucleoapp.com/?ref=1712\" class=\"btn btn-outline-danger btn-round\" target=\"_blank\">View All Icons</a>\n                    </div>\n\n                    <div class=\"col-lg-6 col-md-12\">\n                        <div class=\"icons-container\">\n                            <i class=\"nc-icon nc-time-alarm\"></i>\n                            <i class=\"nc-icon nc-atom\"></i>\n                            <i class=\"nc-icon nc-camera-compact\"></i>\n                            <i class=\"nc-icon nc-watch-time\"></i>\n                            <i class=\"nc-icon nc-key-25\"></i>\n                            <i class=\"nc-icon nc-diamond\"></i>\n                            <i class=\"nc-icon nc-user-run\"></i>\n                            <i class=\"nc-icon nc-layout-11\"></i>\n                            <i class=\"nc-icon nc-badge\"></i>\n                            <i class=\"nc-icon nc-bulb-63\"></i>\n                            <i class=\"nc-icon nc-favourite-28\"></i>\n                            <i class=\"nc-icon nc-planet\"></i>\n                            <i class=\"nc-icon nc-tie-bow\"></i>\n                            <i class=\"nc-icon nc-zoom-split\"></i>\n                            <i class=\"nc-icon nc-cloud-download-93\"></i>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section section-dark\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                        <h2 class=\"title\">Completed with examples</h2>\n                        <p class=\"description\">The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful kit.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section section-image section-login\" style=\"background-image: url('assets/img/login-image.jpg');\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-4 col-md-6 col-sm-12 ml-auto mr-auto\">\n                        <div class=\"card card-register\">\n                            <h3 class=\"title\">Welcome</h3>\n                            <div class=\"social-line text-center\">\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-facebook btn-just-icon\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                </a>\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-google btn-just-icon\">\n                                    <i class=\"fa fa-google-plus\"></i>\n                                </a>\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-twitter btn-just-icon\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                </a>\n                            </div>\n                            <form class=\"register-form\">\n                                <label>Email</label>\n                                <div class=\"input-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                  <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\">\n                                        <i class=\"nc-icon nc-email-85\"></i>\n                                    </span>\n                                  </div>\n\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Email\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                                </div>\n\n                                <label>Password</label>\n                                <div class=\"input-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                                  <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\">\n                                        <i class=\"nc-icon nc-key-25\"></i>\n                                    </span>\n                                  </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\" >\n                                </div>\n                                <button class=\"btn btn-danger btn-block btn-round\">Register</button>\n                            </form>\n                            <div class=\"forgot\">\n                                <a href=\"#\" class=\"btn btn-link btn-danger\">Forgot password?</a>\n                            </div>\n                        </div>\n                        <div class=\"col text-center\" routerLinkActive=\"active\">\n                            <a [routerLink]=\"['/signup']\" class=\"btn btn-outline-neutral btn-round btn-lg\">View Register Page</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section section-dark\">\n            <div class=\"container\">\n                <div class=\"row example-page\">\n                    <div class=\"col-md-6 text-center\" routerLinkActive=\"active\">\n                        <a [routerLink]=\"['/landing']\">\n                            <img src=\"./assets/img/examples/landing-page.JPG\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\" style=\"width: 100%\">\n                            <a [routerLink]=\"['/landing']\" class=\"btn btn-outline-neutral btn-round\">Landing Page</a>\n                        </a>\n                    </div>\n\n                    <div class=\"col-md-6 text-center\" routerLinkActive=\"active\">\n                        <a [routerLink]=\"['/user-profile']\">\n                            <img src=\"./assets/img/examples/profile-page.JPG\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\" style=\"width: 100%\">\n                            <a [routerLink]=\"['/user-profile']\" class=\"btn btn-outline-neutral btn-round\">Profile Page</a>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section\">\n            <div class=\"container text-center\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                        <h2 class=\"title\">Do you like what you see?</h2>\n                        <p class=\"description\">Cause if you do, it can be yours for Free. Hit the button below and download it. Start a new project or give an old Bootstrap 4 project a new look.</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-6 download-area ml-auto mr-auto\">\n                        <a href=\"https://www.creative-tim.com/product/paper-kit-2\" class=\"btn btn-warning btn-round\">Download free HTML</a>\n                        <a href=\"https://www.creative-tim.com/product/paper-kit-2-angular\" class=\"btn btn-danger btn-round\">Download free Angular</a>\n                    </div>\n                </div>\n                <div class=\"row justify-content-md-center sharing-area text-center\">\n                    <div class=\"text-center col-md-12 col-lg-8\">\n                        <h3>Thank you for supporting us!</h3>\n                    </div>\n                    <div class=\"text-center col-md-12 col-lg-8\">\n                        <a href=\"#pablo\" class=\"btn btn-twitter-bg twitter-sharrre btn-round\" rel=\"tooltip\" title=\"Tweet!\">\n                            <i class=\"fa fa-twitter\"></i> Twitter\n                        </a>\n                        <a href=\"#pablo\" class=\"btn btn-google-bg linkedin-sharrre btn-round\" rel=\"tooltip\" title=\"Share!\">\n                            <i class=\"fa fa-google-plus\"></i> Google\n                        </a>\n                        <a href=\"#pablo\" class=\"btn btn-facebook-bg facebook-sharrre btn-round\" rel=\"tooltip\" title=\"Share!\">\n                            <i class=\"fa fa-facebook-square\"></i> Facebook\n                        </a>\n                        <a href=\"https://github.com/creativetimofficial/paper-kit\" class=\"btn btn-github-bg btn-github sharrre btn-round\" rel=\"tooltip\" title=\"Star on Github\">\n                            <i class=\"fa fa-github\"></i> Star\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/landing/landing.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/landing/landing.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"admin && productos\">\n    <div class=\"page-header\" data-parallax=\"true\" style=\"background-image: url('https://instagram.fscl14-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c20.0.905.905a/s640x640/93988852_223215262273942_7318410478601245939_n.jpg?_nc_ht=instagram.fscl14-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=pN5RSxoOgdcAX-S9T9N&oh=27449f739174ab688dee0ea1379442ac&oe=5F9E0D36');\">\n        <div class=\"filter\"></div>\n        <div class=\"container\">\n            <div class=\"motto text-center\">\n            </div>\n        </div>\n    </div>\n    <div class=\"main\">\n        <div class=\"section text-center\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 mr-auto ml-auto\">\n                    <h2 class=\"title\">{{admin.titulo}}</h2>\n                    <h5 class=\"description\">{{admin.presentacion}}</h5>\n                </div>\n            </div>\n            \n            <br/><br/>\n            \n            <div class=\"row\">\n                <div class=\"col-xs-12  col-sm-6 col-md-4\" *ngFor=\"let pro of productos; index as i;\" (click)=\"open(pro)\">\n                    <img src=\"{{pro.img}}\" class=\"img-thumbnail img-responsive\" alt=\"Rounded Image\">\n                </div>\n            </div>\n            \n            <br/><br/>\n\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-primary\">\n                            <i class=\"nc-icon nc-album-2\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <p class=\"info-title\">Despacho Gratuito</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-primary\">\n                            <i class=\"nc-icon nc-album-2\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <p class=\"info-title\">Agua 100% purificada</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-primary\">\n                            <i class=\"nc-icon nc-album-2\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <p class=\"info-title\">Producto aprobado con resolución sanitaria</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"section section-dark text-center\">\n        <div class=\"container\">\n            <h2 class=\"title\">Hablemos de nosotros</h2>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"card card-profile card-plain\">\n                        <div class=\"card-avatar\">\n                            <img src=\"{{admin.avatar}}\" alt=\"{{admin.nombre}}\">\n                        </div>\n                        <div class=\"card-block\">\n                            <div class=\"author\">\n                                <h4 class=\"card-title\">{{admin.nombre}}</h4>\n                                <h6 class=\"card-category\">{{admin.cargo}}</h6>\n                            </div>\n                            <p class=\"card-description text-center\">{{admin.descripcion}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n        <div class=\"section landing-section\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 mr-auto ml-auto\">\n                        <h2 class=\"text-center\">Comunicarse por Whatsapp</h2>\n                        <form class=\"contact-form\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12 mr-auto ml-auto\" rows=\"4\">\n                                    <label>Nombre</label>\n                                    <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                        <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\"><i class=\"nc-icon nc-single-02\"></i></span>\n                                        </div>\n                                        <input [(ngModel)]=\"comunicar.nombre\" #ctrl=\"ngModel\" name=\"nombre\" type=\"text\" class=\"form-control\" placeholder=\"Nombre\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                                    </div>\n                                </div>\n                            </div>\n                            <label>Mensaje</label>\n                            <textarea [(ngModel)]=\"comunicar.mensaje\" #ctrl=\"ngModel\" name=\"mensaje\" class=\"form-control\" rows=\"4\" placeholder=\"Cuéntanos tus pensamientos y sentimientos...\"></textarea>\n                            <div class=\"row\">\n                                <div class=\"col-md-12 mr-auto ml-auto\">\n                                    <button class=\"btn btn-success btn-lg btn-fill\" style=\"width: 100%;\" (click)=\"comunicarse()\">Enviar mensaje</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/profile/profile.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/profile/profile.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image: url('./assets/img/fabio-mangione.jpg');\">\n        <div class=\"filter\"></div>\n    </div>\n    <div class=\"section profile-content\">\n        <div class=\"container\">\n            <div class=\"owner\">\n                <div class=\"avatar\">\n                    <img src=\"./assets/img/faces/joe-gardner-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                </div>\n                <div class=\"name\">\n                    <h4 class=\"title\">Jane Faker<br /></h4>\n                    <h6 class=\"description\">Music Producer</h6>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <p>An artist of considerable range, Jane Faker — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. </p>\n                    <br />\n                    <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-cog\"></i> Settings</button>\n                </div>\n            </div>\n            <br/>\n            <div class=\"nav-tabs-navigation\">\n                <div class=\"nav-tabs-wrapper\">\n                    <ngb-tabset [justify]=\"'center'\">\n                        <ngb-tab title=\"Follows\">\n                            <ng-template ngbTabContent >\n                                <div class=\"row following\" id=\"follows\">\n                                    <div class=\"col-md-6 ml-auto mr-auto\">\n                                        <ul class=\"list-unstyled follows\">\n                                            <li>\n                                                <div class=\"row\">\n                                                    <div class=\"col-md-2 col-sm-2 ml-auto mr-auto\">\n                                                        <img src=\"./assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                                                    </div>\n                                                    <div class=\"col-md-7 col-sm-4 ml-auto\">\n                                                        <h6>Flume<br/><small>Musical Producer</small></h6>\n                                                    </div>\n                                                    <div class=\"col-md-3 col-sm-2 ml-auto mr-auto\">\n                                                        <div class=\"form-check\">\n                                                          <label class=\"form-check-label\">\n                                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\n                                                            <span class=\"form-check-sign\"></span>\n                                                          </label>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </li>\n                                            <hr />\n                                            <li>\n                                                <div class=\"row\">\n                                                    <div class=\"col-md-2 col-sm-2 ml-auto mr-auto\">\n                                                        <img src=\"./assets/img/faces/ayo-ogunseinde-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                                                    </div>\n                                                    <div class=\"col-md-7 col-sm-4 ml-auto\">\n                                                        <h6>Banks<br /><small>Singer</small></h6>\n                                                    </div>\n                                                    <div class=\"col-md-3 col-sm-2 ml-auto mr-auto\">\n                                                        <div class=\"form-check\">\n                                                          <label class=\"form-check-label\">\n                                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\n                                                            <span class=\"form-check-sign\"></span>\n                                                          </label>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </ngb-tab>\n                        <ngb-tab title=\"Following\">\n                            <ng-template ngbTabContent>\n                                <h3 class=\"text-muted\">Not following anyone yet :(</h3>\n                                <br>\n                                <button class=\"btn btn-warning btn-round\">Find artists</button>\n                            </ng-template>\n                        </ngb-tab>\n                    </ngb-tabset>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/signup/signup.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/signup/signup.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"page-header\" style=\"background-image: url('./assets/img/login-image.jpg');\">\n        <div class=\"filter\"></div>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-4 col-sm-6 mr-auto ml-auto\">\n                      <div class=\"card card-register\">\n                          <h3 class=\"title\">Welcome</h3>\n                          <div class=\"social-line text-center\">\n                              <a href=\"#pablo\" class=\"btn btn-neutral btn-facebook btn-just-icon\">\n                                  <i class=\"fa fa-facebook-square\"></i>\n                              </a>\n                              <a href=\"#pablo\" class=\"btn btn-neutral btn-google btn-just-icon\">\n                                  <i class=\"fa fa-google-plus\"></i>\n                              </a>\n                              <a href=\"#pablo\" class=\"btn btn-neutral btn-twitter btn-just-icon\">\n                                  <i class=\"fa fa-twitter\"></i>\n                              </a>\n                          </div>\n                          <form class=\"register-form\">\n                              <label>Email</label>\n                              <div class=\"input-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                <div class=\"input-group-prepend\">\n                                  <span class=\"input-group-text\">\n                                      <i class=\"nc-icon nc-email-85\"></i>\n                                  </span>\n                                </div>\n\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"Email\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                              </div>\n\n                              <label>Password</label>\n                              <div class=\"input-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                                <div class=\"input-group-prepend\">\n                                  <span class=\"input-group-text\">\n                                      <i class=\"nc-icon nc-key-25\"></i>\n                                  </span>\n                                </div>\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"Password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\" >\n                              </div>\n                              <button class=\"btn btn-danger btn-block btn-round\">Register</button>\n                          </form>\n                          <div class=\"forgot\">\n                              <a href=\"#\" class=\"btn btn-link btn-danger\">Forgot password?</a>\n                          </div>\n                      </div>\n                    </div>\n                </div>\n                <div class=\"footer register-footer text-center\">\n                    <h6>&copy;{{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim</h6>\n                </div>\n            </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"credits ml-auto\">\n                <span class=\"copyright\">\n                    © {{test | date: 'yyyy'}}, Hecho con <i class=\"fa fa-heart heart\"></i> Por <a  target=\"_blank\" href=\"https://wede.cl\">Wede</a>\n                </span>\n            </div>\n        </div>\n    </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\" color-on-scroll=\"500\">\n    <div class=\"container\">\n        <div class=\"navbar-translate\">\n            <a class=\"navbar-brand\" href=\"https://www.creative-tim.com\">Paper Kit 2 Angular</a>\n            <button class=\"navbar-toggler navbar-burger\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n            </button>\n        </div>\n        <div class=\"navbar-collapse\" id=\"navbarToggler\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Twitter\" data-placement=\"bottom\" href=\"https://twitter.com/CreativeTim\" target=\"_blank\">\n                        <i class=\"fa fa-twitter\"></i>\n                        <p class=\"d-lg-none\">Twitter</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Like us on Facebook\" data-placement=\"bottom\" href=\"https://www.facebook.com/CreativeTim\" target=\"_blank\">\n                        <i class=\"fa fa-facebook-square\"></i>\n                        <p class=\"d-lg-none\">Facebook</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Instagram\" data-placement=\"bottom\" href=\"https://www.instagram.com/CreativeTimOfficial\" target=\"_blank\">\n                        <i class=\"fa fa-instagram\"></i>\n                        <p class=\"d-lg-none\">Instagram</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Star on GitHub\" data-placement=\"bottom\" href=\"https://www.github.com/CreativeTimOfficial/paper-kit-2-angular\" target=\"_blank\">\n                        <i class=\"fa fa-github\"></i>\n                        <p class=\"d-lg-none\">GitHub</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a href=\"http://pk2-angular.creative-tim.com/documentation/tutorial\" class=\"nav-link\" target=\"_blank\"><i class=\"nc-icon nc-book-bookmark\"></i> Documentation</a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"isHome()\">\n                    <a href=\"https://www.creative-tim.com/product/paper-kit-2-pro-angular?ref=pk2-angular-free-local\" target=\"_blank\" class=\"btn btn-danger btn-round\">Upgrade to Pro</a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isHome()\">\n                    <a [routerLink]=\"['/home']\" *ngIf=\"!isDocumentation()\" class=\"nav-link\"><i class=\"nc-icon nc-layout-11\"></i>Components</a>\n                    <a [routerLink]=\"['/home']\" *ngIf=\"isDocumentation()\" class=\"nav-link\">Back to Kit</a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"isDocumentation()\">\n                    <a href=\"https://github.com/creativetimofficial/paper-kit-2-angular/issues?ref=pk2-free-local\" target=\"_blank\" class=\"nav-link\">Have an issue</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let AppComponent = class AppComponent {
    constructor(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    ngOnInit() {
        if (this.removeNavbar()) {
            var navbar = this.element.nativeElement.children[0].children[0];
            this._router = this.router.events.filter(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]).subscribe((event) => {
                if (window.outerWidth > 991) {
                    window.document.children[0].scrollTop = 0;
                }
                else {
                    window.document.activeElement.scrollTop = 0;
                }
                this.navbar.sidebarClose();
            });
            this.renderer.listen('window', 'scroll', (event) => {
                const number = window.scrollY;
                if (number > 150 || window.pageYOffset > 150) {
                    // add logic
                    navbar.classList.remove('navbar-transparent');
                }
                else {
                    // remove logic
                    navbar.classList.add('navbar-transparent');
                }
            });
            var ua = window.navigator.userAgent;
            var trident = ua.indexOf('Trident/');
            if (trident > 0) {
                // IE 11 => return version number
                var rv = ua.indexOf('rv:');
                var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
            }
            if (version) {
                var body = document.getElementsByTagName('body')[0];
                body.classList.add('ie-background');
            }
        }
    }
    removeNavbar() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        return (titlee === 'langing');
    }
    removeFooter() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        return !(titlee === 'signup' || titlee === 'nucleoicons');
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]),
    __metadata("design:type", _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"])
], AppComponent.prototype, "navbar", void 0);
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _public_public_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./public/public.module */ "./src/app/public/public.module.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};












// firebase




let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
            _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"],
            _public_public_module__WEBPACK_IMPORTED_MODULE_10__["PublicModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            /* firebase */
            _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebaseConfig),
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__["AngularFireStorageModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _public_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./public/profile/profile.component */ "./src/app/public/profile/profile.component.ts");
/* harmony import */ var _public_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./public/signup/signup.component */ "./src/app/public/signup/signup.component.ts");
/* harmony import */ var _public_landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./public/landing/landing.component */ "./src/app/public/landing/landing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








const routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'home', component: _components_components_component__WEBPACK_IMPORTED_MODULE_4__["ComponentsComponent"] },
    { path: 'user-profile', component: _public_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'signup', component: _public_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
    { path: 'landing', component: _public_landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                useHash: true
            })
        ],
        exports: [],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/components/components.component.ts":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let ComponentsComponent = class ComponentsComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.page = 4;
        this.page1 = 5;
    }
    isWeekend(date) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }
    isDisabled(date, current) {
        return date.month !== current.month;
    }
    ngOnInit() {
        let input_group_focus = document.getElementsByClassName('form-control');
        let input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function () {
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function () {
                input_group[i].classList.remove('input-group-focus');
            });
        }
    }
};
ComponentsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
ComponentsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-components',
        template: __importDefault(__webpack_require__(/*! raw-loader!./components.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html")).default,
        styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
    }),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
], ComponentsComponent);



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/__ivy_ngcc__/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/__ivy_ngcc__/fesm2015/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components.component */ "./src/app/components/components.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








let ComponentsModule = class ComponentsModule {
};
ComponentsModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JwBootstrapSwitchNg2Module"]
        ],
        declarations: [
            _components_component__WEBPACK_IMPORTED_MODULE_7__["ComponentsComponent"],
        ],
        entryComponents: [],
        exports: [_components_component__WEBPACK_IMPORTED_MODULE_7__["ComponentsComponent"]]
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/public/landing/landing.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/public/landing/landing.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/public/landing/landing.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/public/landing/landing.component.ts ***!
  \*****************************************************/
/*! exports provided: NgbdModalContent, LandingComponent, Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var app_shared_firebase_crud_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/firebase/crud-firebase */ "./src/app/shared/firebase/crud-firebase.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let NgbdModalContent = class NgbdModalContent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    solicitar() {
        Utils.sendMessageWhatsapp(this.admin.whatsapp, `Solicito el producto ${this.producto.nombre}`);
        this.activeModal.close('Close click');
    }
};
NgbdModalContent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], NgbdModalContent.prototype, "producto", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], NgbdModalContent.prototype, "admin", void 0);
NgbdModalContent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: "app-modal-content",
        template: `
    <div class="modal-header">
      <h5 class="modal-title text-center" style="font-weight:bold;">{{ producto.nombre }}</h5>
      <button
        type="button"
        class="close"
        aria-label="Close"
        (click)="activeModal.dismiss('Cross click')"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <div class="col-xs-12  col-sm-12 col-md-12 offset-md-12">
        <img
          src="{{producto.img}}"
          class="img-thumbnail img-responsive"
          alt="Rounded Image"
        />
        <p class="text-center">{{producto.detalle}}</p>
      </div>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-success"
        (click)="solicitar()"
        style="width: 100%;margin: 3px;"
      >
        Solicitar
      </button>
    </div>
  `,
    }),
    __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
], NgbdModalContent);

let LandingComponent = class LandingComponent {
    constructor(modalService, afs) {
        this.modalService = modalService;
        this.afs = afs;
        this.comunicar = {
            nombre: "",
            mensaje: "",
        };
        this.admin = null;
        this.productos = null;
        this.crudFirebaseAdmin = new app_shared_firebase_crud_firebase__WEBPACK_IMPORTED_MODULE_3__["CrudFirebase"](afs, 'aguasvictorb_admin');
        this.crudFirebaseProducto = new app_shared_firebase_crud_firebase__WEBPACK_IMPORTED_MODULE_3__["CrudFirebase"](afs, 'aguasvictorb_producto');
    }
    open(producto) {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.producto = producto;
        modalRef.componentInstance.admin = this.admin;
    }
    ngOnInit() {
        const admin = this.crudFirebaseAdmin.getAll();
        const producto = this.crudFirebaseProducto.getAll();
        admin.subscribe(ad => this.admin = ad[0]);
        producto.subscribe(pro => this.productos = pro);
    }
    comunicarse() {
        Utils.sendMessageWhatsapp(this.admin.whatsapp, `Hola Soy ${this.comunicar.nombre}, ${this.comunicar.mensaje}`);
    }
};
LandingComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
LandingComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: "app-landing",
        template: __importDefault(__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/landing/landing.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./landing.component.scss */ "./src/app/public/landing/landing.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
], LandingComponent);

class Utils {
    static sendMessageWhatsapp(number, menssage) {
        window.open(`https://api.whatsapp.com/send?phone=${number}&text=${menssage}`, "_blank");
    }
}


/***/ }),

/***/ "./src/app/public/profile/profile.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/public/profile/profile.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/public/profile/profile.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/public/profile/profile.component.ts ***!
  \*****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() { }
};
ProfileComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-profile',
        template: __importDefault(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/profile/profile.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./profile.component.scss */ "./src/app/public/profile/profile.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);



/***/ }),

/***/ "./src/app/public/public.module.ts":
/*!*****************************************!*\
  !*** ./src/app/public/public.module.ts ***!
  \*****************************************/
/*! exports provided: PublicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicModule", function() { return PublicModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/public/landing/landing.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/public/profile/profile.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/public/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let PublicModule = class PublicModule {
};
PublicModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        ],
        declarations: [
            _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]
        ]
    })
], PublicModule);



/***/ }),

/***/ "./src/app/public/signup/signup.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/public/signup/signup.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/public/signup/signup.component.ts":
/*!***************************************************!*\
  !*** ./src/app/public/signup/signup.component.ts ***!
  \***************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let SignupComponent = class SignupComponent {
    constructor() {
        this.test = new Date();
    }
    ngOnInit() { }
};
SignupComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-signup',
        template: __importDefault(__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/signup/signup.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./signup.component.scss */ "./src/app/public/signup/signup.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], SignupComponent);



/***/ }),

/***/ "./src/app/shared/firebase/crud-firebase.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/firebase/crud-firebase.ts ***!
  \**************************************************/
/*! exports provided: CrudFirebase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudFirebase", function() { return CrudFirebase; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

class CrudFirebase {
    constructor(afs, collectionName, str) {
        this.afs = afs;
        this.collectionName = collectionName;
        this.str = str;
        this.collection = afs.collection(collectionName);
        console.log("2222", str);
        this.storage = str;
    }
    getAll() {
        return this.collection
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
    }
    getWhere(fieldPath, opStr, value) {
        return this.collection.ref.where(fieldPath, opStr, value);
    }
    getRef() {
        return this.collection.ref;
    }
    update(id, t) {
        return this.collection.doc(id).update(t);
    }
    add(t) {
        return this.collection.add(t);
    }
    deleteById(t) {
        return this.collection.doc(t.id).delete();
    }
    putImage(Image) {
        const filePath = `images/${Image.name}`;
        const fileRef = this.storage.ref(filePath);
        return fileRef.put(Image);
    }
    getURLImage(name) {
        const filePath = `images/${name}`;
        const fileRef = this.storage.ref(filePath);
        return fileRef.getDownloadURL();
    }
}


/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let FooterComponent = class FooterComponent {
    constructor() {
        this.test = new Date();
    }
    ngOnInit() { }
};
FooterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-footer',
        template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let NavbarComponent = class NavbarComponent {
    constructor(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    ngOnInit() {
        const navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    }
    ;
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    }
    ;
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    }
    ;
    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/home') {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
NavbarComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-navbar',
        template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
], NavbarComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyAsIivZ_6gAN0gYFISaUrFFJJlRSQVnteE",
        authDomain: "recreo250.firebaseapp.com",
        databaseURL: "https://recreo250.firebaseio.com",
        projectId: "recreo250",
        storageBucket: "recreo250.appspot.com",
        messagingSenderId: "801490951386",
        appId: "1:801490951386:web:ca2c5c4db62511e5ce59e3",
        measurementId: "G-1FYV1BMHBC"
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/*!

 =========================================================
 * Paper Kit 2 Angular - v1.3.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/paper-kit-2-angular
 * Copyright 2017 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/timcreative/paper-kit/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mint/DESARROLLO/MIO/productos/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map