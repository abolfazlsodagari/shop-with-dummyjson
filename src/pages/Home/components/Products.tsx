import * as React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

import { useFetch } from "@/common/hooks";
import { HandleRequest, ProductCard } from "@/components";
import { IFetchProduct } from "@/components/ProductCard";

interface IHomeProductsProps {}

export interface IFetchProducts {
  products: IFetchProduct[];
  total: number;
  skip: number;
  limit: number;
}

export interface IFetchProducts {
  products: IFetchProduct[];
  total: number;
  skip: number;
  limit: number;
}

const HomeProducts: React.FC<IHomeProductsProps> = () => {
  // Fetch Products
  const { data, error, isLoading } = useFetch<IFetchProducts>("/products");

  return (
    <HandleRequest error={error} isLoading={isLoading}>
      <Grid container spacing={4}>
        {data?.products?.map((product: IFetchProduct) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Link to={`/products/${product.id}`} className="link">
                <ProductCard product={product} />
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </HandleRequest>
  );
};

export default HomeProducts;
