document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const handleAnimation = (entries, observer, animationName) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', animationName);
                observer.unobserve(entry.target);
                entry.target.style.visibility = 'visible'; 
            }
        });
    };

    const createObserver = (animationName) => {
        return new IntersectionObserver((entries, observer) => {
            handleAnimation(entries, observer, animationName);
        }, observerOptions); 
    };

    const animations = {
        '#div-1': 'animate__fadeInUp',
        '#div-2, .div-3-4, #div-59': 'animate__bounceInLeft',
        '#div-5': 'animate__bounceInDown',
        '.div-6-7': 'animate__bounceInUp',
        '#div-8, .div-9-10, #div-60': 'animate__bounceInRight',
        '#div-12': 'animate__fadeInUp',
        '.div-11': 'animate__flipInY',
        '#div-13, #div-21, #div-29, #div-37, #div-51, #div-53, #div-58': 'animate__fadeInUp',
        '#div-14, #div-22, #div-30, #div-38, #div-52': 'animate__zoomIn',
        '.div-15-16, .div-23-24, .div-31-32, .div-39-40, .div-45-46': 'animate__fadeInUp',
        '.div-17-18, .div-25-26, .div-33-34, .div-41-42, .div-47-48': 'animate__slideInLeft',
        '.div-19, .div-27, .div-35, .div-43, .div-49-50': 'animate__slideInRight',
        '#div-20, #div-28, #div-36, #div-44': 'animate__bounceInLeft',
        '#div-54': 'animate__bounceInLeft',
        '#div-55': 'animate__bounceInRight',
        '.div-56-57': 'animate__fadeInDown',
        '.div-61-62': 'animate__flipInY'
    };

    
    for (let selector in animations) {
        const animationName = animations[selector];
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.style.visibility = 'hidden';
            const observer = createObserver(animationName);
            observer.observe(el);
        });
    }
});
