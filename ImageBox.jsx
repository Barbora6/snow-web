import { imageList } from "../../data/data-image-list";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export const ImageBox = () => {
  return (
    <ImageList
      sx={{ width: 1600, height: 650, pl: 24 }}
      variant="woven"
      cols={3}
      gap={8}
    >
      {imageList.map((item) => (
        <ImageListItem key={item.image}>
          <img
            srcSet={`${item.image}?w=161&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.image}?w=161&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar position="bottom" title={item.title} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
