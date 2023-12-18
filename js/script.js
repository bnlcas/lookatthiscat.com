//imgFiles = ['bridge1.JPG', 'IMG_5353.JPG', 'IMG_7195.JPG', 'IMG_7180.JPG', 'IMG_6516.JPG', 'IMG_5196.JPG', 'IMG_7144.JPG', 'IMG_7019.JPG', 'manhattan_skyline2.JPG', 'IMG_5085.JPG', 'IMG_5509.JPG', 'IMG_4993.JPG', 'IMG_6438.JPG', 'IMG_5125.JPG', 'IMG_6414.jpg', 'IMG_4968.JPG', 'IMG_5083.jpg', 'IMG_5097.JPG', 'IMG_4996.JPG', 'IMG_4941.JPG', 'IMG_6359.JPG', 'IMG_4994.JPG', 'IMG_6167.JPG', 'IMG_5268.JPG', 'IMG_5081.JPG', 'IMG_5269.jpg', 'IMG_7091.JPG', 'IMG_6157.JPG', 'IMG_5099.JPG', 'IMG_6584.JPG', 'IMG_5066.JPG', 'IMG_5271.JPG', 'IMG_5517.JPG', 'IMG_4972.JPG', 'IMG_6169.JPG', 'sea.JPG', 'IMG_5110.JPG', 'IMG_5511.JPG', 'shell2.JPG', 'IMG_7258.JPG', 'fruit.JPG', 'IMG_5006.JPG', 'IMG_5013.JPG', 'IMG_4861.JPG', 'IMG_6332.JPG'];
//imgFiles = ['IMG_9352.jpg', 'IMG_7395.jpg', 'IMG_9350.jpg', 'IMG_7396.jpg', 'IMG_1250.jpg', 'IMG_9590.jpg', 'IMG_7408.jpg', 'IMG_1246.jpg', 'IMG_9342.jpg', 'IMG_7409.jpg', 'cat1.jpg', 'IMG_2850.jpg', 'cat14.jpg', 'IMG_9497.jpg', 'cat2.jpg', 'cat3.jpg', 'cat11.jpg', 'cat7.jpg', 'cat6.jpg', 'cat10.jpg', 'cat12.jpg', 'cat4.jpg', 'cat13.jpg', 'cat8.jpg', 'cat9.jpg', 'IMG_3984.jpg', 'IMG_9501.jpg', 'IMG_3993.jpg', 'IMG_9500.jpg', 'IMG_2849.jpg', 'IMG_3994.jpg', 'IMG_9498.jpg', 'IMG_8591.jpg', 'IMG_9499.jpg', 'IMG_3995.jpg', 'IMG_3981.jpg', 'IMG_7410.jpg', 'IMG_7404.jpg', 'IMG_7411.jpg', 'IMG_5614.jpg', 'IMG_7407.jpg', 'IMG_4443.jpg', 'IMG_7416.jpg', 'IMG_7403.jpg', 'IMG_7398.jpg', 'IMG_7401.jpg', 'IMG_9821.jpg', 'IMG_7400.jpg']
imgDir = "cats_full/";
imgFiles = ['IMG_9352.jpg', 'IMG_7419.jpg', 'IMG_7424.jpg', 'IMG_7418.jpg', 'IMG_7395.jpg', 'IMG_7427.jpg', 'IMG_9350.jpg', 'IMG_7396.jpg', 'IMG_7423.jpg', 'IMG_1250.jpg', 'IMG_9590.jpg', 'IMG_7408.jpg', 'IMG_1246.jpg', 'IMG_9342.jpg', 'IMG_7409.jpg', 'cat1.jpg', 'IMG_7485.jpg', 'IMG_7484.jpg', 'IMG_7490.jpg', 'IMG_2850.jpg', 'cat14.jpg', 'IMG_9497.jpg', 'IMG_7486.jpg', 'cat2.jpg', 'IMG_7479.jpg', 'IMG_7478.jpg', 'cat3.jpg', 'IMG_7487.jpg', 'IMG_7483.jpg', 'cat7.jpg', 'IMG_7468.jpg', 'IMG_7469.jpg', 'IMG_7455.jpg', 'cat6.jpg', 'IMG_7482.jpg', 'cat10.jpg', 'cat12.jpg', 'IMG_7480.jpg', 'IMG_7457.jpg', 'IMG_7456.jpg', 'IMG_7481.jpg', 'cat13.jpg', 'cat8.jpg', 'IMG_7467.jpg', 'IMG_7466.jpg', 'IMG_7472.jpg', 'cat9.jpg', 'IMG_3984.jpg', 'IMG_9501.jpg', 'IMG_7458.jpg', 'IMG_7464.jpg', 'IMG_7470.jpg', 'IMG_7471.jpg', 'IMG_7465.jpg', 'IMG_7459.jpg', 'IMG_3993.jpg', 'IMG_9500.jpg', 'IMG_7461.jpg', 'IMG_7475.jpg', 'IMG_7474.jpg', 'IMG_7460.jpg', 'IMG_2849.jpg', 'IMG_3994.jpg', 'IMG_9498.jpg', 'IMG_7489.jpg', 'IMG_7462.jpg', 'IMG_8591.jpg', 'IMG_7463.jpg', 'IMG_7488.jpg', 'IMG_9499.jpg', 'IMG_3995.jpg', 'IMG_3981.jpg', 'IMG_7410.jpg', 'IMG_7404.jpg', 'IMG_7411.jpg', 'IMG_5614.jpg', 'IMG_7407.jpg', 'IMG_4443.jpg', 'IMG_7402.jpg', 'IMG_7416.jpg', 'IMG_7403.jpg', 'IMG_7398.jpg', 'IMG_7401.jpg', 'IMG_7429.jpg', 'IMG_9821.jpg', 'IMG_7428.jpg', 'IMG_7400.jpg']

