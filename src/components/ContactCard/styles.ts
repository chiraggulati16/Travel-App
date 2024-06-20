import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../utils/theme';
import {moderateScale, scale, verticalScale} from '../../utils/scaling';

export const styles = StyleSheet.create({
  mainContainer: {
    height: verticalScale(150),
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: scale(8),
    shadowColor: Colors.shadowColor,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
    marginLeft: scale(16),
    overflow: 'hidden',
    marginHorizontal: scale(16),
    justifyContent: 'space-between',
  },

  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(20),
    marginTop: verticalScale(15),
  },
  name: {
    fontSize: 24,
    fontFamily: Fonts.IBMPlex700,
    color: Colors.black,
  },
  detail: {
    fontSize: 16,
    fontFamily: Fonts.IBMPlex400,
    marginTop: verticalScale(3),
    color: Colors.black,
  },
  profilePic: {
    width: moderateScale(74, 0.2),
    height: moderateScale(74, 0.2),
    borderRadius: scale(60),
  },
  buttonText: {
    fontSize: 16,
    fontFamily: Fonts.IBMPlex700,
    color: Colors.primary,
    textAlign: 'center',
  },
  button: {
    width: scale(90),
    height: verticalScale(32),
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: scale(6),
    borderColor: Colors.primary,
    marginHorizontal: scale(20),
    marginBottom: verticalScale(25),
  },
});
