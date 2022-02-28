function manipulateDom() {
    document.querySelectorAll('.quote').forEach( quote => {
        quote.style.borderColor = 'blue';
        quote.style.backgroundColor = 'lightblue';
        quote.style.fontStyle = 'italic';
    });
};

export { manipulateDom };