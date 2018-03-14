var divs = ["Menu1", "Menu2", "Menu3", "Menu4"];
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
function ValidateLoginForm() {
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    storedEmail = localStorage.getItem('email');
    storedPwd = localStorage.getItem('password');
    if (email.value && password.value) {
        if (email.value == storedEmail && password.value == storedPwd) {
            document.getElementById("loginSucess").innerHTML = "You are successfully loged in";
        } else {
            document.getElementById("loginError").innerHTML = "Invalid credentials";
        }
    } else {
        console.log(document.getElementById("blankError"));
        document.getElementById("blankError").innerHTML = "Please fill this field";
    }
}

function ValidateRegForm() {
    re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    fistname = document.getElementById("firstname").value;
    lastname = document.getElementById("lastname").value;
    email = document.getElementById("email").value;
    gender = document.getElementById("gender").value;
    password = document.getElementById("password").value;
    confirm_password = document.getElementById("confirm_password").value;
    address = document.getElementById("address").value;
    console.log(fistname, lastname, email, "hiiiiiiiiiiiiiiiiiiiiiiii");

    if (fistname) {
        storedfn = localStorage.setItem('fistname', fistname.value);
    } else {
        document.getElementById("error").innerHTML = "Please fill this field";
    }
    if (lastname) {
        storedln = localStorage.setItem('lastname', lastname.value);
    } else {
        document.getElementById("error1").innerHTML = "Please fill this field";
    }
    if (re.test(email)) {
        storedemail = localStorage.setItem('email', email.value);
    } else {
        document.getElementById("error2").innerHTML = "Please fill this field";
    }
    if (gender) {
        storedgender = localStorage.setItem('gender', gender.value);
    } else {
        document.getElementById("error3").innerHTML = "Please select any one";
    }
    if (password == null && password == "") {
        storedpwd = localStorage.setItem('password', password.value);
    } else {
        document.getElementById("error4").innerHTML = "Please fill this field";
    }
    if (confirm_password) {

        if (confirm_password == password) {
            storedcnfpwd = localStorage.setItem('confirm_password', confirm_password.value);
        } else {
            document.getElementById("error5").innerHTML = "Your password does not match";
        }
    } else {
        document.getElementById("error5").innerHTML = "Please fill this field";
    }
    if (address) {
        storedaddr = localStorage.setItem('address', address.value);
    } else {
        document.getElementById("error6").innerHTML = "Please fill this field";
    }
}

// function addList(myTable) {
//     alert("here")
//     var table = document.getElementById(myTable);

//     var rowCount = table.rows.length;
//     var row = table.insertRow(rowCount);

//     var b = document.getElementById('txt1').value;
//     var cell1 = row.insertCell(0);
//     var element1 = document.createElement("input");
//     element1.type = "text";
//     element1.style.width = "100%";
//     element1.name = "txtbox[]";
//     element1.value = b;
//     cell1.appendChild(element1);
//     var cell2 = row.insertCell(1);
//     var element2 = document.createElement("input");
//     element2.type = "checkbox";
//     element2.name = "chkbox[]";
//     cell2.appendChild(element2);
//     document.getElementById("txt1").value = " ";
//     document.getElementById("pTotal").innerHTML = rowCount + 1;
// }

// function deleteList(myTable) {

//     var table = document.getElementById(myTable);
//     var rowCount = table.rows.length;

//     for (var i = 0; i < rowCount; i++) {
//         var row = table.rows[i];
//         var chkbox = row.cells[1].childNodes[0];
//         if (null != chkbox && true == chkbox.checked) {
//             table.deleteRow(i);
//             rowCount--;
//             i--;

//             document.getElementById("pTotal").innerHTML = rowCount;

//         }
//     }
// }

// document.getElementById("#taskInput").addEventListener("keypress", function (e) {
//     var key = e.which || e.keyCode;
//     alert("here")
//     if (( key == 13 ) && ( document.getElementById("#taskInput").value.length > 0 )) // 13 is enter
//         alert("ifaaa")
//         addToList( this.value.trim() );
// });
// var taskList = [],
//     completedTasks = [];

