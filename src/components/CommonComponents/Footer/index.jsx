"use client";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Link,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FooterLogo from "../../../assets/footerLogo.png";
const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="footer"
      sx={{ mt: "auto", /* position: "fixed", */ bottom: 0, width: "100%" }}
    >
      {/* App Download Section */}
      <Box
        sx={{
          bgcolor: "#333C4A",
          color: "white",
          py: 3,
          mx: 12,
          borderRadius: "6px",
        }}
      >
        <Container>
          <Grid container spacing={2} alignItems="center">
            <Grid
              item
              xs={12}
              md={3}
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              <img src={FooterLogo} width={152} height={104} />
            </Grid>

            <Grid item xs={12} md={5}>
              <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ color: "#fff", mb: 0.5 }}
                >
                  Get the HomeChef360 User App now!
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ opacity: 0.8, color: "#fff" }}
                >
                  For best offers and discounts curated specially for you
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                justifyContent={{ xs: "center", md: "flex-end" }}
              >
                <Box
                  component="a"
                  href="#"
                  sx={{
                    display: "block",
                    "& img": {
                      height: 40,
                      width: "auto",
                    },
                  }}
                >
                  <img
                    src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                    alt="Download on the App Store"
                  />
                </Box>
                <Box
                  component="a"
                  href="#"
                  sx={{
                    display: "block",
                    "& img": {
                      height: 40,
                      width: "auto",
                    },
                  }}
                >
                  <img
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt="Get it on Google Play"
                  />
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Navigation and Payment Methods */}
      <Box
        sx={{
          bgcolor: "#F3F3F3",
          py: 2,
          px: 12,
          borderBottom: "1px solid #eaeaea",
        }}
      >
        <Container>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs={12} md={4}>
              <Stack
                direction="row"
                spacing={3}
                sx={{
                  justifyContent: { xs: "center", md: "flex-start" },
                  mb: { xs: 2, md: 0 },
                }}
              >
                <Link href="#" underline="none" color="text.primary">
                  Home
                </Link>
                <Link href="#" underline="none" color="text.primary">
                  About
                </Link>
                <Link href="#" underline="none" color="text.primary">
                  Chefs
                </Link>
                <Link href="#" underline="none" color="text.primary">
                  Cuisines
                </Link>
              </Stack>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "center" },
                mb: { xs: 2, md: 0 },
              }}
            >
              <Stack direction="row" spacing={1}>
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-visa-3-226460.png"
                  alt="Visa"
                  width="40"
                  height="25"
                  style={{ objectFit: "contain" }}
                />
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-mastercard-3521564-2944982.png"
                  alt="Mastercard"
                  width="40"
                  height="25"
                  style={{ objectFit: "contain" }}
                />
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-american-express-3521562-2944980.png"
                  alt="American Express"
                  width="40"
                  height="25"
                  style={{ objectFit: "contain" }}
                />
              </Stack>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
              }}
            >
              <Button
                variant="contained"
                startIcon={<RestaurantIcon />}
                sx={{
                  bgcolor: "#4CAF50",
                  "&:hover": { bgcolor: "#388E3C" },
                  borderRadius: 28,
                  px: 2,
                }}
              >
                Want to become a Chef
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Copyright and Social Links */}
      <Box sx={{ bgcolor: "#F3F3F3", py: 2 }}>
        <Container maxWidth="lg">
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                textAlign: { xs: "center", md: "left" },
                mb: { xs: 2, md: 0 },
              }}
            >
              <Typography variant="body2" color="text.secondary">
                © 2025 HomeChef360. All rights reserved.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Stack
                direction="row"
                spacing={3}
                sx={{
                  justifyContent: { xs: "center", md: "flex-end" },
                }}
              >
                <Link href="#" underline="none" color="text.secondary">
                  Privacy Policy
                </Link>
                <Link href="#" underline="none" color="text.secondary">
                  Terms & Conditions
                </Link>
                <Link href="#" underline="none" color="text.secondary">
                  Refund Policy
                </Link>
              </Stack>
            </Grid>
          </Grid>

          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Stack direction="row" spacing={2}>
              <Link href="#" aria-label="Facebook">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-facebook-logo-2019-1597680-1350125.png"
                  alt="Facebook"
                  width="30"
                  height="30"
                />
              </Link>
              <Link href="#" aria-label="Instagram">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-instagram-1868978-1583142.png"
                  alt="Instagram"
                  width="30"
                  height="30"
                />
              </Link>
              <Link href="#" aria-label="YouTube">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-youtube-268-721990.png"
                  alt="YouTube"
                  width="30"
                  height="30"
                />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-linkedin-160-461814.png"
                  alt="LinkedIn"
                  width="30"
                  height="30"
                />
              </Link>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
