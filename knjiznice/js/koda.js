
var baseUrl = 'https://rest.ehrscape.com/rest/v1';
var queryUrl = baseUrl + '/query';

var username = "ois.seminar";
var password = "ois4fri";

var items = [];


/**
 * Prijava v sistem z privzetim uporabnikom za predmet OIS in pridobitev
 * enolične ID številke za dostop do funkcionalnosti
 * @return enolični identifikator seje za dostop do funkcionalnosti
 */
function getSessionId() {
    var response = $.ajax({
        type: "POST",
        url: baseUrl + "/session?username=" + encodeURIComponent(username) +
                "&password=" + encodeURIComponent(password),
        async: false
    });
    return response.responseJSON.sessionId;
}


/**
 * Generator podatkov za novega pacienta, ki bo uporabljal aplikacijo. Pri
 * generiranju podatkov je potrebno najprej kreirati novega pacienta z
 * določenimi osebnimi podatki (ime, priimek in datum rojstva) ter za njega
 * shraniti nekaj podatkov o vitalnih znakih.
 * @param stPacienta zaporedna številka pacienta (1, 2 ali 3)
 * @return ehrId generiranega pacienta
 */
function generirajPodatke(stPacienta) {
	var ehrId = "";
	
	
	var ime = "";
	var priimek = "";
	var datumRojstva = "";
	if(stPacienta==1) 
	{
		ime = "Đesi";
		priimek = "Byutiquiy";
		datumRojstva = Math.floor(Math.random()*19+1950)+"-0"+Math.floor(Math.random()*9+1)+"-"+Math.floor(Math.random()*15+10);
	}
	if(stPacienta==2) 
	{
		ime = "Kebab";
		priimek = "Kebabić";
		datumRojstva = Math.floor(Math.random()*19+1970)+"-0"+Math.floor(Math.random()*9+1)+"-"+Math.floor(Math.random()*15+10);
	}
	if(stPacienta==3) 
	{
		ime = "Tamau";
		priimek = "Drekec";
		datumRojstva = Math.floor(Math.random()*9+1990)+"-0"+Math.floor(Math.random()*9+1)+"-"+Math.floor(Math.random()*15+10);
		
	}
	
	
	
	
	ehrId = kreirajNovEhr(ime, priimek, datumRojstva)
	
	//alert(ehrId);
	//ehrId = "dc18936a-3cfd-4a56-83ce-5532a04d4389";
	
	
	
	
	//alert(ehrId);
	/*
	for(var qay=0; qay<10000000000; qay++);
	
	//$("#kreirajSporocilo")..html("ok-ehr"+ehrId);
	alert($("#kreirajSporocilo").val());
	if($("#kreirajSporocilo").val().substr(0,6)=="ok-ehr")
	{
		ehrId=$("#kreirajSporocilo").val().substr(7);
		alert(ehrId);
	}
	else
	{
		alert("qwe");
		return;
	}
	*/
	
	for(var i=0; i<10; i++)
	{
		//var e = document.getElementById("preberiObstojeciEHR");
		//var val = e.options[e.selectedIndex].value;
		sessionId = getSessionId();
		//var ehrId = val;
		var datumInUra;
		var telesnaVisina;
		var telesnaTeza;
		var telesnaTemperatura;
		var sistolicniKrvniTlak;
		var diastolicniKrvniTlak;
		var nasicenostKrviSKisikom;
		var merilec;
		if(stPacienta==1)
		{
			var starost = Math.floor(Math.random()*35+1970);
			datumInUra = starost+"-0"+Math.floor(Math.random()*9+1)+"-"+Math.floor(Math.random()*2)+""+Math.floor(Math.random()*6+1)+"T"+Math.floor(Math.random()*14+10)+":"+Math.floor(Math.random()*50+10);
			telesnaVisina = 105+Math.floor(Math.random()*2)+Math.floor(Math.random()*(starost-1950)/2);
			telesnaTeza = 70+Math.floor(Math.random()*20);
			//telesnaTemperatura= 34.0+Math.floor(Math.random()*5);
			//sistolicniKrvniTlak=115+Math.floor(Math.random()*8);
			//diastolicniKrvniTlak=90+Math.floor(Math.random()*6);
			//nasicenostKrviSKisikom=95+Math.floor(Math.random()*6);
			merilec = "dohtar Chika";
		}
		else if(stPacienta==2)
		{
			var starost = Math.floor(Math.random()*25+1990);
			datumInUra = starost+"-0"+Math.floor(Math.random()*9+1)+"-"+Math.floor(Math.random()*2)+""+Math.floor(Math.random()*6+1)+"T"+Math.floor(Math.random()*14+10)+":"+Math.floor(Math.random()*50+10);
			telesnaVisina = 150+Math.floor(Math.random()*2)+Math.floor(Math.random()*(starost-1970)/2);
			telesnaTeza = 70+Math.floor(Math.random()*10);
			//telesnaTemperatura= 34.0+Math.floor(Math.random()*5);
			//sistolicniKrvniTlak=115+Math.floor(Math.random()*8);
			//diastolicniKrvniTlak=90+Math.floor(Math.random()*6);
			//nasicenostKrviSKisikom=95+Math.floor(Math.random()*6);
			merilec = "dohtar Fujii";
		}
		else
		{
			var starost = Math.floor(Math.random()*15+2000);
			datumInUra = starost+"-0"+Math.floor(Math.random()*9+1)+"-"+Math.floor(Math.random()*2)+""+Math.floor(Math.random()*6+1)+"T"+Math.floor(Math.random()*14+10)+":"+Math.floor(Math.random()*50+10);
			telesnaVisina = 100+Math.floor(Math.random()*2)+Math.floor(Math.random()*(starost-1990)/2);
			telesnaTeza = 30+Math.floor(Math.random()*10);
			//telesnaTemperatura= 34.0+Math.floor(Math.random()*5);
			//sistolicniKrvniTlak=115+Math.floor(Math.random()*8);
			//diastolicniKrvniTlak=90+Math.floor(Math.random()*6);
			//nasicenostKrviSKisikom=95+Math.floor(Math.random()*6);
			merilec = "dohtar Chika Fujii";
		}
		/*
		console.log(
			datumInUra+" "+
			telesnaVisina+" "+
			telesnaTeza+" "+
			telesnaTemperatura+" "+
			sistolicniKrvniTlak+" "+
			diastolicniKrvniTlak+" "+
			nasicenostKrviSKisikom+" "+
			merilec
		);
		*/
		//setTimeout(null,50);
		//for(var qay=0; qay<100000000; qay++);
		
		if (!ehrId || ehrId.trim().length == 0) {
			$("#kreirajSporocilo").html("<span class='obvestilo " +
		  "label label-warning fade-in'>Prosim vnesite zahtevane podatke!</span>");
		} else {
			$.ajaxSetup({
				headers: {"Ehr-Session": sessionId}
			});
			var podatki = {
				// Struktura predloge je na voljo na naslednjem spletnem naslovu:
		  // https://rest.ehrscape.com/rest/v1/template/Vital%20Signs/example
				"ctx/language": "en",
				"ctx/territory": "SI",
				"ctx/time": datumInUra,
				"vital_signs/height_length/any_event/body_height_length": telesnaVisina,
				"vital_signs/body_weight/any_event/body_weight": telesnaTeza,
				//"vital_signs/body_temperature/any_event/temperature|magnitude": telesnaTemperatura,
				//"vital_signs/body_temperature/any_event/temperature|unit": "°C",
				//"vital_signs/blood_pressure/any_event/systolic": sistolicniKrvniTlak,
				//"vital_signs/blood_pressure/any_event/diastolic": diastolicniKrvniTlak,
				//"vital_signs/indirect_oximetry:0/spo2|numerator": nasicenostKrviSKisikom
			};
			var parametriZahteve = {
				ehrId: ehrId,
				templateId: 'Vital Signs',
				format: 'FLAT',
				committer: merilec
			};
			$.ajax({
				url: baseUrl + "/composition?" + $.param(parametriZahteve),
				type: 'POST',
				contentType: 'application/json',
				data: JSON.stringify(podatki),
				success: function (res) {
					/*
					$("#kreirajSporocilo").html(
				  		"<span class='obvestilo label label-success fade-in'>" +
				  		"Uspešno zgenerirani podatki" + ".</span>");
					*/
					console.log("Uspesno zgenerirani podatki.");
				  
				  
				  //alert(123);
				  
				},
				error: function(err) {
					
					console.log(
					datumInUra+" "+
					telesnaVisina+" "+
					telesnaTeza+" "+
					telesnaTemperatura+" "+
					sistolicniKrvniTlak+" "+
					diastolicniKrvniTlak+" "+
					nasicenostKrviSKisikom+" "+
					merilec);
					
					
					//console.log(i);
					$("#kreirajSporocilo").html(
				"<span class='obvestilo label label-danger fade-in'>Napaka '" +
				JSON.parse(err.responseText).userMessage + "'!");
				
				}
			});
		}
		
	}
  $("#preberiEhrIdZaVitalneZnake").append("<option value='"+ehrId+"'>"+ime+" "+priimek+"</option>");
  //return ehrId;
}
/*
function generirajPodatkeZaPacienta()
{
	
	var e = document.getElementById("preberiObstojeciEHR");
	var val = e.options[e.selectedIndex].text;
	if(val=="Kronično bolan")
	{
		generirajPodatke(1);
	}
	if(val=="Športnik")
	{
		generirajPodatke(2);
	}
	if(val=="Otrok")
	{
		generirajPodatke(3);
	}
	
	
}
*/
function generiraj()
{
	
	
	$("#preberiEhrIdZaVitalneZnake").html("");
	$("#preberiEhrIdZaVitalneZnake").append("<option value=''></option>");
	generirajPodatke(1);
	generirajPodatke(2);
	generirajPodatke(3);
	
	
	/*
	
	<option value=""></option>
	<option value="ffad70a2-b1a2-4f2a-a43a-276ff634b9fa">Kronično bolan</option>
	<option value="b20695f0-2f22-42d1-803b-97dccac0eb9f">Športnik</option>
	<option value="32d45d0d-909c-4b61-97fc-2214ec9cc7b0">Otrok</option>
	
	
	*/
}


