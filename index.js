const download = document.querySelector('.download');
const sizes = document.querySelector('.sizes');
const sharebtn = document.querySelector('.share-btn');
const qrtext = document.querySelector('.qr-text');
const qrcontainer = document.querySelector('#qr-code');
const dark = document.querySelector('.dark');
const light = document.querySelector('.light');


dark.addEventListener('input', handleDarkColor);
light.addEventListener('input', handleLightColor);
qrtext.addEventListener('input', handleQRText);
sizes.addEventListener('change', handleSize);
sharebtn.addEventListener('click', handleShare);


const defaultURL = "https://christianbarillas.github.io/Curriculum_Oficial/#"
let colorLigth = '#fff',
colorDark = '000',
text = defaultURL,
size = 300;

function handleDarkColor(e){

    colorDark = e.target.value;
    generateQRcode();

}


function handleLightColor(e){

    colorLigth = e.target.value;
    generateQRcode();

}

function handleQRText(e){

    const value = e.target.value;

    text = value;

    if (!value){

        text = defaultURL
    }


}


async function generateQRcode (){

    qrcontainer.innerHTML = '';
    
    new generateQRcode('qr-code', {

        text,
        height: size,
        width:size,
        colorLigth,
        colorDark
    } )

    download.href = await resolveDataUrl()
}


async function handleShare (){

    setTimeout(async() =>{


        try{

        const base64url = await resolveDataUrl();
        const blob = await ((await fetch(base64url)).blob())
        const file = new file([blob], 'qrcode.png', {type: blob.type
        
        
        
        });


     }

     catch(error){




        alert('Brower does not support this feature!')
    }
    },1000)

    


}
