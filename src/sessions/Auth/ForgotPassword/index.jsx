// src/components/ForgotPassword.jsx
import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  useMediaQuery,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import AuthLeftSection from "../../../components/AuthLeftSection";
import { useNavigate } from "react-router-dom";
import bannerImg from "../../../assets/banner2.png";
import _ from "lodash";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import theme from "../../../theme";

const emailValidationSchema = Yup.object({
  email: Yup.string().required("Please enter Email/Mobile No"),
});
const ForgotPassword = () => {
  const navigateTo = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form values:", values);
    if (values?.email) {
      navigateTo("/createpassword");
    }
  };
  const navigator = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    marginTop: 20,
    cursor: "pointer",
  };
  return (
    <Grid container sx={{ height: "100vh" }}>
      {!isMobile && !isTablet && (
        <Grid item xs={12} md={6}>
          <AuthLeftSection
            content1={"Get your favorite"}
            content2={"food at your"}
            description={"Door Step"}
            bannerImg={bannerImg}
          />
        </Grid>
      )}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          p: 4,
        }}
      >
        <div style={navigator} onClick={() => navigateTo("/")}>
          <ArrowBackIosIcon
            fontSize="12px"
            sx={{ alignSelf: "flex-start", mt: 0.2 }}
          />
          <Typography align="center" variant="subtitle1">
            Back
          </Typography>
        </div>
        <Box sx={{ maxWidth: 450, width: "100%", textAlign: "center" }}>
          <Typography variant="h5" component="h2" fontWeight={600}>
            Forgot Password
          </Typography>
          <Typography variant="subtitle1" component="h2" mb={8}>
            Enter your Email or Phone Number to reset your Password
          </Typography>
          <Formik
            initialValues={{ email: "" }}
            validationSchema={emailValidationSchema}
            onSubmit={handleSubmit}
            enableReinitialize={true}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <Typography variant="body2" align="left" sx={{ mb: 1 }}>
                  {"Email ID / Mobile No"}
                </Typography>
                <Field
                  as={TextField}
                  name="email"
                  fullWidth
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 24,
                      height: 48,
                    },
                    mb: 5,
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  sx={{
                    py: 1.5,
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    mb: 2,
                    borderRadius: 24,
                  }}
                >
                  Get Otp
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
        <Typography sx={{ visibility: "hidden" }}>
          {"Email ID / Mobile No"}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ForgotPassword;
