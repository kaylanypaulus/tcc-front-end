class Employe{

        constructor () {
            this.id = 1;
            this.arrayEmploye = [];
            this.editId = null;
        }
    
        toSave() {
            let employe =  this.readData();
    
            if(this.validateField(employe)) {
                if(this.editId == null) {
                    this.toAdd(employe);
                } else {
                    this.update(this.editId, employe);
                }
            }
    
            this.listTable();
            this.cancel();
            
        }
        
        toAdd(employe) {
            this.arrayEmploye.push(employe);
            this.id++;
            
        }
    
        delete(id, employeeName) {
            if(confirm("Deseja realmente deletar os dados do cliente " + employeeName)) {
                let tbody = document.getElementById('tbody');
    
                for(let i = 0; i < this.arrayEmploye.length; i++ ) {
                    if(this.arrayEmploye[i].id == id) {
                        this.arrayEmploye.splice(i, 1);
                        tbody.deleteRow(i);
                    }
                }
            }
            
        }
    
        update(id, employe ) {
            for(let i = 0; i < this.arrayEmploye.length; i++ ) {
                if(this.arrayEmploye[i].id == id) {
                    this.arrayEmploye[i].employeeName = employe.employeeName;
                    this.arrayEmploye[i].email = employe.email;
                    this.arrayEmploye[i].office = employe.office;
                    this.arrayEmploye[i].city = employe.city;
                    this.arrayEmploye[i].district = employe.district;
                    this.arrayEmploye[i].road = employe.road;
                    this.arrayEmploye[i].residentialNumber = employe.residentialNumber;
                    this.arrayEmploye[i].cell = employe.cell;
                    this.arrayEmploye[i].admissionDate = employe.admissionDate;
                }
            }
        }
    
        initialUpdate(data) {
            this.editId = data.id;
    
            document.getElementById('employeeName').value = data.employeeName
            document.getElementById('email').value = data.email;
            document.getElementById('office').value = data.office;
            document.getElementById('city').value = data.city;
            document.getElementById('district').value = data.district;
            document.getElementById('road').value = data.road;
            document.getElementById('residentialNumber').value = data.residentialNumber;
            document.getElementById('cell').value = data.cell;
            document.getElementById('admissionDate').value = data.admissionDate;
    
            document.getElementById('btnSaveToAdd').innerText = "Atualizar";
        }
    
        cancel() {
            document.getElementById('employeeName-').value = '';
            document.getElementById('email').value = '';
            document.getElementById('office').value = '';
            document.getElementById('city').value = '';
            document.getElementById('district').value = '';
            document.getElementById('road').value = '';
            document.getElementById('residentialNumber').value = '';
            document.getElementById('cell').value = '';
            document.getElementById('admissionDate').value = '';

    
            document.getElementById('btnSaveToAdd').innerText = "Adicionar";
            this.editId = null;
        }
        
        readData() {
            let employe = {}
    
            employe.id = this.id;
            employe.employeeName = document.getElementById('employeeName').value;
            employe.email = document.getElementById('email').value;
            employe.office = document.getElementById('office').value;
            employe.city = document.getElementById('city').value;
            employe.district = document.getElementById('district').value;
            employe.road = document.getElementById('road').value;
            employe.residentialNumber = document.getElementById('residentialNumber').value;
            employe.cell = document.getElementById('cell').value;
            employe.admissionDate = document.getElementById('admissionDate').value;

    
            return employe;
        }
    
        validateField(employe) {
            let msg = '';
    
            if(employe.employeeName == '') {
                msg +='* Informe o nome do funcionário\n'; 
            }
    
            if(employe.email == '') {
                msg +='* Informe o email do funcionário\n';
            }
    
            if(employe.office == '') {
                msg +='* Informe o cargo/função do funcionário\n';
            }
    
            if(employe.city == '') {
                msg +='* Informe a cidade do funcionário\n';
            }
    
            if(employe.district == '') {
                msg +='* Informe o bairro do funcionário\n';
            }
    
            if(employe.road == '') {
                msg +='* Informe  a rua do funcionário\n';
            }
    
            if(employe.residentialNumber == '') {
                msg +='* Informe o némero residêncial do funcionário\n';
            }
    
            if(employe.cell == '') {
                msg +='* Informe um número para contato com do funcionário\n';
            }

            if(employe.admissionDate == '') {
                msg +='* Informe a data de admissão do funcionário\n';
            }
            
            if(msg != '') {
                alert(msg);
                return false
            }
            
            return true;
        }
    
        listTable() {
            let tbody = document.getElementById('tbody');
            tbody.innerText = '';
            for(let i = 0; i < this.arrayEmploye.length; i++ ) {
                let tr = tbody.insertRow();
    
                
                //só falta listar a tabela 
                
    
                let imgEdit = document.createElement('img');
                imgEdit.src = '/assets/img/icons/flags/edit.svg';
                imgEdit.setAttribute("onclick", "employe.update("+ JSON.stringify(this.arrayEmploye[i]) +")");
    
                let imgDelete = document.createElement('img');
                imgDelete.src = '/assets/img/icons/flags/delete.svg';
                imgDelete.setAttribute("onclick", "custemployeumer.delete("+ this.arrayEmploye[i].id +")");
    
                td_actions.appendChild(imgEdit);
                td_actions.appendChild(imgDelete);
            }
        }
    
    
    }

var employe = new Employe();