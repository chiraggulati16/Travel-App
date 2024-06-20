import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

//used to handle width wise responsiveness
export const scale = (size: number) =>
  (shortDimension / guidelineBaseWidth) * size;

//used to handle height wise responsiveness
export const verticalScale = (size: number) =>
  (longDimension / guidelineBaseHeight) * size;

  //used to handle responsiveness in font size
export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const moderateVerticalScale = (size: number, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;
