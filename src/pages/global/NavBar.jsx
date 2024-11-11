import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingCartOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Box
      display={"flex"}
      width={"100%"}
      height={"60px"}
      alignItems={"center"}
      margin={"auto"}
      backgroundColor={"rgba(255,255,255,0.95)"}
      position={"fixed"}
      top={"0"}
      left={"0"}
      zIndex={"1"}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        width={"80%"}
        margin={"auto"}
        zIndex={"2"}
        alignItems={"center"}
      >
        <Box
          onClick={() => {
            navigate("/");
          }}
          sx={{
            "&:hover": { cursor: "pointer" },
          }}
          color={shades.secondary[500]}
        >
          Ecommerce
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          columnGap={"20px"}
          zIndex={2}
        >
          <IconButton sx={{ color: "black" }}>
            <SearchOutlined></SearchOutlined>
          </IconButton>
          <IconButton sx={{ color: "black" }}>
            <PersonOutline></PersonOutline>
          </IconButton>
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              onClick={() => {
                dispatch(setIsCartOpen({}));
              }}
              sx={{ color: "black" }}
            >
              <ShoppingBagOutlined></ShoppingBagOutlined>
            </IconButton>
          </Badge>
          <IconButton sx={{ color: "black" }}>
            <MenuOutlined></MenuOutlined>
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
