(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{nX7e:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),s=function(){return function(){}}(),t=u("pMnS"),r=u("gIcY"),o=u("Ip0R"),i=u("xMyE"),a=u("kmKP"),b=function(){function l(l,n){this.userService=l,this.router=n,this.onlyLettersPattern="[a-zA-Z \u017c\u017a\u015b\xf3\u0144\u0142\u0119\u0107\u0105\u017b\u0179\u015a\xd3\u0143\u0141\u0118\u0106\u0104]*",this.onlyDigitsPattern="[1-9][0-9]*"}return l.prototype.ngOnInit=function(){var l=this;this.initForm(),this.user$=this.userService.getUser(),this.userSubscription=this.user$.subscribe(function(n){l.setFormValues(n)})},l.prototype.ngOnDestroy=function(){this.userSubscription&&this.userSubscription.unsubscribe(),this.beforeRedirectSubscription&&this.beforeRedirectSubscription.unsubscribe()},l.prototype.onSubmit=function(l){var n=this;l.preventDefault(),this.userForm.markAsPending(),this.userService.setUser(this.userForm.value).pipe(Object(i.a)(function(){n.beforeRedirectSubscription&&n.beforeRedirectSubscription.unsubscribe(),n.beforeRedirectSubscription=n.user$.subscribe(function(){n.router.navigate(["/user/view"])})})).subscribe()},l.prototype.initForm=function(){this.userForm=new r.g({name:new r.e("",[r.o.required,r.o.pattern(this.onlyLettersPattern)]),surname:new r.e("",[r.o.required,r.o.pattern(this.onlyLettersPattern)]),age:new r.e("",[r.o.required,r.o.pattern(this.onlyDigitsPattern)])})},l.prototype.setFormValues=function(l){this.userForm.setValue(l)},l}(),c=u("ZYCi"),d=e.ob({encapsulation:0,styles:[[""]],data:{}});function p(l){return e.Fb(0,[(l()(),e.qb(0,0,null,null,2,"div",[["class","card border border-dark"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,1,"div",[["class","card-body text-center text-capitalize font-weight-bold"]],null,null,null,null,null)),(l()(),e.Db(2,null,[" Hello "," ","! "]))],null,function(l,n){var u=n.component;l(n,2,0,u.userForm.controls.name.value,u.userForm.controls.surname.value)})}function g(l){return e.Fb(0,[(l()(),e.qb(0,0,null,null,62,"form",[["class","needs-validation"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var s=!0,t=l.component;return"submit"===n&&(s=!1!==e.yb(l,2).onSubmit(u)&&s),"reset"===n&&(s=!1!==e.yb(l,2).onReset()&&s),"ngSubmit"===n&&(s=!1!==t.onSubmit(u)&&s),s},null,null)),e.pb(1,16384,null,0,r.r,[],null,null),e.pb(2,540672,null,0,r.h,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Bb(2048,null,r.b,null,[r.h]),e.pb(4,16384,null,0,r.m,[[4,r.b]],null,null),(l()(),e.qb(5,0,null,null,49,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.qb(6,0,null,null,15,"div",[["class","col"]],null,null,null,null,null)),(l()(),e.qb(7,0,null,null,14,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.qb(8,0,null,null,1,"label",[["for","name"]],null,null,null,null,null)),(l()(),e.Db(-1,null,["Name"])),(l()(),e.qb(10,0,null,null,7,"input",[["aria-describedby","nameHelp"],["class","form-control"],["formControlName","name"],["id","name"],["placeholder","Enter your name"],["type","text"]],[[8,"readOnly",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var s=!0;return"input"===n&&(s=!1!==e.yb(l,13)._handleInput(u.target.value)&&s),"blur"===n&&(s=!1!==e.yb(l,13).onTouched()&&s),"compositionstart"===n&&(s=!1!==e.yb(l,13)._compositionStart()&&s),"compositionend"===n&&(s=!1!==e.yb(l,13)._compositionEnd(u.target.value)&&s),s},null,null)),e.pb(11,278528,null,0,o.j,[e.t,e.u,e.k,e.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Ab(12,{"is-invalid":0}),e.pb(13,16384,null,0,r.c,[e.E,e.k,[2,r.a]],null,null),e.Bb(1024,null,r.j,function(l){return[l]},[r.c]),e.pb(15,671744,null,0,r.f,[[3,r.b],[8,null],[8,null],[6,r.j],[2,r.t]],{name:[0,"name"]},null),e.Bb(2048,null,r.k,null,[r.f]),e.pb(17,16384,null,0,r.l,[[4,r.k]],null,null),(l()(),e.qb(18,0,null,null,3,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e.Db(-1,null,[" Please enter a name."])),(l()(),e.qb(20,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Db(-1,null,[" Only letters allowed. "])),(l()(),e.qb(22,0,null,null,15,"div",[["class","col"]],null,null,null,null,null)),(l()(),e.qb(23,0,null,null,14,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.qb(24,0,null,null,1,"label",[["for","surname"]],null,null,null,null,null)),(l()(),e.Db(-1,null,["Surname"])),(l()(),e.qb(26,0,null,null,7,"input",[["aria-describedby","surnameHelp"],["class","form-control"],["formControlName","surname"],["id","surname"],["placeholder","Enter your surname"],["type","text"]],[[8,"readOnly",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var s=!0;return"input"===n&&(s=!1!==e.yb(l,29)._handleInput(u.target.value)&&s),"blur"===n&&(s=!1!==e.yb(l,29).onTouched()&&s),"compositionstart"===n&&(s=!1!==e.yb(l,29)._compositionStart()&&s),"compositionend"===n&&(s=!1!==e.yb(l,29)._compositionEnd(u.target.value)&&s),s},null,null)),e.pb(27,278528,null,0,o.j,[e.t,e.u,e.k,e.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Ab(28,{"is-invalid":0}),e.pb(29,16384,null,0,r.c,[e.E,e.k,[2,r.a]],null,null),e.Bb(1024,null,r.j,function(l){return[l]},[r.c]),e.pb(31,671744,null,0,r.f,[[3,r.b],[8,null],[8,null],[6,r.j],[2,r.t]],{name:[0,"name"]},null),e.Bb(2048,null,r.k,null,[r.f]),e.pb(33,16384,null,0,r.l,[[4,r.k]],null,null),(l()(),e.qb(34,0,null,null,3,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e.Db(-1,null,[" Please enter a surname."])),(l()(),e.qb(36,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Db(-1,null,[" Only letters allowed. "])),(l()(),e.qb(38,0,null,null,16,"div",[["class","col"]],null,null,null,null,null)),(l()(),e.qb(39,0,null,null,15,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.qb(40,0,null,null,1,"label",[["for","age"]],null,null,null,null,null)),(l()(),e.Db(-1,null,["Age"])),(l()(),e.qb(42,0,null,null,8,"input",[["aria-describedby","ageHelp"],["class","form-control"],["formControlName","age"],["id","age"],["placeholder","Enter your age"],["type","number"]],[[8,"readOnly",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var s=!0;return"input"===n&&(s=!1!==e.yb(l,45)._handleInput(u.target.value)&&s),"blur"===n&&(s=!1!==e.yb(l,45).onTouched()&&s),"compositionstart"===n&&(s=!1!==e.yb(l,45)._compositionStart()&&s),"compositionend"===n&&(s=!1!==e.yb(l,45)._compositionEnd(u.target.value)&&s),"change"===n&&(s=!1!==e.yb(l,46).onChange(u.target.value)&&s),"input"===n&&(s=!1!==e.yb(l,46).onChange(u.target.value)&&s),"blur"===n&&(s=!1!==e.yb(l,46).onTouched()&&s),s},null,null)),e.pb(43,278528,null,0,o.j,[e.t,e.u,e.k,e.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Ab(44,{"is-invalid":0}),e.pb(45,16384,null,0,r.c,[e.E,e.k,[2,r.a]],null,null),e.pb(46,16384,null,0,r.q,[e.E,e.k],null,null),e.Bb(1024,null,r.j,function(l,n){return[l,n]},[r.c,r.q]),e.pb(48,671744,null,0,r.f,[[3,r.b],[8,null],[8,null],[6,r.j],[2,r.t]],{name:[0,"name"]},null),e.Bb(2048,null,r.k,null,[r.f]),e.pb(50,16384,null,0,r.l,[[4,r.k]],null,null),(l()(),e.qb(51,0,null,null,3,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e.Db(-1,null,[" Please enter an age."])),(l()(),e.qb(53,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Db(-1,null,[" Only digits allowed. "])),(l()(),e.hb(16777216,null,null,1,null,p)),e.pb(56,16384,null,0,o.k,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(57,0,null,null,5,"div",[["class","p-3"]],null,null,null,null,null)),(l()(),e.qb(58,0,null,null,4,"button",[["class","btn btn-secondary float-right"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),e.qb(59,0,null,null,2,"span",[["aria-hidden","true"],["class","spinner-border spinner-border-sm"],["role","status"]],null,null,null,null,null)),e.pb(60,278528,null,0,o.j,[e.t,e.u,e.k,e.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Ab(61,{"d-none":0}),(l()(),e.Db(62,null,[" "," "]))],function(l,n){var u=n.component;l(n,2,0,u.userForm);var e=l(n,12,0,(u.userForm.touched||u.userForm.dirty)&&u.userForm.controls.name.invalid);l(n,11,0,"form-control",e),l(n,15,0,"name");var s=l(n,28,0,(u.userForm.touched||u.userForm.dirty)&&u.userForm.controls.surname.invalid);l(n,27,0,"form-control",s),l(n,31,0,"surname");var t=l(n,44,0,(u.userForm.touched||u.userForm.dirty)&&u.userForm.controls.age.invalid);l(n,43,0,"form-control",t),l(n,48,0,"age"),l(n,56,0,u.userForm.valid||u.userForm.pending);var r=l(n,61,0,!u.userForm.pending);l(n,60,0,"spinner-border spinner-border-sm",r)},function(l,n){var u=n.component;l(n,0,0,e.yb(n,4).ngClassUntouched,e.yb(n,4).ngClassTouched,e.yb(n,4).ngClassPristine,e.yb(n,4).ngClassDirty,e.yb(n,4).ngClassValid,e.yb(n,4).ngClassInvalid,e.yb(n,4).ngClassPending),l(n,10,0,u.userForm.pending,e.yb(n,17).ngClassUntouched,e.yb(n,17).ngClassTouched,e.yb(n,17).ngClassPristine,e.yb(n,17).ngClassDirty,e.yb(n,17).ngClassValid,e.yb(n,17).ngClassInvalid,e.yb(n,17).ngClassPending),l(n,26,0,u.userForm.pending,e.yb(n,33).ngClassUntouched,e.yb(n,33).ngClassTouched,e.yb(n,33).ngClassPristine,e.yb(n,33).ngClassDirty,e.yb(n,33).ngClassValid,e.yb(n,33).ngClassInvalid,e.yb(n,33).ngClassPending),l(n,42,0,u.userForm.pending,e.yb(n,50).ngClassUntouched,e.yb(n,50).ngClassTouched,e.yb(n,50).ngClassPristine,e.yb(n,50).ngClassDirty,e.yb(n,50).ngClassValid,e.yb(n,50).ngClassInvalid,e.yb(n,50).ngClassPending),l(n,58,0,u.userForm.invalid||u.userForm.pending),l(n,62,0,u.userForm.pending?"Saving ...":"Save")})}function m(l){return e.Fb(0,[(l()(),e.qb(0,0,null,null,3,"div",[["class","d-flex justify-content-center"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,2,"div",[["class","spinner-border"],["role","status"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(l()(),e.Db(-1,null,["Loading..."]))],null,null)}function f(l){return e.Fb(0,[(l()(),e.qb(0,0,null,null,3,"div",[["class","jumbotron jumbotron-fluid"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,2,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,1,"h1",[["class","display-4"]],null,null,null,null,null)),(l()(),e.Db(-1,null,["User Data Edit"])),(l()(),e.qb(4,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.qb(5,0,null,null,4,"div",[["class","col"]],null,null,null,null,null)),(l()(),e.hb(16777216,null,null,2,null,g)),e.pb(7,16384,null,0,o.k,[e.P,e.M],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),e.zb(131072,o.b,[e.h]),(l()(),e.hb(0,[["loading",2]],null,0,null,m))],function(l,n){var u=n.component;l(n,7,0,e.Eb(n,7,0,e.yb(n,8).transform(u.user$)),e.yb(n,9))},null)}function v(l){return e.Fb(0,[(l()(),e.qb(0,0,null,null,1,"app-edit",[],null,null,null,f,d)),e.pb(1,245760,null,0,b,[a.a,c.k],null,null)],function(l,n){l(n,1,0)},null)}var y=e.mb("app-edit",b,v,{},{},[]),h=function(){function l(l){this.userService=l,this.hasAccess=-1}return l.prototype.ngOnInit=function(){this.user$=this.userService.getUser()},l.prototype.checkAccess=function(){this.hasAccess=this.userService.user.age>=18?1:0},l}(),q=e.ob({encapsulation:0,styles:[[""]],data:{}});function k(l){return e.Fb(0,[(l()(),e.qb(0,0,null,null,1,"h1",[["class","display-4"]],null,null,null,null,null)),(l()(),e.Db(1,null,[""," ","'s Page"]))],null,function(l,n){l(n,1,0,n.context.ngIf.name,n.context.ngIf.surname)})}function C(l){return e.Fb(0,[(l()(),e.qb(0,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,2,"div",[["class","col"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,1,"div",[["class","mx-auto"],["style","max-width: 500px; max-height: 500px;"]],null,null,null,null,null)),(l()(),e.qb(3,0,null,null,0,"img",[["alt","Image for adults"],["class","img-fluid"],["src","https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png"]],null,null,null,null,null))],null,null)}function F(l){return e.Fb(0,[(l()(),e.qb(0,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,2,"div",[["class","col"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,1,"p",[["class","alert alert-danger"],["role","alert"]],null,null,null,null,null)),(l()(),e.Db(-1,null,[" You must be at least 18 years old! "]))],null,null)}function I(l){return e.Fb(0,[(l()(),e.qb(0,0,null,null,8,"div",[],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,3,"div",[["class","row p-3"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,2,"div",[["class","col text-center"]],null,null,null,null,null)),(l()(),e.qb(3,0,null,null,1,"button",[["class","btn btn-dark"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.checkAccess()&&e),e},null,null)),(l()(),e.Db(-1,null,["Check Access"])),(l()(),e.hb(16777216,null,null,1,null,C)),e.pb(6,16384,null,0,o.k,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(l()(),e.hb(16777216,null,null,1,null,F)),e.pb(8,16384,null,0,o.k,[e.P,e.M],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,6,0,1===u.hasAccess),l(n,8,0,0===u.hasAccess)},null)}function w(l){return e.Fb(0,[(l()(),e.qb(0,0,null,null,3,"div",[["class","d-flex justify-content-center"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,2,"div",[["class","spinner-border"],["role","status"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(l()(),e.Db(-1,null,["Loading..."]))],null,null)}function x(l){return e.Fb(0,[(l()(),e.qb(0,0,null,null,4,"div",[["class","jumbotron jumbotron-fluid"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,3,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.hb(16777216,null,null,2,null,k)),e.pb(3,16384,null,0,o.k,[e.P,e.M],{ngIf:[0,"ngIf"]},null),e.zb(131072,o.b,[e.h]),(l()(),e.qb(5,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.qb(6,0,null,null,4,"div",[["class","col"]],null,null,null,null,null)),(l()(),e.hb(16777216,null,null,2,null,I)),e.pb(8,16384,null,0,o.k,[e.P,e.M],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),e.zb(131072,o.b,[e.h]),(l()(),e.hb(0,[["loading",2]],null,0,null,w))],function(l,n){var u=n.component;l(n,3,0,e.Eb(n,3,0,e.yb(n,4).transform(u.user$))),l(n,8,0,e.Eb(n,8,0,e.yb(n,9).transform(u.user$)),e.yb(n,10))},null)}function S(l){return e.Fb(0,[(l()(),e.qb(0,0,null,null,1,"app-view",[],null,null,null,x,q)),e.pb(1,114688,null,0,h,[a.a],null,null)],function(l,n){l(n,1,0)},null)}var D=e.mb("app-view",h,S,{},{},[]),P=function(){return function(){}}();u.d(n,"UserModuleNgFactory",function(){return E});var E=e.nb(s,[],function(l){return e.wb([e.xb(512,e.j,e.cb,[[8,[t.a,y,D]],[3,e.j],e.y]),e.xb(4608,o.m,o.l,[e.v,[2,o.x]]),e.xb(4608,r.d,r.d,[]),e.xb(4608,r.s,r.s,[]),e.xb(1073742336,o.c,o.c,[]),e.xb(1073742336,r.p,r.p,[]),e.xb(1073742336,r.n,r.n,[]),e.xb(1073742336,c.m,c.m,[[2,c.s],[2,c.k]]),e.xb(1073742336,P,P,[]),e.xb(1073742336,s,s,[]),e.xb(1024,c.i,function(){return[[{path:"edit",component:b},{path:"view",component:h}]]},[])])})}}]);