var Grid = [],
    allShirts = {};

Vue.config.debug = false;

var ShirtGallery = {
    load: function(page) {
      var self = this;
      $('.spinner-wrap span').text('');
      this.spinner('show');

      $('#btn-sg-prev, #btn-sg-next').addClass('disabled');
      for (i = 0; i < Grid.length; i++) {
        $('#grid'+i).hide();
        $('#grid'+i+' .merch-block').hide();
      }

      if (sg_search_phrase.length > 0) {
        $('.spinner-wrap span').text('Searching shirt gallery for “'+$('#input_search').val()+'”');
        $.ajax({
          url: BASE_URL+"shirt-gallery2.php",
          dataType: "json",
          data: {
            action: 'get-shirts-via-search',
            page: page,
            search_phrase: sg_search_phrase
          },
          type: "post",
          success: function(data) {
            if (Grid[0] == undefined) {
              Grid[0] = new Vue({
                  el: '#grid0',
                  data: {
                    shirts: {}
                  },
                  methods: {
                    currency: function (amount) {
                      return currencyRound(amount);
                    }
                  }
              });
            }

            Grid[0].$set('shirts', data[0].shirts);
            $('#grid0').show();

            $('.no-results-sc-1, .no-results-sc-2').find('span').text(getURLParamByName('search'));
            if (data[0].shirts.length == 0) {
              $('.no-results').html($('.no-results-sc-1').html()).show();
              $('#btn-sg-prev').removeClass('disabled');
            }
            else if (data[0].shirts.length > 0 && data[0].shirts.length < 60) {
              $('.no-results').html($('.no-results-sc-2').html()).show();
              $('#btn-sg-prev').removeClass('disabled');
            }
            else {
              $('#btn-sg-prev, #btn-sg-next').removeClass('disabled');
              $('html, body').stop().animate({scrollTop: 0}, 400);
            }

            $('#grid0').addClass('last');

            self.pagination(page, 1);
            $('.spinner-wrap span').text('');
            self.spinner('hide');
          }
        });
      }
      else {
        $.ajax({
          url: BASE_URL+"shirt-gallery2.php",
          dataType: "json",
          data: {
            action: 'get-shirts-via-filters',
            page: page,
            filters: sg_filters
          },
          type: "post",
          success: function(data) {
            for (var i = 0; i < data.length; i++) {
              if (Grid[i] == undefined) {
                Grid[i] = new Vue({
                    el: '#grid'+i,
                    data: {
                      shirts: {}
                    },
                    methods: {
                      currency: function (amount) {
                        return currencyRound(amount);
                      }
                    }
                });
              }

              if (data[i].merch != 0) {
                $merch = $('#grid'+i+' .merch-block');
                $merch.find('figure').css('background-image', 'url("'+data[i].merch.img+'")');
                $merch.find('.title').html(data[i].merch.title);
                $merch.find('.desc').html(data[i].merch.desc);
                $merch.find('.img-bottom img').attr('src', data[i].merch.img);
                if (data[i].merch.link.length > 0) {
                  $merch.find('.link1 .block-link').attr('href', data[i].merch.link).text(data[i].merch.link_text);
                  $merch.find('.link2').attr('href', data[i].merch.link);
                  $merch.find('.link1, .link2').show();
                }
                else {
                  $merch.find('.link1, .link2').hide();
                }
                $merch.show();
              }

              Grid[i].$set('shirts', data[i].shirts);
              $('#grid'+i).show();

              if (data[i].merch == 0) {
                if (data[0].shirts.length == 0) {
                  $('.no-results').html($('.no-results-sc-3').html()).show();
                  $('#btn-sg-prev').removeClass('disabled');
                }
                else if (data[0].shirts.length > 0 && data[0].shirts.length < 60) {
                  $('.no-results').html($('.no-results-sc-4').html()).show();
                  $('#btn-sg-prev').removeClass('disabled');
                }
                else {
                  $('#btn-sg-prev, #btn-sg-next').removeClass('disabled');
                  $('html, body').stop().animate({scrollTop: 0}, 400);
                }
              }
              else {
                $('#btn-sg-prev, #btn-sg-next').removeClass('disabled');
                $('html, body').stop().animate({scrollTop: 0}, 400);
              }

              if ((i + 1) == data.length) {
                $('#grid'+i).addClass('last');
              }

              self.pagination(page, 1);
              self.spinner('hide');
            }
          }
        });
      }
    },
    pagination: function(page, numbers) {
      if (page == 1) {
        $('#btn-sg-prev').addClass('disabled');
      }
      Pagination.$set('current_page', next_page)
    },
    spinner: function(action) {
      if (action == 'show') {
        $('html, body').stop().animate({scrollTop: 0}, 0);
        $('body').attr('data-loading', 'true');
      }
      else {
        $('body').attr('data-loading', 'false');
      }
    }
}

var Route = {
    base_url: function() {
        base_url_uc = BASE_URL;
        return base_url_uc.substring(0, base_url_uc.length - 1);
    },
    update: function(param) {
        window.history.pushState('', '', this.base_url()+param);
    },
    last_hash: function() {
        return window.location.pathname[window.location.pathname.length-1] == '/';
    }
}

