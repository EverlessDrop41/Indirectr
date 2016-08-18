$(document).ready(function () {
  var indirectStorageKey = "indirects";

  window.app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue.js!',
      editor: {
        content: ""
      },
      indirects: [
        { content: "This is a sample" }
      ]
    },
    methods: {
      add: function () {
        var theContent = this.editor.content;

        this.$set("editor.content", "");

        this.indirects.push(makeNewIndirect(theContent));
        this.save();

      },
      deleteIndirect: function (indirect) {
        this.indirects.$remove(indirect);
        this.save();
      },
      composeTweet: function (content) {
        var win = window.open("https://twitter.com/intent/tweet?text=" + content, '_blank');
        win.focus();
      },
      save: function () {
        console.log("saving...");
        Lockr.set(indirectStorageKey, this.indirects);
      },
      load: function () {
        //TODO: Load the data
        var indirectsStored = Lockr.get(indirectStorageKey);
        if (indirectsStored != null) {
          this.$set("indirects", indirectsStored);
        }
      }
    },
    created: function () {
      this.load();
    }
  });
});

function makeNewIndirect(content) {
  return { content: content };
}