new Vue({
    el:"#app1",
    data:{
        age:20,

    },
    methods:{
        add:function (inc) {
            this.age+=inc;
        },
        substract:function (dec) {
            this.age-=dec;
        },
    }
});

new Vue({
    el:"#app2",
    data:{
        x:0,
        y:0
    },
    methods:{

        updateXY:function (event) {
            this.x=event.offsetX;
            this.y=event.offsetY;
        }
    }
});
new Vue({
    el:"#app3",
    data(){
        return{

        name: "to-do-item",
        props: ['todo'],
        todo:"zadanie..."
        };
    },

        methods: {

            createNewToDoItem() {
                return this.todo
            },
            onDeleteItem(todo){
                this.list = this.list.filter(item => item !== todo);
            }
        }

});