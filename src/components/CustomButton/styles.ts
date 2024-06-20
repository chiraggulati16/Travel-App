import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../utils/scaling';
import {Colors, Fonts} from '../../utils/theme';

export const styles = StyleSheet.create({
  buttonContainer: {
    height: verticalScale(35),
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    borderRadius: scale(8),
    shadowColor: Colors.black,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
    elevation: 2
  },
  text: {
    fontSize: 16,
    fontFamily: Fonts.IBMPlex700,
    color: Colors.white,
    textAlign: "center"
  },
});
