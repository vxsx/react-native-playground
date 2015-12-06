import React, {
    AppRegistry,
} from 'react-native';
import configureStore from './app/store';
import { Provider } from 'react-redux/native';
import SearchView from './app/components/searchview';

const store = configureStore();

class DivioGithubCalculator extends React.Component {
    render() {
        return (
            <Provider store={store}>
                {() =>
                    <SearchView />
                }
            </Provider>
        );
    }
}

AppRegistry.registerComponent('DivioGithubCalculator', () => DivioGithubCalculator);
