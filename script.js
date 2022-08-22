// var revealedElement = document.querySelectorAll('.reveal');

// for(let i = 0;i< revealedElement.length;i++){

//     var bounding = revealedElement[i].getBoundingClientRect();

//     if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight) {

//         reveal();
//     } else {
    
//         console.log('Element is NOT in the viewport!');
//     }


// }









document.querySelector('.container').addEventListener('scroll', reveal);





function reveal(){

    let reveals = document.querySelectorAll('.reveal')

    

    for(let i = 0; i<reveals.length; i++){

        let windowheight = window.innerHeight;

        let revealtop = reveals[i].getBoundingClientRect().top;

        let revealPoint = 150;

        if(revealtop < windowheight - revealPoint){
            reveals[i].classList.add('active');
        }
    }
}