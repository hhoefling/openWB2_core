import{C as a}from"./HardwareInstallation-0477e3e2.js";import{_ as u,u as n,k as d,l as c,G as t,E as i,y as s}from"./vendor-809787c9.js";import"./vendor-fortawesome-e760f6db.js";import"./index-f9dddb60.js";import"./vendor-bootstrap-5ce91dd7.js";import"./vendor-jquery-49acc558.js";import"./vendor-axios-57a82265.js";import"./vendor-sortablejs-d99a4022.js";import"./dynamic-import-helper-be004503.js";const l={name:"DeviceMTecCounter",mixins:[a]},_={class:"device-mtec-counter"};function b(o,e,f,v,g,C){const r=n("openwb-base-heading"),p=n("openwb-base-number-input");return d(),c("div",_,[t(r,null,{default:i(()=>e[1]||(e[1]=[s(" Einstellungen für M-Tec Zähler ")])),_:1}),t(p,{title:"Modbus ID",required:"","model-value":o.component.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=m=>o.updateConfiguration(m,"configuration.modbus_id"))},{help:i(()=>e[2]||(e[2]=[s(" Die Standard-Modbus-ID von M-Tec ist 247 ")])),_:1},8,["model-value"])])}const V=u(l,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/mtec/mtec/counter.vue"]]);export{V as default};