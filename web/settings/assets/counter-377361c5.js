import{_ as l,q as t,l as p,m,A as o,K as i,v as r,u as _,x as f}from"./vendor-5f866419.js";import"./vendor-sortablejs-793d687d.js";const g={name:"DeviceVirtualCounter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(n,e=void 0){this.$emit("update:configuration",{value:n,object:e})}}},h={class:"device-virtual-counter"},b={class:"small"};function v(n,e,a,w,x,s){const u=t("openwb-base-heading"),d=t("openwb-base-number-input");return p(),m("div",h,[o(u,null,{default:i(()=>[r(" Einstellungen für virtuelle Zähler "),_("span",b,"(Modul: "+f(n.$options.name)+")",1)]),_:1}),o(d,{title:"Zusätzlicher Verbrauch",min:0,step:.05,unit:"kW",required:"","model-value":a.configuration.external_consumption/1e3,"onUpdate:modelValue":e[0]||(e[0]=c=>s.updateConfiguration(c*1e3,"configuration.external_consumption"))},{help:i(()=>[r(" Die hier angegebene Leistung wird pauschal zu dem Leistungen der hinter dem Zähler liegenden Komponenten addiert. Damit lässt sich z. B. eine Reserve für nicht erfasste Verbraucher einstellen. ")]),_:1},8,["step","model-value"])])}const C=l(g,[["render",v],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/virtual/counter.vue"]]);export{C as default};