import{C as r}from"./HardwareInstallation-775406e1.js";import{_ as p,u as n,k as m,l as u,G as t,E as d,y as l}from"./vendor-06e11d0e.js";import"./vendor-fortawesome-3d19d475.js";import"./index-beac009d.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";import"./dynamic-import-helper-be004503.js";const _={name:"DeviceFoxEssBat",mixins:[r]},c={class:"device-fox_ess-bat"};function b(o,e,f,x,v,g){const s=n("openwb-base-heading"),i=n("openwb-base-number-input");return m(),u("div",c,[t(s,null,{default:d(()=>e[1]||(e[1]=[l(" Einstellungen für FoxEss Batteriespeicher ")])),_:1}),t(i,{title:"Modbus ID",required:"","model-value":o.component.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=a=>o.updateConfiguration(a,"configuration.modbus_id"))},null,8,["model-value"])])}const F=p(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/fox_ess/fox_ess/bat.vue"]]);export{F as default};
