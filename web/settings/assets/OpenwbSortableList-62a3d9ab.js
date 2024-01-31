import{_ as f,a4 as O,q as i,k as a,z as u,M as C,u as o,p as g,B as b,A as _,x as h,y as w,l as m,m as H}from"./vendor-a024ecfe.js";import{l as y,ac as L,K as S,P as x,O as N,N as B,F as v,f as E,a as A}from"./vendor-fortawesome-9894ff0b.js";y.add(L,S,x,N,B);const j={name:"OpenwbNestedList",props:{list:{type:Object},labels:{type:Object}},components:{draggable:O,FontAwesomeIcon:v},methods:{classes(e){var t="";switch(e.type){case"bat":t+="battery";break;case"cp":t+="charge-point";break;default:t+=e.type;break}return t},getElementLabel(e){return this.labels&&e in this.labels?this.labels[e]:e},getElementIcon(e){switch(e.type){case"bat":return["fas","car-battery"];case"counter":return["fas","gauge-high"];case"cp":return["fas","charging-station"];case"inverter":return["fas","solar-panel"];default:return}}}};function q(e,t,n,k,c,s){const d=i("font-awesome-icon"),p=i("openwb-nested-list",!0),r=i("draggable");return a(),u(r,{class:"dragArea w-100 mb-0",tag:"ul",list:n.list,group:{name:"g1"},"item-key":"id",handle:".handle"},{item:C(({element:l})=>[o("li",null,[o("div",{class:g(["element-titel",s.classes(l)])},[o("span",null,[b(d,{class:"handle","fixed-width":"",icon:["fas","arrows-alt"]}),s.getElementIcon(l)?(a(),u(d,{key:0,"fixed-width":"",icon:s.getElementIcon(l)},null,8,["icon"])):_("",!0),h(" "+w(s.getElementLabel(l.id)),1)])],2),b(p,{modelValue:l.children,"onUpdate:modelValue":V=>l.children=V,labels:n.labels},null,8,["modelValue","onUpdate:modelValue","labels"])])]),_:1},8,["list"])}const I=f(j,[["render",q],["__scopeId","data-v-82c9421a"],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/OpenwbNestedList.vue"]]);y.add(E,A);const U={name:"OpenwbSortableList",props:{id:String,title:String,modelValue:Object,labels:{type:Object,default:void 0}},emits:["update:modelValue"],components:{FontAwesomeIcon:v,OpenwbNestedList:I},data(){return{showHelp:!1}},computed:{value:{get(){return this.modelValue},set(e){console.debug("update in sortableList",e),this.$emit("update:modelValue",e)}}},methods:{toggleHelp(){this.showHelp=!this.showHelp&&this.$slots.help!==void 0}}},W={class:"form-row mb-1"},z={class:"col-md-8"},D={class:"form-row"},F={key:1},P={key:0,class:"form-row alert alert-info my-1 small"};function Q(e,t,n,k,c,s){const d=i("font-awesome-icon"),p=i("openwb-nested-list");return a(),m("div",W,[o("label",{onClick:t[0]||(t[0]=(...r)=>s.toggleHelp&&s.toggleHelp(...r)),class:"col-md-4 col-form-label"},[h(w(n.title)+" ",1),e.$slots.help?(a(),u(d,{key:0,icon:c.showHelp?["fas","question-circle"]:["far","question-circle"],class:g(c.showHelp?"text-info":"")},null,8,["icon","class"])):_("",!0)]),o("div",z,[o("div",D,[s.value!==void 0?(a(),u(p,{key:0,modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=r=>s.value=r),labels:n.labels},null,8,["modelValue","labels"])):(a(),m("div",F,"Warte auf Daten..."))]),c.showHelp?(a(),m("span",P,[H(e.$slots,"help")])):_("",!0)])])}const M=f(U,[["render",Q],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/OpenwbSortableList.vue"]]);export{M as S};
