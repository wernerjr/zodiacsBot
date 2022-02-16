function findFragment() {
  var images = document.getElementsByClassName('ant-image-img');
  var exist = false;
  for (var i = 0; i < images.length; i++) {
      if (images[i].src.includes('5.png')) {
          exist = true;
      }
  }
  return exist;
}

function searchForFragment() {
  if (findFragment()) {
      clearInterval(procurando);
      console.log('Encontrado');
    alert('Encontrado')
  } else {
      document.getElementsByClassName('anticon-right')[0].click()
      console.log('Não encontrado');
  }
}

var procurando = setInterval(searchForFragment, 6000)