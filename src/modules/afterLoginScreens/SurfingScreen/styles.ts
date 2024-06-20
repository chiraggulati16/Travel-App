import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../../utils/scaling';
import {Colors} from '../../../utils/theme';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  buttonStyle: {
    position: 'absolute',
    bottom: verticalScale(10),
    left: scale(16),
    right: scale(16),
  },
  footerStyle: {
    marginTop: verticalScale(50),
  },
  itemStyle: {
    backgroundColor: Colors.white,
  },
});
