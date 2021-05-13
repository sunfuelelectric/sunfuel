window.addEventListener("mousemove", parallaxBack);
function parallaxBack(e) {
    document.querySelectorAll('.parallax').forEach(parallax => {
        const speed = parallax.getAttribute('speed');
        const x = (window.innerWidth - e.pageX * speed) / 300
        parallax.style.transform = `translateX(${x}px)`;
    })
}