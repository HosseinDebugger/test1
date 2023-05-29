let index = 0;
const items = $('.work-item').length;


$(document).ready(function() {


    $(".work-item-inner").click(function() {
        index = $(this).parent(".work-item").index();
        $('.lightbox').addClass('open');
        lightBoxSlideShow();

    });

    $('.lightbox-control .prev').click(function() {
        if (index == 0) {
            index = items - 1;

        } else {
            index--;

        }
        lightBoxSlideShow();
    })

    $('.lightbox-control .next').click(function() {
        if (index == items - 1) {
            index = 0;
        } else {
            index++
        }
        lightBoxSlideShow()
    })


    $('.close').click(function() {
        $('.lightbox').removeClass('open')
    })

    $('.lightbox').click(function(event) {
        if ($(event.target).hasClass('lightbox')) {
            $(this).removeClass('open')
        }
    })

    function lightBoxSlideShow() {
        const imgSrc = $('.work-item').eq(index).find('img').attr('data-target');
        const category = $('.work-item').eq(index).find('p').html();

        $('.lightbox-img').attr('src', imgSrc)
        $('.lightbox-category').html(category);
        $('.lightbox-counter').html(items + "/" + (index + 1))
    }


})




//    nav bar code

let navbar = document.getElementById('navbar')
let aboutCount = document.querySelector('.about-content')
let service = document.querySelector('.service')
let serviceItem = document.getElementById('service-item')
let serviceModal = document.getElementById('service-modal')
let closeModal = document.getElementById('close-modal')
let workitem = document.querySelector('.work-item-inner')
let ccontentDesc = document.querySelector('.contact')
let aboutbtn = document.getElementById('aboutbtn')

navbar.addEventListener('click', NavbarFunc)

function NavbarFunc() {
    event.preventDefault()
    let target = event.target.dataset.nav
    console.log(target);

    switch (target) {
        case 'about':
            aboutCount.scrollIntoView({
                behavior: 'smooth'
            });
            break;

        case 'service':
            service.scrollIntoView({
                behavior: 'smooth'
            })
            break;

        case 'workitem':
            workitem.scrollIntoView({
                behavior: 'smooth'
            })
            break;

        case 'content':
            ccontentDesc.scrollIntoView({
                behavior: 'smooth'
            })
            break;


    }
    //  event.target.dataset.nav =""

}



//  service -item

serviceItem.addEventListener('click', ShowModalFunc)
closeModal.addEventListener('click', CloseModalFunc)

function ShowModalFunc() {
    let screenSize = window.screen.width
    console.log(screenSize);
    if (window.screen.width == 363) {

    } else {
        serviceModal.style.display = 'block'

    }

}

function CloseModalFunc() {
    serviceModal.style.display = 'none'

}

//  about -btb

// about btn 
let aboutusbtn = document.getElementById("callforme")
aboutbtn.addEventListener('click', () => {

    aboutbtn.style.display = 'none'
    aboutusbtn.style.display = 'block'


})


aboutusbtn.addEventListener('click', () => {
    alert('کپی شد ')
    window.navigator.clipboard.writeText(aboutusbtn.firstElementChild.innerHTML)
    aboutbtn.style.display = 'block'
    aboutusbtn.style.display = 'none'

})













//content
let content = document.getElementById('contact-desc')




window.document.addEventListener('scroll', (event) => {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 3000) {

        content.style.display = 'block'
        content.style.animation = ' test23 8    s '

    } else {
        content.style.display = 'none'

    }
})