// src/components/OtpVerification.jsx
import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import AuthLeftSection from "../../../components/AuthLeftSection";
import { useNavigate } from "react-router-dom";
import bannerImg from "../../../assets/bannerSlide.png";
import _ from "lodash";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import OtpInput from "react-otp-input";
import chefLogo from "../../../assets/logo2.png";
import theme from "../../../theme";

const OtpVerification = () => {
  const navigateTo = useNavigate();
  const [otp, setOtp] = useState("");
  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form values:", values);
    secureLocalStorage.setItem("appTkn", "abcdefgh");
  };
  const navigator = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    marginTop: 20,
    cursor: "pointer",
  };
  const otpContainer = {
    alignContent: "center",
    gap: 12,
    marginBottom: 8,
  };
  const otpInput = {
    width: 65,
    height: 65,
    backgroundColor: "#EBEAF5",
    borderRadius: 9,
    border: "none",
    fontSize: 18,
  };
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item xs={12} md={6}>
        <AuthLeftSection
          content1={"Let's help you"}
          content2={"find your favorite"}
          description={"Meal"}
          bannerImg={bannerImg}
          isCovered={true}
        />
      </Grid>
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
          <ArrowBackIcon
            // fontSize="20px"
            sx={{ alignSelf: "flex-start", mt: 0.2 }}
          />
        </div>
        <Box
          sx={{
            maxWidth: 450,
            width: "100%",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <img
            src={chefLogo}
            alt="HomeChef360 Logo"
            style={{
              width: 190,
              height: 130,
              marginBottom: 10,
            }}
          />
          <Typography
            variant="h5"
            component="h2"
            fontSize={22}
            fontWeight={600}
          >
            Verification!
          </Typography>
          <Typography
            variant="subtitle1"
            color={"#434343"}
            fontSize={14}
            component="h2"
          >
            We have sent the verification code
          </Typography>
          <Typography
            variant="subtitle1"
            color={"#434343"}
            fontSize={14}
            component="h2"
            mb={2}
          >
            to your (555) *** **58
          </Typography>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={"  "}
            renderInput={(props) => <input {...props} />}
            containerStyle={otpContainer}
            inputStyle={otpInput}
          />
          <Typography
            variant="subtitle1"
            color={"#434343"}
            fontSize={14}
            component="h2"
            mb={4}
          >
            Didn’t receive code?{" "}
            <span
              style={{
                color: theme.palette.primary.main,
                textDecoration: "underline",
              }}
            >
              Resend
            </span>
          </Typography>
          <Typography
            variant="subtitle1"
            color={"#434343"}
            fontSize={14}
            component="h2"
            mb={1}
          >
            By clicking “Verify” you are accepting our{" "}
            <span style={{ textDecoration: "underline" }}>
              Terms & Conditions
            </span>
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={otp?.length < 6}
            sx={{
              py: 1.5,
              textTransform: "uppercase",
              fontWeight: "bold",
              mb: 2,
              borderRadius: 24,
            }}
            onClick={() => handleSubmit()}
          >
            Verify
          </Button>
        </Box>
        <Typography sx={{ visibility: "hidden" }}>
          {"Email ID / Mobile No"}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default OtpVerification;
