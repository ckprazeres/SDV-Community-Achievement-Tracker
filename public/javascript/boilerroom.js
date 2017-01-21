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

		//Update progress bar
		$('#' + bundle + ' .progress-bar').attr('style','width: ' + progress + '%');
		$('#' + bundle + ' .progress-bar').attr('aria-valuenow', progress);
		$('#' + bundle + ' .progress-bar').html(progress + "%");

		//Update total h3
		$('h3.' + bundle + '.progress-tracker').html('Total Progress (' + completed + '/' + required + ')');

		//Mute buttons if bundle is completed
		console.log(completed + '/' +required)
		if (completed >= required) {
			console.log('MUTED')
			$('button.' + bundle + '.update-bundle').addClass('bundle-completed');
		}
		else {
			console.log('NOT MUTED')
			$('button.' + bundle + '.update-bundle').removeClass('bundle-completed');
		}
	})
}

function getItemStatus() {
	var queryURL = '/api/boilerroom/' + farmer_id;
	var bundleItems = [
		'blacksmiths_copperbar',
		'blacksmiths_ironbar',
		'blacksmiths_goldbar',
		'geologists_quartz',
		'geologists_earthcrystal',
		'geologists_frozentear',
		'geologists_firequartz',
		'adventurers_slime',
		'adventurers_batwing',
		'adventurers_solaressence',
		'adventurers_voidessence'
	];

	$.ajax({url: queryURL, method: 'GET'}).done(function(res) {
		console.log('Response received');

		for (var i = 0; i < bundleItems.length; i++) {
			if ($('div#' + bundleItems[i])) {
				if (res[bundleItems[i]] == 0) {
					//If item is missing
					$('button#' + bundleItems[i]).html('Missing');
					$('button#' + bundleItems[i]).removeClass('btn-primary');
					$('button#' + bundleItems[i]).addClass('btn-danger');
				}
				else if (res[bundleItems[i]] == 1) {
					//If item is completed
					$('button#' + bundleItems[i]).html('Completed');
					$('button#' + bundleItems[i]).removeClass('btn-danger');
					$('button#' + bundleItems[i]).addClass('btn-primary');
				}
			}
		}
	})
}

$(document).ready(function() {
	getStats('boilerroom');
	getStats('blacksmiths');
	getStats('geologists');
	getStats('adventurers');

	getItemStatus();

	$('button.update-bundle').click(function() {
		var id = this.id;
		var queryURL = '/api/update/boilerroom/' + farmer_id + '/' + id;

		$.ajax({url: queryURL, method: 'GET'}).done(function(res) {
			console.log('Updated');
			getItemStatus();
			getStats('blacksmiths');
			getStats('geologists');
			getStats('adventurers');
		})
	})
});
