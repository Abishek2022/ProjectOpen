const brand= document.getElementById("brand");
const brandArr=[
   {
       img:`assets/image/image (1).png`,
   },
   {
    img:`assets/image/image (2).png`,
},

{
    img:`assets/image/image (3).png`,
},

{
    img:`assets/image/image (4).png`,
},

{
    img:`assets/image/image (9).png`,
},

{
    img:`assets/image/image (5).png`,
},

{
    img:`assets/image/image (6).png`,
},

{
    img:`assets/image/image (7).png`,
},
{
    img:`assets/image/image (8).png`,
},
{
    img:`assets/image/image (10).png`,
},


 
];
brandArr.map((val,index)=>{
   brand.innerHTML +=`     <div class="brand-image items-center">
               <img src="${val.img}"/>
               
            </div>`
   

});

//latest shose section 
const latestOne= document.getElementById("latest-addition");
const latestOneArr=[
   {
       img:`assets/image/image 12 (1).jpg`,
       title:`Converse`,
       priceOne:`55000`,
       priceTwo:`65000`,

   },
   {
    img:`assets/image/image 13.png`,
    title:`Man`,
    priceOne:`5000`,
    priceTwo:`65000`,

},
{
    img:`assets/image/image 14.png`,
    title:`Converse`,
    priceOne:`55000`,
    priceTwo:`65000`,

},
{
 img:`assets/image/image 15.png`,
 title:`Man`,
 priceOne:`5000`,
 priceTwo:`65000`,

},
{
    img:`assets/image/image 15.png`,
    title:`Man`,
    priceOne:`5000`,
    priceTwo:`65000`,
   
   },
   {
    img:`assets/image/image 12 (1).jpg`,
    title:`Converse`,
    priceOne:`55000`,
    priceTwo:`65000`,

},
{
 img:`assets/image/image 13.png`,
 title:`Man`,
 priceOne:`5000`,
 priceTwo:`65000`,

},
{
 img:`assets/image/image 14.png`,
 title:`Converse`,
 priceOne:`55000`,
 priceTwo:`65000`,

},
{
img:`assets/image/image 15.png`,
title:`Man`,
priceOne:`5000`,
priceTwo:`65000`,

},
{
 img:`assets/image/image 15.png`,
 title:`Man`,
 priceOne:`5000`,
 priceTwo:`65000`,

},
];
latestOneArr.map((val,index)=>{
   latestOne.innerHTML +=`   <div class="item">   <div class="first-shose">
        <img src="${val.img}" alt="">
        <div class="productl-line">
            <div class="product-title">${val.title}</div>
            <div class="product-price flex ">
                <div class="price-list">Rs. ${val.priceOne} <span class="price-span">Rs. ${val.priceTwo}</span></div> 
                <div class="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    
                  
                </div> 
        </div>
        </div>
     
       </div></div>`
   

});



//categories
const catoOne= document.getElementById("categories-section");
const catoOneArr=[
   {
       img:`assets/image/image 12 (1).jpg`,
       title:`Converse`,
       priceOne:`55000`,
       priceTwo:`65000`,

   },
   {
    img:`assets/image/image 13.png`,
    title:`Man`,
    priceOne:`5000`,
    priceTwo:`65000`,

},
{
    img:`assets/image/image 14.png`,
    title:`Converse`,
    priceOne:`55000`,
    priceTwo:`65000`,

},
{
 img:`assets/image/image 15.png`,
 title:`Man`,
 priceOne:`5000`,
 priceTwo:`65000`,

},
{
    img:`assets/image/image 15.png`,
    title:`Man`,
    priceOne:`5000`,
    priceTwo:`65000`,
   
   },
   {
    img:`assets/image/image 12 (1).jpg`,
    title:`Converse`,
    priceOne:`55000`,
    priceTwo:`65000`,

},
{
 img:`assets/image/image 13.png`,
 title:`Man`,
 priceOne:`5000`,
 priceTwo:`65000`,

},
{
 img:`assets/image/image 14.png`,
 title:`Converse`,
 priceOne:`55000`,
 priceTwo:`65000`,

},
{
img:`assets/image/image 15.png`,
title:`Man`,
priceOne:`5000`,
priceTwo:`65000`,

},
{
 img:`assets/image/image 15.png`,
 title:`Man`,
 priceOne:`5000`,
 priceTwo:`65000`,

},
];
catoOneArr.map((val,index)=>{
   catoOne.innerHTML +=`   <div class="item">   <div class="first-shose">
        <img src="${val.img}" alt="">
        <div class="productl-line">
            <div class="product-title">${val.title}</div>
            <div class="product-price flex ">
                <div class="price-list">Rs. ${val.priceOne} <span class="price-span">Rs. ${val.priceTwo}</span></div> 
                <div class="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    
                  
                </div> 
        </div>
        </div>
     
       </div></div>`
   

});

//accodem

$(function() {
	
	//BEGIN
	$(".accordion__title").on("click", function(e) {

		e.preventDefault();
		var $this = $(this);

		if (!$this.hasClass("accordion-active")) {
			$(".accordion__content").slideUp(400);
			$(".accordion__title").removeClass("accordion-active");
			$('.accordion__arrow').removeClass('accordion__rotate');
		}

		$this.toggleClass("accordion-active");
		$this.next().slideToggle();
		$('.accordion__arrow',this).toggleClass('accordion__rotate');
	});
	//END
	
});


$('.latest-product.owl-carousel').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});

$('.product-section.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3

        }
    }
});

var $el = $(".nav").offcanvas();

$(".js-toggle-offcanvas").on("click.offcanvas", function() {
    $el.offcanvas("toggle");
});
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function myyFunction() {
    var x = document.getElementById("mySearch");
    if (x.className === "search") {
      x.className += " responsive";
    } else {
      x.className = "search";
    }
  }
  