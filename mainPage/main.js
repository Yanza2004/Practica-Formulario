let tableMusic = {
  REGUETON: {
    nameGenre: "REGUETON",
    imgPort: "https://www.unotv.com/uploads/2022/03/regueton-232524.jpg",
  },
  EDM: {
    nameGenre: "EDM",
    imgPort: "https://www.radio.es/images/broadcasts/af/d9/119148/1/c300.png",
  },
  SALSA: {
    nameGenre: "SALSA",
    imgPort: "https://i.ytimg.com/vi/wf1DRUKIC4g/maxresdefault.jpg",
  },
  BACHATA: {
    nameGenre: "BACHATA",
    imgPort:
      "https://i.pinimg.com/736x/fe/8f/2c/fe8f2c82353d06a21489dd9622fb3790.jpg",
  },
  MERENGUE: {
    nameGenre: "MERENGUE",
    imgPort: "https://i.ytimg.com/vi/OTpTXj9XYWI/maxresdefault.jpg",
  },
  CUMBIA: {
    nameGenre: "CUMBIA",
    imgPort: "https://i.ytimg.com/vi/4kEKvkQS8hU/maxresdefault.jpg",
  },
};

console.log(tableMusic);

const clipsMusic = document.getElementById("clips-music");
console.log(clipsMusic);
function pintarEnPantalla (){
    clipsMusic.innerHTML = tableMusic.REGUETON.imgPort
}
pintarEnPantalla()