(this.webpackJsonptaskboardproject=this.webpackJsonptaskboardproject||[]).push([[0],{24:function(e,t,a){e.exports=a(36)},29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(11),l=a(16),c=a.n(l),o=(a(29),a(12)),i=a(7),m=(a(30),a(1)),d=a(2),u=a(4),p=a(3),h=a(8),b=a(5),E=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a.state={uid:"0",authToken:"",baseURL:"https://task-line.herokuapp.com"},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=new FormData(e.target),n=new URLSearchParams({username:a.get("username"),password:a.get("password")});a.get("username");fetch(this.state.baseURL+"/login",{method:"POST",body:n}).then((function(e){if(200==e.status)return e.json()})).then((function(e){if(e){var a=e.token,n=e.id;t.state.uid=n,t.state.authToken=a,t.props.history.push({pathname:"/dashboard",state:{uid:t.state.uid,authToken:t.state.authToken,baseURL:t.state.baseURL}})}else document.getElementById("errorMessage").innerHTML="Invalid Credentials!!!"}))}},{key:"componentDidMount",value:function(){document.getElementsByTagName("body")[0].style.backgroundColor="black"}},{key:"render",value:function(){return r.a.createElement("div",{className:"ui middle aligned center aligned grid login-component",style:{marginTop:"30vh"}},r.a.createElement("div",{className:"column",style:{color:"firebrick"}},r.a.createElement("h2",{className:"ui teal image header"},r.a.createElement("div",{className:"content"},"LOGIN FOR ",r.a.createElement("div",{className:"extras"},"TASKS"))),r.a.createElement("form",{className:"ui large form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"ui stacked segment",style:{borderRadius:"3%",backgroundColor:"rgba(69, 62, 62, 0.5)"}},r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"ui left icon input"},r.a.createElement("i",{className:"user icon"}),r.a.createElement("input",{type:"text",name:"username",placeholder:"Username "}))),r.a.createElement("div",{className:"field "},r.a.createElement("div",{className:"ui left icon input"},r.a.createElement("i",{className:"lock icon"}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password"}))),r.a.createElement("button",{type:"submit",className:"ui fluid large submit button"},"LOGIN"))),r.a.createElement("div",{id:"errorMessage",style:{color:"white"}})))}}]),t}(r.a.Component),v=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{class:"navbar navbar-default navbar-fixed-top custom-header"},r.a.createElement("div",{class:"container-fluid"},r.a.createElement("div",{class:"navbar-header"},r.a.createElement(s.b,{to:"/dashboard"},r.a.createElement("a",{class:"navbar-brand navbar-link",href:"#"},"Task",r.a.createElement("span",{class:"text-muted title-side"},"Board ")," ")),r.a.createElement("button",{class:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#navbar-collapse"},r.a.createElement("span",{class:"sr-only"},"Toggle navigation"),r.a.createElement("span",{class:"icon-bar"}),r.a.createElement("span",{class:"icon-bar"}),r.a.createElement("span",{class:"icon-bar"}))),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbar-collapse"},r.a.createElement("ul",{class:"nav navbar-nav links"},r.a.createElement("li",{role:"presentation",class:"navbar-items"},r.a.createElement("a",{href:"#"}," "))),r.a.createElement("ul",{class:"nav navbar-nav navbar-right"},r.a.createElement("li",{class:"dropdown"},r.a.createElement("a",{class:"dropdown-toggle","data-toggle":"dropdown","aria-expanded":"false",href:"#"}," ",r.a.createElement("span",{class:"caret"}),r.a.createElement("img",{src:"assets/img/avatar.jpg",class:"dropdown-image"})),r.a.createElement("ul",{class:"dropdown-menu dropdown-menu-right",role:"menu"},r.a.createElement("li",{role:"presentation",class:"topbar-items"},r.a.createElement(s.b,{to:"/dashboard"},"DashBoard ",r.a.createElement("i",{class:"glyphicon glyphicon-th"}))),r.a.createElement("li",{role:"presentation"},r.a.createElement(s.b,{to:"/settings"},"Settings ",r.a.createElement("i",{class:"glyphicon glyphicon-wrench"}))),r.a.createElement("li",{role:"presentation",class:"active"},r.a.createElement(s.b,{to:"/"},"Logout ",r.a.createElement("i",{class:"glyphicon glyphicon-off"})))))))))}}]),t}(r.a.Component),f=a(23),y=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={deadline:new Date(a.props.due)},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=new Date(this.props.start),t=new Date(this.props.due),a=new Date,n=Math.abs(t-e),s=Math.abs(a-e),l=Math.ceil(n/864e5),c=Math.ceil(s/864e5),o=c/l*100;return o>100&&(Object(f.a)("percentDays"),o=0),r.a.createElement("div",{className:"col-lg-3 col-lg-offset-0 col-md-3 col-sm-5 col-xs-10",id:"task-card",title:this.props.id,onClick:this.props.displayTask},r.a.createElement("h4",{className:"text-left team-card-title"},this.props.name),r.a.createElement("p",null,"Report : ",this.props.reporter," "),r.a.createElement("span",{className:"label label-primary"},"Priority "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,this.props.priority.toUpperCase()),r.a.createElement("span",{className:"label label-warning"},"Deadline "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,this.state.deadline.toDateString()," "),r.a.createElement("span",{class:"label label-primary"},"Time Left"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-info","aria-valuenow":c,"aria-valuemin":"0","aria-valuemax":l,style:{width:o+"%"}},Math.ceil(o),"%")))}}]),t}(r.a.Component),k=function(e){function t(e){return Object(m.a)(this,t),Object(u.a)(this,Object(p.a)(t).call(this,e))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-lg-3 col-lg-offset-0 col-md-3 col-sm-5 col-xs-10",id:"team-card"},r.a.createElement("h4",{className:"text-left team-card-title"},this.props.name),r.a.createElement("p",null,"Tasks:",this.props.pending,"/ ",this.props.total," "),r.a.createElement("span",{class:"label label-primary"},"Current Progress "),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-info","aria-valuenow":"{this.props.pending}","aria-valuemin":"0","aria-valuemax":"{this.props.pending}",style:{width:"90%"}},"90%")))}}]),t}(r.a.Component),g=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={deadline:new Date(a.props.due)},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=new Date(this.props.start),t=new Date(this.props.due),a=new Date,n=Math.abs(t-e),s=Math.abs(a-e),l=Math.ceil(n/864e5),c=Math.ceil(s/864e5);return c-l>2?(console.log(c,l),r.a.createElement("div",{className:"col-lg-3 col-lg-offset-0 col-md-3 col-sm-5 col-xs-10",id:"task-card",style:{padding:"20px"}},r.a.createElement("h4",{className:"text-left team-card-title"},this.props.name),r.a.createElement("p",null,"Report : ",this.props.reporter," "),r.a.createElement("span",{className:"label label-primary"},"Archived Before"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,c-l," Days"),r.a.createElement("span",{className:"label label-warning"},"Deadline "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,this.state.deadline.toDateString()," "),r.a.createElement("span",{class:"label label-primary"},"Status"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,this.props.status))):r.a.createElement("div",null)}}]),t}(r.a.Component),j=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).componentDidMount=a.componentDidMount.bind(Object(h.a)(a)),a.state={taskArray:[]},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.url+"/user/"+this.props.uid+"/tasks/all?key="+this.props.token,a=[],n=0;fetch(t).then((function(e){if(200==e.status)return e.json()})).then((function(t){if(t){for(var s=0;s<t.length;s++)if(t[s].progress==e.props.type){var l=t[s].name.toUpperCase(),c=t[s].id,o=t[s].report_to,i=t[s].priority,m=t[s].due_date,d=t[s].progress_recorded_on;a.push(r.a.createElement(y,{key:n,id:c,name:l,reporter:o,priority:i,due:m,start:d,displayTask:e.props.displayTask})),n++}"to do"==e.props.type&&a.push(r.a.createElement("div",{class:"col-lg-3 col-lg-offset-0 col-md-3 col-sm-5 col-xs-10 add-task-card",id:"task-card",onClick:e.props.addTaskForm},r.a.createElement("i",{class:"glyphicon glyphicon-plus",id:"add-task"}),r.a.createElement("h1",{class:"text-center team-card-title"},"Add Task "))),e.setState({taskArray:a})}else alert("Cannot Fetch Data Try Later!!")}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.taskArray)}}]),t}(r.a.Component),O=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).componentDidMount=a.componentDidMount.bind(Object(h.a)(a)),a.state={teamArray:[]},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.url+"/user/"+this.props.uid+"/teams/all?key="+this.props.token,a=[];fetch(t).then((function(e){if(200==e.status)return e.json()})).then((function(t){if(t){for(var n=0;n<t.length;n++){var s=t[n].name.toUpperCase();a.push(r.a.createElement(k,{key:n,name:s,total:"20",pending:"5"}))}e.setState({teamArray:a})}else alert("Cannot Fetch Data Try Later!!")}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.teamArray)}}]),t}(r.a.Component),T=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).componentDidMount=a.componentDidMount.bind(Object(h.a)(a)),a.state={archiveArray:[]},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.url+"/user/"+this.props.uid+"/teams/all?key="+this.props.token,a=[];fetch(t).then((function(e){if(200==e.status)return e.json()})).then((function(t){if(t){for(var n=0;n<t.length;n++){var s=t[n].name.toUpperCase();a.push(r.a.createElement(g,{key:n,name:s,reporter:"BHARGAV",start:"2020-02-01",due:"2020-02-05",status:"Completed"}))}e.setState({archiveArray:a})}else alert("Cannot Fetch Data Try Later!!")}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.archiveArray)}}]),t}(r.a.Component),N=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).footerLast=a.footerLast.bind(Object(h.a)(a)),a.render=a.render.bind(Object(h.a)(a)),a.changeMode=a.changeMode.bind(Object(h.a)(a)),a.bodyCenter=a.bodyCenter.bind(Object(h.a)(a)),a.handleTaskForm=a.handleTaskForm.bind(Object(h.a)(a)),a.state={mode:"mytasks",baseURL:a.props.location.state.baseURL,authToken:a.props.location.state.authToken,uid:a.props.location.state.uid,dispForm:!1,dispTask:!1},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"updateTaskBase",value:function(){}},{key:"displayTheTask",value:function(e){e.target.getAttribute("title");alert("Under construction")}},{key:"moveTo",value:function(e){}},{key:"handleTaskForm",value:function(){1==this.state.dispForm?(this.state.dispForm=!1,console.log(this.state.dispForm),document.getElementById("addTaskForm").style.display="none"):0==this.state.dispForm&&(this.state.dispForm=!0,console.log(this.state.dispForm),document.getElementById("addTaskForm").style.display="block")}},{key:"addTaskToBase",value:function(){alert("under Construction")}},{key:"showForm",value:function(){var e=this,t=new Date,a=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDay();return r.a.createElement("div",{id:"addTaskForm",style:{width:"80%",position:"fixed",top:"20vh",zIndex:"5",backgroundColor:"#0e0e0e",height:"70vh",left:"10%",overflowY:"scroll",borderRadius:"10px",display:"none",transition:"all 0.5s"}},r.a.createElement("button",{class:"circular ui icon button",onClick:function(){return e.handleTaskForm()},style:{position:"absolute",left:"1%",top:"0",zIndex:"6",float:"left"}},r.a.createElement("i",{class:"icon close"})),r.a.createElement("form",null,r.a.createElement("div",{class:"ui inverted segment",style:{padding:"10%"}},r.a.createElement("h3",null," Add New Task"),r.a.createElement("div",{class:"ui inverted form"},r.a.createElement("div",{class:"two fields"},r.a.createElement("div",{class:"field"},r.a.createElement("label",null,"Task Name"),r.a.createElement("input",{placeholder:"Task Name",name:"name",type:"text"})),r.a.createElement("div",{class:"field"},r.a.createElement("label",null,"Assigne Name"),r.a.createElement("input",{placeholder:"Assignee Name",name:"assignee",type:"text"}))),r.a.createElement("div",{class:"field"},r.a.createElement("label",null,"Description"),r.a.createElement("textarea",{name:"description",placeholder:"Description",style:{marginTop:"0px",marginBottom:"0px",height:"20%"}})),r.a.createElement("div",{class:"field"},r.a.createElement("label",null,"Priority"),r.a.createElement("select",{multiple:"",name:"priority",class:"ui dropdown"},r.a.createElement("option",{value:"high"},"High"),r.a.createElement("option",{value:"medium"},"Medium"),r.a.createElement("option",{value:"low"},"Low"))),r.a.createElement("div",{class:"five wide required field"},r.a.createElement("label",null,"DeadLine Date"),r.a.createElement("input",{type:"date",name:"dueDate",min:a,placeholder:"Task DeadLine"})),r.a.createElement("div",{class:"ui submit button",onClick:function(){return e.addTaskToBase()}},"Add Task")))))}},{key:"changeMode",value:function(e){var t=document.getElementsByClassName("down-icon-items");if(this.state.mode!=e){for(var a=0;a<t.length;a++)t[a].setAttribute("id","");"teams"==e?(t[0].setAttribute("id","present-page"),this.setState({mode:e})):"mytasks"==e?(t[1].setAttribute("id","present-page"),this.setState({mode:e})):"archives"==e?(t[2].setAttribute("id","present-page"),this.setState({mode:e})):console.log("cannot set mode")}}},{key:"footerLast",value:function(){var e=this;return r.a.createElement("footer",{className:"down-nav"},r.a.createElement("div",{className:"col-lg-5 col-lg-offset-1 col-md-12 down-icon-items",onClick:function(){return e.changeMode("teams")}},r.a.createElement("i",{className:"fa fa-slideshare left-icons"}),r.a.createElement("p",{className:"text-center"},"Teams ")),r.a.createElement("div",{className:"col-lg-5 col-lg-offset-1 col-md-12 down-icon-items",id:"present-page",onClick:function(){return e.changeMode("mytasks")}},r.a.createElement("i",{className:"fa fa-tasks left-icons"}),r.a.createElement("p",{className:"text-center"},"My Tasks")),r.a.createElement("div",{className:"col-lg-5 col-lg-offset-1 col-md-12 down-icon-items",onClick:function(){return e.changeMode("archives")}},r.a.createElement("i",{className:"fa fa-history left-icons"}),r.a.createElement("p",{className:"text-center"},"Archives ")))}},{key:"bodyCenter",value:function(){if("mytasks"==this.state.mode){var e="My Tasks";return r.a.createElement("div",null,r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h3",null,e),r.a.createElement("hr",null)),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h5",{className:"text-info"},"To-Do "),r.a.createElement("hr",null),r.a.createElement("div",{className:"row task-row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"task-cards-container"},r.a.createElement(j,{displayTask:this.displayTheTask.bind(this),addTaskForm:this.handleTaskForm,type:"to do",url:this.state.baseURL,token:this.state.authToken,uid:this.state.uid}))))),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h5",{className:"text-info"}," In Progress"),r.a.createElement("hr",null),r.a.createElement("div",{className:"row task-row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"task-cards-container"},r.a.createElement(j,{type:"progress",displayTask:this.displayTheTask.bind(this),addTaskForm:this.handleTaskForm,url:this.state.baseURL,token:this.state.authToken,uid:this.state.uid}))))),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h5",{className:"text-info"},"Completed "),r.a.createElement("hr",null),r.a.createElement("div",{className:"row task-row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"task-cards-container"},r.a.createElement(j,{type:"done",displayTask:this.displayTheTask.bind(this),url:this.state.baseURL,token:this.state.authToken,uid:this.state.uid}))))),this.showForm())}if("archives"==this.state.mode){e="Archives";return r.a.createElement("div",null,r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h3",null,e),r.a.createElement("hr",null)),r.a.createElement(T,{url:this.state.baseURL,token:this.state.authToken,uid:this.state.uid}))}if("teams"==this.state.mode){e="My Teams";return r.a.createElement("div",null,r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h3",null,e),r.a.createElement("hr",null)),r.a.createElement(O,{url:this.state.baseURL,token:this.state.authToken,uid:this.state.uid}))}e="Try Later !!";return r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h3",null,e),r.a.createElement("hr",null))}},{key:"render",value:function(){return r.a.createElement("div",{style:{backgroundColor:"#f1f1f1"}},r.a.createElement(v,null),r.a.createElement("div",{className:"row",id:"main-row"},this.bodyCenter()),this.footerLast())}}]),t}(r.a.Component),w=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null," in settings")}}]),t}(r.a.Component),C=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null," in teams")}}]),t}(r.a.Component),D=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",{style:{position:"absolute",top:"40%",left:"40%",color:"white"}},"OOPS! Check URL")}}]),t}(r.a.Component);var M=function(){var e=Object(i.a)();return r.a.createElement("main",null,r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",history:e,component:E,exact:!0}),r.a.createElement(o.a,{path:"/dashboard",history:e,component:N}),r.a.createElement(o.a,{path:"/settings",history:e,component:w}),r.a.createElement(o.a,{path:"/teams",history:e,component:C}),r.a.createElement(o.a,{history:e,component:D})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(s.a,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.e683e6de.chunk.js.map