// TODO: Tukaj implementirate funkcionalnost, ki jo podpira vaša aplikacija

function kreirajNovEhr(ime, priimek, datumRojstva)
{
	sessionId = getSessionId();

	if (!ime || !priimek || !datumRojstva || ime.trim().length == 0 ||
      priimek.trim().length == 0 || datumRojstva.trim().length == 0) {
		$("#kreirajSporocilo").html("<span class='obvestilo label " +
      "label-warning fade-in'>Prosim vnesite zahtevane podatke!</span>");
	} else {
		$.ajaxSetup({
		    headers: {"Ehr-Session": sessionId}
		});
		var response = $.ajax({
		    url: baseUrl + "/ehr",
		    async   :   false,
		    type: 'POST',
		    success: function (data) {
		        var ehrId = data.ehrId;
		        var partyData = {
		            firstNames: ime,
		            lastNames: priimek,
		            dateOfBirth: datumRojstva,
		            partyAdditionalInfo: [{key: "ehrId", value: ehrId}]
		        };
		        $.ajax({
		            url: baseUrl + "/demographics/party",
		            type: 'POST',
		            contentType: 'application/json',
		            data: JSON.stringify(partyData),
		            success: function (party) {
		                if (party.action == 'CREATE') {
		                //    $("#kreirajSporocilo").html("<span class='obvestilo " +
                        //  "label label-success fade-in'>Uspešno kreiran EHR '" +
                        //  ehrId + "'.</span>");
		                    //$("#preberiEHRid").val(ehrId);
		                    //return ehrId;
		                    
		                    //$("#kreirajSporocilo").html("ok-ehr"+ehrId);
		                    //varEhrId = ehrId;
		                    //alert(varEhrId);
		                    //alert(ehrId);
		                    //return ehrId;
		                    //alert(globalEhrIdTmp);
		                    //globalEhrIdTmp = ehrId;
		                }
		            },
		            error: function(err) {
		            	$("#kreirajSporocilo").html("<span class='obvestilo label " +
                    "label-danger fade-in'>Napaka '" +
                    JSON.parse(err.responseText).userMessage + "'!");
		            }
		        });
		    }
		});
	}
	return response.responseJSON.ehrId;
}

