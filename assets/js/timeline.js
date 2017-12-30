Timeline = function (options) {
   this.init = function(options){
      this.selector = options.selector;
      this.parent = options.parent;

      this.processItems();
   }

   this.processItems = function(){
      console.log('processItems');
      var items = document.querySelectorAll(this.selector);

      var margin = 30;
      var firstColumnHeight = 0;
      var secondColumnHeight = 50;

      var parentHeight = 0;
      var top = 0;

      var viewportWidth = Math.min(document.documentElement.clientWidth, window.innerWidth || 0);
      
      var width = 50;

      if (viewportWidth < 768)
         width = 100;

      for (var x = 0; x < items.length; x++) {
         var style = "";

         if (viewportWidth < 768)
         {
            items[x].style = "";
            continue;
         }            

         style += "width: " + width + "%;";
         style += "top: " + top + "px;";

         if (x % 2 == 0) {
            style += "top: " + firstColumnHeight + "px;";
            items[x].classList.add("odd");
            style += "left: 0";
            firstColumnHeight += items[x].offsetHeight + margin;
         }
         else {
            style += "top: " + secondColumnHeight + "px;";
            items[x].classList.add("couple");
            style += "right: 0";
            secondColumnHeight += items[x].offsetHeight + margin;
         }

         items[x].style = style;
      }

      if (viewportWidth < 750)
         document.querySelector(this.parent).style = "height: auto;";
      else
         document.querySelector(this.parent).style = "height: " + secondColumnHeight + "px;";
   }

   this.init(options);
   window.addEventListener('resize', this.processItems)
}