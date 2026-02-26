const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

//If JS doesn’t respond to clicks, check what’s on top (z-index + pointer-events)
toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
});
