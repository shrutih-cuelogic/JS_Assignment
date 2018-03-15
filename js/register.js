var registrationServices = (function() {

    var image;

    document.getElementById("registration_form").onsubmit = function() {

        // var username = document.getElementById("username").value;
        var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
        var first_name = document.getElementById("firstname").value;
        var last_name = document.getElementById("lastname").value;
        var email = document.getElementById("email").value;
        var address = document.getElementById("address").value;
        var password = document.getElementById("password").value;
        var confirm_password = document.getElementById("confirm_password").value;
        var genderValue;
        if (document.getElementById("gender-0").checked) {
            genderValue = document.getElementById('gender-0').value;
        } else {
            genderValue = document.getElementById('gender-1').value;
        }
        var validEmail;
        if (re.test(email)) {
            validEmail = email;
        } else {
            document.getElementById("incorrectEmail").innerHTML = "Enter the valid email address!<br />";
        }
        
        document.getElementById("confirm_passworderror").innerHTML = "";
        document.getElementById("emailError").innerHTML = "";

        var form = this;
        if (password != confirm_password) {
            document.getElementById("confirm_passworderror").innerHTML = "<span style='color: red;'>Your password does not match</span>";
            return false;
        }
        if (localStorageServices.getLocalStorage("AllUsers") === null) {
            allUsersEmail = []
            allUsersEmail.push(validEmail)
            localStorageServices.setLocalStorage("AllUsers", allUsersEmail);
        } else {
            allUsersEmail = localStorageServices.getLocalStorage("AllUsers");
            if (allUsersEmail.indexOf(validEmail) === -1) {
                allUsersEmail.push(validEmail)
                localStorageServices.setLocalStorage("AllUsers", allUsersEmail);
            } else {
                document.getElementById("emailError").innerHTML = "<span style='color: red;'>E-mail Id is already exist</span>";
                return false
            }
        }
        setUserDetails(validEmail, firstname, lastname, genderValue, address, password);
        document.getElementById("loginView").style.display="none";
        document.getElementById("registerView").style.display="none";
        document.getElementById("loggedProfileView").style.display="block";
        document.getElementById("loggedViewTodo").style.display="block";
        document.getElementById("LogoutView").style.display="block";   
    }

    var setUserDetails = function(validEmail, firstname, lastname, genderValue, address, password) {

        var user = { "validEmail": validEmail, "firstname": firstname, "lastname": lastname, "gender": genderValue, "address": address, "password": password, "image": image };
        localStorageServices.setLocalStorage(validEmail, user);
        localStorageServices.setLocalStorage("activeUser", validEmail);

    }

    var setProfileImage = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('profile_img').removeAttribute("hidden");
                document.getElementById('profile_img')
                    .setAttribute('src', e.target.result);
                image = e.target.result;

            };
            reader.readAsDataURL(input.files[0]);
        }
    }

    var service = {};
    service.setUserDetails = setUserDetails;
    service.setProfileImage = setProfileImage;

    return service;

})();