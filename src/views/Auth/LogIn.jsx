import React from 'react';
import Config from 'config'

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

import imageLg from 'assets/img/classLg.jpg';
import imageSm from 'assets/img/classSsm.jpg'

const math = window.matchMedia('(min-width: 3800px)').matches;

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardAnimaton: 'cardHidden',
      email: '',
      pass: ''
    };
  }

  handleChange = (e) => {
    this.setState({[e.target.id] : e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: '' });
      }.bind(this),
      700
    );
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          absolute
          color='transparent'
          brand={Config.projectName}
          rightLinks={<HeaderLinks authButton='register'/>}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: math ? 'url(' + imageLg + ')' : 'url(' + imageSm + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'top center'
          }}
        >
          <div className={classes.container}>
            <GridContainer justify='center'>
              <GridItem xs={12} sm={8} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
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
                        id='pass'
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
  }
}

export default withStyles(loginPageStyle)(LogIn);
