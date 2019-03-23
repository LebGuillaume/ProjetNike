let vm = new Vue({
    el: '#app',
    data: {
        message:'jean',
        lastname:'delatour',
        fullname:''
    },
    methods:{
        demo: function () {
            console.log('demo')
        },
        demo2: function () {
            console.log('demo2')
        }
    }

})