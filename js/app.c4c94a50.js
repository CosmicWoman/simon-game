(function(){var t={707:function(t,i,e){"use strict";var n=e(6848),s=function(){var t=this,i=t._self._c;return i("div",{attrs:{id:"app"}},[i("SimonGame")],1)},o=[],a=function(){var t=this,i=t._self._c;return i("div",{staticClass:"simonGame"},[i("div",{staticClass:"simonGame__content"},[i("div",{staticClass:"simonGame__title"},[t._v(" Simon Game ")]),i("div",{staticClass:"simonGame__blockGame blockGame"},[i("div",{staticClass:"blockGame__title"},[t._v(" Раунд: "+t._s(t.round)+" ")]),i("div",{staticClass:"blockGame__block"},[i("div",{staticClass:"blockGame__btn"},t._l(t.btnGame,(function(e){return i("MyButton",{key:e.id,class:["blockGame__btn_"+e.color,[e.active?"active":""]],attrs:{id:e.id,disabled:t.btnGameActive.isDisabled},on:{click:function(i){return t.onclickBtn(e.id,e.sound)}}})})),1),i("div",{staticClass:"blockGame__info"},[i("div",{staticClass:"blockGame__info_lvl lvl"},[i("div",{staticClass:"lvl__title"},[t._v("Сложность")]),t._l(t.level,(function(e){return i("div",{key:e.interval,staticClass:"lvl__input"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.interval,expression:"interval"}],staticClass:"lvl__input_one",attrs:{type:"radio",disabled:t.lvlActive.isDisabled},domProps:{value:e.interval,checked:t._q(t.interval,e.interval)},on:{change:function(i){t.interval=e.interval}}}),t._v(" "+t._s(e.title)+" ")])}))],2),i("MyButton",{staticClass:"blockGame__info_btn btn",attrs:{disabled:t.buttonActive.isDisabled},on:{click:t.startGame}},[t._v(" Начать игру ")]),"end"===t.status?i("div",{staticClass:"blockGame__info_end end"},[i("div",{staticClass:"end__title"},[t._v(" Конец игры "),i("MyButton",{staticClass:"end__title_btn btn",on:{click:function(i){t.status="none"}}},[t._v(" Ok ")])],1)]):t._e()],1)])])])])},r=[],l=(e(4114),function(){var t=this,i=t._self._c;return i("button",{on:{click:function(i){return t.$emit("click",i)}}},[t._t("default")],2)}),u=[],c={name:"MyButton"},m=c,d=e(1656),v=(0,d.A)(m,l,u,!1,null,"5f643071",null),f=v.exports,h={components:{MyButton:f},data(){return{status:"none",simonSet:[],userSet:[],click:0,interval:1500,level:[{title:"Легкий",interval:1500},{title:"Средний",interval:1e3},{title:"Сложный",interval:400}],round:1,lvlActive:{isDisabled:!1},buttonActive:{isDisabled:!1},btnGameActive:{isDisabled:!1},audio:{src:""},btnGame:[{id:1,color:"red",active:!1,sound:"simongame_1"},{id:2,color:"blue",active:!1,sound:"simongame_2"},{id:3,color:"yellow",active:!1,sound:"simongame_3"},{id:4,color:"green",active:!1,sound:"simongame_4"}]}},mounted(){this.$watch("status",(function(){"end"===this.status&&this.gameReset(),"round"===this.status&&this.roundNext()}))},methods:{setStatus(){this.status="none"},startGame(){this.lvlActive.isDisabled=!0,this.buttonActive.isDisabled=!0,this.btnGameActive.isDisabled=!0;for(let t=0;t<this.round;t++)this.simonSet.push(Math.floor(4*Math.random()));this.runGame()},runGame(){for(let t=1;t<=this.simonSet.length;t++){let i=t-1,e=this.simonSet[i]-1;setTimeout((()=>{this.playSound(this.btnGame[e].sound),this.btnGame[e].active=!0,setTimeout((()=>{this.btnGame[e].active=!1}),300)}),this.interval*t,i)}this.btnGameActive.isDisabled=!1,this.status="run"},onclickBtn(t,i){this.playSound(i),"run"===this.status&&(this.userSet.push(t),t===this.simonSet[this.click]&&this.userSet.length===this.simonSet.length?this.status="round":t!==this.simonSet[this.click]?this.status="end":this.click++)},roundNext(){this.userSet=[],this.click=0,this.round++,this.simonSet.push(Math.floor(4*Math.random()+1)),this.runGame()},gameReset(){this.simonSet=[],this.userSet=[],this.round=1,this.lvlActive.isDisabled=!1,this.buttonActive.isDisabled=!1},playSound(t){let i=new Audio(e(3179)(`./${t}.mp3`));i.play()}}},_=h,b=(0,d.A)(_,a,r,!1,null,"e7bbde34",null),p=b.exports,k={name:"App",components:{SimonGame:p}},g=k,G=(0,d.A)(g,s,o,!1,null,null,null),y=G.exports;n.Ay.config.productionTip=!1,n.Ay.config.devtools=!0,new n.Ay({render:t=>t(y)}).$mount("#app")},3179:function(t,i,e){var n={"./simongame_1.mp3":1676,"./simongame_2.mp3":4867,"./simongame_3.mp3":926,"./simongame_4.mp3":6357};function s(t){var i=o(t);return e(i)}function o(t){if(!e.o(n,t)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=o,t.exports=s,s.id=3179},1676:function(t,i,e){"use strict";t.exports=e.p+"media/simongame_1.4439a9af.mp3"},4867:function(t,i,e){"use strict";t.exports=e.p+"media/simongame_2.65e0df3b.mp3"},926:function(t,i,e){"use strict";t.exports=e.p+"media/simongame_3.f8db31a2.mp3"},6357:function(t,i,e){"use strict";t.exports=e.p+"media/simongame_4.049c0e2c.mp3"}},i={};function e(n){var s=i[n];if(void 0!==s)return s.exports;var o=i[n]={exports:{}};return t[n].call(o.exports,o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(i,n,s,o){if(!n){var a=1/0;for(c=0;c<t.length;c++){n=t[c][0],s=t[c][1],o=t[c][2];for(var r=!0,l=0;l<n.length;l++)(!1&o||a>=o)&&Object.keys(e.O).every((function(t){return e.O[t](n[l])}))?n.splice(l--,1):(r=!1,o<a&&(a=o));if(r){t.splice(c--,1);var u=s();void 0!==u&&(i=u)}}return i}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[n,s,o]}}(),function(){e.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(i,{a:i}),i}}(),function(){e.d=function(t,i){for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)}}(),function(){e.p="/simon-game/"}(),function(){var t={524:0};e.O.j=function(i){return 0===t[i]};var i=function(i,n){var s,o,a=n[0],r=n[1],l=n[2],u=0;if(a.some((function(i){return 0!==t[i]}))){for(s in r)e.o(r,s)&&(e.m[s]=r[s]);if(l)var c=l(e)}for(i&&i(n);u<a.length;u++)o=a[u],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(c)},n=self["webpackChunksimon_game"]=self["webpackChunksimon_game"]||[];n.forEach(i.bind(null,0)),n.push=i.bind(null,n.push.bind(n))}();var n=e.O(void 0,[504],(function(){return e(707)}));n=e.O(n)})();
//# sourceMappingURL=app.c4c94a50.js.map