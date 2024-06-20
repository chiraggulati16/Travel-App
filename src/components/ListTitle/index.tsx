import {Text, View} from 'react-native';
import {styles} from './styles';
import { verticalScale } from '../../utils/scaling';

interface ListTitleProps {
  heading: string;
  bgColor: string;
  paddingTop?: number;
}
const ListTitle = ({heading, bgColor, paddingTop = 15}: ListTitleProps) => {
  return (
    <View
      style={[styles.mainContainer, {backgroundColor: bgColor, paddingTop: verticalScale(paddingTop)}]}>
      <Text style={styles.heading}>{heading}</Text>
    </View>
  );
};

export default ListTitle;
