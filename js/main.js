var divs = ["Menu1", "Menu2", "Menu3", "Menu4", "Menu5"];
var visibleDivId = null;

function toggleVisibility(divId) {
    if (visibleDivId === divId) {
        visibleDivId = null;
    } else {
        visibleDivId = divId;
    }
    hideNonVisibleDivs();
}

function hideNonVisibleDivs() {
    var i, divId, div;
    for (i = 0; i < divs.length; i++) {
        divId = divs[i];
        div = document.getElementById(divId);
        if (visibleDivId === divId) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    }
}


var mainServices = (function() {

    var logout = function() {
        localStorageServices.setLocalStorage("activeUser", "");
    }

    var clearCategories = function(cat_name) {

        document.querySelectorAll('input[name="' + cat_name + '"]')[0].checked = false;
        document.querySelectorAll('input[name="' + cat_name + '"]')[1].checked = false;
        document.querySelectorAll('input[name="' + cat_name + '"]')[2].checked = false;
        document.querySelectorAll('input[name="' + cat_name + '"]')[3].checked = false;
    }

    var getActiveUser = function() {
        return localStorageServices.getLocalStorage("activeUser");
    }

    var getAllData = function(activeUser) {
        return localStorageServices.getLocalStorage(activeUser + "Data");
    }

    var setAllData = function(activeUser, dataList) {
        return localStorageServices.setLocalStorage(activeUser + "Data", dataList);
    }

    var closeForm = function(form_id) {
        document.getElementById(form_id).setAttribute("hidden", "hidden");
    }

    var hideForm = function() {
        document.getElementById("addFormData").setAttribute("hidden", "hidden");
        document.getElementById("editFormData").setAttribute("hidden", "hidden");
    }

    var service = {};
    service.logout = logout;
    service.clearCategories = clearCategories;
    service.getActiveUser = getActiveUser;
    service.getAllData = getAllData;
    service.setAllData = setAllData;
    service.closeForm = closeForm;
    service.hideForm = hideForm;
    // service.displayToDoItem = displayToDoItem;
    // service.Reminder = Reminder;
    // service.category = category;
    return service;

})();
