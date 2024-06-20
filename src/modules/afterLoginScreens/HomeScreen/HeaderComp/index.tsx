import {FlatList, Image, View} from 'react-native';
import {Images} from '../../../../assets/ImageProperties';
import {styles} from './styles';
import ListTitle from '../../../../components/ListTitle';
import {Labels} from '../../../../utils/constant';
import {Colors} from '../../../../utils/theme';
import {highlightList} from '../../../../utils/dummyData';
import {HighlightListModel} from '../../../../models';
import HighlightListItem from '../../../../components/HighlightListItem';

const HeaderComp = () => {
  const renderListItem = ({item}: {item: HighlightListModel}) => {
    return <HighlightListItem data={item} />;
  };
  return (
    <View>
      <Image
        style={styles.banner}
        source={Images.bannerImg}
        resizeMode="cover"
      />

      <ListTitle heading={Labels.HIGHLIGHTS} bgColor={Colors.white} />
      <FlatList
        contentContainerStyle={{marginBottom: 30}}
        data={highlightList}
        renderItem={renderListItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <ListTitle heading={Labels.CATEGORIES} bgColor={Colors.light} />
    </View>
  );
};

export default HeaderComp;
