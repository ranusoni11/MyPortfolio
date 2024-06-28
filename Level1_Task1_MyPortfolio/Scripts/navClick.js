document.addEventListener('DOMContentLoaded', function() {
    const navbtn = document.querySelector('.display-img-1');
    const navBar = document.querySelector('.nav-bar');
    const dp = document.getElementById('dp');
    const nav1 = document.querySelector('.nav-bar-1');
    const logo = document.getElementById('logo');
    nav1.style.background = 'linear-gradient(45deg, rgba(233, 171, 219, 0.4) 0%, rgba(0, 9, 85, 1) 100%)';


    dp.style.border = '4px solid white';
    // logo.src = '/Images/MY_PORTFOLIO__7_-removebg-preview.png';

    navbtn.addEventListener('click', () => {
        navBar.classList.toggle('open');
        if(navBar.classList.contains('open')){
            dp.classList.add('loading-border');
            nav1.style.background = 'rgba(0, 0, 0, 0.7)';
            // logo.src = '/Images/MY_PORTFOLIO__6_-removebg-preview.png';
            // logo.style.marginTop = '15px';
            // logo.style.marginLeft = '-10px';
            setTimeout(() => {
                dp.classList.remove('loading-border');
                dp.style.border = '4px double white';
            }, 1000);
        }else{
            dp.classList.add('loading-border');
            setTimeout(() => {
                dp.style.border = '4px solid white';
                dp.classList.remove('loading-border');
                
            }, 1000);
            nav1.style.background = 'linear-gradient(45deg, rgba(233, 171, 219, 0.4) 0%, rgba(0, 9, 85, 1) 100%)';
            // logo.src = '/Images/MY_PORTFOLIO__7_-removebg-preview.png';
            // logo.style.margin = '2px 4px 4px 4px';
        }
    });
});
