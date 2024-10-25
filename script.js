const download = document.getElementById('download');

download.addEventListener('click',myfun)

function myfun(){
    html2canvas(document.getElementById("resume.html")).then(canvas=>{
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = "image.png";
        link.click();
    })
}

