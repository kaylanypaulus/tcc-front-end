class Request{

    constructor () {
        this.id = 1;
        this.arrayRequests = [];
        this.editId = null;
    }

    toSave() {
        let request =  this.readData();

        if(this.validateField(request)) {
            if(this.editId == null) {
                this.toAdd(request);
            } else {
                this.update(this.editId, request);
            }
        }

        this.listTable();
        this.cancel();
        
    }
    
    toAdd(request) {
        this.arrayRequests.push(request);
        this.id++;
        
    }

    delete(id, orderDate) {
        if(confirm("Deseja realmente deletar os dados do pedido " + orderDate)) {
            let tbody = document.getElementById('tbody');

            for(let i = 0; i < this.arrayRequests.length; i++ ) {
                if(this.arrayRequests[i].id == id) {
                    this.arrayRequests.splice(i, 1);
                    tbody.deleteRow(i);
                }
            }
        }
        
    }

    update(id, custumer ) {
        for(let i = 0; i < this.arrayRequests.length; i++ ) {
            if(this.arrayCustomers[i].id == id) {
                this.arrayCustomers[i].customerName = custumer.customerName;
                this.arrayCustomers[i].email = custumer.email;
                this.arrayCustomers[i].cpf = custumer.cpf;
                this.arrayCustomers[i].city = custumer.city;
                this.arrayCustomers[i].district = custumer.district;
                this.arrayCustomers[i].road = custumer.road;
                this.arrayCustomers[i].residentialNumber = custumer.residentialNumber;
                this.arrayCustomers[i].cell = custumer.cell;
            }
        }
    }

    initialUpdate(data) {
        this.editId = data.id;

        document.getElementById('customerName').value = data.customerName
        document.getElementById('email').value = data.email;
        document.getElementById('cpf').value = data.cpf;
        document.getElementById('city').value = data.city;
        document.getElementById('district').value = data.district;
        document.getElementById('road').value = data.road;
        document.getElementById('residentialNumber').value = data.residentialNumber;
        document.getElementById('cell').value = data.cell;

        document.getElementById('btnSaveToAdd').innerText = "Atualizar";
    }

    cancel() {
        document.getElementById('customerName-').value = '';
        document.getElementById('email').value = '';
        document.getElementById('cpf').value = '';
        document.getElementById('city').value = '';
        document.getElementById('district').value = '';
        document.getElementById('road').value = '';
        document.getElementById('residentialNumber').value = '';
        document.getElementById('cell').value = '';

        document.getElementById('btnSaveToAdd').innerText = "Adicionar";
        this.editId = null;
    }
    
    readData() {
        let custumer = {}

        custumer.id = this.id;
        custumer.customerName = document.getElementById('customerName').value;
        custumer.email = document.getElementById('email').value;
        custumer.cpf = document.getElementById('cpf').value;
        custumer.city = document.getElementById('city').value;
        custumer.district = document.getElementById('district').value;
        custumer.road = document.getElementById('road').value;
        custumer.residentialNumber = document.getElementById('residentialNumber').value;
        custumer.cell = document.getElementById('cell').value;

        return custumer;
    }

    validateField(custumer) {
        let msg = '';

        if(custumer.customerName == '') {
            msg +='* Informe o nome do cliente\n'; 
        }

        if(custumer.email == '') {
            msg +='* Informe o email do cliente\n';
        }

        if(custumer.cpf == '') {
            msg +='* Informe o cpf do cliente\n';
        }

        if(custumer.city == '') {
            msg +='* Informe a cidade do cliente\n';
        }

        if(custumer.district == '') {
            msg +='* Informe o bairro do cliente\n';
        }

        if(custumer.road == '') {
            msg +='* Informe  a rua do cliente\n';
        }

        if(custumer.residentialNumber == '') {
            msg +='* Informe o némero residêncial do cliente\n';
        }

        if(custumer.cell == '') {
            msg +='* Informe um número para contato com o cliente\n';
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
        for(let i = 0; i < this.arrayCustomers.length; i++ ) {
            let tr = tbody.insertRow();

            
            //só falta listar a tabela 
            

            let imgEdit = document.createElement('img');
            imgEdit.src = '/assets/img/icons/flags/edit.svg';
            imgEdit.setAttribute("onclick", "custumer.update("+ JSON.stringify(this.arrayCustomers[i]) +")");

            let imgDelete = document.createElement('img');
            imgDelete.src = '/assets/img/icons/flags/delete.svg';
            imgDelete.setAttribute("onclick", "custumer.delete("+ this.arrayCustomers[i].id +")");

            td_actions.appendChild(imgEdit);
            td_actions.appendChild(imgDelete);
        }
    }

}
var request = new Request();