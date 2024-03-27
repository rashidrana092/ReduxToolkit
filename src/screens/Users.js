import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {deleteUser} from '../redux/slices/UserSlice';
import {increment, decrement} from '../redux/slices/counterSlice';

const Users = () => {
  const navigation = useNavigation();
  const users = useSelector(state => state.user);
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  const uid = useSelector(state => state.id.id);
  console.log('state+++', count);
  return (
    <View style={{flex: 1}}>
      <Text>{count}</Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 40,
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity
          onPress={() => {
            dispatch(increment());
          }}
          style={{
            backgroundColor: 'lightsteelblue',
            width: 90,
            height: 42,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 16}}>Increment</Text>
        </TouchableOpacity>
        <Text>{count}</Text>
        <TouchableOpacity
          onPress={() => {
            dispatch(decrement());
          }}
          style={{
            backgroundColor: 'lightsteelblue',
            width: 90,
            height: 42,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 16}}>Decrement</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={users.data}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: '90%',
                padding: 10,
                borderWidth: 1,
                alignSelf: 'center',
                marginTop: 20,
                borderRadius: 10,
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <View>
                <Text>{'Name: ' + item.name}</Text>
                <Text>{'Email: ' + item.email}</Text>
                <Text>{'Mobile Number: ' + item.mobile}</Text>
                <Text>{'Address: ' + item.address}</Text>
              </View>
              <View style={{marginRight: 10}}>
                <Text
                  style={{
                    padding: 5,
                    borderWidth: 1,
                    borderColor: 'blue',
                    color: 'blue',
                  }}
                  onPress={() => {
                    navigation.navigate('AddUser', {
                      type: 'edit',
                      data: item,
                      index: index,
                    });
                  }}>
                  Edit
                </Text>
                <Text
                  style={{
                    padding: 5,
                    borderWidth: 1,
                    borderColor: 'red',
                    color: 'red',
                    marginTop: 10,
                  }}
                  onPress={() => {
                    dispatch(deleteUser(index));
                  }}>
                  Delete
                </Text>
              </View>
            </View>
          );
        }}
      />
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          width: '100%',
          height: 50,
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('AddUser', {type: 'add'});
        }}>
        <Text style={{color: 'white', fontSize: 16}}>Add New User</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Users;
