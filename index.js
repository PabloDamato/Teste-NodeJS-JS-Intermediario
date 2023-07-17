const User = function(nome, sobrenome, idade, email, senha, rua, numero, cidade, estado, pais, telefone) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.email = email;
    this.senha = senha;
    this.logradouro = {
        rua: rua,
        numero: numero,
        cidade: cidade,
        estado: estado,
        pais: pais
    }
    this.telefone = telefone;
}

const Usuario = new User("User","Default",30,"user@gmail.com",999,"Rua Jardins",157,"São Paulo","SP","Brasil",11999999999);
console.log(Usuario);