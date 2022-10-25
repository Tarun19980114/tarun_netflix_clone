// Light & Dark Mode
function changemode(){
    let mybody = document.body;
    mybody.classList.toggle('mydark')
}

// Coupon
function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementById('banner-bar').style.opacity = '.7';
}

function closecoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementById('banner-bar').style.opacity = '1';
}



