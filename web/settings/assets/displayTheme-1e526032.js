import{_ as f,q as _,l,m,A as o,K as s,v as i,u as v,x as p,y as d,z as r}from"./vendor-29588c66.js";import"./vendor-sortablejs-66a8dc70.js";const V={name:"DisplayThemeCards",emits:["update:configuration"],props:{configuration:{type:Object,required:!0}},methods:{updateConfiguration(c,e=void 0){this.$emit("update:configuration",{value:c,object:e})}}},h={class:"display-theme-cards"},x={class:"small"};function A(c,e,n,w,y,a){const b=_("openwb-base-heading"),u=_("openwb-base-button-group-input"),g=_("openwb-base-text-input");return l(),m("div",h,[o(b,null,{default:s(()=>[i(" Einstellungen für Display Theme Cards "),v("span",x,"(Modul: "+p(c.$options.name)+")",1)]),_:1}),o(b,null,{default:s(()=>[i("Bediensperre")]),_:1}),o(u,{title:"Bedienung sperren","model-value":n.configuration.lock_changes,"onUpdate:modelValue":e[0]||(e[0]=t=>a.updateConfiguration(t,"configuration.lock_changes")),buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}]},null,8,["model-value"]),n.configuration.lock_changes?(l(),d(g,{key:0,title:"PIN zur Freigabe",subtype:"password",required:"",pattern:"[0-9]{4,10}","model-value":n.configuration.lock_changes_code,"onUpdate:modelValue":e[1]||(e[1]=t=>a.updateConfiguration(t,"configuration.lock_changes_code"))},{help:s(()=>[i(" Der PIN muss aus 4 bis 10 Zahlen bestehen. ")]),_:1},8,["model-value"])):r("v-if",!0),o(b,null,{default:s(()=>[i('Ansicht "Dashboard"')]),_:1}),o(u,{title:"Dashboard anzeigen","model-value":n.configuration.enable_dashboard_view,"onUpdate:modelValue":e[2]||(e[2]=t=>a.updateConfiguration(t,"configuration.enable_dashboard_view")),buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}]},null,8,["model-value"]),n.configuration.enable_dashboard_view?(l(),d(u,{key:1,title:"EVU anzeigen","model-value":n.configuration.enable_dashboard_card_grid,"onUpdate:modelValue":e[3]||(e[3]=t=>a.updateConfiguration(t,"configuration.enable_dashboard_card_grid")),buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}]},null,8,["model-value"])):r("v-if",!0),n.configuration.enable_dashboard_view?(l(),d(u,{key:2,title:"Hausverbrauch anzeigen","model-value":n.configuration.enable_dashboard_card_home_consumption,"onUpdate:modelValue":e[4]||(e[4]=t=>a.updateConfiguration(t,"configuration.enable_dashboard_card_home_consumption")),buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}]},null,8,["model-value"])):r("v-if",!0),n.configuration.enable_dashboard_view?(l(),d(u,{key:3,title:"Batteriespeicher anzeigen","model-value":n.configuration.enable_dashboard_card_battery_sum,"onUpdate:modelValue":e[5]||(e[5]=t=>a.updateConfiguration(t,"configuration.enable_dashboard_card_battery_sum")),buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}]},null,8,["model-value"])):r("v-if",!0),n.configuration.enable_dashboard_view?(l(),d(u,{key:4,title:"Ladepunkte anzeigen","model-value":n.configuration.enable_dashboard_card_charge_point_sum,"onUpdate:modelValue":e[6]||(e[6]=t=>a.updateConfiguration(t,"configuration.enable_dashboard_card_charge_point_sum")),buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}]},null,8,["model-value"])):r("v-if",!0),n.configuration.enable_dashboard_view?(l(),d(u,{key:5,title:"PV anzeigen","model-value":n.configuration.enable_dashboard_card_inverter_sum,"onUpdate:modelValue":e[7]||(e[7]=t=>a.updateConfiguration(t,"configuration.enable_dashboard_card_inverter_sum")),buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}]},null,8,["model-value"])):r("v-if",!0),o(b,null,{default:s(()=>[i('Ansicht "Ladepunkte"')]),_:1}),o(u,{title:"Ladepunkte anzeigen","model-value":n.configuration.enable_charge_points_view,"onUpdate:modelValue":e[8]||(e[8]=t=>a.updateConfiguration(t,"configuration.enable_charge_points_view")),buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}]},null,8,["model-value"]),o(b,null,{default:s(()=>[i('Ansicht "Status"')]),_:1}),o(u,{title:"Status anzeigen","model-value":n.configuration.enable_status_view,"onUpdate:modelValue":e[9]||(e[9]=t=>a.updateConfiguration(t,"configuration.enable_status_view")),buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}]},null,8,["model-value"])])}const U=f(V,[["render",A],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/display_themes/cards/displayTheme.vue"]]);export{U as default};