/*
function kreirajEHRzaBolnika() {
	sessionId = getSessionId();

	var ime = $("#kreirajIme").val();
	var priimek = $("#kreirajPriimek").val();
	var datumRojstva = $("#kreirajDatumRojstva").val();

	if (!ime || !priimek || !datumRojstva || ime.trim().length == 0 ||
      priimek.trim().length == 0 || datumRojstva.trim().length == 0) {
		$("#kreirajSporocilo").html("<span class='obvestilo label " +
      "label-warning fade-in'>Prosim vnesite zahtevane podatke!</span>");
	} else {
		$.ajaxSetup({
		    headers: {"Ehr-Session": sessionId}
		});
		$.ajax({
		    url: baseUrl + "/ehr",
		    type: 'POST',
		    success: function (data) {
		        var ehrId = data.ehrId;
		        var partyData = {
		            firstNames: ime,
		            lastNames: priimek,
		            dateOfBirth: datumRojstva,
		            partyAdditionalInfo: [{key: "ehrId", value: ehrId}]
		        };
		        $.ajax({
		            url: baseUrl + "/demographics/party",
		            type: 'POST',
		            contentType: 'application/json',
		            data: JSON.stringify(partyData),
		            success: function (party) {
		                if (party.action == 'CREATE') {
		                    $("#kreirajSporocilo").html("<span class='obvestilo " +
                          "label label-success fade-in'>Uspešno kreiran EHR '" +
                          ehrId + "'.</span>");
		                    $("#preberiEHRid").val(ehrId);
		                }
		            },
		            error: function(err) {
		            	$("#kreirajSporocilo").html("<span class='obvestilo label " +
                    "label-danger fade-in'>Napaka '" +
                    JSON.parse(err.responseText).userMessage + "'!");
		            }
		        });
		    }
		});
	}
}
*/

/**
 * Za podan EHR ID preberi demografske podrobnosti pacienta in izpiši sporočilo
 * s pridobljenimi podatki (ime, priimek in datum rojstva).
 */
/*
function preberiEHRodBolnika() {
	sessionId = getSessionId();

	var ehrId = $("#preberiEHRid").val();

	if (!ehrId || ehrId.trim().length == 0) {
		$("#preberiSporocilo").html("<span class='obvestilo label label-warning " +
      "fade-in'>Prosim vnesite zahtevan podatek!");
	} else {
		$.ajax({
			url: baseUrl + "/demographics/ehr/" + ehrId + "/party",
			type: 'GET',
			headers: {"Ehr-Session": sessionId},
	    	success: function (data) {
				var party = data.party;
				$("#preberiSporocilo").html("<span class='obvestilo label " +
          "label-success fade-in'>Bolnik '" + party.firstNames + " " +
          party.lastNames + "', ki se je rodil '" + party.dateOfBirth +
          "'.</span>");
			},
			error: function(err) {
				$("#preberiSporocilo").html("<span class='obvestilo label " +
          "label-danger fade-in'>Napaka '" +
          JSON.parse(err.responseText).userMessage + "'!");
			}
		});
	}
}
*/

function vnosMeritev()
{
	sessionId = getSessionId();
	var ehrId = $("#meritevEHRId").val();
	var telesnaVisina = $("#meritevVisina").val();
	var telesnaTeza = $("#meritevTeza").val();
	var datumInUra = $("#meritevDatum").val();
	
	//vnosMeritevRezultat
	//vnosMeritevSporocilo
	
	if (!ehrId || ehrId.trim().length == 0) {
		$("#dodajMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo " +
      "label label-warning fade-in'>Prosim vnesite zahtevane podatke!</span>");
	} else {
		$.ajaxSetup({
		    headers: {"Ehr-Session": sessionId}
		});
		var podatki = {
			// Struktura predloge je na voljo na naslednjem spletnem naslovu:
      // https://rest.ehrscape.com/rest/v1/template/Vital%20Signs/example
		    "ctx/language": "en",
		    "ctx/territory": "SI",
		    "ctx/time": datumInUra,
		    "vital_signs/height_length/any_event/body_height_length": telesnaVisina,
		    "vital_signs/body_weight/any_event/body_weight": telesnaTeza
		};
		var parametriZahteve = {
		    ehrId: ehrId,
		    templateId: 'Vital Signs',
		    format: 'FLAT',
		    committer: 'Pacient'
		};
		$.ajax({
		    url: baseUrl + "/composition?" + $.param(parametriZahteve),
		    type: 'POST',
		    contentType: 'application/json',
		    data: JSON.stringify(podatki),
		    success: function (res) {
		        $("#vnosMeritevRezultat").html(
              "<span class='obvestilo label label-success fade-in'>" +
              "Uspešno dodane informacije" + ".</span>");
		    },
		    error: function(err) {
		    	$("#vnosMeritevSporocilo").html(
            "<span class='obvestilo label label-danger fade-in'>Napaka '" +
            JSON.parse(err.responseText).userMessage + "'!");
		    }
		});
	}
}

/**
 * Za dodajanje vitalnih znakov pacienta je pripravljena kompozicija, ki
 * vključuje množico meritev vitalnih znakov (EHR ID, datum in ura,
 * telesna višina, telesna teža, sistolični in diastolični krvni tlak,
 * nasičenost krvi s kisikom in merilec).
 */
