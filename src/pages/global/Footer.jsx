import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();

  return (
    <Box mt="70px" p={"40px 0"} backgroundColor={neutral.lights}>
      <Box
        width={"80%"}
        margin={"auto"}
        display={"flex"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        rowGap={"30px"}
        columnGap={"clamp(20px, 30px, 40px"}
      >
        <Box width={"clamp(20%, 30%, 40%)"}>
          <Typography
            variant="h4"
            fontWeight={"bold"}
            mb={"30px"}
            color={shades.secondary[500]}
          >
            ECOMMER
          </Typography>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight={"bold"} mb={"30px"}>
            About Us
          </Typography>
          <Typography mb={"30px"}>Careers</Typography>
          <Typography mb={"30px"}>Our Stores</Typography>
          <Typography mb={"30px"}>Terma and Conditions</Typography>
          <Typography mb={"30px"}>Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight={"bold"} mb={"30px"}>
            Customer Care
          </Typography>
          <Typography mb={"30px"}>Help Center</Typography>
          <Typography mb={"30px"}>Our Stores</Typography>
          <Typography mb={"30px"}>Track your order</Typography>
          <Typography mb={"30px"}>Returns & Refunds</Typography>
        </Box>

        <Box width={"clamp(20%, 25%, 30%)"}>
          <Typography variant="h4" fontWeight={"bold"} mb={"30px"}>
            Contact Us
          </Typography>
          <Typography mb={"30px"}>
            Shop no 27, Raghukul Nagari, Aundh-Kahdki station road - 411030
          </Typography>
          <Typography mb={"30px"}>Email: babumoshaimisti05gmail.com</Typography>
          <Typography mb={"30px"}>(222)333-4444</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
