$(document).ready(function(){
    $(".second-banner").owlCarousel({
        items:1,
        autoplay:true,
        loop:true,
    });
    $(".category-y").owlCarousel({
      
        loop:true,
        autoplay:true,
        responsiveclass:true,
        responsive:{
            0:{
                items:2,
                margin:30,
            },
            575:{
                items:3,
            },
            767:{
                items:5,
            },
            991:{
                items:6,
                 margin:100,
            }
        }
        });
    $(".popular-article").owlCarousel({
        margin:20,
        loop:true,
        autoplay:true,
        responsive:{
            0:{
                items:2,
            },
            575:{
                items:3,
            },
            767:{
                items:5,
            }
        }
    });
})
    const login=document.getElementById("login")
    const loginpart=document.getElementById("loginpart")
    const close=document.getElementById("close")

    login.addEventListener("click",function(){
        loginpart.style.display="block"
    })
    close.addEventListener("click",function(){
        loginpart.style.display="none"
    })

