import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react'
import getColor from '../../utils/getColorType'

export default function Header({name,order,image,type,data}) {

    const color = getColor(type);

    const bgStyle = [{backgroundColor: color, ...styles.bg}] 

    return (
    <>
        <View style={bgStyle}/>
        <SafeAreaView style={styles.content}>
            <View style={styles.header}>
                <Text style= {styles.name}>{name}</Text>
                <Text style= {styles.order}>#{`${order}`.padStart(3,0)}</Text>
            </View>
            <View style={styles.container}>
                <Image source={{uri: image}} style={styles.image}/>
            </View>
        </SafeAreaView>
    </>
    )
};

const styles = StyleSheet.create({
    bg:{
        width: '100%',
        height: 450,
        position: 'absolute',
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        transform: [{scaleX: 2}]
    },
    content: {
        marginHorizontal: 20,
        marginTop: 30
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 40
    },
    name:{
        textTransform: 'capitalize',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 27
    },
    order:{
        color: '#fff',
        fontWeight: 'bold'
    },
    container:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        top: 50,
        left: 40
    },
    image:{
        width: 350,
        height: 350,
        resizeMode: 'contain'
    }
})