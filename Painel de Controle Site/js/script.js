function incluirBanner() {
    let banner3 = document.querySelector('#linha3');
    banner3.style.display = "contents";
}

function excluir() {
    let linha3 = document.querySelector('#linha3');
    linha3.style.display = "none";
}


//REDIRECIONANDO A PÁGINA PRODUTOS PARA INCLUSÃO DE PRODUTOS
function redirectToInclusaoProdutos() {
    window.location = "inclusao_produtos.html";
}

//PÁGINA DE EDIÇÃO DE PRODUTOS

//DEFINIÇÃO DAS VARIÁVEIS
//VARIÁVEIS DAS IMAGENS
let input_file = document.getElementById("adicionar_imagem");
let placeholder_imagem = document.querySelector('#placeholder');
let imagem1 = document.querySelector('#imagem1');
let imagem2 = document.querySelector('#imagem2');
let imagem3 = document.querySelector('#imagem3');
let imagem4 = document.querySelector('#imagem4');
//VARIÁVEL COM O SOURCE DAS IMAGENS
let fonte = document.querySelector('#fonte');
/******************************************/
let $c = $("#container_file");
let $f1 = $("#container_file .arquivo");

//VARIÁVEIS DOS BOTÕES CHECKBOX
let check1 = document.querySelector('#checkbox1');
let check2 = document.querySelector('#checkbox2');
let check3 = document.querySelector('#checkbox3');
let check4 = document.querySelector('#checkbox4');

//FUNÇÕES PARA INCLUSÃO E TROCA DE IMAGEM
function troca_imagem() {
    let x = input_file.value;
    x = x.substr(12);
    console.log(x);

    placeholder_imagem.src = 'imagens/produtos/' + x;

    $(this).attr("value", "");
}
$f1.change(troca_imagem);


function adiciona_imagem() {

    if (imagem4.src == fonte.src) {

        if (imagem1.src == fonte.src) {
            imagem1.src = placeholder_imagem.src;
            placeholder_imagem.setAttribute('src', 'imagens/produtos/Placeholder.png');
            input_file.value = "";

        } else if (imagem2.src == fonte.src) {
            imagem2.src = placeholder_imagem.src;
            placeholder_imagem.setAttribute('src', 'imagens/produtos/Placeholder.png');
            input_file.value = "";

        } else if (imagem3.src == fonte.src) {
            imagem3.src = placeholder_imagem.src;
            placeholder_imagem.setAttribute('src', 'imagens/produtos/Placeholder.png');
            input_file.value = "";

        } else if (imagem4.src == fonte.src) {
            imagem4.src = placeholder_imagem.src;
            placeholder_imagem.setAttribute('src', 'imagens/produtos/Placeholder.png');
            input_file.value = "";

        }
    } else {
        alert("Não é possível adicionar mais imagens");
        placeholder_imagem.setAttribute('src', 'imagens/produtos/Placeholder.png');
        input_file.value = "";
    };
}

//FUNÇÕES PARA DEFINIR A IMAGEM PRINCIPAL
$('#checkbox1').change(function () {
    check1.checked = true;
    check2.checked = false;
    check3.checked = false;
    check4.checked = false;
});

$('#checkbox2').change(function () {
    check1.checked = false;
    check3.checked = false;
    check4.checked = false;
});

$('#checkbox3').change(function () {
    check1.checked = false;
    check2.checked = false;
    check4.checked = false;
});

$('#checkbox4').change(function () {
    check1.checked = false;
    check2.checked = false;
    check3.checked = false;
});

//FUNÇOES PARA REMOVER IMAGENS
function remove_imagem() {
    let mensagem = 'Não é possivel remover imagens sem conteúdo ou definidas como principal';
    switch (x) {
        case 1:
            if ((imagem1.src == fonte.src) || (check1.checked)) {
                alert(mensagem);
            } else {
                imagem1.src = imagem2.src;
                imagem2.src = imagem3.src;
                imagem3.src = imagem4.src;
                imagem4.setAttribute('src', 'imagens/produtos/Placeholder.png');
            }
            break;
        case 2:
            if ((imagem2.src == fonte.src) || (check2.checked)) {
                alert(mensagem);
            } else {
                imagem2.src = imagem3.src;
                imagem3.src = imagem4.src;
                imagem4.setAttribute('src', 'imagens/produtos/Placeholder.png');
            }
            break;
        case 3:
            if ((imagem3.src == fonte.src) || (check3.checked)) {
                alert(mensagem);
            } else {
                imagem3.src = imagem4.src;
                imagem4.setAttribute('src', 'imagens/produtos/Placeholder.png');
            }
            break;
        case 4:
            if ((imagem4.src == fonte.src) || (check4.checked)) {
                alert(mensagem);
            } else {
                imagem4.setAttribute('src', 'imagens/produtos/Placeholder.png');
            }
    }
};

//RECUPERAR INFORMAÇÕES DOS INPUTS PÁGINA "EDIÇÃO DE PRODUTO"

function gerar_informacoes() {
    let nome = document.querySelector('#nome_produto');
    let descricoes = document.querySelector('#descricao');
    let marca = document.querySelector('#marca');
    let codigo = document.querySelector('#codigo');
    let tag1 = document.querySelector('#tag1');
    let tag2 = document.querySelector('#tag2');
    let tag3 = document.querySelector('#tag3');
    let subcategoria = document.querySelector('#subcategorias');
    let informacoes = document.querySelector('#informacoes');
    let foto1 = document.querySelector('#imagem1');
    let foto2 = document.querySelector('#imagem2');
    let foto3 = document.querySelector('#imagem3');

    document.write('<h1>INFORMAÇÕES:</h1>' + '</br>' + '</br>' +
        'Nome do Produto: ' + '</br>' + nome.value + '</br>' + '</br>' +
        'Descrição: ' + '</br>' + descricoes.value + '</br>' + '</br>' +
        'Marca: ' + '</br>' + marca.value + '</br>' + '</br>' +
        'Código do Produto: ' + '</br>' + codigo.value + '</br>' + '</br>' +
        'Tags: ' + '</br>' + tag1.value + '</br>' + tag2.value + '</br>' + tag3.value + '</br>' + '</br>' +
        'Subcategoria: ' + '</br>' + subcategoria.value + '</br>' + '</br>' +
        'Informações: ' + '</br>' + informacoes.value + '</br>' + '</br>' +
        'Source das Imagens: ' + '</br>' + foto1.src + '</br>' + foto2.src + '</br>' + foto3.src);

    return gerar_informacoes;
};

//REDIRECIONANDO A PÁGINA CATEGORIAS PARA INCLUSÃO DE CATEGORIAS
function redirectToInclusaoCategoria() {
    window.location = "inclusao_categorias.html";
}

//REDIRECIONANDO A PÁGINA CATEGORIAS PARA INCLUSÃO DE SUBCATEGORIAS
function redirectToInclusaoSubcategoria() {
    window.location = "inclusao_subcategorias.html";
}

//REDIRECIONANDO A PÁGINA GERENTES PARA INCLUSÃO DE GERENTES
function adiciona_gerente() {
    window.location = 'inclusao_gerentes.html';
}