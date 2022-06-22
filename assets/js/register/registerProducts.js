class Product{

    constructor () {
        this.id = 1;
        this.arrayProduct = [];
        this.editId = null;
    }

    toSave() {
        let product =  this.readData();

        if(this.validateField(product)) {
            if(this.editId == null) {
                this.toAdd(product);
            } else {
                this.update(this.editId, product);
            }
        }

        this.listTable();
        this.cancel();
        
    }
    
    toAdd(product) {
        this.arrayProduct.push(product);
        this.id++;
        
    }

    delete(id, productName) {
        if(confirm("Deseja realmente deletar os dados do cliente " + productName)) {
            let tbody = document.getElementById('tbody');

            for(let i = 0; i < this.arrayProduct.length; i++ ) {
                if(this.arrayProduct[i].id == id) {
                    this.arrayProduct.splice(i, 1);
                    tbody.deleteRow(i);
                }
            }
        }
        
    }

    update(id, product ) {
        for(let i = 0; i < this.arrayProduct.length; i++ ) {
            if(this.arrayProduct[i].id == id) {
                this.arrayProduct[i].productName = product.productName;
                this.arrayProduct[i].unitaryValue = product.unitaryValue;
                this.arrayProduct[i].qtyStock = product.qtyStock;
            }
        }
    }

    initialUpdate(data) {
        this.editId = data.id;

        document.getElementById('productName').value = data.productName
        document.getElementById('unitaryValue').value = data.unitaryValue;
        document.getElementById('qtyStock').value = data.qtyStock;

        document.getElementById('btnSaveToAdd').innerText = "Atualizar";
    }

    cancel() {
        document.getElementById('productName-').value = '';
        document.getElementById('unitaryValue').value = '';
        document.getElementById('qtyStock').value = '';


        document.getElementById('btnSaveToAdd').innerText = "Adicionar";
        this.editId = null;
    }
    
    readData() {
        let product = {}

        product.id = this.id;
        product.productName = document.getElementById('productName').value;
        product.unitaryValue = document.getElementById('unitaryValue').value;
        product.qtyStock = document.getElementById('qtyStock').value;


        return product;
    }

    validateField(product) {
        let msg = '';

        if(product.productName == '') {
            msg +='* Informe o nome do produto\n'; 
        }

        if(product.unitaryValue == '') {
            msg +='* Informe o valor do produto\n';
        }

        if(product.qtyStock == '') {
            msg +='* Informe a quantidade para adicionar no estoque de produtos\n';
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
        for(let i = 0; i < this.arrayProduct.length; i++ ) {
            let tr = tbody.insertRow();

            
            //só falta listar a tabela 
            

            let imgEdit = document.createElement('img');
            imgEdit.src = '/assets/img/icons/flags/edit.svg';
            imgEdit.setAttribute("onclick", "product.update("+ JSON.stringify(this.arrayProduct[i]) +")");

            let imgDelete = document.createElement('img');
            imgDelete.src = '/assets/img/icons/flags/delete.svg';
            imgDelete.setAttribute("onclick", "product.delete("+ this.arrayProduct[i].id +")");

            td_actions.appendChild(imgEdit);
            td_actions.appendChild(imgDelete);
        }
    }


}

var product = new Product();