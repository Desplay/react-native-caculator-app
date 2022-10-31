import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

import Row from "./src/utils/row";
import Button from "./src/view/button";
import calculator, { defaultCaculator } from "./src/controller/caculator";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});

const Show = (state) => {
  if (state.showValue === null) {
    return 0;
  }
  return parseFloat(state.showValue).toLocaleString();
};

const History = (state) => {
  if (state.showValue === null && state.operator !== null) {
    return parseFloat(state.secondValue) + state.operator + '';
  }
  if (state.showValue === null) {
    return ' ';
  }
  if (state.operator === null) {
    return ' ';
  }
  return parseFloat(state.secondValue) + state.operator + '';
}

export default class App extends Component {
  state = defaultCaculator;
  handleTap = (type, value) => {
    this.setState((state) => calculator(type, value, state));
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
        <Text style={styles.value}>{History(this.state)}</Text>
          <Text style={styles.value}>{Show(this.state)}</Text>
          <Row>
            <Button
              text="C"
              theme="secondary"
              onPress={() => this.handleTap("clear")}
            />
            <Button
              text="+/-"
              theme="secondary"
              onPress={() => this.handleTap("changeValue")}
            />
            <Button
              text="←"
              theme="secondary"
              onPress={() => this.handleTap("deleteLastValue")}
            />
            <Button
              text="/"
              theme="accent"
              onPress={() => this.handleTap("operator", "/")}
            />
          </Row>
          <Row>
            <Button text="7" onPress={() => this.handleTap("number", 7)} />
            <Button text="8" onPress={() => this.handleTap("number", 8)} />
            <Button text="9" onPress={() => this.handleTap("number", 9)} />
            <Button
              text="x"
              theme="accent"
              onPress={() => this.handleTap("operator", "*")}
            />
          </Row>

          <Row>
            <Button text="4" onPress={() => this.handleTap("number", 4)} />
            <Button text="5" onPress={() => this.handleTap("number", 5)} />
            <Button text="6" onPress={() => this.handleTap("number", 6)} />
            <Button
              text="-"
              theme="accent"
              onPress={() => this.handleTap("operator", "-")}
            />
          </Row>

          <Row>
            <Button text="1" onPress={() => this.handleTap("number", 1)} />
            <Button text="2" onPress={() => this.handleTap("number", 2)} />
            <Button text="3" onPress={() => this.handleTap("number", 3)} />
            <Button
              text="+"
              theme="accent"
              onPress={() => this.handleTap("operator", "+")}
            />
          </Row>

          <Row>
            <Button text="%" onPress={() => this.handleTap("percent")} />
            <Button text="0" onPress={() => this.handleTap("number", 0)} />
            <Button text="." onPress={() => this.handleTap("number", ".")} />
            <Button
              text="="
              theme="accent"
              onPress={() => this.handleTap("equal")}
            />
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}
