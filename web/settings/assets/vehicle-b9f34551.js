import{_ as l,q as s,k as m,l as p,B as i,M as a,x as u}from"./vendor-a024ecfe.js";import"./vendor-sortablejs-f018003c.js";const c={name:"VehicleSocSmarteq",emits:["update:configuration"],props:{vehicleId:{required:!0,type:Number},vehicle:{required:!0,type:Object}},data(){return{}},methods:{updateConfiguration(d,e=void 0){this.$emit("update:configuration",{value:d,object:e})}}},v={class:"vehicle-soc-smarteq"};function f(d,e,n,g,_,o){const r=s("openwb-base-text-input");return m(),p("div",v,[i(r,{title:"Benutzername",required:"",subtype:"user","model-value":n.vehicle.configuration.user_id,"onUpdate:modelValue":e[0]||(e[0]=t=>o.updateConfiguration(t,"configuration.user_id"))},{help:a(()=>[u(" Der Benutzername für die Anmeldung an den Servern. ")]),_:1},8,["model-value"]),i(r,{title:"Kennwort",required:"",subtype:"password","model-value":n.vehicle.configuration.password,"onUpdate:modelValue":e[1]||(e[1]=t=>o.updateConfiguration(t,"configuration.password"))},{help:a(()=>[u(" Das Passwort für die Anmeldung an den Servern. ")]),_:1},8,["model-value"]),i(r,{title:"VIN",required:"","model-value":n.vehicle.configuration.vin,"onUpdate:modelValue":e[2]||(e[2]=t=>o.updateConfiguration(t,"configuration.vin"))},{help:a(()=>[u(" Die Fahrgestellnummer des Fahrzeugs. ")]),_:1},8,["model-value"])])}const q=l(c,[["render",f],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/vehicles/smarteq/vehicle.vue"]]);export{q as default};
