//JS to pass in farmer_id as a variable from the HTML <script> tag
var this_js_script = $('script[src*=boilerroom]');
var farmer_id = this_js_script.attr('data-farmer_id'); 

 function getBaseStats() {
	var queryURL = '/api/boilerroom/' + farmer_id;

	$.ajax({url: queryURL, method: 'GET'}).done(function(res) {
		console.log('Response received');

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

		var progress = Math.round(parseInt(completed)/11  * 100);

		console.log(completed,progress);

		$('#boilerroom-stats .progress-bar').attr('style','width: ' + progress + '%');
		$('#boilerroom-stats .progress-bar').attr('aria-valuenow', progress);
		$('#boilerroom-stats .progress-bar').html(progress + "%");
	})
}

$(document).ready(getBaseStats);
