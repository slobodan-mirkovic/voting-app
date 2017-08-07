'use strict';

(function () {

   var profileId = document.querySelector('#profile-id') || null;
   var profileUsername = document.querySelector('#profile-username') || null;
   var profileRepos = document.querySelector('#profile-repos') || null;
   var displayName = document.querySelector('#display-name');
   var loginbtn = document.querySelector('#loginbtn');
   var usernamespan = document.querySelector('#usernamespan');
   var logoutbtn = document.querySelector('#logoutbtn');
   var list = document.querySelector('#list');
   var newpoll = document.querySelector('#newpoll');
   var link = document.getElementsByClassName('link');
   var apiUrl = appUrl + '/api/:id';
   var apiUrlpolls = appUrl + '/polls';

   function updateHtmlElement (data, element, userProperty) {
      element.innerHTML = data[userProperty];
   }
//      ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrlpolls, function (data) {
//      var  dat = JSON.parse(data);
//     //   dat.forEach(function(element) {
//     //   var input = document.createElement("a")
//     //     input.className = "list-group-item";
//     //     input.innerHTML = element.name;
//     //     input.href="/poll/"+element._id;
//     //     var span = document.createElement("a")
//     //     span.className="pull-right glyphicon glyphicon-remove text-danger";
//     //     span.href="/poll/delete/"+element._id;
//     //     input.appendChild(span);
//     //     list.appendChild(input);
//     //  });

//   }));

   ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, function (data) {
     var er = false;
      try {
            var userObject = JSON.parse(data);
          } catch (e) {
            er = true;
          }
    
    
    if(er){
      loginbtn.classList.remove('hide');
     
    }
    else {
        usernamespan.classList.remove('hide');
        logoutbtn.classList.remove('hide');
        newpoll.classList.remove('hide');
        [].forEach.call(link, function(el) {
            el.className = el.className.replace(/\bhide\b/, "");
         });
      if (userObject.displayName !== null) {
         updateHtmlElement(userObject, displayName, 'displayName');
      } else {
         updateHtmlElement(userObject, displayName, 'username');
      }

      if (profileId !== null) {
         updateHtmlElement(userObject, profileId, 'id');   
      }

      if (profileUsername !== null) {
         updateHtmlElement(userObject, profileUsername, 'username');   
      }

      if (profileRepos !== null) {
         updateHtmlElement(userObject, profileRepos, 'publicRepos');   
      }
    }
      

   }));
})();