/*
function dodajMeritveVitalnihZnakov() {
	sessionId = getSessionId();

	var ehrId = $("#dodajVitalnoEHR").val();
	var datumInUra = $("#dodajVitalnoDatumInUra").val();
	var telesnaVisina = $("#dodajVitalnoTelesnaVisina").val();
	var telesnaTeza = $("#dodajVitalnoTelesnaTeza").val();
	var telesnaTemperatura = $("#dodajVitalnoTelesnaTemperatura").val();
	var sistolicniKrvniTlak = $("#dodajVitalnoKrvniTlakSistolicni").val();
	var diastolicniKrvniTlak = $("#dodajVitalnoKrvniTlakDiastolicni").val();
	var nasicenostKrviSKisikom = $("#dodajVitalnoNasicenostKrviSKisikom").val();
	var merilec = $("#dodajVitalnoMerilec").val();

	if (!ehrId || ehrId.trim().length == 0) {
		$("#dodajMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo " +
      "label label-warning fade-in'>Prosim vnesite zahtevane podatke!</span>");
	} else {
		$.ajaxSetup({
		    headers: {"Ehr-Session": sessionId}
		});
		var podatki = {
			// Struktura predloge je na voljo na naslednjem spletnem naslovu:
      // https://rest.ehrscape.com/rest/v1/template/Vital%20Signs/example
		    "ctx/language": "en",
		    "ctx/territory": "SI",
		    "ctx/time": datumInUra,
		    "vital_signs/height_length/any_event/body_height_length": telesnaVisina,
		    "vital_signs/body_weight/any_event/body_weight": telesnaTeza,
		   	"vital_signs/body_temperature/any_event/temperature|magnitude": telesnaTemperatura,
		    "vital_signs/body_temperature/any_event/temperature|unit": "°C",
		    "vital_signs/blood_pressure/any_event/systolic": sistolicniKrvniTlak,
		    "vital_signs/blood_pressure/any_event/diastolic": diastolicniKrvniTlak,
		    "vital_signs/indirect_oximetry:0/spo2|numerator": nasicenostKrviSKisikom
		};
		var parametriZahteve = {
		    ehrId: ehrId,
		    templateId: 'Vital Signs',
		    format: 'FLAT',
		    committer: merilec
		};
		$.ajax({
		    url: baseUrl + "/composition?" + $.param(parametriZahteve),
		    type: 'POST',
		    contentType: 'application/json',
		    data: JSON.stringify(podatki),
		    success: function (res) {
		        $("#dodajMeritveVitalnihZnakovSporocilo").html(
              "<span class='obvestilo label label-success fade-in'>" +
              "Uspešno dodane informacije" + ".</span>");
		    },
		    error: function(err) {
		    	$("#dodajMeritveVitalnihZnakovSporocilo").html(
            "<span class='obvestilo label label-danger fade-in'>Napaka '" +
            JSON.parse(err.responseText).userMessage + "'!");
		    }
		});
	}
}
*/

/**
 * Pridobivanje vseh zgodovinskih podatkov meritev izbranih vitalnih znakov
 * (telesna temperatura, filtriranje telesne temperature in telesna teža).
 * Filtriranje telesne temperature je izvedena z AQL poizvedbo, ki se uporablja
 * za napredno iskanje po zdravstvenih podatkih.
 */
