Reveal.on( 'slidechanged', event => {
    const footers = document.querySelectorAll('div.footer');
    if (footers === null) {
        alert("No footer found");
    }
    if (event.currentSlide.classList.contains('rave')) {
        for (const footer of footers) {
            footer.classList.add('rave');
            footer.classList.remove('rant');
        }
    } else if (event.currentSlide.classList.contains('rant')) {
        for (const footer of footers) {
            footer.classList.remove('rave');
            footer.classList.add('rant');
        }
    } else {
        for (const footer of footers) {
            footer.classList.remove('rave');
            footer.classList.remove('rant');
        }
    }
} );
  