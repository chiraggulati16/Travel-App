import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import {SpotModel} from '../../models';

interface CategoryListProps {
  data: SpotModel;
}
const TopSpotItem = ({data}: CategoryListProps) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.childContainer}>
        <Text style={styles.title}>{`${data?.id}. ${data?.name}`}</Text>
        <Image
          style={styles.rightIcon}
          source={data?.banner}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default TopSpotItem;
