export type TAppIcon = "UbersuggestThumbSvg" | "AIWriterThumbSvg";

export interface IOption {
  /**
   * App title
   */
  title: string;
  /**
   * App description
   */
  description: string;
  /**
   * App url
   */
  url: string;
  /**
   * App icon name
   */
  icon: TAppIcon;
  /**
   * App tick color for selected App
   */
  color: string;
  /**
   *  Is app current
   */
  default?: boolean;
}

export interface IAppSwitcher {
  /**
   * Apps configuration
   */
  appOptions: IOption[];
  /**
   * Hide default app from options
   */
  hideSelected?: boolean;
}

export type TKeyboardArrowRightIconCustomized = {
  open: boolean;
};
