import{C as r,_ as t}from"./index-2ffdea6f.js";import{_}from"./dynamic-import-helper-be004503.js";import{_ as m,a1 as p,u as d,k as i,l as u,G as A,E as v,z as E,a2 as I,y as c}from"./vendor-06e11d0e.js";import"./vendor-fortawesome-05d7e447.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";const P={name:"InstallAssistantView",mixins:[r],emits:["sendCommand","save","reset","defaults"],data(){return{currentPage:0,lastPage:10,showEndAssistantModal:!1}},computed:{myStepComponent(){return console.debug(`loading assistant page: ${this.currentPage}`),p({loader:()=>_(Object.assign({"../components/install_assistant/InstallAssistantStep0.vue":()=>t(()=>import("./InstallAssistantStep0-3c210ad3.js"),["assets/InstallAssistantStep0-3c210ad3.js","assets/index-2ffdea6f.js","assets/vendor-06e11d0e.js","assets/vendor-sortablejs-0bb60e5b.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-05d7e447.js","assets/vendor-bootstrap-4263d7eb.js","assets/vendor-jquery-9fc083b4.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-22b906fb.js","assets/index-932929b9.css","assets/InstallAssistantStepTemplate-b5028a81.js","assets/InstallAssistantStepTemplate-930e3c07.css"]),"../components/install_assistant/InstallAssistantStep1.vue":()=>t(()=>import("./InstallAssistantStep1-ef8c2468.js"),["assets/InstallAssistantStep1-ef8c2468.js","assets/index-2ffdea6f.js","assets/vendor-06e11d0e.js","assets/vendor-sortablejs-0bb60e5b.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-05d7e447.js","assets/vendor-bootstrap-4263d7eb.js","assets/vendor-jquery-9fc083b4.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-22b906fb.js","assets/index-932929b9.css","assets/InstallAssistantStepTemplate-b5028a81.js","assets/InstallAssistantStepTemplate-930e3c07.css","assets/DataManagement-a2f403d8.js","assets/dynamic-import-helper-be004503.js"]),"../components/install_assistant/InstallAssistantStep10.vue":()=>t(()=>import("./InstallAssistantStep10-75f5f7fe.js"),["assets/InstallAssistantStep10-75f5f7fe.js","assets/index-2ffdea6f.js","assets/vendor-06e11d0e.js","assets/vendor-sortablejs-0bb60e5b.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-05d7e447.js","assets/vendor-bootstrap-4263d7eb.js","assets/vendor-jquery-9fc083b4.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-22b906fb.js","assets/index-932929b9.css","assets/InstallAssistantStepTemplate-b5028a81.js","assets/InstallAssistantStepTemplate-930e3c07.css"]),"../components/install_assistant/InstallAssistantStep2.vue":()=>t(()=>import("./InstallAssistantStep2-907c4aef.js"),["assets/InstallAssistantStep2-907c4aef.js","assets/index-2ffdea6f.js","assets/vendor-06e11d0e.js","assets/vendor-sortablejs-0bb60e5b.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-05d7e447.js","assets/vendor-bootstrap-4263d7eb.js","assets/vendor-jquery-9fc083b4.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-22b906fb.js","assets/index-932929b9.css","assets/InstallAssistantStepTemplate-b5028a81.js","assets/InstallAssistantStepTemplate-930e3c07.css","assets/System-5a095ce6.js","assets/System-0f1d217b.css"]),"../components/install_assistant/InstallAssistantStep3.vue":()=>t(()=>import("./InstallAssistantStep3-83b374a4.js"),["assets/InstallAssistantStep3-83b374a4.js","assets/index-2ffdea6f.js","assets/vendor-06e11d0e.js","assets/vendor-sortablejs-0bb60e5b.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-05d7e447.js","assets/vendor-bootstrap-4263d7eb.js","assets/vendor-jquery-9fc083b4.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-22b906fb.js","assets/index-932929b9.css","assets/InstallAssistantStepTemplate-b5028a81.js","assets/InstallAssistantStepTemplate-930e3c07.css","assets/GeneralConfig-cde96991.js","assets/dynamic-import-helper-be004503.js"]),"../components/install_assistant/InstallAssistantStep4.vue":()=>t(()=>import("./InstallAssistantStep4-8f6ade1c.js"),["assets/InstallAssistantStep4-8f6ade1c.js","assets/index-2ffdea6f.js","assets/vendor-06e11d0e.js","assets/vendor-sortablejs-0bb60e5b.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-05d7e447.js","assets/vendor-bootstrap-4263d7eb.js","assets/vendor-jquery-9fc083b4.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-22b906fb.js","assets/index-932929b9.css","assets/InstallAssistantStepTemplate-b5028a81.js","assets/InstallAssistantStepTemplate-930e3c07.css","assets/ChargePointInstallation-e033f857.js","assets/dynamic-import-helper-be004503.js","assets/ChargePointInstallation-7b9399a8.css"]),"../components/install_assistant/InstallAssistantStep5.vue":()=>t(()=>import("./InstallAssistantStep5-807a77b3.js"),["assets/InstallAssistantStep5-807a77b3.js","assets/index-2ffdea6f.js","assets/vendor-06e11d0e.js","assets/vendor-sortablejs-0bb60e5b.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-05d7e447.js","assets/vendor-bootstrap-4263d7eb.js","assets/vendor-jquery-9fc083b4.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-22b906fb.js","assets/index-932929b9.css","assets/InstallAssistantStepTemplate-b5028a81.js","assets/InstallAssistantStepTemplate-930e3c07.css","assets/HardwareInstallation-4a6cfb78.js","assets/dynamic-import-helper-be004503.js"]),"../components/install_assistant/InstallAssistantStep6.vue":()=>t(()=>import("./InstallAssistantStep6-da3bf7fa.js"),["assets/InstallAssistantStep6-da3bf7fa.js","assets/index-2ffdea6f.js","assets/vendor-06e11d0e.js","assets/vendor-sortablejs-0bb60e5b.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-05d7e447.js","assets/vendor-bootstrap-4263d7eb.js","assets/vendor-jquery-9fc083b4.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-22b906fb.js","assets/index-932929b9.css","assets/InstallAssistantStepTemplate-b5028a81.js","assets/InstallAssistantStepTemplate-930e3c07.css","assets/ChargePointInstallation-e033f857.js","assets/dynamic-import-helper-be004503.js","assets/ChargePointInstallation-7b9399a8.css"]),"../components/install_assistant/InstallAssistantStep7.vue":()=>t(()=>import("./InstallAssistantStep7-d4f413b8.js"),["assets/InstallAssistantStep7-d4f413b8.js","assets/index-2ffdea6f.js","assets/vendor-06e11d0e.js","assets/vendor-sortablejs-0bb60e5b.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-05d7e447.js","assets/vendor-bootstrap-4263d7eb.js","assets/vendor-jquery-9fc083b4.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-22b906fb.js","assets/index-932929b9.css","assets/InstallAssistantStepTemplate-b5028a81.js","assets/InstallAssistantStepTemplate-930e3c07.css","assets/LoadManagementConfig-747f6026.js","assets/OpenwbSortableList-2f6cd2cc.js","assets/OpenwbSortableList-7ba533e4.css"]),"../components/install_assistant/InstallAssistantStep8.vue":()=>t(()=>import("./InstallAssistantStep8-755ed8ef.js"),["assets/InstallAssistantStep8-755ed8ef.js","assets/index-2ffdea6f.js","assets/vendor-06e11d0e.js","assets/vendor-sortablejs-0bb60e5b.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-05d7e447.js","assets/vendor-bootstrap-4263d7eb.js","assets/vendor-jquery-9fc083b4.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-22b906fb.js","assets/index-932929b9.css","assets/InstallAssistantStepTemplate-b5028a81.js","assets/InstallAssistantStepTemplate-930e3c07.css","assets/VehicleConfig-aa253d28.js","assets/dynamic-import-helper-be004503.js"]),"../components/install_assistant/InstallAssistantStep9.vue":()=>t(()=>import("./InstallAssistantStep9-25c632cb.js"),["assets/InstallAssistantStep9-25c632cb.js","assets/index-2ffdea6f.js","assets/vendor-06e11d0e.js","assets/vendor-sortablejs-0bb60e5b.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-05d7e447.js","assets/vendor-bootstrap-4263d7eb.js","assets/vendor-jquery-9fc083b4.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-22b906fb.js","assets/index-932929b9.css","assets/InstallAssistantStepTemplate-b5028a81.js","assets/InstallAssistantStepTemplate-930e3c07.css","assets/DataManagement-a2f403d8.js","assets/dynamic-import-helper-be004503.js"]),"../components/install_assistant/InstallAssistantStepTemplate.vue":()=>t(()=>import("./InstallAssistantStepTemplate-b5028a81.js"),["assets/InstallAssistantStepTemplate-b5028a81.js","assets/index-2ffdea6f.js","assets/vendor-06e11d0e.js","assets/vendor-sortablejs-0bb60e5b.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-05d7e447.js","assets/vendor-bootstrap-4263d7eb.js","assets/vendor-jquery-9fc083b4.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-22b906fb.js","assets/index-932929b9.css","assets/InstallAssistantStepTemplate-930e3c07.css"])}),`../components/install_assistant/InstallAssistantStep${this.currentPage}.vue`)})}},methods:{switchPage(s){s>=0&&s<=this.lastPage?this.currentPage=s:console.error(`invalid assistant page number: ${s}`)},endAssistantModal(){this.currentPage!=this.lastPage?this.showEndAssistantModal=!0:this.endAssistant("confirm")},endAssistant(s){this.showEndAssistantModal=!1,s=="confirm"&&(this.updateState("openWB/system/installAssistantDone",!0),this.$root.doPublish("openWB/set/system/installAssistantDone",!0),this.$router.push("/Status"))}}};function S(s,e,f,g,o,n){const l=d("openwb-base-modal-dialog");return i(),u("div",null,[A(l,{show:o.showEndAssistantModal,title:"Assistent beenden",subtype:"danger",buttons:[{text:"Beenden",event:"confirm",subtype:"danger"}],onModalResult:n.endAssistant},{default:v(()=>e[4]||(e[4]=[c(" Wollen Sie den Assistenten wirklich vorzeitig beenden? ")])),_:1},8,["show","onModalResult"]),(i(),E(I(n.myStepComponent),{onSendCommand:e[0]||(e[0]=a=>s.$emit("sendCommand",a)),onSave:e[1]||(e[1]=a=>s.$emit("save")),onReset:e[2]||(e[2]=a=>s.$emit("reset")),onDefaults:e[3]||(e[3]=a=>s.$emit("defaults")),onSwitchPage:n.switchPage,onEndAssistant:n.endAssistantModal},null,40,["onSwitchPage","onEndAssistant"]))])}const L=m(P,[["render",S],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/InstallAssistant.vue"]]);export{L as default};
