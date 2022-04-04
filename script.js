console.log('JS OK');

const app = new Vue({
    el:  "#root",
    data: {
        emailRandom: '',
    },
    mounted(){
        console.log('server pronto', this.emailRandom);

       
        // axios libreria
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( (response) => {
            const result = response.data;
            console.log('fine funzione', this.emailRandom, result);
        });
    }
})


