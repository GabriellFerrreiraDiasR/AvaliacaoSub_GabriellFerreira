function mostrarDados() {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;
    let genero = document.getElementById("genero").value;
    let nascimento = document.getElementById("nascimento").value;

    let dataFormatada = nascimento
        ? new Date(nascimento).toLocaleDateString("pt-BR")
        : "";

    document.getElementById("saida").innerHTML = `
        <h2>Dados Informados</h2>

        Nome: ${nome}<br>
        Email: ${email}<br>
        Idade: ${idade}<br>
        Nascimento: ${dataFormatada}<br>
        Gênero: ${genero}
    `;
}

function limparDados() {

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("nascimento").value = "";
    document.getElementById("genero").value = "";

    document.getElementById("saida").innerHTML = `
        <h2>Dados Informados</h2>
        <p>Os dados preenchidos aparecerão aqui.</p>
    `;
}