import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import {Images} from '../../assets/ImageProperties';
import { scale } from '../../utils/scaling';

interface CategoryListProps {
  title: string;
}
const CategoryListItem = ({title}: CategoryListProps) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{title}</Text>

      <Images.RightArrow width={scale(16)}/>
    </View>
  );
};

export default CategoryListItem;
