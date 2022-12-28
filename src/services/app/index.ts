export const loadImage = async ()  => {

    // const response = await fetch('https://picsum.photos/200/300');
    // const blob = await response.blob();
    console.log('...cargando imagen');
    // return blob;

    // return await new Promise(resolve => {
    //     setTimeout(() => {
    //         resolve('imagen cargada');
    //     }, 5000);
    // }).then(data => {
    //     console.log('DATA -> ', data);
    //     return data;
    // });

    // return new Promise(resolve => {
    //     setTimeout(() => {
    //         resolve('imagen cargada');
    //     }, 5000);
    // });

    return await new Promise((resolve) => {
        setTimeout(() => {
          resolve('imagen cargada vamooo');
        }, 5000);
      });
};
