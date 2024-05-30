const app = {
    init: function() {
        const accordionSwitchs = document.querySelectorAll('.handler_icon')
        for (const icon of accordionSwitchs) {
            icon.addEventListener('click', app.handleTextDisplay)
        }
    },

    handleTextDisplay: function(event) {
        const section = event.target.closest('section')
        const text = section.querySelector('p')
        text.toggleAttribute('hidden')
        if (text.hidden) {
            event.currentTarget.querySelector('img').src = 'assets/images/icon-plus.svg'
        } else event.currentTarget.querySelector('img').src = 'assets/images/icon-minus.svg'
    }
}

document.addEventListener('DOMContentLoaded', app.init)