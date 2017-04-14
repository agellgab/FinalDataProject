
function init(){
	google.charts.load('current', {'packages':['corechart']});
	google.charts.load('current', {'packages': ['corechart', 'bar']});
	google.charts.setOnLoadCallback(drawScatterChart);
	google.charts.setOnLoadCallback(drawBasic);
	addClicks();
	populateOptions();
}

function drawScatterChart(){
	var data = google.visualization.arrayToDataTable([
		['WL/AVNational', 'Gini', {role: 'annotation'}, {role:'annotationText'}],
		[6.697462331, 0.376,	'JA', 'Prime Minister Japan'],
		[26.49233544, 0.32,	'LT', 'President Lithuania'],
		[22.26436782, 0.472,	'MX', 'President of Mexico'],
		[3.12287415, 0.35,	'ES',	'Prime Minister of Spain'],
		[2.655973451, 0.2909,	'MT',	'Prime Minister Malta'],
		[1.965831435, 0.305,	'HR',	'President Croatia'],
		[9.741767764, 0.448,	'TR',	'President Turkey'],
		[5.823823824, 0.298,	'IE',	'Prime Minister Ireland'], 
		[8.380057803, 0.535,	'CO',	'President of Colombia'],
		[5.161552347, 0.412,	'AR',	'President Argentina'],
		[8.85807771, 0.3516,	'IT',	'President Italy'],
		[2.779296875, 0.309,	'PL',	'Prime Minister Poland'],
		[9.309465021, 0.42,	'RU',	'President of Russia'],
		[5.834547347, 0.462,	'MY',	'Prime Minister of Malaysia'],
		[5.650897227, 0.33,	'GB',	'Prime Minister of the United Kingdom'],
		[7.610169492, 0.339,	'IO',	'President of India'],
		[7.638970588, 0.3013,	'DE',	'Chancellor of Germany'],
		[5.404893449, 0.325,	'EE',	'President Estonia'],
		[12.33188248, 0.631,	'ZA',	'President of South Africa'],
		[4.056410256, 0.2712,	'FI',	'President Finland'],
		[11.96360153, 0.305,	'AU',	'Prime Minister of Australia'],
		[12.95200784, 0.495,	'CL',	'President Chile'],
		[5.840609841, 0.331,	'FR',	'President France'],
		[1.761006289, 0.332,	'RO',	'President Romania'],
		[3.121568627, 0.3,	'PK',	'President Pakistan'],
		[31.45973154, 0.337,	'AZ',	'President of Azerbaijan'],
		[5.109541853, 0.31,	'KR',	'President South Korea'],
		[4.109170306, 0.2855,	'HU',	'Prime Minister Hungary'],
		[8.037444934, 0.321,	'CA',	'Prime Minister Canada'],
		[2.643292683, 0.614,	'CN',	'President of China'],
		[6.116109825, 0.2732,	'SE',	'Prime Minister Sweden'],
		[4.716757741, 0.359,	'LV',	'President Latvia'],
		[3.973333333, 0.336,	'BG',	'President Bulgaria'],
		[4.6725756, 0.2601,	'BY',	'President of Belarus'],
		[6.519001919, 0.31,	'CY',	'President Cyprus'],
		[10.94890511, 0.308,	'EG',	'President Egypt'],
	]);

	var options = {
		title: 'Gini vs WL/AVNational index',
		hAxis: {title: "World leader's wage divided by the national average wage of its country.", minValue: 0, maxValue: 27},
		vAxis: {title: 'Gini coefficient', minValue: 0, maxValue: 1},
		legend: 'none',
		height: 600,
		width: 900,
	};

	var chart = new google.visualization.ScatterChart(document.getElementById('myScatterChart'));

	chart.draw(data, options);
}

