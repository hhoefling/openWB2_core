import{C as p}from"./index-4f943031.js";import{_ as h,q as o,k as a,l as i,u as c,B as s,M as r,x as u}from"./vendor-a024ecfe.js";import"./vendor-fortawesome-9894ff0b.js";import"./vendor-bootstrap-ba528e04.js";import"./vendor-jquery-41e020ff.js";import"./vendor-axios-d11b2e75.js";import"./vendor-sortablejs-f018003c.js";const _={name:"OpenwbScheduledChargeConfig",mixins:[p],data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/general/chargemode_config/scheduled_charging/phases_to_use"]}}},b={class:"scheduledChargeConfig"},f={name:"scheduledChargeConfigForm"},v={key:0},w={key:1};function C(t,e,$,k,B,V){const d=o("openwb-base-alert"),l=o("openwb-base-button-group-input"),m=o("openwb-base-card"),g=o("openwb-base-submit-buttons");return a(),i("div",b,[c("form",f,[s(m,{title:"Phasenumschaltung"},{default:r(()=>[t.$store.state.mqtt["openWB/general/extern"]===!0?(a(),i("div",v,[s(d,{subtype:"info"},{default:r(()=>[u(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(a(),i("div",w,[s(l,{title:"Anzahl Phasen",buttons:[{buttonValue:1,text:"1"},{buttonValue:3,text:"Maximum"},{buttonValue:0,text:"Automatik"}],"model-value":t.$store.state.mqtt["openWB/general/chargemode_config/scheduled_charging/phases_to_use"],"onUpdate:modelValue":e[0]||(e[0]=n=>t.updateState("openWB/general/chargemode_config/scheduled_charging/phases_to_use",n))},{help:r(()=>[u(' Hier kann eingestellt werden, ob Ladevorgänge im Modus "Zielladen" mit nur einer Phase oder dem möglichen Maximum in Abhängigkeit der "Ladepunkt"- und "Fahrzeug"-Einstellungen durchgeführt werden. Im Modus "Automatik" entscheidet die Regelung, welche Einstellung genutzt wird, um das Ziel zu erreichen. Voraussetzung ist die verbaute Umschaltmöglichkeit zwischen 1- und 3-phasig (s.g. 1p3p). ')]),_:1},8,["model-value"])]))]),_:1}),s(g,{formName:"scheduledChargeConfigForm",onSave:e[1]||(e[1]=n=>t.$emit("save")),onReset:e[2]||(e[2]=n=>t.$emit("reset")),onDefaults:e[3]||(e[3]=n=>t.$emit("defaults"))})])])}const A=h(_,[["render",C],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/ScheduledChargeConfig.vue"]]);export{A as default};
