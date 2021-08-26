function beforeOnScreen(element) {
    let win = $(window);
    let screenTop = win.scrollTop();
    let screenBottom = screenTop + win.height();

    let elementTop = element.offset().top - 400;
    let elementBottom = elementTop + element.height();

    return elementBottom > screenTop && elementTop < screenBottom;
}
