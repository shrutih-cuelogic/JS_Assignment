var userprofilePageServices = (function() {
    return false;
    var activeUser = localStorageServices.getLocalStorage("activeUser");

    var getactiveUserobject = function() {
        return localStorageServices.getLocalStorage(activeUser);
    }

    var activeUserObject = getactiveUserobject();
    document.getElementById("email").innerHTML = activeUserObject["email"];
    document.getElementById("userProfile").setAttribute('src', activeUserObject["image"]);
    document.getElementById("firstname").value = activeUserObject["first_name"];
    document.getElementById("lastname").value = activeUserObject["lastname"];
    document.getElementById("address").value = activeUserObject["address"];
    document.getElementById(activeUserObject["gender"]).checked = true;

    var changeFName = function(firstname) {
        activeUserObject["firstname"] = firstname.value;
        localStorageServices.setLocalStorage(activeUser, activeUserObject);

    }
    var changeLName = function(last_name) {
        activeUserObject["lastname"] = lastname.value;
        localStorageServices.setLocalStorage(activeUser, activeUserObject);

    }
    var changeGender = function(gender) {
        activeUserObject["gender"] = gender.value;
        localStorageServices.setLocalStorage(activeUser, activeUserObject);

    }
    var changeAddr = function(address) {
        activeUserObject["address"] = address.value;
        localStorageServices.setLocalStorage(activeUser, activeUserObject);
    }

    var changeUserProfileImage = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                document.getElementById('userProfile').setAttribute('src', e.target.result);
                activeUserObject['image'] = e.target.result;
                localStorageServices.setLocalStorage(activeUser, activeUserObject);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }

    var service = {};

    service.changeFName = changeFName;
    service.changeLName = changeLName;
    service.changeGender = changeGender;
    service.changeAddr = changeAddr;
    service.changeUserProfileImage = changeUserProfileImage;

    return service;

})();