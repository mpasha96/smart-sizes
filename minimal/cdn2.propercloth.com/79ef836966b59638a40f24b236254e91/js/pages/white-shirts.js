jQuery(document).ready(function ($) {
    $('body').addClass('is-ready');
});

var qnum = 1;

var app = new Vue({
    el: '#app',
    data: {
        shirts: allShirts,
        thePath: '',
        whatTemp: '',
        whatTexture: '',
        howMuch: '',
        isSoft: '',
        isBDC: '',
        theStyle: '',
        isWrinkleResistant: '',
        isEuro: '',
        doCuffs: '',
        isMatte: '',
        isTux: '',
        whatTuxFront: '',
        isItalian: '',
        hasCuffLinks: '',

        casualPath: false,
        bizPath: false,
        formalPath: false,

        showPlay_whatTexture: false,
        showPlay_howMuch: false,
        showPlay_isSoft: false,
        showPlay_isBDC: false,

        showWork_whatTemp: false,
        showWork_isWrinkleResistant: false,
        showWork_isWrinkleResistant2: false,
        showWork_isOpaque: false,
        showWork_whatTexture: false,
        showWork_whatTexture2: false,
        showWork_howMuch: false,
        showWork_howMuch2: false,
        showWork_howMuch3: false,
        showWork_howMuch4: false,
        showWork_isEuro: false,
        showWork_doCuffs: false,
        showWork_isMatte: false,
        showWork_isSoft: false,
        showWork_isBDC: false,
        showWork_noMatterPrice: false,

        showFormal_whatTuxFront: false,
        showFormal_whatTexture: false,
        showFormal_howMuch: false,
        showFormal_isItalian: false,
        showFormal_hasCuffLinks: false,
        showFormal_isMatte: false,
        showFormal_howMuch2: false,
        showFormal_howMuch3: false,
    },
    watch: {
        whatTemp: function() {
          if (this.thePath == 'play') {
            if (this.whatTemp == 'hot') {
              this.showPlay_whatTexture = true;
            }
            if (this.whatTemp == 'cold') {
              this.showPlay_howMuch = true;
            }
          }

          if (this.thePath == 'work') {
            if (this.theStyle == 'casual') {
              if (this.whatTemp == 'hot') {
                this.showWork_whatTexture = true;
              }
              else {
                this.showWork_howMuch = true;
              }
            }
          }
        },

        whatTexture: function() {
          if (this.thePath == 'play') {
            if (this.whatTemp == 'hot') {
              if (this.whatTexture == 0) {
                this.showPlay_howMuch = true;
              }
            }
          }

          if (this.thePath == 'work') {
            if (this.theStyle == 'casual') {
              if (this.whatTemp == 'hot') {
                if (this.whatTexture == 0) {
                  this.showWork_howMuch = true;
                }
              }
            }
            if (this.theStyle == 'business') {
              if (this.isWrinkleResistant == 'y') {
                if (this.isOpaque == 'n') {
                  if (this.whatTexture == 0) {
                    this.showWork_doCuffs = true;
                  }
                  if (this.whatTexture == 1) {
                    this.showWork_isEuro = true;
                  }
                  if (this.whatTexture == 2) {
                    this.showWork_howMuch = true;
                  }
                }
              }

              if (this.isWrinkleResistant == 'n') {
                if (this.isOpaque == 'n') {
                  if (this.whatTexture == 0) {
                    this.showWork_howMuch2 = true;
                  }
                  if (this.whatTexture == 1) {
                    this.showWork_isMatte = true;
                  }
                }
              }
            }
          }

          if (this.thePath == 'event') {
            if (this.isTux == 'y') {
              if (this.whatTuxFront == 3) {
                if (this.whatTexture == 0) {
                  this.showFormal_howMuch2 = true;
                }
                if (this.whatTexture == 1) {
                  this.showFormal_howMuch3 = true;
                }
                if (this.whatTexture == 2) {
                  this.showFormal_howMuch2 = true;
                }
              }
            }
            if (this.isTux == 'n') {
              if (this.whatTexture == 0) {
                this.showFormal_hasCuffLinks = true;
              }
              if (this.whatTexture == 1) {
                this.showFormal_isMatte = true;
              }
              if (this.whatTexture == 2) {
                this.showFormal_hasCuffLinks = true;
              }
            }
          }
        },

        howMuch: function() {
          if (this.thePath == 'play') {
            if (this.whatTemp == 'cold') {
              if (this.howMuch == 101) {
                this.showPlay_isSoft = true;
              }
              else {
                this.showPlay_isBDC = true;
              }
            }
          }

          if (this.thePath == 'work') {
            if (this.theStyle == 'casual') {
              if (this.whatTemp == 'cold') {
                if (this.howMuch == 100) {
                  this.showWork_isBDC = true;
                  this.showWork_isSoft = false;
                }
                else {
                  this.showWork_isSoft = true;
                  this.showWork_isBDC = false;
                }
              }
            }

            if (this.theStyle == 'business-casual') {
              if (this.isOpaque == 'n') {
                if (this.howMuch == 130) {
                  this.showWork_isBDC = true;
                }
                if (this.howMuch == 131) {
                  this.showWork_isBDC = true;
                }
              }
            }
          }
        },

        theStyle: function() {
          if (this.thePath == 'work') {
            if (this.theStyle == 'casual') {
              this.showWork_whatTemp = true;
            }
          }

          if (this.thePath == 'work') {
            if (this.theStyle == 'business-casual') {
              this.showWork_isOpaque = true;
            }
          }

          if (this.thePath == 'work') {
            if (this.theStyle == 'business') {
              this.showWork_isWrinkleResistant = true;
            }
          }
        },

        isOpaque: function() {
          if (this.thePath == 'work') {
            if (this.theStyle == 'business-casual') {
              if (this.isOpaque == 'n') {
                this.showWork_howMuch3 = true;
              }
            }
          }

          if (this.thePath == 'work') {
            if (this.theStyle == 'business') {
              if (this.isWrinkleResistant == 'y') {
                if (this.isOpaque == 'y') {
                  this.showWork_howMuch = true;
                }
                if (this.isOpaque == 'n') {
                  this.showWork_whatTexture2 = true;
                }
              }

              if (this.isWrinkleResistant == 'n') {
                if (this.isOpaque == 'y') {
                  this.showWork_noMatterPrice = true;
                }
                if (this.isOpaque == 'n') {
                  this.showWork_whatTexture2 = true;
                }
              }
            }
          }
        },

        isWrinkleResistant: function() {
          if (this.thePath == 'work') {
            if (this.theStyle == 'business') {
              if (this.isWrinkleResistant == 'y') {
                this.showWork_isOpaque = true;
              }
              else {
                this.showWork_isOpaque = true;
              }
            }
          }
        },

        isTux: function() {
          if (this.thePath == 'event') {
            if (this.isTux == 'y') {
              this.showFormal_whatTuxFront = true;
            }
            if (this.isTux == 'n') {
              this.showFormal_whatTexture = true;
            }
          }
        },

        whatTuxFront: function() {
          if (this.thePath == 'event') {
            if (this.isTux == 'y') {
              if (this.whatTuxFront == 1) {
                this.showFormal_howMuch = true;
              }
              if (this.whatTuxFront == 2) {
                this.showFormal_isItalian = true;
              }
              if (this.whatTuxFront == 3) {
                this.showFormal_whatTexture = true;
              }
            }
            else {
              this.showFormal_whatTexture = true;
            }
          }
        },

        hasCuffLinks: function() {
          if (this.thePath == 'event') {
            if (this.isTux == 'y') {
              //
            }
            if (this.isTux == 'n') {
              if (this.whatTexture == 0) {
                if (this.hasCuffLinks == 'y') {
                  this.showFormal_isItalian = true;
                }
                if (this.hasCuffLinks == 'n') {
                  this.showFormal_isItalian = true;
                }
              }
              if (this.whatTexture == 1) {
                if (this.isMatte == 'y') {
                  if (this.hasCuffLinks == 'y') {
                    this.showFormal_howMuch2 = false;
                  }
                  if (this.hasCuffLinks == 'n') {
                    this.showFormal_howMuch2 = true;
                  }
                }
              }
              if (this.whatTexture == 2) {
                if (this.hasCuffLinks == 'y') {

                }
                if (this.hasCuffLinks == 'n') {
                  this.showFormal_howMuch2 = true;
                }
              }
            }
          }
        },

        isMatte: function() {
          if (this.thePath == 'work') {
            if (this.theStyle == 'business') {
              if (this.isWrinkleResistant == 'n') {
                if (this.isOpaque == 'n') {
                  if (this.whatTexture == 1) {
                    if (this.isMatte == 'n') {
                      this.showWork_howMuch4 = true;
                    }
                  }
                }
              }
            }

            if (this.theStyle == 'business') {
              if (this.isWrinkleResistant == 'y') {
                if (this.isOpaque == 'n') {
                  if (this.whatTexture == 1) {
                    if (this.isEuro == 'n') {
                      if (this.isMatte == 'n') {
                        this.showWork_doCuffs = true;
                      }
                    }
                  }
                }
              }
            }
          }

          if (this.thePath == 'event') {
            if (this.isTux == 'n') {
              if (this.whatTexture == 1) {
                if (this.isMatte == 'y') {
                  this.showFormal_hasCuffLinks = true;
                }
                if (this.isMatte == 'n') {
                  this.showFormal_hasCuffLinks = true;
                }
              }
            }
          }
        },

        noMatterPrice: function() {
          if (this.thePath == 'work') {
            if (this.theStyle == 'business') {
              if (this.isWrinkleResistant == 'n') {
                if (this.isOpaque == 'y') {
                  if (this.noMatterPrice == '100') {
                    this.showWork_doCuffs = true;
                  }
                }
              }
            }
          }

          if (this.thePath == 'work') {
            if (this.theStyle == 'business') {
              if (this.isWrinkleResistant == 'n') {
                if (this.isOpaque == 'y') {
                  if (this.noMatterPrice == 199) {
                    this.showWork_doCuffs = true;
                  }
                }
              }
            }
          }
        },

        isBDC: function() {
          if (this.thePath == 'work') {
            if (this.theStyle == 'business-casual') {
              if (this.isOpaque == 'n') {
                if (this.howMuch == 130) {
                  if (this.isBDC == 'n') {
                    this.showWork_isWrinkleResistant2 = true;
                  }
                  // else {
                    // this.showWork_isWrinkleResistant2 = true;
                  // }
                }
              }
            }
          }
        },

        isEuro: function() {
          if (this.thePath == 'work') {
            if (this.theStyle == 'business') {
              if (this.isWrinkleResistant == 'y') {
                if (this.isOpaque == 'n') {
                  if (this.whatTexture == 1) {
                    if (this.isEuro == 'n') {
                      this.showWork_isMatte = true;
                    }
                  }
                }
              }
            }
          }
        },
    },
    methods: {
        init: function() {
          this.thePath = '';
          this.whatTemp = '';
          this.whatTexture = '';
          this.howMuch = '';
          this.isSoft = '';
          this.isBDC = '';
          this.theStyle = '';
          this.whatTemp = '';
          this.isWrinkleResistant = '';
          this.isEuro = '';
          this.doCuffs = '';
          this.isMatte = '';
          this.isTux = '';
          this.whatTuxFront = '';
          this.isItalian = '';
          this.hasCuffLinks = '';

          this.casualPath = false;
          this.bizPath = false;
          this.formalPath = false;

          this.showPlay_whatTexture = false;
          this.showPlay_howMuch = false;
          this.showPlay_isSoft = false;
          this.showPlay_isBDC = false;

          this.showWork_whatTemp = false;
          this.showWork_isWrinkleResistant = false;
          this.showWork_isWrinkleResistant2 = false;
          this.showWork_isOpaque = false;
          this.showWork_whatTexture = false;
          this.showWork_whatTexture2 = false;
          this.showWork_howMuch = false;
          this.showWork_howMuch2 = false;
          this.showWork_howMuch3 = false;
          this.showWork_howMuch4 = false;
          this.showWork_isEuro = false;
          this.showWork_doCuffs = false;
          this.showWork_isMatte = false;
          this.showWork_isSoft = false;
          this.showWork_isBDC = false;
          this.showWork_noMatterPrice = false;

          this.showFormal_whatTuxFront = false;
          this.showFormal_whatTexture = false;
          this.showFormal_howMuch = false;
          this.showFormal_isItalian = false;
          this.showFormal_hasCuffLinks = false;
          this.showFormal_isMatte = false;
          this.showFormal_howMuch2 = false;
          this.showFormal_howMuch3 = false;

          $('input[type="radio"]').attr('checked', false);
        },
        setFilter: function(event) {
            var self = this;

            setTimeout(function() {
              var $currentParent = $('.is-current').closest('.question');

              if ($currentParent.next().length > 0) {
                if ($currentParent.hasClass('start')) {
                  var path = event.target.value;
                  $currentParent.addClass('answered');
                  $currentParent.removeClass('is-current');
                  $currentParent.siblings(".path."+path).find('.question').first().addClass('is-current');

                  if (path == 'play') {
                    self.casualPath = true;
                    self.theStyle = "casual";
                  } else if (path == 'event') {
                    self.formalPath = true;
                    self.theStyle = "event";
                  } else {
                    self.bizPath = true;
                  }
                } else {
                  $currentParent.addClass('answered');
                  $currentParent.removeClass('is-current');
                  $currentParent.next().addClass('is-current').removeClass('is-hidden');
                }
              }

              if (qnum > 0) {
                $('.prev').addClass('show');
                $('.clear-all').addClass('show');
              }

              if (qnum > 2) {
                $('.shirt img').each( function( index, element ){
                  shirtURL = $(this).attr('data-src');
                  $(this).attr('src',shirtURL);
                  $(this).addClass('is-shown');
                });
              }

              if (qnum == 2) {
                $('.img-bg.one').addClass('is-shown');
              } else if (qnum == 4) {
                $('.img-bg.two').addClass('is-shown');
              } else if (qnum == 6) {
                $('.img-bg.three').addClass('is-shown');
              } else if (qnum == 8) {
                $('.img-bg.four').addClass('is-shown');
              }
              qnum ++;
            }, 90);

            if ($('.question input:checked').length > 0) {
                var shirts_arr = {},
                    shirts_current_arr = {},
                    shirts_default_arr = {},
                    final_shirts_arr = [],
                    filter_category = '';

                for (var key in allShirts) {
                    shirts_default_arr[key] = '';
                }

                $('.question input:checked').each(function(i, el) {
                    var $el = $(el);

                    if (filter_category.length > 0) {
                      if (filter_category != $el.data('filter')) {
                        shirts_current_arr = shirts_arr;
                        filter_category = $el.data('filter');
                        shirts_arr = {};
                      }
                    }
                    else {
                      shirts_current_arr = shirts_default_arr;
                      filter_category = $el.data('filter');
                    }

                    for (var k in shirts_current_arr) {
                      switch ($el.data('rule')) {
                        case '==':
                          if ($el.data('filter') == 'texture') {
                            if (($('.start input[name="thePath"]:checked').val() == 'play' || ($('.start input[name="thePath"]:checked').val() == 'work' && $('.work input[name="whatTemp2"]:checked').val() == 'hot')) && $el.val() == 0) {
                              if (allShirts[k][$el.data('filter')].indexOf(' 1 ') > -1 || allShirts[k][$el.data('filter')].indexOf(' '+$el.val()+' ') > -1) {
                                shirts_arr[k] = '';
                              }
                            }
                            else {
                              if (allShirts[k][$el.data('filter')].indexOf(' '+$el.val()+' ') > -1) {
                                shirts_arr[k] = '';
                              }
                            }
                          }
                          else {
                            if (allShirts[k][$el.data('filter')].indexOf(' '+$el.val()+' ') > -1) {
                              shirts_arr[k] = '';
                            }
                          }
                          break;
                        case '<':
                          if (parseInt(allShirts[k][$el.data('filter')]) < $el.val()) {
                            shirts_arr[k] = '';
                          }
                          break;
                        case '>':
                          if (parseInt(allShirts[k][$el.data('filter')]) > $el.val()) {
                            shirts_arr[k] = '';
                          }
                          break;
                        case '<=':
                          if (parseInt(allShirts[k][$el.data('filter')]) <= $el.val()) {
                            shirts_arr[k] = '';
                          }
                          break;
                        case '>=':
                          if (parseInt(allShirts[k][$el.data('filter')]) >= $el.val()) {
                            shirts_arr[k] = '';
                          }
                          break;
                        case '>=<=':
                          var filter_value = $el.val().split('|');
                          if (parseInt(allShirts[k][$el.data('filter')]) >= parseInt(filter_value[0]) && parseInt(allShirts[k][$el.data('filter')]) <= parseInt(filter_value[1])) {
                            shirts_arr[k] = '';
                          }
                          break;
                      }
                    }

                });

                for (var k in shirts_arr) {
                    final_shirts_arr.push(allShirts[k]);
                }

                self.shirts = final_shirts_arr;

                setTimeout(function() {
                  self.showShirts();
                }, 100);
            }
        },
        showShirts: function() {
          if ($('.'+$('input[name="thePath"]:checked').val()+' .is-current input:checked').length == 1) {
            $('.answers').addClass('is-shown');
            $('body').addClass('answers-shown');
          } else {
            $('.answers').removeClass('is-shown');
            $('body').removeClass('answers-shown');
          }
        },
        currency: function (amount) {
          return currencyRound(amount);
        }
    }
});