/*
function preberiMeritveVitalnihZnakov() {
	sessionId = getSessionId();

	var ehrId = $("#meritveVitalnihZnakovEHRid").val();
	var tip = $("#preberiTipZaVitalneZnake").val();

	if (!ehrId || ehrId.trim().length == 0 || !tip || tip.trim().length == 0) {
		$("#preberiMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo " +
      "label label-warning fade-in'>Prosim vnesite zahtevan podatek!");
	} else {
		$.ajax({
			url: baseUrl + "/demographics/ehr/" + ehrId + "/party",
	    	type: 'GET',
	    	headers: {"Ehr-Session": sessionId},
	    	success: function (data) {
				var party = data.party;
				$("#rezultatMeritveVitalnihZnakov").html("<br/><span>Pridobivanje " +
          "podatkov za <b>'" + tip + "'</b> bolnika <b>'" + party.firstNames +
          " " + party.lastNames + "'</b>.</span><br/><br/>");
				if (tip == "telesna temperatura") {
					$.ajax({
  					    url: baseUrl + "/view/" + ehrId + "/" + "body_temperature",
					    type: 'GET',
					    headers: {"Ehr-Session": sessionId},
					    success: function (res) {
					    	if (res.length > 0) {
						    	var results = "<table class='table table-striped " +
                    "table-hover'><tr><th>Datum in ura</th>" +
                    "<th class='text-right'>Telesna temperatura</th></tr>";
					
						        for (var i in res) {
						            results += "<tr><td>" + res[i].time +
                          "</td><td class='text-right'>" + res[i].temperature +
                          " " + res[i].unit + "</td>";
						        }
						        results += "</table>";
						        $("#rezultatMeritveVitalnihZnakov").append(results);
					    	} else {
					    		$("#preberiMeritveVitalnihZnakovSporocilo").html(
                    "<span class='obvestilo label label-warning fade-in'>" +
                    "Ni podatkov!</span>");
					    	}
					    },
					    error: function() {
					    	$("#preberiMeritveVitalnihZnakovSporocilo").html(
                  "<span class='obvestilo label label-danger fade-in'>Napaka '" +
                  JSON.parse(err.responseText).userMessage + "'!");
					    }
					});
				} else if (tip == "telesna teža") {
					$.ajax({
					    url: baseUrl + "/view/" + ehrId + "/" + "weight",
					    type: 'GET',
					    headers: {"Ehr-Session": sessionId},
					    success: function (res) {
					    	if (res.length > 0) {
						    	var results = "<table class='table table-striped " +
                    "table-hover'><tr><th>Datum in ura</th>" +
                    "<th class='text-right'>Telesna teža</th></tr>";
						        for (var i in res) {
						            results += "<tr><td>" + res[i].time +
                          "</td><td class='text-right'>" + res[i].weight + " " 	+
                          res[i].unit + "</td>";
						        }
						        results += "</table>";
						        $("#rezultatMeritveVitalnihZnakov").append(results);
					    	} else {
					    		$("#preberiMeritveVitalnihZnakovSporocilo").html(
                    "<span class='obvestilo label label-warning fade-in'>" +
                    "Ni podatkov!</span>");
					    	}
					    },
					    error: function() {
					    	$("#preberiMeritveVitalnihZnakovSporocilo").html(
                  "<span class='obvestilo label label-danger fade-in'>Napaka '" +
                  JSON.parse(err.responseText).userMessage + "'!");
					    }
					});
				} else if (tip == "telesna temperatura AQL") {
					var AQL =
						"select " +
    						"t/data[at0002]/events[at0003]/time/value as cas, " +
    						"t/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/magnitude as temperatura_vrednost, " +
    						"t/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/units as temperatura_enota " +
						"from EHR e[e/ehr_id/value='" + ehrId + "'] " +
						"contains OBSERVATION t[openEHR-EHR-OBSERVATION.body_temperature.v1] " +
						"where t/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/magnitude<35 " +
						"order by t/data[at0002]/events[at0003]/time/value desc " +
						""; // limit 10
					$.ajax({
					    url: baseUrl + "/query?" + $.param({"aql": AQL}),
					    type: 'GET',
					    headers: {"Ehr-Session": sessionId},
					    success: function (res) {
					    	var results = "<table class='table table-striped table-hover'>" +
                  "<tr><th>Datum in ura</th><th class='text-right'>" +
                  "Telesna temperatura</th></tr>";
					    	if (res) {
					    		var rows = res.resultSet;
								
						        for (var i in rows) {
						            results += "<tr><td>" + rows[i].cas +
                          "</td><td class='text-right'>" +
                          rows[i].temperatura_vrednost + " " 	+
                          rows[i].temperatura_enota + "</td>";
						        }
						        results += "</table>";
						        $("#rezultatMeritveVitalnihZnakov").append(results);
					    	} else {
					    		$("#preberiMeritveVitalnihZnakovSporocilo").html(
                    "<span class='obvestilo label label-warning fade-in'>" +
                    "Ni podatkov!</span>");
					    	}

					    },
					    error: function() {
					    	$("#preberiMeritveVitalnihZnakovSporocilo").html(
                  "<span class='obvestilo label label-danger fade-in'>Napaka '" +
                  JSON.parse(err.responseText).userMessage + "'!");
					    }
					});
				}
	    	},
	    	error: function(err) {
	    		$("#preberiMeritveVitalnihZnakovSporocilo").html(
            "<span class='obvestilo label label-danger fade-in'>Napaka '" +
            JSON.parse(err.responseText).userMessage + "'!");
	    	}
		});
	}
}
*/


// dodatna zunanja funkcionalnost
// http://apps.who.int/gho/data/node.main.A904?lang=en
// BMI = weight / (height/100 * height/100)
// The following countries have bigger BMI than you:

function pridobiStatisticnePodatke()
{
	// rezultatStatistikeDrzav
	
	
	//var xmlhttp=new XMLHttpRequest()
	//xmlDoc.selectNodes("//");
	
	//var url='http://apps.who.int/gho/data/node.main.A904?lang=en';
	
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.open("GET",'data.xml',false);
	xmlhttp.send();
	xmlDocument=xmlhttp.responseXML;
	var nodes = xmlDocument.evaluate("//Data/Fact", xmlDocument, null, XPathResult.ANY_TYPE,null);
	var result=nodes.iterateNext();
	var i=1;
	var dataI = 0;
	
	var htmlCode = "<table class='table table-striped " +
		"table-hover'><tr><th>Država</th>" +
		"<th class='text-right'>Indeks telesne mase</th></tr>";
	while (result)
	{
	  if(i%6 == 1) 
	  {
		//console.log(result.childNodes[1].innerHTML + " " + result.childNodes[11].innerHTML);
	  	// rezultatStatistikeDrzav
	  	
		if(result.childNodes[11].innerHTML != "No data")
		{
			var country = result.childNodes[1].innerHTML;
			var value = result.childNodes[11].innerHTML;
			var num = value.split(" ")[0];
			items[dataI]=[];
			items[dataI][0] = country;
			items[dataI][1] = num;
			htmlCode += "<tr><td>" + country + 
			"</td><td class='text-right'>" + value + "</td>";
			
			dataI++;
		}
		
		
	        
	  	
	  }
	  i++;
	  result=nodes.iterateNext();
	}
	
	htmlCode += "</table>";
	$("#rezultatStatistikeDrzav").append(htmlCode);
	
}



