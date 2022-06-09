class Suppliers{

    constructor () {
        this.id = 1;
        this.arrayProviders = [];
        this.editId = null;
    }

    toSave() {
        let providers =  this.readData();

        if(this.validateField(providers)) {
            if(this.editId == null) {
                this.toAdd(providers);
            } else {
                this.update(this.editId, providers);
            }
        }

        this.listTable();
        this.cancel();
        
    }
    
    toAdd(providers) {
        this.arrayProviders.push(providers);
        this.id++;
        
    }

    delete(id, supplierName) {
        if(confirm("Deseja realmente deletar os dados do fornecedor " + supplierName)) {
            let tbody = document.getElementById('tbody');

            for(let i = 0; i < this.arrayProviders.length; i++ ) {
                if(this.arrayProviders[i].id == id) {
                    this.arrayProviders.splice(i, 1);
                    tbody.deleteRow(i);
                }
            }
        }
        
    }

    update(id, providers ) {
        for(let i = 0; i < this.arrayProviders.length; i++ ) {
            if(this.arrayProviders[i].id == id) {
                this.arrayProviders[i].supplierName = providers.supplierName;
                this.arrayProviders[i].email = providers.email;
                this.arrayProviders[i].cnpj = providers.cnpj;
                this.arrayProviders[i].city = providers.city;
                this.arrayProviders[i].district = providers.district;
                this.arrayProviders[i].road = providers.road;
                this.arrayProviders[i].commercialNumber = providers.commercialNumber;
                this.arrayProviders[i].tel = providers.tel;
            }
        }
    }

    initialUpdate(data) {
        this.editId = data.id;

        document.getElementById('supplierName').value = data.supplierName;
        document.getElementById('email').value = data.email;
        document.getElementById('cnpj').value = data.cnpj;
        document.getElementById('city').value = data.city;
        document.getElementById('district').value = data.district;
        document.getElementById('road').value = data.road;
        document.getElementById('commercialNumber').value = data.commercialNumber;
        document.getElementById('tel').value = data.tel;

        document.getElementById('btnSaveToAdd').innerText = "Atualizar";
    }

    cancel() {
        document.getElementById('supplierName').value = '';
        document.getElementById('email').value = '';
        document.getElementById('cnpj').value = '';
        document.getElementById('city').value = '';
        document.getElementById('district').value = '';
        document.getElementById('road').value = '';
        document.getElementById('commercialNumber').value = '';
        document.getElementById('tel').value = '';

        document.getElementById('btnSaveToAdd').innerText = "Adicionar";
        this.editId = null;
    }
    
    readData() {
        let providers = {}

        providers.id = this.id;
        providers.supplierName = document.getElementById('supplierName').value;
        providers.email = document.getElementById('email').value;
        providers.cnpj = document.getElementById('cnpj').value;
        providers.city = document.getElementById('city').value;
        providers.district = document.getElementById('district').value;
        providers.road = document.getElementById('road').value;
        providers.commercialNumber = document.getElementById('commercialNumber').value;
        providers.tel = document.getElementById('tel').value;

        return providers;
    }

    validateField(providers) {
        let msg = '';

        if(providers.supplierName == '') {
            msg +='* Informe o nome do Fornecedor\n'; 
        }

        if(providers.email == '') {
            msg +='* Informe o email do Fornecedor\n';
        }

        if(providers.cnpj == '') {
            msg +='* Informe o cnpj do Fornecedor\n';
        }

        if(providers.city == '') {
            msg +='* Informe a cidade do comércio do Fornecedor\n';
        }

        if(providers.district == '') {
            msg +='* Informe o bairro do comércio do Fornecedor\n';
        }

        if(providers.road == '') {
            msg +='* Informe  a rua do comércio do Fornecedor\n';
        }

        if(providers.commercialNumber == '') {
            msg +='* Informe o némero do comércio do Fornecedor\n';
        }

        if(providers.tel == '') {
            msg +='* Informe um número para contato com o Fornecedor\n';
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
        for(let i = 0; i < this.arrayProviders.length; i++ ) {
            let tr = tbody.insertRow();
            
            let td_supplierName = tr.insertCell();
            let td_email = tr.insertCell();
            let td_cnpj = tr.insertCell();
            let td_city = tr.insertCell();
            let td_district = tr.insertCell();
            let td_road = tr.insertCell();
            let td_commercialNumber = tr.insertCell();
            let td_tel = tr.insertCell();
            let td_actions = tr.insertCell();

            td_supplierName.innerText = this.arrayProviders[i].supplierName;
            td_email.innerText = this.arrayProviders[i].email;
            td_cnpj.innerText = this.arrayProviders[i].cnpj;
            td_city.innerText = this.arrayProviders[i].city;
            td_district.innerText = this.arrayProviders[i].district;
            td_road.innerText = this.arrayProviders[i].road;
            td_commercialNumber.innerText = this.arrayProviders[i].commercialNumber;
            td_tel.innerText = this.arrayProviders[i].tel;

            let imgEdit = document.createElement('img');
            imgEdit.src = '/assets/img/icons/flags/edit.svg';
            imgEdit.setAttribute("onclick", "providers.update("+ JSON.stringify(this.arrayProviders[i]) +")");

            let imgDelete = document.createElement('img');
            imgDelete.src = '/assets/img/icons/flags/delete.svg';
            imgDelete.setAttribute("onclick", "providers.delete("+ this.arrayProviders[i].id +")");

            td_actions.appendChild(imgEdit);
            td_actions.appendChild(imgDelete);
        }
    }

}

var suppliers = new Suppliers();