import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  TextField,
  IconButton,
  Avatar,
  Chip,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Divider,
  Paper,
  InputAdornment,
  Select,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import {
  LocationOn,
  Add,
  Remove,
  CheckCircle,
  CreditCard,
  KeyboardArrowDown,
  ShoppingCart,
  Check,
  NotificationsOff,
  PhoneDisabled,
  DoorFront,
} from "@mui/icons-material";
import cartData from "./data";
import theme from "../../theme";

const CartPage = () => {
  const [cartItems, setCartItems] = useState(cartData.cartItems);
  const [selectedAddress, setSelectedAddress] = useState("new");
  const [selectedSavedAddress, setSelectedSavedAddress] = useState("home");
  const [newAddress, setNewAddress] = useState("");
  const [cookingInstructions, setCookingInstructions] = useState("");
  const [selectedDeliveryInstruction, setSelectedDeliveryInstruction] =
    useState("avoid-ringing-bell");
  const [chefTipPercentage, setChefTipPercentage] = useState(3);
  const [driverTipPercentage, setDriverTipPercentage] = useState(0);
  const [customDriverTip, setCustomDriverTip] = useState("0.7");
  const [couponCode, setCouponCode] = useState("");

  const updateQuantity = (itemId, change) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      )
    );
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateChefTip = () => {
    return (calculateSubtotal() * chefTipPercentage) / 100;
  };

  const calculateDriverTip = () => {
    return driverTipPercentage > 0
      ? (calculateSubtotal() * driverTipPercentage) / 100
      : Number.parseFloat(customDriverTip) || 0;
  };

  const calculateTax = () => {
    return calculateSubtotal() * cartData.fees.taxRate;
  };

  const calculateTotal = () => {
    return (
      calculateSubtotal() +
      cartData.fees.deliveryFee +
      calculateChefTip() +
      calculateDriverTip() +
      calculateTax()
    );
  };

  const deliveryIcons = {
    "avoid-ringing-bell": <NotificationsOff />,
    "avoid-calling": <PhoneDisabled />,
    "leave-door": <DoorFront />,
    "leave-door-2": <DoorFront />,
  };

  return (
    <Grid container lg={12} py={4} bgcolor={"#E9ECEE"}>
      <Grid item xs={12} md={2} lg={1}></Grid>
      <Grid item xs={12} md={6} lg={6} spacing={1}>
        <Box sx={{ position: "relative" }}>
          {/* Delivery Address */}
          <Card
            sx={{
              mb: 3,
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    backgroundColor: "#2c3e50",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 2,
                  }}
                >
                  <LocationOn sx={{ color: "white", fontSize: 24 }} />
                </Box>
                <Typography variant="h6" fontWeight="bold" color="#2c3e50">
                  Choose a delivery address
                </Typography>
              </Box>

              <FormControl component="fieldset" fullWidth>
                <RadioGroup
                  value={selectedAddress}
                  onChange={(e) => setSelectedAddress(e.target.value)}
                >
                  {/* Saved Address Option */}
                  <FormControlLabel
                    value="saved"
                    control={
                      <Radio
                        sx={{
                          color: "#e0e0e0",
                          "&.Mui-checked": { color: "#4CAF50" },
                          "& .MuiSvgIcon-root": { fontSize: 20 },
                        }}
                      />
                    }
                    label={
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        fontWeight={500}
                      >
                        Saved Address
                      </Typography>
                    }
                    sx={{ mb: 2 }}
                  />

                  {selectedAddress === "saved" && (
                    <Box sx={{ ml: 4, mb: 3 }}>
                      <Select
                        value={selectedSavedAddress}
                        onChange={(e) =>
                          setSelectedSavedAddress(e.target.value)
                        }
                        displayEmpty
                        fullWidth
                        size="small"
                        IconComponent={KeyboardArrowDown}
                        sx={{
                          mb: 1,
                          "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                          },
                          "& .MuiSelect-select": { py: 1, fontWeight: 500 },
                        }}
                      >
                        {cartData.savedAddresses.map((address) => (
                          <MenuItem key={address.id} value={address.id}>
                            {address.label}
                          </MenuItem>
                        ))}
                      </Select>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ pl: 1 }}
                      >
                        {
                          cartData.savedAddresses.find(
                            (addr) => addr.id === selectedSavedAddress
                          )?.address
                        }
                      </Typography>
                    </Box>
                  )}

                  {/* New Address Option */}
                  <FormControlLabel
                    value="new"
                    control={
                      <Radio
                        sx={{
                          color: "#e0e0e0",
                          "&.Mui-checked": { color: "#4CAF50" },
                          "& .MuiSvgIcon-root": { fontSize: 20 },
                        }}
                      />
                    }
                    label={
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <CheckCircle
                          sx={{ color: "#4CAF50", mr: 1, fontSize: 20 }}
                        />
                        <Typography
                          variant="body1"
                          fontWeight={500}
                          color="#2c3e50"
                        >
                          New Address
                        </Typography>
                      </Box>
                    }
                    sx={{ mb: 2 }}
                  />
                </RadioGroup>
              </FormControl>

              {selectedAddress === "new" && (
                <Box sx={{ ml: 4 }}>
                  <TextField
                    fullWidth
                    placeholder="Enter address"
                    value={newAddress}
                    onChange={(e) => setNewAddress(e.target.value)}
                    size="medium"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        backgroundColor: "#f8f9fa",
                        "& fieldset": { borderColor: "#e9ecef" },
                        "&:hover fieldset": { borderColor: "#4CAF50" },
                        "&.Mui-focused fieldset": { borderColor: "#4CAF50" },
                      },
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <LocationOn sx={{ color: "#6c757d" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              )}
            </CardContent>
          </Card>

          {/* Connecting Line */}
          <Box
            sx={{
              position: "absolute",
              left: 47,
              top: 120,
              width: 2,
              height: 60,
              background:
                "repeating-linear-gradient(to bottom, #e0e0e0 0, #e0e0e0 5px, transparent 5px, transparent 10px)",
              zIndex: 0,
            }}
          />

          {/* Payment */}
          <Card sx={{ boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    backgroundColor: "#f8f9fa",
                    border: "2px solid #e9ecef",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 2,
                  }}
                >
                  <CreditCard sx={{ color: "#6c757d", fontSize: 24 }} />
                </Box>
                <Typography variant="h6" fontWeight="bold" color="#2c3e50">
                  Payment
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} ml={2} lg={4}>
        {/* Restaurant Info */}
        <Box bgcolor={"#fff"} mb={2} p={3} borderRadius={"6px"}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 3,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                src={cartData.restaurant.image}
                sx={{ width: 60, height: 60, mr: 2 }}
              />
              <Box>
                <Typography variant="body1" fontWeight={500}>
                  {cartData.restaurant.name}
                </Typography>
                <Typography variant="body2" color={"#434343"} fontWeight={400}>
                  {cartData.restaurant.owner}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: "#4CAF50",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ShoppingCart sx={{ color: "white", fontSize: 20 }} />
            </Box>
          </Box>

          {/* Cart Items */}
          <Box sx={{ mb: 4 }}>
            {cartItems.map((item) => (
              <Box key={item.id} sx={{ mb: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
                    <CheckCircle
                      sx={{ color: "#4CAF50", mr: 2, fontSize: 20 }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body1" fontWeight={500} gutterBottom>
                        {item.name}
                      </Typography>
                      {item.customizable && (
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography variant="body2" color="#434343">
                            Customizable
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ ml: 0.5 }}
                          >
                            ↗
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "#f5f5f5",
                        borderRadius: 3,
                        px: 1,
                        py: 0.5,
                      }}
                    >
                      <IconButton
                        size="small"
                        onClick={() => updateQuantity(item.id, -1)}
                        sx={{ p: 0.5 }}
                      >
                        <Remove fontSize="small" />
                      </IconButton>
                      <Typography
                        variant="body1"
                        sx={{
                          mx: 2,
                          minWidth: 20,
                          textAlign: "center",
                          fontWeight: 500,
                        }}
                      >
                        {String(item.quantity).padStart(2, "0")}
                      </Typography>
                      <IconButton
                        size="small"
                        onClick={() => updateQuantity(item.id, 1)}
                        sx={{ p: 0.5 }}
                      >
                        <Add fontSize="small" />
                      </IconButton>
                    </Box>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ minWidth: 60 }}
                    >
                      ${(item.price * item.quantity).toFixed(2)}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}

            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: theme.palette.primary.main,
                "&:hover": { backgroundColor: "#43a047" },
                fontFamily: theme.typography.fontFamily,
                borderRadius: 8,
                py: 1.5,
                fontWeight: 500,
                letterSpacing: 0.1,
                fontSize: "13px",
                textTransform: "none",
              }}
            >
              Add more items
            </Button>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Cooking Instructions */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="body1" fontWeight={500} gutterBottom>
              Cooking Instruction
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={3}
              placeholder="Tell your instruction to your chef..."
              value={cookingInstructions}
              onChange={(e) => setCookingInstructions(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  backgroundColor: "#fff",
                  "& fieldset": { borderColor: "#e9ecef" },
                },
              }}
            />
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Delivery Instructions */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="body1" fontWeight={500} gutterBottom>
              Delivery Instruction
            </Typography>
            <Grid container spacing={2}>
              {cartData.deliveryInstructions.map((instruction) => (
                <Grid item xs={6} sm={3} key={instruction.id}>
                  <Paper
                    sx={{
                      p: 2,
                      textAlign: "center",
                      cursor: "pointer",
                      backgroundColor:
                        selectedDeliveryInstruction === instruction.id
                          ? "#e8f5e8"
                          : "#f8f9fa",
                      border:
                        selectedDeliveryInstruction === instruction.id
                          ? "1px solid #4CAF50"
                          : "1px solid #e0e0e0",
                      borderRadius: 2,
                      "&:hover": { backgroundColor: "#f0f0f0" },
                      minHeight: 80,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                    onClick={() =>
                      setSelectedDeliveryInstruction(instruction.id)
                    }
                  >
                    {deliveryIcons[instruction.id]}
                    <Typography
                      variant="caption"
                      display="block"
                      sx={{ mt: 1, fontWeight: 500 }}
                    >
                      {instruction.label}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Chef Tip */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="body1" fontWeight={500} gutterBottom>
              Add tip your chef{" "}
              <Typography component="span" color="#4CAF50" fontWeight="normal">
                $0.3
              </Typography>
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {cartData.tipOptions.map((tip) => (
                <Chip
                  key={tip}
                  label={`${tip}%`}
                  onClick={() => setChefTipPercentage(tip)}
                  sx={{
                    backgroundColor:
                      chefTipPercentage === tip ? "#4CAF50" : "#f5f5f5",
                    color: chefTipPercentage === tip ? "white" : "black",
                    borderRadius: 2,
                    px: 2,
                    "&:hover": {
                      backgroundColor:
                        chefTipPercentage === tip ? "#43a047" : "#e0e0e0",
                    },
                  }}
                />
              ))}
              <Chip
                label="Other"
                sx={{
                  backgroundColor: "#f5f5f5",
                  borderRadius: 2,
                  px: 2,
                  "&:hover": { backgroundColor: "#e0e0e0" },
                }}
              />
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Driver Tip */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="body1" fontWeight={500} gutterBottom>
              Add Driver tip{" "}
              <Typography component="span" color="#4CAF50" fontWeight="normal">
                $0.3
              </Typography>
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
              {cartData.tipOptions.map((tip) => (
                <Chip
                  key={tip}
                  label={`${tip}%`}
                  onClick={() => {
                    setDriverTipPercentage(tip);
                    setCustomDriverTip("");
                  }}
                  sx={{
                    backgroundColor:
                      driverTipPercentage === tip ? "#4CAF50" : "#f5f5f5",
                    color: driverTipPercentage === tip ? "white" : "black",
                    borderRadius: 2,
                    px: 2,
                    "&:hover": {
                      backgroundColor:
                        driverTipPercentage === tip ? "#43a047" : "#e0e0e0",
                    },
                  }}
                />
              ))}
              <Chip
                label="Other"
                onClick={() => setDriverTipPercentage(0)}
                sx={{
                  backgroundColor:
                    driverTipPercentage === 0 ? "#4CAF50" : "#f5f5f5",
                  color: driverTipPercentage === 0 ? "white" : "black",
                  borderRadius: 2,
                  px: 2,
                  "&:hover": {
                    backgroundColor:
                      driverTipPercentage === 0 ? "#43a047" : "#e0e0e0",
                  },
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#f8f9fa",
                borderRadius: 4,
                p: 1,
                gap: 1,
              }}
            >
              <ToggleButtonGroup
                value={driverTipPercentage === 0 ? "custom" : "percentage"}
                exclusive
                size="small"
                sx={{ backgroundColor: "white", borderRadius: 3 }}
              >
                <ToggleButton
                  value="percentage"
                  sx={{
                    border: "none",
                    borderRadius: "20px !important",
                    backgroundColor:
                      driverTipPercentage > 0 ? "#4CAF50" : "transparent",
                    color: driverTipPercentage > 0 ? "white" : "black",
                    "&:hover": {
                      backgroundColor:
                        driverTipPercentage > 0 ? "#43a047" : "#f0f0f0",
                    },
                  }}
                >
                  %
                </ToggleButton>
                <ToggleButton
                  value="custom"
                  sx={{
                    border: "none",
                    borderRadius: "20px !important",
                    backgroundColor:
                      driverTipPercentage === 0 ? "#4CAF50" : "transparent",
                    color: driverTipPercentage === 0 ? "white" : "black",
                    "&:hover": {
                      backgroundColor:
                        driverTipPercentage === 0 ? "#43a047" : "#f0f0f0",
                    },
                  }}
                >
                  $
                </ToggleButton>
              </ToggleButtonGroup>
              <Typography variant="h6" fontWeight="bold" sx={{ ml: "auto" }}>
                ${calculateDriverTip().toFixed(1)}
              </Typography>
            </Box>

            {driverTipPercentage === 0 && (
              <TextField
                fullWidth
                placeholder="Enter custom amount"
                value={customDriverTip}
                onChange={(e) => setCustomDriverTip(e.target.value)}
                sx={{
                  mt: 2,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    backgroundColor: "#f8f9fa",
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
            )}
          </Box>
        </Box>

        {/* Apply Coupon */}
        <Box sx={{ mb: 2 }} bgcolor={"#fff"} p={3} borderRadius={"6px"}>
          <Typography variant="body1" fontWeight={500} gutterBottom>
            Apply Coupon
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <TextField
              fullWidth
              placeholder="Enter coupon code here"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 3,
                  backgroundColor: "#f8f9fa",
                  "& fieldset": { borderColor: "#e9ecef" },
                },
              }}
            />
            <IconButton
              sx={{
                backgroundColor: "#4CAF50",
                color: "white",
                borderRadius: 2,
                width: 48,
                height: 48,
                "&:hover": { backgroundColor: "#43a047" },
              }}
            >
              <Check />
            </IconButton>
          </Box>
        </Box>

        {/* Bill Details */}
        <Box sx={{ mb: 2 }} bgcolor={"#fff"} p={3} borderRadius={"6px"}>
          <Typography variant="body1" fontWeight={500} gutterBottom>
            Bill Details
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography variant="body1" color="text.secondary">
              Item Total
            </Typography>
            <Typography variant="body1" fontWeight={500}>
              ${calculateSubtotal().toFixed(2)}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography variant="body1" color="text.secondary">
              Delivery Fee
            </Typography>
            <Typography variant="body1" fontWeight={500}>
              ${cartData.fees.deliveryFee.toFixed(2)}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography variant="body1" color="text.secondary">
              Tip Charge (${calculateChefTip().toFixed(1)} + $
              {calculateDriverTip().toFixed(1)})
            </Typography>
            <Typography variant="body1" fontWeight={500}>
              ${(calculateChefTip() + calculateDriverTip()).toFixed(2)}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography variant="body1" color="text.secondary">
              Taxes
            </Typography>
            <Typography variant="body1" fontWeight={500}>
              ${calculateTax().toFixed(2)}
            </Typography>
          </Box>
          <Divider sx={{ mb: 2 }} />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" fontWeight="bold">
              Payable Amount
            </Typography>
            <Typography variant="h6" fontWeight="bold">
              ${calculateTotal().toFixed(2)}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={1} lg={1}></Grid>
    </Grid>
  );
};

export default CartPage;