var path = '';

// $('.question input[type="radio"]').on('change', function(e){
//   e.preventDefault();
//   var $currentParent = $(this).closest('.question');

//   if ($currentParent.hasClass('start')) {
//     path = $(this).val();
//     $currentParent.addClass('answered');
//     $currentParent.removeClass('is-current');
//     $currentParent.siblings('.path.'+ path +'').find('.question').first().addClass('is-current');
//     if (path == 'play') {
//       app.casualPath = true;
//       app.theStyle = "casual";
//     } else if (path == 'event') {
//       app.formalPath = true;
//       app.theStyle = "event";
//     } else {
//       app.bizPath = true;
//     }
//   } else {
//     $currentParent.addClass('answered');
//     $currentParent.removeClass('is-current');
//     $currentParent.next().addClass('is-current').removeClass('is-hidden');
//   }

//   if (qnum > 0) {
//     $('.prev').addClass('show');
//     $('.clear-all').addClass('show');
//   }

//   if (qnum == 2) {
//     $('.img-bg.one').addClass('is-shown');
//   } else if (qnum == 4) {
//     $('.img-bg.two').addClass('is-shown');
//   } else if (qnum == 6) {
//     $('.img-bg.three').addClass('is-shown');
//   } else if (qnum == 8) {
//     $('.img-bg.four').addClass('is-shown');
//   }
//   qnum ++;
// });

