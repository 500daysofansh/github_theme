const typeEffect = (element, speed = 20) => {
    if (element.classList.contains('typed')) return;
    const text = element.innerText.trim();
    if (!text) return;

    element.classList.add('typed');
    element.innerText = '';
    element.style.opacity = '1';
    
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.append(text.charAt(i));
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
};

const runGitHubMayhem = () => {
    // Selects Repository names, file names in explorer, and sidebar items
    const selectors = [
        '.repo', 
        '.f3.Link--primary', 
        '.Link--primary.markdown-title', 
        'span.ActionListItem-label',
        'span.Truncate-text'
    ];
    
    const allElements = document.querySelectorAll(selectors.join(','));
    
    allElements.forEach(el => {
        if (!el.classList.contains('typed') && el.innerText.trim().length > 0) {
            typeEffect(el);
        }
    });
};

const observer = new MutationObserver(() => runGitHubMayhem());
observer.observe(document.body, { childList: true, subtree: true });
runGitHubMayhem();