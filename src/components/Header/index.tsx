import { FC } from "react";
import {  Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface IHeaderProps {}

const Header: FC<IHeaderProps> = () => {
  // Getting translation object
  const { t } = useTranslation();

  return (
    <Stack
      sx={{
        background: (t) => t.palette.primary.dark,
        py: 2,
      }}
    >
      <Stack
        className="container"
        alignItems="center"
        justifyContent="space-between"
        direction="row"
        color="white"
        width="100%"
      >
        <Typography>{t("shop")}</Typography>

        {/* <Button variant="contained" color="secondary">
          {t("cart")}
        </Button> */}
      </Stack>
    </Stack>
  );
};

export default Header;
