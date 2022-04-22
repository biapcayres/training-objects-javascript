var pessoa = {

    nome: 'Beatriz',
    sobrenome: 'Cayres',
    data_nascimento: '10/01/1999',
    interesses: ['estudar', 'treinar', 'ler', 'viajar', 'comer', 'festejar'],
    
    // função "pegar" retorna uma resposta
    pegar_idade: function (){

        // pegar a idade a partir da propriedade data_nascimento e do ano atual
        let hoje = new Date();
        let nascimento = new Date(this.data_nascimento);

        let idade = hoje.getFullYear() - nascimento.getFullYear();

        if (!fez_aniversario(nascimento)) {

            idade -= 1; // se não fez aniversario retorna idade = idade - 1
        }

        return idade;
    },
    
    
    se_apresentar: function(){
        var img = document.getElementById('imagem'); //não funcionou
        img.src = 'euzinha.png'; //não funcionou

        return `Olá! Meu nome é ${this.nome} ${this.sobrenome}, tenho ${this.pegar_idade()} anos e eu gosto de ${this.interesses.join(', ')}`;
        
        // pegar os valores das propriedades acima e retornar uma frase
    },
    
    
    adicionar_interesse: function(interesse_novo){
    
        this.interesses.push(interesse_novo);
    },
    

    remover_interesse: function(interesse_antigo){
  
        let posicao = this.interesses.indexOf(interesse_antigo); 
    
        this.interesses.splice(posicao, 1); //retorna o array atualizado, com o interesse antigo removido
    }

};

/**
 * 
 * @param {Date} nascimento 
 * @returns {Boolean} Se já fez ou não aniversário
 */
function fez_aniversario(nascimento){

    let hoje = new Date();

    let mes_atual = hoje.getMonth();
    let dia_atual = hoje.getDate();

    return (
        mes_atual > nascimento.getMonth()
        || (mes_atual == nascimento.getMonth() && dia_atual >= nascimento.getDate())
    );
}