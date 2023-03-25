$(document).ready(function() {
    var botao = $('.bt1');
    var dropDown = $('.ul-cadastro');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });
   
   $(document).ready(function() {
    var botao = $('.bt2');
    var dropDown = $('.ul-consultas');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });
   
   $(document).ready(function() {
    var botao = $('.bt3');
    var dropDown = $('.ul-promissoria');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });
   
   $(document).ready(function() {
    var botao = $('.bt4');
    var dropDown = $('.ul-rotinas');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });
   
   $(document).ready(function() {
    var botao = $('.bt5');
    var dropDown = $('.ul-senha');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });

function login (){
    window.location = '../views/Menu_Rens.html';
}

function voltar (){
    window.location = '../views/Login-Rens.html';
}