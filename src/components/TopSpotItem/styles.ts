import {Platform, StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../utils/scaling';
import {Colors, Fonts} from '../../utils/theme';

export const styles = StyleSheet.create({
  mainContainer: {
    height: verticalScale(50),
    flex: 1,
    marginBottom: verticalScale(7),
    marginHorizontal: scale(16),
    shadowColor: Colors.shadowColor,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
  },
  rightIcon: {
    height: verticalScale(50),
    width: moderateScale(110)
  },
  title: {
    fontFamily: Fonts.IBMPlex700,
    color: Colors.primary,
    fontSize: 16,
    lineHeight: 20,
    marginLeft: scale(16)
  },
  childContainer: {
    overflow: "hidden",
    backgroundColor: Colors.white,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: scale(5),
    elevation: Platform.OS == "android" ? 4 : 0,
    shadowColor: Colors.shadowColor,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
  }
});
