import {Platform, StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale, scale, verticalScale} from '../../utils/scaling';
import {Colors, Fonts} from '../../utils/theme';

export const styles = StyleSheet.create({
  mainContainer: {
    height: moderateScale(Platform.OS == "android" ? 310 : 310),
    width: scale(250),
    shadowColor: Colors.shadowColor,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.3,
    marginLeft: scale(16),
    marginBottom: verticalScale(5),
    zIndex:999, 
   
  },
  banner: {
    width: '100%',
  },
  heading: {
    fontSize: 24,
    fontFamily: Fonts.IBMPlex700,
    color: Colors.primary,
    marginTop: verticalScale(10),
    marginHorizontal: scale(20),
  },

  description: {
    fontSize: 16,
    fontFamily: Fonts.IBMPlex400,
    color: Colors.black,
    marginTop: verticalScale(3),
    marginHorizontal: scale(20),
    maxHeight: moderateScale(50)
  },

  icon: {
    alignSelf: 'flex-end',
    marginHorizontal: scale(20),
    marginBottom: moderateScale(20)
  },
  childContainer: {
    overflow: "hidden",
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: scale(8),
    elevation: Platform.OS == "android" ? 3 : 0,
    shadowColor: Colors.shadowColor,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.3,
    justifyContent: "space-between",
  }
});
