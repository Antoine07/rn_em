import { StatusBar } from 'expo-status-bar';
import {
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    FlatList
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Item from './Item';
import { styles, items } from '../Styles';
import { set_reset } from '../store/action-types/actions-types';

export default function Favorite() {
    const { choices } = useSelector(state => ({
        choices : state.v.choices
    }));
    const dispatch = useDispatch();

    const renderItem = ({ item, index }) => (
        <Item 
            title={item.choice} 
            style={ index % 2 ? items.itemFirst : items.itemSecond} 
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={choices}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
             <TouchableOpacity
                onPress={() => dispatch(set_reset())}
            >
                <View style={items.itemFirst}>
                    <Text style={styles.title}>Clear</Text>
                </View>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}
