//JS to pass in farmer_id as a variable from the HTML <script> tag
var this_js_script = $('script[src*=boilerroom]');
var farmer_id = this_js_script.attr('data-farmer_id'); 

 function getStats(bundle) {
	var queryURL = '/api/boilerroom/' + farmer_id;

	$.ajax({url: queryURL, method: 'GET'}).done(function(res) {
		console.log('Response received');

		if (bundle == 'boilerroom') {
			var completed =
				res.blacksmiths_copperbar +
			  res.blacksmiths_ironbar +
			  res.blacksmiths_goldbar +
			  res.geologists_quartz +
			  res.geologists_earthcrystal +
			  res.geologists_frozentear +
			  res.geologists_firequartz +
			  res.adventurers_slime +
			  res.adventurers_batwing +
			  res.adventurers_solaressence +
			  res.adventurers_voidessence;

		  var required = 9;
		}
		else if (bundle == 'blacksmiths') {
			var completed =
				res.blacksmiths_copperbar +
			  res.blacksmiths_ironbar +
			  res.blacksmiths_goldbar;

		  var required = 3;
		}
		else if (bundle == 'geologists') {
			var completed =
			  res.geologists_quartz +
			  res.geologists_earthcrystal +
			  res.geologists_frozentear +
			  res.geologists_firequartz;

		  var required = 4;
		}
		else if (bundle == 'adventurers') {
			var completed =
			  res.adventurers_slime +
			  res.adventurers_batwing +
			  res.adventurers_solaressence +
			  res.adventurers_voidessence;

		  var required = 2;
		}

		var progress = Math.round(parseInt(completed)/required * 100);
		
		if (progress > 100) {
			progress = 100;
		}
		console.log(bundle + ' Progress: ',progress)


		$('#' + bundle + ' .progress-bar').attr('style','width: ' + progress + '%');
		$('#' + bundle + ' .progress-bar').attr('aria-valuenow', progress);
		$('#' + bundle + ' .progress-bar').html(progress + "%");
	})
}

$(document).ready(function() {
	getStats('boilerroom');
	getStats('blacksmiths');
	getStats('geologists');
	getStats('adventurers');
});
