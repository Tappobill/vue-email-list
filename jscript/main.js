
var app = new Vue({
    el: '#root',
    data: {
        emailArray: []
    },
    mounted() {

        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    // console.log(response)
                    let emailSingola = response.data.response
                    this.emailArray.push(emailSingola)
                })
        }
    },
    beforeUpdate() {

    },
    methods: {

    }
})