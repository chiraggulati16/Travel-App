import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../utils/scaling';
import {Colors} from '../../utils/theme';

export const styles = StyleSheet.create({
  mainContainer: {
    height: verticalScale(60),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  logo: {
    width: scale(94),
  },
});
