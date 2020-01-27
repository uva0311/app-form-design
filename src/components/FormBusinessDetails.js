import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

export default function FormPersonalDetails({ values, handleChange }) {
  const classes = useStyles();

  return (
    <form>
      <div className={classes.root}>
        <TextField
          placeholder='First Name'
          label='First Name'
          onChange={handleChange('firstName')}
          defaultValue={values.firstName}
          className={classes.textField}
          style={{ margin: 8 }}
          helperText='text needs to change later'
        />
        <TextField
          placeholder='Middle Name'
          label='Middle Name'
          onChange={handleChange('middleName')}
          defaultValue={values.middleName}
          className={classes.textField}
          style={{ margin: 8 }}
          helperText='text needs to change later'
        />
        <TextField
          placeholder='Last Name'
          label='Last Name'
          onChange={handleChange('lastName')}
          defaultValue={values.lastName}
          className={classes.textField}
          style={{ margin: 8 }}
          helperText='text needs to change later'
        />
      </div>
      <div className={classes.root}>
        <TextField
          placeholder='Address Line'
          label='Address Line 1'
          onChange={handleChange('addressLine')}
          defaultValue={values.addressline}
          style={{ margin: 8 }}
          fullWidth
          helperText='text needs to change later'
        />
        <TextField
          placeholder='Address Line 2'
          label='Address Line 2'
          onChange={handleChange('addressLineSec')}
          defaultValue={values.addresslineSec}
          style={{ margin: 8 }}
          fullWidth
          helperText='text needs to change later'
        />
        <TextField
          placeholder='City'
          label='City'
          onChange={handleChange('city')}
          defaultValue={values.city}
          style={{ margin: 8 }}
          helperText='text needs to change later'
        />
        <TextField
          placeholder='Province'
          label='Province'
          onChange={handleChange('province')}
          defaultValue={values.province}
          style={{ margin: 8 }}
          helperText='text needs to change later'
        />
        <TextField
          placeholder='Postal Code'
          label='Postal Code'
          onChange={handleChange('postalCode')}
          defaultValue={values.psotalCode}
          style={{ margin: 8 }}
          helperText='text needs to change later'
        />
      </div>
      <div className={classes.root}>
        <TextField
          placeholder='Email Address'
          label='Email Address'
          onChange={handleChange('email')}
          defaultValue={values.email}
          style={{ margin: 8 }}
          helperText='text needs to change later'
        />
        <TextField
          placeholder='Phone'
          label='Phone'
          onChange={handleChange('phone')}
          defaultValue={values.phone}
          style={{ margin: 8 }}
          helperText='text needs to change later'
        />
        <TextField
          placeholder='Driver License'
          label='Driver License'
          onChange={handleChange('driverLicense')}
          defaultValue={values.driverLicense}
          style={{ margin: 8 }}
          helperText='text needs to change later'
        />
        <TextField
          placeholder='SIN'
          label='SIN (optional)'
          onChange={handleChange('sin')}
          defaultValue={values.sin}
          style={{ margin: 8 }}
          helperText='text needs to change later'
        />
      </div>
      <div>
        <label>Own</label>
        <Checkbox
          checked={values.propertyStatus}
          onChange={handleChange('propertyStatus')}
          value='own'
        />
        <label>Rent</label>
        <Checkbox
          checked={values.propertyStatus}
          onChange={handleChange('jasopropertyStatusn')}
          value='rent'
        />
      </div>
      <div className={classes.root}>
        <TextField
          placeholder='Mortgage Amount'
          label='Mortgage Amount'
          onChange={handleChange('mortgageAmount')}
          defaultValue={values.mortgageAmount}
          style={{ margin: 8 }}
          helperText='text needs to change later'
        />
        <TextField
          placeholder='Property Value'
          label='Property Value'
          onChange={handleChange('propertyValue')}
          defaultValue={values.propertyValue}
          style={{ margin: 8 }}
          helperText='text needs to change later'
        />
      </div>
    </form>
  );
}
