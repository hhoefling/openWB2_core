import{C as d}from"./HardwareInstallation-775406e1.js";import{_ as u,u as a,k as p,l as m,G as r,E as i,y as t,x as g}from"./vendor-06e11d0e.js";import"./vendor-fortawesome-3d19d475.js";import"./index-beac009d.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";import"./dynamic-import-helper-be004503.js";const w={name:"DeviceJsonInverter",mixins:[d]},f={class:"device-json-inverter"};function b(n,e,c,v,_,h){const l=a("openwb-base-heading"),s=a("openwb-base-text-input");return p(),m("div",f,[r(l,null,{default:i(()=>e[2]||(e[2]=[t(" Einstellungen für JSON Wechselrichter ")])),_:1}),r(s,{title:"Abfrage für Leistung",subtype:"text",required:"","model-value":n.component.configuration.jq_power,"onUpdate:modelValue":e[0]||(e[0]=o=>n.updateConfiguration(o,"configuration.jq_power"))},{help:i(()=>e[3]||(e[3]=[t(' Zur Analyse der Werte aus dem json-Objekt wird jq benutzt. Ist die Json Antwort z.B. {"PowerInstalledPeak":4655, "PowerProduced":132, "PowerOut":897.08172362555717, "PowerSelfSupplied":234.9182763744428} So muss hier .PowerOut eingetragen werden. '),g("br",null,null,-1),t(" Es wird vom Server eine Zahl mit oder ohne Nachkommastellen (Float, Integer) und einem Punkt als Dezimaltrennzeichen erwartet, welche die aktuelle Leistung in Watt darstellt. Produzierte Leistung muss ein negatives Vorzeichen haben. (In bestimmten Konstellationen, z.B. wenn ein Hybridsystem über einen zweiten Wechselrichter geladen wird, hat die Leistung ein positives Vorzeichen.) ")])),_:1},8,["model-value"]),r(s,{title:"Abfrage für Zählerstand",subtype:"text","model-value":n.component.configuration.jq_exported,"onUpdate:modelValue":e[1]||(e[1]=o=>n.updateConfiguration(o,"configuration.jq_exported"))},{help:i(()=>e[4]||(e[4]=[t(" Wird dieses Feld leer gelassen, dann werden Zählerstände intern simuliert. ")])),_:1},8,["model-value"])])}const B=u(w,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/generic/json/inverter.vue"]]);export{B as default};
