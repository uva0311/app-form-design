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
  Print,
  Phone,
  Storefront,
  Business,
  AttachMoney,
  InsertLink
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

const businessTypes = ['Sole Proprietorship', 'Corporation', 'Partnersip'];
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
  const [businessType, setBusinessType] = React.useState('');

  const handleProvinceChange = e => {
    setProvince(e.target.value);
  };

  const handleBusinessTypeChange = e => {
    setBusinessType(e.target.value);
  };

  return (
    <form>
      <div className={classes.root}>
        <TextField
          label='Legal Company Name'
          onChange={handleChange('legalCompanyName')}
          defaultValue={values.legalCompanyName}
          className={classes.textField}
          style={{ margin: 8 }}
          helperText='text needs to change later'
        />
        <TextField
          label='Operating Name'
          onChange={handleChange('operatingName')}
          defaultValue={values.operatingName}
          className={classes.textField}
          style={{ margin: 8 }}
          helperText='text needs to change later'
        />
        <FormControl style={{ margin: 8, width: 200 }}>
          <InputLabel>Business Type</InputLabel>
          <Select value={businessType} onChange={handleBusinessTypeChange}>
            {businessTypes.map(businessType => (
              <MenuItem value={businessType}>{businessType}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className={classes.root}>
        <TextField
          label='Address Line 1'
          onChange={handleChange('businessAddressLine')}
          defaultValue={values.businessAddress}
          style={{ margin: 8, width: 400 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <AddLocation />
              </InputAdornment>
            )
          }}
          helperText='text needs to change later'
        />
        <TextField
          label='Address Line 2'
          onChange={handleChange('businessAddressSec')}
          defaultValue={values.businessAddressSec}
          style={{ margin: 8, width: 400 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <AddLocation />
              </InputAdornment>
            )
          }}
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
          placeholder='Years, months, days'
          label='Date Business Incorporated'
          onChange={handleChange('incorporateDate')}
          defaultValue={values.incorporateDate}
          style={{ margin: 8, width: 300 }}
          helperText='text needs to change later'
        />
        <TextField
          placeholder='Years, months, days'
          label='How long have you been in your current address?'
          onChange={handleChange('duration')}
          defaultValue={values.duration}
          style={{ margin: 8, width: 400 }}
          helperText='text needs to change later'
        />
      </div>
      <div className={classes.root}>
        <TextField
          label='Monthly Rent Amount'
          onChange={handleChange('monthlyRent')}
          defaultValue={values.monthlyRent}
          style={{ margin: 8, width: 300 }}
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
          label='Business Phone'
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
          label='Fax'
          onChange={handleChange('fax')}
          defaultValue={values.fax}
          style={{ margin: 8 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Print />
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
      <div className={classes.root}>
        <TextField
          label='Business Website URL'
          onChange={handleChange('website')}
          defaultValue={values.website}
          style={{ margin: 8, width: 300 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <InsertLink />
              </InputAdornment>
            )
          }}
          helperText='text needs to change later'
        />
        <TextField
          label='Type of Business Activities'
          placeholder='e.g. customer services'
          onChange={handleChange('businessActivity')}
          defaultValue={values.businessActivity}
          style={{ margin: 8, width: 300 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Storefront />
              </InputAdornment>
            )
          }}
          helperText='text needs to change later'
        />
      </div>
    </form>
  );
}
