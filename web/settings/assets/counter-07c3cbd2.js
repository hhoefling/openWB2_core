import{_ as c,q as t,k as d,l,B as n,M as s,x as a,u,y as p}from"./vendor-a024ecfe.js";import"./vendor-sortablejs-f018003c.js";const _={name:"DeviceSolarWorldCounter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,o=void 0){this.$emit("update:configuration",{value:e,object:o})}}},f={class:"device-solar_world-counter"},m={class:"small"};function b(e,o,g,h,v,w){const r=t("openwb-base-heading"),i=t("openwb-base-alert");return d(),l("div",f,[n(r,null,{default:s(()=>[a(" Einstellungen für SolarWorld Zähler "),u("span",m,"(Modul: "+p(e.$options.name)+")",1)]),_:1}),n(i,{subtype:"info"},{default:s(()=>[a(" Diese Komponente benötigt keine Einstellungen. ")]),_:1})])}const B=c(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solar_world/counter.vue"]]);export{B as default};
