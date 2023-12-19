var lampada = document.getElementById('lampada');

lampada.onclick = function(){
    if(!this.classList.contains('acesa')){
        this.src = 'img/lampada-acesa.jpg';
        this.classList.add('acesa');
    } else{
        this.src = 'img/lampada-apagada.jpg';
        this.classList.remove('acesa');
    }
}