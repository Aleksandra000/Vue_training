new Vue({
        el:"#app1",
    data:{
        age:20,
        x:0,
        y:0
    },
    methods:{
            add:function (inc) {
                this.age+=inc;
            },
            substract:function (dec) {
                this.age-=dec;
            },
            updateXY:function (event) {
                this.x=event.offsetX;
                this.y=event.offsetY;
            }
    }

});

// new Vue({
//     data: function() {
//         return {
//             name: "Pierwsza aplikacja Vue!"
//         };
//     }
// }).$mount("#app2");
//