function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['World leader', 'Weekly Salary in US dollars',],
	    ["Bangladesh", 174],
	    ["Vietnam", 177],
	    ["Pakistan", 184],
	    ["Uganda", 250],
	    ["Cambodia", 259],
	    ["Senegal", 287],
	    ["Romania", 388],
	    ["China", 400],
	    ["Guinea", 423],
	    ["India", 518],
	    ["Benin", 563],
	    ["Bulgaria", 688],
	    ["Ghana", 714],
	    ["Slovenia", 782],
	    ["Croatia", 797],
	    ["Honduras", 825],
	    ["Ethiopia", 855],
	    ["Peru", 858],
	    ["Venezuela", 901],
	    ["Mozambique", 913],
	    ["Poland", 985],
	    ["Congo", 1003],
	    ["Belarus", 1034],
	    ["Zambia", 1076],
	    ["Malta", 1108],
	    ["Latvia", 1195],
	    ["Malaysia", 1294],
	    ["Hungary", 1303],
	    ["Argentina", 1320],
	    ["Colombia", 1338],
	    ["Egypt", 1384],
	    ["Paraquay", 1549],
	    ["Angola", 1559],
	    ["Estonia", 1580],
	    ["Rwanda", 1634],
	    ["Spain", 1695],
	    ["Portugal", 1715],
	    ["Liberia", 1730],
	    ["Costa Rica", 2199],
	    ["Indonesia", 2387],
	    ["Suriname", 2453],
	    ["Russia", 2610],
	    ["Finland", 2738],
	    ["Chile", 3052],
	    ["Kenya", 3083],
	    ["Mexico", 3129],
	    ["Algeria", 3230],
	    ["Netherlands", 3418],
	    ["South Korea", 3423],
	    ["Tanzania", 3692],
	    ["France", 3890],
	    ["Turkey", 3891],
	    ["Japan", 3898],
	    ["Cyprus", 3918],
	    ["United Kingdom", 3997],
	    ["Ireland", 4028],
	    ["Denmark", 4259],
	    ["Sweden", 4267],
	    ["Azerbaijan", 4326],
	    ["Guatemala", 4430],
	    ["Germany", 4795],
	    ["Italy", 4998],
	    ["Belgium", 4998],
	    ["Canada", 5052],
	    ["Africa", 5230],
	    ["Lithuania", 6780],
	    ["Australia", 7206],
	    ["U.S.A.", 7692]
	     
	]);

      var options = {
        title: "World leaders' salaries on a weekly basis",
        height: 2000,
        width: 900,
        legend: 'none',
        
        hAxis: {
		    title: 'Weekly salary in USD',
		    minValue: 0,
		    maxValue: 10000,
        },
        vAxis: {
        	title: 'Country',
        
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('myColumnChart'));

      chart.draw(data, options);
    }

function populateOptions(){
	var i = 0;
	var options = "";
	for (i=0; i< globalData.length; i++){
		option = "<option value='"+i+"'>"+globalData[i]["Country"]+"</option>";
		options = options + option;
	}
	document.getElementById("WLselector1").innerHTML= options;
	document.getElementById("WLselector2").innerHTML= options;
	document.getElementById("WLselector3").innerHTML= options;
	document.getElementById("WLselector4").innerHTML= options;
	document.getElementById("AVOtherSelector").innerHTML= options;
	document.getElementById("WLselector5").innerHTML= options;
}

