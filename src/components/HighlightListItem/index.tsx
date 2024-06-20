import {Image, Pressable, Text, View} from 'react-native';
import {HighlightListModel} from '../../models';
import {styles} from './styles';
import {Images} from '../../assets/ImageProperties';
import NavigationService from '../../navigation/NavigationService';
import {Labels} from '../../utils/constant';
import {scale} from '../../utils/scaling';

interface HighlightListProps {
  data: HighlightListModel;
}
const HighlightListItem = ({data}: HighlightListProps) => {
  const navigateScreen = () => {
    let name = data?.name == Labels.VULCANOES ? Labels.VULCANO : data?.name;
    NavigationService.navigate(name);
  };
  return (
    <Pressable style={styles.mainContainer} onPress={navigateScreen}>
      <View style={styles.childContainer}>
        <View>
          <Image
            style={styles.banner}
            source={data?.banner}
            resizeMode="cover"
          />

          <Text style={styles.heading}>{data?.name}</Text>
          <Text style={styles.description}>{data?.description}</Text>
        </View>
        <View style={styles.icon}>
          <Images.RoundArrow width={scale(30)} height={scale(30)} />
        </View>
      </View>
    </Pressable>
  );
};

export default HighlightListItem;
