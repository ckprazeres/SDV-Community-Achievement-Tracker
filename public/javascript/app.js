//JS to pass in farmer_id as a variable from the HTML <script> tag
var this_js_script = $('script[src*=app]');
var farmer_id = this_js_script.attr('data-farmer_id');

function getStats(room, bundle, callback) {
	var queryURL = '/api/' + room + '/' + farmer_id;

	$.ajax({url: queryURL, method: 'GET'}).done(function(res) {
		// console.log(bundle + ' data received');

		var completed, required, progress;

		if (bundle == 'boilerroom') {
			completed =
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

		  required = 9;
		}
		else if (bundle == 'blacksmiths') {
			completed =
				res.blacksmiths_copperbar +
			  res.blacksmiths_ironbar +
			  res.blacksmiths_goldbar;

		  required = 3;
		}
		else if (bundle == 'geologists') {
			completed =
			  res.geologists_quartz +
			  res.geologists_earthcrystal +
			  res.geologists_frozentear +
			  res.geologists_firequartz;

		  required = 4;
		}
		else if (bundle == 'adventurers') {
			completed =
			  res.adventurers_slime +
			  res.adventurers_batwing +
			  res.adventurers_solaressence +
			  res.adventurers_voidessence;

		  required = 2;
		}
		else if (bundle == 'bulletinboard') {
			completed =
				res.chefs_maplesyrup +
				res.chefs_fiddleheadfern +
				res.chefs_truffle +
				res.chefs_poppy +
				res.chefs_makiroll +
				res.chefs_friedegg +
				res.dye_redmushroom +
				res.dye_seaurchin +
				res.dye_sunflower +
				res.dye_duckfeather +
				res.dye_aquamarine +
				res.dye_redcabbage +
				res.fieldresearch_purplemushroom +
				res.fieldresearch_nautilusshell +
				res.fieldresearch_chub +
				res.fieldresearch_frozengeode +
				res.fodder_wheat +
				res.fodder_hay +
				res.fodder_apple +
				res.enchanters_oakresin +
				res.enchanters_wine +
				res.enchanters_rabbitsfoot +
				res.enchanters_pomegranate;

		  required = 23;
		}
		else if (bundle == 'chefs') {
			completed =
				res.chefs_maplesyrup +
				res.chefs_fiddleheadfern +
				res.chefs_truffle +
				res.chefs_poppy +
				res.chefs_makiroll +
				res.chefs_friedegg;

		  required = 6;
		}
		else if (bundle == 'dye') {
			completed =
				res.dye_redmushroom +
				res.dye_seaurchin +
				res.dye_sunflower +
				res.dye_duckfeather +
				res.dye_aquamarine +
				res.dye_redcabbage;

		  required = 6;
		}
		else if (bundle == 'fieldresearch') {
			completed =
				res.fieldresearch_purplemushroom +
				res.fieldresearch_nautilusshell +
				res.fieldresearch_chub +
				res.fieldresearch_frozengeode;

		  required = 4;
		}
		else if (bundle == 'fodder') {
			completed =
				res.fodder_wheat +
				res.fodder_hay +
				res.fodder_apple;

		  required = 3;
		}
		else if (bundle == 'enchanters') {
			completed =
				res.enchanters_oakresin +
				res.enchanters_wine +
				res.enchanters_rabbitsfoot +
				res.enchanters_pomegranate;

		  required = 4;
		}
		else if (bundle == 'craftsroom') {
			completed =
				res.springforaging_wildhorseradish +
				res.springforaging_daffodil +
				res.springforaging_leek +
				res.springforaging_dandelion +
				res.summerforaging_grape +
				res.summerforaging_spiceberry +
				res.summerforaging_sweetpea +
				res.fallforaging_commonmushroom +
				res.fallforaging_wildplum +
				res.fallforaging_hazelnut +
				res.fallforaging_blackberry +
				res.winterforaging_winterroot +
				res.winterforaging_crystalfruit +
				res.winterforaging_snowyam +
				res.winterforaging_crocus +
				res.construction_wood +
				res.construction_wood2 +
				res.construction_stone +
				res.construction_hardwood +
				res.exoticforaging_coconut +
				res.exoticforaging_cactusfruit +
				res.exoticforaging_cavecarrot +
				res.exoticforaging_redmushroom +
				res.exoticforaging_purplemushroom +
				res.exoticforaging_maplesyrup +
				res.exoticforaging_oakresin +
				res.exoticforaging_pinetar +
				res.exoticforaging_morel;

		  required = 24;
		}
		else if (bundle == 'springforaging') {
			completed =
				res.springforaging_wildhorseradish +
				res.springforaging_daffodil +
				res.springforaging_leek +
				res.springforaging_dandelion;

		  required = 4;
		}
		else if (bundle == 'summerforaging') {
			completed =
				res.summerforaging_grape +
				res.summerforaging_spiceberry +
				res.summerforaging_sweetpea;

		  required = 3;
		}
		else if (bundle == 'fallforaging') {
			completed =
				res.fallforaging_commonmushroom +
				res.fallforaging_wildplum +
				res.fallforaging_hazelnut +
				res.fallforaging_blackberry;

		  required = 4;
		}
		else if (bundle == 'winterforaging') {
			completed =
				res.winterforaging_winterroot +
				res.winterforaging_crystalfruit +
				res.winterforaging_snowyam +
				res.winterforaging_crocus;

		  required = 4;
		}
		else if (bundle == 'construction') {
			completed =
				res.construction_wood +
				res.construction_wood2 +
				res.construction_stone +
				res.construction_hardwood;

		  required = 4;
		}
		else if (bundle == 'exoticforaging') {
			completed =
				res.exoticforaging_coconut +
				res.exoticforaging_cactusfruit +
				res.exoticforaging_cavecarrot +
				res.exoticforaging_redmushroom +
				res.exoticforaging_purplemushroom +
				res.exoticforaging_maplesyrup +
				res.exoticforaging_oakresin +
				res.exoticforaging_pinetar +
				res.exoticforaging_morel;

		  required = 5;
		}
		else if (bundle == 'fishtank') {
			completed =
				res.riverfish_sunfish +
				res.riverfish_catfish +
				res.riverfish_shad +
				res.riverfish_tigertrout +
				res.lakefish_largemouthbass +
				res.lakefish_carp +
				res.lakefish_bullhead +
				res.lakefish_sturgeon +
				res.oceanfish_sardine +
				res.oceanfish_tuna +
				res.oceanfish_redsnapper +
				res.oceanfish_tilapia +
				res.nightfishing_walleye +
				res.nightfishing_bream +
				res.nightfishing_eel +
				res.crabpot_lobster +
				res.crabpot_crayfish +
				res.crabpot_crab +
				res.crabpot_cockle +
				res.crabpot_mussel +
				res.crabpot_shrimp +
				res.crabpot_snail +
				res.crabpot_periwinkle +
				res.crabpot_oyster +
				res.crabpot_clam +
				res.specialtyfish_pufferfish +
				res.specialtyfish_ghostfish +
				res.specialtyfish_sandfish +
				res.specialtyfish_woodskip;

		  required = 24;
		}
		else if (bundle == 'riverfish') {
			completed =
				res.riverfish_sunfish +
				res.riverfish_catfish +
				res.riverfish_shad +
				res.riverfish_tigertrout;

		  required = 4;
		}
		else if (bundle == 'lakefish') {
			completed =
				res.lakefish_largemouthbass +
				res.lakefish_carp +
				res.lakefish_bullhead +
				res.lakefish_sturgeon;

		  required = 4;
		}
		else if (bundle == 'oceanfish') {
			completed =
				res.oceanfish_sardine +
				res.oceanfish_tuna +
				res.oceanfish_redsnapper +
				res.oceanfish_tilapia;

		  required = 4;
		}
		else if (bundle == 'nightfishing') {
			completed =
				res.nightfishing_walleye +
				res.nightfishing_bream +
				res.nightfishing_eel;

		  required = 3;
		}
		else if (bundle == 'crabpot') {
			completed =
				res.crabpot_lobster +
				res.crabpot_crayfish +
				res.crabpot_crab +
				res.crabpot_cockle +
				res.crabpot_mussel +
				res.crabpot_shrimp +
				res.crabpot_snail +
				res.crabpot_periwinkle +
				res.crabpot_oyster +
				res.crabpot_clam;

		  required = 5;
		}
		else if (bundle == 'specialtyfish') {
			completed =
				res.specialtyfish_pufferfish +
				res.specialtyfish_ghostfish +
				res.specialtyfish_sandfish +
				res.specialtyfish_woodskip;

		  required = 4;
		}
		else if (bundle == 'pantry') {
			completed =
				res.springcrops_parsnip +
				res.springcrops_greenbean +
				res.springcrops_cauliflower +
				res.springcrops_potato +
				res.summercrops_tomato +
				res.summercrops_hotpepper +
				res.summercrops_blueberry +
				res.summercrops_melon +
				res.fallcrops_corn +
				res.fallcrops_eggplant +
				res.fallcrops_pumpkin +
				res.fallcrops_yam +
				res.qualitycrops_parsnip +
				res.qualitycrops_melon +
				res.qualitycrops_pumpkin +
				res.qualitycrops_corn +
				res.animal_milk +
				res.animal_egg_brown +
				res.animal_egg_white +
				res.animal_goatmilk +
				res.animal_wool +
				res.animal_duckegg +
				res.artisan_truffleoil +
				res.artisan_cloth +
				res.artisan_goatcheese +
				res.artisan_cheese +
				res.artisan_honey +
				res.artisan_jelly +
				res.artisan_apple +
				res.artisan_apricot +
				res.artisan_orange +
				res.artisan_peach +
				res.artisan_pomegranate +
				res.artisan_cherry;

		  required = 26;
		}
		else if (bundle == 'springcrops') {
			completed =
				res.springcrops_parsnip +
				res.springcrops_greenbean +
				res.springcrops_cauliflower +
				res.springcrops_potato;

		  required = 4;
		}
		else if (bundle == 'summercrops') {
			completed =
				res.summercrops_tomato +
				res.summercrops_hotpepper +
				res.summercrops_blueberry +
				res.summercrops_melon;

		  required = 4;
		}
		else if (bundle == 'fallcrops') {
			completed =
				res.fallcrops_corn +
				res.fallcrops_eggplant +
				res.fallcrops_pumpkin +
				res.fallcrops_yam;

		  required = 4;
		}
		else if (bundle == 'qualitycrops') {
			completed =
				res.qualitycrops_parsnip +
				res.qualitycrops_melon +
				res.qualitycrops_pumpkin +
				res.qualitycrops_corn;

		  required = 3;
		}
		else if (bundle == 'animal') {
			completed =
				res.animal_milk +
				res.animal_egg_brown +
				res.animal_egg_white +
				res.animal_goatmilk +
				res.animal_wool +
				res.animal_duckegg;

		  required = 5;
		}
		else if (bundle == 'artisan') {
			completed =
				res.artisan_truffleoil +
				res.artisan_cloth +
				res.artisan_goatcheese +
				res.artisan_cheese +
				res.artisan_honey +
				res.artisan_jelly +
				res.artisan_apple +
				res.artisan_apricot +
				res.artisan_orange +
				res.artisan_peach +
				res.artisan_pomegranate +
				res.artisan_cherry;

		  required = 6;
		}
		else if (bundle == 'vault') {
			completed =
				res.vault_2500 +
				res.vault_5000 +
				res.vault_10000 +
				res.vault_25000;

		  required = 4;
		}

		completedTotal += completed;
		requiredTotal += required;

		if (completed > required) {
			completed = required;
		}

		progress = Math.round(parseInt(completed)/required * 100);
		
		// console.log(bundle + ' Progress: ',progress);
		// console.log('Completed: '+ completed + ' // Required: ' + required + ' // Progress: ' + progress + '%');

		//Update progress bar
		$('#' + bundle + ' .progress-bar').attr('style','width: ' + progress + '%');
		$('#' + bundle + ' .progress-bar').attr('aria-valuenow', progress);
		$('#' + bundle + ' .progress-bar').html(progress + "%");

		//Update total h3
		$('h3.' + bundle + '.progress-tracker').html('Total Progress (' + completed + '/' + required + ')');

		//Mute buttons if bundle is completed
		// console.log(completed + '/' +required);
		if (completed >= required) {
			$('button.' + bundle + '.update-bundle').addClass('bundle-completed');
		}
		else {
			$('button.' + bundle + '.update-bundle').removeClass('bundle-completed');
		}

		// console.log('Bundle Total: ' + completedTotal);

		if (callback) {
			callback();
		}
	});
}

function getItemStatus(room) {
	var queryURL = '/api/' + room + '/' + farmer_id;

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
		'adventurers_voidessence',
	  'chefs_maplesyrup',
	  'chefs_fiddleheadfern',
	  'chefs_truffle',
	  'chefs_poppy',
	  'chefs_makiroll',
	  'chefs_friedegg',
	  'dye_redmushroom',
	  'dye_seaurchin',
	  'dye_sunflower',
	  'dye_duckfeather',
	  'dye_aquamarine',
	  'dye_redcabbage',
	  'fieldresearch_purplemushroom',
	  'fieldresearch_nautilusshell',
	  'fieldresearch_chub',
	  'fieldresearch_frozengeode',
	  'fodder_wheat',
	  'fodder_hay',
	  'fodder_apple',
	  'enchanters_oakresin',
	  'enchanters_wine',
	  'enchanters_rabbitsfoot',
	  'enchanters_pomegranate',
    'springforaging_wildhorseradish',
	  'springforaging_daffodil',
	  'springforaging_leek',
	  'springforaging_dandelion',
	  'summerforaging_grape',
	  'summerforaging_spiceberry',
	  'summerforaging_sweetpea',
	  'fallforaging_commonmushroom',
	  'fallforaging_wildplum',
	  'fallforaging_hazelnut',
	  'fallforaging_blackberry',
	  'winterforaging_winterroot',
	  'winterforaging_crystalfruit',
	  'winterforaging_snowyam',
	  'winterforaging_crocus',
	  'construction_wood',
	  'construction_wood2',
	  'construction_stone',
	  'construction_hardwood',
	  'exoticforaging_coconut',
	  'exoticforaging_cactusfruit',
	  'exoticforaging_cavecarrot',
	  'exoticforaging_redmushroom',
	  'exoticforaging_purplemushroom',
	  'exoticforaging_maplesyrup',
	  'exoticforaging_oakresin',
	  'exoticforaging_pinetar',
	  'exoticforaging_morel',
	  'riverfish_sunfish',
	  'riverfish_catfish',
	  'riverfish_shad',
	  'riverfish_tigertrout',
	  'lakefish_largemouthbass',
	  'lakefish_carp',
	  'lakefish_bullhead',
	  'lakefish_sturgeon',
	  'oceanfish_sardine',
	  'oceanfish_tuna',
	  'oceanfish_redsnapper',
	  'oceanfish_tilapia',
	  'nightfishing_walleye',
	  'nightfishing_bream',
	  'nightfishing_eel',
	  'crabpot_lobster',
	  'crabpot_crayfish',
	  'crabpot_crab',
	  'crabpot_cockle',
	  'crabpot_mussel',
	  'crabpot_shrimp',
	  'crabpot_snail',
	  'crabpot_periwinkle',
	  'crabpot_oyster',
	  'crabpot_clam',
	  'specialtyfish_pufferfish',
	  'specialtyfish_ghostfish',
	  'specialtyfish_sandfish',
	  'specialtyfish_woodskip',
	  'springcrops_parsnip',
	  'springcrops_greenbean',
	  'springcrops_cauliflower',
	  'springcrops_potato',
	  'summercrops_tomato',
	  'summercrops_hotpepper',
	  'summercrops_blueberry',
	  'summercrops_melon',
	  'fallcrops_corn',
	  'fallcrops_eggplant',
	  'fallcrops_pumpkin',
	  'fallcrops_yam',
	  'qualitycrops_parsnip',
	  'qualitycrops_melon',
	  'qualitycrops_pumpkin',
	  'qualitycrops_corn',
	  'animal_milk',
	  'animal_egg_brown',
	  'animal_egg_white',
	  'animal_goatmilk',
	  'animal_wool',
	  'animal_duckegg',
	  'artisan_truffleoil',
	  'artisan_cloth',
	  'artisan_goatcheese',
	  'artisan_cheese',
	  'artisan_honey',
	  'artisan_jelly',
	  'artisan_apple',
	  'artisan_apricot',
	  'artisan_orange',
	  'artisan_peach',
	  'artisan_pomegranate',
	  'artisan_cherry',
	  'vault_2500',
	  'vault_5000',
	  'vault_10000',
	  'vault_25000'
	];

	$.ajax({url: queryURL, method: 'GET'}).done(function(res) {

		for (var i = 0; i < bundleItems.length; i++) {
			if ($('div#' + bundleItems[i])) {
				if (res[bundleItems[i]] == 0) {
					//If item is missing
					$('button#' + bundleItems[i]).html('<i class="fa fa-fw fa-square-o" aria-hidden="true"></i> Completed');
					$('button#' + bundleItems[i]).removeClass('btn-primary');
					$('button#' + bundleItems[i]).addClass('btn-danger');
				}
				else if (res[bundleItems[i]] == 1) {
					//If item is completed
					$('button#' + bundleItems[i]).html('<i class="fa fa-fw fa-check-square-o" aria-hidden="true"></i> Completed');
					$('button#' + bundleItems[i]).removeClass('btn-danger');
					$('button#' + bundleItems[i]).addClass('btn-primary');
				}
			}
		}
	});
}

