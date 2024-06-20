import {FlatList, View} from 'react-native';
import {topSpotList} from '../../../utils/dummyData';
import {useMemo} from 'react';
import FooterComp from '../../../components/FooterComp';
import CustomButton from '../../../components/CustomButton';
import { styles } from './styles';
import SurfHeaderComp from './SurfHeaderComp';
import TopSpotItem from '../../../components/TopSpotItem';
import { SpotModel } from '../../../models';

const SurfingScreen = () => {

  const renderCategoryItem = ({item}: {item: SpotModel}) => (
    <View style={styles.itemStyle}>
      <TopSpotItem data={item} />
    </View>
  );

  //to avoid re-rendering of header when category list changes
  const renderListHeader = useMemo(() => {
    return <SurfHeaderComp />;
  }, []);

  //to avoid re-rendering of footer when category list changes
  const renderListFooter = useMemo(() => {
    return <FooterComp />;
  },[])

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={topSpotList}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item?.id.toString()}
        ListHeaderComponent={renderListHeader}
        ListFooterComponent={renderListFooter}
        ListFooterComponentStyle={styles.footerStyle}
        showsVerticalScrollIndicator={false}
      />
      <CustomButton buttonStyle={styles.buttonStyle}/>
    </View>
  );
};

export default SurfingScreen;
