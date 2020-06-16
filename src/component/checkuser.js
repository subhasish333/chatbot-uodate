import React from "react";
import host from './api';
import { Formik } from "formik";
import * as Yup from "yup";
import { makeStyles, CardHeader } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';

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

const CheckUserForm = props => {
  const classes = useStyles();

  const handleSubmit = (values, { setSubmitting, setStatus }) => {
    axios.post(`${host}/uidcheck`, values)
      .then(response => {
        console.log(response.data);
        setStatus(response.status);
        if (response.data.success && response.data.success === true) {
          setStatus({
            sent: true,
            msg: "You are not Registered. Please Register"
          })
          setTimeout(() => props.history.push({
            pathname: '/register',
            aadhaarNumber: values.aadhaar
          }), 3000);
        }
        else {
          setStatus({
            sent: true,
            msg: "You are already a member. Please Login"
          })
          setTimeout(() => props.history.push({
            pathname: '/login'
          }), 3000);
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
          aadhaar: ""
        }
      }
      onSubmit={handleSubmit}
      validationSchema={Yup.object().shape({
        aadhaar: Yup.string()
          .required("Aadhaar Number is required")
          .matches(/^[0-9]{12}$/, 'Must be exactly 12 digits')
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
          status
        } = props;
        return (
          <div>
            {status && status.msg && (
              <Alert
                className='alerts' severity="info" variant="filled"> {status.msg} </Alert>
            )}
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
                    />
                  </CardContent>
                  <CardActions className={classes.actions}>
                    <Button type="submit" color="primary" disabled={isSubmitting}>
                      SUBMIT
            </Button>
                  </CardActions>
                </Card>
                <br></br>
                <Typography variant="subtitle1" color='secondary' align='center' component="p">
                  Already Registered  <Link variant="body2" color="inherit" to="/login"> Login </Link>
                </Typography>
              </form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default withRouter(CheckUserForm);