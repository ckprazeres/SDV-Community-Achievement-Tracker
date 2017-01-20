//JS to pass in farmer_id as a variable from the HTML <script> tag
var this_js_script = $('script[src*=dashboard]');
var farmer_id = this_js_script.attr('data-farmer_id');

function getStats(bundle, callback) {
	queryURL = '/api/' + bundle + '/' + farmer_id;

	$.ajax({url: queryURL, method: 'GET'}).done(function(res) {
		console.log(bundle + ' data received');

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
				res.exotic_cocount +
				res.exotic_cactusfruit +
				res.exotic_cavecarrot +
				res.exotic_redmushroom +
				res.exotic_purplemushroom +
				res.exotic_maplesyrup +
				res.exotic_oakresin +
				res.exotic_pinetar +
				res.exotic_morel;

			required = 24;
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

		progress = Math.round(parseInt(completed)/required * 100);

		if (progress > 100) {
			progress = 100;
		}

		console.log('Completed: '+ completed + ' // Required: ' + required + ' // Progress: ' + progress + '%');

		$('#' + bundle + ' .progress-bar').attr('style','width: ' + progress + '%');
		$('#' + bundle + ' .progress-bar').attr('aria-valuenow', progress);
		$('#' + bundle + ' .progress-bar').html(progress + "%");

		console.log('Bundle Total: ' + completedTotal);

		if (callback) {
			callback();
		}
	})
}

$(document).ready(function() {
	completedTotal = 0;
	requiredTotal = 0;

	getStats('boilerroom');
	getStats('bulletinboard');
	getStats('craftsroom');
	getStats('fishtank');
	getStats('pantry');

	//Get stats for last bundle 'vault' and get stats for community center overall
	getStats('vault', function() {
		progress = Math.round(parseInt(completedTotal)/requiredTotal * 100);

		if (progress > 100) {
			progress = 100;
		}

		console.log('Completed: '+ completedTotal + ' // Required: ' + requiredTotal + ' // Progress: ' + progress + '%');

		$('#communitycenter .progress-bar').attr('style','width: ' + progress + '%');
		$('#communitycenter .progress-bar').attr('aria-valuenow', progress);
		$('#communitycenter .progress-bar').html(progress + "%");
	});
})