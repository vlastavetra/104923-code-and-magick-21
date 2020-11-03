(()=>{"use strict";window.util={getRandomNumber:e=>Math.floor(Math.random()*e),getRandomElement:e=>e[Math.floor(Math.random()*Math.round(e.length-1))],getRandomArray(e,t){let i=[];for(let n=0;n<e;n++){let e=window.util.getRandomNumber(t.length-1);i.push(t[e]),t.splice(e,1)}return i},showElement(e,t){e.classList.remove(t),document.addEventListener("keydown",window.dialog.onPopupEscPress)},hideElement(e,t){e.classList.add(t),document.addEventListener("keydown",window.dialog.onPopupEscPress)},createErrorMessage(e){const t=document.createElement("div");t.style="z-index: 100; margin: 0 auto; text-align: center; background-color: red;",t.style.position="absolute",t.style.left=0,t.style.right=0,t.style.fontSize="30px",t.textContent=e,document.body.insertAdjacentElement("afterbegin",t)},noop(){}},(()=>{const e="https://21.javascript.pages.academy/code-and-magick/data",t="https://21.javascript.pages.academy/keksobooking/",i="GET",n="POST";let s=(e,t,i,n=window.util.noop)=>{let s=new XMLHttpRequest;return s.responseType="json",s.open(e,t),s.timeout=1e4,((e,t,i)=>{e.addEventListener("load",(()=>{200===e.status?t(e.response):i("Статус ответа: "+e.status+" "+e.statusText)})),e.addEventListener("error",(()=>{i("Произошла ошибка соединения")})),e.addEventListener("timeout",(()=>{i("Запрос не успел выполниться за "+e.timeout+"мс")}))})(s,i,n),s};window.backend={load(t,n){s(i,e,t,n).send()},save(e,i,r){s(n,t,i,r).send(e)}}})(),(()=>{const e=document.querySelector(".setup-wizard .wizard-coat"),t=document.querySelector(".setup-wizard .wizard-eyes"),i=document.querySelector(".setup-fireball-wrap");let n={onCoatChange:window.util.noop,onEyesChange:window.util.noop,onFireballChange:window.util.noop};window.colorize={colorizeElement(s,r,a){s.addEventListener("click",(()=>{let o=window.util.getRandomElement(a);((s,r)=>{s===e&&n.onCoatChange(r),s===t&&n.onEyesChange(r),s===i&&n.onFireballChange(r)})(s,o),r.value=o,"div"===s.tagName.toLowerCase()?s.style.background=o:s.style.fill=o}))},setCoatChangeHandler(e){n.onCoatChange=e},setEyesChangeHandler(e){n.onEyesChange=e},setFireballChangeHandler(e){n.onFireballChange=e}}})(),(()=>{const e=document.querySelector(".setup"),t=document.querySelector(".setup-open"),i=document.querySelector(".setup-close"),n="hidden",s=document.querySelector(".setup-similar"),r=document.querySelector(".setup-user-name"),a=e.querySelector(".setup-wizard-form");t.addEventListener("click",(()=>{window.util.showElement(e,n),window.util.showElement(s,n)})),t.addEventListener("keydown",(t=>{"Enter"===t.key&&window.util.showElement(e,n)})),i.addEventListener("click",(()=>{window.util.hideElement(e,n)})),i.addEventListener("keydown",(t=>{"Enter"===t.key&&window.util.hideElement(e,n)})),a.addEventListener("submit",(t=>{t.preventDefault(),window.backend.save(new FormData(a),(()=>{window.util.hideElement(e,n)}))})),window.dialog={onPopupEscPress(t){"Escape"===t.key&&document.activeElement!==r&&(t.preventDefault(),window.util.hideElement(e,n))}}})(),(()=>{const e=document.querySelector(".setup"),t=e.querySelector(".upload");t.addEventListener("mousedown",(i=>{i.preventDefault();let n={x:i.clientX,y:i.clientY},s=!1,r=t=>{t.preventDefault(),s=!0;let i=n.x-t.clientX,r=n.y-t.clientY;n={x:t.clientX,y:t.clientY},e.style.top=e.offsetTop-r+"px",e.style.left=e.offsetLeft-i+"px"},a=e=>{if(e.preventDefault(),document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",a),s){let e=i=>{i.preventDefault(),t.removeEventListener("click",e)};t.addEventListener("click",e)}};document.addEventListener("mousemove",r),document.addEventListener("mouseup",a)}))})(),(()=>{const e=document.querySelector(".setup-user-name");e.addEventListener("input",(()=>{let t=e.value.length;t<2?e.setCustomValidity("Ещё "+(2-t)+" симв."):t>25?e.setCustomValidity("Удалите лишние "+(t-25)+" симв."):e.setCustomValidity(""),e.reportValidity()}))})(),window.debounce=e=>{let t=null;return(...i)=>{t&&window.clearTimeout(t),t=window.setTimeout((()=>{e(...i)}),500)}},(()=>{const e=document.querySelector(".setup-wizard .wizard-coat"),t=document.querySelector(".setup-wizard .wizard-eyes"),i=document.querySelector(".setup-fireball-wrap"),n=document.querySelector('input[name="coat-color"]'),s=document.querySelector('input[name="eyes-color"]'),r=document.querySelector('input[name="fireball-color"]');let a="rgb(101, 137, 164)",o="black",d="#ee4830",l=[],c=e=>{let t=0;return e.colorCoat===a&&(t+=3),e.colorEyes===o&&(t+=2),e.colorFireball===d&&(t+=1),t};window.backend.load((e=>{l=e,u()}),(e=>{window.util.createErrorMessage(e)}));let u=()=>{window.render.renderList(l.sort(((e,t)=>{let i=c(t)-c(e);return 0===i&&(i=((e,t)=>e>t?1:e<t?-1:0)(e.name,t.name)),i})))},h=window.debounce(u);window.colorize.setCoatChangeHandler((e=>{a=e,h()})),window.colorize.setEyesChangeHandler((e=>{o=e,h()})),window.colorize.setFireballChangeHandler((e=>{d=e,h()})),window.colorize.colorizeElement(e,n,["rgb(101, 137, 164)","rgb(241, 43, 107)","rgb(146, 100, 161)","rgb(56, 159, 117)","rgb(215, 210, 55)","rgb(0, 0, 0)"]),window.colorize.colorizeElement(t,s,["black","red","blue","yellow","green"]),window.colorize.colorizeElement(i,r,["#ee4830","#30a8ee","#5ce6c0","#e848d5","#e6e848"])})(),(()=>{const e=document.querySelector("#similar-wizard-template").content.querySelector(".setup-similar-item"),t=document.createDocumentFragment(),i=document.querySelector(".setup-similar"),n=document.querySelector(".setup-similar-list");window.render={renderWizard(t){const i=e.cloneNode(!0);return i.querySelector(".setup-similar-label").textContent=t.name,i.querySelector(".wizard-coat").style.fill=t.colorCoat,i.querySelector(".wizard-eyes").style.fill=t.colorEyes,i},renderList(e){let s=e.length>4?4:e.length;n.innerHTML="";for(let i=0;i<s;i++)t.appendChild(window.render.renderWizard(e[i]));n.appendChild(t),window.util.showElement(i,"hidden")}}})(),(()=>{const e="rgba(0, 0, 0, 1)",t=100;let i=(e,i,n,s,r)=>{"Вы"===n?e.fillStyle="rgba(255, 0, 0, 1)":(e.fillStyle="rgba(0, 32, 191, 1)",e.globalAlpha=1/(s/r+i)),e.fillRect(t*(i+1)+40,240,40,-150*s/r)},n=(i,n,s,r,a)=>{const o=t*(n+1)+40;i.fillStyle=e,i.globalAlpha=1,i.fillText(s,o,250),i.fillText(Math.round(r),o,-150*r/a+250-30)},s=(e,t,i,n)=>{e.fillStyle=n,e.fillRect(t,i,420,270)},r=e=>{let t=e[0];for(let i=1;i<e.length;i++)e[i]>t&&(t=e[i]);return t};window.renderStatistics=(a,o,d)=>{s(a,110,20,"rgba(0, 0, 0, 0.7)"),s(a,t,10,"rgba(255, 255, 255, 1)"),a.strokeStyle=e,a.strokeRect(t,10,420,270),a.font="16px PT Mono",a.textBaseline="hanging",a.fillStyle=e,a.fillText("Ура вы победили!",120,30),a.fillText("Список результатов:",120,50);for(let e=0;e<o.length;e++)i(a,e,o[e],d[e],r(d)),n(a,e,o[e],d[e],r(d))}})(),window.GameConstants={Fireball:{size:fireballSize||24,speed:getFireballSpeed||function(e){return e?2:5}},Wizard:{speed:wizardSpeed||2,width:wizardWidth||61,getHeight:getWizardHeight||function(e){return 1.377*e},getX:getWizardX||function(e){return e/3},getY:getWizardY||function(e){return e-100}}},window.Game=function(){var e=300,t=700,i=["Кекс","Катя","Игорь"],n={},s="-reversed";n[0]={width:61,height:84,url:"img/wizard.gif"},n[0+s]={width:61,height:84,url:"img/wizard-reversed.gif"},n[1]={width:24,height:24,url:"img/fireball.gif"};var r={0:function(i,n,s){n.keysPressed.UP&&i.y>0&&(i.direction=-9&i.direction,i.direction=4|i.direction,i.y-=i.speed*s*2),n.keysPressed.UP||i.y<e-i.height&&(i.direction=-5&i.direction,i.direction=8|i.direction,i.y+=i.speed*s/3),n.keysPressed.LEFT&&(i.direction=-3&i.direction,i.direction=1|i.direction,i.x-=i.speed*s),n.keysPressed.RIGHT&&(i.direction=-2&i.direction,i.direction=2|i.direction,i.x+=i.speed*s),i.y<0&&(i.y=0),i.y>e-i.height&&(i.y=e-i.height),i.x<0&&(i.x=0),i.x>t-i.width&&(i.x=t-i.width)},1:function(e,i,n){1&e.direction&&(e.x-=e.speed*n),2&e.direction&&(e.x+=e.speed*n),(e.x<0||e.x>t)&&(e.state=1)}},a={CONTINUE:0,WIN:1,FAIL:2,PAUSE:3,INTRO:4},o={0:function(e){return e.garbage.filter((function(e){return 1===e.type})).filter((function(e){return e.x<10&&e.y>240}))[0]?a.WIN:a.CONTINUE}},d={0:function(i){return i.objects.push({direction:2,height:window.GameConstants.Wizard.getHeight(window.GameConstants.Wizard.width),speed:window.GameConstants.Wizard.speed,sprite:n[0],state:0,type:0,width:window.GameConstants.Wizard.width,x:window.GameConstants.Wizard.getX(t),y:window.GameConstants.Wizard.getY(e)}),i}},l=function(e){this.container=e,this.canvas=document.createElement("canvas"),this.canvas.width=e.clientWidth,this.canvas.height=e.clientHeight,this.container.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this._onKeyDown=this._onKeyDown.bind(this),this._onKeyUp=this._onKeyUp.bind(this),this._pauseListener=this._pauseListener.bind(this),this.setDeactivated(!1)};l.prototype={level:0,setDeactivated:function(e){this._deactivated!==e&&(this._deactivated=e,e?this._removeGameListeners():this._initializeGameListeners())},getInitialState:function(){return{currentStatus:a.CONTINUE,garbage:[],lastUpdated:null,keysPressed:{ESC:!1,LEFT:!1,RIGHT:!1,SPACE:!1,UP:!1},levelStartTime:null,objects:[],startTime:null}},initializeLevelAndStart:function(e){(e=void 0===e||e)||!this.state?(this._imagesArePreloaded=void 0,this.state=this.getInitialState(),this.state=d[this.level](this.state)):this.state.currentStatus=a.CONTINUE,this.state.levelStartTime=Date.now(),this.state.startTime||(this.state.startTime=this.state.levelStartTime),this._preloadImagesForLevel(function(){this.render(),this._initializeGameListeners(),this.update()}.bind(this))},pauseLevel:function(e){e&&(this.state.currentStatus=e),this.state.keysPressed.ESC=!1,this.state.lastUpdated=null,this._removeGameListeners(),window.addEventListener("keydown",this._pauseListener),this._drawPauseScreen()},_pauseListener:function(e){if(32===e.keyCode&&!this._deactivated){e.preventDefault();var t=this.state.currentStatus===a.WIN||this.state.currentStatus===a.FAIL;this.initializeLevelAndStart(t),window.removeEventListener("keydown",this._pauseListener)}},_drawPauseScreen:function(){var e;switch(this.state.currentStatus){case a.WIN:if(window.renderStatistics){var t=this._generateStatistics(new Date-this.state.startTime),i=this._shuffleArray(Object.keys(t));return void window.renderStatistics(this.ctx,i,i.map((function(e){return t[e]})))}e="Вы победили Газебо!\nУра!";break;case a.FAIL:e="Вы проиграли!";break;case a.PAUSE:e="Игра на паузе!\nНажмите Пробел, чтобы продолжить";break;case a.INTRO:e="Добро пожаловать!\nНажмите Пробел для начала игры"}this._drawMessage(e)},_generateStatistics:function(e){for(var t={Вы:e},n=0;n<i.length;n++){var s=e+(3e3*Math.random()-1500);s<1e3&&(s=1e3),t[i[n]]=s}return t},_shuffleArray:function(e){for(var t=e.length-1;t>0;t--){var i=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[i],e[i]=n}return e},_drawMessage:function(e){var t=this.ctx,i=function(e,i,n,s){t.beginPath(),t.moveTo(e,i),t.lineTo(e+10,i+s/2),t.lineTo(e,i+s),t.lineTo(e+n/2,i+s-10),t.lineTo(e+n,i+s),t.lineTo(e+n-10,i+s/2),t.lineTo(e+n,i),t.lineTo(e+n/2,i+10),t.lineTo(e,i),t.stroke(),t.closePath(),t.fill()};t.fillStyle="rgba(0, 0, 0, 0.7)",i(190,40,320,100),t.fillStyle="rgba(256, 256, 256, 1.0)",i(180,30,320,100),t.fillStyle="#000",t.font="16px PT Mono",e.split("\n").forEach((function(e,i){t.fillText(e,200,80+20*i)}))},_preloadImagesForLevel:function(e){if(void 0===this._imagesArePreloaded&&(this._imagesArePreloaded=[]),this._imagesArePreloaded[this.level])e();else for(var t=Object.keys(n),i=t.length,s=this,r=function(t){var n=new Image(t.width,t.height);n.onload=function(){t.image=n,0==--i&&(s._imagesArePreloaded[s.level]=!0,e())},n.src=t.url},a=0;a<t.length;a++)r(n[t[a]])},updateObjects:function(e){var t=this.state.objects.filter((function(e){return 0===e.type}))[0];this.state.keysPressed.SHIFT&&(this.state.objects.push({direction:t.direction,height:window.GameConstants.Fireball.size,speed:window.GameConstants.Fireball.speed(!!(1&t.direction)),sprite:n[1],type:1,width:window.GameConstants.Fireball.size,x:2&t.direction?t.x+t.width:t.x-window.GameConstants.Fireball.size,y:t.y+t.height/2}),this.state.keysPressed.SHIFT=!1),this.state.garbage=[];var i=this.state.objects.filter((function(t){return r[t.type](t,this.state,e),1!==t.state||(this.state.garbage.push(t),!1)}),this);this.state.objects=i},checkStatus:function(){if(this.state.currentStatus===a.CONTINUE){this.commonRules||(this.commonRules=[function(e){return 1===e.objects.filter((function(e){return 0===e.type}))[0].state?a.FAIL:a.CONTINUE},function(e){return e.keysPressed.ESC?a.PAUSE:a.CONTINUE},function(e){return Date.now()-e.startTime>18e4?a.FAIL:a.CONTINUE}]);for(var e=this.commonRules.concat(o[this.level]),t=a.CONTINUE;t===a.CONTINUE&&e.length;)t=e.shift()(this.state);this.state.currentStatus=t}},setGameStatus:function(e){this.state.currentStatus!==e&&(this.state.currentStatus=e)},render:function(){this.ctx.clearRect(0,0,t,e),this.state.objects.forEach((function(e){if(e.sprite){var t=1&e.direction,i=n[e.type+(t?s:"")]||n[e.type];this.ctx.drawImage(i.image,e.x,e.y,e.width,e.height)}}),this)},update:function(){this.state.lastUpdated||(this.state.lastUpdated=Date.now());var e=(Date.now()-this.state.lastUpdated)/10;switch(this.updateObjects(e),this.checkStatus(),this.state.currentStatus){case a.CONTINUE:this.state.lastUpdated=Date.now(),this.render(),requestAnimationFrame(function(){this.update()}.bind(this));break;case a.WIN:case a.FAIL:case a.PAUSE:case a.INTRO:this.pauseLevel()}},_onKeyDown:function(e){switch(e.keyCode){case 37:this.state.keysPressed.LEFT=!0;break;case 39:this.state.keysPressed.RIGHT=!0;break;case 38:this.state.keysPressed.UP=!0;break;case 27:this.state.keysPressed.ESC=!0}e.shiftKey&&(this.state.keysPressed.SHIFT=!0)},_onKeyUp:function(e){switch(e.keyCode){case 37:this.state.keysPressed.LEFT=!1;break;case 39:this.state.keysPressed.RIGHT=!1;break;case 38:this.state.keysPressed.UP=!1;break;case 27:this.state.keysPressed.ESC=!1}e.shiftKey&&(this.state.keysPressed.SHIFT=!1)},_initializeGameListeners:function(){window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp)},_removeGameListeners:function(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp)}},l.Verdict=a;var c=new l(document.querySelector(".demo"));return window.restartGame=function(e,t){n[0].url=e,n[0+s].url=t,c.initializeLevelAndStart(),c.setGameStatus(a.INTRO)},window.restartGame("img/wizard.gif","img/wizard-reversed.gif"),c}()})();