function izracunIndexTelesneMase()
{
	var leto=0, mesec=0, dan=0;
	var lastBMI=27;
	sessionId = getSessionId();

	var ehrId = $("#meritveVitalnihZnakovEHRid").val();

	if (!ehrId || ehrId.trim().length == 0) {
		$("#preberiMeritveVitalnihZnakovSporocilo").html("<span class='obvestilo " +
      "label label-warning fade-in'>Prosim vnesite zahtevan podatek!");
	} else {
	    		
	    		
				$.ajax({
				    url: baseUrl + "/view/" + ehrId + "/" + "weight?limit=10",
				    type: 'GET',
				    headers: {"Ehr-Session": sessionId},
				    success: function (res) {
				    	if (res.length > 0) {
				    		
				    		$.ajax({
							    url: baseUrl + "/view/" + ehrId + "/" + "height?limit=10",
							    type: 'GET',
							    headers: {"Ehr-Session": sessionId},
							    success: function (res1) {
							    	if (res.length > 0) {
							    		
							    		
							    		
							    		var results = "<table class='table table-striped " +
						                	"table-hover'><tr><th>Datum in ura</th>" +
						                	"<th class='text-right'>Telesna teža</th>" +
						                	"<th class='text-right'>Višina</th>" +
						                	"<th class='text-right'>BMI</th></tr>";
						                
						                
						                visina=[];
										teza=[];
										dat=[];
										gBMI=[];
						                cnt=0;
								        for (var i in res) {
								        	
								        	for(var j in res1)
								        	{
								        		if(res[i].time==res1[i].time)
								        		{
								        			var tmpBMI = (res[i].weight/(res1[i].height/100*res1[i].height/100)).toFixed(2);
								        			 results += "<tr><td>" + res[i].time +
										            "</td><td class='text-right'>" + res[i].weight + " " 	+
					                      			"</td><td class='text-right'>" + res1[i].height + " " 	+
					                      			"</td><td class='text-right'>" + tmpBMI + " " 	+
					                      			"</td>";
					                      			
					                      			var leto1 = (res[i].time).substr(0,4);
					                      			var mesec1 = (res[i].time).substr(5,2);
					                      			var dan1 = (res[i].time).substr(8,2);
					                      			
					                      			
					                      			visina[cnt]=res1[i].height;
													teza[cnt]=res[i].weight;
													dat[cnt]=leto1-mesec1-dan1;
													gBMI[cnt]=tmpBMI;
					                      			cnt++;
					                      			
					                      			if(leto1>=leto)
					                      			{
					                      				if(mesec1>=mesec)
						                      			{
						                      				if(dan1>=dan)
							                      			{
							                      				leto = leto1;
							                      				mesec = mesec1;
							                      				dan = dan1;
							                      				lastBMI = tmpBMI;
							                      			}
						                      			}
					                      			}
					                      			//console.log(leto+" "+mesec+" "+dan);
					       
					                      			
					                      			break;
								        		}
								        	}
								           
								        }
								        results += "</table>";
								        $("#rezultatMeritveVitalnihZnakov").html(results);
							    	
							    		
							    		
										//var lastBMI=27; // TODO: this
										manj=0;
										var manjArr = [];
										var enako=0;
										var enakoArr = [];
										vec=0;
										var vecArr = [];
										
										for(var i=0; i<items.length; i++)
										{
											if(items[i][1]<lastBMI) 
											{
												manj++;
												manjArr = items[i][0];
											}
											if(items[i][1]==lastBMI) 
											{
												enako++;
												enakoArr = items[i][0];
											}
											if(items[i][1]>lastBMI) 
											{
												vec++;
												vecArr = items[i][0];
											}
										}
										
										
										var results = "Primerjava pacientovega BMI z različnimi državami<br /><table class='table table-striped table-hover'>" +
														"<tr><th class='text-center'>Manj</th><th class='text-center'>" +
														"Enako</th><th class='text-center'>" +
														"Več</th></tr>";
										
										
										results += "<tr><td class='text-center'>" + manj + "</td><td class='text-center'>" + enako + "</td><td class='text-center'>" + vec + "</td>";
										results += "</table>";
										$("#primerjavaBMI").html(results);              
									    $("#valueBMI").html("<b>Vaš trenutni BMI je: "+lastBMI+"</b>");
									             
									             
										//$("#dodatnoBMI").html(
										//	"<button type='button' class='btn btn-primary btn-xs' onclick='slabo()'>Naredi me žalostnega!</button> "+
    									//	" <button type='button' class='btn btn-primary btn-xs' onclick='dobro()'>Naredi me veselega!</button>"
										//)
										
										$("#graphBMI").html("<button type='button' class='btn btn-primary btn-xs' onclick='graphBMI()'>Nariši graf BMI</button>");
										
										
							    	}
				    				else {
							    		$("#preberiMeritveVitalnihZnakovSporocilo").html(
						                "<span class='obvestilo label label-warning fade-in'>" +
						                "Ni podatkov!</span>");
				    				}
							    },
							    error: function() {
							    	$("#preberiMeritveVitalnihZnakovSporocilo").html(
					              "<span class='obvestilo label label-danger fade-in'>Napaka '" +
			              JSON.parse(err.responseText).userMessage + "'!");
							    }
							});

				    	} else {
				    		$("#preberiMeritveVitalnihZnakovSporocilo").html(
			                "<span class='obvestilo label label-warning fade-in'>" +
			                "Ni podatkov!</span>");
				    	}
				    },
				    error: function() {
				    	$("#preberiMeritveVitalnihZnakovSporocilo").html(
			              "<span class='obvestilo label label-danger fade-in'>Napaka '" +
			              JSON.parse(err.responseText).userMessage + "'!");
				    }
				});
	    		
	    		
	    		
	    		
	    		/*
					$.ajax({
					    url: baseUrl + "/composition/" + ehrId + "" + "",
					    type: 'GET',
					    headers: {"Ehr-Session": sessionId},
					    success: function (res) {
					    	console.log(res);
					    	if (res.length > 0) {
						    	var results = "<table class='table table-striped " +
                    "table-hover'><tr><th>Datum in ura</th>" +
                    "<th class='text-right'>Telesna teža</th></tr>";
						        for (var i in res) {
						            results += "<tr><td>" + res[i].time +
                          "</td><td class='text-right'>" + res[i].weight + " " 	+
                          res[i].unit + "</td>";
						        }
						        results += "</table>";
						        $("#rezultatMeritveVitalnihZnakov").append(results);
					    	} else {
					    		$("#preberiMeritveVitalnihZnakovSporocilo").html(
                    "<span class='obvestilo label label-warning fade-in'>" +
                    "Ni podatkov!</span>");
					    	}
					    },
					    error: function() {
					    	$("#preberiMeritveVitalnihZnakovSporocilo").html(
                  "<span class='obvestilo label label-danger fade-in'>Napaka '" +
                  JSON.parse(err.responseText).userMessage + "'!");
					    }
					});
				
	    		
	    		*/
	    		/*
				var party = data.party;
				$("#rezultatMeritveVitalnihZnakov").html("<br/><span>Pridobivanje " +
          "podatkov za <b>'" + "BMI" + "'</b> bolnika <b>'" + party.firstNames +
          " " + party.lastNames + "'</b>.</span><br/><br/>");
					var AQL =
						"select " +
    						"t/data[at0002]/events[at0003]/time/value as cas, " +
    						"t/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/magnitude as temperatura_vrednost, " +
    						"t/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/units as temperatura_enota " +
						"from EHR e[e/ehr_id/value='" + ehrId + "'] " +
						"contains OBSERVATION t[openEHR-EHR-OBSERVATION.body_temperature.v1] " +
						"where t/data[at0002]/events[at0003]/data[at0001]/items[at0004]/value/magnitude<35 " +
						"order by t/data[at0002]/events[at0003]/time/value desc " +
						""; // limit 10
					$.ajax({
					    url: baseUrl + "/query?" + $.param({"aql": AQL}),
					    type: 'GET',
					    async   :   false,
					    headers: {"Ehr-Session": sessionId},
					    success: function (res) {
					    	var results = "<table class='table table-striped table-hover'>" +
                  "<tr><th>Datum in ura</th><th class='text-right'>" +
                  "Višina</th><th class='text-right'>" +
                  "Teža</th><th class='text-right'>" +
                  "BMI</th></tr>";
					    	if (res) {
					    		var rows = res.resultSet;
								
						        for (var i in rows) {
						            results += "<tr><td>" + rows[i].cas +
									"</td><td class='text-right'>" +
									rows[i].temperatura_vrednost + " " 	+
									rows[i].temperatura_enota + "</td>" +
									"</td><td class='text-right'>" +
									rows[i].temperatura_vrednost + " " 	+
									rows[i].temperatura_enota + "</td>" +
									"<td class='text-right'>" +
									"TMP" + "</td>";
						        }
						        results += "</table>";
						        $("#rezultatMeritveVitalnihZnakov").append(results);
					    	} else {
					    		$("#preberiMeritveVitalnihZnakovSporocilo").html(
                    "<span class='obvestilo label label-warning fade-in'>" +
                    "Ni podatkov!</span>");
					    	}

					    },
					    error: function() {
					    	$("#preberiMeritveVitalnihZnakovSporocilo").html(
                  "<span class='obvestilo label label-danger fade-in'>Napaka '" +
                  JSON.parse(err.responseText).userMessage + "'!");
					    }
					});
				
	    	
	    		
	    		
	    		*/
	    	//},
	    	//error: function(err) {
	    	//	$("#preberiMeritveVitalnihZnakovSporocilo").html(
            //"<span class='obvestilo label label-danger fade-in'>Napaka '" +
            //JSON.parse(err.responseText).userMessage + "'!");
	    	//}
		//});
	}
	
	
	
	
	
	
}

