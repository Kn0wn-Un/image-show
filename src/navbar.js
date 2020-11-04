import './style.css';
const navBar = (() => {
    const addHead = () => {
        const nav = document.createElement('div');
        nav.classList.add('navbar');
        const bigI = document.createElement('h1');
        bigI.innerHTML = 'I';
        const bigS = document.createElement('h1');
        bigS.innerHTML = 'S';
        const a = document.createElement('a');
        a.href = 'https://github.com/Kn0wn-Un/image-show';
        a.innerHTML = 'GitHub';
        nav.innerHTML = bigI.outerHTML + 'mage' + bigS.outerHTML + 'how';
        nav.appendChild(a);
        document.body.appendChild(nav);
    };
    return { addHead };
})();
export default navBar;
