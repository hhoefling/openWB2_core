import{B as s}from"./DataManagement-c0d34f05.js";import{_ as a,u as r,k as i,l,G as u,E as d,y as p}from"./vendor-06e11d0e.js";import"./vendor-fortawesome-3d19d475.js";import"./index-beac009d.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";import"./dynamic-import-helper-be004503.js";const m={name:"BackupCloudNextCloud",mixins:[s]},c={class:"backup-cloud-next-cloud"};function f(o,e,b,k,C,g){const n=r("openwb-base-text-input");return i(),l("div",c,[u(n,{title:"Cloud-URL",subtype:"host",required:"","model-value":o.backupCloud.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=t=>o.updateConfiguration(t,"configuration.ip_address"))},{help:d(()=>e[3]||(e[3]=[p(" Die Cloud-URL wird in der Form 'https://nextcloud-url' und Benutzername im Eingabefeld oder mit Zugangstoken erwartet. Die URL kann je nach NextCloud Installation so 'https://nextcloud-url/s/user_token' oder so 'https://nextcloud-url/index.php/s/user_token' aussehen. ")])),_:1},8,["model-value"]),u(n,{title:"Benutzername",subtype:"user","model-value":o.backupCloud.configuration.user,"onUpdate:modelValue":e[1]||(e[1]=t=>o.updateConfiguration(t,"configuration.user"))},null,8,["model-value"]),u(n,{title:"Passwort",subtype:"password","model-value":o.backupCloud.configuration.password,"onUpdate:modelValue":e[2]||(e[2]=t=>o.updateConfiguration(t,"configuration.password"))},null,8,["model-value"])])}const $=a(m,[["render",f],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/backup_clouds/nextcloud/backup_cloud.vue"]]);export{$ as default};
