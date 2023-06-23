const app = Vue.createApp({
  data(){
    return{
      text:"這是一段文字",
      isLoading:false

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