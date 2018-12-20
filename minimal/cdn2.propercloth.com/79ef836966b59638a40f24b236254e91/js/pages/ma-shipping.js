$(document).ready(function() {
	$(document.body).on('change keyup paste', '#shipping_zip_code, #billing_zip_code', function() {
		ShippingAddr.zipOmatic();
	});

	$(document.body).on('change', '#shipping_country, #billing_country', function() {
		ShippingAddr.autoCityState($(this).val());
	});

	$(document.body).on('change', '#shipping_auto-region, #billing_auto-region', function() {
		ShippingAddr.selectOptionAutoCityState($(this));
	});
});

var ShippingAddr = {
    zipOmatic: function() {
    	this.autoCityState();

    	if ($('#shipping_country, #billing_country').val() == 1) {
    		zip = $('#shipping_zip_code, #billing_zip_code').val();

    		if (zip.length >= 4 && zip.length <= 5) {
    			$('#shipping_auto-region, #billing_auto-region').attr('disabled', false).html('');

				if (zip.length == 4) {
					zip = parseInt(zip);
					for (var key in zip_codes_json) {
						if (zip >= zip_codes_json[key]['z1'] && zip <= zip_codes_json[key]['z2']) {
							$('#shipping_auto-region, #billing_auto-region').append('<option data-city="'+zip_codes_json[key]['c']+'" data-state="'+zip_codes_json[key]['s']+'">'+zip_codes_json[key]['c']+', '+zip_codes_json[key]['s']+'</option>');
						}
					}
				}

				if (zip.length == 5) {
					zip = parseInt(zip);
					for (var key in zip_codes_json) {
						if (zip >= zip_codes_json[key]['z1'] && zip <= zip_codes_json[key]['z2']) {
							$('#shipping_auto-region, #billing_auto-region').append('<option data-city="'+zip_codes_json[key]['c']+'" data-state="'+zip_codes_json[key]['s']+'">'+zip_codes_json[key]['c']+', '+zip_codes_json[key]['s']+'</option>');
						}
					}
				}

				if ($('#shipping_auto-region option, #billing_auto-region option').length > 0) {
					$('#shipping_city, #billing_city').val($('#shipping_auto-region option:selected, #billing_auto-region option:selected').data('city'));
					$('#shipping_state, #billing_state').val($('#shipping_auto-region option:selected, #billing_auto-region option:selected').data('state'));
				}

				if ($('#shipping_auto-region option, #billing_auto-region option').length == 0) {
		    		$('.city-state-auto').addClass('hide');
		    		$('.city-state-manual').removeClass('hide');
				}
			}
		}
    },
    autoCityState: function() {
    	if ($('#shipping_country, #billing_country').val() == 1) {
    		$('.city-state-manual').addClass('hide');
    		$('.city-state-auto').removeClass('hide');
    	}
    	else {
    		$('.city-state-auto').addClass('hide');
    		$('.city-state-manual').removeClass('hide');
    	}
    },
    selectOptionAutoCityState: function($self) {
		$('#shipping_city, #billing_city').val($self.find(':selected').attr('data-city'));
		$('#shipping_state, #billing_state').val($self.find(':selected').attr('data-state'));
    }
}

ShippingAddr.autoCityState();

var zip_codes_json = [];
