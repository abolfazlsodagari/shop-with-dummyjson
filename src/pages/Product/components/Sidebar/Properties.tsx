import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { IFetchProduct } from "@/components/ProductCard";

interface IProductPropertiesProps {
  data: IFetchProduct | null;
}

const ProductProperties: FC<IProductPropertiesProps> = ({ data }) => {
  return (
    <Stack spacing={1}>
      {/* rating */}
      <Stack direction="row" alignItems="center" spacing={0.3}>
        <StarIcon sx={{ width: "16px", height: "16px" }} color="warning" />
        <Typography
          fontWeight={"600"}
          variant="body1"
          sx={{
            color: (t) => t.palette.warning.main,
          }}
        >
          {`rate: ${data?.rating}`}
        </Typography>
      </Stack>
      {/* brand */}
      <Typography fontWeight={"600"} variant="body1">
        {`brand: ${data?.brand}`}
      </Typography>
      {/* brand */}
      <Typography fontWeight={"600"} variant="body1">
        {`stock: ${data?.stock}`}
      </Typography>
      {/* brand */}
      <Typography fontWeight={"600"} variant="body1">
        {`category: ${data?.category}`}
      </Typography>
    </Stack>
  );
};

export default ProductProperties;
