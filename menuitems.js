$.fn.menuItems = function(opt) {
    var self = ($(this).length !== 0 ? $(this) : $('<div class="menuItems"></div>').appendTo('body'));
    var option = {
        textSpeed: "200ms",
        itemSpeed: "500ms",
        color: "white",
        borderColor: "white",
        borderWidth: 1,
        activeFill: "rgba(255, 255, 255, 1)",
        activePadding: "5px",
        inactiveFill: "rgba(255, 255, 255, 0)",
        inactivePadding: "3px",
        opacity: 1
    };
    $.extend(true, option, opt);
    var menuItems = [], menuSection = [];
    $('.menuItem').each(function() {
        menuItems.push($(this));
    });
    for (var i = 0; i < menuItems.length; i++) {
        menuSection[i] = $("<div class='item' data-mi-scrollTo='" + menuItems[i].attr('id') + "'><div class='circle'></div><span>" + menuItems[i].data('mi-title') + "</span></div>");
        self.append(menuSection[i]);
    }

    var scroll = function() {
        var cur_tab;

        for (var i = 0; i < menuItems.length; i++) {
            if ($(window).scrollTop() > menuItems[i].offset().top - $('.header').outerHeight(true) - 7) {
                cur_tab = i;
            }
        }
        if (cur_tab !== prev_tab) {
            prev_tab = cur_tab;
            if (history.replaceState) {
                history.replaceState(null, null, '#!' + menuSection[cur_tab].attr('data-mi-scrollTo'));
            }
            menuSection[cur_tab].addClass('active').siblings().removeClass('active');
        }

        for (var i = 0; i < menuSection.length; i++) {
            self.css({
                'color': 'rgba(255, 255, 255, 1)'
            });
            self.find('.item .circle').css('border', "1px solid white");
            self.find('.item .circle').css('background', option.inactiveFill);
        }
        for (var i = 0; i < menuSection.length; i++) {
            var scrollTop = $(window).scrollTop(), elementOffset = $(menuItems[i]).offset().top, distance = (elementOffset - scrollTop + $(menuItems[i]).outerHeight(true));
            var elementOffset = self.offset().top, distance2 = (elementOffset - scrollTop);
            if (distance > distance2) {
                var color = (typeof menuItems[i].data('mi-color') !== "undefined" ? menuItems[i].data('mi-color') : "rgba(255, 255, 255, 1)");
                self.css({
                    'color': color
                });
                self.find('.item .circle').css('border', option.borderWidth + "px solid " + color);
                self.find('.item .circle').css('padding', option.inactivePadding);
                self.find('.item.active .circle').css('background', color);
                self.find('.item.active .circle').css('padding', option.activePadding);
                break;
            }
        }
    };

    var resize = function() {
        self.css('margin-top', -(self.outerHeight(true) / 2));
    };

    var scrollTo = function(element) {
        if ($("#" + element).length) {
            $.scrollTo($("#" + element), 800, {onAfter: function() {
                    if (element !== "feature") {
                        $('.header').addClass('hide');
                    }
                }});
        }
    };

    if (window.location.hash) {
//        setTimeout(function() {
            scrollTo(window.location.hash.substring(2));
//        }, 1500);
    } else {
        if (history.pushState) {
            history.pushState(null, null, '#!feature');
        }
        else {
            window.location.hash = '!feature';
        }
    }


    $('[data-mi-scrollTo]').on('click', function(e) {
        if (history.pushState) {
            history.pushState(null, null, '#!' + $(this).attr('data-mi-scrollTo'));

            var element = $(this);
            $('body').removeClass('sidebar_open');
            scrollTo(element.attr('data-mi-scrollTo'));
        }
        else {
            window.location.hash = '#!' + $(this).data('mi-scrollTo');
        }
        e.preventDefault();
        return false;
        

    });
    
    scroll(); //init

    var prev_tab = -1;
    var prev_scroll;
    $(window).on('scroll', function(evt) {
        scroll();
    });

    $(window).on('resize', function() {
        resize();
    });

};

$(function() {
	if($("[data-mi-autoinit]").length > 0) {
		$('[data-mi-init_nonexistent]').menuItems();
	}
});