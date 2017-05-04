export const START = 'START';
export const convertMin = (sec) => (sec - sec % 60) / 60;
export const convertSec = (sec) => (sec % 60);
export const displayMin = (sec) => convertMin(sec) > 0 ? convertMin(sec) : '';
export const displaySec = (sec) => `${convertSec(sec)}`.length <= 1 ? `0${convertSec(sec)}` : convertSec(sec);

