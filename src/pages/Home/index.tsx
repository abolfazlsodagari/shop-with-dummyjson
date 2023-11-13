import * as React from "react";
import { Stack } from "@mui/material";
import HomeProducts from "./components/Products";

interface IHomePageProps {}

const HomePage: React.FC<IHomePageProps> = () => {
  return (
    <Stack alignItems="center" justifyContent="center" className="container">
      <HomeProducts />
    </Stack>
  );
};

export default HomePage;
