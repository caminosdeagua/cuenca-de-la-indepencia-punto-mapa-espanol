////////////////////////////////////////////////////////////////////////////////
////				Stuff to be Translated 									////
////	The stuff in the next section is all of the text that appears at 	////
////	any point on the map. It's stored in simple strings for ease of 	////
////	translation. Enjoy =)												////
////////////////////////////////////////////////////////////////////////////////

var MONTHS = ["Enero", "Feb", "Marzo", 		// Array of names of months for displaying
			"Abr", "Mayo", "Jun", 			//	the date in an accessible, clear format,
			"Jul", "Agosto", "Sep", 		// 	even for silly US people who choose to put 
			"Oct", "Nov", "Dic"];	

var CONTAMINANTS = ["Fluoruro", "Arsénico", "Nivel de peligro"]; 	
											// Array with list of contaminants in same order
											// 	such that CONTAMINANTS[FLUORIDE] = "Fluoride"
											//	(since FLUORIDE == 0 above...)
var DATE = "Fecha";
var SEE_MORE = "Resultados completos";						// This message gets displayed as a link to show 
															//	more info about the given datapoint
var CARTO_ATTRIBUTION = 'Data hosting, legends by <a href="http://www.carto.com">CartoDB</a>';

var NO_DATA_MSG = "No hay datos";

var F_LABELS = ["0-1.5", "1.5-4", "4-10", "10+"];
var AS_LABELS = ["0-10","10-25","25+"];
var RISK_LABELS = ["\xa0\xa0\xa0Cumple\xa0con\xa0todas\xa0las\xa0normas",
"\xa0\xa0\xa0Supera\xa0uno\xa0o\xa0más\xa0normas\xa0-\xa0no\xa0es\xa0seguro\xa0para\xa0los\xa0niños",
"\xa0\xa0\xa0Peligroso\xa0si\xa0se\xa0lo\xa0toma\xa0regularmente",
"\xa0\xa0\xa0Potencialmente\xa0tóxico\xa0aguda!"];

var F_TITLE = "Fluoruro (mg/L): Límite Mexicano = 1.5; Límite de OMS = 1.5";
var AS_TITLE = "Arsénico (&mu;g/L): Límite Mexicano = 25; Límite de OMS = 10";
var RISK_TITLE = "Nivel de peligro del agua";
