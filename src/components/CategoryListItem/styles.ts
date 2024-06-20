import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../utils/scaling';
import {Colors, Fonts} from '../../utils/theme';

export const styles = StyleSheet.create({
  mainContainer: {
    height: verticalScale(50),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
    marginBottom: verticalScale(7),
    marginHorizontal: scale(16),
    paddingHorizontal: scale(15),
    borderRadius: scale(5),
  },
  rightIcon: {
    width: scale(16),
  },
  title: {
    fontFamily: Fonts.IBMPlex400,
    color: Colors.black,
    fontSize: 16,
    lineHeight: 20,
  },
});
