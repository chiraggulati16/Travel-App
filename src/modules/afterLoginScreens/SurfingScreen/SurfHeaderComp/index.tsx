import {Image, Text, View} from 'react-native';
import {Images} from '../../../../assets/ImageProperties';
import {styles} from './styles';
import ListTitle from '../../../../components/ListTitle';
import {Labels} from '../../../../utils/constant';
import {Colors} from '../../../../utils/theme';

const SurfHeaderComp = () => {
  return (
    <View>
      <Image
        style={styles.banner}
        source={Images.surfingBanner}
        resizeMode="contain"
      />
      <Text style={styles.description}>{Labels.SURF_DETAIL}</Text>
      <ListTitle heading={Labels.TOP_SPOT} bgColor={Colors.white} />
    </View>
  );
};

export default SurfHeaderComp;
