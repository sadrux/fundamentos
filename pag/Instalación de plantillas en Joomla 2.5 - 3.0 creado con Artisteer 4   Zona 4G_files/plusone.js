var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var aa=encodeURIComponent,l=window,ba=Object,p=document,da=Array,ea=parseInt,r=String,fa=decodeURIComponent;function ga(a,b){return a.type=b}
var ha="appendChild",s="push",t="test",ia="shift",ja="exec",ka="width",la="slice",v="replace",ma="getElementById",na="concat",oa="charAt",pa="JSON",x="indexOf",qa="nodeName",ra="match",y="createElement",A="setAttribute",sa="type",ta="bind",ua="getTime",va="getElementsByTagName",B="substr",C="toString",D="length",E="prototype",F="split",G="location",H="style",wa="removeChild",I="call",J="getAttribute",xa="protocol",K="charCodeAt",L="href",M="substring",ya="documentMode",za="action",N="apply",Aa="attributes",
O="parentNode",Ba="update",Ca="height",P="join",Da="toLowerCase",Ea=function(a,b,c){return a[I][N](a[ta],arguments)},Fa=function(a,b,c){if(!a)throw Error();if(2<arguments[D]){var d=da[E][la][I](arguments,2);return function(){var c=da[E][la][I](arguments);da[E].unshift[N](c,d);return a[N](b,c)}}return function(){return a[N](b,arguments)}},Ga=function(a,b,c){Ga=Function[E][ta]&&-1!=Function[E][ta][C]()[x]("native code")?Ea:Fa;return Ga[N](null,arguments)};
Function[E].bind=Function[E][ta]||function(a,b){if(1<arguments[D]){var c=da[E][la][I](arguments,1);c.unshift(this,a);return Ga[N](null,c)}return Ga(this,a)};var Q=l,R=p,Ha=Q[G],Ia=function(){},Ja=/\[native code\]/,S=function(a,b,c){return a[b]=a[b]||c},Ka=function(a){for(var b=0;b<this[D];b++)if(this[b]===a)return b;return-1},La=function(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a[D];d++){var e=a[d];e!=c&&b[s](e);c=e}return b},Ma=/&/g,Na=/</g,Oa=/>/g,Pa=/"/g,Qa=/'/g,Ra=function(a){return r(a)[v](Ma,"&amp;")[v](Na,"&lt;")[v](Oa,"&gt;")[v](Pa,"&quot;")[v](Qa,"&#39;")},T=function(){var a;if((a=ba.create)&&Ja[t](a))a=a(null);else{a={};for(var b in a)a[b]=
void 0}return a},U=function(a,b){return ba[E].hasOwnProperty[I](a,b)},Sa=function(a){if(Ja[t](ba.keys))return ba.keys(a);var b=[],c;for(c in a)U(a,c)&&b[s](c);return b},V=function(a,b){a=a||{};for(var c in a)U(a,c)&&(b[c]=a[c])},Ta=function(a){return function(){Q.setTimeout(a,0)}},Ua=function(a,b){if(!a)throw Error(b||"");},W=S(Q,"gapi",{});var X=function(a,b,c){var d=RegExp("([#].*&|[#])"+b+"=([^&#]*)","g");b=RegExp("([?#].*&|[?#])"+b+"=([^&#]*)","g");if(a=a&&(d[ja](a)||b[ja](a)))try{c=fa(a[2])}catch(e){}return c},Va=/^([^?#]*)(\?([^#]*))?(\#(.*))?$/,Wa=function(a){a=a[ra](Va);var b=T();b.H=a[1];b.j=a[3]?[a[3]]:[];b.o=a[5]?[a[5]]:[];return b},Xa=function(a){return a.H+(0<a.j[D]?"?"+a.j[P]("&"):"")+(0<a.o[D]?"#"+a.o[P]("&"):"")},Ya=function(a,b){var c=[];if(a)for(var d in a)if(U(a,d)&&null!=a[d]){var e=b?b(a[d]):a[d];c[s](aa(d)+"="+
aa(e))}return c},Za=function(a,b,c,d){a=Wa(a);a.j[s][N](a.j,Ya(b,d));a.o[s][N](a.o,Ya(c,d));return Xa(a)},$a=function(a,b){var c="";2E3<b[D]&&(c=b[M](2E3),b=b[M](0,2E3));var d=a[y]("div"),e=a[y]("a");e.href=b;d[ha](e);d.innerHTML=d.innerHTML;b=r(d.firstChild[L]);d[O]&&d[O][wa](d);return b+c},ab=/^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;var bb=function(a,b,c,d){if(Q[c+"EventListener"])Q[c+"EventListener"](a,b,!1);else if(Q[d+"tachEvent"])Q[d+"tachEvent"]("on"+a,b)},cb=function(){var a=R.readyState;return"complete"===a||"interactive"===a&&-1==navigator.userAgent[x]("MSIE")},fb=function(a){var b=db;if(!cb())try{b()}catch(c){}eb(a)},eb=function(a){if(cb())a();else{var b=!1,c=function(){if(!b)return b=!0,a[N](this,arguments)};Q.addEventListener?(Q.addEventListener("load",c,!1),Q.addEventListener("DOMContentLoaded",c,!1)):Q.attachEvent&&
(Q.attachEvent("onreadystatechange",function(){cb()&&c[N](this,arguments)}),Q.attachEvent("onload",c))}},gb=function(a){for(;a.firstChild;)a[wa](a.firstChild)},hb={button:!0,div:!0,span:!0};var Y;Y=S(Q,"___jsl",T());S(Y,"I",0);S(Y,"hel",10);var ib=function(a){return Y.dpo?Y.h:X(a,"jsh",Y.h)},jb=function(a){var b=S(Y,"sws",[]);b[s][N](b,a)},kb=function(a){return S(Y,"watt",T())[a]},lb=function(a){var b=S(Y,"PQ",[]);Y.PQ=[];var c=b[D];if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)},nb=function(a){return S(S(Y,"H",T()),a,T())};var ob=S(Y,"perf",T()),pb=S(ob,"g",T()),qb=S(ob,"i",T());S(ob,"r",[]);T();T();var rb=function(a,b,c){var d=ob.r;"function"===typeof d?d(a,b,c):d[s]([a,b,c])},sb=function(a,b,c){pb[a]=!b&&pb[a]||c||(new Date)[ua]();rb(a)},ub=function(a,b,c){b&&0<b[D]&&(b=tb(b),c&&0<c[D]&&(b+="___"+tb(c)),28<b[D]&&(b=b[B](0,28)+(b[D]-28)),c=b,b=S(qb,"_p",T()),S(b,c,T())[a]=(new Date)[ua](),rb(a,"_p",c))},tb=function(a){return a[P]("__")[v](/\./g,"_")[v](/\-/g,"_")[v](/\,/g,"_")};var vb=T(),wb=[],xb=function(a){throw Error("Bad hint"+(a?": "+a:""));};wb[s](["jsl",function(a){for(var b in a)if(U(a,b)){var c=a[b];"object"==typeof c?Y[b]=S(Y,b,[])[na](c):S(Y,b,c)}if(b=a.u)a=S(Y,"us",[]),a[s](b),(b=/^https:(.*)$/[ja](b))&&a[s]("http:"+b[1])}]);var yb=/^(\/[a-zA-Z0-9_\-]+)+$/,zb=/^[a-zA-Z0-9\-_\.,!]+$/,Ab=/^gapi\.loaded_[0-9]+$/,Bb=/^[a-zA-Z0-9,._-]+$/,Fb=function(a,b,c,d){var e=a[F](";"),f=vb[e[ia]()],g=null;f&&(g=f(e,b,c,d));if(b=g)b=g,c=b[ra](Cb),d=b[ra](Db),b=!!d&&1===d[D]&&Eb[t](b)&&!!c&&1===c[D];b||xb(a);return g},Ib=function(a,b,c,d){a=Gb(a);Ab[t](c)||xb("invalid_callback");b=Hb(b);d=d&&d[D]?Hb(d):null;var e=function(a){return aa(a)[v](/%2C/g,",")};return[aa(a.T)[v](/%2C/g,",")[v](/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+
e(d):"","/rt=j/sv=1/d=1/ed=1",a.J?"/am="+e(a.J):"",a.K?"/rs="+e(a.K):"","/cb=",e(c)][P]("")},Gb=function(a){"/"!==a[oa](0)&&xb("relative path");for(var b=a[M](1)[F]("/"),c=[];b[D];){a=b[ia]();if(!a[D]||0==a[x]("."))xb("empty/relative directory");else if(0<a[x]("=")){b.unshift(a);break}c[s](a)}a={};for(var d=0,e=b[D];d<e;++d){var f=b[d][F]("="),g=fa(f[0]),k=fa(f[1]);2==f[D]&&g&&k&&(a[g]=a[g]||k)}b="/"+c[P]("/");yb[t](b)||xb("invalid_prefix");c=Jb(a,"k",!0);d=Jb(a,"am");a=Jb(a,"rs");return{T:b,version:c,
J:d,K:a}},Hb=function(a){for(var b=[],c=0,d=a[D];c<d;++c){var e=a[c][v](/\./g,"_")[v](/-/g,"_");Bb[t](e)&&b[s](e)}return b[P](",")},Jb=function(a,b,c){a=a[b];!a&&c&&xb("missing: "+b);if(a){if(zb[t](a))return a;xb("invalid: "+b)}return null},Eb=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Db=/\/cb=/g,Cb=/\/\//g,Kb=function(){var a=ib(Ha[L]);if(!a)throw Error("Bad hint");return a};
vb.m=function(a,b,c,d){(a=a[0])||xb("missing_hint");return"https://apis.google.com"+Ib(a,b,c,d)};var Lb=decodeURI("%73cript"),Mb=function(a,b){for(var c=[],d=0;d<a[D];++d){var e=a[d];e&&0>Ka[I](b,e)&&c[s](e)}return c},Ob=function(a){"loading"!=R.readyState?Nb(a):R.write("<"+Lb+' src="'+encodeURI(a)+'"></'+Lb+">")},Nb=function(a){var b=R[y](Lb);b[A]("src",a);b.async="true";(a=R[va](Lb)[0])?a[O].insertBefore(b,a):(R.head||R.body||R.documentElement)[ha](b)},Pb=function(a,b){var c=b&&b._c;if(c)for(var d=0;d<wb[D];d++){var e=wb[d][0],f=wb[d][1];f&&U(c,e)&&f(c[e],a,b)}},Rb=function(a,b){Qb(function(){var c;
c=b===ib(Ha[L])?S(W,"_",T()):T();c=S(nb(b),"_",c);a(c)})},Tb=function(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Pb(a,c);var d=a?a[F](":"):[],e=c.h||Kb(),f=S(Y,"ah",T());if(f["::"]&&d[D]){for(var g=[],k=null;k=d[ia]();){var h=k[F]("."),h=f[k]||f[h[1]&&"ns:"+h[0]||""]||e,q=g[D]&&g[g[D]-1]||null,m=q;q&&q.hint==h||(m={hint:h,M:[]},g[s](m));m.M[s](k)}var n=g[D];if(1<n){var z=c.callback;z&&(c.callback=function(){0==--n&&z()})}for(;d=g[ia]();)Sb(d.M,c,d.hint)}else Sb(d||[],c,e)},Sb=function(a,
b,c){a=La(a)||[];var d=b.callback,e=b.config,f=b.timeout,g=b.ontimeout,k=null,h=!1;if(f&&!g||!f&&g)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var q=S(nb(c),"r",[]).sort(),m=S(nb(c),"L",[]).sort(),n=[][na](q),z=function(a,b){if(h)return 0;Q.clearTimeout(k);m[s][N](m,u);var d=((W||{}).config||{})[Ba];d?d(e):e&&S(Y,"cu",[])[s](e);if(b){ub("me0",a,n);try{Rb(b,c)}finally{ub("me1",a,n)}}return 1};0<f&&(k=Q.setTimeout(function(){h=!0;g()},f));var u=Mb(a,m);if(u[D]){var u=
Mb(a,q),w=S(Y,"CP",[]),ca=w[D];w[ca]=function(a){if(!a)return 0;ub("ml1",u,n);var b=function(b){w[ca]=null;z(u,a)&&lb(function(){d&&d();b()})},c=function(){var a=w[ca+1];a&&a()};0<ca&&w[ca-1]?w[ca]=function(){b(c)}:b(c)};if(u[D]){var mb="loaded_"+Y.I++;W[mb]=function(a){w[ca](a);W[mb]=null};a=Fb(c,u,"gapi."+mb,q);q[s][N](q,u);ub("ml0",u,n);b.sync||Q.___gapisync?Ob(a):Nb(a)}else w[ca](Ia)}else z(u)&&d&&d()};var Qb=function(a){if(Y.hee&&0<Y.hel)try{return a()}catch(b){Y.hel--,Tb("debug_error",function(){try{l.___jsl.hefn(b)}catch(a){throw b;}})}else return a()};W.load=function(a,b){return Qb(function(){return Tb(a,b)})};var Ub=function(a){var b=l.___jsl=l.___jsl||{};b[a]=b[a]||[];return b[a]},Vb=function(a){var b=l.___jsl=l.___jsl||{};b.cfg=!a&&b.cfg||{};return b.cfg},Wb=function(a){return"object"===typeof a&&/\[native code\]/[t](a[s])},Xb=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]&&b[c]&&"object"===typeof a[c]&&"object"===typeof b[c]&&!Wb(a[c])&&!Wb(b[c])?Xb(a[c],b[c]):b[c]&&"object"===typeof b[c]?(a[c]=Wb(b[c])?[]:{},Xb(a[c],b[c])):a[c]=b[c])},Yb=function(a){if(a&&!/^\s+$/[t](a)){for(;0==a[K](a[D]-
1);)a=a[M](0,a[D]-1);var b;try{b=l[pa].parse(a)}catch(c){}if("object"===typeof b)return b;try{b=(new Function("return ("+a+"\n)"))()}catch(d){}if("object"===typeof b)return b;try{b=(new Function("return ({"+a+"\n})"))()}catch(e){}return"object"===typeof b?b:{}}},Zb=function(a){Vb(!0);var b=l.___gcfg,c=Ub("cu");if(b&&b!==l.___gu){var d={};Xb(d,b);c[s](d);l.___gu=b}var b=Ub("cu"),e=p.scripts||p[va]("script")||[],d=[],f=[];f[s][N](f,Ub("us"));for(var g=0;g<e[D];++g)for(var k=e[g],h=0;h<f[D];++h)k.src&&
0==k.src[x](f[h])&&d[s](k);0==d[D]&&0<e[D]&&e[e[D]-1].src&&d[s](e[e[D]-1]);for(e=0;e<d[D];++e)d[e][J]("gapi_processed")||(d[e][A]("gapi_processed",!0),(f=d[e])?(g=f.nodeType,f=3==g||4==g?f.nodeValue:f.textContent||f.innerText||f.innerHTML||""):f=void 0,(f=Yb(f))&&b[s](f));a&&(d={},Xb(d,a),c[s](d));d=Ub("cd");a=0;for(b=d[D];a<b;++a)Xb(Vb(),d[a]);d=Ub("ci");a=0;for(b=d[D];a<b;++a)Xb(Vb(),d[a]);a=0;for(b=c[D];a<b;++a)Xb(Vb(),c[a])},Z=function(a){if(!a)return Vb();a=a[F]("/");for(var b=Vb(),c=0,d=a[D];b&&
"object"===typeof b&&c<d;++c)b=b[a[c]];return c===a[D]&&void 0!==b?b:void 0},$b=function(a,b){var c=a;if("string"===typeof a){for(var d=c={},e=a[F]("/"),f=0,g=e[D];f<g-1;++f)var k={},d=d[e[f]]=k;d[e[f]]=b}Zb(c)};var ac=function(){var a=l.__GOOGLEAPIS;a&&(a.googleapis&&!a["googleapis.config"]&&(a["googleapis.config"]=a.googleapis),S(Y,"ci",[])[s](a),l.__GOOGLEAPIS=void 0)};var bc={callback:1,clientid:1,cookiepolicy:1,openidrealm:-1,includegrantedscopes:-1,requestvisibleactions:1,scope:1},cc=!1,dc=T(),ec=function(){if(!cc){for(var a=p[va]("meta"),b=0;b<a[D];++b){var c=a[b].name[Da]();if(0==c.lastIndexOf("google-signin-",0)){var c=c[M](14),d=a[b].content;bc[c]&&d&&(dc[c]=d)}}if(l.self!==l.top){var a=p[G][C](),e;for(e in bc)0<bc[e]&&(b=X(a,e,""))&&(dc[e]=b)}cc=!0}e=T();V(dc,e);return e},fc=function(a){return!!(a.clientid&&a.scope&&a.callback)};var gc=l.console,hc=function(a){gc&&gc.log&&gc.log(a)};var ic=function(){return!!Y.oa},jc=function(){};var $=S(Y,"rw",T()),kc=function(a){for(var b in $)a($[b])},lc=function(a,b){var c=$[a];c&&c.state<b&&(c.state=b)};var mc;var nc=/^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/u\/(\d)\//,oc=/^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/b\/(\d{10,})\//,pc=function(a){var b=Z("googleapis.config/sessionIndex");null==b&&(b=l.__X_GOOG_AUTHUSER);if(null==b){var c=l.google;c&&(b=c.authuser)}null==b&&(a=a||l[G][L],b=X(a,"authuser")||null,null==b&&(b=(b=a[ra](nc))?b[1]:null));return null==b?null:r(b)},qc=function(a){var b=Z("googleapis.config/sessionDelegate");null==b&&(b=(a=(a||l[G][L])[ra](oc))?
a[1]:null);return null==b?null:r(b)};var rc=function(){this.c=-1};var sc=function(){this.c=-1;this.c=64;this.b=[];this.p=[];this.N=[];this.n=[];this.n[0]=128;for(var a=1;a<this.c;++a)this.n[a]=0;this.l=this.g=0;this.reset()};(function(){function a(){}a.prototype=rc[E];sc.$=rc[E];sc.prototype=new a;sc.H=function(a,c,d){return rc[E][c][N](a,da[E][la][I](arguments,2))}})();sc[E].reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.l=this.g=0};
var tc=function(a,b,c){c||(c=0);var d=a.N;if("string"==typeof b)for(var e=0;16>e;e++)d[e]=b[K](c)<<24|b[K](c+1)<<16|b[K](c+2)<<8|b[K](c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];for(var g=a.b[2],k=a.b[3],h=a.b[4],q,e=0;80>e;e++)40>e?20>e?(f=k^c&(g^k),q=1518500249):(f=c^g^k,q=1859775393):60>e?(f=c&g|k&(c|g),q=2400959708):(f=c^g^k,q=3395469782),f=(b<<5|b>>>27)+f+
h+q+d[e]&4294967295,h=k,k=g,g=(c<<30|c>>>2)&4294967295,c=b,b=f;a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+g&4294967295;a.b[3]=a.b[3]+k&4294967295;a.b[4]=a.b[4]+h&4294967295};
sc[E].update=function(a,b){void 0===b&&(b=a[D]);for(var c=b-this.c,d=0,e=this.p,f=this.g;d<b;){if(0==f)for(;d<=c;)tc(this,a,d),d+=this.c;if("string"==typeof a)for(;d<b;){if(e[f]=a[K](d),++f,++d,f==this.c){tc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.c){tc(this,e);f=0;break}}this.g=f;this.l+=b};var uc=function(){this.q=new sc};uc[E].reset=function(){this.q.reset()};var Bc=function(){var a;vc?(a=new Q.Uint32Array(1),wc.getRandomValues(a),a=Number("0."+a[0])):(a=xc,a+=ea(yc[B](0,20),16),yc=zc(yc),a/=Ac+Math.pow(16,20));return a},wc=Q.crypto,vc=!1,Cc=0,Dc=0,xc=1,Ac=0,yc="",Ec=function(a){a=a||Q.event;var b=a.screenX+a.clientX<<16,b=b+(a.screenY+a.clientY),b=(new Date)[ua]()%1E6*b;xc=xc*b%Ac;0<Cc&&++Dc==Cc&&bb("mousemove",Ec,"remove","de")},zc=function(a){var b=new uc;a=unescape(aa(a));for(var c=[],d=0,e=a[D];d<e;++d)c[s](a[K](d));b.q[Ba](c);a=b.q;b=[];d=8*a.l;
56>a.g?a[Ba](a.n,56-a.g):a[Ba](a.n,a.c-(a.g-56));for(c=a.c-1;56<=c;c--)a.p[c]=d&255,d/=256;tc(a,a.p);for(c=d=0;5>c;c++)for(e=24;0<=e;e-=8)b[d]=a.b[c]>>e&255,++d;a="";for(c=0;c<b[D];c++)a+="0123456789ABCDEF"[oa](Math.floor(b[c]/16))+"0123456789ABCDEF"[oa](b[c]%16);return a},vc=!!wc&&"function"==typeof wc.getRandomValues;
vc||(Ac=1E6*(screen[ka]*screen[ka]+screen[Ca]),yc=zc(R.cookie+"|"+R[G]+"|"+(new Date)[ua]()+"|"+Math.random()),Cc=Z("random/maxObserveMousemove")||0,0!=Cc&&bb("mousemove",Ec,"add","at"));var Fc=function(){var a=Y.onl;if(!a){a=T();Y.onl=a;var b=T();a.e=function(a){var d=b[a];d&&(delete b[a],d())};a.a=function(a,d){b[a]=d};a.r=function(a){delete b[a]}}return a},Gc=function(a,b){var c=b.onload;return"function"===typeof c?(Fc().a(a,c),c):null},Hc=function(a){Ua(/^\w+$/[t](a),"Unsupported id - "+a);Fc();return'onload="window.___jsl.onl.e(&#34;'+a+'&#34;)"'},Ic=function(a){Fc().r(a)};var Jc={allowtransparency:"true",frameborder:"0",hspace:"0",marginheight:"0",marginwidth:"0",scrolling:"no",style:"",tabindex:"0",vspace:"0",width:"100%"},Kc={allowtransparency:!0,onload:!0},Lc=0,Mc=function(a){Ua(!a||ab[t](a),"Illegal url for new iframe - "+a)},Nc=function(a,b,c,d,e){Mc(c.src);var f,g=Gc(d,c),k=g?Hc(d):"";try{f=a[y]('<iframe frameborder="'+Ra(r(c.frameborder))+'" scrolling="'+Ra(r(c.scrolling))+'" '+k+' name="'+Ra(r(c.name))+'"/>')}catch(h){f=a[y]("iframe"),g&&(f.onload=function(){f.onload=
null;g[I](this)},Ic(d))}for(var q in c)a=c[q],"style"===q&&"object"===typeof a?V(a,f[H]):Kc[q]||f[A](q,r(a));(q=e&&e.beforeNode||null)||e&&e.dontclear||gb(b);b.insertBefore(f,q);f=q?q.previousSibling:b.lastChild;c.allowtransparency&&(f.allowTransparency=!0);return f};var Oc=/^:[\w]+$/,Pc=/:([a-zA-Z_]+):/g,Qc=function(a,b){if(!mc||Z("oauth-flow/authAware")){var c=pc()||"0",d=qc(),e;e=pc(void 0)||c;var f=qc(void 0),g="";e&&(g+="u/"+e+"/");f&&(g+="b/"+f+"/");e=g||null;f=Z("oauth-flow/authAware")?"isLoggedIn":"googleapis.config/signedIn";(g=(f=!1===Z(f))?"_/im/":"")&&(e="");var k=Z("iframes/:socialhost:"),h=Z("iframes/:im_socialhost:");mc={socialhost:k,ctx_socialhost:f?h:k,session_index:c,session_delegate:d,session_prefix:e,im_prefix:g}}return mc[b]||""};var Rc={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},Sc=function(a){var b,c,d;b=/[\"\\\x00-\x1f\x7f-\x9f]/g;if(void 0!==a){switch(typeof a){case "string":return b[t](a)?'"'+a[v](b,function(a){var b=Rc[a];if(b)return b;b=a[K]();return"\\u00"+Math.floor(b/16)[C](16)+(b%16)[C](16)})+'"':'"'+a+'"';case "number":return isFinite(a)?r(a):"null";case "boolean":case "null":return r(a);case "object":if(!a)return"null";b=[];if("number"===typeof a[D]&&!a.propertyIsEnumerable("length")){d=
a[D];for(c=0;c<d;c+=1)b[s](Sc(a[c])||"null");return"["+b[P](",")+"]"}for(c in a)!/___$/[t](c)&&U(a,c)&&"string"===typeof c&&(d=Sc(a[c]))&&b[s](Sc(c)+":"+d);return"{"+b[P](",")+"}"}return""}},Tc=function(a){if(!a)return!1;if(/^[\],:{}\s]*$/[t](a[v](/\\["\\\/b-u]/g,"@")[v](/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]")[v](/(?:^|:|,)(?:\s*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}return!1},Uc=!1;try{Uc=!!l[pa]&&'["a"]'===l[pa].stringify(["a"])&&"a"===l[pa].parse('["a"]')[0]}catch(Vc){}
var Wc=function(a){try{return l[pa].parse(a)}catch(b){return!1}},Xc=Uc?l[pa].stringify:Sc,Yc=Uc?Wc:Tc;var Zc=function(a){var b;a[ra](/^https?%3A/i)&&(b=fa(a));return $a(p,b?b:a)},$c=function(a){a=a||"canonical";for(var b=p[va]("link"),c=0,d=b[D];c<d;c++){var e=b[c],f=e[J]("rel");if(f&&f[Da]()==a&&(e=e[J]("href"))&&(e=Zc(e))&&null!=e[ra](/^https?:\/\/[\w\-\_\.]+/i))return e}return l[G][L]};var ad={post:!0},bd={style:"position:absolute;top:-10000px;width:450px;margin:0px;border-style:none"},cd="onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" "),dd=S(Y,"WI",T()),ed=function(a,b,c){var d,e;d=e=a;"plus"==a&&b[za]&&(e=a+"_"+b[za],d=a+"/"+b[za]);(e=Z("iframes/"+e+"/url"))||(e=":im_socialhost:/:session_prefix::im_prefix:_/widget/render/"+d+"?usegapi=1");d=$a(R,e[v](Pc,Qc));var f="iframes/"+a+"/params/";e={};V(b,e);var g=Z("lang")||Z("gwidget/lang");
g&&(e.hl=g);ad[a]||(e.origin=l[G].origin||l[G][xa]+"//"+l[G].host);e.exp=Z(f+"exp");if(f=Z(f+"location"))for(g=0;g<f[D];g++){var k=f[g];e[k]=Q[G][k]}switch(a){case "plus":case "follow":f=e[L];g=b[za]?void 0:"publisher";f=(f="string"==typeof f?f:void 0)?Zc(f):$c(g);e.url=f;delete e[L];break;case "plusone":f=(f=b[L])?Zc(f):$c();e.url=f;f=b.db;g=Z();null==f&&g&&(f=g.db,null==f&&(f=g.gwidget&&g.gwidget.db));e.db=f||void 0;f=b.ecp;g=Z();null==f&&g&&(f=g.ecp,null==f&&(f=g.gwidget&&g.gwidget.ecp));e.ecp=
f||void 0;delete e[L];break;case "signin":e.url=$c()}Y.ILI&&(e.iloader="1");delete e["data-onload"];delete e.rd;e.gsrc=Z("iframes/:source:");f=Z("inline/css");"undefined"!==typeof f&&0<c&&f>=c&&(e.ic="1");f=/^#|^fr-/;c={};for(var h in e)U(e,h)&&f[t](h)&&(c[h[v](f,"")]=e[h],delete e[h]);h="q"==Z("iframes/"+a+"/params/si")?e:c;var f=ec(),q;for(q in f)!U(f,q)||U(e,q)||U(c,q)||(h[q]=f[q]);q=[][na](cd);(h=Z("iframes/"+a+"/methods"))&&"object"===typeof h&&Ja[t](h[s])&&(q=q[na](h));for(var m in b)U(b,m)&&
/^on/[t](m)&&("plus"!=a||"onconnect"!=m)&&(q[s](m),delete e[m]);delete e.callback;c._methods=q[P](",");return Za(d,e,c)},fd=["style","data-gapiscan"],hd=function(a){for(var b=T(),c=0!=a[qa][Da]()[x]("g:"),d=0,e=a[Aa][D];d<e;d++){var f=a[Aa][d],g=f.name,k=f.value;0<=Ka[I](fd,g)||c&&0!=g[x]("data-")||"null"===k||"specified"in f&&!f.specified||(c&&(g=g[B](5)),b[g[Da]()]=k)}a=a[H];(c=gd(a&&a[Ca]))&&(b.height=r(c));(a=gd(a&&a[ka]))&&(b.width=r(a));return b},gd=function(a){var b=void 0;"number"===typeof a?
b=a:"string"===typeof a&&(b=ea(a,10));return b},jd=function(){var a=Y.drw;kc(function(b){if(a!==b.id&&4!=b.state){var c=b.id,d=b[sa],e=b.url;b=b.userParams;var f=R[ma](c);if(f){var g=ed(d,b,0);g?(f=f[O],e[v](/\#.*/,"")[v](/(\?|&)ic=1/,"")!==g[v](/\#.*/,"")[v](/(\?|&)ic=1/,"")&&(b.dontclear=!0,b.rd=!0,b.ri=!0,ga(b,d),id(f,b),(d=$[f.lastChild.id])&&(d.oid=c),lc(c,4))):delete $[c]}else delete $[c]}})};var kd,ld,md,nd,od,pd=/(?:^|\s)g-((\S)*)(?:$|\s)/,qd={plusone:!0,autocomplete:!0,profile:!0,signin:!0};kd=S(Y,"SW",T());ld=S(Y,"SA",T());md=S(Y,"SM",T());nd=S(Y,"FW",[]);od=null;
var sd=function(a,b){rd(void 0,!1,a,b)},rd=function(a,b,c,d){sb("ps0",!0);c=("string"===typeof c?p[ma](c):c)||R;var e;e=R[ya];if(c.querySelectorAll&&(!e||8<e)){e=d?[d]:Sa(kd)[na](Sa(ld))[na](Sa(md));for(var f=[],g=0;g<e[D];g++){var k=e[g];f[s](".g-"+k,"g\\:"+k)}e=c.querySelectorAll(f[P](","))}else e=c[va]("*");c=T();for(f=0;f<e[D];f++){g=e[f];var h=g,k=d,q=h[qa][Da](),m=void 0;h[J]("data-gapiscan")?k=null:(0==q[x]("g:")?m=q[B](2):(h=(h=r(h.className||h[J]("class")))&&pd[ja](h))&&(m=h[1]),k=!m||!(kd[m]||
ld[m]||md[m])||k&&m!==k?null:m);k&&(qd[k]||0==g[qa][Da]()[x]("g:")||0!=Sa(hd(g))[D])&&(g[A]("data-gapiscan",!0),S(c,k,[])[s](g))}if(b)for(var n in c)for(b=c[n],d=0;d<b[D];d++)b[d][A]("data-onload",!0);for(var z in c)nd[s](z);sb("ps1",!0);if((n=nd[P](":"))||a)try{W.load(n,a)}catch(u){hc(u);return}if(td(od||{}))for(var w in c){a=c[w];z=0;for(b=a[D];z<b;z++)a[z].removeAttribute("data-gapiscan");ud(w)}else{d=[];for(w in c)for(a=c[w],z=0,b=a[D];z<b;z++)e=a[z],vd(w,e,hd(e),d,b);wd(n,d)}},xd=function(a){var b=
S(W,a,{});b.go||(b.go=function(b){return sd(b,a)},b.render=function(b,d){var e=d||{};ga(e,a);return id(b,e)})},yd=function(a){kd[a]=!0},zd=function(a){ld[a]=!0},Ad=function(a){md[a]=!0};var ud=function(a,b){var c=kb(a);b&&c?(c(b),(c=b.iframeNode)&&c[A]("data-gapiattached",!0)):W.load(a,function(){var c=kb(a),e=b&&b.iframeNode;e&&c?(c(b),e[A]("data-gapiattached",!0)):(0,W[a].go)(e&&e[O])})},td=function(){return!1},wd=function(){},vd=function(a,b,c,d,e,f){switch(Bd(b,a,f)){case 0:a=md[a]?a+"_annotation":a;d={};d.iframeNode=b;d.userParams=c;ud(a,d);break;case 1:var g;if(b[O]){for(var k in c){if(f=U(c,k))f=c[k],f=!!f&&"object"===typeof f&&(!f[C]||f[C]===ba[E][C]||f[C]===da[E][C]);if(f)try{var h=
Xc(c[k]);600>h[D]?c[k]=h:delete c[k]}catch(q){delete c[k]}}f=!0;c.dontclear&&(f=!1);delete c.dontclear;jc();h=ed(a,c,e);k={allowPost:1,attributes:bd};k.dontclear=!f;e={};e.userParams=c;e.url=h;ga(e,a);var m;c.rd?m=b:(m=p[y]("div"),b[A]("data-gapistub",!0),m[H].cssText="position:absolute;width:450px;left:-10000px;",b[O].insertBefore(m,b));e.siteElement=m;m.id||(b=m,S(dd,a,0),f="___"+a+"_"+dd[a]++,b.id=f);b=T();b[">type"]=a;V(c,b);f=h;c=m;h=k||{};b=h[Aa]||{};Ua(!h.allowPost||!b.onload,"onload is not supported by post iframe");
k=b=f;Oc[t](b)&&(k=Z("iframes/"+k[M](1)+"/url"),Ua(!!k,"Unknown iframe url config for - "+b));f=$a(R,k[v](Pc,Qc));b=c.ownerDocument||R;m=0;do k=h.id||["I",Lc++,"_",(new Date)[ua]()][P]("");while(b[ma](k)&&5>++m);Ua(5>m,"Error creating iframe id");m={};var n={};b[ya]&&9>b[ya]&&(m.hostiemode=b[ya]);V(h.queryParams||{},m);V(h.fragmentParams||{},n);var z=h.pfname,u=T();u.id=k;u.parent=b[G][xa]+"//"+b[G].host;var w=X(b[G][L],"parent"),z=z||"";!z&&w&&(w=X(b[G][L],"id",""),z=X(b[G][L],"pfname",""),z=w?z+
"/"+w:"");u.pfname=z;V(u,n);(u=X(f,"rpctoken")||m.rpctoken||n.rpctoken)||(u=n.rpctoken=h.rpctoken||r(Math.round(1E8*Bc())));h.rpctoken=u;w=b[G][L];u=T();(z=X(w,"_bsh",Y.bsh))&&(u._bsh=z);(w=ib(w))&&(u.jsh=w);h.hintInFragment?V(u,n):V(u,m);f=Za(f,m,n,h.paramsSerializer);n=T();V(Jc,n);V(h[Aa],n);n.name=n.id=k;n.src=f;h.eurl=f;if((h||{}).allowPost&&2E3<f[D]){m=Wa(f);n.src="";n["data-postorigin"]=f;f=Nc(b,c,n,k);-1!=navigator.userAgent[x]("WebKit")&&(g=f.contentWindow.document,g.open(),n=g[y]("div"),
u={},w=k+"_inner",u.name=w,u.src="",u.style="display:none",Nc(b,n,u,w,h));n=(h=m.j[0])?h[F]("&"):[];h=[];for(u=0;u<n[D];u++)w=n[u][F]("=",2),h[s]([fa(w[0]),fa(w[1])]);m.j=[];n=Xa(m);m=b[y]("form");m.action=n;m.method="POST";m.target=k;m[H].display="none";for(k=0;k<h[D];k++)n=b[y]("input"),ga(n,"hidden"),n.name=h[k][0],n.value=h[k][1],m[ha](n);c[ha](m);m.submit();m[O][wa](m);g&&g.close();g=f}else g=Nc(b,c,n,k,h);e.iframeNode=g;e.id=g[J]("id");g=e.id;c=T();c.id=g;c.userParams=e.userParams;c.url=e.url;
ga(c,e[sa]);c.state=1;$[g]=c;g=e}else g=null;g&&((e=g.id)&&d[s](e),ud(a,g))}},Bd=function(a,b,c){if(a&&1===a.nodeType&&b){if(c)return 1;if(md[b]){if(hb[a[qa][Da]()])return(a=a.innerHTML)&&a[v](/^[\s\xa0]+|[\s\xa0]+$/g,"")?0:1}else{if(ld[b])return 0;if(kd[b])return 1}}return null},id=function(a,b){var c=b[sa];delete b[sa];var d=("string"===typeof a?p[ma](a):a)||void 0;if(d){var e={},f;for(f in b)U(b,f)&&(e[f[Da]()]=b[f]);e.rd=1;(f=!!e.ri)&&delete e.ri;var g=[];vd(c,d,e,g,0,f);wd(c,g)}else hc("string"===
"gapi."+c+".render: missing element "+typeof a?a:"")};S(W,"platform",{}).go=sd;var td=function(a){for(var b=["_c","jsl","h"],c=0;c<b[D]&&a;c++)a=a[b[c]];b=ib(Ha[L]);return!a||0!=a[x]("n;")&&0!=b[x]("n;")&&a!==b},wd=function(a,b){Cd(a,b)},db=function(a){rd(a,!0)},Dd=function(a,b){for(var c=b||[],d=0;d<c[D];++d)a(c[d]);for(d=0;d<c[D];d++)xd(c[d])};
wb[s](["platform",function(a,b,c){od=c;b&&nd[s](b);Dd(yd,a);Dd(zd,c._c.annotation);Dd(Ad,c._c.bimodal);ac();Zb();if("explicit"!=Z("parsetags")){jb(a);fc(ec())&&!Z("disableRealtimeCallback")&&jc();var d;c&&(a=c.callback)&&(d=Ta(a),delete c.callback);fb(function(){db(d)})}}]);W._pl=!0;var Ed=function(a){a=(a=$[a])?a.oid:void 0;if(a){var b=R[ma](a);b&&b[O][wa](b);delete $[a];Ed(a)}};var Fd=/^\{h\:'/,Gd=/^!_/,Hd="",Cd=function(a,b){function c(){bb("message",d,"remove","de")}function d(d){var g=d.data,k=d.origin;if(Id(g,b)){var h=e;e=!1;h&&sb("rqe");Jd(a,function(){h&&sb("rqd");c();for(var a=S(Y,"RPMQ",[]),b=0;b<a[D];b++)a[b]({data:g,origin:k})})}}if(0!==b[D]){Hd=X(Ha[L],"pfname","");var e=!0;bb("message",d,"add","at");Tb(a,c)}},Id=function(a,b){a=r(a);if(Fd[t](a))return!0;var c=!1;Gd[t](a)&&(c=!0,a=a[B](2));if(!/^\{/[t](a))return!1;var d=Yc(a);if(!d)return!1;var e=d.f;if(d.s&&
e&&-1!=Ka[I](b,e)){if("_renderstart"===d.s||d.s===Hd+"/"+e+"::_renderstart"){var f=d.a&&d.a[c?0:1],c=R[ma](e);lc(e,2);if(f&&c&&f[ka]&&f[Ca]){n:{d=c[O];e=f||{};if(ic()){var g=c.id;if(g){f=(f=$[g])?f.state:void 0;if(1===f||4===f)break n;Ed(g)}}(f=d.nextSibling)&&f[J]&&f[J]("data-gapistub")&&(d[O][wa](f),d[H].cssText="");var f=e[ka],k=e[Ca],h=d[H];h.textIndent="0";h.margin="0";h.padding="0";h.background="transparent";h.borderStyle="none";h.cssFloat="none";h.styleFloat="none";h.lineHeight="normal";h.fontSize=
"1px";h.verticalAlign="baseline";d=d[H];d.display="inline-block";h=c[H];h.position="static";h.left=0;h.top=0;h.visibility="visible";f&&(d.width=h.width=f+"px");k&&(d.height=h.height=k+"px");e.verticalAlign&&(d.verticalAlign=e.verticalAlign);g&&lc(g,3)}c["data-csi-wdt"]=(new Date)[ua]()}}return!0}return!1},Jd=function(a,b){Tb(a,b)};var Kd=function(a,b){this.B=a;var c=b||{};this.R=c.W;this.A=c.domain;this.C=c.path;this.S=c.X},Ld=/^[-+/_=.:|%&a-zA-Z0-9@]*$/,Md=/^[A-Z_][A-Z0-9_]{0,63}$/;Kd[E].write=function(a,b){if(!Md[t](this.B))throw"Invalid cookie name";if(!Ld[t](a))throw"Invalid cookie value";var c=this.B+"="+a;this.A&&(c+=";domain="+this.A);this.C&&(c+=";path="+this.C);var d="number"===typeof b?b:this.R;if(0<=d){var e=new Date;e.setSeconds(e.getSeconds()+d);c+=";expires="+e.toUTCString()}this.S&&(c+=";secure");p.cookie=c};
Kd.iterate=function(a){for(var b=p.cookie[F](/;\s*/),c=0;c<b[D];++c){var d=b[c][F]("="),e=d[ia]();a(e,d[P]("="))}};var Nd=function(a){this.U=a},Od={};Nd[E].write=function(a){Od[this.U]=a};Nd.iterate=function(a){for(var b in Od)Od.hasOwnProperty(b)&&a(b,Od[b])};var Pd="https:"===l[G][xa],Qd=Pd||"http:"===l[G][xa]?Kd:Nd,Rd=function(a){var b=a[B](1),c="",d=l[G].hostname;if(""!==b){c=ea(b,10);if(isNaN(c))return null;b=d[F](".");if(b[D]<c-1)return null;b[D]==c-1&&(d="."+d)}else d="";return{d:"S"==a[oa](0),domain:d,i:c}},Sd=function(a){if(0!==a[x]("GCSC"))return null;var b={w:!1};a=a[B](4);if(!a)return b;var c=a[oa](0);a=a[B](1);var d=a.lastIndexOf("_");if(-1==d)return b;var e=Rd(a[B](d+1));if(null==e)return b;a=a[M](0,d);if("_"!==a[oa](0))return b;d="E"===c&&
e.d;return!d&&("U"!==c||e.d)||d&&!Pd?b:{w:!0,d:d,V:a[B](1),domain:e.domain,i:e.i}},Td=function(a){if(!a)return[];a=a[F]("=");return a[1]?a[1][F]("|"):[]},Ud=function(a){a=a[F](":");return{t:a[0][F]("=")[1],O:Td(a[1]),Z:Td(a[2]),Y:Td(a[3])}},Vd=function(){var a,b=null;Qd.iterate(function(c,d){if(0===c[x]("G_AUTHUSER_")){var e=Rd(c[M](11));if(!a||e.d&&!a.d||e.d==a.d&&e.i>a.i)a=e,b=d}});if(null!==b){var c;Qd.iterate(function(b,d){var e=Sd(b);e&&e.w&&e.d==a.d&&e.i==a.i&&(c=d)});if(c){var d=Ud(c),e=d&&
d.O[Number(b)],d=d&&d.t;if(e)return{P:b,Q:e,t:d}}}return null};var Wd=function(a){this.G=a};Wd[E].k=0;Wd[E].F=2;Wd[E].G=null;Wd[E].v=!1;Wd[E].L=function(){this.v||(this.k=0,this.v=!0,this.D())};Wd[E].D=function(){this.v&&(this.G()?this.k=this.F:this.k=Math.min(2*(this.k||this.F),120),l.setTimeout(Ga(this.D,this),1E3*this.k))};for(var Xd=0;64>Xd;++Xd);var Yd=null,ic=function(){return Y.oa=!0},jc=function(){Y.oa=!0;var a=Vd();(a=a&&a.P)&&$b("googleapis.config/sessionIndex",a);Yd||(Yd=S(Y,"ss",new Wd(Zd)));a=Yd;a.L&&a.L()},Zd=function(){var a=Vd(),b=a&&a.Q||null,c=a&&a.t;Tb("auth",{callback:function(){var a=Q.gapi.auth,e={client_id:c,session_state:b};a.checkSessionState(e,function(b){var c=e.session_state,k=Z("isLoggedIn");b=c&&b||!c&&!b;k!=b&&($b("isLoggedIn",b),jc(),jd());c=ec();k!=b&&fc(c)&&!Z("disableRealtimeCallback")&&a._pimf(c,!0)})}});return!0};sb("bs0",!0,l.gapi._bs);sb("bs1",!0);delete l.gapi._bs;})();
gapi.load("plusone",{callback:window["gapi_onload"],_c:{"jsl":{"ci":{"llang":"es","client":{"cors":false},"plus_layer":{"isEnabled":false},"enableMultilogin":false,"disableRealtimeCallback":false,"isLoggedIn":false,"iframes":{"additnow":{"methods":["launchurl"],"url":"https://apis.google.com/additnow/additnow.html?usegapi\u003d1\u0026bsv\u003do"},"person":{"url":":socialhost:/:session_prefix:_/widget/render/person?usegapi\u003d1\u0026bsv\u003do"},"plus_followers":{"params":{"url":""},"url":":socialhost:/_/im/_/widget/render/plus/followers?usegapi\u003d1\u0026bsv\u003do"},"signin":{"methods":["onauth"],"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/signin?usegapi\u003d1\u0026bsv\u003do"},"commentcount":{"url":":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi\u003d1\u0026bsv\u003do"},"page":{"url":":socialhost:/:session_prefix:_/widget/render/page?usegapi\u003d1\u0026bsv\u003do"},"hangout":{"url":"https://talkgadget.google.com/:session_prefix:talkgadget/_/widget?bsv\u003do"},"plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/plus/circle?usegapi\u003d1\u0026bsv\u003do"},"card":{"url":":socialhost:/:session_prefix:_/hovercard/card?bsv\u003do"},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?usegapi\u003d1\u0026bsv\u003do"},"zoomableimage":{"url":"https://ssl.gstatic.com/microscope/embed/?bsv\u003do"},"follow":{"url":":socialhost:/:session_prefix:_/widget/render/follow?usegapi\u003d1\u0026bsv\u003do"},"shortlists":{"url":"?bsv\u003do"},"plus":{"url":":socialhost:/:session_prefix:_/widget/render/badge?usegapi\u003d1\u0026bsv\u003do"},"configurator":{"url":":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi\u003d1\u0026bsv\u003do"},":socialhost:":"https://apis.google.com","post":{"params":{"url":""},"url":":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi\u003d1\u0026bsv\u003do"},"community":{"url":":socialhost:/:session_prefix:_/widget/render/community?usegapi\u003d1\u0026bsv\u003do"},"rbr_s":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/recobarsimplescroller?bsv\u003do"},"autocomplete":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/autocomplete?bsv\u003do"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/+1/sharebutton?plusShare\u003dtrue\u0026usegapi\u003d1\u0026bsv\u003do"},":source:":"3p","savetowallet":{"url":"https://clients5.google.com/s2w/o/savetowallet?bsv\u003do"},"rbr_i":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/recobarinvitation?bsv\u003do"},"appcirclepicker":{"url":":socialhost:/:session_prefix:_/widget/render/appcirclepicker?bsv\u003do"},":im_socialhost:":"https://plus.googleapis.com","savetodrive":{"methods":["save"],"url":"https://drive.google.com/savetodrivebutton?usegapi\u003d1\u0026bsv\u003do"},":signuphost:":"https://plus.google.com","plusone":{"params":{"count":"","size":"","url":""},"url":":socialhost:/:session_prefix:_/+1/fastbutton?usegapi\u003d1\u0026bsv\u003do"},"comments":{"methods":["scroll","openwindow"],"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/comments?usegapi\u003d1\u0026bsv\u003do"},"ytsubscribe":{"url":"https://www.youtube.com/subscribe_embed?usegapi\u003d1\u0026bsv\u003do"}},"isPlusUser":false,"debug":{"host":"https://apis.google.com","reportExceptionRate":0.05,"rethrowException":false},"eesw":{"enabled":false},"enableContextualSignin":false,"deviceType":"desktop","inline":{"css":1},"lexps":[102,98,99,79,109,45,17,117,115,81,95,125,124,122,61,30],"include_granted_scopes":true,"oauth-flow":{"improveToastUi":true,"authAware":true,"usegapi":false,"disableOpt":true,"authUrl":"https://accounts.google.com/o/oauth2/auth","proxyUrl":"https://accounts.google.com/o/oauth2/postmessageRelay","toastCfg":"1000:3000:1000"},"report":{"host":"https://apis.google.com","rate":0.001,"apis":["iframes\\..*","gadgets\\..*","gapi\\.appcirclepicker\\..*","gapi\\.auth\\..*","gapi\\.client\\..*","gapi\\.signin\\..*"]},"csi":{"rate":0.01},"googleapis.config":{"auth":{"useFirstPartyAuthV2":false}}},"h":"m;/_/scs/apps-static/_/js/k\u003doz.gapi.es.ovYiWtCfZS8.O/m\u003d__features__/am\u003dIQ/rt\u003dj/d\u003d1/t\u003dzcms/rs\u003dAItRSTOThwZSrNi2OG_nTwGEpqL1_O8i5w","u":"https://apis.google.com/js/plusone.js","hee":true,"fp":"cfe279e0a543a808472dedd6ac424c8cda8c4bc7","dpo":false},"platform":["additnow","comments","commentcount","community","follow","page","person","plus","plusone","post","savetodrive","shortlists","ytsubscribe","zoomableimage","savetowallet","hangout"],"fp":"cfe279e0a543a808472dedd6ac424c8cda8c4bc7","annotation":["interactivepost","recobar","autocomplete","profile"],"bimodal":["signin"]}});