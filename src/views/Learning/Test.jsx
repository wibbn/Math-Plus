import React from 'react';
import Config from '../../config/projectInfo';
import classNames from 'classnames';
import {compose} from "redux";
import firebase from 'firebase/app';

import {withStyles} from "@material-ui/core/styles";

import Header from '../../components/Header/Header';
import HeaderLinks from '../../components/Header/HeaderLinks';
import Footer from '../../components/Footer/Footer';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import CustomInput from '../../components/CustomInput/CustomInput';

import testPageStyle from '../../assets/jss/material-kit-react/views/testPage';

const dashboardRoutes = [];

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    getTasks = async(test_num = 1) => {
        const db = firebase.firestore();
        const collection = db.collection('tasks');
        const query = collection
            .where('test_num', '==', test_num)
            .orderBy('id');
        const snapshot = await query.get();
        return snapshot.docs.map(doc => (doc.data()));
    };

    runQuery = async(test_num) => {
        const data = await this.getTasks(test_num);
        this.setState({tasks: data});
    };

    componentDidMount() {
        const id = Number(this.props.match.params.id);
        this.runQuery(id);
    }

    render() {
        const { classes, ...rest } = this.props;
        const id = Number(this.props.match.params.id);
        return (
            <div>
                <Header
                    color='transparent'
                    routes={dashboardRoutes}
                    brand={Config.projectName}
                    rightLinks={<HeaderLinks authButton='login'/>}
                    fixed
                    changeColorOnScroll={{
                        height: 50,
                        color: 'white'
                    }}
                    {...rest}
                />
                <div
                className={classes.pageHeader}
                style={{
                    backgroundColor: '#bbb',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center'
                }}>
                    <div className={classes.cont}>
                        <div className={classNames(classes.main, classes.mainRaised)}>
                            <div className={classes.container}>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <h2 className={classes.titleContent}>{`Вариант №${id}`}</h2>
                                        <h5 className={classes.description}>
                                            Вариант схожий с настоящим экзаменационным тестом. В поля ответов вписывать то, что требуется в задаче. При наличие ответов вписывать через ';'. На часть С принимаются только ответы (без решений) На решение теста отводится 3 часа 55 минут. Успепхов!
                                        </h5>
                                    </GridItem>
                                    {this.state.tasks && this.state.tasks.map(x =>
                                        <GridItem xs={12} sm={12} md={12}>
                                            <div className={classes.task}>
                                                <h3 className={classes.taskNum}>Задание {x.id} <h5
                                                    className={classes.taskName}>{x.name}</h5></h3>
                                                <h5 className={classes.description}>{x.task}</h5>
                                                <div className={classes.inputForm}>
                                                    <CustomInput
                                                        labelText='Ответ...'
                                                        id={'ans' + x.id}
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                        inputProps={{
                                                            type: 'text',
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </GridItem>
                                    )}

                                </GridContainer>
                            </div>
                        </div>
                    </div>
                    <Footer whiteFont />
                </div>
            </div>
        )
    }
}



export default compose(
    withStyles(testPageStyle)
)(Test)
