import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function App() {
  const [enteredName, setEnteredName] = useState('');
  const [enteredUname, setEnteredUname] = useState('');
  const [enteredPass, setEnteredPass] = useState('');
  const [allData, setData] = useState([]);
  const [imgOpacity, setImgOpacity] = useState(0);

  const nameInputHandler = (enteredName) => {
    setEnteredName(enteredName);
  };

  const unameInputHandler = (enteredUname) => {
    setEnteredUname(enteredUname);
  };

  const passInputHandler = (enteredPass) => {
    setEnteredPass(enteredPass);
  };

  const addDataHandler = () => {
    setData(allData => ['Name: '+enteredName, 'Username: '+enteredUname, 'Password: '+enteredPass]);
    setImgOpacity(1);
  };

  return (
    <View>
      <View style={{paddingTop: 50, paddingLeft: 15, paddingRight: 15, height: 270, justifyContent: 'space-between'}}>
        <View style={styles.onerow}>
          <Text stle={styles.outputtext}>Name </Text>
          <TextInput 
            placeholder=' e.g John Smith' 
            style={styles.inputtext}
            onChangeText={nameInputHandler}
            value={enteredName}/>
        </View>
        <View style={styles.onerow}>
          <Text stle={styles.outputtext}>Username </Text>
          <TextInput 
            placeholder=' e.g john123' 
            style={styles.inputtext}
            onChangeText={unameInputHandler}
            value={enteredUname}/>
        </View>
        <View style={styles.onerow}>
          <Text style={styles.outputtext}>Password </Text>
          <TextInput secureTextEntry={true} placeholder=' password' style={styles.inputtext}
          onChangeText={passInputHandler}
          value={enteredPass}/>
        </View>
        <View style={styles.buttonstyle}>
          <Button title='Enter' onPress={addDataHandler} color='darkred' />
        </View>
      </View>
      <View style={{marginTop: 20, marginHorizontal: 15, alignItems: 'stretch'}}>
          {allData.map((data) => <View style={styles.listitem}><Text key={data}>{data}</Text></View>)}
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Image style={{width: 100, height: 100, opacity: imgOpacity}}
            source={{uri: 'https://www.stickpng.com/assets/images/589b561082250818d81e7490.png'}}></Image>
          </View>          
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputtext: {
    padding: 4,
    borderColor: 'black',
    borderWidth: 1,
    width: '80%'
  },
  outputtext: {
    //alignContent: 'center'
  },
  onerow: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonstyle: {
    // paddingLeft: 70,
    // paddingRight: 70
  },
  listitem: {
    padding: 10,
    backgroundColor: 'seashell',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 5
  }
});