$(document).ready(function() {
	//Tooltips
  $('[data-toggle="tooltip"]').tooltip();

	completedTotal = 0;
	requiredTotal = 0;

	getStats('boilerroom', 'boilerroom');
	getStats('boilerroom', 'blacksmiths');
	getStats('boilerroom', 'geologists');
	getStats('boilerroom', 'adventurers');
	getStats('bulletinboard', 'bulletinboard');
	getStats('bulletinboard', 'chefs');
	getStats('bulletinboard', 'dye');
	getStats('bulletinboard', 'fieldresearch');
	getStats('bulletinboard', 'fodder');
	getStats('bulletinboard', 'enchanters');
	getStats('craftsroom', 'craftsroom');
	getStats('craftsroom', 'springforaging');
	getStats('craftsroom', 'summerforaging');
	getStats('craftsroom', 'fallforaging');
	getStats('craftsroom', 'winterforaging');
	getStats('craftsroom', 'construction');
	getStats('craftsroom', 'exoticforaging');
	getStats('fishtank', 'fishtank');
	getStats('fishtank', 'riverfish');
	getStats('fishtank', 'lakefish');
	getStats('fishtank', 'oceanfish');
	getStats('fishtank', 'nightfishing');
	getStats('fishtank', 'crabpot');
	getStats('fishtank', 'specialtyfish');
	getStats('pantry', 'pantry');
	getStats('pantry', 'springcrops');
	getStats('pantry', 'summercrops');
	getStats('pantry', 'fallcrops');
	getStats('pantry', 'qualitycrops');
	getStats('pantry', 'animal');
	getStats('pantry', 'artisan');
	getStats('vault', 'vault', function() {
		progress = Math.round(parseInt(completedTotal)/requiredTotal * 100);

		if (progress > 100) {
			progress = 100;
		}

		// console.log('Completed: '+ completedTotal + ' // Required: ' + requiredTotal + ' // Progress: ' + progress + '%');

		$('#communitycenter .progress-bar').attr('style','width: ' + progress + '%');
		$('#communitycenter .progress-bar').attr('aria-valuenow', progress);
		$('#communitycenter .progress-bar').html(progress + "%");
	});

	getItemStatus('boilerroom');
	getItemStatus('bulletinboard');
	getItemStatus('craftsroom');
	getItemStatus('fishtank');
	getItemStatus('pantry');
	getItemStatus('vault');

	$('button.update-bundle').click(function() {
		var id = this.id;
		var room = $(this).data('room');

		console.log('HERE IT IS ',id,room)
		var queryURL = '/api/update/' + room + '/' + farmer_id + '/' + id;

		$.ajax({url: queryURL, method: 'GET'}).done(function(res) {
			console.log('UPDATED', queryURL);
			console.log('HERE IS RESPONSE ',res);

			getItemStatus('boilerroom');
			getItemStatus('bulletinboard');
			getItemStatus('craftsroom');
			getItemStatus('fishtank');
			getItemStatus('pantry');
			getItemStatus('vault');

			getStats('boilerroom', 'boilerroom');
			getStats('boilerroom', 'blacksmiths');
			getStats('boilerroom', 'geologists');
			getStats('boilerroom', 'adventurers');
			getStats('bulletinboard', 'bulletinboard');
			getStats('bulletinboard', 'chefs');
			getStats('bulletinboard', 'dye');
			getStats('bulletinboard', 'fieldresearch');
			getStats('bulletinboard', 'fodder');
			getStats('bulletinboard', 'enchanters');
			getStats('craftsroom', 'craftsroom');
			getStats('craftsroom', 'springforaging');
			getStats('craftsroom', 'summerforaging');
			getStats('craftsroom', 'fallforaging');
			getStats('craftsroom', 'winterforaging');
			getStats('craftsroom', 'construction');
			getStats('craftsroom', 'exoticforaging');
			getStats('fishtank', 'fishtank');
			getStats('fishtank', 'riverfish');
			getStats('fishtank', 'lakefish');
			getStats('fishtank', 'oceanfish');
			getStats('fishtank', 'nightfishing');
			getStats('fishtank', 'crabpot');
			getStats('fishtank', 'specialtyfish');
			getStats('pantry', 'pantry');
			getStats('pantry', 'springcrops');
			getStats('pantry', 'summercrops');
			getStats('pantry', 'fallcrops');
			getStats('pantry', 'qualitycrops');
			getStats('pantry', 'animal');
			getStats('pantry', 'artisan');
			getStats('vault', 'vault');
		});
	});
});