/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import InlineSVG from 'svg-inline-react';
import './styles/styles.scss';
import 'src/style.scss';
import styleModules from './style.module.scss';
import strawberryIcon from './images/strawberry.inline.svg';

const {
    someModule,
    icon,
    inlineIcon,
    iconFilled,
} = styleModules;

class App extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-5">Webpack, sass, react, es6 boilerplate</h1>
                    </div>
                </div>
                <div className={[someModule, 'container'].join(' ')}>
                    <div className="row">
                        <div className="col-sm">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Background images</h5>
                                    <div className="card-text">
                                        <div>
                                            <div className={icon}></div>
                                            <p>
                                                base usage
                                            </p>
                                        </div>
                                        <div>
                                            <div className={iconFilled}></div>
                                            <p>
                                                using svg-transform-loader to fill svg with custom color
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Custom fonts</h5>
                                    <div className="card-text">
                                        <i className="fas fas-left fa-check"></i>
                                        <span>Yep, it works</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card">
                                <InlineSVG className={['card-img-top', inlineIcon].join(' ')}
                                           src={strawberryIcon}/>
                                <div className="card-body">
                                    <h5 className="card-title">Inline svg</h5>
                                    <div className="card-text">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('root'),
);