function addClicks(){
	//botón que toma los valores de los selectores, los cuales han sido puestos por la función populateOptions()
	$('button#comparebtn1').click(function() {
    	selCountry1 = globalData[document.getElementById("WLselector1").value];
    	selCountry2 = globalData[document.getElementById("WLselector2").value];
    	$("#WL1 .WLcountry").html(selCountry1["Country"]);
    	$("#WL1 .WLname").html(selCountry1["Name"]);
    	$("#WL1 .WLposition").html(selCountry1["Position"]);
    	$("#WL1 .WLbirth").html(selCountry1["Birth"]);
    	$("#WL1 .WLannual").html(selCountry1["Annual"]);
    	$("#WL1 .WLmonthly").html(selCountry1["Monthly"]);
    	$("#WL1 .WLweekly").html(selCountry1["Weekly"]);
    	$("#WL1 .WLdaily").html(selCountry1["Daily"]);
    	$("#WL1 .WLimage").attr("src", selCountry1["Image"]);

    	$("#WL2 .WLcountry").html(selCountry2["Country"]);
    	$("#WL2 .WLname").html(selCountry2["Name"]);
    	$("#WL2 .WLposition").html(selCountry2["Position"]);
    	$("#WL2 .WLbirth").html(selCountry2["Birth"]);
    	$("#WL2 .WLannual").html(selCountry2["Annual"]);
    	$("#WL2 .WLmonthly").html(selCountry2["Monthly"]);
    	$("#WL2 .WLweekly").html(selCountry2["Weekly"]);
    	$("#WL2 .WLdaily").html(selCountry2["Daily"]);
    	$("#WL2 .WLimage").attr("src", selCountry2["Image"])

    	var name1 = selCountry1["Name"];
    	var name2 = selCountry2["Name"];
    	var leaderRatio = selCountry1["Annual"]/selCountry2["Annual"];

   	 	if (Number(selCountry2["Annual"]) > Number(selCountry1["Annual"])){
			name1 = selCountry2["Name"];
    		name2 = selCountry1["Name"];
    		leaderRatio = selCountry2["Annual"]/selCountry1["Annual"];
    	}

    	$("#WLvsWLresults .WLvsWLRatioSpan").html(leaderRatio);
    	$("#WLvsWLresults .WL1Span").html(name1);
    	$("#WLvsWLresults .WL2Span").html(name2);
    	$("#WLvsWLresults").show();

	});

	$('button#comparebtn2').click(function() {
		selCountry3 = globalData[document.getElementById("WLselector3").value];
    	$("#WL3 .WLcountry").html(selCountry3["Country"]);
    	$("#WL3 .WLname").html(selCountry3["Name"]);
    	$("#WL3 .WLposition").html(selCountry3["Position"]);
    	$("#WL3 .WLbirth").html(selCountry3["Birth"]);
    	$("#WL3 .WLannual").html(selCountry3["Annual"]);
    	$("#WL3 .WLmonthly").html(selCountry3["Monthly"]);
    	$("#WL3 .WLweekly").html(selCountry3["Weekly"]);
    	$("#WL3 .WLdaily").html(selCountry3["Daily"]);
    	$("#WL3 .WLimage").attr("src", selCountry3["Image"]);

    	$("#AVN .WLcountry").html(selCountry3["Country"]);
    	$("#AVN .WLname").html(selCountry3["Name"]);
    	$("#AVN .AVNatWage").html(selCountry3["Av National Wage (Monthly USD Dollars)"]);
    	$("#AVN .GiniVal").html(selCountry3["Gini"]);
    	$("#AVN .GiniYearVal").html(selCountry3["GiniYear"]);
    	$("#AVN .WLAVNalVal").html(selCountry3["WLAVNational"]);

    	
    	var name1 = selCountry3["Name"];
    	var AVNat = selCountry3["Av National Wage (Monthly USD Dollars)"];
    	var leaderRatio = Number(selCountry3["Monthly"])/Number(selCountry3["Av National Wage (Monthly USD Dollars)"]);

   	 	

    	$("#WLvsANresults .WLvsANRatioSpan").html(leaderRatio);
    	$("#WLvsANresults .WL3Span").html(name1);
    	$("#WLvsANresults .ANSpan").html(AVNat);
    	$("#WLvsANresults").show();

    	//WLvsANlRatio = Number(selCountry3["Annual"])/Number(selCountry3["Av National Wage (Monthly USD Dollars)"]);
    	//$("#WLvsANresults .WLvsANRatioSpan").html(WLvsANlRatio);
    	//$("#WLvsANresults .WL3Span").html(selCountry3["Name"]);
    	//$("#WLvsANresults .ANSpan").html(selCountry3["Av National Wage (Monthly USD Dollars)"]);

	});

	$('button#comparebtn3').click(function() {
		selCountry4 = globalData[document.getElementById("WLselector4").value];
		AVOtherVal = globalData[document.getElementById("AVOtherSelector").value];
    	$("#WL4 .WLcountry").html(selCountry4["Country"]);
    	$("#WL4 .WLname").html(selCountry4["Name"]);
    	$("#WL4 .WLposition").html(selCountry4["Position"]);
    	$("#WL4 .WLbirth").html(selCountry4["Birth"]);
    	$("#WL4 .WLannual").html(selCountry4["Annual"]);
    	$("#WL4 .WLmonthly").html(selCountry4["Monthly"]);
    	$("#WL4 .WLweekly").html(selCountry4["Weekly"]);
    	$("#WL4 .WLdaily").html(selCountry4["Daily"]);
    	$("#WL4 .WLimage").attr("src", selCountry4["Image"]);

    	$("#AON .WLcountry").html(AVOtherVal["Country"]);
    	$("#AON .WLname").html(AVOtherVal["Name"]);
    	$("#AON .AVNatWage").html(AVOtherVal["Av National Wage (Monthly USD Dollars)"]);
    	$("#AON .GiniVal").html(AVOtherVal["Gini"]);
    	$("#AON .GiniYearVal").html(AVOtherVal["GiniYear"]);
    	$("#AON .WLAVNalVal").html(AVOtherVal["WLAVNational"]);

    	//WLvsONlRatio = Number(selCountry4["Annual"])/Number(AVOtherVal["Av National Wage (Monthly USD Dollars)"]);
    	//$("#WLvsONresults .WLvsONRatioSpan").html(WLvsONlRatio);
    	//$("#WLvsONresults .WL4Span").html(selCountry4["Name"]);
    	//$("#WLvsONresults .ONCSpan").html(AVOtherVal["Country"]);
    	//$("#WLvsONresults .ONSpan").html(AVOtherVal["Av National Wage (Monthly USD Dollars)"]);

    	var name1 = selCountry4["Name"];
    	var name2 = AVOtherVal["Country"];
    	var AVOth = AVOtherVal["Av National Wage (Monthly USD Dollars)"];
    	var leaderRatio = Number(selCountry4["Monthly"])/Number(AVOtherVal["Av National Wage (Monthly USD Dollars)"]);

    	$("#WLvsONresults .WLvsONRatioSpan").html(leaderRatio);
    	$("#WLvsONresults .WL4Span").html(name1);
    	$("#WLvsONresults .ONCSpan").html(name2);
    	$("#WLvsONresults .ONSpan").html(AVOth);

    	$("#WLvsONresults").show();
	});

	$('button#comparebtn4').click(function() {
		selCountry5 = globalData[document.getElementById("WLselector5").value];
		YOUVal = Number(document.getElementById("userSalary").value);
    	$("#WL5 .WLcountry").html(selCountry5["Country"]);
    	$("#WL5 .WLname").html(selCountry5["Name"]);
    	$("#WL5 .WLposition").html(selCountry5["Position"]);
    	$("#WL5 .WLbirth").html(selCountry5["Birth"]);
    	$("#WL5 .WLannual").html(selCountry5["Annual"]);
    	$("#WL5 .WLmonthly").html(selCountry5["Monthly"]);
    	$("#WL5 .WLweekly").html(selCountry5["Weekly"]);
    	$("#WL5 .WLdaily").html(selCountry5["Daily"]);
    	$("#WL5 .WLimage").attr("src", selCountry5["Image"]);

    	$("#YOU .youSalary").html(YOUVal);

    	//youValRatio = Number(selCountry5["Annual"])/YOUVal;

    	//$("#YOU .youSalary").html(YOUVal);
    	//$("#YOU .youSalaryRatio").html(youValRatio);
    	//$("#YOU .WLname").html(selCountry5["Name"]);

    	var name1 = selCountry5["Name"];
    	var youValRatio = Number(selCountry5["Annual"])/YOUVal;

    	$("#WLvsYresults .youSalaryRatio").html(youValRatio);
    	$("#WLvsYresults .WLname").html(name1);

    	$("#WLvsYresults").show();
	});

	$("#FirstPage").show();
	$("#WLvsANcontent").hide();
	$("#WLvsONcontent").hide();
	$("#WLvsYcontent").hide();
	$("#chartscontent").hide();
	$("#WLvsWLcontent").hide();

	$("#WLvsWLresults").hide();
	$("#WLvsANresults").hide();
	$("#WLvsONresults").hide();
	$("#WLvsYresults").hide();


	$("#WLvsWL").on("click", function(){
		$("#FirstPage").hide();
		$("#WLvsANcontent").hide();
		$("#WLvsONcontent").hide();
		$("#WLvsYcontent").hide();
		$("#chartscontent").hide();
		$("#WLvsWLcontent").show();
	});
	$("#WLvsAN").on("click", function(){
		$("#FirstPage").hide();
		$("#WLvsONcontent").hide();
		$("#WLvsYcontent").hide();
		$("#WLvsWLcontent").hide();
		$("#chartscontent").hide();
		$("#WLvsANcontent").show();
	});
	$("#WLvsON").on("click", function(){
		$("#FirstPage").hide();
		$("#WLvsANcontent").hide();
		$("#WLvsYcontent").hide();
		$("#WLvsWLcontent").hide();
		$("#chartscontent").hide();
		$("#WLvsONcontent").show();
	});
	$("#WLvsY").on("click", function(){
		$("#FirstPage").hide();
		$("#WLvsANcontent").hide();
		$("#WLvsWLcontent").hide();
		$("#WLvsONcontent").hide();
		$("#chartscontent").hide();
		$("#WLvsYcontent").show();
	});
	$("#charts").on("click", function(){
		$("#FirstPage").hide();
		$("#WLvsANcontent").hide();
		$("#WLvsONcontent").hide();
		$("#WLvsYcontent").hide();
		$("#WLvsWLcontent").hide();
		$("#chartscontent").show();
	});
}

$('.selectpicker').selectpicker();