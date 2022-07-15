import { StatusBar } from 'expo-status-bar';
import {
    Text,
    View,
    SafeAreaView,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { styles, items } from '../Styles';
import Item from './Item';

export default function History({navigation}) {
    const { choices } = useSelector(state => ({
        choices: state.h.choices
    }));
    const dispatch = useDispatch();

    console.log(choices);

    const renderItem = ({ item, index }) => (
        <Item
            title={item}
            style={index % 2 ? items.itemFirst : items.itemSecond}
        />
    );
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={choices}
                renderItem={renderItem}
                keyExtractor={item => Date.now().toString()}
            />
            <TouchableOpacity
                    onPress={() => navigation.navigate('History')}
                >
                    <View style={items.itemFirst}>
                    <Text style={styles.title}>Home</Text>
                </View>
                </TouchableOpacity>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}
