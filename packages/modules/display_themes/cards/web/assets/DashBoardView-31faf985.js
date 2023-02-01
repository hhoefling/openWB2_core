import{u as h}from"./index-7e87dc86.js";import{D as m,S as f}from"./SparkLine-5fcd92e9.js";import{l as u,d as _,e as S,g as p,h as w,i as C,F as q}from"./vendor-fortawesome-10de1020.js";import{l,o as s,e as P,n as g,p as t,i as d,s as r,k as o,x as a}from"./vendor-13e0775b.js";import{_ as v}from"./vendor-inkline-cb72ed6e.js";u.add(_,S,p,w,C);const y={name:"DashboardView",props:{changesLocked:{required:!1,type:Boolean,default:!1}},data(){return{mqttStore:h()}},components:{DashBoardCard:m,SparkLine:f,FontAwesomeIcon:q}},B={class:"dash-board-card-wrapper"};function D(k,b,x,V,e,I){const n=l("font-awesome-icon"),i=l("spark-line"),c=l("dash-board-card");return s(),P("div",B,[e.mqttStore.getGridCardEnabled?(s(),g(c,{key:0,color:"danger"},{headerLeft:t(()=>[r(n,{"fixed-width":"",icon:["fas","fa-gauge-high"]}),o(" EVU ")]),headerRight:t(()=>[o(a(e.mqttStore.getGridPower),1)]),default:t(()=>[r(i,{color:"var(--color--danger)",colorNegative:"var(--color--success)",data:e.mqttStore.getGridPowerChartData},null,8,["data"])]),_:1})):d("v-if",!0),e.mqttStore.getHomeCardEnabled?(s(),g(c,{key:1,color:"light"},{headerLeft:t(()=>[r(n,{"fixed-width":"",icon:["fas","fa-home"]}),o(" Hausverbrauch ")]),headerRight:t(()=>[o(a(e.mqttStore.getHomePower),1)]),default:t(()=>[r(i,{color:"var(--color--light)",data:e.mqttStore.getHomePowerChartData},null,8,["data"])]),_:1})):d("v-if",!0),e.mqttStore.getBatteryConfigured&&e.mqttStore.getBatteryCardEnabled?(s(),g(c,{key:2,color:"warning"},{headerLeft:t(()=>[r(n,{"fixed-width":"",icon:["fas","fa-car-battery"]}),o(" Speicher ")]),headerRight:t(()=>[o(a(e.mqttStore.getBatterySoc)+" / "+a(e.mqttStore.getBatteryPower),1)]),default:t(()=>[r(i,{color:"var(--color--warning)",data:e.mqttStore.getBatteryPowerChartData,socData:e.mqttStore.getBatterySocChartData},null,8,["data","socData"])]),_:1})):d("v-if",!0),e.mqttStore.getPvConfigured&&e.mqttStore.getPvCardEnabled?(s(),g(c,{key:3,color:"success"},{headerLeft:t(()=>[r(n,{"fixed-width":"",icon:["fas","fa-solar-panel"]}),o(" PV ")]),headerRight:t(()=>[o(a(e.mqttStore.getPvPower),1)]),default:t(()=>[r(i,{color:"var(--color--success)",data:e.mqttStore.getPvPowerChartData,inverted:!0},null,8,["data"])]),_:1})):d("v-if",!0),e.mqttStore.getChargePointsCardEnabled?(s(),g(c,{key:4,color:"primary"},{headerLeft:t(()=>[r(n,{"fixed-width":"",icon:["fas","fa-charging-station"]}),o(" "+a(e.mqttStore.getChargePointIds.length==1?e.mqttStore.getChargePointName(e.mqttStore.getChargePointIds[0]):"Ladepunkte"),1)]),headerRight:t(()=>[o(a(e.mqttStore.getChargePointIds.length==1?e.mqttStore.getChargePointPower(e.mqttStore.getChargePointIds[0]):e.mqttStore.getChargePointSumPower),1)]),default:t(()=>[r(i,{color:"var(--color--primary)",data:e.mqttStore.getChargePointIds.length==1?e.mqttStore.getChargePointPowerChartData(e.mqttStore.getChargePointIds[0]):e.mqttStore.getChargePointSumPowerChartData},null,8,["data"])]),_:1})):d("v-if",!0)])}const G=v(y,[["render",D],["__scopeId","data-v-4e1e3ea5"],["__file","/var/www/html/openWB/packages/modules/display_themes/cards/source/src/views/DashBoardView.vue"]]);export{G as default};