import { Box, SxProps, Theme } from "@mui/material";

export const Company = () => {
  return (
    <Box className="Company" sx={sx}>
      ヘッダー
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Company" : {
    width: "100%",
  },
};
