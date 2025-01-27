const toggleButton = document.querySelector('.sidebar-toggle');
const sideBar = document.querySelector('.side-bar');


toggleButton.addEventListener('click', (event) => {
    event.stopPropagation(); 
    sideBar.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    
    if (!sideBar.contains(event.target) && !toggleButton.contains(event.target)) {
        sideBar.classList.remove('active'); 
    }
});
