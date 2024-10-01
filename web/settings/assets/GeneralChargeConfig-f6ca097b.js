import{_ as m,C}from"./index-f9fda857.js";import{_ as E}from"./dynamic-import-helper-be004503.js";import{_ as b,u as o,k as l,l as s,D as n,N as a,y as r,z as v,x as d,a0 as T,A as k,a1 as V,J as P,B as W}from"./vendor-a21b3a62.js";const L={props:{electricityTariff:{type:Object,required:!0}},emits:["update:configuration"],methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},q=b(L,[["__file","/opt/openWB-dev/openwb-ui-settings/src/components/electricity_tariffs/ElectricityTariffConfigMixin.vue"]]),M={name:"ElectricityTariffConfigFallback",mixins:[q]},O={class:"backup-cloud-fallback"};function A(t,e,f,h,y,p){const u=o("openwb-base-alert"),g=o("openwb-base-textarea");return l(),s("div",O,[n(u,{subtype:"warning"},{default:a(()=>[r(' Es wurde keine Konfigurationsseite für den Anbieter "'+v(t.electricityTariff.name)+'" gefunden. Die Einstellungen können als JSON direkt bearbeitet werden. ',1)]),_:1}),n(g,{title:"Konfiguration",subtype:"json","model-value":t.electricityTariff.configuration,"onUpdate:modelValue":e[0]||(e[0]=c=>t.updateConfiguration(c,"configuration"))},{help:a(()=>e[1]||(e[1]=[r(" Bitte prüfen Sie, ob die Eingaben richtig interpretiert werden. ")])),_:1},8,["model-value"]),n(u,{subtype:"info"},{default:a(()=>[d("pre",null,v(JSON.stringify(t.electricityTariff.configuration,void 0,2)),1)]),_:1})])}const U=b(M,[["render",A],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/electricity_tariffs/OpenwbElectricityTariffConfigFallback.vue"]]),F={name:"OpenwbElectricityTariffProxy",props:{electricityTariff:{type:Object,required:!0}},emits:["update:configuration"],computed:{myComponent(){return console.debug(`loading electricity tariff cloud: ${this.electricityTariff.type}`),T({loader:()=>E(Object.assign({"./awattar/electricity_tariff.vue":()=>m(()=>import("./electricity_tariff-63a1e9ec.js"),["assets/electricity_tariff-63a1e9ec.js","assets/vendor-a21b3a62.js","assets/vendor-sortablejs-3016fed8.js","assets/vendor-aab9f734.css","assets/index-f9fda857.js","assets/vendor-fortawesome-41164876.js","assets/vendor-bootstrap-d0c3645c.js","assets/vendor-jquery-a5dbbab1.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-0e6de98a.js","assets/index-b3227821.css","assets/dynamic-import-helper-be004503.js"]),"./energycharts/electricity_tariff.vue":()=>m(()=>import("./electricity_tariff-4bc01805.js"),["assets/electricity_tariff-4bc01805.js","assets/vendor-a21b3a62.js","assets/vendor-sortablejs-3016fed8.js","assets/vendor-aab9f734.css","assets/index-f9fda857.js","assets/vendor-fortawesome-41164876.js","assets/vendor-bootstrap-d0c3645c.js","assets/vendor-jquery-a5dbbab1.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-0e6de98a.js","assets/index-b3227821.css","assets/dynamic-import-helper-be004503.js"]),"./rabot/electricity_tariff.vue":()=>m(()=>import("./electricity_tariff-7b04b620.js"),["assets/electricity_tariff-7b04b620.js","assets/vendor-a21b3a62.js","assets/vendor-sortablejs-3016fed8.js","assets/vendor-aab9f734.css","assets/index-f9fda857.js","assets/vendor-fortawesome-41164876.js","assets/vendor-bootstrap-d0c3645c.js","assets/vendor-jquery-a5dbbab1.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-0e6de98a.js","assets/index-b3227821.css","assets/dynamic-import-helper-be004503.js"]),"./tibber/electricity_tariff.vue":()=>m(()=>import("./electricity_tariff-5111f15f.js"),["assets/electricity_tariff-5111f15f.js","assets/vendor-a21b3a62.js","assets/vendor-sortablejs-3016fed8.js","assets/vendor-aab9f734.css","assets/index-f9fda857.js","assets/vendor-fortawesome-41164876.js","assets/vendor-bootstrap-d0c3645c.js","assets/vendor-jquery-a5dbbab1.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-0e6de98a.js","assets/index-b3227821.css","assets/dynamic-import-helper-be004503.js"]),"./voltego/electricity_tariff.vue":()=>m(()=>import("./electricity_tariff-e23d6291.js"),["assets/electricity_tariff-e23d6291.js","assets/vendor-a21b3a62.js","assets/vendor-sortablejs-3016fed8.js","assets/vendor-aab9f734.css","assets/index-f9fda857.js","assets/vendor-fortawesome-41164876.js","assets/vendor-bootstrap-d0c3645c.js","assets/vendor-jquery-a5dbbab1.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-0e6de98a.js","assets/index-b3227821.css","assets/dynamic-import-helper-be004503.js"])}),`./${this.electricityTariff.type}/electricity_tariff.vue`),errorComponent:U})}},methods:{updateConfiguration(t){this.$emit("update:configuration",t)}}};function D(t,e,f,h,y,p){const u=o("openwb-base-heading");return l(),s(P,null,[n(u,null,{default:a(()=>[r(' Einstellungen für Modul "'+v(f.electricityTariff.name)+'" ',1)]),_:1}),(l(),k(V(p.myComponent),{"electricity-tariff":f.electricityTariff,"onUpdate:configuration":e[0]||(e[0]=g=>p.updateConfiguration(g))},null,40,["electricity-tariff"]))],64)}const N=b(F,[["render",D],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/electricity_tariffs/OpenwbElectricityTariffProxy.vue"]]),I={name:"OpenwbGeneralChargeConfigView",components:{OpenwbElectricityTariffProxy:N},mixins:[C],emits:["save","reset","defaults"],data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/general/chargemode_config/phase_switch_delay","openWB/general/chargemode_config/retry_failed_phase_switches","openWB/general/chargemode_config/unbalanced_load","openWB/general/chargemode_config/unbalanced_load_limit","openWB/general/prices/bat","openWB/general/prices/grid","openWB/general/prices/pv","openWB/optional/et/provider","openWB/system/configurable/electricity_tariffs"]}},computed:{electricityTariffList(){return this.$store.state.mqtt["openWB/system/configurable/electricity_tariffs"]}},methods:{getElectricityTariffDefaultConfiguration(t){const e=this.electricityTariffList.find(f=>f.value==t);return Object.prototype.hasOwnProperty.call(e,"defaults")?{...e.defaults}:(console.warn("no default configuration found for electricity tariff type!",t),{})},updateSelectedElectricityTariff(t){this.updateState("openWB/optional/et/provider",t,"type"),this.updateState("openWB/optional/et/provider",this.getElectricityTariffDefaultConfiguration(t))},updateConfiguration(t,e){console.debug("updateConfiguration",t,e),this.updateState(t,e.value,e.object)}}},j={class:"generalChargeConfig"},R={name:"generalChargeConfigForm"},Z={key:0},G={key:1},x={key:1},J={key:2},K={key:0},H={key:1},Q={key:0};function X(t,e,f,h,y,p){const u=o("openwb-base-alert"),g=o("openwb-base-button-group-input"),c=o("openwb-base-range-input"),w=o("openwb-base-heading"),_=o("openwb-base-number-input"),B=o("openwb-base-card"),z=o("openwb-base-select-input"),S=o("openwb-electricity-tariff-proxy"),$=o("openwb-base-submit-buttons");return l(),s("div",j,[d("form",R,[n(B,{title:"Allgemein"},{default:a(()=>[t.$store.state.mqtt["openWB/general/extern"]===!0?(l(),s("div",Z,[n(u,{subtype:"info"},{default:a(()=>e[12]||(e[12]=[r(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')])),_:1})])):(l(),s("div",G,[n(g,{title:"Begrenzung der Schieflast",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":t.$store.state.mqtt["openWB/general/chargemode_config/unbalanced_load"],"onUpdate:modelValue":e[0]||(e[0]=i=>t.updateState("openWB/general/chargemode_config/unbalanced_load",i))},{help:a(()=>e[13]||(e[13]=[r(" Wenn diese Option aktiviert ist, werden nicht-dreiphasige Ladevorgänge so geregelt, dass am Netzanschlusspunkt (EVU-Zähler) die eingestellte Grenze für die Schieflast nicht überschritten wird. Hierfür muss der EVU-Zähler einzelne Phasenströme bereitstellen!"),d("br",null,null,-1),r(' Weiterhin müssen bei den Ladepunkten sowie Fahrzeugen sämtliche Angaben zur Anzahl angeschlossener/unterstützter Phasen und der Phasenrotation hinterlegt werden, damit der Regelung bekannt ist, welcher Ladevorgang welche Phase am Netzanschluss beeinflusst. siehe "Konfiguration - Ladepunkte -> elektrischer Anschluss - Phase 1" und "Konfiguration - Fahrzeuge -> Fahrzeug-Profile" ')])),_:1},8,["model-value"]),t.$store.state.mqtt["openWB/general/chargemode_config/unbalanced_load"]?(l(),k(c,{key:0,title:"Erlaubte Schieflast",min:10,max:32,step:1,unit:"A","model-value":t.$store.state.mqtt["openWB/general/chargemode_config/unbalanced_load_limit"],"onUpdate:modelValue":e[1]||(e[1]=i=>t.updateState("openWB/general/chargemode_config/unbalanced_load_limit",i))},{help:a(()=>e[14]||(e[14]=[r(" Hiermit wird festgelegt, welche Schieflast am Netzanschlusspunkt erlaubt ist. Bei Überschreitung werden gezielt einzelne Ladevorgänge in der Leistung begrenzt. ")])),_:1},8,["model-value"])):W("",!0),n(g,{title:"Phasenumschaltung wiederholt anstoßen",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":t.$store.state.mqtt["openWB/general/chargemode_config/retry_failed_phase_switches"],"onUpdate:modelValue":e[2]||(e[2]=i=>t.updateState("openWB/general/chargemode_config/retry_failed_phase_switches",i))},{help:a(()=>e[15]||(e[15]=[r(" Wenn diese Option aktiviert ist, werden bis zu drei Umschaltversuche vorgenommen, wenn die vorgegebene und genutzte Phasenzahl nicht übereinstimmen. Wird die Option deaktiviert, wird nur eine Umschaltung durchgeführt."),d("br",null,null,-1),r(" Die gezählten Fehlversuche werden mit dem Abstecken zurückgesetzt. ")])),_:1},8,["model-value"]),n(c,{title:"Verzögerung automat. Phasenumschaltung",min:0,max:14,step:1,labels:[{label:"1⇑ 15⇓ Min.",value:1},{label:"2⇑ 14⇓ Min.",value:2},{label:"3⇑ 13⇓ Min.",value:3},{label:"4⇑ 12⇓ Min.",value:4},{label:"5⇑ 11⇓ Min.",value:5},{label:"6⇑ 10⇓ Min.",value:6},{label:"7⇑ 9⇓ Min.",value:7},{label:"8⇑ 8⇓ Min.",value:8},{label:"9⇑ 7⇓ Min.",value:9},{label:"10⇑ 6⇓ Min.",value:10},{label:"11⇑ 5⇓ Min.",value:11},{label:"12⇑ 4⇓ Min.",value:12},{label:"13⇑ 3⇓ Min.",value:13},{label:"14⇑ 2⇓ Min.",value:14},{label:"15⇑ 1⇓ Min.",value:15}],"model-value":t.$store.state.mqtt["openWB/general/chargemode_config/phase_switch_delay"],"onUpdate:modelValue":e[3]||(e[3]=i=>t.updateState("openWB/general/chargemode_config/phase_switch_delay",i))},{help:a(()=>e[16]||(e[16]=[r(" Um zu viele Umschaltungen zu vermeiden, wird Anhand dieses Wertes definiert, wann die Umschaltung erfolgen soll. Ist für durchgehend x Minuten die Maximalstromstärke erreicht, wird auf mehrphasige Ladung ⇑ umgestellt. Ist die Ladung nur für ein Intervall unterhalb der Maximalstromstärke, beginnt das Intervall für die Umschaltung erneut. Ist die Ladung im mehrphasigen Modus für 16 - x Minuten auf der Minimalstromstärke, wird wieder auf einphasige Ladung ⇓ gewechselt."),d("br",null,null,-1),r(" Ist ausreichend Überschuss vorhanden, wird beim Ladestart die Umschaltverzögerung nicht abgewartet, sondern direkt mit mehrphasiger Ladung begonnen. ")])),_:1},8,["model-value"]),e[20]||(e[20]=d("hr",null,null,-1)),n(w,null,{help:a(()=>e[17]||(e[17]=[r(" Zur Berechnung der Ladekosten im Lade-Log werden stundenweise die Anteile der Stromquellen (Speicher, Netz, PV) berechnet und mit den hier angegebenen Preisen multipliziert."),d("br",null,null,-1),r(" Ist die Abrechnung über das Ladeprotokoll, z.B. mit dem Arbeitgeber, vereinbart, ist bei allen drei Feldern der vereinbarte Preis einzutragen. ")])),default:a(()=>[e[18]||(e[18]=r(" Berechnung der Ladekosten "))]),_:1}),t.$store.state.mqtt["openWB/optional/et/provider"]&&t.$store.state.mqtt["openWB/optional/et/provider"].type?(l(),s("div",x,[n(u,{subtype:"info"},{default:a(()=>e[19]||(e[19]=[r(" Für den Netzbezug wird der dynamische Strompreis des Anbieters für variable Stromtarife verwendet (stündliche Aktualisierung durch den Anbieter). ")])),_:1})])):(l(),s("div",J,[n(_,{title:"Preis für Netzbezug",step:.001,precision:3,unit:"ct/kWh",required:"","model-value":t.$store.state.mqtt["openWB/general/prices/grid"]*1e5,"onUpdate:modelValue":e[4]||(e[4]=i=>t.updateState("openWB/general/prices/grid",parseFloat((i/1e5).toFixed(7))))},null,8,["model-value"])])),n(_,{title:"Preis für Speicherentladung",step:.001,precision:3,unit:"ct/kWh",required:"","model-value":t.$store.state.mqtt["openWB/general/prices/bat"]*1e5,"onUpdate:modelValue":e[5]||(e[5]=i=>t.updateState("openWB/general/prices/bat",parseFloat((i/1e5).toFixed(7))))},null,8,["model-value"]),n(_,{title:"Preis für PV-Strom",step:.001,precision:3,unit:"ct/kWh",required:"","model-value":t.$store.state.mqtt["openWB/general/prices/pv"]*1e5,"onUpdate:modelValue":e[6]||(e[6]=i=>t.updateState("openWB/general/prices/pv",parseFloat((i/1e5).toFixed(7))))},null,8,["model-value"])]))]),_:1}),n(B,{title:"Optional"},{default:a(()=>[t.$store.state.mqtt["openWB/general/extern"]===!0?(l(),s("div",K,[n(u,{subtype:"info"},{default:a(()=>e[21]||(e[21]=[r(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')])),_:1})])):(l(),s("div",H,[n(w,null,{default:a(()=>e[22]||(e[22]=[r(" Variable Stromtarife ")])),_:1}),n(u,{subtype:"info"},{default:a(()=>e[23]||(e[23]=[r(" Bei Sofort- und Zeitladen wird nur geladen, wenn der Strompreis unter dem maximalen angegeben Strompreis liegt. Für Zielladen wird die Ladedauer ermittelt und dann zu den günstigsten Stunden geladen."),d("br",null,null,-1),r(" Wenn keine Preise abgefragt werden können, wird bei Sofort- und Zeitladen immer geladen und bei Zielladen zunächst mit PV-Überschuss und zum Erreichen des Zieltermins mit Netzstrom. ")])),_:1}),n(z,{class:"mb-2",title:"Anbieter",options:p.electricityTariffList,"model-value":t.$store.state.mqtt["openWB/optional/et/provider"]?t.$store.state.mqtt["openWB/optional/et/provider"].type:"","onUpdate:modelValue":e[7]||(e[7]=i=>p.updateSelectedElectricityTariff(i))},null,8,["options","model-value"]),t.$store.state.mqtt["openWB/optional/et/provider"]&&t.$store.state.mqtt["openWB/optional/et/provider"].type?(l(),s("div",Q,[n(S,{"electricity-tariff":t.$store.state.mqtt["openWB/optional/et/provider"],"onUpdate:configuration":e[8]||(e[8]=i=>p.updateConfiguration("openWB/optional/et/provider",i))},null,8,["electricity-tariff"])])):W("",!0)]))]),_:1}),n($,{"form-name":"generalChargeConfigForm",onSave:e[9]||(e[9]=i=>t.$emit("save")),onReset:e[10]||(e[10]=i=>t.$emit("reset")),onDefaults:e[11]||(e[11]=i=>t.$emit("defaults"))})])])}const Y=b(I,[["render",X],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/GeneralChargeConfig.vue"]]),ie=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));export{q as E,ie as G};
