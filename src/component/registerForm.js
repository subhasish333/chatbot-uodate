import React from "react";
import host from './api';
import { Formik } from "formik";
import * as Yup from "yup";
import { CardHeader, makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { withRouter, Redirect } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 420,
    marginTop: 50
  },
  container: {
    display: "Flex",
    justifyContent: "center"
  },
  cardHeader: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  actions: {
    float: "right"
  }
}));

const SexCategory = [
  {
    value: "male",
    label: "Male"
  },
  {
    value: "female",
    label: "Female"
  },
  {
    value: "others",
    label: "Others"
  }
];

const OccupationalCategory = [
  {
    value: "bussiness",
    label: "Bussiness"
  },
  {
    value: "employee",
    label: "Employee"
  },
  {
    value: "student",
    label: "Student"
  }
];

const MaritalCategory = [
  {
    value: "married",
    label: "Married"
  },
  {
    value: "unmarried",
    label: "Unmarried"
  }
];

const RegisterForm = props => {
  const classes = useStyles();

  const anum = props.location.aadhaarNumber;
  //console.log(anum);

  if (anum === undefined) {
    return <Redirect to='/' />
  }

  const handleSubmit = (values, { setSubmitting }) => {
    // submit to the server
    let reqObj = { ...values };
    reqObj.aadhaar = parseInt(values.aadhaar);
    reqObj.birth = new Date(values.birth);
    reqObj['place'] = values.address;
    reqObj.contact = parseInt(values.contact);

    axios.post(`${host}/register`, reqObj)
      .then(response => {
        console.log(response);
        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
          props.history.push({
            pathname: '/setpassword',
            aadhaarNumber: props.location.aadhaarNumber
          });
        }
      })
      .catch(error => {
        console.log(error);
      })
    setSubmitting(false);
  }

  return (
    <Formik
      initialValues={
        {
          aadhaar: anum,
          name: "",
          birth: "",
          occupation: "",
          address: "",
          place: "",
          district: "",
          contact: "",
          sex: "",
          marital: ""
        }
      }
      onSubmit={handleSubmit}
      validationSchema={Yup.object().shape({
        aadhaar: Yup.string()
          .required("Aadhaar Number is required")
          .matches(/^[0-9]{12}$/, 'Must be exactly 12 digits'),
        name: Yup.string()
          .required("Name is required")
          .matches(/[A-Za-z]+$/, 'Must be a character ')
          .min(2, 'Invalid Name'),
        birth: Yup.string()
          .required("Birth Date is required"),
        occupation: Yup.string()
          .required("Select your Occupation Category"),
        address: Yup.string()
          .required("Address is required")
          .matches(/[A-Za-z]+$/, 'Must be a character ')
          .min(2, 'Invalid Address'),
        place: Yup.string()
          .required("Place is required")
          .matches(/[A-Za-z]+$/, 'Must be a character ')
          .min(2, 'Invalid Place'),
        district: Yup.string()
          .required("District is required")
          .matches(/[A-Za-z]+$/, 'Must be a character ')
          .min(2, 'Invalid District'),
        contact: Yup.string()
          .required("Contact is required")
          .matches(/^[0-9]{10}$/, 'Must be exactly 10 digits'),
        sex: Yup.string()
          .required("Sex is required"),
        marital: Yup.string()
          .required("Marital Status is required")
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
        return (
          <div>
            <div className={classes.container}>
              <form onSubmit={handleSubmit}>
                <Card className={classes.card} style={{ backgroundColor: "#f3e5f5" }}>
                  <CardHeader className={classes.cardHeader} title="Register"></CardHeader>
                  <CardContent>
                    <TextField
                      id="aadhaar"
                      label="Aadhaar Number"
                      value={values.aadhaar}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={touched.aadhaar ? errors.aadhaar : ""}
                      error={touched.aadhaar && Boolean(errors.aadhaar)}
                      margin="dense"
                      variant="outlined"
                      fullWidth
                      disabled={true}
                    />
                    <TextField
                      id="name"
                      label="Full Name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={touched.name ? errors.name : ""}
                      error={touched.name && Boolean(errors.name)}
                      margin="dense"
                      variant="outlined"
                      fullWidth
                    />
                    <TextField
                      id="birth"
                      label="Date Of Birth"
                      type="date"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={touched.birth ? errors.birth : ""}
                      error={touched.birth && Boolean(errors.birth)}
                      InputLabelProps={{ shrink: true }}
                      margin="dense"
                      variant="outlined"
                      fullWidth
                    />
                    <TextField
                      select
                      id="occupation"
                      label="Occupation"
                      value={values.occupation}
                      onChange={handleChange("occupation")}
                      helperText={touched.occupation ? errors.occupation : ""}
                      error={touched.occupation && Boolean(errors.occupation)}
                      margin="dense"
                      variant="outlined"
                      fullWidth
                    >
                      {OccupationalCategory.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      id="address"
                      label="Address Details"
                      value={values.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={touched.address ? errors.address : ""}
                      error={touched.address && Boolean(errors.address)}
                      margin="dense"
                      variant="outlined"
                      fullWidth
                    />
                    <TextField
                      id="place"
                      label="Village/City"
                      value={values.place}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={touched.place ? errors.place : ""}
                      error={touched.place && Boolean(errors.place)}
                      margin="dense"
                      variant="outlined"
                      fullWidth
                    />
                    <TextField
                      id="district"
                      label="District"
                      value={values.district}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={touched.district ? errors.district : ""}
                      error={touched.district && Boolean(errors.district)}
                      margin="dense"
                      variant="outlined"
                      fullWidth
                    />
                    <TextField
                      id="contact"
                      label="Contact Number"
                      value={values.contact}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={touched.contact ? errors.contact : ""}
                      error={touched.contact && Boolean(errors.contact)}
                      margin="dense"
                      variant="outlined"
                      fullWidth
                    />
                    <TextField
                      select
                      id="sex"
                      label="Sex"
                      value={values.sex}
                      onChange={handleChange("sex")}
                      helperText={touched.sex ? errors.sex : ""}
                      error={touched.sex && Boolean(errors.sex)}
                      margin="dense"
                      variant="outlined"
                      fullWidth
                    >
                      {SexCategory.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      select
                      id="marital"
                      label="Marital Status"
                      value={values.marital}
                      onChange={handleChange("marital")}
                      helperText={touched.marital ? errors.marital : ""}
                      error={touched.marital && Boolean(errors.marital)}
                      margin="dense"
                      variant="outlined"
                      fullWidth
                    >
                      {MaritalCategory.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </CardContent>
                  <CardActions className={classes.actions}>
                    <Button type="submit" color="primary" disabled={isSubmitting}>
                      SUBMIT
            </Button>
                    <Button color="secondary" onClick={handleReset}>
                      CLEAR
            </Button>
                  </CardActions>
                </Card>
                {/* <br></br>
        <Typography variant="subtitle1" align = 'center' color='secondary' component="p">
                Already Registered <Link variant='h1' color='initial' underline='none' to="/login"> Login </Link>
        </Typography> */}
              </form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default withRouter(RegisterForm);