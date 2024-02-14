import { ArrowBackIosNew } from "@mui/icons-material";
import { Box, ButtonProps, Grid, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
const styles = {
  root: {
    width: "100%",
    position: "relative",
  },

  sideStyle: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    padding: "5px 0px",
    cursor: "pointer",
    ">img": {
      borderRadius: "12px",
      border: "2px solid transparent",
      ":hover": {
        border: "2px solid #B88E2F",
      },
    },
  },
  selectedSlide: {
    width: "100%",
    height: "500px",
    position: "relative",
  },
};

const SlideActionButton = styled(IconButton)<ButtonProps>(() => ({
  color: "white",
  top: "50%",
  transform: "translateY(-50%)",
  width: "fit-content",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "rgba(0, 0, 0, 0.827)",
  },
  "&:disabled": {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
}));

interface Props {
  images: string[];
}

type AnchorType = "top" | "left" | "bottom" | "right";

export default function ImageCarousel({ images }: Props) {
  const [selectedSlide, setSelectedSlide] = React.useState(0);
  const [anchor, setAnchor] = React.useState<AnchorType>("left");

  const handleSelectSlide = (index: number) => {
    setSelectedSlide(index);
    const list = document.getElementById("product-image-list");
    const selectedSlide = document.getElementById(`product-image-${index}`);
    if (list && selectedSlide) {
      list.scrollTo({
        top: selectedSlide.offsetTop - list.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <Grid id="carousel" container height={500} width="auto">
      <Grid item xs={12} md={2}>
        <Box
          id="product-image-list"
          data-testid="product-image-list"
          sx={{
            overflowY: "auto",
            maxHeight: "500px",
            "&::-webkit-scrollbar": {
              width: "0px",
            },
          }}
        >
          {images.map((img, index) => {
            return (
              <Box
                key={index}
                id={`product-image-${index}`}
                sx={{
                  ...styles.sideStyle,
                }}
                onClick={() => handleSelectSlide(index)}
              >
                <img
                  src={img}
                  alt="Product detail"
                  width={76}
                  height={80}
                  loading="lazy"
                  onClick={() => handleSelectSlide(index)}
                  style={{
                    objectFit: "cover",
                    border:
                      index === selectedSlide
                        ? "2px solid #B88E2F"
                        : "2px solid transparent",
                  }}
                />
              </Box>
            );
          })}
        </Box>
      </Grid>

      <Grid item xs={12} md={10}>
        <Box sx={styles.selectedSlide} id="product-image">
          <img
            alt="Selected Image"
            src={images[selectedSlide]}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              borderRadius: "10px",
            }}
            loading="lazy"
          />

          <SlideActionButton
            id="btn-previous-pic"
            data-testid="btn-previous-pic"
            aria-label="Previous Picture"
            name="btn-previous-pic"
            sx={{
              position: "absolute",
              left: "10px",
            }}
            disabled={selectedSlide === 0}
            onClick={() => handleSelectSlide(selectedSlide - 1)}
          >
            <ArrowBackIosNew />
          </SlideActionButton>

          <SlideActionButton
            id="btn-next-pic"
            data-testid="btn-next-pic"
            name="btn-next-pic"
            aria-label="Next Picture"
            sx={{
              position: "absolute",
              right: "10px",
            }}
            disabled={selectedSlide === images.length - 1}
            onClick={() => handleSelectSlide(selectedSlide + 1)}
          >
            <ArrowBackIosNew
              sx={{
                transform: "rotate(180deg)",
              }}
            />
          </SlideActionButton>
        </Box>
      </Grid>
    </Grid>
  );
}
