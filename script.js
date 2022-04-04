console.log('JS OK');

const app = new Vue({
    el:  "#root",
    data: {
        emailRandom: [],
    },
    mounted(){
        console.log('server pronto', this.emailRandom);

       
        // axios libreria
        for(let i = 0; i < 10; i++ ){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( (response) => {
            const result = response.data;
            //console.log('fine funzione', this.emailRandom, result);
            console.log('Email', result.response);
            //document.write(result.response);
            this.emailRandom.push(result.response);
            return this.emailRandom;
            
            })
            console.log(this.emailRandom)
        };    
        
    }
    
});



