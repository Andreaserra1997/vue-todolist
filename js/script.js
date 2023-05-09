const app = Vue.createApp({
    data() {
        return {
            todos: [
                {
                    text:'',
                    done: true,
                },
                {
                    text:'',
                    done: true,
                },
                {
                    text:'',
                    done: true,
                }
            ]
        };
    },
});

app.mount('#app')