$(document).ready(function() {

  var $filterToggle = $('.filter-toggle'),
      $searchToggle = $('.header-search'),
      $filterPanel = $('.category .filter'),
      $search = $('.search'),
      $clearSearch = $('.clear-search'),
      $backToTop = $('.back-to-top'),
      $body = $(document.body);

    ShirtGallery.load(next_page);

  	$(window).scroll( function() {
  	  var fromtheTop = $(this).scrollTop();
  	  if (fromtheTop > 250) {
  	    $body.addClass('is-scrolled');
  	    $backToTop.addClass('is-shown');
  	  } else {
  	    $body.removeClass('is-scrolled');
  	    $backToTop.removeClass('is-shown');
  	  }
  	});

    $backToTop.click(function(e) {
      e.preventDefault();
      $('html, body').stop().animate({scrollTop: 0}, 400);
      return false;
    });

    // Filter, Search, Sort toggles
    // Currently on /dress-shirts/ and /fabrics/

    $filterToggle.click(function(e){
      e.preventDefault();
      $(this).toggleClass('active');
      var offset = $(this).offset();
      if (! $('.shirt-gallery').hasClass('is-filtered') ) {
        $filterPanel.toggleClass('show');
        $('.filter-anchor').toggleClass('show');
        if ($(window).width() > 850) {
          $filterPanel.css('left', offset.left + 41);
          $('.filter-anchor').css('left', offset.left + 41);
        }
      } else {
        $filterPanel.toggleClass('show');
        $('.filter-anchor').toggleClass('show');
      }
      $body.addClass('filter-open');
    });

    $( window ).resize(function() {
      var offset = $filterToggle.offset();
      if (! $('.shirt-gallery').hasClass('is-filtered') ) {
        if ($(window).width() > 850) {
          $filterPanel.css('left', offset.left + 41);
          $('.filter-anchor').css('left', offset.left + 41);
        }
      }
    });

    // When click search toggle, open/show search field and auto-focus input.

		$searchToggle.click(function(e){
      e.preventDefault();
			$(this).closest('.crumbs').addClass('search-active');
			$search.focus();
    });

		// Clear Search Field on click

    $clearSearch.click(function() {
        $search.val('').removeClass('not-empty').change();
        $search.blur();
        fabricGrid.$set('fabrics', allFabrics);
        Route.update('');
    });

    $('.filter-close').click(function(e){
      e.preventDefault();
      $filterToggle.removeClass('active');
      $filterPanel.removeClass('show');
      $body.removeClass('filter-open');
    });

    $('#sort-by').on('change', function() {
			// This is a duplicate select to help auto-set the select box width based on the selected option
			// http://jsfiddle.net/FSsG8/444/
			var selectText = $("#select-mask-option").html($('#sort-by option:selected').text());
	    $(this).width($("#select-mask").width());
      fabricFilters();
    });

    $('.clear-filter').click(function() {
      var $this = $(this);
      $this.removeClass('show');
      $this.parent().parent().find('input:checked').attr('checked', false);
      fabricFilters();
    });

    $search.on('blur', function(){
			if (! $search.hasClass('not-empty')) {
				$(this).closest('.crumbs').removeClass('search-active');
			}
		});

    $('#btn-sg-next').click(function(e) {
      e.preventDefault();
      next_page++;
      ShirtGallery.load(next_page);

      if (sg_search_phrase.length > 0) {
        if (Route.last_hash())
          Route.update(window.location.pathname+'?search='+sg_search_phrase+'&page='+next_page);
        else
          Route.update(window.location.pathname+'/?search='+sg_search_phrase+'&page='+next_page);
      }
      else {
        if (Route.last_hash())
          Route.update(window.location.pathname+'?page='+next_page);
        else
          Route.update(window.location.pathname+'/?page='+next_page);
      }
    });

    $('#btn-sg-prev').click(function(e) {
      e.preventDefault();
      next_page--;
      ShirtGallery.load(next_page);

      if (sg_search_phrase.length > 0) {
        if (Route.last_hash())
          Route.update(window.location.pathname+'?search='+sg_search_phrase+'&page='+next_page);
        else
          Route.update(window.location.pathname+'/?search='+sg_search_phrase+'&page='+next_page);
      }
      else {
        if (Route.last_hash())
          Route.update(window.location.pathname+'?page='+next_page);
        else
          Route.update(window.location.pathname+'/?page='+next_page);
      }
    });

    // $('#btn_search_display').click(function(e) {
    //     e.preventDefault();
    //     $('#filter_xs_block, #line_to_block_filter_xs').hide();
    //     $('#search_block').slideToggle(200, function() {
    //         if ($('#search_block').is(':visible')) {
    //             $('#line_to_block_search').show();
    //             $('#input_fabric_search').focus();
    //         }
    //         else {
    //             $('#line_to_block_search').hide();
    //         }
    //     });
    // });

    // $('#btn_filters_display').click(function(e) {
    //     e.preventDefault();
    //     $('.gallery-filter-block').slideToggle();
    // });

    $search.on('keyup paste', function() {
        if(!$.trim(this.value).length) {
          $(this).removeClass('not-empty');
        }
        else {
          $(this).addClass('not-empty');
        }
        $('html, body').stop().animate({scrollTop: 0}, 400);
        Route.update('/dress-shirts?search='+$(this).val());
    });

    $('.clear-search').off().click(function() {
        $search.val('').removeClass('not-empty').change();
        $search.blur();
        Route.update('/dress-shirts');
        document.location.reload();
    });

    if (getURLParamByName('search') != null) {
        if (getURLParamByName('search').length > 0) {
          $('.search-toggle').click();
          $('#input_search').addClass('not-empty').focus();
        }
    }

    // $(window).on('popstate', function() {
        // document.location.reload();
    // });
});

function getURLParamByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var Pagination = new Vue({
  el: '.page-number',
  data: {
    current_page: next_page
  }
});
