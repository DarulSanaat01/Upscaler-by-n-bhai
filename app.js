
let img = new Image();
const upload = document.getElementById('upload');
upload.onchange = e => {
 img.src = URL.createObjectURL(e.target.files[0]);
};
function upscale(){
 const scale = parseInt(document.getElementById('quality').value);
 const canvas = document.getElementById('canvas');
 const ctx = canvas.getContext('2d');
 canvas.width = img.width * scale;
 canvas.height = img.height * scale;
 ctx.imageSmoothingEnabled = true;
 ctx.imageSmoothingQuality = 'high';
 ctx.drawImage(img,0,0,canvas.width,canvas.height);
 document.getElementById('download').href = canvas.toDataURL();
}
