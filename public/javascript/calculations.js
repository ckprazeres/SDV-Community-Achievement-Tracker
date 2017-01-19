//Javascript to do all bundle calculations

var models = require('../../models');

exports.calculations = {
	boilerroom: function(farmer_id) {
		models.Boilerroom.findOne({
			where: {
				farmer_id: farmer_id
			}
		})
		.then(function() {
			
		})
	}
}