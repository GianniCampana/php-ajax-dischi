const app = new Vue({


    el: '#app',
    
    data:{
            albums:[],
            genres:[],
            genreToSearch: 'all',
            apiUrl: 'http://localhost:8888/php-ajax-dischi/api.php',
    
    },
    methods:{
    
        getAPI(){
            axios.get(this.apiUrl,{
                params:{
                    genre: this.genreToSearch
                }
            })
            .then(res => {
                this.albums=res.data.albums;
                this.genres=res.data.genres;
                console.log(res.data.albums);
                console.log(this.genres);
            }).catch(err =>{
                console.log(err);
            })
        }
      
    },
    
    created(){
        this.getAPI();
    
    }
    
    });