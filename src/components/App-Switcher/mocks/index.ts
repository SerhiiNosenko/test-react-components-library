import { IAppSwitcher } from "../App-Switcher.types";

export const DEFAULT_PROPS: IAppSwitcher = {
  appOptions: [
    {
      title: "Ubersuggest",
      description: "Find profitable SEO keywords that are easy to win.",
      url: "/url1",
      icon: "UbersuggestThumbSvg",
      color: "orange",
    },
    {
      title: "AI Writer",
      description: "Write marketing content 10x faster using AI",
      url: "/url2",
      icon: "AIWriterThumbSvg",
      color: "blue",
      default: true,
    },
  ],
  hideSelected: true,
};
