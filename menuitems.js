(function() {

	var ie = (function() {

		var undef,
			v = 3,
			div = document.createElement('div'),
			all = div.getElementsByTagName('i');

		while (
			div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
			all[0]
		)
		;

		return v > 4 ? v : undef;

	})();

	$.fn.menuItems = function(opt) {
		/* 			console.log($(this)); */
		$(this).each(function() {
			/* 				console.log($(this)); */
			var getDataAttr = function(element) {
				var data_option = {};
				//        var keys = Object.keys(option);
				$.each(option, function(i, val) {
					if (typeof element.attr('data-mi-' + [i]) !== "undefined" && typeof element.attr('data-mi-' + [i]) !== false) {
						try {
							data_option[[i]] = $.parseJSON(element.attr('data-mi-' + [i]));
							return true; //continue;
						} catch (e) {}
						if (typeof data_option[i] !== "object") {
							data_option[[i]] = element.attr('data-mi-' + [i]);
						}
					}
				});

				var data_json = (typeof element.attr('data-mi') !== "undefined" && typeof element.attr('data-mi') !== false ? $.parseJSON(element.attr('data-mi')) : []);

				$.extend(true, data_option, data_json);

				if (ie < 9) {
					$.each(data_option, function(i, val) {
						//                console.log(data_option[i]);
						if (typeof rgbaToRgb(data_option[i]) !== "undefined") {
							data_option[i] = rgbaToRgb(data_option[i]);
						}
						if (typeof rgbaToRgb(data_option[i]) !== "undefined") {
							data_option[i] = rgbaToRgb(data_option[i]);
						}
					});
				}

				return data_option;
			};

			var rgbaToRgb = function(rgba) {
				try {
					var bits = rgba.split("(");
				} catch (e) {
					return;
				}
				if (typeof bits[1] !== "undefined") {
					//            console.log('splitting');
					bits = bits[1].split(")")[0].split(",");

					return "rgb(" + bits[0] + "," + bits[1] + "," + bits[2] + ")";
				}
				return;
			};

			var self = $(this);
			self.addClass('mi-container');
			var item_container = $('<div class="menuItems"></div>').appendTo(self);

			var menuItems = [];
			var isBody = self.is('body') || (self.outerHeight() >= $(document).height() && self.outerWidth() >= $(document).width());


			var option = {
				items: [],
				listContainerAnimationSpeed: "750ms",
				textHoverSpeed: "1500ms",
				onActivateSpeed: "1500ms",
				color: "lightgrey",
				activeBorderColor: "white",
				borderColor: "white",
				borderWidth: 1,
				activeFill: "rgba(255, 255, 255, 1)",
				activePadding: "5px",
				inactiveFill: "rgba(255, 255, 255, 0)",
				inactivePadding: "3px",
				fontWeight: "bold",
				showTextOnActive: true,
				bounceButton: true,
				themes: {},
				theme: null,
				screenSizes: [{
					maxHeight: 99999,
					minHeight: 0,
					maxWidth: 99999,
					minWidth: 0,
					theme: 'default'
				}],
				position: 'right',
				stick: false,
				hierarchical: true
			};
			$.extend(true, option, opt);

			var scroll = function() {
				var cur_tab;
				var scrollTop = $(window).scrollTop();

				for (var i = 0; i < menuItems.length; i++) {
					if (scrollTop > menuItems[i].offset().top - $('.header').outerHeight(true) - 7 - ($(window).height() / 2) + (item_container.height() / 2)) {
						cur_tab = i;
					}
				}


				if (cur_tab !== prev_tab) {
					prev_tab = cur_tab;
					if (history.replaceState) {
						history.replaceState(null, null, '#!' + item_container.children('.item:eq(' + cur_tab + ')').attr('data-mi-scrollTo'));
					}
					item_container.children('.item:eq(' + cur_tab + ')').addClass('active').siblings().removeClass('active');
				}

				if (option.hierarchical === true && isBody === false) {
					var elementOffset = self.offset().top;
					var elementHeight = self.outerHeight(true);
					var windowOffset = $(window).height() / 2;
					var absolute = scrollTop - elementOffset + windowOffset;
					absolute = (((absolute - item_container.height() > elementHeight ? elementHeight : absolute) < 0) ? 0 : absolute);
					item_container.css('top', absolute);
				}

				item_container.children('.item').each(function(i) {
					var theme_option = {};
					var item_offset = item_container.children('.item:eq(' + i + ')').offset().top;
					
					if (item_container.hasClass('mi-fixed')) {
						var box_data_option = getDataAttr(menuItems[cur_tab]);
						theme_option = option.themes[box_data_option.theme];
					} else {
						$('[data-mi-theme]').each(function(u) {
							var section_offset = $(this).offset().top;
							for (var z = 0; z < menuItems.length; z++) {
								if ((section_offset < item_offset) && (section_offset + $(this).height() > item_offset)) {
									var box_data_option = getDataAttr($(this));
									theme_option = option.themes[box_data_option.theme];
								}
							}
						});
					}

					var box_option = $.extend(true, {}, option, theme_option);
					var box_data_option = getDataAttr(menuItems[i]);
					$.extend(true, box_option, box_data_option);


					$(this).css({
						'color': box_option.color,
						'fontWeight': box_option.fontWeight
					});
					$(this).find('.circle').css('border', option.borderWidth + "px solid " + box_option.borderColor);
					$(this).find('.circle').css('background', ($(this).hasClass('active') ? box_option.activeFill : box_option.inactiveFill));
					$(this).find('.circle').css('padding', ($(this).hasClass('active') ? box_option.activePadding : box_option.inactivePadding));
				});
			};

			var resize = function() {
				if(item_container.hasClass('mi-fixed')) {
					item_container.css('margin-top', -(item_container.outerHeight(true) / 2));
				}
				for (var i = 0; i < option.screenSizes.length; i++) {
					if (($(window).height() < option.screenSizes[i].maxHeight && $(window).height() > option.screenSizes[i].minHeight) && ($(window).width() < option.screenSizes[i].maxWidth && $(window).width() > option.screenSizes[i].minWidth)) {
						var box_option = $.extend(true, {}, option, option.themes[option.screenSizes[i].theme]);
					}
				}
				scroll();
			};

			var funcs = {
				update: function(opt) {
					opt = (typeof opt !== "undefined" ? opt : {});
					option = $.extend(true, option, opt);
					menuItems = [];

					item_container.empty();
					self.find('.menuItem').each(function() {
						if ($(this).parents('.mi-container').first().is(self)) {
							menuItems.push($(this));
						}
					});
					item_container.css('transition', "all " + option.listContainerAnimationSpeed);
					item_container.css('-webkit-transition', "all " + option.listContainerAnimationSpeed);
					item_container.css('-moz-transition', "all " + option.listContainerAnimationSpeed);

					if (option.hierarchical === true && isBody === false) {
						item_container.addClass('mi-absolute').removeClass('mi-fixed');
					} else {
						item_container.addClass('mi-fixed').removeClass('mi-absolute');
					}

					var pos = ['left', 'right', 'top-center', 'right', 'bottom-center'];
					for (var i = 0; i < pos.length; i++) {
						item_container.removeClass('mi-position_' + pos[i]);
					}
					item_container.addClass('mi-position_' + option.position);

					for (var i = 0; i < menuItems.length; i++) {
						item_container.append($("<div class='item' data-mi-scrollTo='" + menuItems[i].attr('id') + "'><div class='circle'></div><span>" + menuItems[i].data('mi-title') + "</span></div>"));
					}

					item_container.children('.item').each(function(i) {
						var box_option = $.extend(true, {}, option);
						var box_data_option = getDataAttr(menuItems[i]);
						$.extend(true, box_option, box_data_option);

						$(this).find('span').css('animation-duration', box_option.textHoverSpeed);
						$(this).find('span').css('-webkit-animation-duration', box_option.textHoverSpeed);
						$(this).find('span').css('-moz-animation-duration', box_option.textHoverSpeed);
						if (box_option.showTextOnActive === true) {
							$(this).addClass('mi-showText');
						} else {
							$(this).removeClass('mi-showText');
						}

						if (box_option.bounceButton === true) {
							$(this).addClass('mi-bounceButton');
							$(this).css('animation-duration', box_option.onActivateSpeed);
							$(this).css('-webkit-animation-duration', box_option.onActivateSpeed);
							$(this).css('-moz-animation-duration', box_option.onActivateSpeed);
						} else {
							$(this).removeClass('mi-bounceButton');
						}
					});

					resize();
				}
			};


			$(document).on('click', '[data-mi-scrollTo]', function(e) {
				if (history.pushState) {
					history.pushState(null, null, '#!' + $(this).attr('data-mi-scrollTo'));

					var element = $(this);
					$('body').removeClass('sidebar_open');
					scrollTo(element.attr('data-mi-scrollTo'));
				} else {
					window.location.hash = '#!' + $(this).data('mi-scrollTo');
				}
				e.preventDefault();
				return false;
			});

			funcs.update();
			scroll(); //init

			var prev_tab = -1;
			var prev_scroll;
			$(window).on('scroll', function(evt) {
				scroll();
			});

			$(window).on('resize', function() {
				resize();
			});

			var scrollTo = function(element) {
				if ($("#" + element).length) {
					$.scrollTo($("#" + element), 800, {
						onAfter: function() {
							if (element !== "feature") {
								$('.header').addClass('hide');
							}
						}
					});
				}
			};

			$(function() {
				if (window.location.hash) {
					//        setTimeout(function() {
					scrollTo(window.location.hash.substring(2));
					//        }, 1500);
				} else {
					if (history.pushState) {
						history.pushState(null, null, '#!feature');
					} else {
						window.location.hash = '!feature';
					}
				}
				if ($("[data-mi-autoinit]").length > 0) {
					$("[data-mi-autoinit]").parent().menuItems();
				}
			});
		});



	};
})();