var manj=0;
var vec=0;
/*
function slabo()
{
	//alert(vec);
	if(vec==0) $("#dodatnoBMI").html("Za vas ni več upanja. Ni države, ki bi bila tako debela kot ste vi.");
	else if(vec==1) $("#dodatnoBMI").html("Za vas skoraj da ni več upanja. Samo ena država je bolj debela od vas.");
	else if(manj<=1) $("#dodatnoBMI").html("Sicer ste med bolj suhimi tako, da ko se zredite bote imeli veliko izbire pri selitvi,.");
	else $("#dodatnoBMI").html("Vaš BMI je večji kot v "+manj+" državah. Nasvet strokovnjaka je, da si omislite novo lokacijo.");
	
}
function dobro()
{
	//alert(manj);
	
	if(vec==0) $("#dodatnoBMI").html("Na žalost ni več države, ki bi imela višji BMI kot vi. Ampak ne obupajte!");
	else if(vec==1) $("#dodatnoBMI").html("Bodite optimistični! V eni državi imajo v povprečju večji BMI kot ga imate vi!");
	else $("#dodatnoBMI").html("Vaš BMI je manjši kot v "+vec+" državah. To pomeni, da ko se vam BMI še poveča se lahko preselite tja.");
}
*/

$(document).ready(function() {

  /**
   * Napolni testne vrednosti (ime, priimek in datum rojstva) pri kreiranju
   * EHR zapisa za novega bolnika, ko uporabnik izbere vrednost iz
   * padajočega menuja (npr. Pujsa Pepa).
   */
  $('#preberiPredlogoBolnika').change(function() {
    $("#kreirajSporocilo").html("");
    var podatki = $(this).val().split(",");
    $("#kreirajIme").val(podatki[0]);
    $("#kreirajPriimek").val(podatki[1]);
    $("#kreirajDatumRojstva").val(podatki[2]);
  });

  /**
   * Napolni testni EHR ID pri prebiranju EHR zapisa obstoječega bolnika,
   * ko uporabnik izbere vrednost iz padajočega menuja
   * (npr. Dejan Lavbič, Pujsa Pepa, Ata Smrk)
   */
	$('#preberiObstojeciEHR').change(function() {
		$("#preberiSporocilo").html("");
		$("#preberiEHRid").val($(this).val());
	});

  /**
   * Napolni testne vrednosti (EHR ID, datum in ura, telesna višina,
   * telesna teža, telesna temperatura, sistolični in diastolični krvni tlak,
   * nasičenost krvi s kisikom in merilec) pri vnosu meritve vitalnih znakov
   * bolnika, ko uporabnik izbere vrednosti iz padajočega menuja (npr. Ata Smrk)
   */
	$('#preberiObstojeciVitalniZnak').change(function() {
		$("#dodajMeritveVitalnihZnakovSporocilo").html("");
		var podatki = $(this).val().split("|");
		$("#dodajVitalnoEHR").val(podatki[0]);
		$("#dodajVitalnoDatumInUra").val(podatki[1]);
		$("#dodajVitalnoTelesnaVisina").val(podatki[2]);
		$("#dodajVitalnoTelesnaTeza").val(podatki[3]);
		$("#dodajVitalnoTelesnaTemperatura").val(podatki[4]);
		$("#dodajVitalnoKrvniTlakSistolicni").val(podatki[5]);
		$("#dodajVitalnoKrvniTlakDiastolicni").val(podatki[6]);
		$("#dodajVitalnoNasicenostKrviSKisikom").val(podatki[7]);
		$("#dodajVitalnoMerilec").val(podatki[8]);
	});

  /**
   * Napolni testni EHR ID pri pregledu meritev vitalnih znakov obstoječega
   * bolnika, ko uporabnik izbere vrednost iz padajočega menuja
   * (npr. Ata Smrk, Pujsa Pepa)
   */
	$('#preberiEhrIdZaVitalneZnake').change(function() {
		$("#preberiMeritveVitalnihZnakovSporocilo").html("");
		$("#rezultatMeritveVitalnihZnakov").html("");
		$("#meritveVitalnihZnakovEHRid").val($(this).val());
	});

	
	pridobiStatisticnePodatke();
	
	generiraj();
	
	//grafFunkcija();
});


