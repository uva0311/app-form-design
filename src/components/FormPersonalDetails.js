import React from 'react';
import {
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  InputAdornment
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  AddLocation,
  Email,
  Phone,
  Payment,
  Business,
  AttachMoney
} from '@material-ui/icons';

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

const provinces = [
  'Ontario, ON',
  'Quebec, QC',
  'Nova Scotia ,NS',
  'New Brunswick, NB',
  'Manitoba, MB',
  'British Columbia, BC',
  'Prince Edward Island, PE',
  'Saskatchewan, SK',
  'Alberta, AB',
  'Newfoundland and Labrador, NL'
];

export default function FormPersonalDetails({ values, handleChange }) {
  const classes = useStyles();
  const [province, setProvince] = React.useState('');

  const handleProvinceChange = e => {
    setProvince(e.target.value);
  };

  return (
    <form>
      <div className={classes.root}>
        <TextField
          label='First Name'
          onChange={handleChange('firstName')}
          defaultValue={values.firstName}
          className={classes.textField}
          style={{ margin: 8 }}
          helperText='text needs to change later'
        />
        <TextField
          label='Middle Name'
          onChange={handleChange('middleName')}
          defaultValue={values.middleName}
          className={classes.textField}
          style={{ margin: 8 }}
          helperText='text needs to change later'
        />
        <TextField
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
          label='Address Line 1'
          onChange={handleChange('addressLine')}
          defaultValue={values.addressline}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <AddLocation />
              </InputAdornment>
            )
          }}
          style={{ margin: 8, width: 400 }}
          helperText='text needs to change later'
        />
        <TextField
          label='Address Line 2'
          onChange={handleChange('addressLineSec')}
          defaultValue={values.addresslineSec}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <AddLocation />
              </InputAdornment>
            )
          }}
          style={{ margin: 8, width: 400 }}
          helperText='text needs to change later'
        />
        <TextField
          label='City'
          onChange={handleChange('city')}
          defaultValue={values.city}
          style={{ margin: 8 }}
          helperText='text needs to change later'
        />
        <FormControl style={{ margin: 8, width: 200 }}>
          <InputLabel>Province</InputLabel>
          <Select value={province} onChange={handleProvinceChange}>
            {provinces.map(province => (
              <MenuItem value={province}>{province}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label='Postal Code'
          onChange={handleChange('postalCode')}
          defaultValue={values.psotalCode}
          style={{ margin: 8 }}
          helperText='text needs to change later'
        />
      </div>
      <div className={classes.root}>
        <TextField
          label='Email Address'
          onChange={handleChange('email')}
          defaultValue={values.email}
          style={{ margin: 8 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Email />
              </InputAdornment>
            )
          }}
          helperText='text needs to change later'
        />
        <TextField
          label='Phone'
          onChange={handleChange('phone')}
          defaultValue={values.phone}
          style={{ margin: 8 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Phone />
              </InputAdornment>
            )
          }}
          helperText='text needs to change later'
        />
        <TextField
          label='Driver License'
          onChange={handleChange('driverLicense')}
          defaultValue={values.driverLicense}
          style={{ margin: 8 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Payment />
              </InputAdornment>
            )
          }}
          helperText='text needs to change later'
        />
        <TextField
          label='SIN (optional)'
          onChange={handleChange('sin')}
          defaultValue={values.sin}
          style={{ margin: 8 }}
          helperText='text needs to change later'
        />
      </div>
      <div className={classes.root}>
        <TextField
          placeholder='Own/Rent?'
          label='Property Status'
          onChange={handleChange('propertyStatus')}
          defaultvalue={values.propertyStatus}
          style={{ margin: 8, width: 250 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Business />
              </InputAdornment>
            )
          }}
          helperText='text needs to change later'
        />
      </div>
      <div className={classes.root}>
        <TextField
          label='Mortgage Amount'
          onChange={handleChange('mortgageAmount')}
          defaultValue={values.mortgageAmount}
          style={{ margin: 8 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <AttachMoney />
              </InputAdornment>
            )
          }}
          helperText='text needs to change later'
        />
        <TextField
          label='Property Value'
          onChange={handleChange('propertyValue')}
          defaultValue={values.propertyValue}
          style={{ margin: 8 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <AttachMoney />
              </InputAdornment>
            )
          }}
          helperText='text needs to change later'
        />
      </div>
    </form>
  );
}
