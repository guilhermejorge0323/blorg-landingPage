export function verificaRedimensinamento(){
    window.addEventListener("resize",function(e){
        console.log('Ola mundo');
        verificaLargura();
    });
}


export function verificaLargura(){
    let largura = document.documentElement.clientWidth;
    const image1 = document.querySelector('#img-main1')
    if(largura <= 1280){
        image1.src = '../src/assets/img/illustration-editor-mobile.svg';
    }else{
        image1.src = '../src/assets/img/illustration-editor-desktop.svg';
    }
}