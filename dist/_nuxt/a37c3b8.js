(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2],{281:function(t,e,n){var content=n(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(109).default)("4663a700",content,!0,{sourceMap:!1})},283:function(t,e,n){var content=n(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(109).default)("310b9d40",content,!0,{sourceMap:!1})},284:function(t,e,n){t.exports=n.p+"img/leftsp.e19cb6b.png"},285:function(t,e,n){t.exports=n.p+"img/rightsp.e3bea10.png"},286:function(t,e,n){t.exports=n.p+"img/leftzad.a2d8f00.png"},287:function(t,e,n){t.exports=n.p+"img/rightzad.b8cbcb4.png"},288:function(t,e,n){t.exports=n.p+"img/vk.41c785b.png"},289:function(t,e,n){"use strict";n(281)},290:function(t,e,n){var r=n(108)(!1);r.push([t.i,".mainImgAnswer{width:100%;max-width:360px}.answer__text{font-size:18px}.icon__text{text-decoration:none;color:#000}.icon__text:hover{color:#000}.icon__vk{width:36px}",""]),t.exports=r},291:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"icon__text",attrs:{href:"https://vk.com/mivina_xd",target:"_blank",title:"Мой вк"}},[t._v("\nМой вк: "),r("br"),t._v(" "),r("img",{staticClass:"icon__vk",attrs:{src:n(288),alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Поздравляем!!")]),t._v(" "),n("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-success",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v("Спасибо, я согласен!")])])}],o=(n(63),{q:{name:"По результатам тестирования мы выяснили, что вы <b>левая передняя</b> ножка стула. Это значит что вы постоянно находитесь в повышенном настроении, постоянно тяготеете к общению и просто активы. <br> <code>Гипертимный психотип по Личко.</code>",image:"leftsp.png"},w:{name:"По результатам тестирования мы выяснили, что вы <b>правая передняя</b> ножка стула. Это значит что вы рассудительный и осторожно принимаете решения. <br> <code>Психастенический психотип по Личко.</code>",image:"rightsp.png"},e:{name:"По результатам тестирования мы выяснили, что вы <b>левая задняя</b> ножка стула. Это значит что вы замкнутый,настороженный. Вообщем вы <kbd>шизоид</kbd>.  <br> <code>Шизоидный психотип по Личко.</code>",image:"leftzad.png"},r:{name:"По результатам тестирования мы выяснили, что вы <b>правая задняя</b> ножка стула. Это значит что вы застенчивый,робкий и вам часто присуще ощущение собственной неполноценности. Это самая слабая ножка стула. <br> <code>Сенситивный психотип по Личко.</code>",image:"rightzad.png"}}),l={props:{answer:String},data:function(){return{result:null,url:null}},beforeMount:function(){this.result=o[this.answer],console.log(this.result),this.url="../static/img/"+this.result.image},mounted:function(){this.confitiAnswer(),setTimeout((function(){var t=document.querySelector("#exampleModal");new bootstrap.Modal(t).show()}),800)},methods:{goHome:function(){window.location.reload()},confitiAnswer:function(){var t=Date.now()+960,e=["#bb0000","#ffffff"];!function n(){confetti({particleCount:2,angle:60,spread:55,origin:{x:0},colors:e}),confetti({particleCount:2,angle:120,spread:55,origin:{x:1},colors:e}),Date.now()<t&&requestAnimationFrame(n)}()}}},c=(n(289),n(31)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.url?r("div",[r("button",{staticClass:"btn btn-info",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#exampleModal"}},[t._v("\n Посмотреть ваш результат тестирования\n")]),t._v(" "),r("button",{staticClass:"btn btn-primary",on:{click:t.goHome}},[t._v(" Вернуться на главную")]),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog"},[r("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),r("div",{staticClass:"modal-body"},[r("div",{staticClass:"answer__text mb-4",domProps:{innerHTML:t._s(t.result.name)}}),t._v(" "),"q"==t.answer?r("div",[r("img",{staticClass:"mainImgAnswer",attrs:{src:n(284),alt:""}})]):t._e(),t._v(" "),"w"==t.answer?r("div",[r("img",{staticClass:"mainImgAnswer",attrs:{src:n(285),alt:""}})]):t._e(),t._v(" "),"e"==t.answer?r("div",[r("img",{staticClass:"mainImgAnswer",attrs:{src:n(286),alt:""}})]):t._e(),t._v(" "),"r"==t.answer?r("div",[r("img",{staticClass:"mainImgAnswer",attrs:{src:n(287),alt:""}})]):t._e()]),t._v(" "),t._m(2)])])])]):t._e()}),r,!1,null,null,null);e.default=component.exports},295:function(t,e,n){"use strict";n(283)},296:function(t,e,n){var r=n(108)(!1);r.push([t.i,".wrapper-block{width:100%;max-width:620px}.text__main{font-size:20px}.text__small{padding:1px;border-radius:20px;cursor:pointer;margin-bottom:4px;font-size:18px}.text__small:hover{background:#628ee4}",""]),t.exports=r},297:function(t,e,n){"use strict";n.r(e);n(47),n(15),n(40);var r=[{q:"Выберите фразу, которая вам больше всего подходит",a:{q:"Я живу в кайф!!",w:"Я Илон Макс!",e:"Я грустный как Киану Ривз!",r:"У меня депресия в 0 лет!"}},{q:"Вы участник гонки. Вы обогнали того кто едет вторым! На каком месте вы оказались?",a:{q:"На первом",w:"На втором",e:"На третьем",r:"На четвертом"}},{q:"<small>Внимание анекдот.</small> <br> Два наркомана общаются по рации: <br> -принял <br> -принял <br> -принял<br> -принял<br> ",a:{q:"Это аник",w:"ФЫВВЫАХВПХАП",e:"ВВАВААХВПХАП",r:"Я на клоуна похож?"}},{q:"Как вы оцениваете наш тест",a:{q:"10",w:"-10",e:"0",r:"0"}},{q:'<small>Внимание анекдот.</small> <br> Мама пишет сыну смску: <br> "Ну как тебе завтрак?" <br> Сын, недолго думая, отвечает: "Збс" <br> "А что это означает?" <br> "Завтрак был супер. Короче, спасибо, мам." <br> "Пнх" <br> "Что?" <br> "Пошел нахуй"',a:{q:"ПХПАХВПХАП",w:"ФЫВВЫАХВПХАП",e:"ВВАВААХВПХАП",r:"ФЫВВЫАХВПХАП"}},{q:"Скажите кто вы сегодня",a:{q:"Сегодня я Огурчик",w:"Сегодня я Светлана",e:"Сегодня я Пупа",r:"Сегодня я Лупа"}},{q:"<small>Внимание анекдот.</small> <br> Пришел как-то мистер пропер в загс. И спрашивает, че разводы?",a:{q:"МИСТЕР ПРОПЕР",w:"ФЫВВЫАХВПХАП",e:"ВВАВААХВПХАП",r:"FDSFSDFSDFSDF"}},{q:"Это последний вопрос",a:{q:"Ну ок",w:"Ну ок",e:"Ну ок",r:"Ну ок"}},{q:"Нет наебал, это не последний воспрос",a:{q:"Ок",w:"Ок",e:"Ок",r:"Ок"}},{q:"<small>Внимание анекдот. </small> <br> —Учишь японский,значит? <br> — Пытаюсь <br> — Скажи что-нибудь на японском <br> — Могу тебя нахуй послать <br> — О давай! <br> — Иди нахуй",a:{q:"ПХПАХВПХАП",w:"ФЫВВЫАХВПХАП",e:"ВВАВААХВПХАП",r:"ФЫВВЫАХВПХАП"}}],o={name:"Test",data:function(){return{data:null,step:0,obj:{},answerKey:!1,start:!1}},mounted:function(){this.changeStep()},methods:{nextStep:function(t){var e=t.target.dataset.param.slice(-1);this.step++,this.obj[e]?this.obj[e]++:this.obj[e]=1,this.changeStep()},lastStep:function(){this.step--,this.changeStep()},changeStep:function(){return r.length<=this.step?(this.step--,this.findMax(),0):this.step<0?(this.step++,0):void(this.data=r[this.step])},findMax:function(){var t=this;this.answerKey=Object.keys(this.obj).reduce((function(a,b){return t.obj[a]>t.obj[b]?a:b}))},makeid:function(t){for(var e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=n.length,i=0;i<t;i++)e+=n.charAt(Math.floor(Math.random()*r));return e},letStart:function(){this.start=!0}}},l=(n(295),n(31)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data?n("div",{staticClass:"mt-4"},[n("center",[t.start?t._e():n("button",{staticClass:"btn btn-info btn-lg mt-5",attrs:{type:"button"},on:{click:t.letStart}},[t._v("Начать тест")]),t._v(" "),t.answerKey?t._e():n("div",{staticClass:"wrapper-block"},[t.start?n("div",[n("h5",{staticClass:"text__main",domProps:{innerHTML:t._s(t.step+1+". "+t.data.q)}}),t._v(" "),n("div",{staticClass:"mt-3"}),t._v(" "),t._l(t.data.a,(function(e,r){return n("div",{key:r},[n("div",{staticClass:"text__small",attrs:{"data-param":t.makeid(8)+r},on:{click:function(e){return t.nextStep(e)}}},[t._v(" "+t._s(e))])])}))],2):t._e()]),t._v(" "),t.answerKey?n("div",[n("Answer",{attrs:{answer:t.answerKey}})],1):t._e()])],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Answer:n(291).default})}}]);