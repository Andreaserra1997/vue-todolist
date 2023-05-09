const app = Vue.createApp({
    data() {
        return {
            todos: [
                {
                    text:'Fare i compiti',
                    done: true,
                },
                {
                    text:'Fare la spesa',
                    done: true,
                },
                {
                    text:'Fare il bucato',
                    done: true,
                },
            ]
        };
    },
});

app.mount('#app')