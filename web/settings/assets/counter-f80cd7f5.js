import{_ as r,q as o,k as c,l as p,B as t,M as l,x as m,u as _,y as f}from"./vendor-a024ecfe.js";import"./vendor-sortablejs-f018003c.js";const b={name:"DeviceDeyeCounter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(n,e=void 0){this.$emit("update:configuration",{value:n,object:e})}}},g={class:"device-batterx-counter"},v={class:"small"};function h(n,e,a,x,w,s){const i=o("openwb-base-heading"),u=o("openwb-base-number-input");return c(),p("div",g,[t(i,null,{default:l(()=>[m(" Einstellungen für Deye Zähler "),_("span",v,"(Modul: "+f(n.$options.name)+")",1)]),_:1}),t(u,{title:"Modbus ID","model-value":a.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=d=>s.updateConfiguration(d,"configuration.modbus_id"))},null,8,["model-value"])])}const C=r(b,[["render",h],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/deye/counter.vue"]]);export{C as default};
