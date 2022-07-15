import { StatusBar } from 'expo-status-bar';
import {
    Text,
    View,
    SafeAreaView,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { styles } from '../Styles';

export default function Home({navigation}) {

    return (
        <SafeAreaView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Vote')}
                >
                    <Text>Vote</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('History')}
                >
                    <Text>History</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
