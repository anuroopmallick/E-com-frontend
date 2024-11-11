import React, { useEffect, useState } from "react";
import { Box, Tabs, Typography, Tab, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Item from "../../components/item";
import { setItems } from "../../state";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleChange = (events, newValue) => {
    setValue(newValue);
  };

  async function getItems() {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image",
      { method: "GET" }
    );
    const itemsJsom = await items.json();
    dispatch(setItems(itemsJsom.data));
  }

  useEffect(() => {
    getItems();
  });

  const topRatedItems = items.filter(
    (item) => item.attributes.category === "topRated"
  );
  const mostOrderedItems = items.filter(
    (item) => item.attributes.category === "mostOrdered"
  );
  const bestSellerItems = items.filter(
    (item) => item.attributes.category === "bestSellers"
  );

  return (
    <Box width={"80%"} margin={"80px auto"}>
      <Typography variant="h3" textAlign={"center"}>
        {" "}
        Our Featured <b>Products</b>
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{
          sx: { display: isNonMobile ? "block" : "none" },
        }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="All" value="all" />
        <Tab label="MOST ORDERED" value="mostOrdered" />
        <Tab label="BEST SELLERS" value="bestSellers" />
        <Tab label="TOP RATED" value="topRated" />
      </Tabs>
      <Box
        margin={"0 auto"}
        display={"grid"}
        gridTemplateColumns={"repeat(auto-fill, 300px)"}
        justifyContent={"space-around"}
        rowGap={"20px"}
        columnGap={"1.33%"}
      >
        {value === "all" &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`}>
              {" "}
            </Item>
          ))}
        {value === "newArrivals" &&
          mostOrderedItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`}>
              {" "}
            </Item>
          ))}
        {value === "bestSellers" &&
          bestSellerItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`}>
              {" "}
            </Item>
          ))}
        {value === "topRated" &&
          topRatedItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`}>
              {" "}
            </Item>
          ))}
      </Box>
    </Box>
  );
};

export default ShoppingList;
