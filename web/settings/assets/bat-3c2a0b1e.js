import{_ as d,q as n,k as r,l as p,B as o,M as s,x as a,u,y as l}from"./vendor-1d14b1e0.js";import"./vendor-sortablejs-a8739f54.js";const _={name:"DeviceE3dcBat",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},f={class:"device-e3dc-bat"},m={class:"small"};function b(e,t,g,h,v,B){const i=n("openwb-base-heading"),c=n("openwb-base-alert");return r(),p("div",f,[o(i,null,{default:s(()=>[a(" Einstellungen für E3DC Batteriespeicher "),u("span",m,"(Modul: "+l(e.$options.name)+")",1)]),_:1}),o(c,{subtype:"info"},{default:s(()=>[a(" Diese Komponente benötigt keine Einstellungen. ")]),_:1})])}const x=d(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/e3dc/bat.vue"]]);export{x as default};
