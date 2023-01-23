import{_ as c,q as o,l as _,m,A as i,K as r,v as n,u as a,x as f}from"./vendor-29588c66.js";import"./vendor-sortablejs-66a8dc70.js";const g={name:"DeviceHttp",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},componentId:{required:!0}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},v={class:"device-http"},b={class:"small"},h=a("br",null,null,-1);function w(t,e,s,x,B,d){const u=o("openwb-base-heading"),p=o("openwb-base-text-input");return _(),m("div",v,[i(u,null,{default:r(()=>[n(" Einstellungen für Http "),a("span",b,"(Modul: "+f(t.$options.name)+")",1)]),_:1}),i(p,{title:"Server-URL",subtype:"url",required:"","model-value":s.configuration.url,"onUpdate:modelValue":e[0]||(e[0]=l=>d.updateConfiguration(l,"configuration.url"))},{help:r(()=>[n(" Hier sind die Verbindungsangaben für den Http-Server einzutragen. Der Pfad für die einzelnen Daten wird in der Komponente hinterlegt."),h,n(" Beispiel: http://mein.server:8080 ")]),_:1},8,["model-value"])])}const C=c(g,[["render",w],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/http/device.vue"]]);export{C as default};