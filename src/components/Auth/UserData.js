import { View, Text, StyleSheet, Button } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import React, {useState, useCallback} from 'react'
import useAuth from '../../Hooks/UseAuth'
import { size } from 'lodash';
import { getFavoritePokemon } from '../../api/addFavFunction'


export default function UserData() {
  const {auth, logout} = useAuth();
  const [total, setTotal] = useState(0);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try{
          const response = await getFavoritePokemon();
          setTotal(size(response))
        } catch (e){setTotal(0)}
      })();
    },[])
  )

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.title}>{`${auth.firstname} ${auth.lastname}`}</Text>
      </View>

      <View style={styles.dataContent}>
        <ItemMenu title='Name: ' text={`${auth.firstname} ${auth.lastname}`}/>
        <ItemMenu title='Username: ' text={auth.username}/>
        <ItemMenu title='Email: ' text={auth.email} />
        <ItemMenu title='Favorites: ' text={`${total}`} />
      </View>

      <Button title='Logout' onPress={logout}/>

    </View>

    
  )
};

function ItemMenu({title, text}){
  return(
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}</Text>
      <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content:{
    marginHorizontal: 20,
    marginTop: 20
  },
  titleBlock: {
    marginBottom: 30
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22
  },
  dataContent:{
    marginBottom: 20
  },
  itemMenu:{
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#CFCFCF'
  },
  itemMenuTitle:{
    fontWeight: 'bold',
    paddingRight: 10,
    width: 120
  }
})