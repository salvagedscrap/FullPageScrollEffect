
//reveal script

document.querySelector('.container').addEventListener('scroll', reveal);

function reveal(){

    let reveals = document.querySelectorAll('.reveal')
    
    

    for(let i = 0; i<reveals.length; i++){

        let windowheight = window.innerHeight;

        let revealtop = reveals[i].getBoundingClientRect().top;

        let revealPoint = 150;

        if(revealtop < windowheight - revealPoint){
            reveals[i].classList.add('active');
            

        }else{
            
            reveals[i].classList.remove('active');
        }
    }

    //nav scroll function
    document.querySelector('nav').classList.add('navactive', window.scrollY > 0)
    let a = document.querySelectorAll('.a')
    for(let i= 0; i<a.length; i++){

        a[i].classList.add('aactive')
    }

    
    let links =document.querySelectorAll('.a')
    for(let i = 0; i<links.length; i++){

    }



    


}

// header loading delay script
document.addEventListener('DOMContentLoaded', revealheader);

function revealheader() {

    setTimeout(function() {
        document.querySelector('.revealheader').classList.add('active')

    }, 500);

    setTimeout(() => {
       let li= document.querySelectorAll('li')
       

        for(let i= 0; i<li.length; i++){

            li[i].classList.add('liactive')
        }
  


    }, 1500);

}

//scrollspy
//doesnt work with scrollsnap and couldnt figured out


// let section= document. querySelectorAll('section');
// let navLinks= document.querySelectorAll('.a');

// document.querySelector('div').onscroll = () => {
//     section.forEach(sec =>{
//         let div= document.querySelector('div')
//         let top = div.scrollY;
//         let offset= sec.offsetTop;
//         let height= sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height){

//             navLinks.forEach(links =>{
//                 links.classList.remove('navsubactive');

//                 document.querySelector('.a[href*=' + id + ']').classList.add('navsubactive')
//             })
//         }    
//     })
// }




// const navli= document.querySelectorAll('.a')
// const sections = document.querySelectorAll('section')

// document.querySelector('div').addEventListener('scroll',togglesub)

//  function togglesub(){
//     let current = ''
//     sections.forEach(section=>{
//         let sectiontop=section.offsetTop;
//         if(screenY>=sectiontop){
//             current = section.getAttribute('id')
//         }
//     })
//     navli.forEach(li=>{
//         li.classList.remove('navsubactive');
//         console.log('event');
 
//     document.querySelector('.a[href*=' + current + ']').classList.add('navsubactive')
//     })
// }

