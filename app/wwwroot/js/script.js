function toggleMenu()
{
    let toggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});



// Redirecionar para as outras páginas no menu lateral
function abaNotaFiscal()
{
    window.location = "notaFiscal.html";
}

function abaPendencias()
{
    window.location = "pendencias.html";
}

function abaRelatorio()
{
    window.location = "relatorio.html";
}

function abaColaboradores()
{
    window.location = "colaboradores.html";
}

function abaLogin()
{
    window.location = "login.html";
}