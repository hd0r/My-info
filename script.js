function rotateLogo() {
            const logo = document.getElementById('logo');
            logo.style.animation = 'none';
            logo.offsetHeight; /* trigger reflow */
            logo.style.animation = null;
            logo.style.animation = 'rotate 1s infinite linear';
        }