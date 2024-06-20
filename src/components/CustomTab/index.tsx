import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {CustomTabProps} from '../../models';
import {scale} from '../../utils/scaling';

const CustomTab = ({focused, tab}: CustomTabProps) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.labelContainer}>
        {focused ? (
          <tab.icon width={scale(24)} />
        ) : (
          <tab.iconUnselected width={scale(24)} />
        )}

        <Text
          style={[
            styles.label,
            {color: focused ? Colors.primary : Colors.black},
          ]}>
          {tab?.name}
        </Text>
      </View>
      {focused && <View style={styles.divider} />}
    </View>
  );
};

export default CustomTab;
