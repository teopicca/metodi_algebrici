import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, Alert} from "react-native";
import MaterialHeader1 from "../components/MaterialHeader1";
import Textbox from "../components/Textbox";
import SubmitButton from "../components/SubmitButton";
import ResultBox from "../components/ResultBox";
import * as Font from 'expo-font'


export class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      fontLoaded : false,
      input: '',
      result:'',
    }
    this.setInput = this.setInput.bind(this)
  }
  setInput(input){
    return this.setState({input})
  }

  async componentDidMount(){
    await Font.loadAsync({
      "roboto-regular":require("../assets/Fonts/Roboto-Regular.ttf")
    })
    this.setState({fontLoaded:true})
  }

  submit() {
        const input = this.state.input
        return fetch('http://192.168.1.9:5000', {

          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
          body: JSON.stringify({
            input: input,
          }),
        })
        .then((response) => response.json())
        .then((responseJson) => {
          if(responseJson.status===200){

                  switch (responseJson.type) {
                    case 'mcd':
                    this.setState({result:responseJson.result})
                    break;

                    case 'dio':
                      if(responseJson.solution){
                        this.setState({result: ['X: ', responseJson.x, '   ;   ', 'Y: ',responseJson.y, '\n \n',
                                                'Xk: ', responseJson.xk, '   :    ','Yk: ', responseJson.yk]})
                      }
                      else{
                        this.setState({result:'No solution'})
                      }
                      break;

                    case 'phi':
                      this.setState({result: responseJson.result})
                      break;

                    case 'bz':
                      this.setState({result: ['t: ',responseJson.s, '   ;   ', 's: ',responseJson.t]})
                      break;

                    case 'error':
                        Alert.alert('Wrong input')
                        break;
                  }
                }

          if(responseJson.status === 500){
            Alert.alert('Wrong input')
          }
            }).catch((error)=>{
              console.error(error);
            });
          }


  render() {

    if(this.state.fontLoaded){
      return (
        <View style={styles.container}>
          <StatusBar style={styles.statusBar} />
          <MaterialHeader1 style={styles.materialHeader1} />
          <Textbox style={styles.Textbox} setInput={this.setInput} />
          <SubmitButton style={styles.SubmitButton} funct={this.submit.bind(this)} />
          <View
            style={[
              styles.stack,
              {
                marginTop: 29,
                marginLeft: 5,
                height: 300,
                width: 359
              }
            ]}
          >
            <Text style={styles.text} />
            <ResultBox style={styles.ResultBox} result = {this.state.result} />
          </View>
        </View>
      );
    }
    else{
      return(
        <View />
      )
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBar: {},
  materialHeader1: {
    width: '100%',
    height: 56,
    marginTop: '6%',

  },
  Textbox: {
    width: '100%',
    height: 43,
    marginTop: 17,
    marginLeft: 5
  },
  SubmitButton: {
    width: 100,
    height: 36,
    marginTop: 41,
    marginLeft: '37%'
  },
  stack: {
    position: "relative"
  },
  text: {
    top: '50%',
    left: 32,
    color: "#121212",
    position: "absolute",
    fontSize: 24,
    fontFamily: "roboto-regular",
    textAlign: "center"
  },
  ResultBox: {
    flex : 1,
    top: 0,
    left: 10,
    width: '100%',
    height: 300,
    position: "absolute"
  }
});
