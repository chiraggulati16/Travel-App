import {View} from 'react-native';
import ListTitle from '../ListTitle';
import {Labels} from '../../utils/constant';
import {Colors} from '../../utils/theme';
import ContactCard from '../ContactCard';
import {styles} from './styles';
import {Images} from '../../assets/ImageProperties';

const FooterComp = () => {
  return (
    <View style={styles.mainContainer}>
      <ListTitle heading={Labels.TRAVEL_GUIDE} bgColor={Colors.light} paddingTop={7} />
      <ContactCard
        name={Labels.CONTACT}
        detail={Labels.CONTACT_DETAIL}
        profilePic={Images.profileImg}
      />
    </View>
  );
};

export default FooterComp;
