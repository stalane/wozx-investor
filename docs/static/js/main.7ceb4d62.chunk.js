(this["webpackJsonpwozx-investor"]=this["webpackJsonpwozx-investor"]||[]).push([[0],{199:function(e,t,a){"use strict";a.r(t);var n,r=a(0),s=a.n(r),o=a(57),c=a.n(o),i=a(2),l=a.n(i),d=a(3),u=a(58),m=a.n(u),h={tronWeb:!1,contract:!1,setTronWeb(e){this.tronWeb=e},setContract(e,t){var a=this;return Object(d.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.contract().at(t);case 2:a.contract=n.sent;case 3:case"end":return n.stop()}}),n)})))()}},p="TFN5pDancsWYemqMJz63hjYyi29wCvjyMU",w="2E37A3CE-63DF-4BA1-8C4F-13A82E27AC59",f="624620b9b7c29ee6704288f27c3e60b41e9fa0e5415cf1dbae296951e091fc48",b=a(10),v=a.n(b),x=a(11),E=a.n(x),g="",N="",W="",k="https://proxy-wozx.herokuapp.com/",y=w,I=f;class T extends r.Component{constructor(e){super(e),this.state={amountTrx:"",usdtrx:""},this.deposit=this.deposit.bind(this),this.firma=this.firma.bind(this),this.rateWozx=this.rateWozx.bind(this),this.comprarWozx=this.comprarWozx.bind(this),this.rateTRX=this.rateTRX.bind(this),this.venderTRX=this.venderTRX.bind(this)}componentDidMount(){return Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.setContract(window.tronWeb,p);case 2:case"end":return e.stop()}}),e)})))()}rateTRX(){return Object(d.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(e){return"TRX"===e.symbol},"stevenSTC",a={"Access-Control-Allow-Origin":"*","User-Agent":"stevenSTC","Access-Control-Allow-Headers":"Origin, X-Requested-With",mode:"no-cors"},e.next=5,fetch(k+"https://data.gateio.life/api2/1/marketlist",{method:"GET",headers:a}).then(e=>e.json()).then(e=>{g=e.data.find(t).rate,g=parseFloat(g).toFixed(6),g=(g-=.01*g).toString()}).catch(e=>console.log("Error:",e));case 5:case"end":return e.stop()}}),e)})))()}venderTRX(){var e=this;return Object(d.a)(l.a.mark((function t(){var a,r,s,o,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.rateTRX();case 2:return n=document.getElementById("amount").value,"trx_usdt",a=v.a.stringify({currencyPair:"trx_usdt",rate:g,amount:n}),r={"Content-Type":"application/x-www-form-urlencoded"},s=E.a.hmac(I),o=s.finalize(a),c=o.toString("hex"),r.KEY=y,r.SIGN=c,t.next=13,fetch(k+"https://api.gateio.life/api2/1/private/sell/",{method:"POST",headers:r,body:a}).then(e=>e.json()).then(t=>{var a=parseFloat(t.filledAmount);a+=parseFloat(t.leftAmount);var n=parseFloat(t.filledRate);W=n*a-n*a*.002,"true"===t.result&&e.comprarWozx(W)}).catch(e=>console.log("Error:",e));case 13:case"end":return t.stop()}}),t)})))()}rateWozx(){return Object(d.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(e){return"WOZX"===e.symbol},"stevenSTC",a={"Access-Control-Allow-Origin":"*","User-Agent":"stevenSTC","Access-Control-Allow-Headers":"Origin, X-Requested-With"},e.next=5,fetch(k+"https://data.gateio.life/api2/1/marketlist",{method:"GET",headers:a}).then(e=>e.json()).then(e=>{N=e.data.find(t).rate,N=parseFloat(N),N=(N+=.01*N).toString()}).catch(e=>console.log("Error:",e));case 5:case"end":return e.stop()}}),e)})))()}comprarWozx(e){var t=this;return Object(d.a)(l.a.mark((function a(){var n,r,s,o,c,i;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.rateWozx();case 2:return n=(n=e/parseFloat(N).toFixed(6)).toString(),"wozx_usdt",r=v.a.stringify({currencyPair:"wozx_usdt",rate:N,amount:n}),s={"Content-Type":"application/x-www-form-urlencoded"},o=E.a.hmac(I),c=o.finalize(r),i=c.toString("hex"),s.KEY=y,s.SIGN=i,a.next=14,fetch(k+"https://api.gateio.life/api2/1/private/buy/",{method:"POST",headers:s,body:r}).then(e=>e.json()).then(e=>{var a=parseFloat(e.filledAmount);a+=parseFloat(e.leftAmount),console.log(a);var n=window.tronWeb.sha3(e.orderNumber.toString());"true"===e.result&&t.deposit(a,n)}).catch(e=>console.log("Error:",e));case 14:case"end":return a.stop()}}),a)})))()}deposit(e,t){return Object(d.a)(l.a.mark((function a(){var n,r,s,o,c,i,d,u,m,p,w,f,b,v;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if((n=document.location.href).indexOf("?")>0){for(r=n.split("?")[1],s=r.split("&"),o={},c=0,i=s.length;c<i;c++)d=s[c].split("="),o[d[0]]=unescape(decodeURI(d[1]));o.ref?document.getElementById("sponsor").value=o.ref:document.getElementById("sponsor").value="T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb"}else document.getElementById("sponsor").value="T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb";return u=document.getElementById("amount").value,m=document.getElementById("sponsor").value,document.getElementById("amount").value="",e*=1e6,e=parseInt(e),a.next=9,window.tronWeb.sha3(e.toString());case 9:return p=a.sent,a.next=12,window.tronWeb.trx.getAccount();case 12:return w=a.sent,f=w.address,a.next=16,window.tronWeb.sha3(f);case 16:return b=a.sent,v=b,a.next=20,h.contract.deposit(e,e.toString(),v,m,p,b,t).send({shouldPollResponse:!0,callValue:1e6*u});case 20:case"end":return a.stop()}}),a)})))()}firma(){return Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=console,e.next=3,window.tronWeb.sha3("0x5B38Da6a701c568545dCfcB03FcB875f56beddC4");case 3:e.t1=e.sent,e.t0.log.call(e.t0,e.t1);case 5:case"end":return e.stop()}}),e)})))()}render(){return s.a.createElement("div",{className:"card wow bounceInUp"},s.a.createElement("i",{className:"fa fa-diamond"}),s.a.createElement("div",{className:"card-body"},s.a.createElement("h5",{className:"card-title"},"Diamante"),s.a.createElement("h6",{className:"card-text"},"Retorno: ",s.a.createElement("strong",null,"200%"),s.a.createElement("br",null),s.a.createElement("strong",null,"2%")," por d\xeda",s.a.createElement("br",null)),s.a.createElement("form",null,s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",className:"form-control",id:"amount",placeholder:"Min. 50 TRX"}),s.a.createElement("p",{className:"card-text"},"Debes tener ~10 TRX para hacer la transacci\xf3n"))),s.a.createElement("button",{type:"button",className:"btn btn-light",onClick:()=>this.venderTRX()},"Invertir"),s.a.createElement("button",{type:"button",className:"btn btn-light",onClick:()=>this.firma()},"firma")))}}class R extends r.Component{constructor(e){super(e),this.state={totalInvestors:0,totalInvested:0,totalRefRewards:0},this.totalInvestors=this.totalInvestors.bind(this)}componentDidMount(){var e=this;return Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.setContract(window.tronWeb,p);case 2:setInterval(()=>e.totalInvestors(),1e3);case 3:case"end":return t.stop()}}),t)})))()}totalInvestors(){var e=this;return Object(d.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.contract.setstate().call();case 2:a=t.sent,e.setState({totalInvestors:parseInt(a.Investors._hex),totalInvested:parseInt(a.Invested._hex)/1e6,totalRefRewards:parseInt(a.RefRewards._hex)/1e6});case 4:case"end":return t.stop()}}),t)})))()}render(){var e=this.state,t=e.totalInvestors,a=e.totalInvested,n=e.totalRefRewards;return s.a.createElement("div",{className:"row counters"},s.a.createElement("div",{className:"col-md-12  text-center"},s.a.createElement("span",{"data-toggle":"counter-up"},t),s.a.createElement("p",null,"Inversores Globales")),s.a.createElement("div",{className:"col-md-12 w-100 text-center"},s.a.createElement("span",{"data-toggle":"counter-up"},a," TRX"),s.a.createElement("p",null,"Invertido Global")),s.a.createElement("div",{className:"col-md-12 w-100 text-center"},s.a.createElement("span",{"data-toggle":"counter-up"},n," TRX"),s.a.createElement("p",null,"Recompensas  Globales Referidos")))}}var O=a(59),S="",C="",A="https://proxy-wozx.herokuapp.com/",j=w,z=f;class X extends r.Component{constructor(e){super(e),this.state={ratetrx:"",estado:{result:!1,texto1:"cargando.",texto2:"cargando..",texto3:"cargando..."},ratewozx:"",datos:{},direccion:"",link:"Haz una inversi\xf3n para obtener el LINK de referido",registered:!1,balanceRef:0,totalRef:0,invested:0,paidAt:0,my:0,withdrawn:0},this.Investors=this.Investors.bind(this),this.Link=this.Link.bind(this),this.withdraw=this.withdraw.bind(this),this.rateWozx=this.rateWozx.bind(this),this.comprarWozx=this.comprarWozx.bind(this),this.rateTRX=this.rateTRX.bind(this),this.venderTRX=this.venderTRX.bind(this),this.prueba=this.prueba.bind(this)}componentDidMount(){var e=this;return Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.setContract(window.tronWeb,p);case 2:e.Investors(),e.Link(),setInterval(()=>e.Investors(),1e4),setInterval(()=>e.Link(),1e4);case 6:case"end":return t.stop()}}),t)})))()}rateTRX(){var e=this;return Object(d.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=function(e){return"TRX"===e.symbol},"stevenSTC",n={"Access-Control-Allow-Origin":"*","User-Agent":"stevenSTC","Access-Control-Allow-Headers":"Origin, X-Requested-With"},t.next=5,fetch(A+"https://data.gateio.life/api2/1/marketlist",{method:"GET",headers:n}).then(e=>e.json()).then(e=>{S=e.data.find(a).rate,S=parseFloat(S).toFixed(6),S=(S-=.01*S).toString()}).catch(e=>console.log("Error:",e));case 5:e.setState({ratetrx:S});case 6:case"end":return t.stop()}}),t)})))()}venderTRX(){var e=this;return Object(d.a)(l.a.mark((function t(){var a,n,r,s,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.rateTRX();case 2:return"40","trx_usdt",a=v.a.stringify({currencyPair:"trx_usdt",rate:S,amount:"40"}),n={"Content-Type":"application/x-www-form-urlencoded"},r=E.a.hmac(z),s=r.finalize(a),o=s.toString("hex"),n.KEY=j,n.SIGN=o,t.next=13,fetch(A+"https://api.gateio.life/api2/1/private/sell/",{method:"POST",headers:n,body:a}).then(e=>e.json()).then(e=>{console.log(e)}).catch(e=>console.log("Error:",e));case 13:case"end":return t.stop()}}),t)})))()}rateWozx(){var e=this;return Object(d.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=function(e){return"WOZX"===e.symbol},"stevenSTC",n={"Access-Control-Allow-Origin":"*","User-Agent":"stevenSTC","Access-Control-Allow-Headers":"Origin, X-Requested-With"},t.next=5,fetch(A+"https://data.gateio.life/api2/1/marketlist",{method:"GET",headers:n}).then(e=>e.json()).then(e=>{C=e.data.find(a).rate,C=parseFloat(C).toFixed(6),C=(C+=.01*C).toString()}).catch(e=>console.log("Error:",e));case 5:e.setState({ratewozx:C});case 6:case"end":return t.stop()}}),t)})))()}comprarWozx(){var e=this;return Object(d.a)(l.a.mark((function t(){var a,n,r,s,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.rateWozx();case 2:return"1","wozx_usdt",a=v.a.stringify({currencyPair:"wozx_usdt",rate:C,amount:"1"}),n={"Content-Type":"application/x-www-form-urlencoded"},r=E.a.hmac(z),s=r.finalize(a),o=s.toString("hex"),n.KEY=j,n.SIGN=o,t.next=13,fetch(A+"https://api.gateio.life/api2/1/private/buy/",{method:"POST",headers:n,body:a}).then(e=>e.json()).then(e=>{console.log(e)}).catch(e=>console.log("Error:",e));case 13:case"end":return t.stop()}}),t)})))()}prueba(){return Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=function(){return(t=Object(d.a)(l.a.mark((function e(t="",a={}){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"GET",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/x-www-form-urlencoded","Accept-Language":"x-requested-with"},redirect:"follow",referrerPolicy:"origin"});case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},function(){return t.apply(this,arguments)}("https://data.gateio.life/api2/1/marketlist",{}).then(e=>{console.log(e)});case 3:case"end":return e.stop()}}),e)})))()}Link(){var e=this;return Object(d.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.state.registered){t.next=12;break}return(a=document.location.href).indexOf("?")>0&&(a=a.split("?")[0]),t.next=6,window.tronWeb.trx.getAccount();case 6:n=t.sent,n=window.tronWeb.address.fromHex(n.address),n=a+"?ref="+n,e.setState({link:n}),t.next=13;break;case 12:e.setState({link:"Haz una inversi\xf3n para obtener el LINK de referido"});case 13:case"end":return t.stop()}}),t)})))()}Investors(){var e=this;return Object(d.a)(l.a.mark((function t(){var a,n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.tronWeb.trx.getAccount();case 2:return a=t.sent,t.next=5,h.contract.investors(a.address).call();case 5:return n=t.sent,t.next=8,h.contract.MYwithdrawable().call();case 8:r=t.sent,e.setState({direccion:window.tronWeb.address.fromHex(a.address),registered:n.registered,balanceRef:parseInt(n.balanceTrx._hex)/1e6,totalRef:parseInt(n.withdrawnTrx._hex)/1e6,invested:parseInt(n.investedWozx._hex)/1e6,my:parseInt(r.amount._hex)/1e6,withdrawn:parseInt(n.withdrawnWozx._hex)/1e6});case 10:case"end":return t.stop()}}),t)})))()}withdraw(){return Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.contract.withdraw().send();case 2:case"end":return e.stop()}}),e)})))()}render(){var e=this.state,t=e.balanceRef,a=e.totalRef,n=e.invested,r=e.withdrawn,o=e.my,c=e.direccion,i=e.link;return s.a.createElement("div",{className:"container"},s.a.createElement("header",{style:{"text-align":"center"},className:"section-header"},s.a.createElement("h3",{className:"white"},s.a.createElement("span",{style:{"font-weight":"bold"}},"Mi Oficina:")," ",s.a.createElement("br",null),s.a.createElement("span",{style:{"font-size":"18px"}},c)),s.a.createElement("br",null),s.a.createElement("h3",{className:"white",style:{"font-weight":"bold"}},"Link de referido:"),s.a.createElement("h6",{className:"white"},s.a.createElement("a",{href:i},i),"\xa0",s.a.createElement(O.CopyToClipboard,{text:i},s.a.createElement("button",{type:"button",className:"btn btn-info"},"COPIAR"))),s.a.createElement("hr",null)),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6 col-lg-5 offset-lg-1 wow bounceInUp","data-wow-duration":"1.4s"},s.a.createElement("div",{className:"box"},s.a.createElement("div",{className:"icon"},s.a.createElement("i",{className:"ion-ios-analytics-outline",style:{color:"#ff689b"}})),s.a.createElement("h4",{className:"title"},s.a.createElement("a",{href:"#services"},n," WOZX")),s.a.createElement("p",{className:"description"},"Mi inversi\xf3n"))),s.a.createElement("div",{className:"col-md-6 col-lg-5 wow bounceInUp","data-wow-duration":"1.4s"},s.a.createElement("div",{className:"box"},s.a.createElement("div",{className:"icon"},s.a.createElement("i",{className:"ion-ios-bookmarks-outline",style:{color:"#e9bf06"}})),s.a.createElement("h4",{className:"title"},s.a.createElement("a",{href:"#services"},a," TRX")),s.a.createElement("p",{className:"description"},"Total ganancias por referidos"))),s.a.createElement("div",{className:"col-md-6 col-lg-5 offset-lg-1 wow bounceInUp","data-wow-delay":"0.1s","data-wow-duration":"1.4s"},s.a.createElement("div",{className:"box"},s.a.createElement("div",{className:"icon"},s.a.createElement("i",{className:"ion-ios-paper-outline",style:{color:"#3fcdc7"}})),s.a.createElement("p",{className:"description"},"Mi balance"),s.a.createElement("h4",{className:"title"},s.a.createElement("a",{href:"#services"},o," TRX")))),s.a.createElement("div",{className:"col-md-6 col-lg-5 wow bounceInUp","data-wow-delay":"0.1s","data-wow-duration":"1.4s"},s.a.createElement("div",{className:"box"},s.a.createElement("div",{className:"icon"},s.a.createElement("i",{className:"ion-ios-paper-outline",style:{color:"#3fcdc7"}})),s.a.createElement("p",{className:"description"},"Balance por referidos"),s.a.createElement("h4",{className:"title"},s.a.createElement("a",{href:"#services"}," ",t," TRX")))),s.a.createElement("div",{className:"col-md-6 col-lg-5 offset-lg-1 wow bounceInUp","data-wow-delay":"0.1s","data-wow-duration":"1.4s"},s.a.createElement("div",{className:"box"},s.a.createElement("div",{className:"icon"},s.a.createElement("i",{className:"ion-ios-speedometer-outline",style:{color:"#41cf2e"}})),s.a.createElement("h4",{className:"title"},s.a.createElement("a",{href:"#services"},"Disponible")),s.a.createElement("p",{className:"description"},t+o," TRX ",s.a.createElement("button",{type:"button",className:"btn btn-info",onClick:()=>this.prueba()},"llamar API")),s.a.createElement("button",{type:"button",className:"btn btn-info",onClick:()=>this.venderTRX()},"vender TRX"),s.a.createElement("button",{type:"button",className:"btn btn-info",onClick:()=>this.comprarWozx()},"comprar Wozx"))),s.a.createElement("div",{className:"col-md-6 col-lg-5 wow bounceInUp","data-wow-delay":"0.2s","data-wow-duration":"1.4s"},s.a.createElement("div",{className:"box"},s.a.createElement("div",{className:"icon"},s.a.createElement("i",{className:"ion-ios-clock-outline",style:{color:"#4680ff"}})),s.a.createElement("h4",{className:"title"},s.a.createElement("a",{href:"#services"},"Retirado")),s.a.createElement("p",{className:"description"},r," TRX")))))}}class B extends r.Component{constructor(e){super(e),this.state={accountAddress:"Billetera NO conectada",accountBalance:"Billetera NO conectada",accountBandwidth:"Billetera NO conectada"}}componentDidMount(){setInterval(()=>this.fetchAccountAddress(),1e3),setInterval(()=>this.fetchAccountBalance(),1e3),setInterval(()=>this.fetchAccountBandwidth(),1e3)}fetchAccountAddress(){var e=this;return Object(d.a)(l.a.mark((function t(){var a,n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.tronWeb.trx.getAccount();case 2:a=t.sent,n=a.address,r=window.tronWeb.address.fromHex(n),e.setState({accountAddress:r});case 6:case"end":return t.stop()}}),t)})))()}fetchAccountBalance(){var e=this;return Object(d.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.tronWeb.trx.getBalance();case 2:a=t.sent,n=window.tronWeb.fromSun(a),e.setState({accountBalance:n});case 5:case"end":return t.stop()}}),t)})))()}fetchAccountBandwidth(){var e=this;return Object(d.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.tronWeb.trx.getBandwidth();case 2:a=t.sent,e.setState({accountBandwidth:a});case 4:case"end":return t.stop()}}),t)})))()}render(){var e=this.state,t=e.accountAddress,a=e.accountBalance,n=e.accountBandwidth;return s.a.createElement("div",{className:"col-lg-5 mb-5"},s.a.createElement("div",{className:"card wow bounceInUp"},s.a.createElement("i",{className:"fa fa-address-card-o"}),s.a.createElement("div",{className:"card-body"},s.a.createElement("h5",{className:"card-title"},"Billetera Conectada"),s.a.createElement("h6",{className:"card-text"},"Direcci\xf3n:",s.a.createElement("br",null),s.a.createElement("strong",null,s.a.createElement("span",null,t)),s.a.createElement("br",null),s.a.createElement("br",null),"Balance:",s.a.createElement("br",null),s.a.createElement("strong",null,s.a.createElement("span",null,a," TRX")),s.a.createElement("br",null),s.a.createElement("br",null),"Bandwidth:",s.a.createElement("br",null),s.a.createElement("strong",null,s.a.createElement("span",null,n)),s.a.createElement("br",null)))))}}var D=a(60),F=a.n(D),L="https://chrome.google.com/webstore/detail/ibnejdfjmmkpcnlpebklmnkoeoihofec/",_=s.a.createElement("div",{className:"col-xs-12 col-md-4 text-center"},s.a.createElement("img",{src:F.a,className:"img-fluid",alt:"TronLink logo"})),H=()=>{window.open(L,"_blank")},M=e=>{var t=e.installed;return void 0!==t&&t?s.a.createElement("div",{className:"tronLink row",onClick:H},s.a.createElement("div",{className:"info col-xs-12 col-md-8"},s.a.createElement("h1",null,"Log in Required"),s.a.createElement("p",null,"TronLink is installed but you must first log in. Open TronLink from the browser bar and set up your first wallet or decrypt a previously-created wallet.")),_):s.a.createElement("div",{className:"row",onClick:H},s.a.createElement("div",{className:"col-xs-12 col-md-8"},s.a.createElement("h1",null,"TronLink Required"),s.a.createElement("p",null,"To create a post or tip others you must install TronLink. TronLink is a TRON wallet for the browser that can be ",s.a.createElement("a",{href:L,target:"_blank",rel:"noopener noreferrer"},"installed from the Chrome Webstore"),". Once installed, return back and refresh the page.")),_)};class U extends r.Component{constructor(e){super(e),this.state={isowner:!1,retiros:"",saldo:0},this.isOwner=this.isOwner.bind(this),this.pararRetiros=this.pararRetiros.bind(this),this.consultarSaldo=this.consultarSaldo.bind(this)}componentDidMount(){var e=this;return Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.setContract(window.tronWeb,p);case 2:return t.next=4,h.contract.Do().call();case 4:t.sent?e.setState({retiros:"Deshabilitar retiros"}):e.setState({retiros:"Habilitar retiros"}),setInterval(()=>e.isOwner(),1e3),setInterval(()=>e.consultarSaldo(),1e3);case 8:case"end":return t.stop()}}),t)})))()}isOwner(){var e=this;return Object(d.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.contract.owner().call();case 2:return a=t.sent,a=window.tronWeb.address.fromHex(a),t.next=6,window.tronWeb.trx.getAccount();case 6:n=(n=t.sent).address,n=window.tronWeb.address.fromHex(n),a===n?e.setState({isowner:!0}):e.setState({isowner:!1});case 10:case"end":return t.stop()}}),t)})))()}pararRetiros(){var e=this;return Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.contract.withdraw000().send();case 2:return t.next=4,h.contract.Do().call();case 4:t.sent?(e.setState({retiros:"Deshabilitar retiros"}),alert("Los retiros han sido Habilitados")):(e.setState({retiros:"Habilitar retiros"}),alert("Los retiros han sido Deshabilitados"));case 6:case"end":return t.stop()}}),t)})))()}sacarSaldo(){return Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.contract.withdraw001().send();case 2:case"end":return e.stop()}}),e)})))()}consultarSaldo(){var e=this;return Object(d.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.contract.InContract().call();case 2:a=t.sent,a=parseInt(a._hex)/1e6,e.setState({saldo:a});case 5:case"end":return t.stop()}}),t)})))()}render(){var e=this.state,t=e.isowner,a=e.retiros,n=e.saldo;return t?s.a.createElement("div",{className:"col-lg-5 mb-5"},s.a.createElement("div",{className:"card wow bounceInUp"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h5",{className:"card-title"},"Panel Owner"),s.a.createElement("h6",{className:"card-text"},s.a.createElement("button",{type:"button",className:"btn btn-light",onClick:()=>this.pararRetiros()},a),s.a.createElement("hr",null),s.a.createElement("button",{type:"button",className:"btn btn-light",onClick:()=>this.sacarSaldo()},"Sacar ",n," TRX"))))):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null))}}class G extends r.Component{constructor(e){super(e),this.state={tronWeb:{installed:!1,loggedIn:!1}}}componentDidMount(){var e=this;return Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise(t=>{var a={installed:!!window.tronWeb,loggedIn:window.tronWeb&&window.tronWeb.ready};if(a.installed)return e.setState({tronWeb:a}),t();var n=0,r=setInterval(()=>{if(n>=10){return window.tronWeb=new m.a("https://api.trongrid.io","https://api.trongrid.io","https://api.trongrid.io"),e.setState({tronWeb:{installed:!1,loggedIn:!1}}),clearInterval(r),t()}if(a.installed=!!window.tronWeb,a.loggedIn=window.tronWeb&&window.tronWeb.ready,!a.installed)return n++;e.setState({tronWeb:a}),t()},100)});case 2:e.state.tronWeb.loggedIn||(window.tronWeb.defaultAddress={hex:window.tronWeb.address.toHex("TWiWt5SEDzaEqS6kE5gandWMNfxR2B5xzg"),base58:"TWiWt5SEDzaEqS6kE5gandWMNfxR2B5xzg"},window.tronWeb.on("addressChange",()=>{e.state.tronWeb.loggedIn||e.setState({tronWeb:{installed:!0,loggedIn:!0}})})),h.setTronWeb(window.tronWeb);case 4:case"end":return t.stop()}}),t)})))()}render(){return this.state.tronWeb.installed?this.state.tronWeb.loggedIn?s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("section",{id:"why-us",className:"wow fadeIn"},s.a.createElement("div",{className:"container"},s.a.createElement("header",{className:"section-header"},s.a.createElement("h3",null,"Has tu inversi\xf3n")),s.a.createElement("div",{className:"row"},s.a.createElement(T,null),s.a.createElement(B,null),s.a.createElement(U,null)),s.a.createElement("div",{className:"container"},s.a.createElement(R,null)))),s.a.createElement("section",{id:"services",className:"section-bg"},s.a.createElement(X,null)))):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container"},s.a.createElement(M,{installed:!0}))):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container"},s.a.createElement(M,null)))}}var P=G,q=document.getElementById("root");c.a.render(s.a.createElement(P,null),q)},60:function(e,t,a){e.exports=a.p+"static/media/TronLinkLogo.d3a8f115.png"},61:function(e,t,a){e.exports=a(199)},89:function(e,t){},90:function(e,t){}},[[61,1,2]]]);
//# sourceMappingURL=main.7ceb4d62.chunk.js.map