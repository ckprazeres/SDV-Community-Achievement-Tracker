var express = require('express');
var Data = require('../models')["Data"];
var router = express.Router();

var state = '';
var stateList = ['AK','AL','AR','AZ','CA','CO','CT','DC','DE','FL','GA','GU','HI','IA','ID', 'IL','IN','KS','KY','LA','MA','MD','ME','MH','MI','MN','MO','MS','MT','NC','ND','NE','NH','NJ','NM','NV','NY', 'OH','OK','OR','PA','PR','PW','RI','SC','SD','TN','TX','UT','VA','VI','VT','WA','WI','WV','WY'];

//Function to change state initials to state names
function abbrState(input, to) {
	var states = [
		['Arizona', 'AZ'],
		['Alabama', 'AL'],
		['Alaska', 'AK'],
		['Arizona', 'AZ'],
		['Arkansas', 'AR'],
		['California', 'CA'],
		['Colorado', 'CO'],
		['Connecticut', 'CT'],
		['Delaware', 'DE'],
		['Florida', 'FL'],
		['Georgia', 'GA'],
		['Hawaii', 'HI'],
		['Idaho', 'ID'],
		['Illinois', 'IL'],
		['Indiana', 'IN'],
		['Iowa', 'IA'],
		['Kansas', 'KS'],
		['Kentucky', 'KY'],
		['Kentucky', 'KY'],
		['Louisiana', 'LA'],
		['Maine', 'ME'],
		['Maryland', 'MD'],
		['Massachusetts', 'MA'],
		['Michigan', 'MI'],
		['Minnesota', 'MN'],
		['Mississippi', 'MS'],
		['Missouri', 'MO'],
		['Montana', 'MT'],
		['Nebraska', 'NE'],
		['Nevada', 'NV'],
		['New Hampshire', 'NH'],
		['New Jersey', 'NJ'],
		['New Mexico', 'NM'],
		['New York', 'NY'],
		['North Carolina', 'NC'],
		['North Dakota', 'ND'],
		['Ohio', 'OH'],
		['Oklahoma', 'OK'],
		['Oregon', 'OR'],
		['Pennsylvania', 'PA'],
		['Rhode Island', 'RI'],
		['South Carolina', 'SC'],
		['South Dakota', 'SD'],
		['Tennessee', 'TN'],
		['Texas', 'TX'],
		['Utah', 'UT'],
		['Vermont', 'VT'],
		['Virginia', 'VA'],
		['Washington', 'WA'],
		['West Virginia', 'WV'],
		['Wisconsin', 'WI'],
		['Wyoming', 'WY'],
	];

	if (to == 'abbr'){
		input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
		for(i = 0; i < states.length; i++){
			if(states[i][0] == input){
				return(states[i][1]);
			}
		}		
	} else if (to == 'name'){
		input = input.toUpperCase();
		for(i = 0; i < states.length; i++){
			if(states[i][1] == input){
				return(states[i][0]);
			}
		}	
	}
}

