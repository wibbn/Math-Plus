import React from 'react';
import { Redirect } from 'react-router-dom';
import Config from '../../config/projectInfo';

import withStyles from 'material-ui/styles/withStyles';
import InputAdornment from 'material-ui/Input/InputAdornment';

import { Email, LockOutline } from '@material-ui/icons';

import Header from 'components/Header/Header.jsx';
import HeaderLinks from 'components/Header/HeaderLinks.jsx';
import Footer from 'components/Footer/Footer.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import IconButton from 'components/CustomButtons/IconButton.jsx';
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';
import CustomInput from 'components/CustomInput/CustomInput.jsx';

import loginPageStyle from 'assets/jss/material-kit-react/views/loginPage.jsx';

import imageSm from 'assets/img/classSm.jpg';

import { connect } from 'react-redux';
import { signIn } from '../../store/actions/auth'
import { compose } from 'redux';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  };

  handleChange = (e) => {
    this.setState({[e.target.id] : e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { classes, authError, auth, ...rest } = this.props;
    if (auth.uid) return <Redirect to='/' />;
    return (
      <div>
        <Header
          absolute
          color='transparent'
          brand={Config.projectName}
          rightLinks={<HeaderLinks signin={true}/>}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: `url(${imageSm})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center'
          }}
        >
          <div className={classes.container}>
            <GridContainer justify='center'>
              <GridItem xs={12} sm={8} md={4}>
                <Card>
                  <form className={classes.form} onSubmit={this.handleSubmit}>
                    <CardHeader color='primary' className={classes.cardHeader}>
                      <h4>Вход</h4>
                      <div className={classes.socialLine}>
                        <IconButton
                          href='#pablo'
                          target='_blank'
                          color='transparent'
                          onClick={e => e.preventDefault()}
                        >
                          <i className={classes.socialIcons + ' fab fa-twitter'}/>
                        </IconButton>
                        <IconButton
                          href='#pablo'
                          target='_blank'
                          color='transparent'
                          onClick={e => e.preventDefault()}
                        >
                          <i className={classes.socialIcons + ' fab fa-facebook'}/>
                        </IconButton>
                        <IconButton
                          href='#pablo'
                          target='_blank'
                          color='transparent'
                          onClick={e => e.preventDefault()}
                        >
                          <i className={classes.socialIcons + ' fab fa-google-plus-g'}/>
                        </IconButton>
                      </div>
                    </CardHeader>
                    <CardBody>
                      <p className={classes.divider}>Стандартный вход</p>
                      <CustomInput
                        labelText='Электронная почта'
                        id='email'
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: 'email',
                          onChange: this.handleChange,
                          endAdornment: (
                            <InputAdornment position='end'>
                              <Email className={classes.inputIconsColor}/>
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText='Пароль'
                        id='password'
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: 'password',
                          onChange: this.handleChange,
                          endAdornment: (
                            <InputAdornment position='end'>
                             <LockOutline className={classes.inputIconsColor}/>
                            </InputAdornment>
                          )
                        }}
                      />
                      <button style={{display:'none'}}></button>
                      {authError ? <p className={classes.authError}>{authError}</p> : null}
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple color='primary' size='lg' onClick={this.handleSubmit}>
                        Войти
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
};

export default compose(
    withStyles(loginPageStyle),
    connect(mapStateToProps, mapDispatchToProps)
)(LogIn);
