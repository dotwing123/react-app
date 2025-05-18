// src/components/HomeChefLogin.jsx
import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  InputAdornment,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import GoogleIcon from "../../../assets/google.png";
import FacebookIcon from "../../../assets/fb.png";
import AppleIcon from "../../../assets/apple.png";
import chefLogo from "../../../assets/logo2.png";
import AuthLeftSection from "../../../components/AuthLeftSection";
import theme from "../../../theme";
import { useNavigate } from "react-router-dom";
import bannerImg from "../../../assets/banner2.png";
import _ from "lodash";
// Validation schema using Yup
const otpValidationSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  mobileNo: Yup.string()
    .matches(/^\d+$/, "Phone number must contain only digits")
    .min(10, "Phone number must be at least 10 digits")
    .required("Mobile number is required"),
});
const emailValidationSchema = Yup.object({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
});

const loginType = [
  {
    icon: GoogleIcon,
    label: "Continue with Google",
  },
  {
    icon: FacebookIcon,
    label: "Continue with Facebook",
  },
  {
    icon: AppleIcon,
    label: "Continue with Apple",
  },
];
const HomeChefLogin = () => {
  const navigateTo = useNavigate();
  const [isOtpLogin, setIsOtpLogin] = useState(false);
  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form values:", values);
    if (isOtpLogin && values?.fullName && values?.mobileNo) {
      navigateTo("/verifyotp");
    }
  };
  const loginTypeContainer = {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
  };
  const loginTypeItem = {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    border: "1px solid #EBEAF5",
    paddingInline: 5,
    paddingBlock: 10,
    alignItems: "center",
    borderRadius: 4,
  };
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item xs={12} md={6}>
        <AuthLeftSection
          content1={"Let’s help you"}
          content2={"find your favorite"}
          description={"Meal"}
          bannerImg={bannerImg}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 4,
        }}
      >
        <Box sx={{ maxWidth: 450, width: "100%", textAlign: "center" }}>
          <Typography variant="h6" component="h2" mb={1}>
            Welcome to
          </Typography>
          <img
            src={chefLogo}
            alt="HomeChef360 Logo"
            style={{
              width: 190,
              height: 130,
            }}
          />
          <Formik
            initialValues={
              isOtpLogin
                ? { fullName: "", mobileNo: "" }
                : { email: "", password: "" }
            }
            validationSchema={
              isOtpLogin ? otpValidationSchema : emailValidationSchema
            }
            onSubmit={handleSubmit}
            enableReinitialize={true}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <Typography variant="body2" align="left" sx={{ mb: 1 }}>
                  {isOtpLogin ? "Full Name" : "Email ID"}
                </Typography>
                {isOtpLogin ? (
                  <Field
                    as={TextField}
                    name="fullName"
                    fullWidth
                    error={touched.fullName && Boolean(errors.fullName)}
                    helperText={touched.fullName && errors.fullName}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 24,
                        height: 48,
                      },
                      mb: 2,
                    }}
                  />
                ) : (
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
                      mb: 2,
                    }}
                  />
                )}
                <Typography variant="body2" align="left" sx={{ mb: 1 }}>
                  {isOtpLogin ? "Mobile No" : "Password"}
                </Typography>
                {isOtpLogin ? (
                  <Field
                    as={TextField}
                    name="mobileNo"
                    fullWidth
                    placeholder="(XXX) XXX-XXXX"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Box
                            component="img"
                            src="https://flagcdn.com/w20/us.png"
                            alt="US flag"
                            sx={{ mr: 1, height: 15 }}
                          />
                          +1
                        </InputAdornment>
                      ),
                    }}
                    error={touched.mobileNo && Boolean(errors.mobileNo)}
                    helperText={touched.mobileNo && errors.mobileNo}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 24,
                        height: 48,
                      },
                      mb: 2,
                    }}
                  />
                ) : (
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
                )}
                <Typography
                  variant="body2"
                  style={{ cursor: "pointer" }}
                  color={theme.palette.primary.main}
                  align="right"
                  sx={{ mb: 2 }}
                  onClick={() => navigateTo("/forgotpassword")}
                >
                  Forgot Password?
                </Typography>
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
                  Login
                </Button>
              </Form>
            )}
          </Formik>
          <Typography
            variant="body2"
            style={{ cursor: "pointer" }}
            color={theme.palette.primary.main}
            align="right"
            sx={{ mb: 2 }}
            onClick={() => setIsOtpLogin(!isOtpLogin)}
          >
            {isOtpLogin ? "Login Using Email" : "Login using OTP"}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
            <Divider sx={{ flexGrow: 1 }} />
            <Typography variant="body2" color="text.secondary" sx={{ px: 2 }}>
              OR
            </Typography>
            <Divider sx={{ flexGrow: 1 }} />
          </Box>
          <div style={loginTypeContainer}>
            {_.map(loginType, (item, idx) => {
              return (
                <div style={loginTypeItem}>
                  <img src={item?.icon} height={20} alt="login_icon" />
                  <Typography variant="subtitle2">{item?.label}</Typography>
                </div>
              );
            })}
          </div>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomeChefLogin;
