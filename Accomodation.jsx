import { accomodation } from "../data/data";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";

export const Accomodation = () => {
  return (
    <ImageList sx={{ width: 1800, height: 720, pl: 7 }}>
      <ImageListItem key="Subheader" cols={4}>
        <ListSubheader component="div" sx={{ fontSize: "48px" }}>
          Ubytování
        </ListSubheader>
        <ListSubheader sx={{ fontSize: "16px" }}>
          Stylové, rodinné, luxusní, v hotelu, chatě či apartmánu. Vyberte si
          ubytování pro svou dovolenou na Benecku.
        </ListSubheader>
      </ImageListItem>
      {accomodation.map((item) => (
        <ImageListItem key={item.image}>
          <img
            srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.image}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar title={item.title} subtitle={item.adress} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
