webpackJsonp([1],{0:function(t,e){},"7zck":function(t,e){},DRr5:function(t,e){},G0c4:function(t,e,n){t.exports=n.p+"static/fonts/gentilis_regular.typeface.702f4c4.json"},GDb5:function(t,e){},Gg6h:function(t,e){},LY1A:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),i=n("Zrlr"),r=n.n(i),a=n("wxAW"),s=n.n(a),c=new(function(){function t(){r()(this,t),this.env=null}return s()(t,[{key:"setEnv",value:function(t){this.env=t}},{key:"isDevMode",value:function(){return null===this.env||"development"===this.env.NODE_ENV}}]),t}()),u={name:"App",data:function(){return{items:[{title:"Config",icon:"dashboard",to:"config"},{title:"Main",icon:"question_answer",to:"main"}]}},methods:{switchComponent:function(t){this.$router.push(t)}},mounted:function(){c.setEnv(Object({NODE_ENV:"production"}))}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-content",[n("v-toolbar",{staticStyle:{"margin-bottom":"32px"}},[n("v-toolbar-side-icon"),t._v(" "),n("v-toolbar-title",[t._v("Github Visualization")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[n("v-btn",{attrs:{flat:"",href:"https://github.com/ssthouse"}},[n("v-avatar",{attrs:{size:"42"}},[n("img",{attrs:{src:"https://avatars3.githubusercontent.com/u/10973821?s=460&v=4"}})]),t._v(" "),n("span",{staticStyle:{"margin-left":"8px"}},[t._v("About me")])],1),t._v(" "),n("v-btn",{attrs:{flat:"",href:"https://github.com/ssthouse/github-visualization"}},[n("v-avatar",{attrs:{size:"42"}},[n("img",{attrs:{src:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"}})]),t._v("\n          Source Code")],1)],1)],1),t._v(" "),n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1)],1)},staticRenderFns:[]};var d=n("VU/8")(u,l,!1,function(t){n("lqP4")},null,null).exports,h=n("/ocq"),m=n("mvHQ"),p=n.n(m),v={name:"ProjectView",data:function(){return{g:null,height:700,width:0,areaScale:null,textScale:null,alphaScale:null,simulation:null,zoomFunc:null,updateTextLocation:null,div:null,showForkedRepo:!0,filteredRepositoryList:[],curShowProperty:"commit number",propertyList:["commit number","fork number","star number"],propertyLabelList:["Commit number","Fork number","Star number"]}},props:["repositoryList"],methods:{initChartContainer:function(){if(this.g)return this.div.selectAll("span").remove(),this.g.selectAll("circle").remove(),void this.g.attr("transform","scale(1)");var t=this.$d3.select("#projectViewSvg");this.g=t.append("g"),this.div=this.$d3.select("#projectViewDiv")},initScales:function(){this.areaScale=this.$d3.scaleSqrt().domain(this.$d3.extent(this.repositoryList,function(t){return t.count})).range([20,80]),this.textScale=this.$d3.scaleSqrt().domain(this.$d3.extent(this.repositoryList,function(t){return t.count})).range([6,24]),this.alphaScale=this.$d3.scaleLinear().domain(this.$d3.extent(this.repositoryList,function(t){return t.count})).range([.8,1])},forkFilter:function(t){return!!this.showForkedRepo||!t.isFork},startDisplay:function(){var t=this;this.initScales(),this.filteredRepositoryList=this.repositoryList.filter(this.forkFilter);var e=this;this.simulation=this.$d3.forceSimulation(this.filteredRepositoryList).force("charge",this.$d3.forceManyBody()).force("collide",this.$d3.forceCollide().radius(function(e){return t.areaScale(e.count)+3})).force("forceX",this.$d3.forceX(this.width/2).strength(.05)).force("forceY",this.$d3.forceY(this.height/2).strength(.05)).on("tick",function(){var t=e.$d3.zoomTransform(e.div);e.updateTextLocation();var n=e.div.selectAll("span").data(e.filteredRepositoryList);n.enter().append("span").merge(n).text(function(t){return t.name}).style("font-size",function(t){return e.textScale(t.count)+"px"}).style("left",function(n){return n.x+e.width/2-1.5*e.areaScale(n.count)/2*t.k+"px"}).style("top",function(n){return n.y-e.textScale(n.count)/2*t.k+"px"}).style("width",function(t){return 1.5*e.areaScale(t.count)+"px"}),n.exit().remove();var o=e.g.selectAll("circle").data(e.filteredRepositoryList);o.enter().append("circle").append("title").text(function(t){return"commit number: "+t.count}).merge(o).attr("cx",function(t){return t.x+e.width/2}).attr("cy",function(t){return t.y}).attr("r",function(t){return e.areaScale(t.count)}).style("opacity",function(t){return e.alphaScale(t.count)}).call(e.enableDragFunc()),o.exit().remove()}),this.enableDragFunc(),this.enableZoomFunc()},enableZoomFunc:function(){var t=this;this.zoomFunc=this.$d3.zoom().scaleExtent([.5,10]).on("zoom",function(){t.g.attr("transform",t.$d3.event.transform),t.div.selectAll("span").data(t.repositoryList).each(function(e){var n=t.$d3.select(this),o=n.style("left"),i=n.style("top");n.style("transform-origin","-"+o+" -"+i)}),t.div.selectAll("span").data(t.repositoryList).style("transform","translate("+t.$d3.event.transform.x+"px,"+t.$d3.event.transform.y+"px) scale("+t.$d3.event.transform.k+")")}),this.g.call(this.zoomFunc)},enableDragFunc:function(){var t=this,e=this;return this.updateTextLocation=function(){e.div.selectAll("span").data(e.repositoryList).each(function(t){var n=e.$d3.select(this),o=n.style("left"),i=n.style("top");n.style("transform-origin","-"+o+" -"+i)})},this.$d3.drag().on("start",function(e){t.$d3.event.active||t.simulation.alphaTarget(.3).restart(),e.fx=t.$d3.event.x,e.fy=t.$d3.event.y}).on("drag",function(n){n.fx=t.$d3.event.x,n.fy=t.$d3.event.y,e.updateTextLocation()}).on("end",function(e){t.$d3.event.active||t.simulation.alphaTarget(0),e.fx=null,e.fy=null})},update:function(){this.initChartContainer(),this.startDisplay()}},watch:{repositoryList:{handler:function(t,e){this.update()},deep:!0},showForkedRepo:function(t,e){this.update()},curShowProperty:function(t){this.update()}},mounted:function(){this.update(),this.width=window.innerWidth/2}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"projectView"}},[n("div",{attrs:{id:"projectViewContainer"}},[n("svg",{attrs:{id:"projectViewSvg"}}),t._v(" "),n("div",{attrs:{id:"projectViewDiv"}})]),t._v(" "),n("v-expansion-panel",{attrs:{id:"controlPanel"}},[n("v-expansion-panel-content",[n("div",{attrs:{slot:"header"},slot:"header"},[t._v("Control panel")]),t._v(" "),n("div",{attrs:{id:"content"}},[n("v-checkbox",{attrs:{label:"Show Forked Repository"},model:{value:t.showForkedRepo,callback:function(e){t.showForkedRepo=e},expression:"showForkedRepo"}}),t._v(" "),n("h3",[t._v(t._s("Use : "+t.curShowProperty))]),t._v(" "),n("v-radio-group",{model:{value:t.curShowProperty,callback:function(e){t.curShowProperty=e},expression:"curShowProperty"}},t._l(t.propertyList,function(e,o){return n("v-radio",{key:o,attrs:{label:t.propertyLabelList[o],value:e}})}))],1)])],1)],1)},staticRenderFns:[]};var g=n("VU/8")(v,f,!1,function(t){n("hQ7D")},null,null).exports,y=n("ifoU"),k=n.n(y),w=n("U/Dg"),F=n("vwbq"),b=n("G0c4"),x=n.n(b),_=n("qKrd")(w),L=function(){function t(e){r()(this,t),this.containerId=e,this.loadFont_()}return s()(t,[{key:"isReady",value:function(){return void 0!==this.font}},{key:"initScene_",value:function(){var t=document.getElementById(this.containerId);this.scene=new w.Scene,this.ballGroup=new w.Group,this.scene.add(this.ballGroup),this.textMaterial=new w.MeshBasicMaterial({color:16777215}),this.textGroup=new w.Group,this.scene.add(this.textGroup),this.renderer=new w.WebGLRenderer({alpha:!0,antialias:!0}),this.renderer.setClearColor(15658734,.3);var e=t.getBoundingClientRect().width,n=t.getBoundingClientRect().height;this.containerSize=Math.min(e,n),this.renderer.setSize(e,n),t.appendChild(this.renderer.domElement),this.camera=new w.PerspectiveCamera(45,e/n,1,1e3),this.camera.position.z=350,this.camera.position.y=50,this.camera.position.x=50,this.camera.lookAt(0,0,0),this.controls=new _(this.camera,t);var o=new w.AmbientLight(4210752,1);this.scene.add(o);var i=new w.DirectionalLight(16777215,.7);i.position.set(0,0,200),i.lookAt(0,0,0),this.scene.add(i),this.addGround_(),this.loadAlphabetGeoMap(),this.addAxisForDev_(),this.animate_()}},{key:"clear",value:function(){this.ballGroup.children=[],this.textGroup.children=[]}},{key:"animate_",value:function(){var t=this;requestAnimationFrame(function(){return t.animate_()}),this.controls.update(),this.renderer.render(this.scene,this.camera)}},{key:"addAxisForDev_",value:function(){if(c.isDevMode()){var t=new w.AxisHelper(100);this.scene.add(t)}}},{key:"addGround_",value:function(){var t=new w.PlaneGeometry(350,350,32),e=new w.MeshLambertMaterial({color:15658734,side:w.DoubleSide}),n=new w.Mesh(t,e);n.position.z=-100,this.scene.add(n)}},{key:"loadAlphabetGeoMap",value:function(){var t=this;this.charGeoMap=new k.a,this.charWidthMap=new k.a;"1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-./?".split("").forEach(function(e){var n=new w.TextGeometry(e,{font:t.font,size:2.4,height:.04});n.computeBoundingBox();var o=n.boundingBox.max.x-n.boundingBox.min.x;t.charGeoMap.set(e,n),t.charWidthMap.set(e,o)})}},{key:"loadFont_",value:function(){var t=this;(new w.FontLoader).load(x.a,function(e){t.font=e})}},{key:"drawProjects",value:function(t){this.scene||this.initScene_(),this.clear(),this.reporitoryList=t,this.layoutSize=500;this.calcluate3DLayout_(),this.volumeScale=F.scaleLinear().domain([0,this.layoutSize]).range([0,280]),this.indexScale=F.scaleLinear().domain([0,this.layoutSize]).range([-140,140]),this.addTextsToScene_(),this.addBallsToScene_()}},{key:"calcluate3DLayout_",value:function(){var t=F.pack().size([this.layoutSize,this.layoutSize]).padding(5),e=F.hierarchy({children:this.reporitoryList}).sum(function(t){return Math.pow(t.count,1/3)});this.data=t(e).leaves()}},{key:"addTextsToScene_",value:function(){var t=this;this.virtualElement||(this.virtualElement=document.createElement("svg"));var e=F.select(this.virtualElement).selectAll("text").data(this.data);e.enter().merge(e).each(function(e,n){var o=F.select(this).datum();t.addTextWithCharGroup(o.data.name,t.indexScale(o.x),t.indexScale(o.y),t.volumeScale(o.r))})}},{key:"addText",value:function(t,e,n,o){var i=new w.TextGeometry(t,{font:this.font,size:1.4,height:.1}),r=new w.Mesh(i,this.textMaterial);r.geometry.boundingBox||r.geometry.computeBoundingBox();var a=r.geometry.boundingBox.max.x-r.geometry.boundingBox.min.x;r.position.set(e-a/2,n,o+2),this.textGroup.add(r)}},{key:"addTextWithCharGroup",value:function(t,e,n,o){var i=this,r=new w.Group,a=t.split(""),s=0;a.forEach(function(t){i.charWidthMap.get(t)?s+=i.charWidthMap.get(t):s+=1});for(var c=s/2,u=0;u<a.length;u++){var l=this.charGeoMap.get(a[u]);if(l){var d=new w.Mesh(l,this.textMaterial);d.position.set(e-c,n,o+2),r.add(d),e+=this.charWidthMap.get(a[u])}else e+=2}this.textGroup.add(r)}},{key:"generateBallMesh_",value:function(t,e,n,o){var i=new w.SphereGeometry(n,32,32),r=new w.Mesh(i,this.ballMaterial);return r.position.set(t,e,0),r}},{key:"addBallsToScene_",value:function(){var t=this;this.virtualElement||(this.virtualElement=document.createElement("svg")),this.ballMaterial=new w.MeshNormalMaterial;var e=F.select(this.virtualElement).selectAll("circle").data(this.data);e.enter().merge(e).each(function(e,n){var o=F.select(this).datum();t.ballGroup.add(t.generateBallMesh_(t.indexScale(o.x),t.indexScale(o.y),t.volumeScale(o.r),n))})}},{key:"addMergedBallsToScene_",value:function(){var t=this;this.virtualElement||(this.virtualElement=document.createElement("svg"));var e=[];this.ballMaterial=new w.MeshNormalMaterial,F.select(this.virtualElement).selectAll("circle").data(this.data).enter().each(function(n,o){var i=F.select(this).datum();e.push(t.generateBallMesh_(t.indexScale(i.x),t.indexScale(i.y),t.volumeScale(i.r),o))}).append("circle");var n=new w.CylinderGeometry(1,1,0,16);e.forEach(function(t){t.updateMatrix(),n.merge(t.geometry,t.matrix)});var o=new w.Mesh(n,this.ballMaterial);this.ballGroup.add(o)}}]),t}(),S={data:function(){return{githubView:null,rendered:!1}},props:["repositoryList","visible"],methods:{clear:function(){this.githubView.clear()}},mounted:function(){this.githubView||(this.githubView=new L("view-container"))},watch:{visible:function(t){var e=this;t&&!this.rendered&&(this.rendered=!0,setTimeout(function(){e.githubView.drawProjects(e.repositoryList)},500))},repositoryList:function(t){0!==t.length&&(this.repositoryList=t,this.githubView.isReady()&&this.githubView.drawProjects(this.repositoryList))}}},U={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{attrs:{id:"view-container"}})])}]};var M=n("VU/8")(S,U,!1,function(t){n("DRr5")},"data-v-3282d8b8",null).exports,D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-chip",{staticClass:"label",attrs:{color:"blue","text-color":"white"}},[n("v-avatar",[n("v-icon",[t._v("account_circle")])],1),t._v(" "),n("strong",[t._v("People you follow:")])],1),t._v(" "),t._l(t.userList,function(e){return n("v-chip",{key:e.id,staticClass:"user-chip mouseHand",attrs:{selected:""},on:{click:function(n){t.chooseUser(e.username)}}},[n("v-avatar",{attrs:{color:"teal"}},[n("img",{attrs:{src:e.avatarUrl}})]),t._v("\n    "+t._s(""+e.username)+"\n    "),n("v-progress-circular",{staticClass:"loading-circle",style:{opacity:t.loading?1:0},attrs:{indeterminate:"",color:"teal",loading:t.loading}})],1)})],2)},staticRenderFns:[]};var C=n("VU/8")({name:"users-card",data:function(){return{}},props:["userList","loading"],methods:{chooseUser:function(t){this.$emit("selectUser",t)}},computed:{},created:function(){}},D,!1,function(t){n("GDb5")},"data-v-c957a68e",null).exports,R=n("//Fk"),$=n.n(R),G=n("NYxO"),T={state:{domainName:"https://api.github.com/graphql",privateToken:"83f30f4332b2371486791b2fadd8f677f476a8c2"},mutations:{},actions:{}},P={state:{username:"ssthouse",avatarUrl:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",follwerUserList:[],followingUserList:[],repositoryBeanList:[]},mutations:{updateUserInfo:function(t,e){t.avatarUrl=e.avatarUrl},updateUsername:function(t,e){t.username=e},updateRepositoryBeanList:function(t,e){t.repositoryBeanList=e},updateFollowingUserList:function(t,e){t.followingUserList=e},updateFollowerUserList:function(t,e){t.follwerUserList=e}},actions:{}};o.default.use(G.a);var A=new G.a.Store({modules:{gitlabConfig:T,userinfo:P}}),E=n("mtWM"),j=n.n(E).a.create({baseURL:"https://api.github.com/graphql",headers:{Authorization:"Bearer "+"e741155e35e144246dfe8e1afc09af750997de3b".split("").reverse().join("")}}),B=function t(e,n){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];r()(this,t),this.name=e,this.count=n,this.isFork=o},z=function t(e,n,o,i){r()(this,t),this.id=e,this.username=n,this.name=o,this.avatarUrl=i},N=function(){function t(){r()(this,t),this.store=A}return s()(t,[{key:"getRepositoryBeanListFromQuery",value:function(t){if(!t)return[];for(var e=[],n=t.user.repositories.nodes,o=0;o<n.length;o++){var i=n[o];i.ref&&e.push(new B(i.name,i.ref.target.history.totalCount,i.isFork))}return e}},{key:"getFollowingUserList",value:function(t){if(!t)return[];for(var e=[],n=t.user.following.nodes,o=0;o<n.length;o++){var i=n[o];e.push(new z(i.id,i.login,i.name,i.avatarUrl))}return e}},{key:"getFollowerUserList",value:function(t){if(t){for(var e=[],n=t.user.followers.nodes,o=0;o<n.length;o++){var i=n[o];e.push(new z(i.id,i.login,i.name,i.avatarUrl))}return e}}},{key:"getAllProjects",value:function(){var t=this,e={query:'query {\n        user(login: "'+this.store.state.userinfo.username+'") {\n          avatarUrl\n          name\n          followers(first: 100) {\n            nodes {\n              avatarUrl\n              name\n              id\n              login\n            }\n          }\n          following(first: 100) {\n            nodes {\n              avatarUrl\n              name\n              id\n              login\n            }\n          }\n          repositories(first: 100){\n            totalCount\n            pageInfo{\n              hasNextPage\n              endCursor\n            }\n            nodes{\n              id\n              name\n              isFork\n              ref(qualifiedName: "master") {\n                target {\n                  ... on Commit {\n                    history {\n                      totalCount\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }'};return new $.a(function(n,o){j.post("",p()(e)).then(function(e){var o=e.data.data.user;t.store.commit("updateUserInfo",{avatarUrl:o.avatarUrl}),t.store.commit("updateRepositoryBeanList",t.getRepositoryBeanListFromQuery(e.data.data)),t.store.commit("updateFollowerUserList",t.getFollowerUserList(e.data.data)),t.store.commit("updateFollowingUserList",t.getFollowingUserList(e.data.data)),n()}).catch(function(t){o(t),console.log("~~~~~~~~~~~~~~~~error get all projects")})})}},{key:"loadUserRepositoryList",value:function(t){var e=this,n={query:'query {\n        user(login: "'+t+'") {\n          repositories(first: 100){\n            totalCount\n            pageInfo{\n              hasNextPage\n              endCursor\n            }\n            nodes{\n              id\n              name\n              isFork\n              ref(qualifiedName: "master") {\n                target {\n                  ... on Commit {\n                    history {\n                      totalCount\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }'};return new $.a(function(t,o){j.post("",p()(n)).then(function(n){var o=e.getRepositoryBeanListFromQuery(n.data.data);t(o)}).catch(function(t){o(t)})})}}]),t}(),q=n("JnRc"),V=n.n(q),O=V.a.Object.extend("UserRecord"),W=new(function(){function t(){r()(this,t)}return s()(t,[{key:"addRecord",value:function(t){c.isDevMode()?console.log("emit user record in dev mode"):(new O).save({username:t}).then(function(t){console.log("save userName to leancloud")}).catch(function(t){console.log("error save user record to leancloud"),console.log(t)})}}]),t}()),J=new(function(){function t(){r()(this,t)}return s()(t,[{key:"getRepositoryList",value:function(){return[{name:"Foundation_monitor",count:17,isFork:!1},{name:"Electrombile_Android",count:105,isFork:!0},{name:"GpsTest",count:10,isFork:!1},{name:"ssthouse.github.com",count:94,isFork:!1},{name:"TwoPersonChat",count:15,isFork:!1},{name:"SceneTransitionTest",count:2,isFork:!1},{name:"PoiTest",count:1,isFork:!1},{name:"WordOperate",count:14,isFork:!1},{name:"SeeColor",count:1,isFork:!1},{name:"NpoiTest",count:30,isFork:!1},{name:"PetOrHuman",count:20,isFork:!1},{name:"FastNote",count:6,isFork:!1},{name:"gsm-r",count:108,isFork:!1},{name:"AudioTest",count:2,isFork:!1},{name:"NewModuo",count:31,isFork:!1},{name:"xinyingiloveyou.github.com",count:9,isFork:!1},{name:"SimpleModuo",count:11,isFork:!1},{name:"XinYing",count:116,isFork:!1},{name:"LintCode",count:1,isFork:!1},{name:"block_killer",count:18,isFork:!1},{name:"BlookKiller",count:1,isFork:!1},{name:"moduo",count:320,isFork:!1},{name:"Moduo_iOS",count:1,isFork:!1},{name:"NowCoder",count:33,isFork:!1},{name:"BasicAndroid",count:1,isFork:!1},{name:"PyTest",count:14,isFork:!1},{name:"SimpleReader",count:26,isFork:!1},{name:"LearningGit",count:9,isFork:!1},{name:"JsonTest",count:9,isFork:!1},{name:"SortLearn",count:6,isFork:!1},{name:"RetrofitLearn",count:1,isFork:!1},{name:"LearnSelfConfigView",count:4,isFork:!1},{name:"LearnXlsx",count:3,isFork:!1},{name:"JavaFxLearn",count:5,isFork:!1},{name:"SmartSupermarket",count:35,isFork:!1},{name:"SupermarketManagement",count:7,isFork:!1},{name:"PyGirlTutorial",count:8,isFork:!1},{name:"Leetcode",count:19,isFork:!1},{name:"CloudClassify",count:24,isFork:!1},{name:"PythonCookBook",count:4,isFork:!1},{name:"SimpleZhiHu",count:11,isFork:!1},{name:"SpringLearn",count:2,isFork:!1},{name:"Java_Web_SSH_Development",count:6,isFork:!1},{name:"LearnJavaWeb",count:32,isFork:!1},{name:"VoiceControl",count:4,isFork:!1},{name:"test_vue_prj",count:18,isFork:!1},{name:"OfficeAutomation",count:4,isFork:!1},{name:"office_automation_frontend",count:218,isFork:!1},{name:"gesture_detector",count:1,isFork:!1},{name:"office_automation_backend_eclipse",count:57,isFork:!1},{name:"animate_qr_code",count:16,isFork:!1},{name:"GestureRecognition",count:30,isFork:!1},{name:"LearnJava8",count:13,isFork:!1},{name:"sword_to_offer",count:1,isFork:!1},{name:"learn_vue",count:3,isFork:!1},{name:"note",count:16,isFork:!1},{name:"wap-tools",count:8,isFork:!0},{name:"ssthouse-tool",count:9,isFork:!1},{name:"music_clock",count:1,isFork:!1},{name:"xinying_own_backend",count:7,isFork:!1},{name:"duoduo",count:1,isFork:!1},{name:"MDN_tutorial",count:4,isFork:!1},{name:"organization-chart",count:54,isFork:!1},{name:"test-mini-programe",count:4,isFork:!1},{name:"online-classroom",count:7,isFork:!1},{name:"vue-d3-template",count:8,isFork:!1},{name:"d3-practice",count:64,isFork:!1},{name:"DataHandle",count:3,isFork:!1},{name:"github-visualization",count:77,isFork:!1},{name:"three-js-practice",count:8,isFork:!1},{name:"ScriptOJ",count:2,isFork:!1},{name:"xiaobao-launch-order",count:3,isFork:!1},{name:"wired-elements",count:41,isFork:!0},{name:"cause-analysis",count:4,isFork:!1},{name:"ad-automation",count:37,isFork:!1},{name:"d3-blog",count:70,isFork:!1},{name:"github-pages-demo",count:4,isFork:!1},{name:"gulp-with-scss",count:2,isFork:!1},{name:"visual-explain",count:71,isFork:!1},{name:"personal-component-set",count:6,isFork:!1},{name:"Mutate",count:85,isFork:!0},{name:"g2",count:1312,isFork:!0},{name:"incubator-echarts",count:4852,isFork:!0},{name:"g",count:474,isFork:!0},{name:"sharpen-skills",count:15,isFork:!1},{name:"site",count:1056,isFork:!0},{name:"g2-playground",count:2,isFork:!1}]}}]),t}()),H={name:"Main",components:{"project-view":g,"github-view-3d":M,"users-card":C},data:function(){return{viewMode:"3D",projectDao:new N,username:"",userRecorder:W,repositoryList:[],repositoryList3D:[],loading:!1,selectUserLoading:!1,snackbar:!1,snackbarText:"text"}},computed:{avatarUrl:function(){return this.$store.state.userinfo.avatarUrl},followingUserList:function(){return this.$store.state.userinfo.followingUserList},use3D:function(){return"3D"===this.viewMode}},methods:{showProjects:function(){var t=this;this.loading=!0,this.updateUrl(this.username),this.$store.commit("updateUsername",this.username),this.projectDao.getAllProjects().then(function(){t.loading=!1,t.showSnackbar("success loading your github repo ~")},function(e){console.log("fail"+e),t.loading=!1,t.showSnackbar("failed to fetch data, please try again~")}),this.userRecorder.addRecord(this.username)},showSnackbar:function(t){this.snackbar=!0,this.snackbarText=t},selectUser:function(t){var e=this;this.selectUserLoading=!0,this.projectDao.loadUserRepositoryList(t).then(function(t){e.repositoryList=JSON.parse(p()(t)),e.repositoryList3D=JSON.parse(p()(t)),e.selectUserLoading=!1}).catch(function(t){console.log(t),e.selectUserLoading=!1})},updateUrl:function(t){this.$router.push({name:"main",query:{user:t}})},initUsernameFromUrl:function(){if(this.$router.currentRoute.query&&this.$router.currentRoute.query.user){var t=this.$router.currentRoute.query.user;this.username=t}}},watch:{"$store.state.userinfo.repositoryBeanList":{handler:function(t){this.repositoryList=JSON.parse(p()(t)),this.repositoryList3D=JSON.parse(p()(t))},deep:!0}},mounted:function(){this.username&&this.showProjects(),c.isDevMode()&&(this.repositoryList=J.getRepositoryList(),this.repositoryList3D=J.getRepositoryList())},created:function(){c.setEnv(Object({NODE_ENV:"production"})),this.initUsernameFromUrl()}},I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{md6:"","offset-md3":""}},[n("div",{staticClass:"flex-row"},[n("v-text-field",{staticClass:"input-group--focused",attrs:{label:"github usename"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),n("v-btn",{attrs:{loading:t.loading,disabled:t.loading},on:{click:t.showProjects}},[t._v("\n          show")])],1)])],1),t._v(" "),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{md6:"","offset-md3":"",xs12:""}},[n("v-card",{staticStyle:{width:"100%",padding:"16px"}},[n("div",{staticStyle:{display:"flex","flex-direction":"column","margin-top":"-32px"}},[n("h3",{staticStyle:{"margin-top":"20px"}},[n("strong",[t._v("Hint: username is the last part of your github profile page's URL:")]),t._v(" "),n("br"),t._v(" "),n("strong",[t._v("eg: https://github.com/ssthouse ==> ssthouse")])])])])],1),t._v(" "),n("v-flex",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"},attrs:{md4:"","offset-md4":"",xs12:""}},[n("v-avatar",{staticClass:"grey lighten-4",attrs:{tile:!1,size:"120px"}},[n("img",{attrs:{src:t.avatarUrl,alt:"avatar"}})])],1)],1),t._v(" "),n("users-card",{attrs:{userList:t.followingUserList,loading:t.selectUserLoading},on:{selectUser:t.selectUser}}),t._v(" "),n("v-btn-toggle",{staticStyle:{"margin-top":"32px"},model:{value:t.viewMode,callback:function(e){t.viewMode=e},expression:"viewMode"}},[n("v-btn",{attrs:{flat:"",value:"2D"}},[t._v("2D Mode")]),t._v(" "),n("v-btn",{attrs:{flat:"",value:"3D"}},[t._v("3D Mode")])],1),t._v(" "),n("div",[n("project-view",{directives:[{name:"show",rawName:"v-show",value:!t.use3D,expression:"!use3D"}],attrs:{repositoryList:t.repositoryList}}),t._v(" "),n("github-view-3d",{directives:[{name:"show",rawName:"v-show",value:t.use3D,expression:"use3D"}],attrs:{visible:t.use3D,repositoryList:t.repositoryList3D}})],1),t._v(" "),n("v-snackbar",{attrs:{timeout:2e3},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.snackbarText)+"\n  ")])],1)},staticRenderFns:[]};var Y=n("VU/8")(H,I,!1,function(t){n("LY1A")},"data-v-7650b002",null).exports,K={name:"Config",data:function(){return{projectDao:new N,domainName:this.$store.state.gitlabConfig.domainName,privateToken:this.$store.state.gitlabConfig.privateToken}},methods:{testConnection:function(){this.projectDao.getAllProjects()}}},Q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  Config page:\n  "),n("v-text-field",{attrs:{label:"domain:",value:t.domainName}}),t._v(" "),n("v-text-field",{attrs:{label:"private token:",value:t.privateToken}}),t._v(" "),n("v-btn",{on:{click:function(e){t.testConnection()}}},[t._v("Test connection")])],1)},staticRenderFns:[]};var X=n("VU/8")(K,Q,!1,function(t){n("Gg6h")},"data-v-852ba536",null).exports;o.default.use(h.a);var Z=new h.a({routes:[{path:"/",redirect:"main"},{path:"/main",name:"main",component:Y},{path:"/config",name:"config",component:X}]}),tt=(n("7zck"),n("3EgV")),et=n.n(tt),nt=n("8+8L"),ot=new(function(){function t(){r()(this,t),this.APP_ID="86t8rMn6wqyJwqwFKsuBqjie-gzGzoHsz",this.APP_KEY="49cGO1dtTXdWqRlDJq8OarIb"}return s()(t,[{key:"init",value:function(){V.a.init({appId:this.APP_ID,appKey:this.APP_KEY})}}]),t}());o.default.use(nt.a),o.default.use(et.a),o.default.config.productionTip=!1,o.default.prototype.$axios=j,o.default.prototype.$d3=F,o.default.prototype.$leancloud=ot,ot.init(),new o.default({el:"#app",router:Z,store:A,components:{App:d},template:"<App/>"})},hQ7D:function(t,e){},lqP4:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.06b097eb5e178949757a.js.map