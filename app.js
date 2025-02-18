

var image = [
    "assets/pandora-bracelets-charms-lovely-authentic-pandora-silver-bangle-charm-bracelet-with-pink-of-pandora-bracelets-charms.jpg",
    "assets/pandora-bracelets-charms-lovely-charming-memories-jewelry-by-aileen-custom-of-pandora-bracelets-charms.jpg",
    "assets/pandora-bracelets-charms-new-fashionably-brokeass-pandora-charm-bracelet-of-pandora-bracelets-charms.jpg",
    "assets/pandora-bracelets-charms-new-fashionably-brokeass-pandora-charm-bracelet-of-pandora-bracelets-charms.jpg",
];

  
  currentIndex = 0;
function newIMg(){
    var currentImage=document.getElementById("first-imge");
    if(currentIndex === image.length-1){
        currentIndex = 0;
    }else{
        currentIndex++;
    }
    currentImage.src = image[currentIndex]
}
function prevImg(){
    var currentImage=document.getElementById("first-imge");
    if(currentIndex === 0){
        currentIndex =image.length-1;
        
    }else{
        currentIndex--;
    }
    currentImage.src = image[currentIndex]
}

 