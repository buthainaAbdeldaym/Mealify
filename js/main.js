let bars=document.querySelector('section.home nav .header .mode .fa-bars');
let navLayer=$('section.nav-layer');
let navLayerLinks=$('section.nav-layer .nav-layer-links');
let closeLayer=$('section.nav-layer .nav-layer-links .fa-close');
bars.addEventListener('click',function(){
    document.querySelector('section.home nav .header .logo h1').classList.add('d-none');
    navLayer.slideDown(400,function(){
        navLayerLinks.fadeIn(300)
    })
})
closeLayer.click(function(){
    navLayerLinks.fadeOut(300,function(){navLayer.slideUp(400,function(){
    document.querySelector('section.home nav .header .logo h1').classList.remove('d-none');
    })})
})

const image = document.querySelector('section.home .home-content .row .col-md-6 .item img');

image.addEventListener('mouseover', () => {
    image.classList.add('shake');
});
  
image.addEventListener('mouseout', () => {
    image.classList.remove('shake');
});

// nav-color:#171717
// home-color:#252525
// main-color:#D78C23
// chefs-color:#202020
// chefs-item-color:#171717
// gallary-color:#252525
// contact-color:#202020
// contact-info-color:#0D0D0D
// contact-data-color:#171717


let moon=$('section.home nav .header .mode span.fa-moon');
let sun=$('section.home nav .header .mode span.fa-sun');

