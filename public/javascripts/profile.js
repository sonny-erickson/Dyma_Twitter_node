window.addEventListener('DOMContentLoaded', () =>{
const inputAvatar= document.querySelector('#input-avatar');
const formContainer=document.querySelector('#form-container');

formContainer.addEventListener('click', () =>{
    inputAvatar.click();//quand click sur le form ça ouvre le input (cad le file => dossier de sélection)
    })
inputAvatar.addEventListener('change', () =>{
    formContainer.submit();
    })
})