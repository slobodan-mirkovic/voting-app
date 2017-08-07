'use strict';

(function () {

   var profileId = document.querySelector('#profile-id') || null;
   var apiUrlpoll = appUrl + '/poll:id';

   function updateHtmlElement (data, element, userProperty) {
      element.innerHTML = data[userProperty];
   }
     ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrlpoll, function (data) {
     var  dat = JSON.parse(data);
      dat.forEach(function(element) {
       var input = document.createElement("a")
        input.className = "list-group-item";
        input.innerHTML = element.name;
        input.href="/poll"
        list.appendChild(input);
     });

   }));


})();