moon.click(function(){
    $(this).addClass('d-none');
    sun.removeClass('d-none');
    sun.css('color','#fff');
    $('section.home nav .header .mode span.fa-bars').css('color','#fff');
    $('section.home nav').css('backgroundColor','#171717');
    $('section.home').css('backgroundColor','#252525');
    $('section.home nav .header .links ul li a').css('color','#aaa4a4');
    $('section.home nav .header .logo h1 span').css('color','#D78C23');
    $('section.home nav .header .logo h1 a').css('color','#fff');
    $('section.home .home-content .row .col-md-6 .item h2').css('color','#fff');
    $('section.home .home-content .row .col-md-6 .item .book-video a:nth-child(1)').css('color','black').css('backgroundColor','#D78C23');
    $('section.home .home-content .row .col-md-6 .item .book-video a:nth-child(2) span:nth-child(1)').css('backgroundImage','linear-gradient(to right, #D78C23 0 50%, transparent 50% 100%)');
    $('section.home .home-content .row .col-md-6 .item .book-video a:nth-child(2) span:nth-child(2)').css('backgroundColor','#171717').css('color','#fff');
    $('section.home .home-content .row .col-md-6 .item .book-video a:nth-child(2) span:nth-child(3)').css('color','#fff');
    $('section.home nav .header .links ul li a.home').css('color','#fff').css('borderBottom','2px solid #D78C23');


    $('section.chefs').css('backgroundColor','#202020');
    $('section.chefs .container-fluid h2').css('color','#fff');
    $('section.chefs .container-fluid h2 span').css('color','#D78C23');
    $('section.chefs .container-fluid .row .col-md-6 .item').css('backgroundColor','#171717');
    $('section.chefs .container-fluid .row .col-md-6 .item .item-content h4').css('color','#fff');
    $('section.chefs .container-fluid .row .col-md-6 .item .item-content p').css('color','#aaa4a4');
    $('section.chefs .container-fluid .row .col-md-6 .item .img .wave').css('backgroundImage','url("images/team-shape-dark.svg")');
    
    
    $('section.gallery').css('backgroundColor','#252525');
    $('section.gallery div h2').css('color','#fff');
    $('section.gallery div h2 span').css('color','#D78C23');


    $('section.contact').css('backgroundColor','#202020');
    $('section.contact div h2').css('color','#fff');
    $('section.contact div h2 span').css('color','#D78C23');
    $('section.contact .container-fluid .info .col-md-6 .item').css('backgroundColor','#0D0D0D');
    $('section.contact .container-fluid .info .col-md-6 .item .icon').css('backgroundColor','#D78C23').css('color','black');
    $('section.contact .container-fluid .info .col-md-6 .item div p').css('color','#fff');
    $('section.contact .container-fluid .data').css('backgroundColor','#171717');
    $('section.contact .container-fluid .data form button').css('backgroundColor','#D78C23').css('color','black');
    
    
    $('footer .container .row .col-md-6.col-lg-3 .item .logo-footer h4 span').css('color','#D78C23');
    $('footer .container .row .col-md-12.col-lg-6 .item .send-subscribe a').css('backgroundColor','#D78C23');
    $('footer .container .row .col-md-12.col-lg-6 .item .send-subscribe a span').css('color','black');
    $('footer .container .row .col-md-6.col-lg-3 .item .get span').css('color','#D78C23');


    changeColor();

})
sun.click(function(){
    $(this).addClass('d-none');
    moon.removeClass('d-none');
    $('section.home nav .header .mode .fa-bars').css('color','#333');
    $('section.home nav').css('backgroundColor','#fff');
    $('section.home').css('backgroundColor','#eee');
    $('section.home nav .header .links ul li a').css('color','#7f7f90');
    $('section.home nav .header .logo h1 a span').css('color','hsl( 0, 84%, 44% )');
    $('section.home nav .header .logo h1 a').css('color','black');
    $('section.home .home-content .row .col-md-6 .item h2').css('color','#333');
    $('section.home .home-content .row .col-md-6 .item .book-video a:nth-child(1)').css('color','#fff').css('backgroundColor','hsl( 0, 84%, 44% )');
    $('section.home .home-content .row .col-md-6 .item .book-video a:nth-child(2) span:nth-child(1)').css('backgroundImage','linear-gradient(to right, hsl( 0, 84%, 44% ) 0 50%, transparent 50% 100%)');
    $('section.home .home-content .row .col-md-6 .item .book-video a:nth-child(2) span:nth-child(2)').css('backgroundColor','#fff').css('color','black');
    $('section.home .home-content .row .col-md-6 .item .book-video a:nth-child(2) span:nth-child(3)').css('color','#333');
    $('section.home nav .header .links ul li a.home').css('color','#fff').css('borderBottom','2px solid #D78C23');


    $('section.chefs').css('backgroundColor','#fff');
    $('section.chefs .container-fluid h2').css('color','black');
    $('section.chefs .container-fluid h2 span').css('color','hsl( 0, 84%, 44% )');
    $('section.chefs .container-fluid .row .col-md-6 .item').css('backgroundColor','#fff');
    $('section.chefs .container-fluid .row .col-md-6 .item .item-content h4').css('color','black');
    $('section.chefs .container-fluid .row .col-md-6 .item .item-content p').css('color','#7f7f90');
    $('section.chefs .container-fluid .row .col-md-6 .item .img .wave').css('backgroundImage','url("images/team-shape.svg")');
    
    
    $('section.gallery').css('backgroundColor','#eee');
    $('section.gallery div h2').css('color','#black');
    $('section.gallery div h2 span').css('color','#D78C23');


    $('section.contact').css('backgroundColor','#202020');
    $('section.contact div h2').css('color','#fff');
    $('section.contact div h2 span').css('color','hsl( 0, 84%, 44% )');
    $('section.contact .container-fluid .info .col-md-6 .item').css('backgroundColor','#F5F5F5');
    $('section.contact .container-fluid .info .col-md-6 .item .icon').css('backgroundColor','hsl( 0, 84%, 44% )').css('color','#fff');
    $('section.contact .container-fluid .info .col-md-6 .item div p').css('color','black');
    $('section.contact .container-fluid .data').css('backgroundColor','#fff');
    $('section.contact .container-fluid .data form button').css('backgroundColor','hsl( 0, 84%, 44% )').css('color','white');
    
    
    $('footer .container .row .col-md-6.col-lg-3 .item .logo-footer h4 span').css('color','hsl( 0, 84%, 44% )');
    $('footer .container .row .col-md-12.col-lg-6 .item .send-subscribe a').css('backgroundColor','hsl( 0, 84%, 44% )');
    $('footer .container .row .col-md-12.col-lg-6 .item .send-subscribe a span').css('color','#fff');
    $('footer .container .row .col-md-6.col-lg-3 .item .get span').css('color','hsl( 0, 84%, 44% )');

    changeColor();

})

