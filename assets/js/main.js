$(document).ready(function () {
    let theme = localStorage.getItem('theme');
    theme === 'dark' ? enableDarkMode() : disableDarkMode();

    function enableDarkMode() {
        localStorage.setItem('theme', 'dark');
        document.body.classList.add('dark-mode');
        $('.darkTheme').addClass('active');
        $('.theme').addClass('darkmode');
    }

    function disableDarkMode() {
        localStorage.setItem('theme', 'light');
        document.body.classList.remove('dark-mode');
        $('.lightTheme').addClass('active');
        $('.theme').removeClass('darkmode');
    }

    $('.darkTheme').on('click', () => {
        enableDarkMode();
        console.log('Dark Btn  ', theme);
        $('.themeBtn').removeClass('active');
        $(this).addClass('active');
    });

    $('.lightTheme').on('click', () => {
        disableDarkMode();
        console.log('light Btn', theme);
        $('.themeBtn').removeClass('active');
        $(this).addClass('active');
    });
    //scroll to top make fade for button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-button").fadeIn();
        } else {
            $(".scroll-top-button").fadeOut();
        }
    });
    //scroll to top button
    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });
    //start active navbar
    $('.hamburger').click(function(){
        $('.hamburger').toggleClass('active');
        $('.navigation-side-bar').toggleClass('acitve-nav');
        $('.main-content').toggleClass('active-main')
    });
    $('.add-time').click(function(){
        $('.time-count').addClass('active-time');
    });
    $('.remove-time').click(function(){
        $('.time-count').removeClass('active-time');
    });
    $('.session-hamburger').click(function(){
        $('.session-hamburger').toggleClass('active');
        $('.nav-session').toggleClass('acitve-nav-session');
    });
    $('.nav-session li').click(function(){
        $('.session-hamburger').removeClass('active');
        $('.nav-session').removeClass('acitve-nav-session');
    });
});