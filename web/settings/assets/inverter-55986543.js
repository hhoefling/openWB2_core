import{C as p}from"./HardwareInstallation-0477e3e2.js";import{_ as l,u as n,k as d,l as c,G as t,E as i,y as r}from"./vendor-809787c9.js";import"./vendor-fortawesome-e760f6db.js";import"./index-f9dddb60.js";import"./vendor-bootstrap-5ce91dd7.js";import"./vendor-jquery-49acc558.js";import"./vendor-axios-57a82265.js";import"./vendor-sortablejs-d99a4022.js";import"./dynamic-import-helper-be004503.js";const u={name:"DeviceSolarViewInverter",mixins:[p]},_={class:"device-solar-view-inverter"};function f(o,e,v,g,w,b){const s=n("openwb-base-heading"),a=n("openwb-base-text-input");return d(),c("div",_,[t(s,null,{default:i(()=>e[1]||(e[1]=[r(" Einstellungen für SolarView Wechselrichter ")])),_:1}),t(a,{title:"Kommando für die Abfrage",required:"","model-value":o.component.configuration.command,"onUpdate:modelValue":e[0]||(e[0]=m=>o.updateConfiguration(m,"configuration.command"))},{help:i(()=>e[2]||(e[2]=[r(" Kommandos gemäß SolarView-Dokumentation, z.B.: 00* (gesamte Anlage), 01* (Wechselrichter 1), 02* (Wechselrichter 2) ")])),_:1},8,["model-value"])])}const S=l(u,[["render",f],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solar_view/solar_view/inverter.vue"]]);export{S as default};