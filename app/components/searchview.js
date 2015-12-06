import React, {
    Text,
    View,
    TextInput,
    Dimensions,
    DeviceEventEmitter,
    Animated,
    Easing
} from 'react-native';
import Button from 'apsl-react-native-button';
import styles from '../styles/root';
import User from '../components/user';
import { connect } from 'react-redux/native';
import { calculateUserScore } from '../actions';

class SearchView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            visibleHeight: new Animated.Value(Dimensions.get('window').height)
        };
    }

    _handlePress() {
        if (this.state.text) {
            this.props.dispatch(calculateUserScore(this.state.text));
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
                        style={[styles.input, this.props.isLoading ? styles.inputDisabled : {}]}
                        onChangeText={text => this.setState({ text })}
                        editable={!this.props.isLoading}
                        value={this.state.text} />
                    <Button
                        style={styles.button}
                        textStyle={styles.buttonText}
                        isLoading={this.props.isLoading}
                        onPress={() => this._handlePress()}>
                        Check my score!
                    </Button>
                    <User />
                </Animated.View>
            </View>
        );
    }
}

export default connect(store => store)(SearchView);
