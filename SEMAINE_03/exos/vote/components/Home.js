import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { CHOICE } from '../store/constants/actions';

export default function Home() {
    const { candidates, max, count } = useSelector(state => state);
    const dispatch = useDispatch();
// condition pour afficher le résultat du vote 
    const {choice_1, choice_2} = candidates[count];
    
    return (
        <View style={styles.container}>
            <Text>{count}</Text>
            <TouchableOpacity
                onPress={() => dispatch({ type: CHOICE, choice_1 })}
            >
                <View style={styles.item}>
                    <Text style={styles.title}>{choice_1}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => dispatch({ type: CHOICE, choice_2 })}
            >
                <View style={styles.item}>
                    <Text style={styles.title}>{choice_2}</Text>
                </View>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
