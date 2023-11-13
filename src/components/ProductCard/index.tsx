import * as React from "react";
import { Stack, Typography } from "@mui/material";
import { limitChar } from "@/common/utils";

export interface IFetchProduct {
  id: number;
  title: string;
  description: string;
  price: string | number;
  discountPercentage?: string | number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface IProductCardProps {
  product: IFetchProduct;
}

const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  return (
    <Stack
      sx={{
        border: "1px solid #00000015",
        borderRadius: "10px",
        overflow: "hidden",
        minHeight: "100%",
      }}
    >
      {/* thumbnail */}
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{
          height: "200px",
          width: "100%",
          objectFit: "cover",
        }}
      />
      {/* description with title and price */}
      <Stack p="10px" spacing={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body1" fontWeight={"900"}>
            {product.title}
          </Typography>
          <Typography variant="body2" color="primary.dark" fontWeight="900">
            {product.price}$
          </Typography>
        </Stack>

        <Typography variant="body2">
          {limitChar(product.description, 60)}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ProductCard;
