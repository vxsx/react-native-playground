import React, {
    AppRegistry,
    Text,
    View,
    TextInput
} from 'react-native';
import Button from 'apsl-react-native-button';
import styles from './styles/root';
// import { Provider } from 'react-redux/native';

const DivioGithubCalculator = React.createClass({
    getInitialState() {
        return {
            text: ''
        };
    },

    _handlePress() {
        this.setState({ isLoading: true });
    },

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Divio Github Calculator
                </Text>
                <Text style={styles.instructions}>
                    To get started, enter your Github username.
                </Text>
                <TextInput
                    style={[styles.input, this.state.isLoading ? styles.inputDisabled : {}]}
                    onChangeText={text => this.setState({ text })}
                    onBlur={() => this._handlePress()}
                    editable={!this.state.isLoading}
                    value={this.state.text} />
                <Button
                    style={styles.button}
                    textStyle={styles.buttonText}
                    isLoading={this.state.isLoading}
                    onPress={() => this._handlePress()}>
                    Check my score!
                </Button>
            </View>
        );
    }
});

AppRegistry.registerComponent('DivioGithubCalculator', () => DivioGithubCalculator);
