export const palette = {
  white: '#FFFFFF',
  green: 'green',
  alto: '#dcdcdc',
  black: '#000000',
  darkBlack: '#3c3c3c',
  grayChateau: '#9FA6AA',
  darkGray: 'darkgray',
  error: '#a90808',
  primaryBlue: '#1D44B9',
  disablePrimaryBlue: 'rgba(29, 68, 185, 0.6)',
  activeTabBlue: '#1D44B9',
  inactiveTabBlue: '#9fa6aa',
  transparent: 'transparent',
  lightGray: '#f0f0f0',
  lightBlack: '#1E1F20',
  whiteEDDFF6: '#EDDFF6',
  whiteF5FCFF: '#F5FCFF',
  redPrimary: '#ED1850',
};

export function getRandomColor() {
  var letters = 'BCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}
