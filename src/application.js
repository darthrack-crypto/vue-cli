export const application = {
    data() {
        return {
            nameForTask: 'Название задачи',
            tasks: [
                {text: 'Развернуть окружение в Codepen', done: true},
                {text: 'Пройти курс по Vue', done: false},
                {text: 'Сделать интернет-магазин на Vue', done: false}
            ]
        }
    },
    methods: {
        addTask() {
            this.tasks.push({text: this.textTask, done: false});
            this.textTask = '';
        },
        count() {
            return this.tasks.filter(task => !task.done).length;
        }
    }
}