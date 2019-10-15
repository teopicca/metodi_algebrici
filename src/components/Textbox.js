import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class Textbox extends Component {

  constructor(props){
    super(props);
    this.state={
      input: '',
    }
  }


  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TextInput
          placeholder="Input"
          style={styles.inputStyle}
          onChangeText={this.props.setInput}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#D9D5DC",
    borderBottomWidth: 1
  },
  inputStyle: {
    flex: 1,
    color: "#000",
    alignSelf: "stretch",
    paddingTop: 16,
    paddingRight: 5,
    paddingBottom: 8,
    fontSize: 16,
    lineHeight: 16
  },
  // iconStyle: {
  //   color: "#384850",
  //   fontFamily: "roboto-regular",
  //   fontSize: 24,
  //   paddingRight: 8,
  //   opacity: 1
  // }
});
