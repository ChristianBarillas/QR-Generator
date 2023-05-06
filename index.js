const qrtext = document.querySelector('.qr-text');
const qrcontainer = document.querySelector('#qr-code');
const dark = document.querySelector('.dark');
const sizes = document.querySelector('.sizes');


dark.addEventListener('input', handleDarkColor);
qrtext.addEventListener('input', handleQRText);
sizes.addEventListener('change', handleSize);

// Define la URL predeterminada para el código QR

const defaultUrl = "https://christianbarillas.github.io/Curriculum_Oficial/#"
let colorLigth = '#fff',
colorDark = '#000',
text = defaultUrl,
size = 300;


// Maneja el cambio en el color de fondo oscuro del código QR
function handleDarkColor(e){

    colorDark = e.target.value;
    generateQRcode();

}

// Maneja el cambio en el color de fondo claro del código QR
function handleLightColor(e){

    colorLigth = e.target.value;
    generateQRcode();

}

// Maneja el cambio en el texto del código QR

function handleQRText(e){

    const value = e.target.value;

    text = value;

    // Si el valor está vacío, se utiliza la URL predeterminada

    if (!value){

        text = defaultUrl
    }

    generateQRcode();
}



async function generateQRcode (){

    qrcontainer.innerHTML = '';
    
    // Usa la librería QRCode.js para generar el código QR
    new QRCode('qr-code', {

        text,
        height: size,
        width:size,
        colorLigth,
        colorDark
    } )

    // Agrega un enlace de descarga del código QR en formato PNG
    download.href = await resolveDataUrl()
}



// Maneja el cambio en el tamaño del código QR
function handleSize(e){

    size = e.target.value;
    generateQRcode();
}

// Resuelve la URL de los datos del código QR generado

function resolveDataUrl (){

    return new Promise ((resolve,reject)=>{

    setTimeout(()=>{

        const img = document.querySelector('#qr-code img');
        if(img.currentSrc){

            resolve(img.currentSrc)
            return;
        }

        const canvas = document.querySelector('canvas');
        resolve(canvas.toDataURL)
    },50)
    })
}

// Genera el código QR al cargar la página
generateQRcode()