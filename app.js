const app=Vue.createApp({
    data(){
        return{
            friends:[
                {
                    id:"noor9027",
                    name:"Noor Mohammad Talukder",
                    phone:"321 654 987",
                    email:"abc@gmail.com",
                },
                {
                    id:"alif724",
                    name:"Alif Islam",
                    phone:"123 456 789",
                    email:"bbc@gmail.com",
                },
            ]
        }
    }
});
app.component('friend-contact',{
    data(){
        return{
            detailsAreVisible:false,
        }
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible=!this.detailsAreVisible;
        }
    }
})
app.mount('#app');