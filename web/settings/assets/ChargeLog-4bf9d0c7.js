import{l as C,T as q,U as R,F as k}from"./vendor-fortawesome-dceee9af.js";import{_ as x,a0 as E,q as l,k as h,l as m,u as g,B as o,M as s,z as V,A as y,x as d,y as F,R as B,S as T}from"./vendor-1d14b1e0.js";import{C as I}from"./index-da083737.js";import"./vendor-sortablejs-a8739f54.js";import"./vendor-bootstrap-e0d0b7f4.js";import"./vendor-jquery-8a3ba7d1.js";import"./vendor-axios-382f6ea5.js";C.add(q,R);const S={name:"OpenwbChargeLog",components:{Vue3TableLite:E,FontAwesomeIcon:k},mixins:[I],emits:["sendCommand"],data(){return{dateTimeFormat:new Intl.DateTimeFormat("de-DE",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),mqttTopicsToSubscribe:["openWB/general/extern","openWB/chargepoint/+/config","openWB/vehicle/+/name"],currentMonth:"",chargeLogRequestData:{month:"",year:"",filter:{chargepoint:{id:[]},vehicle:{id:[],rfid:[],chargemode:[],prio:void 0}}},downloadFile:null,table:{messages:{pagingInfo:"Einträge {0}-{1} von {2}",pageSizeChangeLabel:"Einträge:",gotoPageLabel:" Gehe zu:",noDataAvailable:"Keine Einträge gefunden."},pageOptions:[{value:5,text:"5"},{value:10,text:"10"},{value:25,text:"25"},{value:50,text:"50"},{value:100,text:"100"}],columns:[{label:"Beginn",field:"time_begin",sortable:!0},{label:"Ende",field:"time_end",sortable:!0},{label:"Fahrzeug",field:"vehicle_name",sortable:!0},{label:"Dauer",field:"time_time_charged",sortable:!0,display:e=>this.alignEnd(e.time_time_charged)},{label:"Energie",field:"data_imported_since_mode_switch",sortable:!0,display:e=>this.alignEnd(this.formatNumber(e.data_imported_since_mode_switch/1e3,2)+"&nbsp;kWh / "+this.formatNumber(e.data_range_charged,0)+"&nbsp;km")},{label:"Kosten",field:"data_costs",sortable:!0,display:e=>this.alignEnd(this.formatNumber(e.data_costs,2)+"&nbsp;€")},{label:"Lademodus",field:"vehicle_chargemode",sortable:!0,display:e=>'<div class="td-center tag '+this.getChargeModeClass(e.vehicle_chargemode)+'">'+e.vehicle_chargemode+"</div>"},{label:"Ladepunkt",field:"chargepoint_name",sortable:!0},{label:"Priorität",field:"vehicle_prio",display:e=>this.translateBool(e.vehicle_prio)},{label:"ID-Tag",field:"vehicle_rfid",sortable:!0}],sortable:{order:"timestamp_begin",sort:"asc"}},totals:{columns:[{label:"Dauer",field:"time_charged",sortable:!1,display:e=>this.alignEnd(e.time_charged)},{label:"Energie",field:"imported_since_mode_switch",sortable:!1,display:e=>this.alignEnd(this.formatNumber(e.imported_since_mode_switch/1e3,2)+"&nbsp;kWh")},{label:"Reichweite",field:"range_charged",sortable:!1,display:e=>this.alignEnd(this.formatNumber(e.range_charged,0)+"&nbsp;km")},{label:"Kosten",field:"costs",sortable:!1,display:e=>this.alignEnd(this.formatNumber(e.costs,2)+"&nbsp;€")}]}}},computed:{downloadUrl(){const e=parseInt(location.port)||(location.protocol=="https:"?443:80);return`${location.protocol}//${location.hostname}:${e}/openWB/web/settings/downloadChargeLog.php`+`?year=${this.chargeLogRequestData.year}&month=${this.chargeLogRequestData.month}`},chargeLogDate:{get(){return this.chargeLogRequestData.year+"-"+this.chargeLogRequestData.month},set(e){let t=e.split("-");this.chargeLogRequestData.year=t[0],this.chargeLogRequestData.month=t[1]}},chargeLogTotals(){return this.$store.state.mqtt["openWB/log/"+this.mqttClientId+"/data"]?[this.$store.state.mqtt["openWB/log/"+this.mqttClientId+"/data"].totals]:[]},chargeLogDataset:{get(){try{return this.$store.state.mqtt["openWB/log/"+this.mqttClientId+"/data"].entries.map(e=>{var t=Date.parse(e.time.begin),n=Date.parse(e.time.end);return{chargepoint_id:e.chargepoint.id,chargepoint_name:e.chargepoint.name,vehicle_id:e.vehicle.id,vehicle_name:e.vehicle.name,vehicle_chargemode:this.translateChargeMode(e.vehicle.chargemode),vehicle_rfid:e.vehicle.rfid,vehicle_prio:e.vehicle.prio,timestamp_begin:t/1e3,time_begin:this.dateTimeFormat.format(new Date(t)),timestamp_end:n/1e3,time_end:this.dateTimeFormat.format(new Date(n)),time_time_charged:e.time.time_charged,data_power:e.data.power,data_range_charged:e.data.range_charged,data_costs:e.data.costs,data_imported_since_plugged:e.data.imported_since_plugged,data_imported_since_mode_switch:e.data.imported_since_mode_switch}})}catch{return[]}}},chargeLogCsv:{get(){return[["Ladepunkt-ID","Ladepunkt","Fahrzeug-ID","Fahrzeug","Lademodus","Priorität","ID-Tag","Beginn","Ende","Zeitstempel Beginn","Zeitstempel Ende","Dauer","Leistung","Energie","Reichweite","Kosten"],...this.chargeLogDataset.map(t=>[t.chargepoint_id,'"'+t.chargepoint_name+'"',t.vehicle_id,'"'+t.vehicle_name+'"','"'+t.vehicle_chargemode+'"','"'+this.translateBool(t.vehicle_prio,!1)+'"','"'+t.vehicle_rfid+'"','"'+t.time_begin+'"','"'+t.time_end+'"','"'+t.timestamp_begin+'"','"'+t.timestamp_end+'"','"'+t.time_time_charged+'"',this.formatNumber(t.data_power/1e3,3),this.formatNumber(t.data_imported_since_mode_switch/1e3,2),this.formatNumber(t.data_range_charged,0),this.formatNumber(t.data_costs,2)])].map(t=>t.join(";")).join(`
`)}},chargeLogRead:{get(){return this.chargeLogDataset!=null}},chargeLogHasEntries:{get(){return this.chargeLogDataset==null?!1:this.chargeLogDataset.length>0}},totalRecordCount(){return this.chargeLogDataset.length},chargeModeList(){let e=this.chargeModes.map(t=>({value:t,text:this.translateChargeMode(t)}));return e.unshift({value:void 0,text:"Alle"}),e},chargePointList(){let e=this.getWildcardTopics("openWB/chargepoint/+/config");var t=[{value:void 0,text:"Alle"}];for(const[,n]of Object.entries(e))t.push({value:n.id,text:n.name});return t},vehicleList(){let e=this.getWildcardTopics("openWB/vehicle/+/name");var t=[{value:void 0,text:"Alle"}];for(const[n,c]of Object.entries(e)){let i=parseInt(n.match(/\/([0-9]+)\/name$/)[1]);t.push({value:i,text:c})}return t}},methods:{cleanRequestData(){"id"in this.chargeLogRequestData.filter.chargepoint&&(this.chargeLogRequestData.filter.chargepoint.id=this.chargeLogRequestData.filter.chargepoint.id.filter(e=>e!=null)),"chargemode"in this.chargeLogRequestData.filter.vehicle&&(this.chargeLogRequestData.filter.vehicle.chargemode=this.chargeLogRequestData.filter.vehicle.chargemode.filter(e=>e!=null)),"id"in this.chargeLogRequestData.filter.vehicle&&(this.chargeLogRequestData.filter.vehicle.id=this.chargeLogRequestData.filter.vehicle.id.filter(e=>e!=null))},requestChargeLog(){if(document.forms.chargeLogForm.reportValidity())this.cleanRequestData(),this.$emit("sendCommand",{command:"getChargeLog",data:this.chargeLogRequestData});else{console.warn("form invalid");return}},makeTextFile(e){var t=new Blob([e],{type:"text/csv"});return this.downloadFile!==null&&window.URL.revokeObjectURL(this.downloadFile),this.downloadFile=window.URL.createObjectURL(t),this.downloadFile},downloadChargeLog(){this.$refs.downloadChargeLogLink.setAttribute("download","Ladeprotokoll-"+this.chargeLogDate+".csv"),this.$refs.downloadChargeLogLink.href=this.makeTextFile(this.chargeLogCsv),this.$refs.downloadChargeLogLink.dispatchEvent(new MouseEvent("click"))},alignEnd(e){return'<div class="td-end">'+e+"</div>"},alignCenter(e){return'<div class="td-center">'+e+"</div>"},translateBool(e,t=!0){let n="Nein",c="bg-danger";return e&&(n="Ja",c="bg-success"),t?'<div class="td-center tag '+c+'">'+n+"</div>":n},getChargeModeClass(e){switch(e){case"Sofort":return"bg-danger";case"PV":return"bg-success";case"Zielladen":return"bg-primary";case"Zeitladen":return"bg-warning";case"Standby":return"bg-secondary";case"Stop":return"bg-dark";default:return console.warn("unknown charge mode:",e),"bg-light"}},translateHeading(e){switch(e){case"time_charged":return"Dauer";case"range_charged":return"Reichweite";case"imported_since_mode_switch":return"Energie im Lademodus";case"imported_since_plugged":return"Energie seit Anstecken";case"power":return"Leistung";case"costs":return"Kosten";default:return console.warn("unknown heading:",e),e}}},mounted(){const e=new Date;this.currentMonth=this.chargeLogDate=e.getFullYear()+"-"+String(e.getMonth()+1).padStart(2,"0"),this.requestChargeLog()}},U=e=>(B("data-v-8607e7e7"),e=e(),T(),e),N={class:"chargeLog"},M={name:"chargeLogForm"},W=["href"],A={key:1},O={key:0},P={class:"row justify-content-center"},j={class:"hide",ref:"downloadChargeLogLink"},z=U(()=>g("div",{class:"row"},[g("div",{class:"col"},[g("h2",null,"Summe")])],-1));function K(e,t,n,c,i,a){const L=l("openwb-base-text-input"),p=l("font-awesome-icon"),v=l("openwb-base-button-group-input"),u=l("openwb-base-select-input"),w=l("openwb-base-array-input"),_=l("openwb-base-card"),b=l("openwb-base-alert"),f=l("vue3-table-lite"),D=l("openwb-base-click-button");return h(),m("div",N,[g("form",M,[o(_,{title:"Filter"},{default:s(()=>[o(L,{title:"Zeitraum",subtype:"month",min:"2018-01",showQuickButtons:!0,max:i.currentMonth,modelValue:a.chargeLogDate,"onUpdate:modelValue":[t[0]||(t[0]=r=>a.chargeLogDate=r),t[1]||(t[1]=r=>a.requestChargeLog())]},null,8,["max","modelValue"]),o(_,{title:"Erweiterte Optionen",collapsible:!0,collapsed:!0},{header:s(()=>[o(p,{"fixed-width":"",icon:["fas","filter"]}),d(" Erweiterte Optionen ")]),default:s(()=>[o(v,{title:"Priorität",buttons:[{buttonValue:void 0,text:"Alle"},{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],modelValue:i.chargeLogRequestData.filter.vehicle.prio,"onUpdate:modelValue":[t[2]||(t[2]=r=>i.chargeLogRequestData.filter.vehicle.prio=r),t[3]||(t[3]=r=>a.requestChargeLog())]},null,8,["modelValue"]),o(u,{title:"Lademodus",multiple:"",options:a.chargeModeList,modelValue:i.chargeLogRequestData.filter.vehicle.chargemode,"onUpdate:modelValue":[t[4]||(t[4]=r=>i.chargeLogRequestData.filter.vehicle.chargemode=r),t[5]||(t[5]=r=>a.requestChargeLog())]},{help:s(()=>[d(" Es können mehrere Elemente ausgewählt werden. ")]),_:1},8,["options","modelValue"]),o(u,{title:"Ladepunkt",multiple:"",options:a.chargePointList,modelValue:i.chargeLogRequestData.filter.chargepoint.id,"onUpdate:modelValue":[t[6]||(t[6]=r=>i.chargeLogRequestData.filter.chargepoint.id=r),t[7]||(t[7]=r=>a.requestChargeLog())]},{help:s(()=>[d(" Es können mehrere Elemente ausgewählt werden. ")]),_:1},8,["options","modelValue"]),o(u,{title:"Fahrzeug",multiple:"",options:a.vehicleList,modelValue:i.chargeLogRequestData.filter.vehicle.id,"onUpdate:modelValue":[t[8]||(t[8]=r=>i.chargeLogRequestData.filter.vehicle.id=r),t[9]||(t[9]=r=>a.requestChargeLog())]},{help:s(()=>[d(" Es können mehrere Elemente ausgewählt werden. ")]),_:1},8,["options","modelValue"]),o(w,{title:"ID-Tags",modelValue:i.chargeLogRequestData.filter.vehicle.tag,"onUpdate:modelValue":[t[10]||(t[10]=r=>i.chargeLogRequestData.filter.vehicle.tag=r),t[11]||(t[11]=r=>a.requestChargeLog())]},{help:s(()=>[d(" Es können mehrere Tags als Filter verwendet werden. ")]),_:1},8,["modelValue"])]),_:1})]),_:1}),o(b,{subtype:"info"},{default:s(()=>[d(" Das komplette Ladeprotokoll kann automatisiert über folgende URL abgerufen werden: "),g("a",{href:a.downloadUrl},F(a.downloadUrl),9,W)]),_:1}),a.chargeLogRead?(h(),m("div",A,[o(f,{class:"charge-log-table","is-static-mode":!0,columns:i.table.columns,rows:a.chargeLogDataset,total:a.totalRecordCount,sortable:i.table.sortable,messages:i.table.messages,"page-options":i.table.pageOptions,limit:25},null,8,["columns","rows","total","sortable","messages","page-options"]),a.totalRecordCount>0?(h(),m("div",O,[g("div",P,[o(D,{class:"col-4 btn-success",onButtonClicked:t[12]||(t[12]=r=>a.downloadChargeLog())},{default:s(()=>[d(" Als CSV exportieren "),o(p,{"fixed-width":"",icon:["fas","download"]})]),_:1}),g("a",j,null,512)]),z,o(f,{class:"charge-log-totals","is-static-mode":!0,"is-hide-paging":!0,columns:i.totals.columns,rows:a.chargeLogTotals,total:1},null,8,["columns","rows"])])):y("",!0)])):(h(),V(b,{key:0,subtype:"info"},{default:s(()=>[d(" Es wurden noch keine Daten abgerufen. ")]),_:1}))])])}const $=x(S,[["render",K],["__scopeId","data-v-8607e7e7"],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/ChargeLog.vue"]]);export{$ as default};
