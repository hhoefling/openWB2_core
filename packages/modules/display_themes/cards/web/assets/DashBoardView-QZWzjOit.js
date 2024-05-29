import{u as p}from"./index-Jo0qhDRH.js";import{D as S}from"./DashBoardCard-qEoaavxr.js";import{S as q,C as b}from"./ChargePointPlugBadge-6FxVjZH4.js";import{l as P,d as v,F as w,e as x,g as B,h as D,i as I}from"./vendor-fortawesome-S-qqChZo.js";import{_ as g}from"./vendor-inkline-F2zxVbzD.js";import{l as e,o as c,n as d,p as o,s,k as i,x as m,i as _,e as E}from"./vendor-xCcLvHvG.js";P.add(v);const H={name:"GridCard",props:{},data(){return{mqttStore:p()}},components:{DashBoardCard:S,SparkLine:q,FontAwesomeIcon:w}};function L(h,l,f,u,t,C){const r=e("font-awesome-icon"),a=e("spark-line"),n=e("dash-board-card");return c(),d(n,{color:"danger"},{headerLeft:o(()=>[s(r,{"fixed-width":"",icon:["fas","fa-gauge-high"]}),i(" EVU ")]),headerRight:o(()=>[i(m(t.mqttStore.getGridPower),1)]),default:o(()=>[s(a,{color:"var(--color--danger)",colorNegative:"var(--color--success)",data:t.mqttStore.getGridPowerChartData},null,8,["data"])]),_:1})}const V=g(H,[["render",L]]);P.add(x);const G={name:"BatteryCard",props:{},data(){return{mqttStore:p()}},components:{DashBoardCard:S,SparkLine:q,FontAwesomeIcon:w}};function N(h,l,f,u,t,C){const r=e("font-awesome-icon"),a=e("spark-line"),n=e("dash-board-card");return t.mqttStore.getBatteryConfigured?(c(),d(n,{key:0,color:"warning"},{headerLeft:o(()=>[s(r,{"fixed-width":"",icon:["fas","fa-car-battery"]}),i(" Speicher ")]),headerRight:o(()=>[i(m(t.mqttStore.getBatterySoc)+" / "+m(t.mqttStore.getBatteryPower),1)]),default:o(()=>[s(a,{color:"var(--color--warning)",data:t.mqttStore.getBatteryPowerChartData,socData:t.mqttStore.getBatterySocChartData},null,8,["data","socData"])]),_:1})):_("",!0)}const R=g(G,[["render",N]]);P.add(B);const $={name:"InverterCard",props:{},data(){return{mqttStore:p()}},components:{DashBoardCard:S,SparkLine:q,FontAwesomeIcon:w}};function F(h,l,f,u,t,C){const r=e("font-awesome-icon"),a=e("spark-line"),n=e("dash-board-card");return t.mqttStore.getPvConfigured?(c(),d(n,{key:0,color:"success"},{headerLeft:o(()=>[s(r,{"fixed-width":"",icon:["fas","fa-solar-panel"]}),i(" PV ")]),headerRight:o(()=>[i(m(t.mqttStore.getPvPower),1)]),default:o(()=>[s(a,{color:"var(--color--success)",data:t.mqttStore.getPvPowerChartData,inverted:!0},null,8,["data"])]),_:1})):_("",!0)}const A=g($,[["render",F]]);P.add(D);const M={name:"HomeCard",props:{},data(){return{mqttStore:p()}},components:{DashBoardCard:S,SparkLine:q,FontAwesomeIcon:w}};function T(h,l,f,u,t,C){const r=e("font-awesome-icon"),a=e("spark-line"),n=e("dash-board-card");return c(),d(n,{color:"light"},{headerLeft:o(()=>[s(r,{"fixed-width":"",icon:["fas","fa-home"]}),i(" Hausverbrauch ")]),headerRight:o(()=>[i(m(t.mqttStore.getHomePower),1)]),default:o(()=>[s(a,{color:"var(--color--light)",data:t.mqttStore.getHomePowerChartData},null,8,["data"])]),_:1})}const U=g(M,[["render",T]]);P.add(I);const j={name:"ChargePointsCard",props:{},data(){return{mqttStore:p()}},components:{DashBoardCard:S,SparkLine:q,FontAwesomeIcon:w,ChargePointPlugBadge:b}};function z(h,l,f,u,t,C){const r=e("font-awesome-icon"),a=e("charge-point-plug-badge"),n=e("spark-line"),y=e("dash-board-card");return t.mqttStore.getChargePointIds.length>0?(c(),d(y,{key:0,color:"primary"},{headerLeft:o(()=>[s(r,{"fixed-width":"",icon:["fas","fa-charging-station"]}),i(" "+m(t.mqttStore.getChargePointIds.length==1?t.mqttStore.getChargePointName(t.mqttStore.getChargePointIds[0]):"Ladepunkte"),1)]),headerRight:o(()=>[i(m(t.mqttStore.getChargePointIds.length==1?t.mqttStore.getChargePointPower(t.mqttStore.getChargePointIds[0]):t.mqttStore.getChargePointSumPower)+" ",1),s(a,{chargePointId:t.mqttStore.getChargePointIds,showEnergyCharged:!1},null,8,["chargePointId"])]),default:o(()=>[s(n,{color:"var(--color--primary)",data:t.mqttStore.getChargePointIds.length==1?t.mqttStore.getChargePointPowerChartData(t.mqttStore.getChargePointIds[0]):t.mqttStore.getChargePointSumPowerChartData},null,8,["data"])]),_:1})):_("",!0)}const J=g(j,[["render",z]]),K={name:"DashboardView",props:{changesLocked:{required:!1,type:Boolean,default:!1}},data(){return{mqttStore:p()}},components:{GridCard:V,HomeCard:U,BatteryCard:R,InverterCard:A,ChargePointsCard:J}},O={class:"dash-board-card-wrapper"};function Q(h,l,f,u,t,C){const r=e("grid-card"),a=e("home-card"),n=e("battery-card"),y=e("inverter-card"),k=e("charge-points-card");return c(),E("div",O,[t.mqttStore.getGridCardEnabled?(c(),d(r,{key:0})):_("",!0),t.mqttStore.getHomeCardEnabled?(c(),d(a,{key:1})):_("",!0),t.mqttStore.getBatteryCardEnabled?(c(),d(n,{key:2})):_("",!0),t.mqttStore.getPvCardEnabled?(c(),d(y,{key:3})):_("",!0),t.mqttStore.getChargePointsCardEnabled?(c(),d(k,{key:4})):_("",!0)])}const ot=g(K,[["render",Q],["__scopeId","data-v-945a29f7"]]);export{ot as default};
