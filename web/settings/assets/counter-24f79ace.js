import{C as a}from"./HardwareInstallation-775406e1.js";import{_ as u,u as n,k as d,l as c,G as t,E as i,y as s}from"./vendor-06e11d0e.js";import"./vendor-fortawesome-3d19d475.js";import"./index-beac009d.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";import"./dynamic-import-helper-be004503.js";const l={name:"DeviceMTecCounter",mixins:[a]},_={class:"device-mtec-counter"};function b(o,e,f,v,g,C){const r=n("openwb-base-heading"),p=n("openwb-base-number-input");return d(),c("div",_,[t(r,null,{default:i(()=>e[1]||(e[1]=[s(" Einstellungen für M-Tec Zähler ")])),_:1}),t(p,{title:"Modbus ID",required:"","model-value":o.component.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=m=>o.updateConfiguration(m,"configuration.modbus_id"))},{help:i(()=>e[2]||(e[2]=[s(" Die Standard-Modbus-ID von M-Tec ist 247 ")])),_:1},8,["model-value"])])}const V=u(l,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/mtec/mtec/counter.vue"]]);export{V as default};
