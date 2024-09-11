import{a as N}from"./chunk-DSSUDFCV.js";import{a as D,b,c as G,d as V,f as E,h as z,i as O,j as P,k as j,l as Z,n as $}from"./chunk-M3OTGQMH.js";import{a as R}from"./chunk-IPFK77XX.js";import{c as q,d as A}from"./chunk-4NDHNKT4.js";import"./chunk-N3K24JAS.js";import{g as I,h as B}from"./chunk-TWAQUCXP.js";import{h as M}from"./chunk-IG6CRRGH.js";import{$ as L,Gb as p,Hb as f,Ib as _,Ob as k,Pa as i,Rb as S,Ub as u,Vb as g,Y as h,eb as c,gb as v,kb as d,ob as n,pb as o,qb as y,xb as T,yb as x}from"./chunk-63XWG6HK.js";import"./chunk-CWTPBX7D.js";var H=(e,r)=>({"is-valid":e,"is-invalid":r});function J(e,r){e&1&&(n(0,"p",14),p(1),o()),e&2&&(i(),f("login.required"))}function K(e,r){e&1&&(n(0,"p",14),p(1),o()),e&2&&(i(),_("","login.invalidEmail"," "))}function Q(e,r){if(e&1&&(n(0,"div",6),c(1,J,2,1,"p",14)(2,K,2,1),o()),e&2){let a,l=x();i(),d(1,(a=l.loginForm.get("email"))!=null&&a.getError("required")?1:(a=l.loginForm.get("email"))!=null&&a.getError("email")?2:-1)}}function U(e,r){e&1&&(n(0,"p",14),p(1),u(2,"translate"),o()),e&2&&(i(),f(g(2,1,"login.required")))}function W(e,r){e&1&&(n(0,"p",14),p(1),u(2,"translate"),o()),e&2&&(i(),f(g(2,1,"login.passwordPattern")))}function X(e,r){if(e&1&&(n(0,"div",6),c(1,U,3,3,"p",14)(2,W,3,3),o()),e&2){let a,l=x();i(),d(1,(a=l.loginForm.get("password"))!=null&&a.getError("required")?1:(a=l.loginForm.get("password"))!=null&&a.getError("pattern")?2:-1)}}function Y(e,r){e&1&&(n(0,"span"),y(1,"i",15),o())}function ee(e,r){if(e&1&&(n(0,"p",12),p(1),o()),e&2){let a=x();i(),f(a.errorMsg)}}function te(e,r){if(e&1&&(n(0,"p",13),p(1),o()),e&2){let a=x();i(),_(" ",a.successMsg,"")}}var ge=(()=>{let r=class r{constructor(){this._AuthService=h(R),this._FormBuilder=h(Z),this._Router=h(I),this._OwnTranslateService=h(N),this.isLoading=!1,this.errorMsg="",this.successMsg="",this.loginForm=this._FormBuilder.group({email:new E(null,[b.required,b.email]),password:new E(null,[b.required,b.pattern(/^[A-Z].{5,}$/)])})}loginSubmit(){this.loginForm.valid?(this.isLoading=!0,this.loginSubmitSub=this._AuthService.setLoginForm(this.loginForm.value).subscribe({next:l=>{l.message==="success"&&(this.successMsg=l.message,this.errorMsg="",setTimeout(()=>{localStorage.setItem("token",l.token),this._AuthService.saveToken(),this._Router.navigate(["/home"])},2e3)),this.isLoading=!1},error:l=>{this.errorMsg=l.error.message,console.log(l),this.isLoading=!1}})):(this.loginForm.setErrors({mismatch:!0}),this.loginForm.markAllAsTouched())}ngOnDestroy(){this.loginSubmitSub?.unsubscribe()}};r.\u0275fac=function(C){return new(C||r)},r.\u0275cmp=L({type:r,selectors:[["app-login"]],standalone:!0,features:[k],decls:27,vars:30,consts:[[1,"bg-main-light","shadow","my-2","mt-8","rounded-md","p-5"],[1,"h2","text-main","my-4","font-semibold"],[1,"mx-auto",3,"ngSubmit","formGroup"],[1,"relative","z-0","w-full","mb-5","group"],["type","email","name","floating_email","id","floating_email","formControlName","email","placeholder"," ","required","",1,"block","py-2.5","px-0","w-full","text-sm","text-gray-900","bg-transparent","border-0","border-b-2","border-gray-300","appearance-none","dark:text-white","focus:outline-none","focus:ring-0","focus:border-blue-600","peer",3,"ngClass"],["for","floating_email",1,"peer-focus:font-medium","absolute","text-sm","text-gray-500","dark:text-gray-400","duration-300","transform","-translate-y-6","scale-75","top-3","-z-10","origin-[0]","peer-focus:start-0","rtl:peer-focus:translate-x-1/4","rtl:peer-focus:left-auto","peer-focus:text-blue-600","peer-focus:dark:text-blue-500","peer-placeholder-shown:scale-100","peer-placeholder-shown:translate-y-0","peer-focus:scale-75","peer-focus:-translate-y-6"],[1,"custom-alert","mt-3"],["type","password","name","floating_password","id","floating_password","formControlName","password","placeholder"," ","required","",1,"block","py-2.5","px-0","w-full","text-sm","text-gray-900","bg-transparent","border-0","border-b-2","border-gray-300","appearance-none","dark:text-white","focus:outline-none","focus:ring-0","focus:border-blue-600","peer",3,"ngClass"],["for","floating_password",1,"peer-focus:font-medium","absolute","text-sm","text-gray-500","dark:text-gray-400","duration-300","transform","-translate-y-6","scale-75","top-3","-z-10","origin-[0]","peer-focus:start-0","rtl:peer-focus:translate-x-1/4","peer-focus:text-blue-600","peer-focus:dark:text-blue-500","peer-placeholder-shown:scale-100","peer-placeholder-shown:translate-y-0","peer-focus:scale-75","peer-focus:-translate-y-6"],[1,"flex","justify-between","items-center","mt-3"],["routerLink","/forgot-password",1,"text-gray-400","underline","hover:text-gray-600"],["type","submit",1,"btn-main","ms-auto","block",3,"disabled"],[1,"custom-alert","m-0"],[1,"bg-green-50","border","border-green-500","text-green-900","dark:text-green-400","placeholder-green-700","text-sm","rounded-lg","p-2.5","m-2","w-[fit-content]"],[1,"m-0"],[1,"fas","fa-spin","fa-spinner"]],template:function(C,t){if(C&1&&(n(0,"section",0)(1,"h1",1),p(2),u(3,"translate"),o(),n(4,"form",2),T("ngSubmit",function(){return t.loginSubmit()}),n(5,"div",3),y(6,"input",4),n(7,"label",5),p(8),u(9,"translate"),o(),c(10,Q,3,1,"div",6),o(),n(11,"div",3),y(12,"input",7),n(13,"label",8),p(14),u(15,"translate"),o(),c(16,X,3,1,"div",6),o(),n(17,"div",9)(18,"a",10),p(19),u(20,"translate"),o(),n(21,"button",11),p(22),u(23,"translate"),c(24,Y,2,0,"span"),o()(),c(25,ee,2,1,"p",12)(26,te,2,1,"p",13),o()()),C&2){let s,F,m,w;i(2),_("",g(3,14,"login.title")," "),i(2),v("formGroup",t.loginForm),i(2),v("ngClass",S(24,H,!((s=t.loginForm.get("email"))!=null&&s.errors)&&(((s=t.loginForm.get("email"))==null?null:s.touched)||((s=t.loginForm.get("email"))==null?null:s.dirty)),((s=t.loginForm.get("email"))==null?null:s.errors)&&(((s=t.loginForm.get("email"))==null?null:s.touched)||((s=t.loginForm.get("email"))==null?null:s.dirty)))),i(2),f(g(9,16,"register.email")),i(2),d(10,(F=t.loginForm.get("email"))!=null&&F.errors&&((F=t.loginForm.get("email"))!=null&&F.touched)?10:-1),i(2),v("ngClass",S(27,H,!((m=t.loginForm.get("password"))!=null&&m.errors)&&(((m=t.loginForm.get("password"))==null?null:m.touched)||((m=t.loginForm.get("password"))==null?null:m.dirty)),((m=t.loginForm.get("password"))==null?null:m.errors)&&(((m=t.loginForm.get("password"))==null?null:m.touched)||((m=t.loginForm.get("password"))==null?null:m.dirty)))),i(2),_("",g(15,18,"register.password"),":"),i(2),d(16,(w=t.loginForm.get("password"))!=null&&w.errors&&((w=t.loginForm.get("password"))!=null&&w.touched)?16:-1),i(3),f(g(20,20,"login.forgotPassword")),i(2),v("disabled",t.loginForm.invalid||t.isLoading),i(),_(" ",g(23,22,"login.login")," "),i(2),d(24,t.isLoading?24:-1),i(),d(25,t.errorMsg?25:-1),i(),d(26,t.successMsg?26:-1)}},dependencies:[$,z,D,G,V,j,O,P,B,M,A,q]});let e=r;return e})();export{ge as LoginComponent};
