import { ArrowBackIosNew } from "@mui/icons-material";
import {
  Box,
  ButtonProps,
  Grid,
  IconButton,
  List,
  ListItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
const styles = {
  root: {
    width: "100%",

    backgrourdColor: "red",
    position: "relative",
  },

  sideStyle: {
    ">img": {
      borderRadius: "12px",
      cursor: "pointer",
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

const mockImages = [
  "https://picsum.photos/200/300?random=1",
  "https://picsum.photos/200/300?random=2",
  "https://picsum.photos/200/300?random=3",
  "https://picsum.photos/200/300?random=4",
  "https://picsum.photos/200/300?random=5",
  "https://picsum.photos/200/300?random=6",
  "https://picsum.photos/200/300?random=7",
  "https://picsum.photos/200/300?random=8",
  "https://picsum.photos/200/300?random=9",
  "https://picsum.photos/200/300?random=10",
  "https://picsum.photos/200/300?random=11",
  "https://picsum.photos/200/300?random=12",
  "https://picsum.photos/200/300?random=13",
  "https://picsum.photos/200/300?random=14",
  "https://picsum.photos/200/300?random=15",
];

const SlideActionButton = styled(IconButton)<ButtonProps>(() => ({
  color: "white",

  //   ":hover": {
  //     color: theme.palette.ttcues.main,
  //   },
}));
interface Props {
  images: string[];
}
export default function ImageCarousel({ images = mockImages }: Props) {
  const [selectedSlide, setSelectedSlide] = React.useState(0);

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
      <Grid item xs={2}>
        <List
          id="product-image-list"
          data-testid="product-image-list"
          disablePadding
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
              <ListItem
                key={index}
                disablePadding
                id={`product-image-${index}`}
              >
                <Box
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
              </ListItem>
            );
          })}
        </List>
      </Grid>

      <Grid item xs={10}>
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
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              width: "fit-content",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
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
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              width: "fit-content",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
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
