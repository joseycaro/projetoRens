var CadClientePF = document.querySelector('.CadClientePF');
var CadClientePJ = document.querySelector('.CadClientePJ');
var Estoque = document.querySelector('.Estoque');

function getCadClientePF() {
    if(CadClientePF.style.display == "none"){
        Estoque.style.display = 'none';
        CadClientePJ.style.display = 'none';
        CadClientePF.style.display = 'block';
    }
    else{
        Estoque.style.display = 'none';
        CadClientePJ.style.display = 'none';
        CadClientePF.style.display = 'block';
    }
}
function closePF() {
    CadClientePF.style.display = 'none';
}

function getCadClientePJ() {
    if(CadClientePJ.style.display == "none"){
        CadClientePF.style.display = 'none';
        Estoque.style.display = 'none';        
        CadClientePJ.style.display = 'block';
    }
    else{
        CadClientePF.style.display = 'none';
        Estoque.style.display = 'none';    
        CadClientePJ.style.display = 'block';
    }
}
function closePJ() {
    CadClientePJ.style.display = 'none';
}

function getEstoque() {
    if(Estoque.style.display == "none"){
        CadClientePF.style.display = 'none';
        CadClientePJ.style.display = 'none';
        Estoque.style.display = 'block';
    }
    else{
        CadClientePF.style.display = 'none';
        CadClientePJ.style.display = 'none';    
        Estoque.style.display = 'block';
    }
}
function closeEstoque() {
    Estoque.style.display = 'none';
}

function getMenu() {
    window.location = '/views/Menu-shalom.html';
}