function surveyCalculations(dataset) {
	//Object for calculations
	var calculations = {
		stateInitial: state,
		stateName: '',
		benefits: {
			yes: 0,
			no: 0,
			dontKnow: 0
		},
		wellness_program: {
			yes: 0,
			no: 0,
			dontKnow: 0
		},
		anonymity: {
			yes: 0,
			no: 0,
			dontKnow: 0
		},
		leave: {
			veryEasy: 0,
			somewhatEasy: 0,
			somewhatDifficult: 0,
			veryDifficult: 0,
			dontKnow: 0
		},
		mental_health_consequence: {
			yes: 0,
			no: 0,
			dontKnow: 0
		},
		mental_vs_physical: {
			yes: 0,
			no: 0,
			dontKnow: 0
		}
	};

	//Find state name based on initials
	calculations.stateName = abbrState(calculations.stateInitial, 'name');

	//Calculations for benefits
	for (var i = 0; i < dataset.length; i++) {
		if (dataset[i].benefits == "Yes") {
			calculations.benefits.yes++;
		}
		else if (dataset[i].benefits == "No") {
			calculations.benefits.no++;
		}
		else {
			calculations.benefits.dontKnow++;
		}
	}

	//Calculations for wellness_program
	for (var i = 0; i < dataset.length; i++) {
		if (dataset[i].wellness_program == "Yes") {
			calculations.wellness_program.yes++;
		}
		else if (dataset[i].wellness_program == "No") {
			calculations.wellness_program.no++;
		}
		else {
			calculations.wellness_program.dontKnow++;
		}
	}

	//Calculations for anonymity
	for (var i = 0; i < dataset.length; i++) {
		if (dataset[i].anonymity == "Yes") {
			calculations.anonymity.yes++;
		}
		else if (dataset[i].anonymity == "No") {
			calculations.anonymity.no++;
		}
		else {
			calculations.anonymity.dontKnow++;
		}
	}

	//Calculations for leave
	for (var i = 0; i < dataset.length; i++) {
		if (dataset[i].leave == "Very easy") {
			calculations.leave.veryEasy++;
		}
		else if (dataset[i].leave == "Somewhat easy") {
			calculations.leave.somewhatEasy++;
		}
		else if (dataset[i].leave == "Somewhat difficult") {
			calculations.leave.somewhatDifficult++;
		}
		else if (dataset[i].leave == "Very difficult ") {
			calculations.leave.veryDifficult++;
		}
		else {
			calculations.leave.dontKnow++;
		}
	}

	//Calculations for mental_health_consequence
	for (var i = 0; i < dataset.length; i++) {
		if (dataset[i].mental_health_consequence == "Yes") {
			calculations.mental_health_consequence.yes++;
		}
		else if (dataset[i].mental_health_consequence == "No") {
			calculations.mental_health_consequence.no++;
		}
		else {
			calculations.mental_health_consequence.dontKnow++;
		}
	}

	//Calculations for mental_vs_physical
	for (var i = 0; i < dataset.length; i++) {
		if (dataset[i].mental_vs_physical == "Yes") {
			calculations.mental_vs_physical.yes++;
		}
		else if (dataset[i].mental_vs_physical == "No") {
			calculations.mental_vs_physical.no++;
		}
		else {
			calculations.mental_vs_physical.dontKnow++;
		}
	}

	console.log(calculations);
	return calculations;
}

function stateResponses(dataset) {
	var numberOfResponses = {
		'AL': 0,
		'AK': 0,
		'AS': 0,
		'AZ': 0,
		'AR': 0,
		'CA': 0,
		'CO': 0,
		'CT': 0,
		'DE': 0,
		'DC': 0,
		'FM': 0,
		'FL': 0,
		'GA': 0,
		'GU': 0,
		'HI': 0,
		'ID': 0,
		'IL': 0,
		'IN': 0,
		'IA': 0,
		'KS': 0,
		'KY': 0,
		'LA': 0,
		'ME': 0,
		'MH': 0,
		'MD': 0,
		'MA': 0,
		'MI': 0,
		'MN': 0,
		'MS': 0,
		'MO': 0,
		'MT': 0,
		'NE': 0,
		'NV': 0,
		'NH': 0,
		'NJ': 0,
		'NM': 0,
		'NY': 0,
		'NC': 0,
		'ND': 0,
		'MP': 0,
		'OH': 0,
		'OK': 0,
		'OR': 0,
		'PW': 0,
		'PA': 0,
		'PR': 0,
		'RI': 0,
		'SC': 0,
		'SD': 0,
		'TN': 0,
		'TX': 0,
		'UT': 0,
		'VT': 0,
		'VI': 0,
		'VA': 0,
		'WA': 0,
		'WV': 0,
		'WI': 0,
		'WY': 0
	};

	for (var i = 0; i < stateList.length; i++) {
		for (var x = 0; x < dataset.length; x++) {
			if (dataset[x].state == stateList[i]) {
				numberOfResponses[stateList[i]]++;
			}
		};
	};

	console.log(numberOfResponses);
	return numberOfResponses;
}

function returnResponses() {
	stateResponses(function() {
		console.log("Done!")
	});
}


router.get("/", function(req,res){
	Data.findAll({ where: {
		self_employed: 'no',
		tech_company: 'yes'
	}})
	.then(function(result) {
		var responses = stateResponses(result);
		res.render('state', responses);
	});
});


router.get("/:state", function(req,res){
	state = req.params.state;

	//If state variable is not a real state
	if(stateList.indexOf(state) == -1) {
		res.render('not-a-state');
	}
	else {
		Data.findAll({ where: {
			state: state,
			self_employed: 'no',
			tech_company: 'yes'
		}})
		.then(function(result){
			if(result.length == 0) {
				result.stateName = abbrState(state, 'name');
				console.log(result);
				res.render('no-state-data', result);
			}
			else {
				var calculatedData = surveyCalculations(result);
				res.render('individual-state', calculatedData);
			}
		});
	}
});


module.exports = router;