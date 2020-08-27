
/**
 * GENERAR UN NÚMERO ALETATORIO DE 0 a MAX
 * @param max valor máximo
 */
export const generateRandomNumber = (max: number) => {
    return Math.floor(Math.random() * (0 + max));
};



/**
 * GENERAR FECHA ACTUAL
 */
export const generateDateNow = () => {
    const MyDate = new Date();
    const date = ('0' + MyDate.getDate()).slice(-2) + '-' + ('0' + (MyDate.getMonth() + 1)).slice(-2) + '-' + MyDate.getFullYear();
   //  return date;
    return '27-07-2020'; // ! para hacer pruebas
};


