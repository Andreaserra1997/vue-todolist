const app = Vue.createApp({
    data() {
        return {
            newTodo: '',
            inputError: false,
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
    methods: {
        todoDone(i) {
            this.todos[i].done = !this.todos[i].done;
        },
        deleteElement(index) {
            this.todos.splice(index, 1);
        },
        addTodo(i) {
            let cleanTodo = this.newTodo.trim();
            if (cleanTodo.length >= 5) {
                this.todos.unshift({
                    text: this.newTodo,
                    done: true,
                });
                this.newTodo = '';  
                this.inputError = false;
            } else {
                this.inputError = true;
            }
        },
    }
});

app.mount('#app');