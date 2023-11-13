import { FC } from "react";
import { Grid, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { useFetch } from "@/common/hooks";
import { HandleRequest } from "@/components";
import { IFetchProduct } from "@/components/ProductCard";
import ProductContent from "./components/Content";
import ProductSidebar from "./components/Sidebar";

interface IProductPageProps {}

const ProductPage: FC<IProductPageProps> = () => {
  // Getting slug
  const { id: slug } = useParams();
  // fetch data
  const { data, isLoading, error } = useFetch<IFetchProduct>(
    `/products/${slug}`
  );

  return (
    <HandleRequest error={error} isLoading={isLoading}>
      <Stack className="container">
        <Grid container spacing={{ xs: 10, md: 2 }}>
          {/* content */}
          <Grid item xs={12} md={8} lg={9}>
            <ProductContent data={data} />
          </Grid>
          {/* sidebar */}
          <Grid item xs={12} md={4} lg={3}>
            <ProductSidebar data={data} />
          </Grid>
        </Grid>
      </Stack>
    </HandleRequest>
  );
};

export default ProductPage;