// function handleEnter(e) {
//     alert("hi")
//     var key = e.keyCode || e.which;
//     alert("=======", key)
//     alert("*********", document.getElementById("taskInput").value)
//     if ((key == 13) && (document.getElementById("taskInput").value.length > 0)){
//         alert("ifaaa")
//         addToList(this.value);
//     }
// }

// if( JSON.parse( localStorage.getItem( 'taskList' )))
//     taskList = JSON.parse( localStorage.getItem( 'taskList' ));
// else
//     localStorage.setItem("taskList", JSON.stringify( taskList ));

// updateCompletedListArray();
// updateListView();

// function updateCompletedListArray() {
//     completedTasks = [];

//     taskList.forEach(function( task ) {
//         if( task.done )
//             completedTasks.push( taskList.indexOf( task ) + '' );
//     });
// }

// function addToList( task ){
//     alert("now in add")
//     if( checkDuplicate( task )) {
//         // animateInvalid(); // Animates input field with red outline if an invalid input is given
//         return;
//     }

//     taskList.push({
//         name: task,
//         done: false
//     });

//     updateListView();

//     localStorage.setItem('taskList', JSON.stringify( taskList ));
//     document.querySelector('#taskInput').value = '';
// }

// function updateListView() {
//     var ul = document.getElementById('taskList');

//     ul.innerHTML = '';

//     taskList.forEach(function( task ) {
//         var listItem = document.createElement('li'),
//             taskLabel = document.createElement('label'),
//             delBtn = document.createElement('span'),
//             checkbox = document.createElement('input');

//         listItem.className = 'task';
//         listItem.id = taskList.indexOf( task );

//         taskLabel.className = 'taskLabel';
//         taskLabel.textContent = task.name;
//         taskLabel.htmlFor = 'c' + taskList.indexOf( task );

//         delBtn.className = 'deleteTaskBtn';
//         delBtn.textContent = 'x';
//         delBtn.onclick = deleteThisTask;

//         checkbox.className = 'taskCheckbox'
//         checkbox.id = 'c' + taskList.indexOf( task );
//         checkbox.type = 'checkbox';
//         checkbox.checked = task.done;
//         checkbox.onclick = toggleChecked;

//         listItem.appendChild( checkbox );
//         listItem.appendChild( taskLabel );
//         listItem.appendChild( delBtn );
//               ul.appendChild( listItem );
//     });
// }

// function toggleChecked(e) {
//     var checkStatus = e.target.checked,
//         task = e.target.parentElement,
//         taskId = task.id,
//         removed = false;

//     taskList[taskId].done = checkStatus;

//     if( completedTasks.length === 0 ) {
//         completedTasks.push( taskId );
//     }
//     else {
//         completedTasks.forEach(function( index ) {
//             if( taskId === index ) {
//                 completedTasks.splice( completedTasks.indexOf( index ), 1 );
//                 removed = true;
//             }
//         });

//         if( !removed ) {
//             completedTasks.push( taskId );
//             completedTasks.sort();
//         }
//     }

//     saveLocalList();
// }

// function checkDuplicate( task ) {
//     var matchFound = false;

//     taskList.forEach(function( t ) {
//         if( t.name === task )
//             matchFound = true;
//     });

//     return matchFound;
// }

// function deleteThisTask(e) {
//     taskList.splice( e.target.parentElement.id, 1 );

//     saveLocalList();
//     updateCompletedListArray();
//     updateListView();
// }

// function deleteCompleted() {
//     var length = completedTasks.length;

//     for( var i = completedTasks.length; i--; ) {
//         taskList.splice( completedTasks[i], 1 );
//     }

//     saveLocalList();
//     updateCompletedListArray();
//     updateListView();
// }

// function deleteAll() {
//     if(( taskList.length > 0 ) && confirm( "Are you sure you want to delete all your tasks?" )) {
//         var ul = document.getElementById('taskList');
//         ul.innerHTML = '';
//         taskList = completedTasks = [];
//         saveLocalList();
//     }
// }

// function saveLocalList() {
//     localStorage.setItem("taskList", JSON.stringify( taskList ));
// }
