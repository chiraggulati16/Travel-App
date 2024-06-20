import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../utils/scaling';
import {Colors, Fonts} from '../../utils/theme';

export const styles = StyleSheet.create({
  mainContainer: {
    height: verticalScale(54),
    flex: 1,
    justifyContent: 'center',
    paddingTop: verticalScale(15),
    paddingBottom: verticalScale(2),
  },
  heading: {
    fontSize: 16,
    fontFamily: Fonts.IBMPlex700,
    lineHeight: 20,
    color: Colors.black,
    marginLeft: scale(16),
  },
});
