let theImage = document.getElementById('theImg')

theImage.onclick = function changeImg(){
    let displayImage = theImage.getAttribute('src');
    if (displayImage === './img/DrawKit Vector Illustration Team Work (4).png')
    {
        theImage.src = './img/DrawKit Vector Illustration Team Work (2).png'
    }
    else
    {
        theImage.src= './img/DrawKit Vector Illustration Team Work (4).png'
    }
};