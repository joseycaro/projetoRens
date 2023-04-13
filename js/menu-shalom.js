// VARIEAVES QUE RECEBEM A DIV REFERENTE AS "TELAS"
var CadClientePF = document.querySelector('.CadClientePF');
var CadClientePJ = document.querySelector('.CadClientePJ');
var Estoque = document.querySelector('.Estoque');
var searchClient = document.querySelector('.search-client');
var consultaPedidos = document.querySelector('.consulta-pedidos');

//OPEN - CLOSE
function getCadClientePF() {
    if(CadClientePF.style.display == "none"){

        CadClientePJ.style.display = 'none'; 
        Estoque.style.display = 'none';
        searchClient.style.display = 'none';
        consultaPedidos.style.display = 'none';

        CadClientePF.style.display = 'block';

    }
    else{
        CadClientePJ.style.display = 'none'; 
        Estoque.style.display = 'none';
        searchClient.style.display = 'none';
        consultaPedidos.style.display = 'none';

        CadClientePF.style.display = 'block';
    }
}
function closePF() {
    CadClientePF.style.display = 'none';
}
//OPEN - CLOSE
function getCadClientePJ() {
    if(CadClientePJ.style.display == "none"){

        Estoque.style.display = 'none';
        searchClient.style.display = 'none';
        consultaPedidos.style.display = 'none';
        CadClientePF.style.display = 'none';

        CadClientePJ.style.display = 'block';
    }
    else{
        Estoque.style.display = 'none';
        searchClient.style.display = 'none';
        consultaPedidos.style.display = 'none';
        CadClientePF.style.display = 'block';

        CadClientePJ.style.display = 'block';
    }
}
function closePJ() {
    CadClientePJ.style.display = 'none';
}
//OPEN - CLOSE
function getEstoque() {
    if(Estoque.style.display == "none"){

        CadClientePJ.style.display = 'none'; 
        searchClient.style.display = 'none';
        consultaPedidos.style.display = 'none';
        CadClientePF.style.display = 'none';

        Estoque.style.display = 'block';
    }
    else{
        CadClientePJ.style.display = 'none'; 
        searchClient.style.display = 'none';
        consultaPedidos.style.display = 'none';

        Estoque.style.display = 'block';
    }
}
function closeEstoque() {
    Estoque.style.display = 'none';
}
//OPEN - CLOSE
function getSearchClient() {
    if(searchClient.style.display == "none"){

        CadClientePJ.style.display = 'none'; 
        Estoque.style.display = 'none';
        consultaPedidos.style.display = 'none';
        CadClientePF.style.display = 'none';

        searchClient.style.display = 'block';
    }
    else{
        CadClientePJ.style.display = 'none'; 
        Estoque.style.display = 'none';
        consultaPedidos.style.display = 'none';
        CadClientePF.style.display = 'none';
        
        searchClient.style.display = 'block';
    }
}
function closeSearchClient() {
    searchClient.style.display = 'none';
}
//OPEN - CLOSE
function getConsultaPedidos() {
    if(consultaPedidos.style.display == "none"){

        CadClientePJ.style.display = 'none'; 
        Estoque.style.display = 'none';
        CadClientePF.style.display = 'none';
        searchClient.style.display = 'none';
        
        consultaPedidos.style.display = 'block';
    }
    else{
        CadClientePJ.style.display = 'none'; 
        Estoque.style.display = 'none';
        CadClientePF.style.display = 'none';
        searchClient.style.display = 'none';
        
        consultaPedidos.style.display = 'block';
    }
}
function closeConsultaPedidos() {
    consultaPedidos.style.display = 'none';
}
//OPEN - CLOSE
function getMenu() {
    window.location = '/views/Menu-shalom.html';
}
