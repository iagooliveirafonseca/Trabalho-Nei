
// $(document).ready(()=>{
//     $('.hamburguer').click(()=>{
//         $(".menu").toggleClass('active');
//     });
// }) // utilizando a blibioteca jQuery

// criando o menu de navegação mobile
function loadBody(){
    hamburguer = document.getElementsByClassName("hamburguer")[0]
    hamburguer.addEventListener('click', clicou)
    function clicou(){

      menu = document.getElementsByClassName("menu")[0]
      menu.classList.toggle("active")
    
  }

    imagens = document.querySelectorAll('.imgs')
    imagens.forEach( (imgs) =>{
        imgs.addEventListener('mouseover' , () =>{
          const link = imgs.querySelector('a')
          link.classList.add('a-display')
        })

        imgs.addEventListener('mouseout' , () =>{
          const link = imgs.querySelector('a')
          link.classList.remove('a-display')
        })

        imgs.addEventListener('Touchstart' , () =>{
          const link = imgs.querySelector('a')
          link.classList.add('a-display')
        })

        imgs.addEventListener('Touchend' , () =>{
          const link = imgs.querySelector('a')
          link.classList.add('a-display')
        })
        
      }
      )
      


 
}


// function verificar(){
//   const nome = document.getElementById('name')
//   const email = document.getElementById('email')
//   const description = document.getElementById('message')
//   console.log(description)

//   if ( nome.value == ""){
//     const error_name = "Por favor, escreva seu nome"
//     nome.style.color = "Red"
//     nome.style.paddingLeft = '10px'
//     nome.value = error_name
//   } 
  
//   if(email.value == ""){
//     const error_email = "Por favor, escreva um e-mail seu de fácil acesso"
//     email.style.color = "Red"
//     email.style.paddingLeft = '10px'
//     email.value = error_email
//   } 

//   if(description.value == ""){
//     const error_message = "Por favor, para entendermos melhor suas dúvidas ou objetivo de contato, escreva nesse campo uma mensagem"
//     description.style.color = "Red"
//     description.style.paddingLeft = '10px'
//     description.value = error_message
//   }
// }




// Criando animação de Scroll
function getScrollTopByHref(element){

    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

const menuItems = document.querySelectorAll('.menu a[href^="#"]')

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
})


function scrollToIdOnClick(event){
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 130

    scrollToPosition(to);
}

function scrollToPosition(to){
    window.scroll({
        top: to,
        behavior: "smooth"

    });
}


// Animando os butões do feedback 
const buttons = document.querySelectorAll('.change-feedback div');
const messages = document.querySelectorAll('.text-feedback');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Remove a classe "active" de todos os botões e mensagens
    buttons.forEach((button) => {
      button.classList.remove('active');
    });
    messages.forEach((message) => {
      message.classList.remove('active');
    });
    
    // Adiciona a classe "active" ao botão clicado e à mensagem correspondente
    button.classList.add('active');
    messages[index].classList.add('active');
  });
});

// Criando animação que os elementos apareçam
const observer = new IntersectionObserver(entries => {
  console.log(entries)

  Array.from(entries).forEach( entry =>{
    if(entry.intersectionRatio >= .1){

      entry.target.classList.add('init-hiden-off')
    }
  })
},{
  threshold: 0.1
})

Array.from(document.querySelectorAll('.init-hiden')).forEach( e => {
  observer.observe(e)

})