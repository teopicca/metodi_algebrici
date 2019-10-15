import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default class MaterialHeader1 extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 5,
            marginTop: '10%',
            marginBottom: 5
          }}
        >

          <View style={styles.textWrapper}>
            <Text numberOfLines={1} style={styles.title}>
              Metodi
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row"
          }}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(181,63,78,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 4,
    elevation: 3,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0,
    shadowRadius: 1
  },

  textWrapper: {
    alignSelf: "flex-end",
    marginLeft: 21,
    marginBottom: 14
  },
  title: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 18,
    lineHeight: 18
  },

});
