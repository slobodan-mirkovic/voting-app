'use strict';

(function () {

   var addButton = document.querySelector('.btn-add');
   var deleteButton = document.querySelector('.btn-delete');
   var deleteBtn = document.querySelector('.deleteBtn');

   var apiUrl = appUrl + '/api/:id/clicks';

   // function updateClickCount (data) {
   //    var clicksObject = JSON.parse(data);
   //    clickNbr.innerHTML = clicksObject.clicks;
   // }

   // ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount));



   // deleteButton.addEventListener('click', function () {

   //    ajaxFunctions.ajaxRequest('DELETE', apiUrl, function () {
   //       ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount);
   //    });

   // }, false);

})();
