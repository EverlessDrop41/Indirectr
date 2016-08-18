$(document).ready(function () {
  window.app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue.js!',
      editor: {
        content: ""
      },
      indirects: [
        { content: "Apple 1" },
        { content: "Tomato 2" },
        { content: "Grape 10" },
        { content: "Pear 59" }
      ]
    },
    methods: {
      add: function () {
        //Do the add stuff
      },
      composeTweet: function (content) {
        var win = window.open("https://twitter.com/intent/tweet?text=" + content, '_blank');
        win.focus();
      }
    }
  });
});