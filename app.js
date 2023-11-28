function clicarBtn(){
    let cep = document.getElementById('cep').value
    let endereco = document.getElementById('endereco').value
    let bairro = document.getElementById('bairro').value
    let cidade = document.getElementById('cidade').value
    let estado = document.getElementById('estado').value

    var data = {
        cep: cep,
        endereco: endereco,
        bairro: bairro,
        cidade: cidade,
        estado: estado
    }
    searchData(data)
}

async function searchData(request){
    let responseApi = await fetch(`https://viacep.com.br/ws/${request.cep}/json/`).then(response => response.json())
    console.log(responseApi)
    loadDataScream(responseApi)
}


function loadDataScream(data){
    document.getElementById('endereco').value = data.logradouro
    document.getElementById('bairro').value = data.bairro
    document.getElementById('cidade').value = data.localidade
    document.getElementById('estado').value = data.uf

}


function clearDataScream(){
    document.getElementById('cep').value = ''
    document.getElementById('endereco').value = ''
    document.getElementById('bairro').value = ''
    document.getElementById('cidade').value = ''
    document.getElementById('estado').value = ''

}