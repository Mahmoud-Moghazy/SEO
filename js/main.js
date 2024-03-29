/*-----------------------------------------------------------------------------------

    Theme Name: SEO - Digital Marketing Agency Template
    Description: Digital Marketing Agency Template
    Author: Chitrakoot Web
    Version: 1.0

    ---------------------------------- */
    function changeLanguage(language) {
        var currentURL = window.location.href;

        var isRTL = currentURL.includes('-rtl.html');

        if (language === 'ar' && !isRTL) {
            currentURL = currentURL.replace('.html', '-rtl.html');
        } else if (language === 'en' && isRTL) {
            currentURL = currentURL.replace('-rtl.html', '.html');
        }

        window.location.href = currentURL;
    }

!(function (a) {
    "use strict";
    var t = a(window);
    function o() {
        var e, o;
        (e = a(".full-screen")), (o = t.height()), e.css("min-height", o), (e = a("header").height()), (o = a(".screen-height")), (e = t.height() - e), o.css("height", e);
    }
    a("#preloader").fadeOut("normall", function () {
        a(this).remove();
    }),
        t.on("scroll", function () {
            var e = t.scrollTop(),
                o = a(".navbar-brand img");
            e <= 50 ? (a("header").removeClass("scrollHeader").addClass("fixedHeader"), o.attr("src", "img/logos/logo-inner.png")) : (a("header").removeClass("fixedHeader").addClass("scrollHeader"), o.attr("src", "img/logos/logo.png"));
        }),
        t.on("scroll", function () {
            500 < a(this).scrollTop() ? a(".scroll-to-top").fadeIn(400) : a(".scroll-to-top").fadeOut(400);
        }),
        a(".scroll-to-top").on("click", function (e) {
            e.preventDefault(), a("html, body").animate({ scrollTop: 0 }, 600);
        }),
        a(".parallax,.bg-img").each(function (e) {
            a(this).attr("data-background") && a(this).css("background-image", "url(" + a(this).data("background") + ")");
        }),
        a(".popup-youtube").magnificPopup({ disableOn: 700, type: "iframe", mainClass: "mfp-fade", removalDelay: 160, preloader: !1, fixedContentPos: !1 }),
        t.resize(function (e) {
            setTimeout(function () {
                o();
            }, 500),
                e.preventDefault();
        }),
        new WOW({ boxClass: "wow", animateClass: "animated", offset: 0, mobile: !1, live: !0 }).init(),
        o(),
        a(document).ready(function () {
            a(".testimonial-carousel").owlCarousel({
                loop: !0,
                responsiveClass: !0,
                autoplay: !1,
                smartSpeed: 1500,
                nav: !1,
                dots: !0,
                center: !1,
                margin: 0,
                responsive: { 0: { items: 1, margin: 0 }, 768: { items: 1 }, 992: { items: 2 } },
            }),
                a(".portfolio-single").owlCarousel({
                    loop: !0,
                    responsiveClass: !0,
                    autoplay: !0,
                    smartSpeed: 800,
                    nav: !1,
                    dots: !0,
                    center: !1,
                    margin: 30,
                    responsive: { 0: { items: 1 }, 767: { items: 1, margin: 0 }, 768: { items: 2 }, 992: { items: 3 } },
                }),
                a(".client-carousel").owlCarousel({ loop: !0, responsiveClass: !0, autoplay: !0, smartSpeed: 1500, nav: !1, dots: !1, center: !1, margin: 0, responsive: { 0: { items: 1 }, 768: { items: 1 }, 992: { items: 1 } } }),
                a(".owl-carousel").owlCarousel({ items: 1, loop: !0, dots: !1, margin: 0, autoplay: !0, smartSpeed: 500 }),
                a(".countup").counterUp({ delay: 25, time: 2e3 }),
                a(".countdown").countdown({ date: "01 Jan 2024 00:01:00", format: "on" });
        }),
        t.on("load", function () {
            a(".portfolio-gallery").lightGallery(), t.stellar();
        });
})(jQuery);
