import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import FormPersonalDetails from './FormPersonalDetails';
import FormCompanyDetails from './FormCompanyDetails';
// import FormFinancialDetails from './FormFinancialDetails';
// import FormBusinessDetails from './FormBusinessDetails';

function getSteps() {
  return [
    'Enter business owner information',
    'Enter Company information',
    'Application Consent',
    'Finish'
  ];
}

export class AppForm extends Component {
  state = {
    step: 0,
    personalInfo: {
      firstName: '',
      middleName: '',
      lastName: '',
      addressLine: '',
      addressLineSec: '',
      city: '',
      province: '',
      postalCode: '',
      phone: '',
      email: '',
      driverlicense: '',
      sin: '',
      propertyStatus: '',
      mortgageAmount: 0,
      propertyValue: 0
    },
    companyInfo: {
      legalCompanyName: '',
      operatingName: '',
      incorporateDate: '',
      businessType: '',
      businessAddress: '',
      businessAddressSec: '',
      city: '',
      province: '',
      postalCode: '',
      duration: '',
      propertyStatus: '',
      monthlyRent: 0,
      phone: '',
      fax: '',
      website: '',
      businessActivity: ''
    },
    financialInfo: '',
    businessRefs: ''
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step, personalInfo, companyInfo } = this.state;
    const personalInfoValues = { personalInfo };
    const companyInfoValues = { companyInfo };

    const useStyles = makeStyles(theme => ({
      root: {
        width: '100%',
      },
      button: {
        marginRight: theme.spacing(1)
      },
      instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
      }
    }));

    const getStepContent = step => {
      switch (step) {
        case 0:
          return (
            <FormPersonalDetails
              handleChange={this.handleChange}
              values={personalInfoValues}
            />
          );
        default:
        case 1:
          return (
            <FormCompanyDetails
              handleChange={this.handleChange}
              values={companyInfoValues}
            />
          );
        case 2:
          return (
            <div style={{display: 'flex', alignItems: 'center'}}>
              <br />
              <br />
              <br />
              <br />
              <br />
              <p>
                I/We hereby certify that the information given above is true,
                accurate and complete as at the statement date. I/We fully
                understand that such information shall be used to determine the
                company’s and my/our credit worthiness. I/We understand that ALL
                INFORMATION WILL BE VERIFIED and any information that proves
                inaccurate may result in the application being terminated. I/We
                authorize CORfinancial Corp. or its assignees to obtain all the
                information they require and further authorize the disclosure of
                said information to other lenders, credit bureaus and other
                reporting agencies.
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          );
        case 3:
          return <div>Success</div>;
      }
    };

    return (
      <React.Fragment>
        <Container maxWidth='lg'>
          <Stepper activeStep={step} alternativeLabel>
            {getSteps().map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Container>
        <Container style={useStyles.root} maxWidth='md'>
          <form autoComplete='off'>
            <div>
              <Typography style={useStyles.instructions}>
                {getStepContent(step)}
              </Typography>
              <br />
              <div>
                <Button
                  disabled={step === 0}
                  onClick={this.prevStep}
                  style={useStyles.backButton}
                >
                  Back
                </Button>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={this.nextStep}
                >
                  {step === getSteps().length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          </form>
        </Container>
      </React.Fragment>
    );
  }
}

export default AppForm;
