import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import Favorite from './Favorite';
import { styles, items } from '../Styles';
import { set_choice } from '../store/action-types/actions-types';


export default function Home() {
    const { candidates, max, count } = useSelector(state => state);
    const dispatch = useDispatch();
    // condition pour afficher le résultat du vote 
    if (count >= max)
        return (
            <Favorite />
        )

    const { choice_1, choice_2 } = candidates[count];
    
    return (
        <View style={ styles.container }>
            <Text>{count}</Text>
            <TouchableOpacity
                onPress={() => dispatch(set_choice(choice_1))}
            >
                <View style={items.itemFirst}>
                    <Text style={styles.title}>{choice_1}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => dispatch(set_choice(choice_2))}
            >
                <View style={items.itemSecond}>
                    <Text style={styles.title}>{choice_2}</Text>
                </View>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}