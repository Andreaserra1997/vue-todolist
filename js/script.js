const app = Vue.createApp({
    data() {
        return {
            todos: [
                {
                    text:'asdfg',
                    done: true,
                },
                {
                    text:'safdf',
                    done: true,
                },
                {
                    text:'sdfg',
                    done: true,
                },
            ]
        };
    },
    methods: {
        todoDone(i) {
            return this.todos[i].done = !this.todos[i].done;
        },
        deleteElement(index) {
            this.todos.splice(index, 1);
        },
    }
});

app.mount('#app')