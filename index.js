const input = document.querySelector('#campo-QRCode')
const container = document.querySelector('.containerActive')
const borda = document.querySelector('.bordinha')
const imgQRCode = document.querySelector('#img-QRCode')
const button = document.querySelector('.gerar-QRCode')
const botaoRemover = document.querySelector('.removerEstilo')

button.addEventListener('click', gerarQRCode)

function gerarQRCode(){
    if(!input.value){
        alert('Precisa inserir uma URL ou um texto no campo!')
        return;
    }

    const gerarQR = input.value
    const api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${gerarQR}`

    if(gerarQR){
        input.value = ''
        imgQRCode.src = api
        borda.classList.remove('QRcode')
        container.style.height = '500px'
        button.textContent = 'Gerando...'
        botaoRemover.style.marginTop = '0'
        
    } 

    imgQRCode.addEventListener('load', qrCodeExibição)

    function qrCodeExibição(){
        input.value = ''
        button.textContent = 'Gerar QR Code'
    }
}