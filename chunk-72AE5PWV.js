import{a as O}from"./chunk-DSSUDFCV.js";import{a as $,b,c as Z,d as H,h as J,i as K,j as Q,k as U,l as W,n as X}from"./chunk-M3OTGQMH.js";import{a as j}from"./chunk-IPFK77XX.js";import{c as G,d as V}from"./chunk-4NDHNKT4.js";import"./chunk-N3K24JAS.js";import{g as z,h as D}from"./chunk-TWAQUCXP.js";import{h as A}from"./chunk-IG6CRRGH.js";import{$ as P,Gb as s,Hb as x,Ib as v,Jb as L,Ob as N,Pa as r,Rb as R,Ub as p,Vb as m,Y as T,eb as h,gb as y,kb as d,ob as i,pb as n,qb as F,xb as M,yb as C}from"./chunk-63XWG6HK.js";import"./chunk-CWTPBX7D.js";var B=(e,l)=>({"is-valid":e,"is-invalid":l});function Y(e,l){e&1&&(i(0,"p",21),s(1),p(2,"translate"),n()),e&2&&(r(),x(m(2,1,"register.required")))}function ee(e,l){e&1&&(i(0,"p",21),s(1),p(2,"translate"),n()),e&2&&(r(),x(m(2,1,"register.nameMinLength")))}function te(e,l){e&1&&(i(0,"p",21),s(1),p(2,"translate"),n()),e&2&&(r(),x(m(2,1,"register.nameMaxLength")))}function re(e,l){if(e&1&&(i(0,"div",6),h(1,Y,3,3,"p",21)(2,ee,3,3)(3,te,3,3),n()),e&2){let o,a=C();r(),d(1,(o=a.registerForm.get("name"))!=null&&o.getError("required")?1:(o=a.registerForm.get("name"))!=null&&o.getError("minlength")?2:(o=a.registerForm.get("name"))!=null&&o.getError("maxlength")?3:-1)}}function ie(e,l){e&1&&(i(0,"p",21),s(1),p(2,"translate"),n()),e&2&&(r(),x(m(2,1,"register.required")))}function ne(e,l){e&1&&(i(0,"p",21),s(1),p(2,"translate"),n()),e&2&&(r(),v("",m(2,1,"register.invalidEmail")," "))}function le(e,l){if(e&1&&(i(0,"div",6),h(1,ie,3,3,"p",21)(2,ne,3,3),n()),e&2){let o,a=C();r(),d(1,(o=a.registerForm.get("email"))!=null&&o.getError("required")?1:(o=a.registerForm.get("email"))!=null&&o.getError("email")?2:-1)}}function oe(e,l){e&1&&(i(0,"p",21),s(1),p(2,"translate"),n()),e&2&&(r(),x(m(2,1,"register.required")))}function ae(e,l){e&1&&(i(0,"p",21),s(1),p(2,"translate"),n()),e&2&&(r(),x(m(2,1,"register.passwordPattern")))}function se(e,l){if(e&1&&(i(0,"div",6),h(1,oe,3,3,"p",21)(2,ae,3,3),n()),e&2){let o,a=C();r(),d(1,(o=a.registerForm.get("password"))!=null&&o.getError("required")?1:(o=a.registerForm.get("password"))!=null&&o.getError("pattern")?2:-1)}}function pe(e,l){e&1&&(i(0,"div",6)(1,"p",21),s(2),p(3,"translate"),n()()),e&2&&(r(2),x(m(3,1,"register.mismatch")))}function me(e,l){e&1&&(i(0,"p",21),s(1),p(2,"translate"),n()),e&2&&(r(),x(m(2,1,"register.required")))}function ue(e,l){e&1&&(i(0,"p",21),s(1),p(2,"translate"),n()),e&2&&(r(),x(m(2,1,"register.phonePattern")))}function de(e,l){if(e&1&&(i(0,"div",6),h(1,me,3,3,"p",21)(2,ue,3,3),n()),e&2){let o,a=C();r(),d(1,(o=a.registerForm.get("phone"))!=null&&o.getError("required")?1:(o=a.registerForm.get("phone"))!=null&&o.getError("pattern")?2:-1)}}function ge(e,l){e&1&&(i(0,"span"),F(1,"i",22),n())}function ce(e,l){if(e&1&&(i(0,"p",19),s(1),n()),e&2){let o=C();r(),x(o.errorMsg)}}function fe(e,l){if(e&1&&(i(0,"p",20),s(1),n()),e&2){let o=C();r(),v(" ",o.successMsg,"")}}var ke=(()=>{let l=class l{constructor(){this._AuthService=T(j),this._FormBuilder=T(W),this._Router=T(z),this._OwnTranslateService=T(O),this.errorMsg="",this.successMsg="",this.isLoading=!1,this.registerForm=this._FormBuilder.group({name:[null,[b.required,b.minLength(3),b.maxLength(20)]],email:[null,[b.required,b.email]],password:[null,[b.required,b.pattern(/^[A-Z].{5,}$/)]],rePassword:[null],phone:[null,[b.required,b.pattern(/^01[0125][0-9]{8}$/)]]},{validators:this.confirmPassword})}registerSubmit(){this.registerForm.valid?(this.isLoading=!0,this.rgisterSubmitSub=this._AuthService.setRegisterForm(this.registerForm.value).subscribe({next:a=>{a.message==="success"&&(this.successMsg=a.message,this.errorMsg="",setTimeout(()=>{this._Router.navigate(["/login"])},2e3)),this.isLoading=!1},error:a=>{this.errorMsg=a.error.message,console.log(a),this.isLoading=!1}})):(this.registerForm.setErrors({mismatch:!0}),this.registerForm.markAllAsTouched())}confirmPassword(a){return a.get("password")?.value===a.get("rePassword")?.value?null:{mismatch:!0}}ngOnDestroy(){this.rgisterSubmitSub?.unsubscribe()}};l.\u0275fac=function(I){return new(I||l)},l.\u0275cmp=P({type:l,selectors:[["app-register"]],standalone:!0,features:[N],decls:47,vars:53,consts:[[1,"bg-main-light","shadow-lg","p-7","mt-36","mb-9","rounded-md","w-full"],[1,"h2","font-bold","text-main","my-4"],[1,"mx-auto",3,"ngSubmit","formGroup"],[1,"relative","z-0","w-full","mb-5","group"],["type","text","name","floating_name","id","floating_name","formControlName","name","placeholder"," ","required","",1,"block","py-2.5","px-0","w-full","text-sm","text-gray-900","bg-transparent","border-0","border-b-2","border-gray-300","appearance-none","dark:text-white","focus:outline-none","focus:ring-0","focus:border-blue-600","peer",3,"ngClass"],["for","floating_name",1,"peer-focus:font-medium","absolute","text-sm","text-gray-500","dark:text-gray-400","duration-300","transform","-translate-y-6","scale-75","top-3","-z-10","origin-[0]","peer-focus:start-0","rtl:peer-focus:translate-x-1/4","rtl:peer-focus:left-auto","peer-focus:text-blue-600","peer-focus:dark:text-blue-500","peer-placeholder-shown:scale-100","peer-placeholder-shown:translate-y-0","peer-focus:scale-75","peer-focus:-translate-y-6"],[1,"custom-alert","mt-3"],["type","email","name","floating_email","id","floating_email","formControlName","email","placeholder"," ","required","",1,"block","py-2.5","px-0","w-full","text-sm","text-gray-900","bg-transparent","border-0","border-b-2","border-gray-300","appearance-none","dark:text-white","focus:outline-none","focus:ring-0","focus:border-blue-600","peer",3,"ngClass"],["for","floating_email",1,"peer-focus:font-medium","absolute","text-sm","text-gray-500","dark:text-gray-400","duration-300","transform","-translate-y-6","scale-75","top-3","-z-10","origin-[0]","peer-focus:start-0","rtl:peer-focus:translate-x-1/4","rtl:peer-focus:left-auto","peer-focus:text-blue-600","peer-focus:dark:text-blue-500","peer-placeholder-shown:scale-100","peer-placeholder-shown:translate-y-0","peer-focus:scale-75","peer-focus:-translate-y-6"],[1,"grid","md:grid-cols-2","md:gap-6"],["type","password","name","floating_password","id","floating_password","formControlName","password","placeholder"," ","required","",1,"block","py-2.5","px-0","w-full","text-sm","text-gray-900","bg-transparent","border-0","border-b-2","border-gray-300","appearance-none","dark:text-white","focus:outline-none","focus:ring-0","focus:border-blue-600","peer",3,"ngClass"],["for","floating_password",1,"peer-focus:font-medium","absolute","text-sm","text-gray-500","dark:text-gray-400","duration-300","transform","-translate-y-6","scale-75","top-3","-z-10","origin-[0]","peer-focus:start-0","rtl:peer-focus:translate-x-1/4","peer-focus:text-blue-600","peer-focus:dark:text-blue-500","peer-placeholder-shown:scale-100","peer-placeholder-shown:translate-y-0","peer-focus:scale-75","peer-focus:-translate-y-6"],["type","password","name","repeat_password","id","floating_repeat_password","placeholder"," ","formControlName","rePassword","required","",1,"block","py-2.5","px-0","w-full","text-sm","text-gray-900","bg-transparent","border-0","border-b-2","border-gray-300","appearance-none","dark:text-white","focus:outline-none","focus:ring-0","focus:border-blue-600","peer",3,"ngClass"],["for","floating_repeat_password",1,"peer-focus:font-medium","absolute","text-sm","text-gray-500","dark:text-gray-400","duration-300","transform","-translate-y-6","scale-75","top-3","-z-10","origin-[0]","peer-focus:start-0","rtl:peer-focus:translate-x-1/4","peer-focus:text-blue-600","peer-focus:dark:text-blue-500","peer-placeholder-shown:scale-100","peer-placeholder-shown:translate-y-0","peer-focus:scale-75","peer-focus:-translate-y-6"],["type","tel","formControlName","phone","name","floating_phone","id","floating_phone","placeholder"," ",1,"block","py-2.5","px-0","w-full","text-sm","text-gray-900","bg-transparent","border-0","border-b-2","border-gray-300","appearance-none","dark:text-white","focus:outline-none","focus:ring-0","focus:border-blue-600","peer",3,"ngClass"],["for","floating_phone",1,"peer-focus:font-medium","absolute","text-sm","text-gray-500","dark:text-gray-400","duration-300","transform","-translate-y-6","scale-75","top-3","-z-10","origin-[0]","peer-focus:start-0","rtl:peer-focus:translate-x-1/4","peer-focus:text-blue-600","peer-focus:dark:text-blue-500","peer-placeholder-shown:scale-100","peer-placeholder-shown:translate-y-0","peer-focus:scale-75","peer-focus:-translate-y-6"],[1,"flex","justify-between","items-center","mt-3"],["routerLink","/login",1,"cr","text-gray-400","underline","hover:text-gray-600"],["type","submit",1,"btn-main","ms-auto","block"],[1,"custom-alert","m-0"],[1,"bg-green-50","border","border-green-500","text-green-900","dark:text-green-400","placeholder-green-700","text-sm","rounded-lg","p-2.5","m-2","w-[fit-content]"],[1,"m-0"],[1,"fas","fa-spin","fa-spinner"]],template:function(I,t){if(I&1&&(i(0,"section",0)(1,"div")(2,"h1",1),s(3),p(4,"translate"),n(),i(5,"form",2),M("ngSubmit",function(){return t.registerSubmit()}),i(6,"div",3),F(7,"input",4),i(8,"label",5),s(9),p(10,"translate"),n(),h(11,re,4,1,"div",6),n(),i(12,"div",3),F(13,"input",7),i(14,"label",8),s(15),p(16,"translate"),n(),h(17,le,3,1,"div",6),n(),i(18,"div",9)(19,"div",3),F(20,"input",10),i(21,"label",11),s(22),p(23,"translate"),n(),h(24,se,3,1,"div",6),n(),i(25,"div",3),F(26,"input",12),i(27,"label",13),s(28),p(29,"translate"),n(),h(30,pe,4,3,"div",6),n()(),i(31,"div",3),F(32,"input",14),i(33,"label",15),s(34),p(35,"translate"),p(36,"translate"),n(),h(37,de,3,1,"div",6),n(),i(38,"div",16)(39,"a",17),s(40,"already have an acoount?"),n(),i(41,"button",18),s(42),p(43,"translate"),h(44,ge,2,0,"span"),n()(),h(45,ce,2,1,"p",19)(46,fe,2,1,"p",20),n()()()),I&2){let u,w,g,S,c,E,f,q,_,k;r(3),v("",m(4,22,"register.title"),": "),r(2),y("formGroup",t.registerForm),r(2),y("ngClass",R(38,B,!((u=t.registerForm.get("name"))!=null&&u.errors)&&(((u=t.registerForm.get("name"))==null?null:u.touched)||((u=t.registerForm.get("name"))==null?null:u.dirty)),((u=t.registerForm.get("name"))==null?null:u.errors)&&(((u=t.registerForm.get("name"))==null?null:u.touched)||((u=t.registerForm.get("name"))==null?null:u.dirty)))),r(2),v(" ",m(10,24,"register.name"),":"),r(2),d(11,(w=t.registerForm.get("name"))!=null&&w.errors&&((w=t.registerForm.get("name"))!=null&&w.touched||(w=t.registerForm.get("name"))!=null&&w.dirty)?11:-1),r(2),y("ngClass",R(41,B,!((g=t.registerForm.get("email"))!=null&&g.errors)&&(((g=t.registerForm.get("email"))==null?null:g.touched)||((g=t.registerForm.get("email"))==null?null:g.dirty)),((g=t.registerForm.get("email"))==null?null:g.errors)&&(((g=t.registerForm.get("email"))==null?null:g.touched)||((g=t.registerForm.get("email"))==null?null:g.dirty)))),r(2),v("",m(16,26,"register.email"),":"),r(2),d(17,(S=t.registerForm.get("email"))!=null&&S.errors&&((S=t.registerForm.get("email"))!=null&&S.touched||(S=t.registerForm.get("email"))!=null&&S.dirty)?17:-1),r(3),y("ngClass",R(44,B,!((c=t.registerForm.get("password"))!=null&&c.errors)&&(((c=t.registerForm.get("password"))==null?null:c.touched)||((c=t.registerForm.get("password"))==null?null:c.dirty)),((c=t.registerForm.get("password"))==null?null:c.errors)&&(((c=t.registerForm.get("password"))==null?null:c.touched)||((c=t.registerForm.get("password"))==null?null:c.dirty)))),r(2),v("",m(23,28,"register.password"),":"),r(2),d(24,(E=t.registerForm.get("password"))!=null&&E.errors&&((E=t.registerForm.get("password"))!=null&&E.touched||(E=t.registerForm.get("password"))!=null&&E.dirty)?24:-1),r(2),y("ngClass",R(47,B,!((f=t.registerForm.get("rePassword"))!=null&&f.errors)&&(((f=t.registerForm.get("rePassword"))==null?null:f.touched)||((f=t.registerForm.get("rePassword"))==null?null:f.dirty)),((f=t.registerForm.get("rePassword"))==null?null:f.errors)&&(((f=t.registerForm.get("rePassword"))==null?null:f.touched)||((f=t.registerForm.get("rePassword"))==null?null:f.dirty)))),r(2),x(m(29,30,"register.rePassword")),r(2),d(30,t.registerForm.getError("mismatch")&&((q=t.registerForm.get("rePassword"))!=null&&q.touched||(q=t.registerForm.get("rePassword"))!=null&&q.dirty)?30:-1),r(2),y("ngClass",R(50,B,!((_=t.registerForm.get("phone"))!=null&&_.errors)&&(((_=t.registerForm.get("phone"))==null?null:_.touched)||((_=t.registerForm.get("phone"))==null?null:_.dirty)),((_=t.registerForm.get("phone"))==null?null:_.errors)&&(((_=t.registerForm.get("phone"))==null?null:_.touched)||((_=t.registerForm.get("phone"))==null?null:_.dirty)))),r(2),L("",m(35,32,"register.phone")," ",m(36,34,"register.(123-456-7890)"),""),r(3),d(37,(k=t.registerForm.get("phone"))!=null&&k.errors&&((k=t.registerForm.get("phone"))!=null&&k.touched||(k=t.registerForm.get("phone"))!=null&&k.dirty)?37:-1),r(5),v(" ",m(43,36,"register.submit")," "),r(2),d(44,t.isLoading?44:-1),r(),d(45,t.errorMsg?45:-1),r(),d(46,t.successMsg?46:-1)}},dependencies:[X,J,$,Z,H,U,K,Q,A,V,G,D]});let e=l;return e})();export{ke as RegisterComponent};
