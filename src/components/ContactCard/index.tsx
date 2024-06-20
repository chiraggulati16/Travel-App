import {Image, ImageSourcePropType, Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import {Labels} from '../../utils/constant';

interface ContactCardProps {
    name: string;
    detail: string;
    profilePic: ImageSourcePropType
}
const ContactCard = (props: ContactCardProps) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.detailContainer}>
        <View>
          <Text style={styles.name}>{props?.name}</Text>
          <Text style={styles.detail}>{props?.detail}</Text>
        </View>
        <Image style={styles.profilePic} source={props?.profilePic} />
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>{Labels.CONTACT}</Text>
      </Pressable>
    </View>
  );
};

export default ContactCard;
