const app = Vue.createApp({
  data(){
    return{
      text:"這是一段文字",
      isLoading:false,
      swiperImg:[
        {url:"https://chass.ncku.edu.tw/index.php",image:"https://images.unsplash.com/photo-1632827326370-af72d4fa9691?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=770&q=80"},
        {url:"https://chass.ncku.edu.tw/index.php",image:"https://images.unsplash.com/photo-1633228491597-b39f823e0541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=8"},
        {url:"https://chass.ncku.edu.tw/index.php",image:"https://images.unsplash.com/photo-1632827326370-af72d4fa9691?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=770&q=80"},
        {url:"https://chass.ncku.edu.tw/index.php",image:"https://images.unsplash.com/photo-1677607223752-aa6ae7e582ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"},
        {url:"https://chass.ncku.edu.tw/index.php",image:"https://images.unsplash.com/photo-1632827326370-af72d4fa9691?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=770&q=80"},
        {url:"https://chass.ncku.edu.tw/index.php",image:"https://images.unsplash.com/photo-1632827326370-af72d4fa9691?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=770&q=80"},
        {url:"https://chass.ncku.edu.tw/index.php",image:"https://images.unsplash.com/photo-1632827326370-af72d4fa9691?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=770&q=80"},
        {url:"https://chass.ncku.edu.tw/index.php",image:"https://images.unsplash.com/photo-1632827326370-af72d4fa9691?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=770&q=80"},
        {url:"https://chass.ncku.edu.tw/index.php",image:"https://images.unsplash.com/photo-1632827326370-af72d4fa9691?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=770&q=80"},
      ]

    }
  },
  mounted(){
    this.isLoading = true;
    // simulate AJAX
    setTimeout(() => {
        this.isLoading = false
    }, 2000)
  }
})

app.component('loading',VueLoading.Component)
app.mount('#app')


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  rewind: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});




