import React, { Component } from "react";
import { Alert, StyleSheet, TouchableOpacity, Text } from "react-native";

var endpoint = 'http://192.168.1.9:5000/'

export default class SubmitButton extends Component {
  constructor(props){
    super(props);

    this.state={
      input : props.input,
    }


  }

  render() {
    return (
      <TouchableOpacity style={[styles.container, this.props.style]} onPress={this.props.funct}>
        <Text style={styles.caption}>Calcola</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212121",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0,
    shadowRadius: 5
  },
  caption: {
    color: "#fff",
    fontSize: 14
  }
});
