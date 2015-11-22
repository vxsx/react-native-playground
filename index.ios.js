import React, {
    AppRegistry,
    Text,
    View,
    TextInput,
    Dimensions,
    DeviceEventEmitter,
    Animated,
    Easing
} from 'react-native';
import Button from 'apsl-react-native-button';
import styles from './styles/root';
// import { Provider } from 'react-redux/native';

class DivioGithubCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            visibleHeight: new Animated.Value(Dimensions.get('window').height)
        };
    }

    _handlePress() {
        if (this.state.text) {
            this.setState({ isLoading: true });
        }
    }

    componentWillMount() {
        DeviceEventEmitter.addListener('keyboardWillShow', this.keyboardWillShow.bind(this));
        DeviceEventEmitter.addListener('keyboardWillHide', this.keyboardWillHide.bind(this));
    }

    keyboardWillShow(e) {
        const newSize = Dimensions.get('window').height - e.endCoordinates.height;

        Animated.timing(this.state.visibleHeight, {
            duration: 250,
            easing: Easing.inOut(Easing.ease),
            toValue: newSize
        }).start();
    }

    keyboardWillHide() {
        const newSize = Dimensions.get('window').height;

        Animated.timing(this.state.visibleHeight, {
            duration: 250,
            easing: Easing.inOut(Easing.ease),
            toValue: newSize
        }).start();
    }

    render() {
        return (
            <View>
                <Animated.View style={[styles.container, { height: this.state.visibleHeight }]}>
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
                </Animated.View>
            </View>
        );
    }
}

AppRegistry.registerComponent('DivioGithubCalculator', () => DivioGithubCalculator);
