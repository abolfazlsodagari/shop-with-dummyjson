import { ReactNode, FC } from "react";
import { Stack } from "@mui/material";

import { Header } from "@/components";

interface IMainWrapperProps {
  children: ReactNode;
}

const MainWrapper: FC<IMainWrapperProps> = ({ children }) => {
  return (
    <Stack spacing={2} mb={"50px"}>
      <Header />
      <div style={{ minHeight: "80vh" }}>{children}</div>
    </Stack>
  );
};

export default MainWrapper;
