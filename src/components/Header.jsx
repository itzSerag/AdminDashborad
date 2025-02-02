import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

export const Header = ({ title, subtitle }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box mb="30px">
            <Typography
                variant="h2"
                color={colors.gray[100]}
                fontWeight="bold"
                sx={{ m: 2 }}
            >
                {title}
            </Typography>
            <Typography variant="h5" color={colors.greenAccent[400]} sx={{ m: 2 }}>
                {subtitle}
            </Typography>
        </Box>
    );
};