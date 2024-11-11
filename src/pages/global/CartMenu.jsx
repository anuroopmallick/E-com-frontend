import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled/macro";
import { shades } from "../../theme";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
} from "../../state";
import { useNavigate } from "react-router-dom";

const CartMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.attributes.price;
  }, 0);

  return (
    <Box
      display={isCartOpen ? "block" : "none"}
      backgroundColor="rgba(0,0,0,0.4)"
      width={"100%"}
      height={"100%"}
      zIndex={10}
      position={"fixed"}
      left={0}
      top={0}
      overflow={"auto"}
    >
      <Box
        position={"fixed"}
        right={0}
        top={0}
        width={"max(400px, 30%)"}
        height={"100%"}
        backgroundColor={"white"}
      >
        <Box padding={"30px"} overflow={"auto"} height={"100%"}>
          <Box
            mb={"15px"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h3">SHOPPING BAG ({cart.length})</Typography>
            <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* cart List  */}
          <Box>
            {cart?.map((item) => (
              <Box key={`${item?.attributes?.name}`}>
                <Box
                  padding={"15px 0"}
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Box flex={"1 1 40%"}>
                    <img
                      src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                      alt="item?"
                      width={"123px"}
                      height={"164px"}
                    ></img>
                  </Box>
                  <Box flex={"1 1 60%"}>
                    <Box
                      mb={"5px"}
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography fontWeight={"bold"}>
                        {item.attributes.name}
                      </Typography>
                      <IconButton
                        onClick={() =>
                          dispatch(removeFromCart({ id: item.id }))
                        }
                      >
                        <CloseIcon />
                      </IconButton>
                    </Box>
                    <Typography>
                      {" "}
                      {item?.attributes?.shortDescription[0].children[0].text}
                    </Typography>
                    <Box
                      m={"15px 0"}
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Box
                        display="flex"
                        alignItems={"center"}
                        border={`1.5px solid ${shades.neutral[500]}`}
                      >
                        <IconButton
                          onClick={() =>
                            dispatch(decreaseCount({ id: item.id }))
                          }
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography>{item.count}</Typography>
                        <IconButton
                          onClick={() =>
                            dispatch(increaseCount({ id: item.id }))
                          }
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>

                      {/* price  */}
                      <Typography fontWeight={"bold"}>
                        {item.attributes.count}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Divider />
              </Box>
            ))}
          </Box>

          {/* actions  */}
          <Box m="20px 0">
            <Box
              m={"20px 0"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography>SUBTOTAL</Typography>
              <Typography>{`${totalPrice}`}</Typography>
            </Box>
            <Button
              sx={{
                backgroundColor: shades.primary[400],
                color: "white",
                borderRadius: 0,
                // minWidth: "100px",
                width: "100%",
                padding: "20px 40px",
                m: "20px 0",
              }}
              onClick={() => {
                navigate("/checkout");
                dispatch(setIsCartOpen({}));
              }}
            >
              CHECKOUT
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartMenu;
