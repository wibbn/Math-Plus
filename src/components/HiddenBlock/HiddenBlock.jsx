import React from "react";
import {Motion, spring} from "react-motion";

import withStyles from "material-ui/styles/withStyles";
import Button from "components/CustomButtons/Button.jsx";

import hiddenBlockStyle from "assets/jss/material-kit-react/components/hiddenBlockStyle";

class HiddenBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showContent : false
        };
    };

    render() {
        const {
            zipSize,
            fullSize,
            children
        } = this.props;

        return (
            <Motion
            defaultStyle={{maxHeight: zipSize}}
            style={{
                maxHeight: spring(this.state.showContent ? fullSize : zipSize)
            }}>
                {style => (
                    <div>
                        <div
                        style={{
                            overflow: 'hidden',
                            maxHeight: `${style.maxHeight}px`
                        }}>
                            {children}
                        </div>
                        <Button
                        simple
                        onClick={()=> this.setState({showContent: !this.state.showContent})}
                        >
                            {this.state.showContent ? 'Скрыть информацию' : 'Показать полностью'}
                        </Button>
                    </div>
                )}
            </Motion>
        );
    };
}

export default withStyles(hiddenBlockStyle)(HiddenBlock);
