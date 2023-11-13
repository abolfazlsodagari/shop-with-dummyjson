import { FC } from "react";
import { Stack, Typography } from "@mui/material";

interface IPriceWithDiscountProps {
  price: string | number;
  discount?: string | number;
}

const PriceWithDiscount: FC<IPriceWithDiscountProps> = ({
  price,
  discount,
}) => {
  return (
    <Stack>
      {/* price */}
      <Typography
        fontWeight={600}
        color="primary.dark"
        variant="body1"
        lineHeight={"20px"}
      >
        {price}$
      </Typography>
      {/* discount */}
      {discount && (
        <Typography
          fontWeight={600}
          lineHeight="10px"
          color="error"
          variant="caption"
          sx={{
            textDecoration: "line-through",
            opacity: 0.8,
          }}
        >
          {discount}$
        </Typography>
      )}
    </Stack>
  );
};

export default PriceWithDiscount;
