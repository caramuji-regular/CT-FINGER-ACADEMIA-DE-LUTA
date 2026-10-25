const elementsToReveal = document.querySelectorAll(
    "main > section, .card, .schedule-card, .contact-card, footer > .redes-sociais"
);

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !prefersReducedMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    });

    elementsToReveal.forEach((element) => {
        element.classList.add("scroll-reveal");
        revealObserver.observe(element);
    });
}