import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default class ResultBox extends Component {

  constructor(props){
    super(props);
    this.state = {}

  }
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.bodyContent}>
        </View>
        <View style={styles.body}>
          <Text style={styles.bodyText}>
            {this.props.result}
          </Text>
        </View>
        <View style={styles.actionBody}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexWrap: "nowrap",
    elevation: 3,
    borderRadius: 2,
    borderColor: "#CCC",
    borderWidth: 1,
    shadowOffset: {
      height: 2,
      width: -2
    },
    shadowColor: "#000",
    shadowOpacity: 0,
    shadowRadius: 2,
    overflow: "hidden"
  },
  bodyContent: {
    justifyContent: "center",
    padding: 16,
    paddingTop: 24
  },
  titleStyle: {
    color: "#000",
    paddingBottom: 12,
    fontSize: 24
  },
  subtitleStyle: {
    color: "#000",
    opacity: 1,
    fontSize: 14,
    lineHeight: 16
  },
  body: {
    // padding: 16,
    paddingTop: 8
  },
  bodyText: {
    textAlign: 'center',
    color: "#424242",
    flexWrap: "wrap",
    fontSize: 20,
    lineHeight: 20,


  },
  actionBody: {
    flexDirection: "row",
    padding: 8
  },
  actionButton1: {
    height: 36,
    padding: 8
  },
  actionText1: {
    color: "#000",
    opacity: 1,
    fontSize: 14
  },
  actionButton2: {
    height: 36,
    padding: 8
  },
  actionText2: {
    color: "#000",
    opacity: 1,
    fontSize: 14
  }
});
