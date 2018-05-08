var vm = new Vue({
  el : "#vue-app",

  data:{
    result : "",
    ans : "",
  },

  methods:{
    numberClick(event){
      this.result += event.target.value;
    },

    opClick(event){
      this.result += event.target.value;
    },

    enterClick(){
      this.result = eval(this.result);
      this.ans = this.result;
    },

    ACClick(){
      this.result = "";
    },

    CEClick(){
      this.result = this.result.slice(0,this.result.length - 1);
    },

    ansClick(){
      this.result = this.ans;
    }
  }

});
