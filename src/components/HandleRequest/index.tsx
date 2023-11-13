import { FC, ReactNode } from "react";
import { CircularProgress, Stack, Typography } from "@mui/material";

interface IHandleRequestProps {
  children: ReactNode;
  error: Error | null;
  isLoading: boolean;
}

const HandleRequest: FC<IHandleRequestProps> = ({
  children,
  error,
  isLoading,
}) => {
  // Handle Error
  if (error) {
    return (
      <Typography color="error" fontWeight="900" textAlign="center">
        {error?.message}
      </Typography>
    );
  }
  // Handle Loading
  if (isLoading) {
    return (
      <Stack alignItems="center" justifyContent="center" minHeight="85vh">
        <CircularProgress />
      </Stack>
    );
  }

  return <>{children}</>;
};

export default HandleRequest;
