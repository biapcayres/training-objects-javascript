var carro = {

    // Propriedades (Variáveis)
    cor: "Amarelo",
    marca: "Chevrolet",
    modelo: "Camaro SS 6.2 V8",
    ano: 2012,
    capacidade_do_tanque: 71,
    quantidade_combustivel: 71,
    consumo_medio_urbano: 5.4,
    consumo_medio_estrada: 7.7,
    quilometragem_rodada: 0,
    ultimo_consumo: 0,

    // Métodos (Funções)
    /**
     * Percorre a quantidade especificada de quilometros, diminuindo o combustível e contabilizando na quilometrragem rodada
     * @param {Number} deslocamento Quantidade em quilômetros que o carro vai percorrer
     * @param {String} tipo_de_deslocamento Tipo do ambiente que irá percorrer (valores possíveis: 'urbano', 'estrada')
     */
    percorrer_quilometros: function(deslocamento, tipo_de_deslocamento = 'urbano') {

        deslocamento = Number(deslocamento);

        let consumo_de_combustivel = this.calcular_consumo_combustivel(deslocamento, tipo_de_deslocamento);

        if(consumo_de_combustivel <= this.quantidade_combustivel){

            // i = i + 1 => i += 1
            this.quantidade_combustivel -= consumo_de_combustivel;
            this.quilometragem_rodada += deslocamento;
            this.ultimo_consumo = consumo_de_combustivel;
        } else {

            alert("Quantidade de combustível insuficiente para o trajeto");
        }

        return renderizar_carro();
    },
    pegar_dados_do_tanque: function(){

        const quantidade_combustivel = this.quantidade_combustivel
        const porcentagem_do_tanque = (quantidade_combustivel / this.capacidade_do_tanque) * 100;

        return { quantidade_combustivel, porcentagem_do_tanque };
    },
    
    calcular_custo_viagem: function(deslocamento, tipo_de_deslocamento, custo_do_combustivel = 6.43){
    
        let consumo_de_combustivel = this.calcular_consumo_combustivel(deslocamento, tipo_de_deslocamento);
        let custo_viagem = (consumo_de_combustivel * custo_do_combustivel);

        console.log(`Custo da viagem: ${formatar_unidade(custo_viagem, '$')}`);
        console.log(`Consumo de combustível: ${formatar_unidade(consumo_de_combustivel, 'L')}`);
    },
    
    mostrar_quilometragem_rodada: function(){
    
        return formatar_unidade(this.quilometragem_rodada, 'Km');
    },

    calcular_consumo_combustivel: function(deslocamento, tipo_de_deslocamento){

        let consumo_medio;

        if(tipo_de_deslocamento == 'urbano') consumo_medio = this.consumo_medio_urbano;
        else if(tipo_de_deslocamento == 'estrada') consumo_medio = this.consumo_medio_estrada;
        else throw Error('Tipo de deslocamento inválido (Parâmetro #2)');

        return deslocamento / consumo_medio;
    },
};