let hometOffset = $('section.home').offset().top;
let chefOffset = $('section.chefs').offset().top;
let galleryOffset = $('section.gallery').offset().top;
let contactOffset = $('section.contact').offset().top;
if(($(window).scrollTop()>=hometOffset || $(window).scrollTop()==0) && $(window).scrollTop()<chefOffset){
    $('section.home nav .header .links ul li a').css('color','#7f7f90').css('borderBottom','0px');
    $('section.home nav .header .links ul li a.home').css('color','black').css('borderBottom','2px solid hsl( 0, 84%, 44% )');
}
function changeColor() {
    if(sun.attr('class').includes('d-none')){
        if($(window).scrollTop()>=hometOffset && $(window).scrollTop()<chefOffset){
            $('section.home nav .header .links ul li a').css('color','#7f7f90').css('borderBottom','0px');
            $('section.home nav .header .links ul li a.home').css('color','black').css('borderBottom','2px solid hsl( 0, 84%, 44% )');
        }
        else if($(window).scrollTop()>=chefOffset && $(window).scrollTop()<galleryOffset){
            $('section.home nav .header .links ul li a').css('color','#7f7f90').css('borderBottom','0px');
            $('section.home nav .header .links ul li a.chef').css('color','black').css('borderBottom','2px solid hsl( 0, 84%, 44% )');
        }
        else if($(window).scrollTop()>=galleryOffset && $(window).scrollTop()<contactOffset){
            $('section.home nav .header .links ul li a').css('color','#7f7f90').css('borderBottom','0px');
            $('section.home nav .header .links ul li a.gallery').css('color','black').css('borderBottom','2px solid hsl( 0, 84%, 44% )');
        }
        else if($(window).scrollTop()>=contactOffset){
            $('section.home nav .header .links ul li a').css('color','#7f7f90').css('borderBottom','0px');
            $('section.home nav .header .links ul li a.contact').css('color','black').css('borderBottom','2px solid hsl( 0, 84%, 44% )');
        }
    }
    else if(moon.attr('class').includes('d-none')){
        if($(window).scrollTop()>=hometOffset && $(window).scrollTop()<chefOffset){
            $('section.home nav .header .links ul li a').css('color','#aaa4a4').css('borderBottom','0px');
            $('section.home nav .header .links ul li a.home').css('color','#fff').css('borderBottom','2px solid #D78C23');
        }
        else if($(window).scrollTop()>=chefOffset && $(window).scrollTop()<galleryOffset){
            $('section.home nav .header .links ul li a').css('color','#aaa4a4').css('borderBottom','0px');
            $('section.home nav .header .links ul li a.chef').css('color','#fff').css('borderBottom','2px solid #D78C23');
        }
        else if($(window).scrollTop()>=galleryOffset && $(window).scrollTop()<contactOffset){
            $('section.home nav .header .links ul li a').css('color','#aaa4a4').css('borderBottom','0px');
            $('section.home nav .header .links ul li a.gallery').css('color','#fff').css('borderBottom','2px solid #D78C23');
        }
        else if($(window).scrollTop()>=contactOffset){
            $('section.home nav .header .links ul li a').css('color','#aaa4a4').css('borderBottom','0px');
            $('section.home nav .header .links ul li a.contact').css('color','#fff').css('borderBottom','2px solid #D78C23');
        }
    }
}

$(window).scroll(function(){

    if(sun.attr('class').includes('d-none')){
        if($(window).scrollTop()>=hometOffset && $(window).scrollTop()<chefOffset){
            $('section.home nav .header .links ul li a').css('color','#7f7f90').css('borderBottom','0px');
            $('section.home nav .header .links ul li a.home').css('color','black').css('borderBottom','2px solid hsl( 0, 84%, 44% )');
        }
        else if($(window).scrollTop()>=chefOffset && $(window).scrollTop()<galleryOffset){
            $('section.home nav .header .links ul li a').css('color','#7f7f90').css('borderBottom','0px');
            $('section.home nav .header .links ul li a.chef').css('color','black').css('borderBottom','2px solid hsl( 0, 84%, 44% )');
        }
        else if($(window).scrollTop()>=galleryOffset && $(window).scrollTop()<contactOffset){
            $('section.home nav .header .links ul li a').css('color','#7f7f90').css('borderBottom','0px');
            $('section.home nav .header .links ul li a.gallery').css('color','black').css('borderBottom','2px solid hsl( 0, 84%, 44% )');
        }
        else if($(window).scrollTop()>=contactOffset){
            $('section.home nav .header .links ul li a').css('color','#7f7f90').css('borderBottom','0px');
            $('section.home nav .header .links ul li a.contact').css('color','black').css('borderBottom','2px solid hsl( 0, 84%, 44% )');
        }
    }
    else if(moon.attr('class').includes('d-none')){
        if($(window).scrollTop()>=hometOffset && $(window).scrollTop()<chefOffset){
            $('section.home nav .header .links ul li a').css('color','#aaa4a4').css('borderBottom','0px');
            $('section.home nav .header .links ul li a.home').css('color','#fff').css('borderBottom','2px solid #D78C23');
        }
        else if($(window).scrollTop()>=chefOffset && $(window).scrollTop()<galleryOffset){
            $('section.home nav .header .links ul li a').css('color','#aaa4a4').css('borderBottom','0px');
            $('section.home nav .header .links ul li a.chef').css('color','#fff').css('borderBottom','2px solid #D78C23');
        }
        else if($(window).scrollTop()>=galleryOffset && $(window).scrollTop()<contactOffset){
            $('section.home nav .header .links ul li a').css('color','#aaa4a4').css('borderBottom','0px');
            $('section.home nav .header .links ul li a.gallery').css('color','#fff').css('borderBottom','2px solid #D78C23');
        }
        else if($(window).scrollTop()>=contactOffset){
            $('section.home nav .header .links ul li a').css('color','#aaa4a4').css('borderBottom','0px');
            $('section.home nav .header .links ul li a.contact').css('color','#fff').css('borderBottom','2px solid #D78C23');
        }
    }
})