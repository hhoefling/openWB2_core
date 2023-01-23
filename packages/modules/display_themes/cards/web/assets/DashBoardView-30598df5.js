import{u as f}from"./index-2c8afa2c.js";import{D as h,S as g}from"./SparkLine-163dd578.js";import{l as u,b as _,c as p,d as S,e as w,g as v,F as q}from"./vendor-fortawesome-55766d27.js";import{l as m,o,e as C,n as d,p as t,i as l,s as r,k as a,x as s}from"./vendor-ff8c19ec.js";import{_ as y}from"./vendor-inkline-44401e4a.js";u.add(_,p,S,w,v);const P={name:"DashboardView",props:{changesLocked:{required:!1,type:Boolean,default:!1}},data(){return{mqttStore:f()}},components:{DashBoardCard:h,SparkLine:g,FontAwesomeIcon:q}},B={class:"dash-board-card-wrapper"};function k(D,b,x,V,e,L){const n=m("font-awesome-icon"),c=m("spark-line"),i=m("dash-board-card");return o(),C("div",B,[e.mqttStore.getGridCardEnabled?(o(),d(i,{key:0,color:"danger"},{headerLeft:t(()=>[r(n,{"fixed-width":"",icon:["fas","fa-gauge-high"]}),a(" EVU ")]),headerRight:t(()=>[a(s(e.mqttStore.getGridPower),1)]),default:t(()=>[r(c,{color:"var(--color--danger)",colorNegative:"var(--color--success)",data:e.mqttStore.getGridPowerChartData},null,8,["data"])]),_:1})):l("v-if",!0),e.mqttStore.getHomeCardEnabled?(o(),d(i,{key:1,color:"light"},{headerLeft:t(()=>[r(n,{"fixed-width":"",icon:["fas","fa-home"]}),a(" Hausverbrauch ")]),headerRight:t(()=>[a(s(e.mqttStore.getHomePower),1)]),default:t(()=>[r(c,{color:"var(--color--light)",data:e.mqttStore.getHomePowerChartData},null,8,["data"])]),_:1})):l("v-if",!0),e.mqttStore.getBatteryConfigured&&e.mqttStore.getBatteryCardEnabled?(o(),d(i,{key:2,color:"warning"},{headerLeft:t(()=>[r(n,{"fixed-width":"",icon:["fas","fa-car-battery"]}),a(" Speicher ")]),headerRight:t(()=>[a(s(e.mqttStore.getBatterySoc)+" / "+s(e.mqttStore.getBatteryPower),1)]),default:t(()=>[r(c,{color:"var(--color--warning)",data:e.mqttStore.getBatteryPowerChartData,socData:e.mqttStore.getBatterySocChartData},null,8,["data","socData"])]),_:1})):l("v-if",!0),e.mqttStore.getChargePointsCardEnabled?(o(),d(i,{key:3,color:"primary"},{headerLeft:t(()=>[r(n,{"fixed-width":"",icon:["fas","fa-charging-station"]}),a(" Ladepunkte ")]),headerRight:t(()=>[a(s(e.mqttStore.getChargePointSumPower),1)]),default:t(()=>[r(c,{color:"var(--color--primary)",data:e.mqttStore.getChargePointSumPowerChartData},null,8,["data"])]),_:1})):l("v-if",!0),e.mqttStore.getPvConfigured&&e.mqttStore.getPvCardEnabled?(o(),d(i,{key:4,color:"success"},{headerLeft:t(()=>[r(n,{"fixed-width":"",icon:["fas","fa-solar-panel"]}),a(" PV ")]),headerRight:t(()=>[a(s(e.mqttStore.getPvPower),1)]),default:t(()=>[r(c,{color:"var(--color--success)",data:e.mqttStore.getPvPowerChartData,inverted:!0},null,8,["data"])]),_:1})):l("v-if",!0)])}const F=y(P,[["render",k],["__scopeId","data-v-4e1e3ea5"],["__file","/var/www/html/openWB/packages/modules/display_themes/cards/source/src/views/DashBoardView.vue"]]);export{F as default};