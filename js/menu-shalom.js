var CadClientePF = document.querySelector('.CadClientePF');
var CadClientePJ = document.querySelector('.CadClientePJ');
var Estoque = document.querySelector('.Box');


function abriPF() {
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

function abriPJ() {
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
