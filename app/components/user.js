import React, {
    Text,
    View,
    Image
} from 'react-native';
import { connect } from 'react-redux/native';

class User extends React.Component {
    render() {
        console.log(this.props.user);
        return (
            <View>
                {this.props.user.avatar_url ?
                    <Image
                        style={{width: 100, height: 100}}
                        source={{ uri: this.props.user.avatar_url }}
                    /> : null}
                <Text>{this.props.user.name}</Text>
            </View>
        );
    }
}

export default connect(store => store)(User);
