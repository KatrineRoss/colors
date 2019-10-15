import * as React from 'react';
import ReactDOM from 'react-dom';
import {ColorsForm} from './Modules/Color/Components/ColorsForm';
import {colorsList} from './Common/Data/Colors';

import "./styles/app.less";

class App extends React.Component {
    render() {
        return (
            <div className="app dark-theme">
                <ColorsForm colors={colorsList} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
