import { useState } from "react";
import { Stack } from "@mui/material";
import FsLightbox from "fslightbox-react";
import { IFetchProduct } from "@/components/ProductCard";

interface IProductThumbnailProps {
  data: IFetchProduct | null;
}

const ProductThumbnail: React.FC<IProductThumbnailProps> = ({ data }) => {
  // toggle open light box
  const [toggleLightBox, SetToggleLightBox] = useState<boolean>(false);

  const handleToggle = () => {
    SetToggleLightBox(!toggleLightBox);
  };

  return (
    <>
      <Stack
        sx={{
          border: "1px solid #00000005",
          width: "100%",
          height: "100%",
          maxHeight: ["300px", "400px", "450px", "550px"],
          borderRadius: "8px",
          overflow: "hidden",
          "& img": {
            objectFit: "contain",
            width: "100%",
            height: "100%",
          },
          cursor: "pointer"
        }}
        onClick={handleToggle}
      >
        <img src={data?.thumbnail} alt={data?.title} />
      </Stack>

      <Stack width="100%" height="100%">
        <FsLightbox toggler={toggleLightBox} sources={data?.images} />
      </Stack>
    </>
  );
};

export default ProductThumbnail;
