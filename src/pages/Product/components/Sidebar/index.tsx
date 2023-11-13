import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { PriceWithDiscount } from "@/components";
import { IFetchProduct } from "@/components/ProductCard";
import ProductProperties from "./Properties";

interface IProductSidebarProps {
  data: IFetchProduct | null;
}

const ProductSidebar: FC<IProductSidebarProps> = ({ data }) => {
  return (
    <Stack spacing={2.5}>
      {/* product properties */}
      <ProductProperties data={data} />
      {/* product price */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="body1" fontWeight="600">
          Price:
        </Typography>
        <PriceWithDiscount
          price={data?.price || ""}
          discount={data?.discountPercentage}
        />
      </Stack>
    </Stack>
  );
};

export default ProductSidebar;
