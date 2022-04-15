var pessoa = {

    nome: 'Beatriz',
    sobrenome: 'Cayres',
    data_nascimento: '01/10/1999',
    interesses: ['estudar', 'treinar', 'transar', 'ler', 'viajar', 'comer', 'festejar'],
 
    pegar_idade: function (){
    
        // pegar a idade a partir da propriedade data_nascimento e do ano atual
    
    },
    
    
    se_apresentar: function(){
    
       // pegar os valores das propriedades acima e retornar uma frase
    },
    
    
    adicionar_interesse: function(interesse_novo){
    
        this.interesses.push(interesse_novo);
    },
    

    remover_interesse: function(interesse_antigo){
  
        let posicao = this.interesses.indexOf(interesse_antigo); 
    
        this.interesses.splice(posicao);
    }

};
    