<?php
	session_start();

	$themeCookie = "standard";
	if( isset($_COOKIE['openWBTheme'] )){
		$themeCookie = $_COOKIE['openWBTheme'];
	} else {
		setCookie("openWBTheme", $themeCookie, mktime().time()+60*60*24*365);
	}
?>
<!DOCTYPE html>
<html lang="de">
	<head>
		<base href="/openWB/web/">
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>openWB Einstellungen</title>
		<meta name="description" content="Control your charge" />
		<meta name="author" content="Lutz Bender" />
		<!-- Favicons (created with http://realfavicongenerator.net/)-->
		<link rel="apple-touch-icon" sizes="57x57" href="img/favicons/apple-touch-icon-57x57.png">
		<link rel="apple-touch-icon" sizes="60x60" href="img/favicons/apple-touch-icon-60x60.png">
		<link rel="icon" type="image/png" href="img/favicons/favicon-32x32.png" sizes="32x32">
		<link rel="icon" type="image/png" href="img/favicons/favicon-16x16.png" sizes="16x16">
		<link rel="manifest" href="manifest.json">
		<link rel="shortcut icon" href="img/favicons/favicon.ico">
		<meta name="msapplication-TileColor" content="#00a8ff">
		<meta name="msapplication-config" content="img/favicons/browserconfig.xml">
		<meta name="theme-color" content="#ffffff">

		<!-- Bootstrap -->
		<link rel="stylesheet" type="text/css" href="css/bootstrap-4.4.1/bootstrap.min.css">
		<!-- Bootstrap-Toggle -->
		<link rel="stylesheet" type="text/css" href="css/bootstrap4-toggle/bootstrap4-toggle.min.css">
		<!-- Normalize -->
		<link rel="stylesheet" type="text/css" href="css/normalize-8.0.1.css">
		<!-- Font Awesome -->
		<link rel="stylesheet" type="text/css" href="fonts/font-awesome-5.8.2/css/all.css">
		<!-- include settings-style -->
		<link rel="stylesheet" type="text/css" href="css/settings_style20.css">
		<link rel="stylesheet" href="themes/<?php echo $themeCookie; ?>/settings.css?v=20210330">

		<!-- important scripts to be loaded -->
		<script src="js/jquery-3.6.0.min.js"></script>
		<script src="js/bootstrap-4.4.1/bootstrap.bundle.min.js"></script>
		<script src="js/bootstrap4-toggle/bootstrap4-toggle.min.js"></script>
		<script src="js/bootstrap-selectpicker/bootstrap-select.min.js"></script>
		<!-- load helper functions -->
		<script src = "settings/helperFunctions20.js?ver=20210329" ></script>
		<!-- load mqtt library -->
		<script src = "js/mqttws31.js" ></script>
		<!-- vue.js -->
		<script src="js/vue.js-3.1.5/vue.global.js"></script>
	</head>
	<body>
		<div id="app">
			<content title="Optionale Komponenten" footer="Optionale Komponenten" nav="navOptional">

				<card title="RFID">
					<div v-if="componentData['openWB/general/extern'] == true">
						<alert
							subtype="info">
							Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Modus "Nur Ladepunkt" befindet.<br>
							RFID-Tags werden immer an die übergeordnete openWB gesendet und dort verarbeitet.
						</alert>
					</div>
					<div v-if="componentData['openWB/general/extern'] == false">
						<buttongroup-input
							title="Modus"
							v-model="componentData['openWB/optional/rfid/mode']"
							toggle-selector='rfidMode'
							:buttons="[
								{buttonValue: 0, text: 'Aus', class: 'btn-outline-danger', icon: 'fas fa-times'},
								{buttonValue: 1, text: 'Modus 1', class: 'btn-outline-success'},
								{buttonValue: 2, text: 'Modus 2', class: 'btn-outline-success'}
							]">
						</buttongroup-input>
						<div v-if="componentData['openWB/optional/rfid/mode'] != 0">
							<hr>
							<alert
								subtype="info">
								ToDo: Anzeige Mode 1 oder 2
							</alert>
							<hr>
						</div>
						<div v-if="componentData['openWB/optional/rfid/mode'] == 1">
							<alert
								subtype="info">
								ToDo: Anzeige Mode 1
							</alert>
						</div>
						<div v-if="componentData['openWB/optional/rfid/mode'] == 2">
							<alert
								subtype="info">
								Im Modus 2 wird eine Kommaseparierte Liste mit gültigen RFID Tags hinterlegt. Gescannt werden kann an jedem möglichen RFID Leser.<br>
								Der gescannte Tag wird dem zuletzt angeschlossenenen Auto zugewiesen, schaltet den Ladepunkt frei und vermerkt dies für das Ladelog.<br>
								Wird erst gescannt und dann ein Auto angeschlossen, so wird der Tag dem Auto zugewiesen, das als nächstes angesteckt wird. Wird 5 Minuten nach Scannen kein Auto angeschlossen wird der Tag verworfen.<br>
								Jeder Ladepunkt wird nach abstecken automatisch wieder gesperrt.
							</alert>
						</div>
					</div>
				</card>

				<card title="LED-Ausgänge">
					<buttongroup-input
						title="LED-Ausgänge aktivieren"
						v-model="componentData['openWB/optional/led/active']"
						toggle-selector='ledOn'
						:buttons="[
							{buttonValue: false, text: 'Aus', class: 'btn-outline-danger', icon: 'fas fa-times'},
							{buttonValue: true, text: 'An', class: 'btn-outline-success'}
						]">
					</buttongroup-input>
					<div v-if="componentData['openWB/optional/led/active'] == true">
						<alert
							subtype="info">
							ToDo: Informationen zu den verwendeten GPOIs ergänzen!
						</alert>
						<hr>
						<div v-if="componentData['openWB/general/extern'] == true">
							<alert
								subtype="info">
								Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Modus "Nur Ladepunkt" befindet.<br>
								Das Verhalten der LEDs wird durch die übergeordnete openWB festgelegt.
							</alert>
						</div>
						<div v-if="componentData['openWB/general/extern'] == false">
							<heading>
								Ladung nicht freigegeben
							</heading>
							<select-input
								title="Sofortladen"
								v-model="componentData['ToDo/optional/led/instant_blocked']"
								:options="[
									{value: ['off','off','off'], text: 'Alle aus'}
								]"
								:groups="[
									{label: 'Dauernd an', options: [
										{value: ['on', 'off','off'], text: 'LED 1'},
										{value: ['off','on', 'off'], text: 'LED 2'},
										{value: ['off','off','on' ], text: 'LED 3'},
										{value: ['on', 'on', 'off'], text: 'LEDs 1+2'},
										{value: ['on', 'off','on' ], text: 'LEDs 1+3'},
										{value: ['off','on', 'on' ], text: 'LEDs 2+3'},
										{value: ['on', 'on', 'on' ], text: 'alle'}
									] },
									{label: 'Blinkend', options: [
										{value: ['blink', 'off',   'off'   ], text: 'LED 1'},
										{value: ['off',   'blink', 'off'   ], text: 'LED 2'},
										{value: ['off',   'off',   'blink' ], text: 'LED 3'},
										{value: ['blink', 'blink', 'off'   ], text: 'LEDs 1+2'},
										{value: ['blink', 'off',   'blink' ], text: 'LEDs 1+3'},
										{value: ['off',   'blink', 'blink' ], text: 'LEDs 2+3'},
										{value: ['blink', 'blink', 'blink' ], text: 'alle'}
									] }
								]">
							</select-input>
							<select-input
								title="PV"
								v-model="componentData['ToDo/optional/led/pv_blocked']"
								:options="[
									{value: ['off','off','off'], text: 'Alle aus'}
								]"
								:groups="[
									{label: 'Dauernd an', options: [
										{value: ['on', 'off','off'], text: 'LED 1'},
										{value: ['off','on', 'off'], text: 'LED 2'},
										{value: ['off','off','on' ], text: 'LED 3'},
										{value: ['on', 'on', 'off'], text: 'LEDs 1+2'},
										{value: ['on', 'off','on' ], text: 'LEDs 1+3'},
										{value: ['off','on', 'on' ], text: 'LEDs 2+3'},
										{value: ['on', 'on', 'on' ], text: 'alle'}
									] },
									{label: 'Blinkend', options: [
										{value: ['blink', 'off',   'off'   ], text: 'LED 1'},
										{value: ['off',   'blink', 'off'   ], text: 'LED 2'},
										{value: ['off',   'off',   'blink' ], text: 'LED 3'},
										{value: ['blink', 'blink', 'off'   ], text: 'LEDs 1+2'},
										{value: ['blink', 'off',   'blink' ], text: 'LEDs 1+3'},
										{value: ['off',   'blink', 'blink' ], text: 'LEDs 2+3'},
										{value: ['blink', 'blink', 'blink' ], text: 'alle'}
									] }
								]">
							</select-input>
							<select-input
								title="Zielladen"
								v-model="componentData['ToDo/optional/led/scheduled_blocked']"
								:options="[
									{value: ['off','off','off'], text: 'Alle aus'}
								]"
								:groups="[
									{label: 'Dauernd an', options: [
										{value: ['on', 'off','off'], text: 'LED 1'},
										{value: ['off','on', 'off'], text: 'LED 2'},
										{value: ['off','off','on' ], text: 'LED 3'},
										{value: ['on', 'on', 'off'], text: 'LEDs 1+2'},
										{value: ['on', 'off','on' ], text: 'LEDs 1+3'},
										{value: ['off','on', 'on' ], text: 'LEDs 2+3'},
										{value: ['on', 'on', 'on' ], text: 'alle'}
									] },
									{label: 'Blinkend', options: [
										{value: ['blink', 'off',   'off'   ], text: 'LED 1'},
										{value: ['off',   'blink', 'off'   ], text: 'LED 2'},
										{value: ['off',   'off',   'blink' ], text: 'LED 3'},
										{value: ['blink', 'blink', 'off'   ], text: 'LEDs 1+2'},
										{value: ['blink', 'off',   'blink' ], text: 'LEDs 1+3'},
										{value: ['off',   'blink', 'blink' ], text: 'LEDs 2+3'},
										{value: ['blink', 'blink', 'blink' ], text: 'alle'}
									] }
								]">
							</select-input>
							<select-input
								title="Standby"
								v-model="componentData['ToDo/optional/led/standby_blocked']"
								:options="[
									{value: ['off','off','off'], text: 'Alle aus'}
								]"
								:groups="[
									{label: 'Dauernd an', options: [
										{value: ['on', 'off','off'], text: 'LED 1'},
										{value: ['off','on', 'off'], text: 'LED 2'},
										{value: ['off','off','on' ], text: 'LED 3'},
										{value: ['on', 'on', 'off'], text: 'LEDs 1+2'},
										{value: ['on', 'off','on' ], text: 'LEDs 1+3'},
										{value: ['off','on', 'on' ], text: 'LEDs 2+3'},
										{value: ['on', 'on', 'on' ], text: 'alle'}
									] },
									{label: 'Blinkend', options: [
										{value: ['blink', 'off',   'off'   ], text: 'LED 1'},
										{value: ['off',   'blink', 'off'   ], text: 'LED 2'},
										{value: ['off',   'off',   'blink' ], text: 'LED 3'},
										{value: ['blink', 'blink', 'off'   ], text: 'LEDs 1+2'},
										{value: ['blink', 'off',   'blink' ], text: 'LEDs 1+3'},
										{value: ['off',   'blink', 'blink' ], text: 'LEDs 2+3'},
										{value: ['blink', 'blink', 'blink' ], text: 'alle'}
									] }
								]">
							</select-input>
							<select-input
								title="Stop"
								v-model="componentData['ToDo/optional/led/stop_blocked']"
								:options="[
									{value: ['off','off','off'], text: 'Alle aus'}
								]"
								:groups="[
									{label: 'Dauernd an', options: [
										{value: ['on', 'off','off'], text: 'LED 1'},
										{value: ['off','on', 'off'], text: 'LED 2'},
										{value: ['off','off','on' ], text: 'LED 3'},
										{value: ['on', 'on', 'off'], text: 'LEDs 1+2'},
										{value: ['on', 'off','on' ], text: 'LEDs 1+3'},
										{value: ['off','on', 'on' ], text: 'LEDs 2+3'},
										{value: ['on', 'on', 'on' ], text: 'alle'}
									] },
									{label: 'Blinkend', options: [
										{value: ['blink', 'off',   'off'   ], text: 'LED 1'},
										{value: ['off',   'blink', 'off'   ], text: 'LED 2'},
										{value: ['off',   'off',   'blink' ], text: 'LED 3'},
										{value: ['blink', 'blink', 'off'   ], text: 'LEDs 1+2'},
										{value: ['blink', 'off',   'blink' ], text: 'LEDs 1+3'},
										{value: ['off',   'blink', 'blink' ], text: 'LEDs 2+3'},
										{value: ['blink', 'blink', 'blink' ], text: 'alle'}
									] }
								]">
							</select-input>
							<hr>
							<heading>
								Ladung freigegeben
							</heading>
							<select-input
								title="Sofortladen"
								v-model="componentData['ToDo/optional/led/instant']"
								:options="[
									{value: ['off','off','off'], text: 'Alle aus'}
								]"
								:groups="[
									{label: 'Dauernd an', options: [
										{value: ['on', 'off','off'], text: 'LED 1'},
										{value: ['off','on', 'off'], text: 'LED 2'},
										{value: ['off','off','on' ], text: 'LED 3'},
										{value: ['on', 'on', 'off'], text: 'LEDs 1+2'},
										{value: ['on', 'off','on' ], text: 'LEDs 1+3'},
										{value: ['off','on', 'on' ], text: 'LEDs 2+3'},
										{value: ['on', 'on', 'on' ], text: 'alle'}
									] },
									{label: 'Blinkend', options: [
										{value: ['blink', 'off',   'off'   ], text: 'LED 1'},
										{value: ['off',   'blink', 'off'   ], text: 'LED 2'},
										{value: ['off',   'off',   'blink' ], text: 'LED 3'},
										{value: ['blink', 'blink', 'off'   ], text: 'LEDs 1+2'},
										{value: ['blink', 'off',   'blink' ], text: 'LEDs 1+3'},
										{value: ['off',   'blink', 'blink' ], text: 'LEDs 2+3'},
										{value: ['blink', 'blink', 'blink' ], text: 'alle'}
									] }
								]">
							</select-input>
							<select-input
								title="PV"
								v-model="componentData['ToDo/optional/led/pv']"
								:options="[
									{value: ['off','off','off'], text: 'Alle aus'}
								]"
								:groups="[
									{label: 'Dauernd an', options: [
										{value: ['on', 'off','off'], text: 'LED 1'},
										{value: ['off','on', 'off'], text: 'LED 2'},
										{value: ['off','off','on' ], text: 'LED 3'},
										{value: ['on', 'on', 'off'], text: 'LEDs 1+2'},
										{value: ['on', 'off','on' ], text: 'LEDs 1+3'},
										{value: ['off','on', 'on' ], text: 'LEDs 2+3'},
										{value: ['on', 'on', 'on' ], text: 'alle'}
									] },
									{label: 'Blinkend', options: [
										{value: ['blink', 'off',   'off'   ], text: 'LED 1'},
										{value: ['off',   'blink', 'off'   ], text: 'LED 2'},
										{value: ['off',   'off',   'blink' ], text: 'LED 3'},
										{value: ['blink', 'blink', 'off'   ], text: 'LEDs 1+2'},
										{value: ['blink', 'off',   'blink' ], text: 'LEDs 1+3'},
										{value: ['off',   'blink', 'blink' ], text: 'LEDs 2+3'},
										{value: ['blink', 'blink', 'blink' ], text: 'alle'}
									] }
								]">
							</select-input>
							<select-input
								title="Zielladen"
								v-model="componentData['ToDo/optional/led/scheduled']"
								:options="[
									{value: ['off','off','off'], text: 'Alle aus'}
								]"
								:groups="[
									{label: 'Dauernd an', options: [
										{value: ['on', 'off','off'], text: 'LED 1'},
										{value: ['off','on', 'off'], text: 'LED 2'},
										{value: ['off','off','on' ], text: 'LED 3'},
										{value: ['on', 'on', 'off'], text: 'LEDs 1+2'},
										{value: ['on', 'off','on' ], text: 'LEDs 1+3'},
										{value: ['off','on', 'on' ], text: 'LEDs 2+3'},
										{value: ['on', 'on', 'on' ], text: 'alle'}
									] },
									{label: 'Blinkend', options: [
										{value: ['blink', 'off',   'off'   ], text: 'LED 1'},
										{value: ['off',   'blink', 'off'   ], text: 'LED 2'},
										{value: ['off',   'off',   'blink' ], text: 'LED 3'},
										{value: ['blink', 'blink', 'off'   ], text: 'LEDs 1+2'},
										{value: ['blink', 'off',   'blink' ], text: 'LEDs 1+3'},
										{value: ['off',   'blink', 'blink' ], text: 'LEDs 2+3'},
										{value: ['blink', 'blink', 'blink' ], text: 'alle'}
									] }
								]">
							</select-input>
							<select-input
								title="Standby"
								v-model="componentData['ToDo/optional/led/standby']"
								:options="[
									{value: ['off','off','off'], text: 'Alle aus'}
								]"
								:groups="[
									{label: 'Dauernd an', options: [
										{value: ['on', 'off','off'], text: 'LED 1'},
										{value: ['off','on', 'off'], text: 'LED 2'},
										{value: ['off','off','on' ], text: 'LED 3'},
										{value: ['on', 'on', 'off'], text: 'LEDs 1+2'},
										{value: ['on', 'off','on' ], text: 'LEDs 1+3'},
										{value: ['off','on', 'on' ], text: 'LEDs 2+3'},
										{value: ['on', 'on', 'on' ], text: 'alle'}
									] },
									{label: 'Blinkend', options: [
										{value: ['blink', 'off',   'off'   ], text: 'LED 1'},
										{value: ['off',   'blink', 'off'   ], text: 'LED 2'},
										{value: ['off',   'off',   'blink' ], text: 'LED 3'},
										{value: ['blink', 'blink', 'off'   ], text: 'LEDs 1+2'},
										{value: ['blink', 'off',   'blink' ], text: 'LEDs 1+3'},
										{value: ['off',   'blink', 'blink' ], text: 'LEDs 2+3'},
										{value: ['blink', 'blink', 'blink' ], text: 'alle'}
									] }
								]">
							</select-input>
							<select-input
								title="Stop"
								v-model="componentData['ToDo/optional/led/stop']"
								:options="[
									{value: ['off','off','off'], text: 'Alle aus'}
								]"
								:groups="[
									{label: 'Dauernd an', options: [
										{value: ['on', 'off','off'], text: 'LED 1'},
										{value: ['off','on', 'off'], text: 'LED 2'},
										{value: ['off','off','on' ], text: 'LED 3'},
										{value: ['on', 'on', 'off'], text: 'LEDs 1+2'},
										{value: ['on', 'off','on' ], text: 'LEDs 1+3'},
										{value: ['off','on', 'on' ], text: 'LEDs 2+3'},
										{value: ['on', 'on', 'on' ], text: 'alle'}
									] },
									{label: 'Blinkend', options: [
										{value: ['blink', 'off',   'off'   ], text: 'LED 1'},
										{value: ['off',   'blink', 'off'   ], text: 'LED 2'},
										{value: ['off',   'off',   'blink' ], text: 'LED 3'},
										{value: ['blink', 'blink', 'off'   ], text: 'LEDs 1+2'},
										{value: ['blink', 'off',   'blink' ], text: 'LEDs 1+3'},
										{value: ['off',   'blink', 'blink' ], text: 'LEDs 2+3'},
										{value: ['blink', 'blink', 'blink' ], text: 'alle'}
									] }
								]">
							</select-input>
						</div>
					</div>
				</card>

				<card title="Display (intern oder extern)">
					<div v-if="componentData['openWB/optional/led/active'] == true">
						<alert
							subtype="info">
							Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Modus "Nur Ladepunkt" befindet.
						</alert>
					</div>
					<div v-show="componentData['openWB/optional/led/active'] == false">
						<buttongroup-input
							title="Integriertes Display"
							v-model="componentData['openWB/optional/int_display/active']"
							toggle-selector='intDisplayOn'
							:buttons="[
								{buttonValue: false, text: 'Nein', class: 'btn-outline-danger', icon: 'fas fa-times'},
								{buttonValue: true, text: 'Ja', class: 'btn-outline-success'}
							]">
						</buttongroup-input>
						<div v-show="componentData['openWB/optional/int_display/active'] == true">
							<hr>
							<heading>
								Display Standby
							</heading>
							<range-input
								title="Ausschaltzeit"
								:min=0 :max=12 :step=1
								v-model="componentData['openWB/optional/int_display/standby']"
								unit="Sek"
								:labels='[{"label":"Immer an","value":0},{"label":5,"value":5},{"label":10,"value":10},{"label":15,"value":15},{"label":30,"value":30},{"label":45,"value":45},{"label":"1 Min","value":60},{"label":"1,5 Min","value":90},{"label":"2 Min","value":120},{"label":"3 Min","value":180},{"label":"4 Min","value":240},{"label":"5 Min","value":300},{"label":"10 Min","value":600}]'>
							</range-input>
							<buttongroup-input
								title="Automatisch einschalten"
								v-model="componentData['openWB/optional/int_display/on_if_plugged_in']"
								:buttons="[
									{buttonValue: false, text: 'Nein', class: 'btn-outline-danger', icon: 'fas fa-times'},
									{buttonValue: true, text: 'Ja', class: 'btn-outline-success'}
								]">
								<template #help>
									Wird diese Funktion aktiviert, dann schaltet sich das Display automatisch ein, wenn ein Fahrzeug angesteckt wird.
								</template>
							</buttongroup-input>
						</div>
						<hr>
						<heading>
							PIN-Sperre
						</heading>
						<buttongroup-input
							title="Display mit PIN schützen"
							v-model="componentData['openWB/optional/int_display/pin_active']"
							:buttons="[
								{buttonValue: false, text: 'Nein', class: 'btn-outline-danger', icon: 'fas fa-times'},
								{buttonValue: true, text: 'Ja', class: 'btn-outline-success'}
							]">
						</buttongroup-input>
						<div v-if="componentData['openWB/optional/int_display/pin_active'] == true">
							<text-input
								title="PIN-Code"
								v-model="componentData['openWB/optional/int_display/pin_code']"
								subtype="password"
								pattern="[0-9]{4}">
								<template #help>
									Der PIN-Code muss vierstellig sein und darf nur Zahlen enthalten.
								</template>
							</text-input>
						</div>
						<hr>
						<select-input
							title="Theme des Displays"
							v-model="componentData['openWB/optional/int_display/theme']"
							:options="[
								{value: 'cards', text: 'Cards'},
								{value: 'gauges', text: 'Gauges'},
								{value: 'slave', text: 'Nur Ladeleistung (keine Bedienung möglich)'},
							]">
						</select-input>
						<div v-if="componentData['openWB/optional/int_display/theme'] == 'cards'">
							<alert
								subtype="info">
								ToDo: Optionen für das Cards-Theme...
							</alert>
						</div>
						<div v-if="componentData['openWB/optional/int_display/theme'] == 'gauges'">
							<alert
								subtype="info">
								ToDo: Optionen für das Gauges-Theme...
							</alert>
						</div>
						<div v-if="componentData['openWB/optional/int_display/theme'] == 'slave'">
							<alert
								subtype="info">
								Das Theme "Nur Ladeleistung" bietet keine Optionen.
							</alert>
						</div>
					</div>
				</card>

				<card title="Loadsharing">
					<div v-if="componentData['openWB/general/extern'] == true">
						<alert
							subtype="info">
							Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Modus "Nur Ladepunkt" befindet.
						</alert>
					</div>
					<div v-if="componentData['openWB/general/extern'] == false">
						<buttongroup-input
							title="Loadsharing aktivieren"
							v-model="componentData['openWB/optional/load_sharing/active']"
							toggle-selector='loadsharingOn'
							:buttons="[
								{buttonValue: false, text: 'Aus', class: 'btn-outline-danger', icon: 'fas fa-times'},
								{buttonValue: true, text: 'An', class: 'btn-outline-success'}
							]">
							<template #help>
								Wenn Ladepunkt 1 und 2 sich eine Zuleitung teilen, diese Option aktivieren. Sie stellt in jedem Lademodus sicher, dass nicht mehr als die eingestellte Stromstärke je Phase in der Summe von Ladepunkt 1 und 2 genutzt werden.<br>
								<span class="text-danger">Bei der OpenWB Duo muss diese Option aktiviert werden!</span>
							</template>
						</buttongroup-input>
						<div v-if="componentData['openWB/optional/load_sharing/active'] == true">
							<range-input
								title="Maximaler Strom"
								:min=16 :max=32 :step=1
								v-model="componentData['openWB/optional/load_sharing/max_current']"
								:default-value=16
								unit="A">
								<template #help>
									<p class="text-danger">Der richtige Anschluss ist zu gewährleisten.</p>
									<div class="row">
										<div class="col-md-4">Ladepunkt 1:</div>
										<div class="col">
											<ul>
												<li>Zuleitung Phase 1 = Phase 1</li>
												<li>Zuleitung Phase 2 = Phase 2</li>
												<li>Zuleitung Phase 3 = Phase 3</li>
											</ul>
										</div>
									</div>
									<div class="row">
										<div class="col-md-4">Ladepunkt 2:</div>
										<div class="col">
											<ul>
												<li>Zuleitung Phase 1 = <span class="text-danger">Phase 2</span></li>
												<li>Zuleitung Phase 2 = <span class="text-danger">Phase 3</span></li>
												<li>Zuleitung Phase 3 = <span class="text-danger">Phase 1</span></li>
											</ul>
										</div>
									</div>
									<p>Durch das Drehen der Phasen ist sichergestellt, dass 2 einphasige Autos mit voller Geschwindigkeit laden können.</p>
								</template>
							</range-input>
						</div>
					</div>
				</card>

				<card title="Variable Stromtarife">
					<div v-if="componentData['openWB/general/extern'] == true">
						<alert
							subtype="info">
							Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Modus "Nur Ladepunkt" befindet.
						</alert>
					</div>
					<div v-if="componentData['openWB/general/extern'] == false">
						<buttongroup-input
							title="Stromtarife aktivieren"
							v-model="componentData['openWB/optional/et/active']"
							:buttons="[
								{buttonValue: false, text: 'Aus', class: 'btn-outline-danger', icon: 'fas fa-times'},
								{buttonValue: true, text: 'An', class: 'btn-outline-success'}
							]">
						</buttongroup-input>
						<div v-if="componentData['openWB/optional/et/active'] == true">
							<text-input
								title="Anbieter"
								subtype="json"
								disabled="disabled"
								v-model="componentData['openWB/optional/et/config/provider']">
								<template #help>
									Nur zur Info.
								</template>
							</text-input>
							<range-input
								title="Maximaler Strompreis"
								:min=-30 :max=30 :step=0.1
								v-model="componentData['openWB/optional/et/config/max_price']"
								unit="ct">
								<template #help>
									ToDo: Rundungsfehler bei den Buttons???
								</template>
							</range-input>
						</div>
					</div>
				</card>

			</content>
		</div><!-- app -->

		<script>
			// define topics and default values here
			const componentDefaultData = {
				'openWB/general/extern': false,
				'openWB/optional/rfid/mode': 0,
				'openWB/optional/led/active': false,
				'ToDo/optional/led/instant_blocked': ['off','off','off'],
				'ToDo/optional/led/pv_blocked': ['off','off','off'],
				'ToDo/optional/led/scheduled_blocked': ['off','off','off'],
				'ToDo/optional/led/standby_blocked': ['off','off','off'],
				'ToDo/optional/led/stop_blocked': ['off','off','off'],
				'ToDo/optional/led/instant': ['off','off','off'],
				'ToDo/optional/led/pv': ['off','off','off'],
				'ToDo/optional/led/scheduled': ['off','off','off'],
				'ToDo/optional/led/standby': ['off','off','off'],
				'ToDo/optional/led/stop': ['off','off','off'],
				'openWB/optional/int_display/active': false,
				'openWB/optional/int_display/standby': 15,
				'openWB/optional/int_display/on_if_plugged_in': true,
				'openWB/optional/int_display/pin_active': false,
				'openWB/optional/int_display/pin_code': "1234",
				'openWB/optional/int_display/theme': "cards",
				'openWB/optional/load_sharing/active': false,
				'openWB/optional/load_sharing/max_current': 16,
				'openWB/optional/et/active': false,
				'openWB/optional/et/config/provider': {},
				'openWB/optional/et/config/max_price': 0
			}
		</script>
		<?php include_once './settings-2.vapp.php'; ?>

	</body>
</html>