var imagens = 
[
    "dad.jpg",
    "mom.jpg",
    "me.jpg",
    "cinza.jpg",
    "familia.jpg"
];

var nomes = 
[
"Pai", "Mãe", "Eu", "Coca", "Família"
];

var i = 0;
function proximo()
{
document.getElementById("membros").innerHTML = nomes[i];
document.getElementById("familia").src = imagens[i];
i++;


if (i>=5)

{
  i = 0;
}

}
