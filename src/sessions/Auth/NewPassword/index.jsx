// src/components/NewPassword.jsx
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

const passwordValidationSchema = Yup.object({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
const NewPassword = () => {
  const navigateTo = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form values:", values);
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
        <div style={navigator} onClick={() => navigateTo("/forgotpassword")}>
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
            Create New Password
          </Typography>
          <Typography variant="subtitle1" component="h2" mb={8}>
            Please Create your New Password to visit your Dashboard
          </Typography>
          <Formik
            initialValues={{ password: "", confirmPassword: "" }}
            validationSchema={passwordValidationSchema}
            onSubmit={handleSubmit}
            enableReinitialize={true}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <Typography variant="body2" align="left" sx={{ mb: 1 }}>
                  {"Create Password"}
                </Typography>
                <Field
                  as={TextField}
                  name="password"
                  fullWidth
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 24,
                      height: 48,
                    },
                    mb: 2,
                  }}
                />
                <Typography variant="body2" align="left" sx={{ mb: 1 }}>
                  {"Confirm Password"}
                </Typography>
                <Field
                  as={TextField}
                  name="confirmPassword"
                  fullWidth
                  error={
                    touched.confirmPassword && Boolean(errors.confirmPassword)
                  }
                  helperText={touched.confirmPassword && errors.confirmPassword}
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

export default NewPassword;
