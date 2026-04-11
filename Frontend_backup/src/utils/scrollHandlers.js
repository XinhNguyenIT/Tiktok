export const handleScrollUp = () => {
    window.scrollBy({
        top: -window.innerHeight,
        behavior: 'smooth',
    });
};

export const handleScrollDown = () => {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth',
    });
};
