define(["Vue"], function(Vue){
    var helloVm = new Vue({
        el: "#hello-vue",
        data: {
            message: 'hello vue!',
        }
    });

    var demoDataBound = new Vue({
        el: "#demo-render",
        data: {
            demoText: "this is my first vue",
        },

    });

    var vueIf = new Vue({
        el: "#demo-vif",
        data: {
            show: true,
        },
    });

    var demo2 = new Vue({
        el: "#demo-vfor",
        data: {
            fruits:[
                {name: 'apple', size: 'big', description: 'sweet and delicious', style: {color:'red', background: '#eaeaea', border: '1px solid #4a4545'}},
                {name: 'banana', size: 'middle', description: 'good', style: {color:'yellow', background: '#eaeaea', border: '1px solid #4a4545'}},
                {name: 'pear', size: 'small', description: 'a little sour', style: {color: '#f3ec05', background: '#bfbfb6', border: '1px solid #4a4545'}},
            ]
        }
    });

    var demo3 = new Vue({
        el: "#demo-databinding",
        data: {
            message: '',
        }
    });

    var demo4 = new Vue({
        el: "#demo-computed",
        data: {
            message: '',
        },
        computed: {
            computedMessage: function () {
                return this.message + '后缀';
            }
        }
    });

    var demo5 = new Vue({
        el:"#demo-events",
        data: {
            number: 0,
        },
        methods: {
            increase: function(){
                this.number ++;
            },
            decrease: function(){
              this.number --;
            }
        }
    });

    var demo6 = new Vue({
        el:"#demo-attr-binding",
        data: {
            imgUrl: "./logo.png"
        }
    });

    Vue.component("my-component", {
        template: "<div>A custom component!</div>",
    });
    var demo7 = new Vue({
        el:"#demo-component",
    });

});
