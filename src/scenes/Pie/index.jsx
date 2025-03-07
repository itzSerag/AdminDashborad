import { Box } from "@mui/material";
import { Header } from "../../components/Header";
import { PieChart } from "../../components/PieChart";


export const Pie = () => {
    return <Box m="20px">
        <Header title="Bar Chart " subtitle="The Bar Chart" />
        <Box height="75vh">
            <PieChart />
        </Box>
    </Box>
};
