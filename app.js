Vue.filter('uppercase', function (value) {
	return value.toUpperCase(0)
		})

const vm = new Vue({
  el: '#pokesearch',
  data() {
    return {
    	id: '1',
    	pokeid: '',
    	pokename: '',
    	pokeimage: '',
    	legendary: ''

    	
    	

    }
  },
  created() {
    this.search();
  },
  methods: {
    search: function () {
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
      
        .then(response => response.json())
        .then(json => {
          this.pokename = json.name;
          this.url = json.url;
          this.pokeid = String(json.id).padStart(3, "0");
          this.pokeidd = json.id;
          this.pokeimage = json.sprites['front_default'];
          this.poketype = json.types.map((type) => type.type.name).join(', ');
          this.pokeheight = json.height;
          this.pokeweight = json.weight;
          
          
	  });


       fetch(`https://pokeapi.co/api/v2/pokemon-species/${this.id}`)
       .then(response => response.json())
        .then(json => {
           this.legendary = String(json.is_legendary);
          
      });
         
      
          
          
      
        
    } 


  }
}); 