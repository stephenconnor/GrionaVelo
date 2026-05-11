import{$ as an,A as Xt,B as Ct,C as Ye,D as Ge,E as Kt,F as xt,G as Ut,H as Xe,I as Ae,J as ke,K as wt,L as Jt,M as en,N as Me,O as Tt,P as Ke,Q as tn,R as X,S as nn,T as mt,U as he,V as k,W as on,X as It,Y as Pe,Z as Re,_ as P,g as pe,h as Ce,i as ge,j as be,k as q,o as se,p as Zt,q as Yt,s as He,t as Ie,u as _t,v as fe,w as yt,x as vt,y as Fe,z as Gt}from"./chunk-5V6HJTE3.js";import{c as qe,d as xe,f as we,g as Ze,h as Te,i as pt,j as ut}from"./chunk-EACUHEII.js";import{$a as U,Ab as lt,Bb as ct,Cb as De,Da as x,Ea as G,Fa as ue,Fb as ie,Ga as Ht,Gb as oe,H as We,Ha as v,Hb as dt,I as M,Ia as u,J as Z,Jb as qt,Mb as y,N as f,Nb as ve,Oa as g,Pa as ce,Qa as de,Ra as at,S as j,Sa as rt,T as Q,Ta as l,U as Y,Ua as c,V as Bt,Va as p,W as ze,Wa as w,Xa as B,Ya as V,Z as J,Za as H,_ as it,_a as K,a as ae,ab as A,ba as Oe,bb as ne,cb as ye,db as R,ea as ot,eb as d,fa as Se,fb as ee,ga as b,gb as O,ha as Le,hb as me,ib as Ve,jb as h,kb as _,la as Be,lb as At,mb as st,nb as Ee,ob as Qe,pa as je,pb as T,qa as s,qb as I,rb as N,sb as $e,tb as Rt,ub as Nt,vb as Wt,wb as jt,xa as Vt,xb as W,yb as Qt,zb as re}from"./chunk-HCMPP43U.js";var rn=(()=>{class t extends P{name="common";static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),E=(()=>{class t{document=f(ze);platformId=f(Be);el=f(Le);injector=f(Bt);cd=f(qt);renderer=f(Vt);config=f(an);baseComponentStyle=f(rn);baseStyle=f(P);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=X("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,i="",n={}){return tn(e,i,n)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!Zt(this.platformId)){let{dt:i}=e;i&&i.currentValue&&(this._loadScopedThemeStyles(i.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(i.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>It.off("theme:change",e))}_loadStyles(){let e=()=>{Re.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),Re.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!Re.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Re.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!Pe.isStyleNameLoaded("common")){let{primitive:e,semantic:i,global:n,style:o}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,ae({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(i?.css,ae({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(n?.css,ae({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(ae({name:"global-style"},this.styleOptions),o),Pe.setLoadedStyleName("common")}if(!Pe.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:i}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,ae({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(ae({name:`${this.componentStyle?.name}-style`},this.styleOptions),i),Pe.setLoadedStyleName(this.componentStyle?.name)}if(!Pe.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,ae({name:"layer-order",first:!0},this.styleOptions)),Pe.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:i}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},n=this.componentStyle?.load(i,ae({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=n?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){Re.clearLoadedStyleNames(),It.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,i){let n=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:e}sx(e){let i=this.componentStyle?.inlineStyles?.[e];return typeof i=="function"?i({instance:this}):typeof i=="string"?i:ae({},i)}get parent(){return this.parentInstance}static \u0275fac=function(i){return new(i||t)};static \u0275dir=ue({type:t,inputs:{dt:"dt"},features:[W([rn,P]),Se]})}return t})();var Vn=({dt:t})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,Hn={root:"p-ink"},sn=(()=>{class t extends P{name="ripple";theme=Vn;classes=Hn;static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})();var Ue=(()=>{class t extends E{zone=f(it);_componentStyle=f(sn);animationListener;mouseDownListener;timeout;constructor(){super(),ot(()=>{se(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let i=this.getInk();if(!i||this.document.defaultView?.getComputedStyle(i,null).display==="none")return;if(fe(i,"p-ink-active"),!xt(i)&&!ke(i)){let m=Math.max(Fe(this.el.nativeElement),Ae(this.el.nativeElement));i.style.height=m+"px",i.style.width=m+"px"}let n=Xe(this.el.nativeElement),o=e.pageX-n.left+this.document.body.scrollTop-ke(i)/2,a=e.pageY-n.top+this.document.body.scrollLeft-xt(i)/2;this.renderer.setStyle(i,"top",a+"px"),this.renderer.setStyle(i,"left",o+"px"),Ie(i,"p-ink-active"),this.timeout=setTimeout(()=>{let m=this.getInk();m&&fe(m,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let i=0;i<e.length;i++)if(typeof e[i].className=="string"&&e[i].className.indexOf("p-ink")!==-1)return e[i];return null}resetInk(){let e=this.getInk();e&&fe(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),fe(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Jt(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=ue({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[W([sn]),v]})}return t})(),ln=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=Z({})}return t})();var Rn=["*"],Nn=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Wn=(()=>{class t extends P{name="baseicon";inlineStyles=Nn;static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})();var te=(()=>{class t extends E{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=Me(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",y],styleClass:"styleClass"},features:[W([Wn]),v],ngContentSelectors:Rn,decls:1,vars:0,template:function(i,n){i&1&&(ee(),O(0))},encapsulation:2,changeDetection:0})}return t})();var cn=(()=>{class t extends te{static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["ChevronLeftIcon"]],features:[v],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z","fill","currentColor"]],template:function(i,n){i&1&&(Y(),B(0,"svg",0),H(1,"path",1),V()),i&2&&(T(n.getClassNames()),g("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var dn=(()=>{class t extends te{static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["ChevronRightIcon"]],features:[v],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z","fill","currentColor"]],template:function(i,n){i&1&&(Y(),B(0,"svg",0),H(1,"path",1),V()),i&2&&(T(n.getClassNames()),g("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var pn=(()=>{class t extends te{static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["MinusIcon"]],features:[v],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(i,n){i&1&&(Y(),B(0,"svg",0),H(1,"path",1),V()),i&2&&(T(n.getClassNames()),g("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var un=(()=>{class t extends te{pathId;ngOnInit(){this.pathId="url(#"+X()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["PlusIcon"]],features:[v],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(Y(),B(0,"svg",0)(1,"g"),H(2,"path",1),V(),B(3,"defs")(4,"clipPath",2),H(5,"rect",3),V()()()),i&2&&(T(n.getClassNames()),g("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),s(),g("clip-path",n.pathId),s(3),ye("id",n.pathId))},encapsulation:2})}return t})();var mn=(()=>{class t extends te{pathId;ngOnInit(){this.pathId="url(#"+X()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["SpinnerIcon"]],features:[v],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(Y(),B(0,"svg",0)(1,"g"),H(2,"path",1),V(),B(3,"defs")(4,"clipPath",2),H(5,"rect",3),V()()()),i&2&&(T(n.getClassNames()),g("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),s(),g("clip-path",n.pathId),s(3),ye("id",n.pathId))},encapsulation:2})}return t})();var gn=(()=>{class t extends te{static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["TimesIcon"]],features:[v],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(i,n){i&1&&(Y(),B(0,"svg",0),H(1,"path",1),V()),i&2&&(T(n.getClassNames()),g("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var bn=(()=>{class t extends te{pathId;ngOnInit(){this.pathId="url(#"+X()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["WindowMaximizeIcon"]],features:[v],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(Y(),B(0,"svg",0)(1,"g"),H(2,"path",1),V(),B(3,"defs")(4,"clipPath",2),H(5,"rect",3),V()()()),i&2&&(T(n.getClassNames()),g("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),s(),g("clip-path",n.pathId),s(3),ye("id",n.pathId))},encapsulation:2})}return t})();var fn=(()=>{class t extends te{pathId;ngOnInit(){this.pathId="url(#"+X()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["WindowMinimizeIcon"]],features:[v],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(Y(),B(0,"svg",0)(1,"g"),H(2,"path",1),V(),B(3,"defs")(4,"clipPath",2),H(5,"rect",3),V()()()),i&2&&(T(n.getClassNames()),g("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),s(),g("clip-path",n.pathId),s(3),ye("id",n.pathId))},encapsulation:2})}return t})();var jn=["previcon"],Qn=["nexticon"],qn=["content"],Zn=["prevButton"],Yn=["nextButton"],Gn=["inkbar"],Xn=["tabs"],et=["*"],Kn=t=>({"p-tablist-viewport":t});function Un(t,r){t&1&&A(0)}function Jn(t,r){if(t&1&&u(0,Un,1,0,"ng-container",11),t&2){let e=d(2);l("ngTemplateOutlet",e.prevIconTemplate||e._prevIconTemplate)}}function ei(t,r){t&1&&w(0,"ChevronLeftIcon")}function ti(t,r){if(t&1){let e=ne();c(0,"button",10,3),R("click",function(){j(e);let n=d();return Q(n.onPrevButtonClick())}),ce(2,Jn,1,1,"ng-container")(3,ei,1,0,"ChevronLeftIcon"),p()}if(t&2){let e=d();g("aria-label",e.prevButtonAriaLabel)("tabindex",e.tabindex())("data-pc-group-section","navigator"),s(2),de(e.prevIconTemplate||e._prevIconTemplate?2:3)}}function ni(t,r){t&1&&A(0)}function ii(t,r){if(t&1&&u(0,ni,1,0,"ng-container",11),t&2){let e=d(2);l("ngTemplateOutlet",e.nextIconTemplate||e._nextIconTemplate)}}function oi(t,r){t&1&&w(0,"ChevronRightIcon")}function ai(t,r){if(t&1){let e=ne();c(0,"button",12,4),R("click",function(){j(e);let n=d();return Q(n.onNextButtonClick())}),ce(2,ii,1,1,"ng-container")(3,oi,1,0,"ChevronRightIcon"),p()}if(t&2){let e=d();g("aria-label",e.nextButtonAriaLabel)("tabindex",e.tabindex())("data-pc-group-section","navigator"),s(2),de(e.nextIconTemplate||e._nextIconTemplate?2:3)}}function ri(t,r){t&1&&O(0)}var si=({dt:t})=>`
.p-tabs {
    display: flex;
    flex-direction: column;
}

.p-tablist {
    display: flex;
    position: relative;
}

.p-tabs-scrollable > .p-tablist {
    overflow: hidden;
}

.p-tablist-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tablist-viewport::-webkit-scrollbar {
    display: none;
}

.p-tablist-tab-list {
    position: relative;
    display: flex;
    background: ${t("tabs.tablist.background")};
    border-style: solid;
    border-color: ${t("tabs.tablist.border.color")};
    border-width: ${t("tabs.tablist.border.width")};
}

.p-tablist-content {
    flex-grow: 1;
}

.p-tablist-nav-button {
    all: unset;
    position: absolute !important;
    flex-shrink: 0;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${t("tabs.nav.button.background")};
    color: ${t("tabs.nav.button.color")};
    width: ${t("tabs.nav.button.width")};
    transition: color ${t("tabs.transition.duration")}, outline-color ${t("tabs.transition.duration")}, box-shadow ${t("tabs.transition.duration")};
    box-shadow: ${t("tabs.nav.button.shadow")};
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: ${t("tabs.nav.button.focus.ring.shadow")};
    outline: ${t("tabs.nav.button.focus.ring.width")} ${t("tabs.nav.button.focus.ring.style")} ${t("tabs.nav.button.focus.ring.color")};
    outline-offset: ${t("tabs.nav.button.focus.ring.offset")};
}

.p-tablist-nav-button:hover {
    color: ${t("tabs.nav.button.hover.color")};
}

.p-tablist-prev-button {
    left: 0;
}

.p-tablist-next-button {
    right: 0;
}

.p-tab {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    position: relative;
    border-style: solid;
    white-space: nowrap;
    gap: ${t("tabs.tab.gap")};
    background: ${t("tabs.tab.background")};
    border-width: ${t("tabs.tab.border.width")};
    border-color: ${t("tabs.tab.border.color")};
    color: ${t("tabs.tab.color")};
    padding: ${t("tabs.tab.padding")};
    font-weight: ${t("tabs.tab.font.weight")};
    transition: background ${t("tabs.transition.duration")}, border-color ${t("tabs.transition.duration")}, color ${t("tabs.transition.duration")}, outline-color ${t("tabs.transition.duration")}, box-shadow ${t("tabs.transition.duration")};
    margin: ${t("tabs.tab.margin")};
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: ${t("tabs.tab.focus.ring.shadow")};
    outline: ${t("tabs.tab.focus.ring.width")} ${t("tabs.tab.focus.ring.style")} ${t("tabs.tab.focus.ring.color")};
    outline-offset: ${t("tabs.tab.focus.ring.offset")};
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: ${t("tabs.tab.hover.background")};
    border-color: ${t("tabs.tab.hover.border.color")};
    color: ${t("tabs.tab.hover.color")};
}

.p-tab-active {
    background: ${t("tabs.tab.active.background")};
    border-color: ${t("tabs.tab.active.border.color")};
    color: ${t("tabs.tab.active.color")};
}

.p-tabpanels {
    background: ${t("tabs.tabpanel.background")};
    color: ${t("tabs.tabpanel.color")};
    padding: ${t("tabs.tabpanel.padding")};
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: ${t("tabs.tabpanel.focus.ring.shadow")};
    outline: ${t("tabs.tabpanel.focus.ring.width")} ${t("tabs.tabpanel.focus.ring.style")} ${t("tabs.tabpanel.focus.ring.color")};
    outline-offset: ${t("tabs.tabpanel.focus.ring.offset")};
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: ${t("tabs.active.bar.bottom")};
    height: ${t("tabs.active.bar.height")};
    background: ${t("tabs.active.bar.background")};
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`,li={root:({props:t})=>["p-tabs p-component",{"p-tabs-scrollable":t.scrollable}]},hn=(()=>{class t extends P{name="tabs";theme=si;classes=li;static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})();var gt=(()=>{class t extends E{prevIconTemplate;nextIconTemplate;templates;content;prevButton;nextButton;inkbar;tabs;pcTabs=f(We(()=>Ne));isPrevButtonEnabled=Oe(!1);isNextButtonEnabled=Oe(!1);resizeObserver;showNavigators=ie(()=>this.pcTabs.showNavigators());tabindex=ie(()=>this.pcTabs.tabindex());scrollable=ie(()=>this.pcTabs.scrollable());constructor(){super(),ot(()=>{this.pcTabs.value(),se(this.platformId)&&setTimeout(()=>{this.updateInkBar()})})}get prevButtonAriaLabel(){return this.config.translation.aria.previous}get nextButtonAriaLabel(){return this.config.translation.aria.next}ngAfterViewInit(){super.ngAfterViewInit(),this.showNavigators()&&se(this.platformId)&&(this.updateButtonState(),this.bindResizeObserver())}_prevIconTemplate;_nextIconTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"previcon":this._prevIconTemplate=e.template;break;case"nexticon":this._nextIconTemplate=e.template;break}})}ngOnDestroy(){this.unbindResizeObserver(),super.ngOnDestroy()}onScroll(e){this.showNavigators()&&this.updateButtonState(),e.preventDefault()}onPrevButtonClick(){let e=this.content.nativeElement,i=ke(e),n=Math.abs(e.scrollLeft)-i,o=n<=0?0:n;e.scrollLeft=wt(e)?-1*o:o}onNextButtonClick(){let e=this.content.nativeElement,i=ke(e)-this.getVisibleButtonWidths(),n=e.scrollLeft+i,o=e.scrollWidth-i,a=n>=o?o:n;e.scrollLeft=wt(e)?-1*a:a}updateButtonState(){let e=this.content?.nativeElement,i=this.el?.nativeElement,{scrollWidth:n,offsetWidth:o}=e,a=Math.abs(e.scrollLeft),m=ke(e);this.isPrevButtonEnabled.set(a!==0),this.isNextButtonEnabled.set(i.offsetWidth>=o&&a!==n-m)}updateInkBar(){let e=this.content?.nativeElement,i=this.inkbar?.nativeElement,n=this.tabs?.nativeElement,o=Ct(e,'[data-pc-name="tab"][data-p-active="true"]');i&&(i.style.width=Fe(o)+"px",i.style.left=Xe(o).left-Xe(n).left+"px")}getVisibleButtonWidths(){let e=this.prevButton?.nativeElement,i=this.nextButton?.nativeElement;return[e,i].reduce((n,o)=>o?n+ke(o):n,0)}bindResizeObserver(){this.resizeObserver=new ResizeObserver(()=>this.updateButtonState()),this.resizeObserver.observe(this.el.nativeElement)}unbindResizeObserver(){this.resizeObserver&&(this.resizeObserver.unobserve(this.el.nativeElement),this.resizeObserver=null)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["p-tablist"]],contentQueries:function(i,n,o){if(i&1&&me(o,jn,4)(o,Qn,4)(o,he,4),i&2){let a;h(a=_())&&(n.prevIconTemplate=a.first),h(a=_())&&(n.nextIconTemplate=a.first),h(a=_())&&(n.templates=a)}},viewQuery:function(i,n){if(i&1&&Ve(qn,5)(Zn,5)(Yn,5)(Gn,5)(Xn,5),i&2){let o;h(o=_())&&(n.content=o.first),h(o=_())&&(n.prevButton=o.first),h(o=_())&&(n.nextButton=o.first),h(o=_())&&(n.inkbar=o.first),h(o=_())&&(n.tabs=o.first)}},hostVars:5,hostBindings:function(i,n){i&2&&(g("data-pc-name","tablist"),Ee("p-tablist",!0)("p-component",!0))},features:[v],ngContentSelectors:et,decls:9,vars:6,consts:[["content",""],["tabs",""],["inkbar",""],["prevButton",""],["nextButton",""],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-prev-button"],[1,"p-tablist-content",3,"scroll","ngClass"],["role","tablist",1,"p-tablist-tab-list"],["role","presentation",1,"p-tablist-active-bar"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-next-button"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-prev-button",3,"click"],[4,"ngTemplateOutlet"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-next-button",3,"click"]],template:function(i,n){i&1&&(ee(),ce(0,ti,4,4,"button",5),c(1,"div",6,0),R("scroll",function(a){return n.onScroll(a)}),c(3,"div",7,1),O(5),w(6,"span",8,2),p()(),ce(8,ai,4,4,"button",9)),i&2&&(de(n.showNavigators()&&n.isPrevButtonEnabled()?0:-1),s(),l("ngClass",re(4,Kn,n.scrollable())),s(5),g("data-pc-section","inkbar"),s(2),de(n.showNavigators()&&n.isNextButtonEnabled()?8:-1))},dependencies:[q,pe,be,cn,dn,ln,Ue,k],encapsulation:2,changeDetection:0})}return t})(),kt=(()=>{class t extends E{value=dt();disabled=oe(!1,{transform:y});pcTabs=f(We(()=>Ne));pcTabList=f(We(()=>gt));el=f(Le);ripple=ie(()=>this.config.ripple());id=ie(()=>`${this.pcTabs.id()}_tab_${this.value()}`);ariaControls=ie(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);active=ie(()=>Ke(this.pcTabs.value(),this.value()));tabindex=ie(()=>this.active()?this.pcTabs.tabindex():-1);mutationObserver;onFocus(e){this.pcTabs.selectOnFocus()&&this.changeActiveValue()}onClick(e){this.changeActiveValue()}onKeyDown(e){switch(e.code){case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break;default:break}e.stopPropagation()}ngAfterViewInit(){super.ngAfterViewInit(),this.bindMutationObserver()}onArrowRightKey(e){let i=this.findNextTab(e.currentTarget);i?this.changeFocusedTab(e,i):this.onHomeKey(e),e.preventDefault()}onArrowLeftKey(e){let i=this.findPrevTab(e.currentTarget);i?this.changeFocusedTab(e,i):this.onEndKey(e),e.preventDefault()}onHomeKey(e){let i=this.findFirstTab();this.changeFocusedTab(e,i),e.preventDefault()}onEndKey(e){let i=this.findLastTab();this.changeFocusedTab(e,i),e.preventDefault()}onPageDownKey(e){this.scrollInView(this.findLastTab()),e.preventDefault()}onPageUpKey(e){this.scrollInView(this.findFirstTab()),e.preventDefault()}onEnterKey(e){this.changeActiveValue(),e.preventDefault()}findNextTab(e,i=!1){let n=i?e:e.nextElementSibling;return n?Ge(n,"data-p-disabled")||Ge(n,"data-pc-section")==="inkbar"?this.findNextTab(n):n:null}findPrevTab(e,i=!1){let n=i?e:e.previousElementSibling;return n?Ge(n,"data-p-disabled")||Ge(n,"data-pc-section")==="inkbar"?this.findPrevTab(n):n:null}findFirstTab(){return this.findNextTab(this.pcTabList?.tabs?.nativeElement?.firstElementChild,!0)}findLastTab(){return this.findPrevTab(this.pcTabList?.tabs?.nativeElement?.lastElementChild,!0)}changeActiveValue(){this.pcTabs.updateValue(this.value())}changeFocusedTab(e,i){Ye(i),this.scrollInView(i)}scrollInView(e){e?.scrollIntoView?.({block:"nearest"})}bindMutationObserver(){se(this.platformId)&&(this.mutationObserver=new MutationObserver(e=>{e.forEach(()=>{this.active()&&this.pcTabList?.updateInkBar()})}),this.mutationObserver.observe(this.el.nativeElement,{childList:!0,characterData:!0,subtree:!0}))}unbindMutationObserver(){this.mutationObserver.disconnect()}ngOnDestroy(){this.mutationObserver&&this.unbindMutationObserver(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-tab"]],hostVars:16,hostBindings:function(i,n){i&1&&R("focus",function(a){return n.onFocus(a)})("click",function(a){return n.onClick(a)})("keydown",function(a){return n.onKeyDown(a)}),i&2&&(g("data-pc-name","tab")("id",n.id())("aria-controls",n.ariaControls())("role","tab")("aria-selected",n.active())("data-p-disabled",n.disabled())("data-p-active",n.active())("tabindex",n.tabindex()),Ee("p-tab",!0)("p-tab-active",n.active())("p-disabled",n.disabled())("p-component",!0))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[Ht([Ue]),v],ngContentSelectors:et,decls:1,vars:0,template:function(i,n){i&1&&(ee(),O(0))},dependencies:[q,k],encapsulation:2,changeDetection:0})}return t})(),St=(()=>{class t extends E{pcTabs=f(We(()=>Ne));value=dt(void 0);id=ie(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);ariaLabelledby=ie(()=>`${this.pcTabs.id()}_tab_${this.value()}`);active=ie(()=>Ke(this.pcTabs.value(),this.value()));static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-tabpanel"]],hostVars:9,hostBindings:function(i,n){i&2&&(g("data-pc-name","tabpanel")("id",n.id())("role","tabpanel")("aria-labelledby",n.ariaLabelledby())("data-p-active",n.active()),Ee("p-tabpanel",!0)("p-component",!0))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[v],ngContentSelectors:et,decls:1,vars:1,template:function(i,n){i&1&&(ee(),ce(0,ri,1,0)),i&2&&de(n.active()?0:-1)},dependencies:[q],encapsulation:2,changeDetection:0})}return t})(),Et=(()=>{class t extends E{static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-tabpanels"]],hostVars:6,hostBindings:function(i,n){i&2&&(g("data-pc-name","tabpanels")("role","presentation"),Ee("p-tabpanels",!0)("p-component",!0))},features:[v],ngContentSelectors:et,decls:1,vars:0,template:function(i,n){i&1&&(ee(),O(0))},dependencies:[q],encapsulation:2,changeDetection:0})}return t})(),Ne=(()=>{class t extends E{value=dt(void 0);scrollable=oe(!1,{transform:y});lazy=oe(!1,{transform:y});selectOnFocus=oe(!1,{transform:y});showNavigators=oe(!0,{transform:y});tabindex=oe(0,{transform:ve});id=Oe(X("pn_id_"));_componentStyle=f(hn);updateValue(e){this.value.update(()=>e)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-tabs"]],hostVars:8,hostBindings:function(i,n){i&2&&(g("data-pc-name","tabs")("id",n.id()),Ee("p-tabs",!0)("p-tabs-scrollable",n.scrollable())("p-component",!0))},inputs:{value:[1,"value"],scrollable:[1,"scrollable"],lazy:[1,"lazy"],selectOnFocus:[1,"selectOnFocus"],showNavigators:[1,"showNavigators"],tabindex:[1,"tabindex"]},outputs:{value:"valueChange"},features:[W([hn]),v],ngContentSelectors:et,decls:1,vars:0,template:function(i,n){i&1&&(ee(),O(0))},dependencies:[q],encapsulation:2,changeDetection:0})}return t})(),_n=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=Z({imports:[Ne,Et,St,gt,kt]})}return t})();var di=({dt:t})=>`
.p-progressspinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progressspinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progressspinner-spin {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progressspinner-rotate 2s linear infinite;
}

.p-progressspinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: ${t("progressspinner.colorOne")};
    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: ${t("progressspinner.colorOne")};
    }
    40% {
        stroke: ${t("progressspinner.colorTwo")};
    }
    66% {
        stroke: ${t("progressspinner.colorThree")};
    }
    80%,
    90% {
        stroke: ${t("progressspinner.colorFour")};
    }
}
`,pi={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},yn=(()=>{class t extends P{name="progressspinner";theme=di;classes=pi;static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})();var $t=(()=>{class t extends E{styleClass;style;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;_componentStyle=f(yn);static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],inputs:{styleClass:"styleClass",style:"style",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},features:[W([yn]),v],decls:3,vars:11,consts:[["role","progressbar",1,"p-progressspinner",3,"ngStyle","ngClass"],["viewBox","25 25 50 50",1,"p-progressspinner-spin"],["cx","50","cy","50","r","20","stroke-miterlimit","10",1,"p-progressspinner-circle"]],template:function(i,n){i&1&&(c(0,"div",0),Y(),c(1,"svg",1),w(2,"circle",2),p()()),i&2&&(l("ngStyle",n.style)("ngClass",n.styleClass),g("aria-label",n.ariaLabel)("aria-busy",!0)("data-pc-name","progressspinner")("data-pc-section","root"),s(),st("animation-duration",n.animationDuration),g("data-pc-section","root"),s(),g("fill",n.fill)("stroke-width",n.strokeWidth))},dependencies:[q,pe,ge,k],encapsulation:2,changeDetection:0})}return t})(),vn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=Z({imports:[$t,k,k]})}return t})();var bt=class t{http=f(Yt);getRoutes(){return this.http.get("routes.json")}static \u0275fac=function(e){return new(e||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})};var mi=["header"],gi=["title"],bi=["subtitle"],fi=["content"],hi=["footer"],_i=["*",[["p-header"]],[["p-footer"]]],yi=["*","p-header","p-footer"];function vi(t,r){t&1&&A(0)}function Ci(t,r){if(t&1&&(c(0,"div",8),O(1,1),u(2,vi,1,0,"ng-container",6),p()),t&2){let e=d();s(2),l("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)}}function xi(t,r){if(t&1&&(K(0),I(1),U()),t&2){let e=d(2);s(),N(e.header)}}function wi(t,r){t&1&&A(0)}function Ti(t,r){if(t&1&&(c(0,"div",9),u(1,xi,2,1,"ng-container",10)(2,wi,1,0,"ng-container",6),p()),t&2){let e=d();s(),l("ngIf",e.header&&!e._titleTemplate&&!e.titleTemplate),s(),l("ngTemplateOutlet",e.titleTemplate||e._titleTemplate)}}function Ii(t,r){if(t&1&&(K(0),I(1),U()),t&2){let e=d(2);s(),N(e.subheader)}}function ki(t,r){t&1&&A(0)}function Si(t,r){if(t&1&&(c(0,"div",11),u(1,Ii,2,1,"ng-container",10)(2,ki,1,0,"ng-container",6),p()),t&2){let e=d();s(),l("ngIf",e.subheader&&!e._subtitleTemplate&&!e.subtitleTemplate),s(),l("ngTemplateOutlet",e.subtitleTemplate||e._subtitleTemplate)}}function Ei(t,r){t&1&&A(0)}function $i(t,r){t&1&&A(0)}function Di(t,r){if(t&1&&(c(0,"div",12),O(1,2),u(2,$i,1,0,"ng-container",6),p()),t&2){let e=d();s(2),l("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}var Fi=({dt:t})=>`
.p-card {
    background: ${t("card.background")};
    color: ${t("card.color")};
    box-shadow: ${t("card.shadow")};
    border-radius: ${t("card.border.radius")};
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: ${t("card.caption.gap")};
}

.p-card-body {
    padding: ${t("card.body.padding")};
    display: flex;
    flex-direction: column;
    gap: ${t("card.body.gap")};
}

.p-card-title {
    font-size: ${t("card.title.font.size")};
    font-weight: ${t("card.title.font.weight")};
}

.p-card-subtitle {
    color: ${t("card.subtitle.color")};
}
`,Mi={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Cn=(()=>{class t extends P{name="card";theme=Fi;classes=Mi;static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})();var Dt=(()=>{class t extends E{header;subheader;set style(e){Ke(this._style(),e)||this._style.set(e)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=Oe(null);_componentStyle=f(Cn);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"title":this._titleTemplate=e.template;break;case"subtitle":this._subtitleTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-card"]],contentQueries:function(i,n,o){if(i&1&&me(o,nn,5)(o,mt,5)(o,mi,4)(o,gi,4)(o,bi,4)(o,fi,4)(o,hi,4)(o,he,4),i&2){let a;h(a=_())&&(n.headerFacet=a.first),h(a=_())&&(n.footerFacet=a.first),h(a=_())&&(n.headerTemplate=a.first),h(a=_())&&(n.titleTemplate=a.first),h(a=_())&&(n.subtitleTemplate=a.first),h(a=_())&&(n.contentTemplate=a.first),h(a=_())&&(n.footerTemplate=a.first),h(a=_())&&(n.templates=a)}},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[W([Cn]),v],ngContentSelectors:yi,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[4,"ngIf"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(i,n){i&1&&(ee(_i),c(0,"div",0),u(1,Ci,3,1,"div",1),c(2,"div",2),u(3,Ti,3,2,"div",3)(4,Si,3,2,"div",4),c(5,"div",5),O(6),u(7,Ei,1,0,"ng-container",6),p(),u(8,Di,3,1,"div",7),p()()),i&2&&(T(n.styleClass),l("ngClass","p-card p-component")("ngStyle",n._style()),g("data-pc-name","card"),s(),l("ngIf",n.headerFacet||n.headerTemplate||n._headerTemplate),s(2),l("ngIf",n.header||n.titleTemplate||n._titleTemplate),s(),l("ngIf",n.subheader||n.subtitleTemplate||n._subtitleTemplate),s(3),l("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),s(),l("ngIf",n.footerFacet||n.footerTemplate||n._footerTemplate))},dependencies:[q,pe,Ce,be,ge,k],encapsulation:2,changeDetection:0})}return t})(),xn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=Z({imports:[Dt,k,k]})}return t})();var ft=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,i){e&&i&&(e.classList?e.classList.add(i):e.className+=" "+i)}static addMultipleClasses(e,i){if(e&&i)if(e.classList){let n=i.trim().split(" ");for(let o=0;o<n.length;o++)e.classList.add(n[o])}else{let n=i.split(" ");for(let o=0;o<n.length;o++)e.className+=" "+n[o]}}static removeClass(e,i){e&&i&&(e.classList?e.classList.remove(i):e.className=e.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,i){e&&i&&[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(o=>this.removeClass(e,o)))}static hasClass(e,i){return e&&i?e.classList?e.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(i){return i!==e})}static find(e,i){return Array.from(e.querySelectorAll(i))}static findSingle(e,i){return this.isElement(e)?e.querySelector(i):null}static index(e){let i=e.parentNode.childNodes,n=0;for(var o=0;o<i.length;o++){if(i[o]==e)return n;i[o].nodeType==1&&n++}return-1}static indexWithinGroup(e,i){let n=e.parentNode?e.parentNode.childNodes:[],o=0;for(var a=0;a<n.length;a++){if(n[a]==e)return o;n[a].attributes&&n[a].attributes[i]&&n[a].nodeType==1&&o++}return-1}static appendOverlay(e,i,n="self"){n!=="self"&&e&&i&&this.appendChild(e,i)}static alignOverlay(e,i,n="self",o=!0){e&&i&&(o&&(e.style.minWidth=`${t.getOuterWidth(i)}px`),n==="self"?this.relativePosition(e,i):this.absolutePosition(e,i))}static relativePosition(e,i,n=!0){let o=nt=>{if(nt)return getComputedStyle(nt).getPropertyValue("position")==="relative"?nt:o(nt.parentElement)},a=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),m=i.offsetHeight,C=i.getBoundingClientRect(),D=this.getWindowScrollTop(),$=this.getWindowScrollLeft(),S=this.getViewport(),F=o(e)?.getBoundingClientRect()||{top:-1*D,left:-1*$},le,_e;C.top+m+a.height>S.height?(le=C.top-F.top-a.height,e.style.transformOrigin="bottom",C.top+le<0&&(le=-1*C.top)):(le=m+C.top-F.top,e.style.transformOrigin="top");let Lt=C.left+a.width-S.width,Bn=C.left-F.left;a.width>S.width?_e=(C.left-F.left)*-1:Lt>0?_e=Bn-Lt:_e=C.left-F.left,e.style.top=le+"px",e.style.left=_e+"px",n&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,i,n=!0){let o=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=o.height,m=o.width,C=i.offsetHeight,D=i.offsetWidth,$=i.getBoundingClientRect(),S=this.getWindowScrollTop(),L=this.getWindowScrollLeft(),F=this.getViewport(),le,_e;$.top+C+a>F.height?(le=$.top+S-a,e.style.transformOrigin="bottom",le<0&&(le=S)):(le=C+$.top+S,e.style.transformOrigin="top"),$.left+m>F.width?_e=Math.max(0,$.left+L+D-m):_e=$.left+L,e.style.top=le+"px",e.style.left=_e+"px",n&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,i=[]){return e.parentNode===null?i:this.getParents(e.parentNode,i.concat([e.parentNode]))}static getScrollableParents(e){let i=[];if(e){let n=this.getParents(e),o=/(auto|scroll)/,a=m=>{let C=window.getComputedStyle(m,null);return o.test(C.getPropertyValue("overflow"))||o.test(C.getPropertyValue("overflowX"))||o.test(C.getPropertyValue("overflowY"))};for(let m of n){let C=m.nodeType===1&&m.dataset.scrollselectors;if(C){let D=C.split(",");for(let $ of D){let S=this.findSingle(m,$);S&&a(S)&&i.push(S)}}m.nodeType!==9&&a(m)&&i.push(m)}}return i}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let i=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",i}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let i=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",i}static getHiddenElementDimensions(e){let i={};return e.style.visibility="hidden",e.style.display="block",i.width=e.offsetWidth,i.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",i}static scrollInView(e,i){let n=getComputedStyle(e).getPropertyValue("borderTopWidth"),o=n?parseFloat(n):0,a=getComputedStyle(e).getPropertyValue("paddingTop"),m=a?parseFloat(a):0,C=e.getBoundingClientRect(),$=i.getBoundingClientRect().top+document.body.scrollTop-(C.top+document.body.scrollTop)-o-m,S=e.scrollTop,L=e.clientHeight,F=this.getOuterHeight(i);$<0?e.scrollTop=S+$:$+F>L&&(e.scrollTop=S+$-L+F)}static fadeIn(e,i){e.style.opacity=0;let n=+new Date,o=0,a=function(){o=+e.style.opacity.replace(",",".")+(new Date().getTime()-n)/i,e.style.opacity=o,n=+new Date,+o<1&&(window.requestAnimationFrame&&requestAnimationFrame(a)||setTimeout(a,16))};a()}static fadeOut(e,i){var n=1,o=50,a=i,m=o/a;let C=setInterval(()=>{n=n-m,n<=0&&(n=0,clearInterval(C)),e.style.opacity=n},o)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,i){var n=Element.prototype,o=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(a){return[].indexOf.call(document.querySelectorAll(a),this)!==-1};return o.call(e,i)}static getOuterWidth(e,i){let n=e.offsetWidth;if(i){let o=getComputedStyle(e);n+=parseFloat(o.marginLeft)+parseFloat(o.marginRight)}return n}static getHorizontalPadding(e){let i=getComputedStyle(e);return parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)}static getHorizontalMargin(e){let i=getComputedStyle(e);return parseFloat(i.marginLeft)+parseFloat(i.marginRight)}static innerWidth(e){let i=e.offsetWidth,n=getComputedStyle(e);return i+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),i}static width(e){let i=e.offsetWidth,n=getComputedStyle(e);return i-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),i}static getInnerHeight(e){let i=e.offsetHeight,n=getComputedStyle(e);return i+=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom),i}static getOuterHeight(e,i){let n=e.offsetHeight;if(i){let o=getComputedStyle(e);n+=parseFloat(o.marginTop)+parseFloat(o.marginBottom)}return n}static getHeight(e){let i=e.offsetHeight,n=getComputedStyle(e);return i-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),i}static getWidth(e){let i=e.offsetWidth,n=getComputedStyle(e);return i-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),i}static getViewport(){let e=window,i=document,n=i.documentElement,o=i.getElementsByTagName("body")[0],a=e.innerWidth||n.clientWidth||o.clientWidth,m=e.innerHeight||n.clientHeight||o.clientHeight;return{width:a,height:m}}static getOffset(e){var i=e.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,i){let n=e.parentNode;if(!n)throw"Can't replace element";return n.replaceChild(i,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,i=e.indexOf("MSIE ");if(i>0)return!0;var n=e.indexOf("Trident/");if(n>0){var o=e.indexOf("rv:");return!0}var a=e.indexOf("Edge/");return a>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,i){if(this.isElement(i))i.appendChild(e);else if(i&&i.el&&i.el.nativeElement)i.el.nativeElement.appendChild(e);else throw"Cannot append "+i+" to "+e}static removeChild(e,i){if(this.isElement(i))i.removeChild(e);else if(i.el&&i.el.nativeElement)i.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+i}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let i=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(i.borderLeftWidth)-parseFloat(i.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let i=document.createElement("div");i.className="p-scrollbar-measure",document.body.appendChild(i);let n=i.offsetWidth-i.clientWidth;return document.body.removeChild(i),this.calculatedScrollbarWidth=n,n}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let i=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=i,i}static invokeElementMethod(e,i,n){e[i].apply(e,n)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch(e){}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),i=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:i[1]||"",version:i[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,i){e&&document.activeElement!==e&&e.focus(i)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,i=""){let n=this.find(e,this.getFocusableSelectorString(i)),o=[];for(let a of n){let m=getComputedStyle(a);this.isVisible(a)&&m.display!="none"&&m.visibility!="hidden"&&o.push(a)}return o}static getFocusableElement(e,i=""){let n=this.findSingle(e,this.getFocusableSelectorString(i));if(n){let o=getComputedStyle(n);if(this.isVisible(n)&&o.display!="none"&&o.visibility!="hidden")return n}return null}static getFirstFocusableElement(e,i=""){let n=this.getFocusableElements(e,i);return n.length>0?n[0]:null}static getLastFocusableElement(e,i){let n=this.getFocusableElements(e,i);return n.length>0?n[n.length-1]:null}static getNextFocusableElement(e,i=!1){let n=t.getFocusableElements(e),o=0;if(n&&n.length>0){let a=n.indexOf(n[0].ownerDocument.activeElement);i?a==-1||a===0?o=n.length-1:o=a-1:a!=-1&&a!==n.length-1&&(o=a+1)}return n[o]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,i){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@parent":return i?.parentElement;case"@grandparent":return i?.parentElement.parentElement;default:let n=typeof e;if(n==="string")return document.querySelector(e);if(n==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let a=(m=>!!(m&&m.constructor&&m.call&&m.apply))(e)?e():e;return a&&a.nodeType===9||this.isExist(a)?a:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,i){if(e){let n=e.getAttribute(i);return isNaN(n)?n==="true"||n==="false"?n==="true":n:+n}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,i={},...n){if(e){let o=document.createElement(e);return this.setAttributes(o,i),o.append(...n),o}}static setAttribute(e,i="",n){this.isElement(e)&&n!==null&&n!==void 0&&e.setAttribute(i,n)}static setAttributes(e,i={}){if(this.isElement(e)){let n=(o,a)=>{let m=e?.$attrs?.[o]?[e?.$attrs?.[o]]:[];return[a].flat().reduce((C,D)=>{if(D!=null){let $=typeof D;if($==="string"||$==="number")C.push(D);else if($==="object"){let S=Array.isArray(D)?n(o,D):Object.entries(D).map(([L,F])=>o==="style"&&(F||F===0)?`${L.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${F}`:F?L:void 0);C=S.length?C.concat(S.filter(L=>!!L)):C}}return C},m)};Object.entries(i).forEach(([o,a])=>{if(a!=null){let m=o.match(/^on(.+)/);m?e.addEventListener(m[1].toLowerCase(),a):o==="pBind"?this.setAttributes(e,a):(a=o==="class"?[...new Set(n("class",a))].join(" ").trim():o==="style"?n("style",a).join(";").trim():a,(e.$attrs=e.$attrs||{})&&(e.$attrs[o]=a),e.setAttribute(o,a))}})}}static isFocusableElement(e,i=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`):!1}}return t})();var wn=(()=>{class t extends E{autofocus=!1;_autofocus=!1;focused=!1;platformId=f(Be);document=f(ze);host=f(Le);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){se(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=ft.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275dir=ue({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",y],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[v]})}return t})();var zi=({dt:t})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${t("badge.border.radius")};
    justify-content: center;
    padding: ${t("badge.padding")};
    background: ${t("badge.primary.background")};
    color: ${t("badge.primary.color")};
    font-size: ${t("badge.font.size")};
    font-weight: ${t("badge.font.weight")};
    min-width: ${t("badge.min.width")};
    height: ${t("badge.height")};
    line-height: ${t("badge.height")};
}

.p-badge-dot {
    width: ${t("badge.dot.size")};
    min-width: ${t("badge.dot.size")};
    height: ${t("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${t("badge.secondary.background")};
    color: ${t("badge.secondary.color")};
}

.p-badge-success {
    background: ${t("badge.success.background")};
    color: ${t("badge.success.color")};
}

.p-badge-info {
    background: ${t("badge.info.background")};
    color: ${t("badge.info.color")};
}

.p-badge-warn {
    background: ${t("badge.warn.background")};
    color: ${t("badge.warn.color")};
}

.p-badge-danger {
    background: ${t("badge.danger.background")};
    color: ${t("badge.danger.color")};
}

.p-badge-contrast {
    background: ${t("badge.contrast.background")};
    color: ${t("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${t("badge.sm.font.size")};
    min-width: ${t("badge.sm.min.width")};
    height: ${t("badge.sm.height")};
    line-height: ${t("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${t("badge.lg.font.size")};
    min-width: ${t("badge.lg.min.width")};
    height: ${t("badge.lg.height")};
    line-height: ${t("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${t("badge.xl.font.size")};
    min-width: ${t("badge.xl.min.width")};
    height: ${t("badge.xl.height")};
    line-height: ${t("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,Oi={root:({props:t,instance:r})=>["p-badge p-component",{"p-badge-circle":Tt(t.value)&&String(t.value).length===1,"p-badge-dot":Me(t.value)&&!r.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},Tn=(()=>{class t extends P{name="badge";theme=zi;classes=Oi;static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})();var Ft=(()=>{class t extends E{styleClass=oe();style=oe();badgeSize=oe();size=oe();severity=oe();value=oe();badgeDisabled=oe(!1,{transform:y});_componentStyle=f(Tn);containerClass=ie(()=>{let e="p-badge p-component";return Tt(this.value())&&String(this.value()).length===1&&(e+=" p-badge-circle"),this.badgeSize()==="large"?e+=" p-badge-lg":this.badgeSize()==="xlarge"?e+=" p-badge-xl":this.badgeSize()==="small"&&(e+=" p-badge-sm"),Me(this.value())&&(e+=" p-badge-dot"),this.styleClass()&&(e+=` ${this.styleClass()}`),this.severity()&&(e+=` p-badge-${this.severity()}`),e});static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-badge"]],hostVars:6,hostBindings:function(i,n){i&2&&(Qe(n.style()),T(n.containerClass()),st("display",n.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[W([Tn]),v],decls:1,vars:1,template:function(i,n){i&1&&I(0),i&2&&N(n.value())},dependencies:[q,k],encapsulation:2,changeDetection:0})}return t})(),In=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=Z({imports:[Ft,k,k]})}return t})();var Bi=["content"],Vi=["loadingicon"],Hi=["icon"],Ai=["*"],Sn=t=>({class:t});function Ri(t,r){t&1&&A(0)}function Ni(t,r){if(t&1&&w(0,"span",8),t&2){let e=d(3);l("ngClass",e.iconClass()),g("aria-hidden",!0)("data-pc-section","loadingicon")}}function Wi(t,r){if(t&1&&w(0,"SpinnerIcon",9),t&2){let e=d(3);l("styleClass",e.spinnerIconClass())("spin",!0),g("aria-hidden",!0)("data-pc-section","loadingicon")}}function ji(t,r){if(t&1&&(K(0),u(1,Ni,1,3,"span",6)(2,Wi,1,4,"SpinnerIcon",7),U()),t&2){let e=d(2);s(),l("ngIf",e.loadingIcon),s(),l("ngIf",!e.loadingIcon)}}function Qi(t,r){}function qi(t,r){if(t&1&&u(0,Qi,0,0,"ng-template",10),t&2){let e=d(2);l("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Zi(t,r){if(t&1&&(K(0),u(1,ji,3,2,"ng-container",2)(2,qi,1,1,null,5),U()),t&2){let e=d();s(),l("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),s(),l("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",re(3,Sn,e.iconClass()))}}function Yi(t,r){if(t&1&&w(0,"span",8),t&2){let e=d(2);T(e.icon),l("ngClass",e.iconClass()),g("data-pc-section","icon")}}function Gi(t,r){}function Xi(t,r){if(t&1&&u(0,Gi,0,0,"ng-template",10),t&2){let e=d(2);l("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function Ki(t,r){if(t&1&&(K(0),u(1,Yi,1,4,"span",11)(2,Xi,1,1,null,5),U()),t&2){let e=d();s(),l("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),s(),l("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",re(3,Sn,e.iconClass()))}}function Ui(t,r){if(t&1&&(c(0,"span",12),I(1),p()),t&2){let e=d();g("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),s(),N(e.label)}}function Ji(t,r){if(t&1&&w(0,"p-badge",13),t&2){let e=d();l("value",e.badge)("severity",e.badgeSeverity)}}var eo=({dt:t})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding-block: ${t("button.padding.y")};
    padding-inline: ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding-block: ${t("button.sm.padding.y")};
    padding-inline: ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${t("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${t("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding-block: ${t("button.lg.padding.y")};
    padding-inline: ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${t("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${t("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,to={root:({instance:t,props:r})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!r.label&&!r.badge,"p-button-vertical":(r.iconPos==="top"||r.iconPos==="bottom")&&r.label,"p-button-loading":r.loading,"p-button-link":r.link,[`p-button-${r.severity}`]:r.severity,"p-button-raised":r.raised,"p-button-rounded":r.rounded,"p-button-text":r.text,"p-button-outlined":r.outlined,"p-button-sm":r.size==="small","p-button-lg":r.size==="large","p-button-plain":r.plain,"p-button-fluid":r.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},kn=(()=>{class t extends P{name="button";theme=eo;classes=to;static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})();var tt=(()=>{class t extends E{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new J;onFocus=new J;onBlur=new J;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([i,n])=>this[`_${i}`]!==n&&(this[`_${i}`]=n))}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return Me(this.fluid)?!!i:this.fluid}_componentStyle=f(kn);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:i}=e;if(i){let n=i.currentValue;for(let o in n)this[o]=n[o]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[i])=>e+` ${i}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-button"]],contentQueries:function(i,n,o){if(i&1&&me(o,Bi,5)(o,Vi,5)(o,Hi,5)(o,he,4),i&2){let a;h(a=_())&&(n.contentTemplate=a.first),h(a=_())&&(n.loadingIconTemplate=a.first),h(a=_())&&(n.iconTemplate=a.first),h(a=_())&&(n.templates=a)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",y],loading:[2,"loading","loading",y],loadingIcon:"loadingIcon",raised:[2,"raised","raised",y],rounded:[2,"rounded","rounded",y],text:[2,"text","text",y],plain:[2,"plain","plain",y],severity:"severity",outlined:[2,"outlined","outlined",y],link:[2,"link","link",y],tabindex:[2,"tabindex","tabindex",ve],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",y],fluid:[2,"fluid","fluid",y],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[W([kn]),v,Se],ngContentSelectors:Ai,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(i,n){i&1&&(ee(),c(0,"button",0),R("click",function(a){return n.onClick.emit(a)})("focus",function(a){return n.onFocus.emit(a)})("blur",function(a){return n.onBlur.emit(a)}),O(1),u(2,Ri,1,0,"ng-container",1)(3,Zi,3,5,"ng-container",2)(4,Ki,3,5,"ng-container",2)(5,Ui,2,3,"span",3)(6,Ji,1,2,"p-badge",4),p()),i&2&&(l("ngStyle",n.style)("disabled",n.disabled||n.loading)("ngClass",n.buttonClass)("pAutoFocus",n.autofocus),g("type",n.type)("aria-label",n.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",n.tabindex),s(2),l("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),s(),l("ngIf",n.loading),s(),l("ngIf",!n.loading),s(),l("ngIf",!n.contentTemplate&&!n._contentTemplate&&n.label),s(),l("ngIf",!n.contentTemplate&&!n._contentTemplate&&n.badge))},dependencies:[q,pe,Ce,be,ge,Ue,wn,mn,In,Ft,k],encapsulation:2,changeDetection:0})}return t})(),En=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=Z({imports:[q,tt,k,k]})}return t})();var $n=(()=>{class t extends E{pFocusTrapDisabled=!1;platformId=f(Be);document=f(ze);firstHiddenFocusableElement;lastHiddenFocusableElement;ngOnInit(){super.ngOnInit(),se(this.platformId)&&!this.pFocusTrapDisabled&&!this.firstHiddenFocusableElement&&!this.lastHiddenFocusableElement&&this.createHiddenFocusableElements()}ngOnChanges(e){super.ngOnChanges(e),e.pFocusTrapDisabled&&se(this.platformId)&&(e.pFocusTrapDisabled.currentValue?this.removeHiddenFocusableElements():this.createHiddenFocusableElements())}removeHiddenFocusableElements(){this.firstHiddenFocusableElement&&this.firstHiddenFocusableElement.parentNode&&this.firstHiddenFocusableElement.parentNode.removeChild(this.firstHiddenFocusableElement),this.lastHiddenFocusableElement&&this.lastHiddenFocusableElement.parentNode&&this.lastHiddenFocusableElement.parentNode.removeChild(this.lastHiddenFocusableElement)}getComputedSelector(e){return`:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${e??""}`}createHiddenFocusableElements(){let i=n=>Xt("span",{class:"p-hidden-accessible p-hidden-focusable",tabindex:"0",role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:n?.bind(this)});this.firstHiddenFocusableElement=i(this.onFirstHiddenElementFocus),this.lastHiddenFocusableElement=i(this.onLastHiddenElementFocus),this.firstHiddenFocusableElement.setAttribute("data-pc-section","firstfocusableelement"),this.lastHiddenFocusableElement.setAttribute("data-pc-section","lastfocusableelement"),this.el.nativeElement.prepend(this.firstHiddenFocusableElement),this.el.nativeElement.append(this.lastHiddenFocusableElement)}onFirstHiddenElementFocus(e){let{currentTarget:i,relatedTarget:n}=e,o=n===this.lastHiddenFocusableElement||!this.el.nativeElement?.contains(n)?Kt(i.parentElement,":not(.p-hidden-focusable)"):this.lastHiddenFocusableElement;Ye(o)}onLastHiddenElementFocus(e){let{currentTarget:i,relatedTarget:n}=e,o=n===this.firstHiddenFocusableElement||!this.el.nativeElement?.contains(n)?Ut(i.parentElement,":not(.p-hidden-focusable)"):this.firstHiddenFocusableElement;Ye(o)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275dir=ue({type:t,selectors:[["","pFocusTrap",""]],inputs:{pFocusTrapDisabled:[2,"pFocusTrapDisabled","pFocusTrapDisabled",y]},features:[v,Se]})}return t})();function io(){let t=[],r=(o,a)=>{let m=t.length>0?t[t.length-1]:{key:o,value:a},C=m.value+(m.key===o?0:a)+2;return t.push({key:o,value:C}),C},e=o=>{t=t.filter(a=>a.value!==o)},i=()=>t.length>0?t[t.length-1].value:0,n=o=>o&&parseInt(o.style.zIndex,10)||0;return{get:n,set:(o,a,m)=>{a&&(a.style.zIndex=String(r(o,m)))},clear:o=>{o&&(e(n(o)),o.style.zIndex="")},getCurrent:()=>i(),generateZIndex:r,revertZIndex:e}}var Mt=io();var oo=["header"],Dn=["content"],Fn=["footer"],ao=["closeicon"],ro=["maximizeicon"],so=["minimizeicon"],lo=["headless"],co=["titlebar"],po=["*",[["p-footer"]]],uo=["*","p-footer"],mo=(t,r,e)=>({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex","justify-content":t,"align-items":r,"pointer-events":e}),go=t=>({"p-dialog p-component":!0,"p-dialog-maximized":t}),bo=()=>({display:"flex","flex-direction":"column","pointer-events":"auto"}),fo=(t,r)=>({transform:t,transition:r}),ho=t=>({value:"visible",params:t});function _o(t,r){t&1&&A(0)}function yo(t,r){if(t&1&&(K(0),u(1,_o,1,0,"ng-container",11),U()),t&2){let e=d(3);s(),l("ngTemplateOutlet",e._headlessTemplate||e.headlessTemplate||e.headlessT)}}function vo(t,r){if(t&1){let e=ne();c(0,"div",15),R("mousedown",function(n){j(e);let o=d(4);return Q(o.initResize(n))}),p()}if(t&2){let e=d(4);l("ngClass",e.cx("resizeHandle"))}}function Co(t,r){if(t&1&&(c(0,"span",21),I(1),p()),t&2){let e=d(5);l("id",e.ariaLabelledBy)("ngClass",e.cx("title")),s(),N(e.header)}}function xo(t,r){t&1&&A(0)}function wo(t,r){if(t&1&&w(0,"span",18),t&2){let e=d(6);l("ngClass",e.maximized?e.minimizeIcon:e.maximizeIcon)}}function To(t,r){t&1&&w(0,"WindowMaximizeIcon")}function Io(t,r){t&1&&w(0,"WindowMinimizeIcon")}function ko(t,r){if(t&1&&(K(0),u(1,To,1,0,"WindowMaximizeIcon",23)(2,Io,1,0,"WindowMinimizeIcon",23),U()),t&2){let e=d(6);s(),l("ngIf",!e.maximized&&!e._maximizeiconTemplate&&!e.maximizeIconTemplate&&!e.maximizeIconT),s(),l("ngIf",e.maximized&&!e._minimizeiconTemplate&&!e.minimizeIconTemplate&&!e.minimizeIconT)}}function So(t,r){}function Eo(t,r){t&1&&u(0,So,0,0,"ng-template")}function $o(t,r){if(t&1&&(K(0),u(1,Eo,1,0,null,11),U()),t&2){let e=d(6);s(),l("ngTemplateOutlet",e._maximizeiconTemplate||e.maximizeIconTemplate||e.maximizeIconT)}}function Do(t,r){}function Fo(t,r){t&1&&u(0,Do,0,0,"ng-template")}function Mo(t,r){if(t&1&&(K(0),u(1,Fo,1,0,null,11),U()),t&2){let e=d(6);s(),l("ngTemplateOutlet",e._minimizeiconTemplate||e.minimizeIconTemplate||e.minimizeIconT)}}function Po(t,r){if(t&1){let e=ne();c(0,"p-button",22),R("onClick",function(){j(e);let n=d(5);return Q(n.maximize())})("keydown.enter",function(){j(e);let n=d(5);return Q(n.maximize())}),u(1,wo,1,1,"span",14)(2,ko,3,2,"ng-container",23)(3,$o,2,1,"ng-container",23)(4,Mo,2,1,"ng-container",23),p()}if(t&2){let e=d(5);l("styleClass",e.cx("pcMaximizeButton"))("tabindex",e.maximizable?"0":"-1")("ariaLabel",e.maximizeLabel)("buttonProps",e.maximizeButtonProps),s(),l("ngIf",e.maximizeIcon&&!e._maximizeiconTemplate&&!e._minimizeiconTemplate),s(),l("ngIf",!e.maximizeIcon&&!(e.maximizeButtonProps!=null&&e.maximizeButtonProps.icon)),s(),l("ngIf",!e.maximized),s(),l("ngIf",e.maximized)}}function zo(t,r){if(t&1&&w(0,"span",18),t&2){let e=d(8);l("ngClass",e.closeIcon)}}function Oo(t,r){t&1&&w(0,"TimesIcon")}function Lo(t,r){if(t&1&&(K(0),u(1,zo,1,1,"span",14)(2,Oo,1,0,"TimesIcon",23),U()),t&2){let e=d(7);s(),l("ngIf",e.closeIcon),s(),l("ngIf",!e.closeIcon)}}function Bo(t,r){}function Vo(t,r){t&1&&u(0,Bo,0,0,"ng-template")}function Ho(t,r){if(t&1&&(c(0,"span"),u(1,Vo,1,0,null,11),p()),t&2){let e=d(7);s(),l("ngTemplateOutlet",e._closeiconTemplate||e.closeIconTemplate||e.closeIconT)}}function Ao(t,r){if(t&1&&u(0,Lo,3,2,"ng-container",23)(1,Ho,2,1,"span",23),t&2){let e=d(6);l("ngIf",!e._closeiconTemplate&&!e.closeIconTemplate&&!e.closeIconT&&!(e.closeButtonProps!=null&&e.closeButtonProps.icon)),s(),l("ngIf",e._closeiconTemplate||e.closeIconTemplate||e.closeIconT)}}function Ro(t,r){if(t&1){let e=ne();c(0,"p-button",24),R("onClick",function(n){j(e);let o=d(5);return Q(o.close(n))})("keydown.enter",function(n){j(e);let o=d(5);return Q(o.close(n))}),u(1,Ao,2,2,"ng-template",null,4,De),p()}if(t&2){let e=d(5);l("styleClass",e.cx("pcCloseButton"))("ariaLabel",e.closeAriaLabel)("tabindex",e.closeTabindex)("buttonProps",e.closeButtonProps)}}function No(t,r){if(t&1){let e=ne();c(0,"div",16,3),R("mousedown",function(n){j(e);let o=d(4);return Q(o.initDrag(n))}),u(2,Co,2,3,"span",17)(3,xo,1,0,"ng-container",11),c(4,"div",18),u(5,Po,5,8,"p-button",19)(6,Ro,3,4,"p-button",20),p()()}if(t&2){let e=d(4);l("ngClass",e.cx("header")),s(2),l("ngIf",!e._headerTemplate&&!e.headerTemplate&&!e.headerT),s(),l("ngTemplateOutlet",e._headerTemplate||e.headerTemplate||e.headerT),s(),l("ngClass",e.cx("headerActions")),s(),l("ngIf",e.maximizable),s(),l("ngIf",e.closable)}}function Wo(t,r){t&1&&A(0)}function jo(t,r){t&1&&A(0)}function Qo(t,r){if(t&1&&(c(0,"div",18,5),O(2,1),u(3,jo,1,0,"ng-container",11),p()),t&2){let e=d(4);l("ngClass",e.cx("footer")),s(3),l("ngTemplateOutlet",e._footerTemplate||e.footerTemplate||e.footerT)}}function qo(t,r){if(t&1&&(u(0,vo,1,1,"div",12)(1,No,7,6,"div",13),c(2,"div",7,2),O(4),u(5,Wo,1,0,"ng-container",11),p(),u(6,Qo,4,2,"div",14)),t&2){let e=d(3);l("ngIf",e.resizable),s(),l("ngIf",e.showHeader),s(),T(e.contentStyleClass),l("ngClass",e.cx("content"))("ngStyle",e.contentStyle),g("data-pc-section","content"),s(3),l("ngTemplateOutlet",e._contentTemplate||e.contentTemplate||e.contentT),s(),l("ngIf",e._footerTemplate||e.footerTemplate||e.footerT)}}function Zo(t,r){if(t&1){let e=ne();c(0,"div",9,0),R("@animation.start",function(n){j(e);let o=d(2);return Q(o.onAnimationStart(n))})("@animation.done",function(n){j(e);let o=d(2);return Q(o.onAnimationEnd(n))}),u(2,yo,2,1,"ng-container",10)(3,qo,7,9,"ng-template",null,1,De),p()}if(t&2){let e=At(4),i=d(2);Qe(i.style),T(i.styleClass),l("ngClass",re(13,go,i.maximizable&&i.maximized))("ngStyle",Qt(15,bo))("pFocusTrapDisabled",i.focusTrap===!1)("@animation",re(19,ho,lt(16,fo,i.transformOptions,i.transitionOptions))),g("role",i.role)("aria-labelledby",i.ariaLabelledBy)("aria-modal",!0),s(2),l("ngIf",i._headlessTemplate||i.headlessTemplate||i.headlessT)("ngIfElse",e)}}function Yo(t,r){if(t&1&&(c(0,"div",7),u(1,Zo,5,21,"div",8),p()),t&2){let e=d();Qe(e.maskStyle),T(e.maskStyleClass),l("ngClass",e.maskClass)("ngStyle",ct(7,mo,e.position==="left"||e.position==="topleft"||e.position==="bottomleft"?"flex-start":e.position==="right"||e.position==="topright"||e.position==="bottomright"?"flex-end":"center",e.position==="top"||e.position==="topleft"||e.position==="topright"?"flex-start":e.position==="bottom"||e.position==="bottomleft"||e.position==="bottomright"?"flex-end":"center",e.modal?"auto":"none")),s(),l("ngIf",e.visible)}}var Go=({dt:t})=>`
.p-dialog {
    max-height: 90%;
    transform: scale(1);
    border-radius: ${t("dialog.border.radius")};
    box-shadow: ${t("dialog.shadow")};
    background: ${t("dialog.background")};
    border: 1px solid ${t("dialog.border.color")};
    color: ${t("dialog.color")};
    display: flex;
    flex-direction: column;
    pointer-events: auto
}

.p-dialog-content {
    overflow-y: auto;
    padding: ${t("dialog.content.padding")};
    flex-grow: 1;
}

.p-dialog-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: ${t("dialog.header.padding")};
}

.p-dialog-title {
    font-weight: ${t("dialog.title.font.weight")};
    font-size: ${t("dialog.title.font.size")};
}

.p-dialog-footer {
    flex-shrink: 0;
    padding: ${t("dialog.footer.padding")};
    display: flex;
    justify-content: flex-end;
    gap: ${t("dialog.footer.gap")};
}

.p-dialog-header-actions {
    display: flex;
    align-items: center;
    gap: ${t("dialog.header.gap")};
}

.p-dialog-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-dialog-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-dialog-enter-from,
.p-dialog-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.p-dialog-top .p-dialog,
.p-dialog-bottom .p-dialog,
.p-dialog-left .p-dialog,
.p-dialog-right .p-dialog,
.p-dialog-topleft .p-dialog,
.p-dialog-topright .p-dialog,
.p-dialog-bottomleft .p-dialog,
.p-dialog-bottomright .p-dialog {
    margin: 0.75rem;
    transform: translate3d(0px, 0px, 0px);
}

.p-dialog-top .p-dialog-enter-active,
.p-dialog-top .p-dialog-leave-active,
.p-dialog-bottom .p-dialog-enter-active,
.p-dialog-bottom .p-dialog-leave-active,
.p-dialog-left .p-dialog-enter-active,
.p-dialog-left .p-dialog-leave-active,
.p-dialog-right .p-dialog-enter-active,
.p-dialog-right .p-dialog-leave-active,
.p-dialog-topleft .p-dialog-enter-active,
.p-dialog-topleft .p-dialog-leave-active,
.p-dialog-topright .p-dialog-enter-active,
.p-dialog-topright .p-dialog-leave-active,
.p-dialog-bottomleft .p-dialog-enter-active,
.p-dialog-bottomleft .p-dialog-leave-active,
.p-dialog-bottomright .p-dialog-enter-active,
.p-dialog-bottomright .p-dialog-leave-active {
    transition: all 0.3s ease-out;
}

.p-dialog-top .p-dialog-enter-from,
.p-dialog-top .p-dialog-leave-to {
    transform: translate3d(0px, -100%, 0px);
}

.p-dialog-bottom .p-dialog-enter-from,
.p-dialog-bottom .p-dialog-leave-to {
    transform: translate3d(0px, 100%, 0px);
}

.p-dialog-left .p-dialog-enter-from,
.p-dialog-left .p-dialog-leave-to,
.p-dialog-topleft .p-dialog-enter-from,
.p-dialog-topleft .p-dialog-leave-to,
.p-dialog-bottomleft .p-dialog-enter-from,
.p-dialog-bottomleft .p-dialog-leave-to {
    transform: translate3d(-100%, 0px, 0px);
}

.p-dialog-right .p-dialog-enter-from,
.p-dialog-right .p-dialog-leave-to,
.p-dialog-topright .p-dialog-enter-from,
.p-dialog-topright .p-dialog-leave-to,
.p-dialog-bottomright .p-dialog-enter-from,
.p-dialog-bottomright .p-dialog-leave-to {
    transform: translate3d(100%, 0px, 0px);
}

.p-dialog-left:dir(rtl) .p-dialog-enter-from,
.p-dialog-left:dir(rtl) .p-dialog-leave-to,
.p-dialog-topleft:dir(rtl) .p-dialog-enter-from,
.p-dialog-topleft:dir(rtl) .p-dialog-leave-to,
.p-dialog-bottomleft:dir(rtl) .p-dialog-enter-from,
.p-dialog-bottomleft:dir(rtl) .p-dialog-leave-to {
    transform: translate3d(100%, 0px, 0px);
}

.p-dialog-right:dir(rtl) .p-dialog-enter-from,
.p-dialog-right:dir(rtl) .p-dialog-leave-to,
.p-dialog-topright:dir(rtl) .p-dialog-enter-from,
.p-dialog-topright:dir(rtl) .p-dialog-leave-to,
.p-dialog-bottomright:dir(rtl) .p-dialog-enter-from,
.p-dialog-bottomright:dir(rtl) .p-dialog-leave-to {
    transform: translate3d(-100%, 0px, 0px);
}

.p-dialog-maximized {
    width: 100vw !important;
    height: 100vh !important;
    top: 0px !important;
    left: 0px !important;
    max-height: 100%;
    height: 100%;
    border-radius: 0;
}

.p-dialog-maximized .p-dialog-content {
    flex-grow: 1;
}

.p-overlay-mask:dir(rtl) {
    flex-direction: row-reverse;
}

/* For PrimeNG */

.p-dialog .p-resizable-handle {
    position: absolute;
    font-size: 0.1px;
    display: block;
    cursor: se-resize;
    width: 12px;
    height: 12px;
    right: 1px;
    bottom: 1px;
}

.p-confirm-dialog .p-dialog-content {
    display: flex;
    align-items: center;
}
`,Xo={mask:({instance:t})=>({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:t.position==="left"||t.position==="topleft"||t.position==="bottomleft"?"flex-start":t.position==="right"||t.position==="topright"||t.position==="bottomright"?"flex-end":"center",alignItems:t.position==="top"||t.position==="topleft"||t.position==="topright"?"flex-start":t.position==="bottom"||t.position==="bottomleft"||t.position==="bottomright"?"flex-end":"center",pointerEvents:t.modal?"auto":"none"}),root:{display:"flex",flexDirection:"column",pointerEvents:"auto"}},Ko={mask:({instance:t})=>{let e=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(i=>i===t.position);return{"p-dialog-mask":!0,"p-overlay-mask p-overlay-mask-enter":t.modal,[`p-dialog-${e}`]:e}},root:({instance:t})=>({"p-dialog p-component":!0,"p-dialog-maximized":t.maximizable&&t.maximized}),header:"p-dialog-header",title:"p-dialog-title",resizeHandle:"p-resizable-handle",headerActions:"p-dialog-header-actions",pcMaximizeButton:"p-dialog-maximize-button",pcCloseButton:"p-dialog-close-button",content:"p-dialog-content",footer:"p-dialog-footer"},Mn=(()=>{class t extends P{name="dialog";theme=Go;classes=Ko;inlineStyles=Xo;static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})();var Uo=pt([we({transform:"{{transform}}",opacity:0}),xe("{{transition}}")]),Jo=pt([xe("{{transition}}",we({transform:"{{transform}}",opacity:0}))]),Pt=(()=>{class t extends E{header;draggable=!0;resizable=!0;get positionLeft(){return 0}set positionLeft(e){console.log("positionLeft property is deprecated.")}get positionTop(){return 0}set positionTop(e){console.log("positionTop property is deprecated.")}contentStyle;contentStyleClass;modal=!1;closeOnEscape=!0;dismissableMask=!1;rtl=!1;closable=!0;get responsive(){return!1}set responsive(e){console.log("Responsive property is deprecated.")}appendTo;breakpoints;styleClass;maskStyleClass;maskStyle;showHeader=!0;get breakpoint(){return 649}set breakpoint(e){console.log("Breakpoint property is not utilized and deprecated, use breakpoints or CSS media queries instead.")}blockScroll=!1;autoZIndex=!0;baseZIndex=0;minX=0;minY=0;focusOnShow=!0;maximizable=!1;keepInViewport=!0;focusTrap=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";closeIcon;closeAriaLabel;closeTabindex="0";minimizeIcon;maximizeIcon;closeButtonProps={severity:"secondary",text:!0,rounded:!0};maximizeButtonProps={severity:"secondary",text:!0,rounded:!0};get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.maskVisible&&(this.maskVisible=!0)}get style(){return this._style}set style(e){e&&(this._style=ae({},e),this.originalStyle=e)}get position(){return this._position}set position(e){switch(this._position=e,e){case"topleft":case"bottomleft":case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"topright":case"bottomright":case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break;default:this.transformOptions="scale(0.7)";break}}role="dialog";onShow=new J;onHide=new J;visibleChange=new J;onResizeInit=new J;onResizeEnd=new J;onDragEnd=new J;onMaximize=new J;headerViewChild;contentViewChild;footerViewChild;headerTemplate;contentTemplate;footerTemplate;closeIconTemplate;maximizeIconTemplate;minimizeIconTemplate;headlessTemplate;_headerTemplate;_contentTemplate;_footerTemplate;_closeiconTemplate;_maximizeiconTemplate;_minimizeiconTemplate;_headlessTemplate;_visible=!1;maskVisible;container;wrapper;dragging;ariaLabelledBy=this.getAriaLabelledBy();documentDragListener;documentDragEndListener;resizing;documentResizeListener;documentResizeEndListener;documentEscapeListener;maskClickListener;lastPageX;lastPageY;preventVisibleChangePropagation;maximized;preMaximizeContentHeight;preMaximizeContainerWidth;preMaximizeContainerHeight;preMaximizePageX;preMaximizePageY;id=X("pn_id_");_style={};_position="center";originalStyle;transformOptions="scale(0.7)";styleElement;window;_componentStyle=f(Mn);headerT;contentT;footerT;closeIconT;maximizeIconT;minimizeIconT;headlessT;get maximizeLabel(){return this.config.getTranslation(on.ARIA).maximizeLabel}zone=f(it);get maskClass(){let i=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(n=>n===this.position);return{"p-dialog-mask":!0,"p-overlay-mask p-overlay-mask-enter":this.modal||this.dismissableMask,[`p-dialog-${i}`]:i}}ngOnInit(){super.ngOnInit(),this.breakpoints&&this.createStyle()}templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"header":this.headerT=e.template;break;case"content":this.contentT=e.template;break;case"footer":this.footerT=e.template;break;case"closeicon":this.closeIconT=e.template;break;case"maximizeicon":this.maximizeIconT=e.template;break;case"minimizeicon":this.minimizeIconT=e.template;break;case"headless":this.headlessT=e.template;break;default:this.contentT=e.template;break}})}getAriaLabelledBy(){return this.header!==null?X("pn_id_")+"_header":null}parseDurationToMilliseconds(e){let i=/([\d\.]+)(ms|s)\b/g,n=0,o;for(;(o=i.exec(e))!==null;){let a=parseFloat(o[1]),m=o[2];m==="ms"?n+=a:m==="s"&&(n+=a*1e3)}if(n!==0)return n}_focus(e){if(e){let i=this.parseDurationToMilliseconds(this.transitionOptions),n=ft.getFocusableElements(e);if(n&&n.length>0)return this.zone.runOutsideAngular(()=>{setTimeout(()=>n[0].focus(),i||5)}),!0}return!1}focus(e){let i=this._focus(e);i||(i=this._focus(this.footerViewChild?.nativeElement),i||(i=this._focus(this.headerViewChild?.nativeElement),i||this._focus(this.contentViewChild?.nativeElement)))}close(e){this.visibleChange.emit(!1),e.preventDefault()}enableModality(){this.closable&&this.dismissableMask&&(this.maskClickListener=this.renderer.listen(this.wrapper,"mousedown",e=>{this.wrapper&&this.wrapper.isSameNode(e.target)&&this.close(e)})),this.modal&&_t()}disableModality(){if(this.wrapper){this.dismissableMask&&this.unbindMaskClickListener();let e=document.querySelectorAll(".p-dialog-mask-scrollblocker");this.modal&&e&&e.length==1&&yt(),this.cd.destroyed||this.cd.detectChanges()}}maximize(){this.maximized=!this.maximized,!this.modal&&!this.blockScroll&&(this.maximized?_t():yt()),this.onMaximize.emit({maximized:this.maximized})}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}moveOnTop(){this.autoZIndex&&(Mt.set("modal",this.container,this.baseZIndex+this.config.zIndex.modal),this.wrapper.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1))}createStyle(){if(se(this.platformId)&&!this.styleElement){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",this.renderer.appendChild(this.document.head,this.styleElement);let e="";for(let i in this.breakpoints)e+=`
                        @media screen and (max-width: ${i}) {
                            .p-dialog[${this.id}]:not(.p-dialog-maximized) {
                                width: ${this.breakpoints[i]} !important;
                            }
                        }
                    `;this.renderer.setProperty(this.styleElement,"innerHTML",e),en(this.styleElement,"nonce",this.config?.csp()?.nonce)}}initDrag(e){He(e.target,"p-dialog-maximize-icon")||He(e.target,"p-dialog-header-close-icon")||He(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",Ie(this.document.body,"p-unselectable-text"))}onDrag(e){if(this.dragging){let i=Fe(this.container),n=Ae(this.container),o=e.pageX-this.lastPageX,a=e.pageY-this.lastPageY,m=this.container.getBoundingClientRect(),C=getComputedStyle(this.container),D=parseFloat(C.marginLeft),$=parseFloat(C.marginTop),S=m.left+o-D,L=m.top+a-$,F=vt();this.container.style.position="fixed",this.keepInViewport?(S>=this.minX&&S+i<F.width&&(this._style.left=`${S}px`,this.lastPageX=e.pageX,this.container.style.left=`${S}px`),L>=this.minY&&L+n<F.height&&(this._style.top=`${L}px`,this.lastPageY=e.pageY,this.container.style.top=`${L}px`)):(this.lastPageX=e.pageX,this.container.style.left=`${S}px`,this.lastPageY=e.pageY,this.container.style.top=`${L}px`)}}endDrag(e){this.dragging&&(this.dragging=!1,fe(this.document.body,"p-unselectable-text"),this.cd.detectChanges(),this.onDragEnd.emit(e))}resetPosition(){this.container.style.position="",this.container.style.left="",this.container.style.top="",this.container.style.margin=""}center(){this.resetPosition()}initResize(e){this.resizable&&(this.resizing=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,Ie(this.document.body,"p-unselectable-text"),this.onResizeInit.emit(e))}onResize(e){if(this.resizing){let i=e.pageX-this.lastPageX,n=e.pageY-this.lastPageY,o=Fe(this.container),a=Ae(this.container),m=Ae(this.contentViewChild?.nativeElement),C=o+i,D=a+n,$=this.container.style.minWidth,S=this.container.style.minHeight,L=this.container.getBoundingClientRect(),F=vt();(!parseInt(this.container.style.top)||!parseInt(this.container.style.left))&&(C+=i,D+=n),(!$||C>parseInt($))&&L.left+C<F.width&&(this._style.width=C+"px",this.container.style.width=this._style.width),(!S||D>parseInt(S))&&L.top+D<F.height&&(this.contentViewChild.nativeElement.style.height=m+D-a+"px",this._style.height&&(this._style.height=D+"px",this.container.style.height=this._style.height)),this.lastPageX=e.pageX,this.lastPageY=e.pageY}}resizeEnd(e){this.resizing&&(this.resizing=!1,fe(this.document.body,"p-unselectable-text"),this.onResizeEnd.emit(e))}bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.resizable&&this.bindDocumentResizeListeners(),this.closeOnEscape&&this.closable&&this.bindDocumentEscapeListener()}unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentResizeListeners(),this.unbindDocumentEscapeListener()}bindDocumentDragListener(){this.documentDragListener||this.zone.runOutsideAngular(()=>{this.documentDragListener=this.renderer.listen(this.document.defaultView,"mousemove",this.onDrag.bind(this))})}unbindDocumentDragListener(){this.documentDragListener&&(this.documentDragListener(),this.documentDragListener=null)}bindDocumentDragEndListener(){this.documentDragEndListener||this.zone.runOutsideAngular(()=>{this.documentDragEndListener=this.renderer.listen(this.document.defaultView,"mouseup",this.endDrag.bind(this))})}unbindDocumentDragEndListener(){this.documentDragEndListener&&(this.documentDragEndListener(),this.documentDragEndListener=null)}bindDocumentResizeListeners(){!this.documentResizeListener&&!this.documentResizeEndListener&&this.zone.runOutsideAngular(()=>{this.documentResizeListener=this.renderer.listen(this.document.defaultView,"mousemove",this.onResize.bind(this)),this.documentResizeEndListener=this.renderer.listen(this.document.defaultView,"mouseup",this.resizeEnd.bind(this))})}unbindDocumentResizeListeners(){this.documentResizeListener&&this.documentResizeEndListener&&(this.documentResizeListener(),this.documentResizeEndListener(),this.documentResizeListener=null,this.documentResizeEndListener=null)}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentEscapeListener=this.renderer.listen(e,"keydown",i=>{i.key=="Escape"&&this.close(i)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.wrapper):Gt(this.appendTo,this.wrapper))}restoreAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.wrapper)}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.wrapper=this.container?.parentElement,this.appendContainer(),this.moveOnTop(),this.bindGlobalListeners(),this.container?.setAttribute(this.id,""),this.modal&&this.enableModality(),this.focusOnShow&&this.focus();break;case"void":this.wrapper&&this.modal&&Ie(this.wrapper,"p-overlay-mask-leave");break}}onAnimationEnd(e){switch(e.toState){case"void":this.onContainerDestroy(),this.onHide.emit({}),this.cd.markForCheck(),this.maskVisible!==this.visible&&(this.maskVisible=this.visible);break;case"visible":this.onShow.emit({});break}}onContainerDestroy(){this.unbindGlobalListeners(),this.dragging=!1,this.maskVisible=!1,this.maximized&&(this.document.body.style.removeProperty("--scrollbar;-width"),this.maximized=!1),this.modal&&this.disableModality(),He(this.document.body,"p-overflow-hidden")&&fe(this.document.body,"p-overflow-hidden"),this.container&&this.autoZIndex&&Mt.clear(this.container),this.container=null,this.wrapper=null,this._style=this.originalStyle?ae({},this.originalStyle):{}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}ngOnDestroy(){this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.destroyStyle(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-dialog"]],contentQueries:function(i,n,o){if(i&1&&me(o,oo,4)(o,Dn,4)(o,Fn,4)(o,ao,4)(o,ro,4)(o,so,4)(o,lo,4)(o,he,4),i&2){let a;h(a=_())&&(n._headerTemplate=a.first),h(a=_())&&(n._contentTemplate=a.first),h(a=_())&&(n._footerTemplate=a.first),h(a=_())&&(n._closeiconTemplate=a.first),h(a=_())&&(n._maximizeiconTemplate=a.first),h(a=_())&&(n._minimizeiconTemplate=a.first),h(a=_())&&(n._headlessTemplate=a.first),h(a=_())&&(n.templates=a)}},viewQuery:function(i,n){if(i&1&&Ve(co,5)(Dn,5)(Fn,5),i&2){let o;h(o=_())&&(n.headerViewChild=o.first),h(o=_())&&(n.contentViewChild=o.first),h(o=_())&&(n.footerViewChild=o.first)}},inputs:{header:"header",draggable:[2,"draggable","draggable",y],resizable:[2,"resizable","resizable",y],positionLeft:"positionLeft",positionTop:"positionTop",contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",modal:[2,"modal","modal",y],closeOnEscape:[2,"closeOnEscape","closeOnEscape",y],dismissableMask:[2,"dismissableMask","dismissableMask",y],rtl:[2,"rtl","rtl",y],closable:[2,"closable","closable",y],responsive:"responsive",appendTo:"appendTo",breakpoints:"breakpoints",styleClass:"styleClass",maskStyleClass:"maskStyleClass",maskStyle:"maskStyle",showHeader:[2,"showHeader","showHeader",y],breakpoint:"breakpoint",blockScroll:[2,"blockScroll","blockScroll",y],autoZIndex:[2,"autoZIndex","autoZIndex",y],baseZIndex:[2,"baseZIndex","baseZIndex",ve],minX:[2,"minX","minX",ve],minY:[2,"minY","minY",ve],focusOnShow:[2,"focusOnShow","focusOnShow",y],maximizable:[2,"maximizable","maximizable",y],keepInViewport:[2,"keepInViewport","keepInViewport",y],focusTrap:[2,"focusTrap","focusTrap",y],transitionOptions:"transitionOptions",closeIcon:"closeIcon",closeAriaLabel:"closeAriaLabel",closeTabindex:"closeTabindex",minimizeIcon:"minimizeIcon",maximizeIcon:"maximizeIcon",closeButtonProps:"closeButtonProps",maximizeButtonProps:"maximizeButtonProps",visible:"visible",style:"style",position:"position",role:"role",headerTemplate:[0,"content","headerTemplate"],contentTemplate:"contentTemplate",footerTemplate:"footerTemplate",closeIconTemplate:"closeIconTemplate",maximizeIconTemplate:"maximizeIconTemplate",minimizeIconTemplate:"minimizeIconTemplate",headlessTemplate:"headlessTemplate"},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange",onResizeInit:"onResizeInit",onResizeEnd:"onResizeEnd",onDragEnd:"onDragEnd",onMaximize:"onMaximize"},features:[W([Mn]),v],ngContentSelectors:uo,decls:1,vars:1,consts:[["container",""],["notHeadless",""],["content",""],["titlebar",""],["icon",""],["footer",""],[3,"ngClass","class","ngStyle","style",4,"ngIf"],[3,"ngClass","ngStyle"],["pFocusTrap","",3,"class","ngClass","ngStyle","style","pFocusTrapDisabled",4,"ngIf"],["pFocusTrap","",3,"ngClass","ngStyle","pFocusTrapDisabled"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],["style","z-index: 90;",3,"ngClass","mousedown",4,"ngIf"],[3,"ngClass","mousedown",4,"ngIf"],[3,"ngClass",4,"ngIf"],[2,"z-index","90",3,"mousedown","ngClass"],[3,"mousedown","ngClass"],[3,"id","ngClass",4,"ngIf"],[3,"ngClass"],[3,"styleClass","tabindex","ariaLabel","buttonProps","onClick","keydown.enter",4,"ngIf"],[3,"styleClass","ariaLabel","tabindex","buttonProps","onClick","keydown.enter",4,"ngIf"],[3,"id","ngClass"],[3,"onClick","keydown.enter","styleClass","tabindex","ariaLabel","buttonProps"],[4,"ngIf"],[3,"onClick","keydown.enter","styleClass","ariaLabel","tabindex","buttonProps"]],template:function(i,n){i&1&&(ee(po),u(0,Yo,2,11,"div",6)),i&2&&l("ngIf",n.maskVisible)},dependencies:[q,pe,Ce,be,ge,tt,$n,gn,bn,fn,k],encapsulation:2,data:{animation:[qe("animation",[Te("void => visible",[ut(Uo)]),Te("visible => void",[ut(Jo)])])]},changeDetection:0})}return t})(),Pn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=Z({imports:[Pt,k,k]})}return t})();var ta=["header"],na=["icons"],ia=["content"],oa=["footer"],aa=["headericons"],ra=["contentWrapper"],sa=["*",[["p-header"]],[["p-footer"]]],la=["*","p-header","p-footer"],ca=(t,r)=>({"p-panel p-component":!0,"p-panel-toggleable":t,"p-panel-expanded":r}),da=t=>({transitionParams:t,height:"0",opacity:"0"}),pa=t=>({value:"hidden",params:t}),ua=t=>({transitionParams:t,height:"*",opacity:"1"}),ma=t=>({value:"visible",params:t}),ga=(t,r,e)=>({"p-panel-icons-start":t,"p-panel-icons-end":r,"p-panel-icons-center":e}),ba=t=>({$implicit:t});function fa(t,r){if(t&1&&(c(0,"span",12),I(1),p()),t&2){let e=d(2);g("id",e.id+"_header"),s(),N(e._header)}}function ha(t,r){t&1&&A(0)}function _a(t,r){}function ya(t,r){t&1&&u(0,_a,0,0,"ng-template")}function va(t,r){if(t&1&&w(0,"span"),t&2){let e=d(6);T(e.expandIcon)}}function Ca(t,r){t&1&&w(0,"MinusIcon")}function xa(t,r){if(t&1&&(K(0),u(1,va,1,2,"span",16)(2,Ca,1,0,"MinusIcon",14),U()),t&2){let e=d(5);s(),l("ngIf",e.expandIcon),s(),l("ngIf",!e.expandIcon)}}function wa(t,r){if(t&1&&w(0,"span"),t&2){let e=d(6);T(e.collapseIcon)}}function Ta(t,r){t&1&&w(0,"PlusIcon")}function Ia(t,r){if(t&1&&(K(0),u(1,wa,1,2,"span",16)(2,Ta,1,0,"PlusIcon",14),U()),t&2){let e=d(5);s(),l("ngIf",e.collapseIcon),s(),l("ngIf",!e.collapseIcon)}}function ka(t,r){if(t&1&&(K(0),u(1,xa,3,2,"ng-container",14)(2,Ia,3,2,"ng-container",14),U()),t&2){let e=d(4);s(),l("ngIf",!e.collapsed),s(),l("ngIf",e.collapsed)}}function Sa(t,r){}function Ea(t,r){t&1&&u(0,Sa,0,0,"ng-template")}function $a(t,r){if(t&1&&u(0,ka,3,2,"ng-container",14)(1,Ea,1,0,null,15),t&2){let e=d(3);l("ngIf",!e.headerIconsTemplate&&!e._headerIconsTemplate&&!(e.toggleButtonProps!=null&&e.toggleButtonProps.icon)),s(),l("ngTemplateOutlet",e.headerIconsTemplate||e._headerIconsTemplate)("ngTemplateOutletContext",re(3,ba,e.collapsed))}}function Da(t,r){if(t&1){let e=ne();c(0,"p-button",13),R("click",function(n){j(e);let o=d(2);return Q(o.onIconClick(n))})("keydown",function(n){j(e);let o=d(2);return Q(o.onKeyDown(n))}),u(1,$a,2,5,"ng-template",null,1,De),p()}if(t&2){let e=d(2);l("text",!0)("rounded",!0)("buttonProps",e.toggleButtonProps),g("id",e.id+"_header")("aria-label",e.buttonAriaLabel)("aria-controls",e.id+"_content")("aria-expanded",!e.collapsed)}}function Fa(t,r){if(t&1){let e=ne();c(0,"div",8),R("click",function(n){j(e);let o=d();return Q(o.onHeaderClick(n))}),u(1,fa,2,2,"span",9),O(2,1),u(3,ha,1,0,"ng-container",6),c(4,"div",10),u(5,ya,1,0,null,6)(6,Da,3,7,"p-button",11),p()()}if(t&2){let e=d();g("id",e.id+"-titlebar"),s(),l("ngIf",e._header),s(2),l("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),s(),l("ngClass",ct(6,ga,e.iconPos==="start",e.iconPos==="end",e.iconPos==="center")),s(),l("ngTemplateOutlet",e.iconTemplate||e._iconTemplate),s(),l("ngIf",e.toggleable)}}function Ma(t,r){t&1&&A(0)}function Pa(t,r){t&1&&A(0)}function za(t,r){if(t&1&&(c(0,"div",17),O(1,2),u(2,Pa,1,0,"ng-container",6),p()),t&2){let e=d();s(2),l("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}var Oa=({dt:t})=>`
.p-panel {
    border: 1px solid ${t("panel.border.color")};
    border-radius: ${t("panel.border.radius")};
    background: ${t("panel.background")};
    color: ${t("panel.color")};
}

.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${t("panel.header.padding")};
    background: ${t("panel.header.background")};
    color: ${t("panel.header.color")};
    border-style: solid;
    border-width: ${t("panel.header.border.width")};
    border-color: ${t("panel.header.border.color")};
    border-radius: ${t("panel.header.border.radius")};
}

.p-panel-toggleable .p-panel-header {
    padding: ${t("panel.toggleable.header.padding")};
}

.p-panel-title {
    line-height: 1;
    font-weight: ${t("panel.title.font.weight")};
}

.p-panel-content {
    padding: ${t("panel.content.padding")};
}

.p-panel-footer {
    padding: ${t("panel.footer.padding")};
}

/* For PrimeNG */
.p-panel-toggleable.p-panel-expanded > .p-panel-content-container:not(.ng-animating) {
    overflow: visible
}

.p-panel-toggleable .p-panel-content-container {
    overflow: hidden;
}
`,La={root:({props:t})=>["p-panel p-component",{"p-panel-toggleable":t.toggleable}],header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},zn=(()=>{class t extends P{name="panel";theme=Oa;classes=La;static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})();var zt=(()=>{class t extends E{toggleable;_header;collapsed;style;styleClass;iconPos="end";expandIcon;collapseIcon;showHeader=!0;toggler="icon";transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";toggleButtonProps;collapsedChange=new J;onBeforeToggle=new J;onAfterToggle=new J;footerFacet;animating;headerTemplate;iconTemplate;contentTemplate;footerTemplate;headerIconsTemplate;_headerTemplate;_iconTemplate;_contentTemplate;_footerTemplate;_headerIconsTemplate;contentWrapperViewChild;id=X("pn_id_");get buttonAriaLabel(){return this._header}_componentStyle=f(zn);onHeaderClick(e){this.toggler==="header"&&this.toggle(e)}onIconClick(e){this.toggler==="icon"&&this.toggle(e)}toggle(e){if(this.animating)return!1;this.animating=!0,this.onBeforeToggle.emit({originalEvent:e,collapsed:this.collapsed}),this.toggleable&&(this.collapsed?this.expand():this.collapse()),this.cd.markForCheck(),e.preventDefault()}expand(){this.collapsed=!1,this.collapsedChange.emit(this.collapsed),this.updateTabIndex()}collapse(){this.collapsed=!0,this.collapsedChange.emit(this.collapsed),this.updateTabIndex()}getBlockableElement(){return this.el.nativeElement.children[0]}updateTabIndex(){this.contentWrapperViewChild&&this.contentWrapperViewChild.nativeElement.querySelectorAll('input, button, select, a, textarea, [tabindex]:not([tabindex="-1"])').forEach(i=>{this.collapsed?i.setAttribute("tabindex","-1"):i.removeAttribute("tabindex")})}onKeyDown(e){(e.code==="Enter"||e.code==="Space")&&(this.toggle(e),e.preventDefault())}onToggleDone(e){this.animating=!1,this.onAfterToggle.emit({originalEvent:e,collapsed:this.collapsed})}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"icons":this._iconTemplate=e.template;break;case"headericons":this._headerIconsTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=b(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-panel"]],contentQueries:function(i,n,o){if(i&1&&me(o,mt,5)(o,ta,4)(o,na,4)(o,ia,4)(o,oa,4)(o,aa,4)(o,he,4),i&2){let a;h(a=_())&&(n.footerFacet=a.first),h(a=_())&&(n.headerTemplate=a.first),h(a=_())&&(n.iconTemplate=a.first),h(a=_())&&(n.contentTemplate=a.first),h(a=_())&&(n.footerTemplate=a.first),h(a=_())&&(n.headerIconsTemplate=a.first),h(a=_())&&(n.templates=a)}},viewQuery:function(i,n){if(i&1&&Ve(ra,5),i&2){let o;h(o=_())&&(n.contentWrapperViewChild=o.first)}},inputs:{toggleable:[2,"toggleable","toggleable",y],_header:[0,"header","_header"],collapsed:[2,"collapsed","collapsed",y],style:"style",styleClass:"styleClass",iconPos:"iconPos",expandIcon:"expandIcon",collapseIcon:"collapseIcon",showHeader:[2,"showHeader","showHeader",y],toggler:"toggler",transitionOptions:"transitionOptions",toggleButtonProps:"toggleButtonProps"},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},features:[W([zn]),v],ngContentSelectors:la,decls:8,vars:25,consts:[["contentWrapper",""],["icon",""],[3,"ngClass","ngStyle"],["class","p-panel-header",3,"click",4,"ngIf"],["role","region",1,"p-panel-content-container",3,"id"],[1,"p-panel-content"],[4,"ngTemplateOutlet"],["class","p-panel-footer",4,"ngIf"],[1,"p-panel-header",3,"click"],["class","p-panel-title",4,"ngIf"],[1,"p-panel-icons",3,"ngClass"],["severity","secondary","type","button","role","button","styleClass","p-panel-header-icon p-panel-toggler p-link",3,"text","rounded","buttonProps","click","keydown",4,"ngIf"],[1,"p-panel-title"],["severity","secondary","type","button","role","button","styleClass","p-panel-header-icon p-panel-toggler p-link",3,"click","keydown","text","rounded","buttonProps"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class",4,"ngIf"],[1,"p-panel-footer"]],template:function(i,n){i&1&&(ee(sa),c(0,"div",2),u(1,Fa,7,10,"div",3),c(2,"div",4),R("@panelContent.done",function(a){return n.onToggleDone(a)}),c(3,"div",5,0),O(5),u(6,Ma,1,0,"ng-container",6),p(),u(7,za,3,1,"div",7),p()()),i&2&&(T(n.styleClass),l("ngClass",lt(14,ca,n.toggleable,!n.collapsed&&n.toggleable))("ngStyle",n.style),g("id",n.id)("data-pc-name","panel"),s(),l("ngIf",n.showHeader),s(),l("id",n.id+"_content")("@panelContent",n.collapsed?re(19,pa,re(17,da,n.animating?n.transitionOptions:"0ms")):re(23,ma,re(21,ua,n.animating?n.transitionOptions:"0ms"))),g("aria-labelledby",n.id+"_header")("aria-hidden",n.collapsed)("tabindex",n.collapsed?"-1":void 0),s(4),l("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),s(),l("ngIf",n.footerFacet||n.footerTemplate||n._footerTemplate))},dependencies:[q,pe,Ce,be,ge,un,pn,En,tt,k],encapsulation:2,data:{animation:[qe("panelContent",[Ze("hidden",we({height:"0"})),Ze("void",we({height:"{{height}}"}),{params:{height:"0"}}),Ze("visible",we({height:"*"})),Te("visible <=> hidden",[xe("{{transitionParams}}")]),Te("void => hidden",xe("{{transitionParams}}")),Te("void => visible",xe("{{transitionParams}}"))])]},changeDetection:0})}return t})(),On=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=G({type:t});static \u0275inj=Z({imports:[zt,k,k]})}return t})();function Ha(t,r){if(t&1){let e=ne();c(0,"button",23),R("click",function(){j(e);let n=d();return Q(n.openImagePreview(n.route.image,n.route.title+" map",n.route.title+" Map"))}),w(1,"img",24),c(2,"span",25),w(3,"i",18),p(),c(4,"div",26)(5,"h2",27),I(6),p()()()}if(t&2){let e=d();g("aria-label","Open map image for "+e.route.title),s(),l("src",e.route.image,je)("alt",e.route.title),s(5),N(e.route.title)}}function Aa(t,r){if(t&1&&(c(0,"a",19)(1,"div",28),w(2,"i",29),p(),c(3,"div",30)(4,"span",31),I(5,"Download GPX"),p(),c(6,"span",32),I(7),p()()()),t&2){let e=d();l("href",e.route.gpxFile,je)("download",e.route.title+".gpx"),s(7),N(e.route.title)}}var ht=class t{route;previewVisible=!1;previewImage="";previewAlt="";previewTitle="";openImagePreview(r,e,i){this.previewImage=r,this.previewAlt=e,this.previewTitle=i,this.previewVisible=!0}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-route-card"]],inputs:{route:"route"},decls:41,vars:19,consts:[["header",""],[1,"route-card"],[1,"stats-row"],[1,"stat-item"],[1,"stat-icon-wrapper"],[1,"pi","pi-map","stat-icon"],[1,"stat-value"],[1,"stat-label"],[1,"stat-divider"],[1,"pi","pi-arrow-up","stat-icon"],[1,"pi","pi-cloud","stat-icon"],[1,"route-description"],["header","Route Details","expandIcon","pi pi-chevron-up","collapseIcon","pi pi-chevron-down",1,"route-detail-panel",3,"toggleable","collapsed"],[1,"detail-content"],[1,"detail-text"],["type","button",1,"detail-image-wrapper","image-preview-trigger",3,"click"],[1,"detail-image",3,"src","alt"],["aria-hidden","true",1,"image-preview-icon","image-preview-icon--detail"],[1,"pi","pi-search-plus"],[1,"gpx-download",3,"href","download"],["styleClass","image-preview-dialog","appendTo","body",3,"visibleChange","visible","modal","dismissableMask","draggable","resizable","header"],[1,"image-preview-content"],[1,"image-preview-full",3,"src","alt"],["type","button",1,"card-image-wrapper","image-preview-trigger",3,"click"],[1,"card-hero-image",3,"src","alt"],["aria-hidden","true",1,"image-preview-icon"],[1,"card-title-overlay"],[1,"route-title"],[1,"gpx-icon-wrapper"],[1,"pi","pi-download"],[1,"gpx-text"],[1,"gpx-label"],[1,"gpx-sub"]],template:function(e,i){if(e&1){let n=ne();c(0,"p-card",1),u(1,Ha,7,4,"ng-template",null,0,De),c(3,"div",2)(4,"div",3)(5,"div",4),w(6,"i",5),p(),c(7,"span",6),I(8),p(),c(9,"span",7),I(10,"Distance"),p()(),w(11,"div",8),c(12,"div",3)(13,"div",4),w(14,"i",9),p(),c(15,"span",6),I(16),p(),c(17,"span",7),I(18,"Ascent"),p()(),w(19,"div",8),c(20,"div",3)(21,"div",4),w(22,"i",10),p(),c(23,"span",6),I(24),p(),c(25,"span",7),I(26,"Max Altitude"),p()()(),c(27,"p",11),I(28),p(),c(29,"p-panel",12)(30,"div",13)(31,"p",14),I(32),p(),c(33,"button",15),R("click",function(){return i.openImagePreview(i.route.extraImage,i.route.title+" elevation profile",i.route.title+" Elevation Profile")}),w(34,"img",16),c(35,"span",17),w(36,"i",18),p()(),ce(37,Aa,8,3,"a",19),p()()(),c(38,"p-dialog",20),Wt("visibleChange",function(a){return j(n),Nt(i.previewVisible,a)||(i.previewVisible=a),Q(a)}),c(39,"div",21),w(40,"img",22),p()()}e&2&&(s(8),$e("",i.route.distance," km"),s(8),$e("",i.route.ascent," m"),s(8),$e("",i.route.maxAltitude," m"),s(4),N(i.route.description),s(),l("toggleable",!0)("collapsed",!0),s(3),N(i.route.detailedDescription),s(),g("aria-label","Open elevation profile for "+i.route.title),s(),l("src",i.route.extraImage,je)("alt",i.route.title+" detail"),s(3),de(i.route.gpxFile?37:-1),s(),Rt("visible",i.previewVisible),l("modal",!0)("dismissableMask",!0)("draggable",!1)("resizable",!1)("header",i.previewTitle),s(2),l("src",i.previewImage,je)("alt",i.previewAlt))},dependencies:[xn,Dt,Pn,Pt,On,zt],styles:["[_nghost-%COMP%]{display:block;height:100%}.route-card[_ngcontent-%COMP%]{height:100%;border-radius:16px;overflow:hidden;transition:transform .3s ease,box-shadow .3s ease}.route-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px)}.card-image-wrapper[_ngcontent-%COMP%]{position:relative;overflow:hidden;height:220px}.image-preview-trigger[_ngcontent-%COMP%]{width:100%;padding:0;border:0;background:transparent;cursor:zoom-in;display:block;text-align:inherit}.image-preview-trigger[_ngcontent-%COMP%]:focus-visible{outline:3px solid rgba(46,125,50,.75);outline-offset:-3px}.image-preview-icon[_ngcontent-%COMP%]{position:absolute;top:12px;right:12px;width:38px;height:38px;border-radius:50%;background:#ffffffeb;color:#1b5e20;display:flex;align-items:center;justify-content:center;opacity:0;transform:translateY(-4px);transition:opacity .2s ease,transform .2s ease;z-index:2}.image-preview-icon[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%]{font-size:1rem}.image-preview-trigger[_ngcontent-%COMP%]:hover   .image-preview-icon[_ngcontent-%COMP%], .image-preview-trigger[_ngcontent-%COMP%]:focus-visible   .image-preview-icon[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.card-hero-image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;transition:transform .5s ease;display:block}.route-card[_ngcontent-%COMP%]:hover   .card-hero-image[_ngcontent-%COMP%]{transform:scale(1.04)}.card-title-overlay[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;right:0;padding:40px 20px 16px;background:linear-gradient(to top,rgba(0,0,0,.75) 0%,transparent 100%)}.route-title[_ngcontent-%COMP%]{margin:0;font-family:Playfair Display,Georgia,serif;font-size:1.35rem;font-weight:700;color:#fff;letter-spacing:.01em;text-shadow:0 1px 4px rgba(0,0,0,.4)}.stats-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-around;padding:20px 8px 16px;border-bottom:1px solid rgba(0,0,0,.08);margin-bottom:16px}.stat-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:6px;flex:1}.stat-divider[_ngcontent-%COMP%]{width:1px;height:48px;background:#00000014}.stat-icon-wrapper[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:50%;background:#e8f5e9;display:flex;align-items:center;justify-content:center}.stat-icon[_ngcontent-%COMP%]{font-size:1.1rem;color:#2e7d32}.stat-value[_ngcontent-%COMP%]{font-family:Playfair Display,Georgia,serif;font-size:1rem;font-weight:700;color:#1a2e1a;line-height:1}.stat-label[_ngcontent-%COMP%]{font-size:.7rem;font-weight:500;text-transform:uppercase;letter-spacing:.08em;color:#7a8c7a}.route-description[_ngcontent-%COMP%]{font-size:.9rem;line-height:1.7;color:#3a4a3a;margin:0 0 20px}.route-detail-panel[_ngcontent-%COMP%]{border-radius:10px;overflow:hidden}.detail-content[_ngcontent-%COMP%]{padding:4px 0}.detail-text[_ngcontent-%COMP%]{font-size:.875rem;line-height:1.75;color:#455845;margin:0 0 16px}.detail-image-wrapper[_ngcontent-%COMP%]{position:relative;border-radius:10px;overflow:hidden}.image-preview-icon--detail[_ngcontent-%COMP%]{top:10px;right:10px;box-shadow:0 4px 14px #0000001f}.detail-image[_ngcontent-%COMP%]{width:100%;height:180px;object-fit:contain;background:#fff;display:block}.gpx-download[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-top:16px;padding:12px 16px;background:#f0f7f0;border:1px dashed #2e7d32;border-radius:10px;text-decoration:none;transition:background .2s ease,border-style .2s ease}.gpx-download[_ngcontent-%COMP%]:hover{background:#e0f2e0;border-style:solid}.gpx-download[_ngcontent-%COMP%]:hover   .gpx-icon-wrapper[_ngcontent-%COMP%]{background:#2e7d32}.gpx-download[_ngcontent-%COMP%]:hover   .gpx-icon-wrapper[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%]{color:#fff}.gpx-icon-wrapper[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;background:#e8f5e9;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .2s ease}.gpx-icon-wrapper[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%]{font-size:1rem;color:#2e7d32;transition:color .2s ease}.gpx-text[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.gpx-label[_ngcontent-%COMP%]{font-size:.8rem;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:#1b5e20}.gpx-sub[_ngcontent-%COMP%]{font-size:.78rem;color:#7a8c7a}[_nghost-%COMP%]     .image-preview-dialog{width:min(94vw,1180px)}[_nghost-%COMP%]     .image-preview-dialog .p-dialog-content{padding:0;background:#111;overflow:hidden}.image-preview-content[_ngcontent-%COMP%]{width:100%;max-height:82vh;background:#111;display:flex;align-items:center;justify-content:center}.image-preview-full[_ngcontent-%COMP%]{width:100%;max-height:82vh;object-fit:contain;display:block}"]})};var Ot=(t,r)=>r.id;function Ra(t,r){t&1&&(c(0,"div",0),w(1,"p-progressSpinner",3),c(2,"p"),I(3,"Loading routes..."),p()())}function Na(t,r){if(t&1&&(c(0,"div",1),w(1,"i",4),c(2,"p"),I(3),p()()),t&2){let e=d();s(3),N(e.error)}}function Wa(t,r){if(t&1&&(c(0,"p-tab",5),w(1,"i"),I(2),c(3,"span",6),I(4),p()()),t&2){let e=r.$implicit;l("value",e.id),s(),T(jt("pi ",e.id==="long"?"pi-flag":"pi-star"," tab-icon")),s(),$e(" ",e.label," "),s(2),N(e.routes.length)}}function ja(t,r){if(t&1&&(c(0,"div",11),w(1,"app-route-card",12),p()),t&2){let e=r.$implicit;s(),l("route",e)}}function Qa(t,r){if(t&1&&(c(0,"p-tabpanel",5)(1,"div",7)(2,"h2",8),I(3),p(),c(4,"p",9),I(5),p()(),c(6,"div",10),at(7,ja,2,1,"div",11,Ot),p()()),t&2){let e=r.$implicit;l("value",e.id),s(3),N(e.label),s(2),$e("",e.routes.length," routes available"),s(2),rt(e.routes)}}function qa(t,r){if(t&1&&(c(0,"p-tabs",2)(1,"p-tablist"),at(2,Wa,5,6,"p-tab",5,Ot),p(),c(4,"p-tabpanels"),at(5,Qa,9,3,"p-tabpanel",5,Ot),p()()),t&2){let e=d();l("value",e.categories[0].id),s(2),rt(e.categories),s(3),rt(e.categories)}}var Ln=class t{routesService=f(bt);categories=[];loading=!0;error=null;ngOnInit(){this.routesService.getRoutes().subscribe({next:r=>{this.categories=r.categories,this.loading=!1},error:()=>{this.error="Failed to load routes. Please try refreshing.",this.loading=!1}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-home"]],decls:3,vars:3,consts:[[1,"loading-state"],[1,"error-state"],[1,"routes-tabs",3,"value"],["strokeWidth","3","animationDuration","1s"],[1,"pi","pi-exclamation-triangle"],[3,"value"],[1,"tab-count"],[1,"panel-header"],[1,"panel-title"],[1,"panel-subtitle"],[1,"routes-grid"],[1,"route-col"],[3,"route"]],template:function(e,i){e&1&&(ce(0,Ra,4,0,"div",0),ce(1,Na,4,1,"div",1),ce(2,qa,7,1,"p-tabs",2)),e&2&&(de(i.loading?0:-1),s(),de(i.error?1:-1),s(),de(!i.loading&&!i.error&&i.categories.length?2:-1))},dependencies:[_n,Ne,Et,St,gt,kt,vn,$t,ht],styles:[".loading-state[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;padding:80px 20px;color:#7a8c7a}.loading-state[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%]{font-size:2.5rem;color:#e53e3e}.tab-icon[_ngcontent-%COMP%]{margin-right:6px;font-size:.85rem}.tab-count[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;background:#2e7d32;color:#fff;border-radius:20px;font-size:.7rem;font-weight:700;min-width:20px;height:20px;padding:0 6px;margin-left:8px}.panel-header[_ngcontent-%COMP%]{padding:24px 0 20px;border-bottom:2px solid rgba(0,0,0,.09);margin-bottom:32px}.panel-title[_ngcontent-%COMP%]{font-family:Playfair Display,Georgia,serif;font-size:1.75rem;font-weight:800;color:#1a2e1a;margin:0 0 4px}.panel-subtitle[_ngcontent-%COMP%]{font-size:.875rem;color:#7a8c7a;margin:0}.routes-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:28px;align-items:start}.route-col[_ngcontent-%COMP%]{display:flex;flex-direction:column}@media(max-width:600px){.routes-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]})};export{Ln as HomeComponent};
