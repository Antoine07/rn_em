import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet
} from 'react-native';

const gloabal = {
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
};

export const styles = StyleSheet.create(gloabal);

export const items = StyleSheet.create({
    itemFirst: {
        ...gloabal.item,
        backgroundColor: "#F07167"
    },
    itemSecond: {
        ...gloabal.item,
        backgroundColor: "#A2D2FF"
    }
})

