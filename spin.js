const paralaxScroll = () => {
    const logo = document.getElementById("hero-discord-logo");
    
    window.addEventListener('scroll', () => {
        let value = window.scrollY;
        logo.style.transform = 'rotate(' + Math.round(value) * 0.75 + 'deg)'
    
    })
}

paralaxScroll();