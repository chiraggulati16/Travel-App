import {Image, View} from 'react-native';
import {Images} from '../../assets/ImageProperties';
import {styles} from './styles';
import { scale } from '../../utils/scaling';

const CustomHeader = () => {
  return (
    <View style={styles.mainContainer}>
      <Images.AppLogo width={scale(94)}/>
    </View>
  );
};

export default CustomHeader;
