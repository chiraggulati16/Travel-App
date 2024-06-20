import {FlatList, View} from 'react-native';
import {categroyList} from '../../../utils/dummyData';
import CategoryListItem from '../../../components/CategoryListItem';
import {useMemo} from 'react';
import HeaderComp from './HeaderComp';
import {Colors} from '../../../utils/theme';
import FooterComp from '../../../components/FooterComp';
import CustomButton from '../../../components/CustomButton';
import { styles } from './styles';

const HomeScreen = () => {

  const renderCategoryItem = ({item}: {item: string}) => (
    <View style={{backgroundColor: Colors.light}}>
      <CategoryListItem title={item} />
    </View>
  );

  //to avoid re-rendering of header when category list changes
  const renderListHeader = useMemo(() => {
    return <HeaderComp />;
  }, []);

  //to avoid re-rendering of footer when category list changes
  const renderListFooter = useMemo(() => {
    return <FooterComp />;
  },[])

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={categroyList}
        renderItem={renderCategoryItem}
        keyExtractor={(index) => index}
        ListHeaderComponent={renderListHeader}
        ListFooterComponent={renderListFooter}
        showsVerticalScrollIndicator={false}
      />
      <CustomButton buttonStyle={styles.buttonStyle}/>
    </View>
  );
};

export default HomeScreen;
