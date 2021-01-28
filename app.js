function signIt(){
    document.getElementById('popup-1').classList.toggle('active');
}

function closeWindow() {
    document.getElementById('popup-1').classList.toggle('active');
}

class UI {
    showAlert(alertMessage, className){
        //creating a div
        const div = document.createElement('div');

        //creating class for div
        div.className = `alert ${className}`;

        //add text to div
        div.appendChild(document.createTextNode(alertMessage));

        //get Parent Element
        const container = document.querySelector('.form-container');
        const form = document.querySelector('.input-form');

        //insert alert
        container.insertBefore(div,form);

        //timeout after 3 seconds
        setTimeout(function() {document.querySelector('.alert').remove();}, 3000);


    };

    clearFields(){
        document.getElementById('name').value = '';
        document.getElementById('message').value = '';
    }

    hilightField(id){
        document.getElementById(`${id}`).style.border = '1px red solid';
    }
    removeHilight(id){
        document.getElementById(`${id}`).style.border = '1px black solid';
    };

    addEntry(name,message){
        var entry = document.createElement('div');
        var container = document.getElementById('entry-container');

        entry.className = ('entry');
        entry.innerHTML = `<h2>From: ${name}</h2>
                            <p>${message}</p>`

        container.appendChild(entry);

    
    };
}

function submitEntry(){
    
    //get values from form
    const name = document.getElementById('name').value,
          message = document.getElementById('message').value;

    const ui = new UI();

    if(name === '' || message === '') {
        //error alert
        ui.showAlert('Please Fill In All Fields', 'error')
    } else{
        ui.showAlert('Entry Added', 'success');
        ui.clearFields();
        ui.addEntry(name,message);
    }

    if(name === '') {
        ui.hilightField('name');
    } else {
        ui.removeHilight('name');
    }

    if(message === '') {
        ui.hilightField('message');
    } else {
        ui.removeHilight('message');
    }

    
    event.preventDefault();
}