$startQ = $('.question.start');

$('.prev').on('click', function(e){
  e.preventDefault();
  var $currentParent = $('.question.is-current');
  if ($currentParent.hasClass('first-in-path')) {
    // in this case, need to go to start question
    $currentParent.find('input[type="radio"]').attr('checked', false);
    $('.questions .question').removeClass('is-current');
    $startQ.find('input[type="radio"]').attr('checked', false);
    $startQ.removeClass('answered');
    $startQ.addClass('is-current');
  } else {
    $currentParent.find('input[type="radio"]').attr('checked', false);
    $('.questions .question').removeClass('is-current');
    $currentParent.prev().removeClass('answered');
    $currentParent.prev().addClass('is-current');
    $('.answers').removeClass('is-shown');
  }
  qnum --;
  if (qnum == 1) {
    $('.prev').removeClass('show');
    $('.clear-all').removeClass('show');
  }
});

$('.clear-all').on('click', function(e){
  e.preventDefault();
  document.location.reload();
  return false;

  qnum = 1;
  $('input[type="radio"]').attr('checked', false);
  $('.questions .question').removeClass('is-current').addClass('is-hidden');
  $('.questions .question').removeClass('answered');
  $startQ.addClass('is-current').removeClass('is-hidden');
  // $('.prev').removeClass('show');
  $('.clear-all').removeClass('show');
  $('.shirt img').removeClass('is-shown');
  $('.answers').removeClass('is-shown');
  $('body').removeClass('answers-shown');
  $('.img-bg').removeClass('is-shown');
  app.init();

  setTimeout(function(){
    app.shirts = allShirts;
  }, 50);
});

$('.enter').click(function(e){
  e.preventDefault();
  $('.intro').addClass('is-hidden');
});

$('.debug input').change(function(e){
  $('.answers-log').toggleClass('is-shown');
});
