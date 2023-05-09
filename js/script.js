const app = Vue.createApp({
    data() {
        return {
            newTodo: '',
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
            this.todos[i].done = !this.todos[i].done;
        },
        deleteElement(index) {
            this.todos.splice(index, 1);
        },
        addTodo(i) {
            this.todos.unshift(this.newTodo);
            this.newTodo = '';
        },
    }
});

app.mount('#app')