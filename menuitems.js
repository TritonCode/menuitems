(function () {
    $.fn.menuItems = function (opt) {
        var getDataAttr = function (element) {
            var data_option = {};
            //        var keys = Object.keys(option);
            $.each(option, function (i, val) {
                if (typeof element.attr('data-mi-' + [i]) !== "undefined" && typeof element.attr('data-mi-' + [i]) !== false) {
                    try {
                        data_option[[i]] = $.parseJSON(element.attr('data-mi-' + [i]));
                        return true; //continue;
                    } catch (e) {
                    }
                    if (typeof data_option[i] !== "object") {
                        data_option[[i]] = element.attr('data-mi-' + [i]);
                    }
                }
            });

            var data_json = (typeof element.attr('data-mi') !== "undefined" && typeof element.attr('data-mi') !== false ? $.parseJSON(element.attr('data-mi')) : []);

            $.extend(true, data_option, data_json);

            if (ie < 9) {
                $.each(data_option, function (i, val) {
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

        var rgbaToRgb = function (rgba) {
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
        var self = ($(this).length !== 0 ? $(this) : $('<div class="menuItems"></div>').appendTo('body'));
        var option = {
            textHoverSpeed: "1500ms",
            onActivateSpeed: "1500ms",
            color: "white",
			activeBorderColor: "white",
            borderColor: "white",
            borderWidth: 1,
            activeFill: "rgba(255, 255, 255, 1)",
            activePadding: "5px",
            inactiveFill: "rgba(255, 255, 255, 0)",
            inactivePadding: "3px",
            fontWeight: "bold",
            opacity: 1,
            showTextOnActive: true,
            bounceCircle: true,
			themes: {},
			override: false
        };
        $.extend(true, option, opt);
        var menuItems = [];
        $('.menuItem').each(function () {
            menuItems.push($(this));
        });
        for (var i = 0; i < menuItems.length; i++) {
            self.append($("<div class='item' data-mi-scrollTo='" + menuItems[i].attr('id') + "'><div class='circle'></div><span>" + menuItems[i].data('mi-title') + "</span></div>"));
        }

        var scroll = function () {
            var cur_tab;
			var theme_option = {};

            for (var i = 0; i < menuItems.length; i++) {
                if ($(window).scrollTop() > menuItems[i].offset().top - $('.header').outerHeight(true) - 7 - ($(window).height() / 2) + (self.height() / 2)) {
                    cur_tab = i;
					var box_data_option = getDataAttr(menuItems[i]);
					theme_option = option.themes[box_data_option.themes];
                }
            }
            if (cur_tab !== prev_tab) {
                prev_tab = cur_tab;
                if (history.replaceState) {
                    history.replaceState(null, null, '#!' + self.children('.item:eq(' + cur_tab + ')').attr('data-mi-scrollTo'));
                }
                self.children('.item:eq(' + cur_tab + ')').addClass('active').siblings().removeClass('active');
            }
			
            self.children('.item').each(function (i) {
				var box_option = $.extend(true, {}, option, theme_option);
                var box_data_option = getDataAttr(menuItems[i]);
 				console.log(box_option);
/* 				if(box_data_option.themes) { */
/* 					$.extend(true, box_option, box_option.themes[box_data_option.themes]); */
/* 				} else { */
					$.extend(true, box_option, box_data_option);
/* 				} */

                var scrollTop = $(window).scrollTop(),
                        elementOffset = $(menuItems[i]).offset().top,
                        distance = (elementOffset - scrollTop + $(menuItems[i]).outerHeight(true));
                var elementOffset = self.offset().top,
                        distance2 = (elementOffset - scrollTop);


                /* 				$(this).find('.circle').css('border', "1px solid white"); */
                /* 				$(this).find('.circle').css('background', box_option.inactiveFill); */
                /* 				if (distance > distance2) { */
                $(this).css({
                    'color': box_option.color,
                    'fontWeight': box_option.fontWeight
                });
                $(this).find('.circle').css('border', option.borderWidth + "px solid " + box_option.borderColor);
                $(this).find('.circle').css('background', ($(this).hasClass('active') ? box_option.activeFill : box_option.inactiveFill));
                $(this).find('.circle').css('padding', ($(this).hasClass('active') ? box_option.activePadding : box_option.inactivePadding));
                /* 				} */
            });
        };

        var resize = function () {
            self.css('margin-top', -(self.outerHeight(true) / 2));
        };

        var funcs = {
            update: function () {
                self.children('.item').each(function (i) {
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

                    if (box_option.bounceCircle === true) {
                        $(this).addClass('mi-bounceCircle');
                        $(this).css('animation-duration', box_option.onActivateSpeed);
                        $(this).css('-webkit-animation-duration', box_option.onActivateSpeed);
                        $(this).css('-moz-animation-duration', box_option.onActivateSpeed);
                    } else {
                        $(this).removeClass('mi-bounceCircle');
                    }

                    /* 					self.css({
                     'color': 'white'
                     }); */
                });

                resize();
            }
        };


        $('[data-mi-scrollTo]').on('click', function (e) {
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
        $(window).on('scroll', function (evt) {
            scroll();
        });

        $(window).on('resize', function () {
            resize();
        });

    };

    var scrollTo = function (element) {
        if ($("#" + element).length) {
            $.scrollTo($("#" + element), 800, {
                onAfter: function () {
                    if (element !== "feature") {
                        $('.header').addClass('hide');
                    }
                }
            });
        }
    };

    $(function () {
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
            $('[data-mi-init_nonexistent]').menuItems();
        }
    });
})();