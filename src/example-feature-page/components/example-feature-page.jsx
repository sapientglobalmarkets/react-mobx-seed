import React from 'react';
import {observer, inject} from 'mobx-react';

import styles from './example-feature-page.css';

@inject('store')
@observer
export default class ExampleFeaturePage extends React.Component {

    static defaultProps = {
        dummy: '',
    };

    static propTypes = {
        dummy: React.PropTypes.string,
    };

    render() {
        return (
            <div className={ styles.exampleFeaturePage }>
                <h2>ExampleFeaturePage</h2>
            </div>
        );
    }

}
