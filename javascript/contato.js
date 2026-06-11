function mostrarDados() {

    let nome =
        document.getElementById("nome").value;

    let email =
        document.getElementById("email").value;

    let telefone =
        document.getElementById("telefone").value;

    let endereco =
        document.getElementById("endereco").value;

    let nascimento =
        document.getElementById("nascimento").value;

    let origem =
        document.getElementById("origem").value;

    let mensagem =
        document.getElementById("mensagem").value;

    let novidades =
        document.getElementById("novidades").checked
            ? "Sim"
            : "Não";

    let dataFormatada = "";

    if (nascimento !== "") {

        const partes = nascimento.split("-");

        dataFormatada =
            partes[2] + "/" +
            partes[1] + "/" +
            partes[0];

    }

    document.getElementById("saida").innerHTML = `

        <h2>Dados Informados</h2>

        <p>
            <strong>Nome:</strong>
            ${nome}
        </p>

        <p>
            <strong>Email:</strong>
            ${email}
        </p>

        <p>
            <strong>Telefone:</strong>
            ${telefone}
        </p>

        <p>
            <strong>Endereço:</strong>
            ${endereco}
        </p>

        <p>
            <strong>Data de Nascimento:</strong>
            ${dataFormatada}
        </p>

        <p>
            <strong>Onde nos conheceu:</strong>
            ${origem}
        </p>

        <p>
            <strong>Mensagem:</strong>
            ${mensagem}
        </p>

        <p>
            <strong>Receber novidades:</strong>
            ${novidades}
        </p>

    `;
}

function limparDados() {

    document.getElementById("nome").value = "";

    document.getElementById("email").value = "";

    document.getElementById("telefone").value = "";

    document.getElementById("endereco").value = "";

    document.getElementById("nascimento").value = "";

    document.getElementById("origem").value = "";

    document.getElementById("mensagem").value = "";

    document.getElementById("novidades").checked = false;

    document.getElementById("saida").innerHTML = `

        <h2>Dados Informados</h2>

        <p>
            Os dados preenchidos aparecerão aqui.
        </p>

    `;
}