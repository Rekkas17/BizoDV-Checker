document.getElementById("checkButton").addEventListener("click", async () => {
    const imageUpload = document.getElementById("imageUpload").files[0];
    const resultDiv = document.getElementById("result");
    const uploadedImage = document.getElementById("uploadedImage");
    
    if (!imageUpload) {
        resultDiv.innerHTML = "<p class='error'>يرجى تحميل صورة.</p>";
        return;
    }

    const img = await faceapi.bufferToImage(imageUpload);
    uploadedImage.src = img.src;
    uploadedImage.style.display = 'block';

    // هنا يجب عليك إضافة الكود اللازم لفحص الصورة باستخدام face-api.js
});
