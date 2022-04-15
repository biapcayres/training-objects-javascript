var conta_corrente = {

    saldo: 0.00,
    senha: 2012,
    extrato: [],

    pegar_saldo: function(formatado = false){
    
        if(formatado){
            
            const options = {
                style: 'currency',
                currency: 'BRL'
            };
            return this.saldo.toLocaleString('pt-BR', options);
        }
        else{

            return this.saldo;
        }
    },
    
    depositar: function(dinheiro_depositado){
    
        dinheiro_depositado = Number(dinheiro_depositado);
    
        this.saldo += dinheiro_depositado;

        this.add_operacao('deposito', dinheiro_depositado);
        /*this.extrato.push({
            tipo: 'deposito',
            dinheiro_depositado,
            saldo: this.pegar_saldo(),
        });*/
    
    },
    
    
    sacar: function(dinheiro_saque){

        dinheiro_saque = Number(dinheiro_saque);

        if (this.saldo < dinheiro_saque) throw new Error('Saldo insuficiente');
        
        this.saldo -= dinheiro_saque;
        
        this.add_operacao('saque', dinheiro_saque);
        /*this.extrato.push({
            tipo: 'saque',
            dinheiro_saque,
            saldo: this.pegar_saldo(),
        });*/
        
    },
    
    alterar_senha: function(senha_nova = null){
        
        if (senha_nova===null) throw new Error('Senha em branco');

        // se der match com alguma letra retorna erro
        if (senha_nova.match(/\D/)) throw new Error('Senha apenas de números');

        this.senha = senha_nova;
    },

    pegar_extrato: function(){
      
       return this.extrato;
    },

    add_operacao: function(tipo, quantia){

        const operacao = {
            tipo,
            quantia,
            saldo: this.pegar_saldo(),
            criado_em: new Date(),
        };

        this.extrato.push(operacao);
    },
        

}