var $cartPopover = $('.cart-popover'), $cartCount = $('.cart-count'); function hideCartPopover() { $cartPopover.addClass('js--is-closed'); $cartCount.removeClass('js--flash'); }
function showCartPopover() { var cartPopoverOffset = $cartCount.offset(); $cartPopover.removeClass('js--is-closed'); $cartPopover.css('left', cartPopoverOffset.left + $('.cart-count a').outerWidth() - 318).addClass('js--is-visible'); $cartCount.addClass('js--flash'); }
$('.cart-popover .close').click(function (e) { hideCartPopover(); }); $(window).resize(function () { if ($cartCount.offset() !== undefined) { var cartPopoverOffset = $cartCount.offset(); $cartPopover.css('left', cartPopoverOffset.left + $('.cart-count a').outerWidth() - 318); } }); var $countryPicker = $('.geo'), $country = $('.geo .country'), $currentCountry = $('.geo .current'), countryPickerIsVisible = false; function showCountryPicker(el) { el.addClass('is-visible'); countryPickerIsVisible = true; }
function closeCountryPicker(country_id) {
    $country.removeClass('active'); if (country_id) { newCountry = $countryPicker.find('span[data-country-id="' + country_id + '"]').parent(); if (newCountry.length > 0) { newCountry.addClass('active'); countryText = newCountry[0].outerHTML; $currentCountry.html(countryText); } }
    $countryPicker.removeClass('is-visible'); countryPickerIsVisible = false;
}
$countryPicker.click(function (e) {
    e.preventDefault(); var el = $(this); if (el.find('.selector').hasClass('disabled')) { return false }; if (countryPickerIsVisible == false) { showCountryPicker(el); } else { closeCountryPicker(); }
    e.stopPropagation();
}); $('html').click(function () { if (countryPickerIsVisible) { closeCountryPicker(); } }); $country.click(function (e) {
    e.preventDefault(); $this = $(this).find('span'); if ($this.data('role') == 'account') { $.cookie('geo_country_id', $this.data('country-id'), { path: '/' }); $.cookie('currency_id', $this.data('currency-id'), { path: '/' }); $.ajax({ url: BASE_URL + "my_account.php", type: "post", dataType: "json", data: { action_a: 'form_edit_currency', country_id: $this.data('country-id') }, success: function (data) { document.location.reload(); } }); }
    else if ($this.data('role') == 'shipping') { document.location.href = BASE_URL + 'shipping?action=select_country&country_id=' + $this.data('country-id'); }
    else { $.cookie('geo_country_id', $this.data('country-id'), { path: '/' }); $.cookie('currency_id', $this.data('currency-id'), { path: '/' }); document.location.reload(); }
    closeCountryPicker($this.data('country-id')); e.stopPropagation();
}); if (!isNaN(UserCurrency.geo_country_id) && window.location.href.indexOf('propercloth.com/shipping') == -1 && window.location.href.indexOf('whitebeta/shipping') == -1) closeCountryPicker(UserCurrency.geo_country_id); $('.geo .selector').tooltip(); jQuery(document).ready(function ($) {
    var $quoteWrap = $('.unit.quote .quotes'); var $pressSources = $('.unit.quote .press-sources'); $('.unit.quote ul li').click(function (e) { e.preventDefault; if ($(window).width() > 850) { $('.unit.quote li.active').removeClass('active'); $(this).addClass('active'); } }); $(window).load(function () {
        var $initQuote = $('.unit.quote blockquote.active'); if ($(window).width() > 850) { var initHeight = $initQuote.outerHeight() + 140; } else { var initHeight = $initQuote.outerHeight() + 20; }
        $quoteWrap.css('height', initHeight); $pressSources.addClass('show');
    }); $(window).resize(function () {
        var $initQuote = $('blockquote.active'); if ($(window).width() > 850) { var initHeight = $initQuote.outerHeight() + 140; } else { var initHeight = $initQuote.outerHeight() + 20; }
        $quoteWrap.css('height', initHeight);
    }); $('.unit.quote li').click(function (e) { e.preventDefault; if ($(window).width() > 850) { quoteIndex = $(this).index(); $('.unit.quote .quotes blockquote').removeClass('active'); var $incoming = $('.unit.quote .quotes blockquote:eq(' + quoteIndex + ')'); var incomingHeight = $incoming.outerHeight() + 140; $quoteWrap.css('height', incomingHeight); $incoming.addClass('active'); } }); $('.page-careers [data-toggle="collapse"]').click(function (e) { e.preventDefault(); if ($(this).parent('.opening').hasClass('is-open')) { $(this).parent('.opening').removeClass('is-open'); } else { $(this).parent('.opening').addClass('is-open'); } }); $(document.body).on('click', '.auto-scroll', function (e) { e.preventDefault(); $target = $(this).attr('href'); $('html, body').animate({ scrollTop: $($target).offset().top - 85 }, 400); });
});