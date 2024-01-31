import{_ as l,q as s,k as r,l as i,B as a,M as p,x as c}from"./vendor-a024ecfe.js";import"./vendor-sortablejs-f018003c.js";const m={name:"BackupCloudNextCloud",emits:["update:configuration"],props:{backupCloud:{type:Object,required:!0}},data(){return{}},methods:{updateConfiguration(d,e=void 0){this.$emit("update:configuration",{value:d,object:e})}}},f={class:"backup-cloud-next-cloud"};function _(d,e,o,b,g,u){const n=s("openwb-base-text-input");return r(),i("div",f,[a(n,{title:"Cloud-URL",subtype:"host",required:"","model-value":o.backupCloud.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=t=>u.updateConfiguration(t,"configuration.ip_address"))},{help:p(()=>[c(" Die Cloud-URL wird in der Form 'https://nextcloud-url' und Benutzername im Eingabefeld oder mit Zugangstoken erwartet. Die URL kann je nach NextCloud Installation so 'https://nextcloud-url/s/user_token' oder so 'https://nextcloud-url/index.php/s/user_token' aussehen. ")]),_:1},8,["model-value"]),a(n,{title:"Benutzername",subtype:"user","model-value":o.backupCloud.configuration.user,"onUpdate:modelValue":e[1]||(e[1]=t=>u.updateConfiguration(t,"configuration.user"))},null,8,["model-value"]),a(n,{title:"Passwort",subtype:"password","model-value":o.backupCloud.configuration.password,"onUpdate:modelValue":e[2]||(e[2]=t=>u.updateConfiguration(t,"configuration.password"))},null,8,["model-value"])])}const C=l(m,[["render",_],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/backup_clouds/nextcloud/backup_cloud.vue"]]);export{C as default};
