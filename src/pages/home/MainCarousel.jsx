import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBefore from "@mui/icons-material/NavigateBefore";
import NavigateNext from "@mui/icons-material/NavigateNext";
import { shades } from "../../theme";

const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

const heroTexturedImports = importAll(
  require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);

const MainCarousel = () => {
  const isNonMobile = useMediaQuery("(min-width:600px");

  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(onClickhandler, hasPrev, label) => (
        <IconButton
          onClick={onClickhandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateBefore sx={{ fontSize: 40 }}></NavigateBefore>
        </IconButton>
      )}
      renderArrowNext={(onClickhandler, hasNext, label) => (
        <IconButton
          onClick={onClickhandler}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateNext sx={{ fontSize: 40 }}></NavigateNext>
        </IconButton>
      )}
    >
      {Object.values(heroTexturedImports).map((texture, index) => (
        <Box key={`carousel-image-${index}`}>
          <img
            src={texture}
            alt={`carousel-${index}`}
            style={{
              width: "100%",
              height: "700px",
              objectFit: "cover",
              backgroundAttachment: "fixed",
            }}
          />
          <Box
            color={"white"}
            padding={"20px"}
            borderRadius={"1px"}
            textAlign={"left"}
            backgroundColor="rgb(0, 0, 0, 0.4)"
            position={"absolute"}
            top={"46%"}
            left={isNonMobile ? "10%" : "0"}
            right={isNonMobile ? undefined : "0 auto"}
            margin={isNonMobile ? undefined : "0 auto"}
            maxWidth={isNonMobile ? undefined : "240px"}
          >
            <Typography color={shades.secondary[200]}>
              {" "}
              --NEW ITEMS--{" "}
            </Typography>
            <Typography variant={"h1"}>Summer Sale </Typography>
            <Typography
              color={shades.secondary[300]}
              fontWeight={"bold"}
              sx={{ textDecoration: "underline" }}
            >
              Discover More{" "}
            </Typography>
          </Box>
        </Box>
      ))}
    </Carousel>
  );
};

export default MainCarousel;
