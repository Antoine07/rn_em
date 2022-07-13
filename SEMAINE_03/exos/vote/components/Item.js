import { Text, View } from 'react-native';
import {styles, items} from '../Styles';

export default  ({ title, style }) => (
    <View style={style}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );