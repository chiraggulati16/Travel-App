import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../utils/scaling';
import {Colors, Fonts} from '../../utils/theme';

export const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    flex: 1,
  },
  labelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontFamily: Fonts.IBMPlex700,
    lineHeight: verticalScale(16),
    fontSize: moderateScale(10),
    marginTop: verticalScale(2),
  },
  icon: {
    width: scale(24),
    height: scale(24),
  },
  divider: {
    height: verticalScale(3),
    backgroundColor: Colors.primary,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
