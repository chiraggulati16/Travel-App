import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../utils/scaling';
import {Colors} from '../../utils/theme';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.light,
    paddingBottom: scale(60)
  },
});
