import{_ as s,q as l,k as u,l as d,B as i,M as f,x as p}from"./vendor-1d14b1e0.js";import"./vendor-sortablejs-a8739f54.js";const _={name:"ElectricityTariffVoltego",emits:["update:configuration"],props:{electricityTariff:{type:Object,required:!0}},data(){return{}},methods:{updateConfiguration(n,e=void 0){this.$emit("update:configuration",{value:n,object:e})}}},m={class:"electricity-tariff-voltego"};function g(n,e,o,b,v,a){const c=l("openwb-base-alert"),r=l("openwb-base-text-input");return u(),d("div",m,[i(c,{subtype:"info"},{default:f(()=>[p(" Ihre persönlichen Zugangsdaten (Client-ID und Client-Secret) erhalten Sie direkt von Voltego. Behandeln Sie diese Daten wie ein Passwort, da sich darüber auch persönliche Daten aus Ihrem Voltego-Account abfragen lassen! ")]),_:1}),i(r,{title:"Client-ID",subtype:"user",required:"","model-value":o.electricityTariff.configuration.client_id,"onUpdate:modelValue":e[0]||(e[0]=t=>a.updateConfiguration(t,"configuration.client_id"))},null,8,["model-value"]),i(r,{title:"Client-Secret",subtype:"password",required:"","model-value":o.electricityTariff.configuration.client_secret,"onUpdate:modelValue":e[1]||(e[1]=t=>a.updateConfiguration(t,"configuration.client_secret"))},null,8,["model-value"])])}const w=s(_,[["render",g],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/electricity_tariffs/voltego/electricity_tariff.vue"]]);export{w as default};
