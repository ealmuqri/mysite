/*
Swiper project:
- Traverse HTML document for swiper-item & and swiper-container.
    - swiper-container is going to contain swiper items.
    - swiper-items list of items that will be swiped.
    - Foreach swiper-container swiper.js will create an object of swiper.
    - Foreach swiper-item swiper.js will assign an ID to reference. 
- Plugabble and works OTTB without relyin on any JS or CSS libs.
- Configrable:
    - Swipe mode either Circular or Linear. [swipeType]
    - Number of items to be swiped. [swipableItems]
- [Revise]: Decoupled from other swipers where each swiper object will have its own configs. 

*/
var swiper={
    // Swiper Config
        swipeType: "linear",     // or Circular
        swipableItems: 3, // 1, 2 or 3
    
    // Swiper Globals { don't touch :) }
        current:'',
        numberOfSwipables:'',
        swiperItems:[],
    
    // Swiper Functions

        // initilizes the object 
        init: function(){
            
        }
    
};