import { getUrlListImages } from '@/utils';
import { MOCK } from './mocks';

export const loadImageService= async ()  => {

    console.log('...cargando imagen');

    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve('imagen cargada vamooo');
      }, 5000);
    }).then(data => {
          console.log('DATA -> ', data);
          return data;
    });
};

export const getListImagesService = async () => {
   
  const url: any = getUrlListImages();

  return await fetch(url)
      .then(res =>
        res.json().then(data => {
          return data;
        }))
      .catch((err) => {
        return MOCK.listImages;
      });

}
