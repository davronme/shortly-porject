const elUrlShortnerForm = document.querySelector('.js-url-shortner-form');

const elUrlShortnerResults = document.querySelector('.url-shortner__results');

const elUrlShortner = document.querySelector('.url-shortner')


if (elUrlShortnerForm) {
    elUrlShortnerForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // console.log('text');
        elUrlShortnerResults.classList.add('url-shortner__results--open');
    });
}

if (elUrlShortner) {
    elUrlShortner.addEventListener('click', function(event) {
        if (event.target.matches('.js-short-link-copy')) {

            // CHANGA BUTTON TEXT
            event.target.textContent = 'Copied!';

            // CHANGA BUTTON BGCOLOR
            event.target.classList.add('button-smoll-rectangle-copied')

            // Copy Short Link To Clipboard

            navigator.clipboard.writeText(event.target.previousElementSibling.textContent)

            // RESET BUTTON AND CLASS AFTER 1 S
            setTimeout(function () {
                event.target.textContent = ('Copy');
                event.target.classList.remove('button-smoll-rectangle-copied');
            }, 1000);
        };
    });

}
