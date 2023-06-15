import React, { useState, useMemo, useRef } from "react";
// MUI-Components
import {
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  Box,
  Stack,
  Typography,
  Link,
  useTheme,
} from "@mui/material";
// SVG-icons
import { UbersuggestThumbSvg, AIWriterThumbSvg } from "@/components/Svg-Icons";
import { AppSelectedSvg } from "@/components/Svg-Icons";
// Variables
import { FONT_FACES } from "@/theme/variables";
// Styled
import {
  AppSwitcherButtomCustomized,
  KeyboardArrowRightIconCustomized,
} from "./App-Switcher.styled";
// Types
import { IAppSwitcher, IOption, TAppIcon } from "./App-Switcher.types";

// Need to add a icon for each supported App
const getIconComponent = (iconName: TAppIcon) => {
  switch (iconName) {
    case "UbersuggestThumbSvg":
      return <UbersuggestThumbSvg />;
    case "AIWriterThumbSvg":
      return <AIWriterThumbSvg />;
    default:
      return null;
  }
};

const AppSwitcher: React.FC<IAppSwitcher> = ({ appOptions, hideSelected }) => {
  const {
    palette: {
      common: { darkGray, gray },
    },
  } = useTheme();

  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const activeApp = useMemo(
    () => appOptions.find((app: IOption) => app.default),
    []
  );

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  const handleSelectApp = () => {
    // TODO: Need to add kissmetrics
    setOpen(false);
  };

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <AppSwitcherButtomCustomized
        data-testid="app-switcher"
        ref={anchorRef}
        startIcon={activeApp?.icon ? getIconComponent(activeApp?.icon) : null}
        endIcon={<KeyboardArrowRightIconCustomized open={open} />}
        onClick={handleToggle}
      >
        <Typography
          variant="text16"
          component="span"
          sx={{
            ml: 0.5,
            textAlign: "left",
            fontFamily: FONT_FACES.geomanist.book,
          }}
          flexGrow={1}
        >
          {activeApp?.title || ""}
        </Typography>
      </AppSwitcherButtomCustomized>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  sx={{ mt: 1, maxWidth: "280px", px: 1 }}
                  data-testid="app-switcher-menu"
                >
                  {appOptions
                    .filter((app) => {
                      if (!hideSelected) return true;
                      else return app?.title !== activeApp?.title;
                    })
                    .map((app) => (
                      <Link
                        href={app.url}
                        key={app.title}
                        sx={{ textDecoration: "none" }}
                      >
                        <MenuItem onClick={handleSelectApp}>
                          <Stack direction="row" sx={{ py: 1 }}>
                            <Box>{getIconComponent(app.icon)}</Box>
                            <Stack sx={{ ml: 2 }} flexGrow={1}>
                              <Stack
                                direction="row"
                                justifyContent="space-between"
                                sx={{ mb: 1 }}
                              >
                                <Typography
                                  data-testid="app-title"
                                  variant="text16"
                                  sx={{
                                    fontFamily: FONT_FACES.geomanist.book,
                                    color: darkGray.main,
                                  }}
                                >
                                  {app.title}
                                </Typography>
                                {activeApp?.title === app.title && (
                                  <AppSelectedSvg fill={app.color} />
                                )}
                              </Stack>
                              <Typography
                                data-testid="app-description"
                                variant="text12"
                                sx={{
                                  color: darkGray["50"],
                                  whiteSpace: "normal",
                                  textAlign: "left",
                                }}
                              >
                                {app.description}
                              </Typography>
                            </Stack>
                          </Stack>
                        </MenuItem>
                      </Link>
                    ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Stack>
  );
};

AppSwitcher.defaultProps = {
  hideSelected: true,
};

export default AppSwitcher;