const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  };

function ShuffleFilenames(){
    for (var i = imgFiles.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = imgFiles[i];
        imgFiles[i] = imgFiles[j];
        imgFiles[j] = temp;
    }
}

function LoadRandomImage()
{
    var randomInd = Math.floor(Math.random() * imgFiles.length);
    var filename = imgFiles[randomInd];
}

function ToggleOverlay(){
    let showOverlay = this.hasAttribute('src');
    
    let overlay = document.getElementById("overlay");
    if(showOverlay){
        let src = this.getAttribute('src');
        overlay.style.zIndex ="10";
        overlay.style.backgroundColor = " RGBA(0,0,0,.8)";
        overlay.style.backgroundImage = "url(\"" + src + "\")";
        overlay.style.pointerEvents = "auto";
    }
    else {
        overlay.style.zIndex ="-1";
        overlay.style.backgroundColor = " RGBA(0,0,0,0)";
        overlay.style.backgroundImage = "none";
        overlay.style.pointerEvents = "none";
    }
}

function InitializeImageElements()
{
    ShuffleFilenames();
    //var mainDiv = document.getElementById("main");
    var mainRow = document.getElementById("row");
    let nCols = 4;
    let cols = [];
    for(var i = 0; i < nCols; i++){
        let col = document.createElement("div");
        col.setAttribute("class", "column");
        mainRow.appendChild(col);
        cols.push(col);
    }

    let nRows =  Math.ceil(imgFiles.length / 4);
    console.log(nRows);
    var currentCol;
    for(var i = 0; i < imgFiles.length; i++)
    {
        var elem = document.createElement("img");
        elem.setAttribute("src", imgDir + imgFiles[i]);
        elem.setAttribute("loading", "lazy");
        elem.addEventListener('click', ToggleOverlay);
        cols[i % nCols].appendChild(elem);
        delay(100);
    }
    let overlay = document.getElementById("overlay");
    overlay.addEventListener('click', ToggleOverlay);
}

InitializeImageElements();