function graphBMI()
{
	
	// http://bl.ocks.org/bobmonteverde/2070123
	grafFunkcija();
}

var visina=[];
var teza=[];
var dat=[];
var gBMI=[];


///////////// GRAF
/// http://bl.ocks.org/bobmonteverde/2070123

function log(text) {
  if (console && console.log) console.log(text);
  return text;
}


function pocistiGraphBMI()
{
	$("#graphBMI").html("<button type='button' class='btn btn-primary btn-xs' onclick='graphBMI()'>Nariši graf BMI</button>");
}

var scale = 1/2;
function grafFunkcija()
{
	$("#graphBMI").html("<button type='button' class='btn btn-primary btn-xs' onclick='pocistiGraphBMI()'>Skrij graf BMI</button><br/>");
	$("#graphBMI").append("<svg></svg>")
	var margin = {top: 30, right: 30, bottom: 30, left: 30},
	      chart = d3LineWithLegend()
	                .xAxis.label('Datum')
	                .width(width(margin)*scale)
	                .height(height(margin)*scale)
	                .yAxis.label('BMI');
	
	
	  var svg = d3.select('#graphBMI svg')
	      .datum(generateData())
	
	  svg.transition().duration(500)
	      .attr('width', width(margin)*scale)
	      .attr('height', height(margin)*scale)
	      .call(chart);
	
	
	  chart.dispatch.on('showTooltip', function(e) {
	  var offset = $('#graphBMI').offset(), // { left: 0, top: 0 }
	        left = e.pos[0] + offset.left,
	        top = e.pos[1] + offset.top,
	        formatter = d3.format(".02f");
	
	    var content = '<h3>' + e.series.label + '</h3>' +
	                  '<p>' +
	                  '<span class="value">[' + e.point[0] + ', ' + formatter(e.point[1]) + ']</span>' +
	                  '</p>' +
	                  '<p><span class="value">'+
	                	'Višina: ' + e.point[2] + '<br />Teža: ' + e.point[3] +
	                  '</span></p>';
	
	    nvtooltip.show([left, top], content);
	  });
	
	  chart.dispatch.on('hideTooltip', function(e) {
	    nvtooltip.cleanup();
	  });
//alert(123);
}


$(window).resize(function() {
    var margin = chart.margin();

    chart
      .width(width(margin)*scale)
      .height(height(margin)*scale);

    d3.select('#graphBMI svg')
      .attr('width', width(margin)*scale)
      .attr('height', height(margin)*scale)
      .call(chart);

    });



function width(margin) {
    var w = $(window).width() - 20;

    return ( (w - margin.left - margin.right - 20) < 0 ) ? margin.left + margin.right + 2 : w;
  }

function height(margin) {
    var h = $(window).height() - 20;

    return ( h - margin.top - margin.bottom - 20 < 0 ) ? 
              margin.top + margin.bottom + 2 : h;
  }

function sortFunction(a, b) {
	    if (a[0] === b[0]) {
	        return 0;
	    }
	    else {
	        return (a[0] < b[0]) ? -1 : 1;
	    }
	}

//data
function generateData() {
  	//alert(gBMI);
  	
  	
  	
  	var arrTab=[];
  	for (var i = 0; i < dat.length; i++) {
      arrTab.push([ dat[i], gBMI[i], visina[i], teza[i]]);    }
      arrTab.sort(sortFunction);
  	return [
      {
        data: arrTab,
        label: "BMI"
      }
    ];
    
	//visina=[];
	//teza=[];
	//dat=[];
	//gBMI=[];

  	/*
    var sin = [],
        sin2 = [],
        cos = [],
        cos2 = [],
        r1 = Math.random(),
        r2 = Math.random(),
        r3 = Math.random(),
        r4 = Math.random();

    for (var i = 0; i < 100; i++) {
      sin.push([ i, r1 * Math.sin( r2 +  i / (10 * (r4 + .5) ))]);
      cos.push([ i, r2 * Math.cos( r3 + i / (10 * (r3 + .5) ))]);
      sin2.push([ i, r3 * Math.sin( r1 + i / (10 * (r2 + .5) ))]);
      cos2.push([ i, r4 * Math.cos( r4 + i / (10 * (r1 + .5) ))]);
    }

    return [
      {
        data: sin,
        label: "Sine Wave"
      },
      {
        data: cos,
        label: "Cosine Wave"
      },
      {
        data: sin2,
        label: "Sine2 Wave"
      },
      {
        data: cos2,
        label: "Cosine2 Wave"
      }
    ];
    */
    
  }








