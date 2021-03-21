// mensagens de erro
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

let imgs = JSON.parse(localStorage.getItem('imgs')) || [];

export function addImg(img) {
  let filteredImgs = imgs.filter((imgs) => {
    return imgs.id === img.id;
  });

  if (filteredImgs.length === 0) {
    imgs.push(img);
    localStorage.setItem('imgs', JSON.stringify(imgs));
    toast.success('Imagem inserida com sucesso');
    return {
      type: 'ADD_IMG',
      payload: img,
    };
  }

  filteredImgs = 0;
  toast.error('Já contem uma imagem com esse id');
  return {};
}
