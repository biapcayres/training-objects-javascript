var lampada = {

    estado: true,
    
    alternar_estado: function(){
    
        if (this.pegar_estado()) this.desligar();
        else if (!this.pegar_estado()) this.ligar();
        else {
            throw new Error(`O estado não tem um valor válido (${this.pegar_estado()})`);
        };
    },
    
    ligar: function(){
    
        this.estado = true;
    },
    
    desligar: function(){
    
        this.estado = false;
    },
    
    pegar_estado: function(){
    
        return this.estado;
    }
}