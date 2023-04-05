import { IconType } from "react-icons";
export interface ITitle {
  title: string;
  subtitle: string;
}
export interface IAdventage {
  title: string;
  text: string;
  icon: IconType;
}
export interface IOffer {
  img: string;
  title: string;
  brend: string;
  model: string;
  price: number;
  id: string;
  count: number;
}
export interface IMainText {
  text: string;
  textH: number;
  title: {
    title: string;
    subtitle: string;
  };
  position: string;
}
export interface IAboutText {
  text: string;
  textH: number;
  subTitle: string;
  position: string;
}
export interface IAboutDesc {
  title: string;
  text: string;
  subtitle: string;
  img: string;
}
export interface INews {
  img: string;
  title: string;
  text: string;
}
