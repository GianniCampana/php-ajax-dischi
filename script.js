const app = new Vue({


el: '#app',

data:{
        albums:[],
        apiUrl: 'http://localhost:8888/php-ajax-dischi/api.php',

},
methods:{

    getAPI(){
        axios.get(this.apiUrl)
        .then(res => {
            this.albums=res.data;
            console.log(this.albums);
        }).catch(err =>{
            console.log(err);
        })
    }
  
},

created(){
    this.getAPI();

}

});