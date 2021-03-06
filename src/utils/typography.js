import Typography from 'typography';

export default new Typography({
  baseFontSize: 18,
  baseLineHeight: 1.7,
  scaleRatio: 2,
  googleFonts: [
    { name: 'Livvic', styles: ['600'] },
    { name: 'Niramit', styles: ['400', '400i', '700', '700i&display=swap'] },
  ],
  headerFontFamily: ['Livvic', 'sans-serif'],
  headerWeight: 600,
  headerLineHeight: 1.5,
  headerColor: 'grey',
  bodyFontFamily: ['Niramit', 'sans-serif'],
  bodyWeight: 400,
  bodyColor: 'black',
  boldWeight: 700,
});
