(function(algolia) {
  'use strict';
  if (!algolia.config.autocomplete_enabled) return;

  var algoliasearch = algolia.externals.algoliasearch;
  var autocomplete = algolia.externals.autocomplete;
  var aa = algolia.externals.aa;

  var client = algoliasearch(
    algolia.config.app_id,
    algolia.config.search_api_key
  );

  function createMultiQuerySource() {
    let queue = [];
    let lastResults = [];
    let lastSearch = Promise.resolve();

    function requestSearch(index) {
      return Promise.resolve()
        .then(() => {
          if (queue.length) {
            lastSearch = client.search(queue);
            queue = [];
          }
          return lastSearch;
        })
        .then((result) => {
          if (result) {
            lastResults = result.results;
          }
          return lastResults[index];
        });
    }


    return function multiQuerySource(singleIndex, params, extendHits = null) {
      return function search(query, cb) {
        sessionStorage.setItem('algoliaSearchQuery', query);

        if (query.length >= 3) {
          const index =
            queue.push({
              indexName: singleIndex.indexName,
              query,
              params
            }) - 1;
          requestSearch(index)
            .then((res) => {
              var extendedHits = [];

              if (extendHits) {
                extendedHits = extendHits(res);
              } else {
                extendedHits = res.hits
              }

              if (res.hits.length > 0) {
                let algolia_festive_arr = Shopify.algolia_festive;
                algolia_festive_arr = JSON.parse(algolia_festive_arr);
                let festive_query_list = [];
                let custom_query = query.trim();
                custom_query = custom_query.toLowerCase();
                let search_query = '';

                for (let i = 0; i < algolia_festive_arr.length; i++) {
                  search_query = algolia_festive_arr[i].search_query;
                  search_query = search_query.toLowerCase();
                  search_query = search_query.split(',');
                  if (Array.isArray(search_query)) {
                    festive_query_list = festive_query_list.concat(search_query);
                  } else {
                    festive_query_list.push(search_query);
                  }
                }
                festive_query_list = festive_query_list.map(element => {
                  return element.trim();
                });

                function copyToClipboard(element) {
                  var $temp = $("<input>");
                  $("body").append($temp);
                  $temp.val($(element).text()).select();
                  document.execCommand("copy");
                  $temp.remove();
                }

                setTimeout(function() {
                  for (let i = 0; i < algolia_festive_arr.length; i++) {
                    search_query = algolia_festive_arr[i].search_query;
                    search_query = search_query.toLowerCase();
                    search_query = search_query.split(',');
                    search_query = search_query.map(element => {
                      return element.trim();
                    });

                    if (search_query.includes(custom_query)) {

                      let text_alignment_class = "";
                      let text_alignment = algolia_festive_arr[i].text_alignment;
                      if( text_alignment == "left"){
                        text_alignment_class = "text_align_left";
                      }else if( text_alignment == "right"){
                        text_alignment_class = "text_align_right";
                      }else{
                        text_alignment_class = "text_align_center";
                      }

                      let copy_icon = '<svg class="coupon_code_wrapper 123123123" id="copy_svg_icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312.36 389.98"><path d="M322.17,242c6.91,1.86,13.4,4.44,18.37,9.94,6,6.67,8.32,14.57,8.31,23.41q-.06,86,0,172.09c0,28.05.05,56.09,0,84.14,0,15.73-9,27.44-23.86,31.22a28,28,0,0,1-7.91.74c-5.1-.19-8.91-4-9.64-9.12a10.62,10.62,0,0,1,6.82-11.49,14.33,14.33,0,0,1,1.46-.41c10.72-2.64,11.64-3.83,11.64-14.93q0-125.27,0-250.53a36.9,36.9,0,0,0-.42-5.66,8.29,8.29,0,0,0-7.45-7.46,29.74,29.74,0,0,0-4.9-.42q-87.19,0-174.4,0a20.55,20.55,0,0,0-6.75.82c-4.2,1.48-5.56,5.12-6.14,9.26-1,6.74-5.89,10.67-12,9.82s-9.9-5.94-9.22-12.64c1.48-14.74,10.62-25,25.15-28.19a8,8,0,0,0,1.34-.6Z" transform="translate(-36.49 -242)"/><path d="M36.5,471.23q0-64.17,0-128.33c0-13.34,5.43-23.76,17.73-29.44a37.27,37.27,0,0,1,15.06-3.11q88.74-.32,177.48-.1c19.85,0,32.7,13.22,32.71,33.15q0,127.76,0,255.52c0,20.07-13.05,33-33.2,33.05q-88.35,0-176.71,0c-20.07,0-33.07-13.05-33.08-33.17Q36.47,535,36.5,471.23Zm21.43-.37v74.26q0,26.83,0,53.69c0,4.61,1.12,8.74,5.76,10.59a19.78,19.78,0,0,0,7.1,1q87,.06,174.05,0c9.95,0,13-3,13-12.9V344.63c0-9.75-3-12.82-12.65-12.82H70.8c-9.83,0-12.87,3.07-12.87,13Z" transform="translate(-36.49 -242)"/></svg>';

                      res = `<div class="algolia-no-result-container algolia-no-result-festive ${text_alignment_class}"  style="background-image:url(${algolia_festive_arr[i].coupon_url});background-repeat:no-repeat;"> <h3> ${algolia_festive_arr[i].message}</h3> <div class="algolia-coupon-container 123123"><p class="para_1"> ${algolia_festive_arr[i].message2}</p> <div class="coupon-code"> <span class="coupon_code_wrapper">Use Code&nbsp;<span class="coupon_code">${algolia_festive_arr[i].coupon_code}</span>&nbsp;${copy_icon}</span></div> <p> ${algolia_festive_arr[i].coupon_value}</p> </div> </div>`;
                      
                    }

                    setTimeout(function() {
                      let copyText = document.querySelector(".coupon_code");
                      copyToClipboard(copyText);
                    }, 1000);
                  }
                  if (document.querySelectorAll('.algolia-no-result-festive').length > 0) {
                    $('.algolia-no-result-festive').remove();
                  }
                  $('.aa-dataset-products').prepend(res);
                }, 500)

                /* Code for copying coupon code */

                $('.algolia-autocomplete').on('click', '.algolia-no-result-festive .coupon-code .coupon_code_wrapper', function() {
                  const current_date = new Date();
                  let coupon_code = $('.algolia-autocomplete .coupon_code').html();

                  // Removing cookie value if alreadt exists

                  current_date.setTime(current_date.getTime());
                  const current_time = current_date.toUTCString();
                  document.cookie = "discount_code='';expires=" + current_time;

                  // Seeting cookie for 24 hrs
                  let next_day = current_date.setTime(current_date.getTime() + (1 * 24 * 60 * 60 * 1000));
                  document.cookie = "discount_code=" + coupon_code + ";expires=" + next_day;
                  $('.dis_code_copy_msg').remove();

                  let copyText = document.querySelector(".coupon_code");
                  copyToClipboard(copyText);

                  $('<p class="dis_code_copy_msg">Copied! Discount will be applied on checkout.</p>').insertAfter('.algolia-coupon-container > :last-child')
                  setTimeout(function() {
                    $(".dis_code_copy_msg").css("display", "none")
                  }, 2000);
                });
                // }
                setTimeout(function() {
                $('#btn-back-to-top').addClass('search_div');
                $(".aa-dropdown-menu-size-sm .aa-dataset-products.container.aa-right-column").scroll(function(e){
                this.scrollTop >= 1000?$("#btn-back-to-top").css({"display":"flex","z-index":"999"}):$("#btn-back-to-top").removeAttr('style');
                    })
                    $('#btn-back-to-top.search_div').click(function () {
                      $(".aa-dropdown-menu-size-sm .aa-dataset-products.container.aa-right-column").animate({ scrollTop: 0 }, "fast");
                      clevertap.event.push('Back to Top clicked');
                    });
                  }, 2000);
                let queryList = [];
                let storedQuery = sessionStorage.queryList;
                if (sessionStorage.queryList) {
                  storedQuery = storedQuery.split(',');
                  if (Array.isArray(storedQuery)) {
                    queryList = storedQuery;
                  } else {
                    queryList.push(storedQuery);
                  }
                }
                if (!queryList.includes(custom_query)) {
                  queryList.unshift(custom_query);
                  if (queryList.length > 5) {
                    queryList.pop();
                  }
                }
                sessionStorage.setItem('queryList', queryList);

              }

              return cb(extendedHits, res);
            })
            .catch((err) => cb([], err));
          sessionStorage.setItem('preSearch', false);
          if (sessionStorage.getItem('preSearchInput') && sessionStorage.getItem('preSearchInput') !== '') {
            sessionStorage.removeItem('preSearchInput');
          }
          document.querySelector("body").classList.add("noScroll");
          document.querySelector("store-header").classList.add("fixed_header");
          document.querySelector("#shopify-section-announcement-bar").classList.add("fixed_announcement");

        };
      }

    };
  }

  var multiQuerySource = createMultiQuerySource();

  function index(name) {
    return client.initIndex('' + algolia.config.index_prefix + name);
  }

  function autocompleteSection(config, section) {
    var params = config[section];

    var templates = {
      empty: function displayEmptyResultSet(props) {
        return algolia.render(
          params.templates.empty,
          algolia.assign({}, props, {
            translations: algolia.translations
          })
        );
      },
      suggestion: function displaySuggestion(hit) {
        return algolia.render(
          params.templates.hit,
          algolia.assign({
            _distinct: params.distinct
          }, hit, {
            translations: algolia.translations,
          })
        );
      },
    };

    if (params.templates.footer) {
      templates.footer = function displayFooter(props, content) {
        if (!content.nbHits) return null;
        if (content.nbHits <= params.hitsPerPage) return null;
        if (!algolia.config.instant_search_enabled) return null;
        if (!algolia.config.autocomplete_see_all) return null;

        return algolia.render(params.templates.footer, {
          query: props.query,
          nbHits: content.nbHits,
          translations: algolia.translations,
          helpers: algolia.helpers,
        });
      };
    }

    // Filters for stock policy
    var stockPolicyFilter = null;

    /**
     * Filters for stock policy are valid only if:
     * - stock policy has been defined, AND
     * - we are targeting products search index
     */
    if (algolia.config.stock_policy && section === 'products') {
      if (algolia.config.stock_policy === 'allow') {
        /**
         * For 'allow', we don't need to add any filter as we want to continue
         * displaying all out of stock items.
         */
      } else if (algolia.config.stock_policy === 'deny') {
        // For 'deny' we will filter out all items based on inventory quantity
        stockPolicyFilter = 'inventory_quantity > 0';
      } else if (algolia.config.stock_policy === 'continue') {
        /**
         * For 'continue' we will filter on `inventory_available` attribute whose
         * value is dependent on:
         * `inventory_quantity > 0 OR inventory_policy == 'continue'`
         */
        stockPolicyFilter = 'inventory_available:true';
      }
    }

    var searchOpts = {
      clickAnalytics: true,
      hitsPerPage: params.hitsPerPage,
      highlightPreTag: '<span class="aa-highlight">',
      highlightPostTag: '</span>',
    };
    if (params.distinct) {
      searchOpts.distinct = true;
    }

    // Add the stock policy filter if applicable
    if (stockPolicyFilter) {
      searchOpts.filters = stockPolicyFilter;
    }

    function extendHits(answer) {
      return answer.hits.map(function(hit, i) {
        return algolia.assign({}, hit, {
          _position: i + 1,
          _queryID: answer.queryID,
          _index: algolia.config.index_prefix + section,
        });
      });
    };

    return {
      name: section,
      source: multiQuerySource(index(section), searchOpts, extendHits),
      displayKey: 'title',
      templates: templates,
    };
  }

  function readjust($this, data) {
    if (!data) return;
    var $node = data.$node.get(0);
    var $dropdown = data.dropdown.$menu.get(0);
    var width = $this.offsetWidth;
    var vpWidth = document.body.clientWidth;
    var rect = $this.getBoundingClientRect();
    var offset = {
      top: rect.top + document.body.scrollTop,
      left: rect.left + document.body.scrollLeft,
    };
    var left = offset.left;
    var right = vpWidth - width - left;
    var top = offset.top;
    var height = $this.offsetHeight;

    var align = left < right ? 'left' : 'right';
    var dist = Math.min(left, right);
    // For small centered inputs, take half the screen
    if (4 * dist > vpWidth) {
      align = 'left';
      dist = Math.round(vpWidth / 4);
    }

    var newWidth = vpWidth - 2 * dist;

    // For big inputs, follow the input
    if (width >= 600) {
      align = 'left';
      dist = left;
      newWidth = width;
    }

    $node.style.left = '';
    $node.style.right = '';
    $node.style.top = top + height + 'px';
    $node.style[align] = dist + 'px';
    $node.style.width = newWidth + 'px';

    var suffix = 'lg';
    if (newWidth < 300) suffix = 'xs';
    else if (newWidth < 600) suffix = 'sm';
    else if (newWidth < 900) suffix = 'md';

    $dropdown.classList.remove(
      'aa-dropdown-menu-size-xs',
      'aa-dropdown-menu-size-sm',
      'aa-dropdown-menu-size-md',
      'aa-dropdown-menu-size-lg',
      'aa-dropdown-menu-size-lg'
    );
    $dropdown.classList.add('aa-dropdown-menu-size-' + suffix);

    var searchPopupContainer = document.querySelectorAll(".search-popup-container");
    if (document.querySelectorAll('.algolia-autocomplete')[0].style.display == 'block' || document.querySelectorAll('.algolia-autocomplete')[1].style.display == 'block') {
      for (var i = 0; i < searchPopupContainer.length; i++) {
        searchPopupContainer[i].removeAttribute("style");
      }
    }
  }

  var config = {
    articles: {
      hitsPerPage: algolia.config.articles_autocomplete_hits_per_page,
      index: index('articles'),
      templates: {
        empty: algolia.compileTemplate('autocomplete_articles_empty'),
        hit: algolia.compileTemplate('autocomplete_article'),
      },
    },
    pages: {
      hitsPerPage: algolia.config.pages_autocomplete_hits_per_page,
      index: index('pages'),
      templates: {
        empty: algolia.compileTemplate('autocomplete_pages_empty'),
        hit: algolia.compileTemplate('autocomplete_page'),
      },
    },
    collections: {
      hitsPerPage: algolia.config.collections_autocomplete_hits_per_page,
      index: index('collections'),
      templates: {
        empty: algolia.compileTemplate('autocomplete_collections_empty'),
        hit: algolia.compileTemplate('autocomplete_collection'),
      },
    },
    products: {
      distinct: algolia.config.show_products,
      hitsPerPage: algolia.config.products_autocomplete_hits_per_page,
      index: index('products'),
      templates: {
        empty: algolia.compileTemplate('autocomplete_products_empty'),
        footer: algolia.compileTemplate('autocomplete_footer'),
        hit: algolia.compileTemplate('autocomplete_product'),
      },
    },
  };

  if (algolia.config.powered_by) {
    // eslint-disable-next-line no-console
    console.log('Algolia: Autocomplete');
  }

  algolia.appendStyle(
    algolia.render(algolia.compileTemplate('autocomplete.css'), {
      colors: algolia.config.colors,
    })
  );

  var autocompleteInstance = autocomplete(
    algolia.config.input_selector + ', .algolia-shopify-autocomplete', {
      debug: algolia.config.autocomplete_debug,
      hint: false,
      appendTo: 'body',
      templates: {
        dropdownMenu: algolia.render(algolia.compileTemplate('autocomplete'), {
          storeName: algolia.storeName,
          with: {
            articles: algolia.config.index_articles,
            collections: algolia.config.index_collections,
            pages: algolia.config.index_pages,
            footer: algolia.config.instant_search_enabled && algolia.config.autocomplete_see_all,
            poweredBy: algolia.config.powered_by,
            products: algolia.config.index_products,
          },
        }),
        empty: '<div></div>',
      },
    },
    [
      algolia.config.index_collections &&
      autocompleteSection(config, 'collections'),
      algolia.config.index_articles && autocompleteSection(config, 'articles'),
      algolia.config.index_pages && autocompleteSection(config, 'pages'),
      algolia.config.index_products && autocompleteSection(config, 'products'),
    ].filter(function(x) {
      return Boolean(x);
    })
  );

  // Hack to handle buggy onclick event on iOS
  autocompleteInstance.each(function(i) {
    var data = autocompleteInstance.eq(i).data('aaAutocomplete');
    var suggestionClass =
      '.' +
      data.dropdown.cssClasses.prefix +
      '-' +
      data.dropdown.cssClasses.suggestion;
    var onSuggestionClick = data.dropdown._onSuggestionClick.bind(
      data.dropdown
    );
    var touchmoved;
    data.dropdown.$menu
      .on('touchend', suggestionClass, function(e) {
        if (touchmoved === false) {
          e.preventDefault();
          e.stopPropagation();
          onSuggestionClick.apply(this, arguments);
        }
      })
      .on('touchmove', function() {
        touchmoved = true;
      })
      .on('touchstart', function() {
        touchmoved = false;
      });
  });

  // Event listeners
  autocompleteInstance.on('autocomplete:selected', function(obj, datum, name) {
    event.preventDefault();
    setTimeout(function() {
      if (window.innerWidth < 1200) {
        document.querySelector('.algolia-search__form_mobile input').value = sessionStorage.getItem('algoliaSearchQuery');
        document.querySelector('.algolia-search__form_mobile input').dispatchEvent(new Event('input', {
          bubbles: true
        }));
      } else {
        document.querySelector('.predictive-search__input').value = sessionStorage.getItem('algoliaSearchQuery');
        document.querySelector('.predictive-search__input').dispatchEvent(new Event('input', {
          bubbles: true
        }));
      }
    }, 300);
    if (algolia.config.analytics_enabled) {
      var clickData = {
        index: datum._index,
        eventName: 'click',
        queryID: datum._queryID,
        objectIDs: [datum.objectID],
        positions: [datum._position],
      };

      // Send the click event
      aa.clickedObjectIDsAfterSearch(clickData);
      /**
       * Uncomment the following function call to start storing data in
       * local storage for conversion tracking
       */
      algolia.saveForConversionTracking(clickData);
      /**
       * Try to get the details from local storage for conversion tracking.
       * We're using a try...catch here to handle any possible exceptions resulting
       * from local storage or JSON parsing.
       */
      function trackConversion() {
        try {
          // Get any previously stored data.
          const previousClickItemsString = localStorage.getItem(localStorageKey)
          // If data was found, send a conversion event for those products.
          if (!!previousClickItemsString) {
            const previousClickItems = JSON.parse(previousClickItemsString)
            previousClickItems.forEach((data) => {
              aa('convertedObjectIDsAfterSearch', data)
            })
          }
        } catch (error) {
          // No need to do anything in this scenario.
        }

        // Try to remove the items from local storage.
        try {
          localStorage.removeItem(localStorageKey)
        } catch (error) {
          // No need to do anything in this scenario.
        }
      }
      // console.log(event);
      // Track a conversion event when clicking the 'add to cart' button.
      // Change the query selector to be the correct one for your theme.
      const addToCartBtn = document.querySelector('.custom-search-cta')

      if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function(e) {
          trackConversion()
        })
      }
    }
  });

  autocompleteInstance.on('autocomplete:redrawn', function() {
    var that = this;
    var i;
    autocompleteInstance.each(function(j, item) {
      if (item === that) {
        i = j;
        return false;
      }
      return true;
    });
    readjust(this, autocompleteInstance.eq(i).data('aaAutocomplete'));
  });

  window.addEventListener('resize', function() {
    autocompleteInstance.each(function(i) {
      readjust(this, autocompleteInstance.eq(i).data('aaAutocomplete'));
    });
  });

  const input = document.querySelectorAll('.predictive-search__input');
  for (var i = 0; i < input.length; i++) {
    input[i].addEventListener('input', function(e) {
      if (this.value.length == 0) {
        document.querySelector("body").classList.remove("noScroll");
        document.querySelector("store-header").classList.remove("fixed_header");
        document.querySelector("#shopify-section-announcement-bar").classList.remove("fixed_announcement");
        document.querySelectorAll('.aa-dataset-products.container.aa-right-column')[1].scrollTop = 0;
        document.querySelectorAll('.aa-dataset-products.container.aa-right-column')[0].scrollTop = 0;
        let searchPopupCont = $(".search-popup-container");
        searchPopupCont.css({ opacity: "1", transform: "translateY(0px) translateZ(0px)", display: "block" });
        $('.search-clear-icon').click(function(){
          searchPopupCont.removeAttr("style");
        }); 
      } else if (this.value.length > 2) {
        document.querySelector("body").classList.add("noScroll");
      }
    });

    input[i].addEventListener('click', function(e) {
      e.preventDefault();
      var searchPopupContainer = document.querySelectorAll(".search-popup-container");
      if (document.querySelectorAll('.algolia-autocomplete')[0].style.display == 'block' || document.querySelectorAll('.algolia-autocomplete')[1].style.display == 'block') {
        for (var i = 0; i < searchPopupContainer.length; i++) {
          searchPopupContainer[i].removeAttribute("style");
        }
      }
    });
  }

})(window.algoliaShopify);