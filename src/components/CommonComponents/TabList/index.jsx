import { Box } from "@mui/material";
import React from "react";

export default function TabList(props) {
  const { renderData, renderName, renderCount, onClick, selectedIdx } = props;
  return (
    <Box
      sx={{
        width: "100%",
        my: 4,
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 1,
      }}
    >
      {renderData.map((data, index) => (
        <Box
          key={index}
          onClick={() => onClick(index, data)}
          sx={{
            backgroundColor: selectedIdx === index ? "#4CAF50" : "#e9ecef",
            color: selectedIdx === index ? "white" : "#495057",
            borderRadius: "30px",
            padding: "10px 20px",
            cursor: "pointer",
            fontWeight: 500,
            transition: "all 0.2s ease",
            "&:hover": {
              backgroundColor: selectedIdx === index ? "#43a047" : "#dee2e6",
            },
            minWidth: "120px",
            textAlign: "center",
          }}
        >
          {data[renderName]} {data[renderCount] && `(${data[renderCount]})`}
        </Box>
      ))}
    </Box>
  );
}
