(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"45/z":function(t,n,e){"use strict";e.r(n),n.default="import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';\n\n@Component({\n  selector: 'app-basic-usage',\n  templateUrl: './basic-usage.component.html',\n  styleUrls: ['./basic-usage.component.scss']\n})\nexport class BasicUsageComponent {}\n"},NGS2:function(t,n,e){"use strict";e.r(n),n.default='<img\n  src="https://material.angular.io/assets/img/examples/shiba2.jpg" \n  height="280" \n  width="350" \n/>\n'},"O/HT":function(t,n,e){"use strict";e.r(n),n.default=""},Ub5M:function(t,n,e){"use strict";e.r(n),n.default=""},UdFv:function(t,n,e){"use strict";e.r(n),n.default='<img\n  src="https://material.angular.io/assets/img/examples/shiba2.jpg"\n  alt="Photo of a Shiba Inu"\n  height="280"\n  width="350"\n/>\n'},VfeU:function(t,n,e){"use strict";e.r(n),n.default='<img \n  src="https://noimage.com" \n  alt="Url not found. Use default" \n  height="280" \n  width="350" \n/>\n'},eduo:function(t,n,e){"use strict";e.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-eager-loading',\n  templateUrl: './eager-loading.component.html',\n  styleUrls: ['./eager-loading.component.scss']\n})\nexport class EagerLoadingComponent {}\n"},"fAc+":function(t,n,e){"use strict";e.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-lazy-loading',\n  templateUrl: './lazy-loading.component.html',\n  styleUrls: ['./lazy-loading.component.scss']\n})\nexport class LazyLoadingComponent {}\n"},fAsd:function(t,n,e){"use strict";e.r(n),n.default=""},lZWk:function(t,n,e){"use strict";e.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-fallback-image',\n  templateUrl: './fallback-image.component.html',\n  styleUrls: ['./fallback-image.component.scss']\n})\nexport class FallbackImageComponent {}\n"},pAt1:function(t,n,e){"use strict";e.r(n),n.default=""},tTmR:function(t,n,e){"use strict";e.r(n),n.default='<img\n  src="https://material.angular.io/assets/img/examples/shiba2.jpg"\n  alt="Photo of a Shiba Inu"\n  height="280"\n  width="350"\n  loadingType="eager"\n/>\n'},"u/gc":function(t,n,e){"use strict";e.r(n),e.d(n,"HttpLoaderFactory",(function(){return _})),e.d(n,"DocsModule",(function(){return L}));var a=e("ofXK"),s=e("fXoL"),c=e("CXmx");let o=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Ib({type:t,selectors:[["app-basic-usage"]],decls:1,vars:0,consts:[["src","https://material.angular.io/assets/img/examples/shiba2.jpg","alt","Photo of a Shiba Inu","height","280","width","350"]],template:function(t,n){1&t&&s.Pb(0,"img",0)},directives:[c.a],styles:[""]}),t})(),i=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Ib({type:t,selectors:[["app-lazy-loading"]],decls:1,vars:0,consts:[["src","https://material.angular.io/assets/img/examples/shiba2.jpg","alt","Photo of a Shiba Inu","height","280","width","350","loadingType","lazy"]],template:function(t,n){1&t&&s.Pb(0,"img",0)},directives:[c.a],styles:[""]}),t})(),l=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Ib({type:t,selectors:[["app-eager-loading"]],decls:1,vars:0,consts:[["src","https://material.angular.io/assets/img/examples/shiba2.jpg","alt","Photo of a Shiba Inu","height","280","width","350","loadingType","eager"]],template:function(t,n){1&t&&s.Pb(0,"img",0)},directives:[c.a],styles:[""]}),t})(),r=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Ib({type:t,selectors:[["app-missing-alt-attr"]],decls:1,vars:0,consts:[["src","https://material.angular.io/assets/img/examples/shiba2.jpg","height","280","width","350"]],template:function(t,n){1&t&&s.Pb(0,"img",0)},directives:[c.a],styles:[""]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Ib({type:t,selectors:[["app-fallback-image"]],decls:1,vars:0,consts:[["src","https://noimage.com","alt","Url not found. Use default","height","280","width","350"]],template:function(t,n){1&t&&s.Pb(0,"img",0)},directives:[c.a],styles:[""]}),t})();const m=[{id:"basic",label:"imagely.docs.basicUsage",outlet:o,html:e("UdFv"),component:e("45/z"),scss:e("O/HT")},{id:"lazy-loading",label:"imagely.docs.lazyLoading",outlet:i,html:e("weTh"),component:e("fAc+"),scss:e("pAt1")},{id:"eager-loading",label:"imagely.docs.eagerLoading",outlet:l,html:e("tTmR"),component:e("eduo"),scss:e("wc0C")},{id:"missing-alt",label:"imagely.docs.missingAlt",outlet:r,html:e("NGS2"),component:e("xrms"),scss:e("Ub5M")},{id:"fallback-img",label:"imagely.docs.fallbackImg",outlet:p,html:e("VfeU"),component:e("lZWk"),scss:e("fAsd")}];var g=e("2Vo4"),u=e("wZkO"),d=e("d3UM");let f=(()=>{class t{constructor(t){this.el=t,this.spiedTags=[],this.sectionChange=new s.n}onScroll(t){let n;const e=this.el.nativeElement.children,a=t.target.scrollTop,s=t.target.offsetTop;for(let c=0;c<e.length;c++){const t=e[c];this.spiedTags.some(n=>n===t.tagName)&&t.offsetTop-s<=a&&(n=t.id)}n!==this.currentSection&&(this.currentSection=n,this.sectionChange.emit(this.currentSection))}}return t.\u0275fac=function(n){return new(n||t)(s.Ob(s.l))},t.\u0275dir=s.Jb({type:t,selectors:[["","scrollspy",""]],hostBindings:function(t,n){1&t&&s.cc("scroll",(function(t){return n.onScroll(t)}))},inputs:{spiedTags:"spiedTags"},outputs:{sectionChange:"sectionChange"}}),t})();var b=e("FKr1"),h=e("Wp6s"),y=e("sYmb");function v(t,n){if(1&t&&(s.Ub(0,"mat-tab",4),s.fc(1,"uppercase"),s.fc(2,"translate"),s.Ub(3,"pre",5),s.Ac(4),s.Tb(),s.Tb()),2&t){const t=s.ec();s.kc("label",s.gc(1,2,s.gc(2,4,"imagely.docs.html"))),s.Bb(4),s.Bc(t.data.html.default)}}function C(t,n){if(1&t&&(s.Ub(0,"mat-tab",4),s.fc(1,"uppercase"),s.fc(2,"translate"),s.Ub(3,"pre",6),s.Ac(4),s.Tb(),s.Tb()),2&t){const t=s.ec();s.kc("label",s.gc(1,2,s.gc(2,4,"imagely.docs.component"))),s.Bb(4),s.Cc(" ",t.data.component.default,"")}}function x(t,n){if(1&t&&(s.Ub(0,"mat-tab",4),s.fc(1,"uppercase"),s.fc(2,"translate"),s.Ub(3,"pre",7),s.Ac(4),s.Tb(),s.Tb()),2&t){const t=s.ec();s.kc("label",s.gc(1,2,s.gc(2,4,"imagely.docs.scss"))),s.Bb(4),s.Bc(t.data.scss.default)}}const U=["*"];let T=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Ib({type:t,selectors:[["app-docs-container"]],inputs:{data:"data"},ngContentSelectors:U,decls:9,vars:3,consts:[[1,"example-card","mb-5"],[1,"d-flex","justify-content-start"],[1,"col-md-7","offset-md-1"],[3,"label",4,"ngIf"],[3,"label"],[1,"prettyprint","linenums","lang-html","mt-1"],[1,"prettyprint","linenums","lang-js","mt-1"],[1,"prettyprint","linenums","lang-css","mt-1"]],template:function(t,n){1&t&&(s.ic(),s.Ub(0,"mat-card",0),s.Ub(1,"div",1),s.Ub(2,"div"),s.hc(3),s.Tb(),s.Ub(4,"div",2),s.Ub(5,"mat-tab-group"),s.zc(6,v,5,6,"mat-tab",3),s.zc(7,C,5,6,"mat-tab",3),s.zc(8,x,5,6,"mat-tab",3),s.Tb(),s.Tb(),s.Tb(),s.Tb()),2&t&&(s.Bb(6),s.jc("ngIf",n.data.html),s.Bb(1),s.jc("ngIf",n.data.component),s.Bb(1),s.jc("ngIf",n.data.scss))},directives:[h.a,u.b,a.l,u.a],pipes:[a.r,y.c],styles:[""],changeDetection:0}),t})();function w(t,n){if(1&t){const t=s.Vb();s.Ub(0,"a",7),s.cc("click",(function(){s.sc(t);const e=n.$implicit;return s.ec().scrollTo(e.id)})),s.fc(1,"async"),s.Ac(2),s.fc(3,"translate"),s.Tb()}if(2&t){const t=n.$implicit,e=s.ec();s.jc("active",s.gc(1,2,e.currentSection$)===t.id),s.Bb(2),s.Cc(" ",s.gc(3,4,t.label)," ")}}function j(t,n){if(1&t&&(s.Ub(0,"mat-option",8),s.Ac(1),s.fc(2,"translate"),s.Tb()),2&t){const t=n.$implicit;s.jc("value",t),s.Bb(1),s.Cc(" ",s.gc(2,2,t.label)," ")}}function O(t,n){1&t&&s.Qb(0)}function k(t,n){if(1&t&&(s.Ub(0,"div",9),s.Ub(1,"h2"),s.Ac(2),s.fc(3,"translate"),s.Tb(),s.Ub(4,"app-docs-container",10),s.zc(5,O,1,0,"ng-container",11),s.Tb(),s.Tb()),2&t){const t=n.$implicit;s.jc("id",t.id),s.Bb(2),s.Bc(s.gc(3,4,t.label)),s.Bb(2),s.jc("data",t),s.Bb(1),s.jc("ngComponentOutlet",t.outlet)}}const I=function(){return["DIV"]};let P=(()=>{class t{constructor(t){this.document=t,this.examples=m,this.currentSection$=new g.a(m[0].id)}ngOnInit(){}onSectionChange(t){this.currentSection$.next(t)}scrollTo(t){this.document.querySelector("#"+t).scrollIntoView()}}return t.\u0275fac=function(n){return new(n||t)(s.Ob(a.d))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-docs"]],decls:8,vars:9,consts:[["mat-tab-nav-bar","",1,"d-none","d-sm-flex"],["mat-tab-link","",3,"active","click",4,"ngFor","ngForOf"],[1,"nav-responsive","d-sm-none","d-flex","justify-content-center"],[3,"placeholder","value"],[3,"value",4,"ngFor","ngForOf"],["id","parentDiv","scrollspy","",1,"examples-container",3,"spiedTags","sectionChange"],["class","example-content",3,"id",4,"ngFor","ngForOf"],["mat-tab-link","",3,"active","click"],[3,"value"],[1,"example-content",3,"id"],[3,"data"],[4,"ngComponentOutlet"]],template:function(t,n){1&t&&(s.Ub(0,"nav",0),s.zc(1,w,4,6,"a",1),s.Tb(),s.Ub(2,"nav",2),s.Ub(3,"mat-select",3),s.fc(4,"translate"),s.zc(5,j,3,4,"mat-option",4),s.Tb(),s.Tb(),s.Ub(6,"div",5),s.cc("sectionChange",(function(t){return n.onSectionChange(t)})),s.zc(7,k,6,6,"div",6),s.Tb()),2&t&&(s.Bb(1),s.jc("ngForOf",n.examples),s.Bb(2),s.jc("placeholder",s.gc(4,6,"anms.examples.title"))("value","todos"),s.Bb(2),s.jc("ngForOf",n.examples),s.Bb(1),s.jc("spiedTags",s.mc(8,I)),s.Bb(1),s.jc("ngForOf",n.examples))},directives:[u.d,a.k,d.a,f,u.c,b.i,T,a.j],pipes:[y.c,a.b],styles:["nav[_ngcontent-%COMP%]{margin-bottom:20px}nav[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{min-width:120px;padding:0 15px}@media (max-width:768px){nav[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{min-width:0}}.examples-container[_ngcontent-%COMP%]{margin:20px 0 30px;padding:0 10%;height:75vh;overflow-y:scroll}.examples-container[_ngcontent-%COMP%]   .example-content[_ngcontent-%COMP%]{padding-top:100px}.examples-container[_ngcontent-%COMP%]   .example-content[_ngcontent-%COMP%]:last-child{padding-bottom:300px}.main-heading[_ngcontent-%COMP%]{text-transform:uppercase;margin:0 0 20px}"],changeDetection:0}),t})();var B=e("tyNb"),S=e("tk/3"),z=e("mqiu"),M=e("AytR"),A=e("PCNd");const F=[{path:"",component:P,data:{title:"imagely.menu.docs"}}];function _(t){return new z.a(t,`${M.a.i18nPrefix}/assets/i18n/docs/`,".json")}let L=(()=>{class t{}return t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({factory:function(n){return new(n||t)},imports:[[a.c,A.a,y.b.forChild({defaultLanguage:"en",useDefaultLang:!0,loader:{provide:y.a,useFactory:_,deps:[S.a]},isolate:!0}),B.d.forChild(F)]]}),t})()},wc0C:function(t,n,e){"use strict";e.r(n),n.default=""},weTh:function(t,n,e){"use strict";e.r(n),n.default='<img\n  src="https://material.angular.io/assets/img/examples/shiba2.jpg"\n  alt="Photo of a Shiba Inu"\n  height="280"\n  width="350"\n  loadingType="lazy"\n/>\n'},xrms:function(t,n,e){"use strict";e.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-missing-alt-attr',\n  templateUrl: './missing-alt-attr.component.html',\n  styleUrls: ['./missing-alt-attr.component.scss']\n})\nexport class MissingAltAttrComponent {}\n"}}]);