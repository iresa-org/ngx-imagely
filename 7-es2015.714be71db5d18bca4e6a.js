(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Q1Ak:function(t,n,e){"use strict";e.r(n),e.d(n,"HttpLoaderFactory",(function(){return x})),e.d(n,"BenchmarkModule",(function(){return C}));var c=e("ofXK"),o=e("3Pt+"),i=e("2Vo4"),a=e("fXoL"),r=e("kmnG"),s=e("d3UM"),l=e("bTqV"),b=e("FKr1"),m=e("CXmx"),u=e("6NWb"),g=e("sYmb");function d(t,n){if(1&t&&(a.Sb(0,"mat-option",10),a.xc(1),a.Rb()),2&t){const t=n.$implicit;a.gc("value",t),a.zb(1),a.zc(" ",t," ")}}function p(t,n){if(1&t&&(a.Sb(0,"div",11),a.Nb(1,"img",12),a.Sb(2,"h3"),a.xc(3),a.Rb(),a.Rb()),2&t){const t=n.index;a.zb(1),a.ic("src","https://picsum.photos/1000/1000?random=",t,"",a.rc),a.ic("alt","Benchmark pic ",t,""),a.zb(2),a.zc("Image ",t+1,"")}}function f(t,n){if(1&t){const t=a.Tb();a.Sb(0,"button",13),a.Zb("click",(function(){return a.pc(t),a.bc().scrollTop()})),a.xc(1),a.cc(2,"uppercase"),a.cc(3,"translate"),a.Nb(4,"fa-icon",14),a.Rb()}2&t&&(a.zb(1),a.zc(" ",a.dc(2,1,a.dc(3,3,"imagely.benchmark.scrollTop"))," "))}let h=(()=>{class t{constructor(t){this.document=t,this.options=["100","500","1000"],this.imageNum$=new i.a([]),this.imageNumFormCtrl=new o.a(this.options[0])}ngOnInit(){}generateArray(t){this.imageNum$.next([]),setTimeout(()=>this.imageNum$.next(Array(t).fill(4)),1e3)}onSelectionChange(t){this.generateArray(+t.value)}scrollTop(){this.document.defaultView.scrollTo(0,0)}}return t.\u0275fac=function(n){return new(n||t)(a.Mb(c.d))},t.\u0275cmp=a.Gb({type:t,selectors:[["app-benchmark"]],decls:16,vars:10,consts:[[1,"container-fluid"],[1,"d-flex","justify-content-center","mt-3"],[1,"num-img-select"],[3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],[1,"photos"],["class","title",4,"ngFor","ngForOf"],[1,"scrolltop","d-flex","justify-content-center","mt-3"],["mat-icon-button","",1,"link","d-none","d-sm-inline"],["mat-button","","color","primary",3,"click",4,"ngIf"],[3,"value"],[1,"title"],["imagely","","width","800","height","800",3,"src","alt"],["mat-button","","color","primary",3,"click"],["icon","arrow-up",1,"ml-1"]],template:function(t,n){1&t&&(a.Sb(0,"div",0),a.Sb(1,"div",1),a.Sb(2,"mat-form-field",2),a.Sb(3,"mat-label"),a.xc(4),a.cc(5,"translate"),a.Rb(),a.Sb(6,"mat-select",3),a.Zb("selectionChange",(function(t){return n.onSelectionChange(t)})),a.wc(7,d,2,2,"mat-option",4),a.Rb(),a.Rb(),a.Rb(),a.Sb(8,"div"),a.Sb(9,"section",5),a.wc(10,p,4,3,"div",6),a.cc(11,"async"),a.Rb(),a.Rb(),a.Rb(),a.Sb(12,"div",7),a.Sb(13,"a",8),a.wc(14,f,5,5,"button",9),a.cc(15,"async"),a.Rb(),a.Rb()),2&t&&(a.zb(4),a.yc(a.dc(5,4,"imagely.benchmark.selectImgTotal")),a.zb(3),a.gc("ngForOf",n.options),a.zb(3),a.gc("ngForOf",a.dc(11,6,n.imageNum$)),a.zb(4),a.gc("ngIf",a.dc(15,8,n.imageNum$).length))},directives:[r.b,r.e,s.a,c.k,l.a,c.l,b.i,m.a,l.b,u.a],pipes:[g.c,c.b,c.r],styles:["img[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto}h3[_ngcontent-%COMP%]{text-align:center}div[_ngcontent-%COMP%]{margin-bottom:50px}"],changeDetection:0}),t})();var y=e("tyNb"),k=e("PCNd"),w=e("tk/3"),v=e("mqiu"),S=e("AytR");const R=[{path:"",component:h,data:{title:"imagely.menu.benchmark"}}];function x(t){return new v.a(t,S.a.i18nPrefix+"/assets/i18n/benchmark/",".json")}let C=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(n){return new(n||t)},imports:[[c.c,k.a,u.c,g.b.forChild({defaultLanguage:"en",useDefaultLang:!0,loader:{provide:g.a,useFactory:x,deps:[w.a]},isolate:!0}),y.d.forChild(R)]]}),t})()}}]);