import{C as r}from"./HardwareInstallation-775406e1.js";import{_ as m,u as t,k as p,l,G as n,E as u,y as d}from"./vendor-06e11d0e.js";import"./vendor-fortawesome-3d19d475.js";import"./index-beac009d.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";import"./dynamic-import-helper-be004503.js";const c={name:"DeviceSolarmaxBat",mixins:[r]},b={class:"device-solarmax-bat"};function _(o,e,f,x,v,g){const a=t("openwb-base-alert"),s=t("openwb-base-number-input");return p(),l("div",b,[n(a,{subtype:"info"},{default:u(()=>e[1]||(e[1]=[d(" Solarmax MAX.STORAGE / MAX.STORAGE Ultimate Batteriespeicher sind Teil eines Hybridsystems. Daher muss auch eine Komponente Wechselrichter angelegt werden. ")])),_:1}),n(s,{title:"Modbus ID",required:"","model-value":o.component.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=i=>o.updateConfiguration(i,"configuration.modbus_id"))},null,8,["model-value"])])}const T=m(c,[["render",_],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solarmax/solarmax/bat.vue"]]);export{T as default};
