import{_ as c,q as o,k as d,l,B as n,M as s,x as a,u as p,y as u}from"./vendor-a024ecfe.js";import"./vendor-sortablejs-f018003c.js";const _={name:"DeviceKostalPikoOldInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},f={class:"device-kostal-piko-old-inverter"},m={class:"small"};function b(e,t,v,g,h,k){const i=o("openwb-base-heading"),r=o("openwb-base-alert");return d(),l("div",f,[n(i,null,{default:s(()=>[a(" Einstellungen für Kostal Piko Wechselrichter (alte Generation) "),p("span",m,"(Modul: "+u(e.$options.name)+")",1)]),_:1}),n(r,{subtype:"info"},{default:s(()=>[a(" Diese Komponente benötigt keine Einstellungen. ")]),_:1})])}const x=c(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/kostal_piko_old/inverter.vue"]]);export{x as default};
