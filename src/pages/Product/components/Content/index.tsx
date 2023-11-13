import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { IFetchProduct } from "@/components/ProductCard";
import ProductThumbnail from "./Thumbnail";

interface IProductContentProps {
  data: IFetchProduct | null;
}

const ProductContent: FC<IProductContentProps> = ({ data }) => {
  return (
    <Stack width="100%" spacing={2}>
      {/* thumbnail */}
      <ProductThumbnail data={data} />
      {/* title with price */}
      <Typography fontWeight={800} variant="h5">
        {data?.title}
      </Typography>
      {/* description */}
      <Typography fontWeight="500" variant="body1">
        {data?.description}
      </Typography>
    </Stack>
  );
};

export default ProductContent;
