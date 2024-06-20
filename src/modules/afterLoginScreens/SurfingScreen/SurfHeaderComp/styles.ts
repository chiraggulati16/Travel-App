import {StyleSheet} from 'react-native';
import { scale, verticalScale } from '../../../../utils/scaling';
import { Colors, Fonts } from '../../../../utils/theme';


export const styles = StyleSheet.create({
  banner: {
    width: "100%",
    height: verticalScale(190)
  },
  description: {
    fontFamily: Fonts.IBMPlex400,
    fontSize: 16,
    color: Colors.black,
    marginHorizontal: scale(16),
    marginTop: verticalScale(25)
  }
});
