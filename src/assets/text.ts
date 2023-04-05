import { BsPeople } from "react-icons/bs";
import { FaDisease } from "react-icons/fa";
import { BiRuble } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { ImMakeGroup } from "react-icons/im";
import { TbWorld } from "react-icons/tb";
import { images } from "./img";
import {
  IAboutDesc,
  IAboutText,
  IAdventage,
  IMainText,
  INews,
  IOffer,
} from "../common/types";
export const advenage: Array<IAdventage> = [
  {
    title: "Квалифицированные сотрудники",
    text: "Все наши сотрудники имеют многолетний опыт работы в сфере беспилотной авиации. Нами было реализовано множество проектов различной тематики и самой различной сложности.   ",
    icon: BsPeople,
  },
  {
    title: "Высокотехнологичное оборудование ",
    text: "Наша компания использует современное оборудование, которое обеспечивает высокое качество в выполнении поставленных задач. ",
    icon: FaDisease,
  },
  {
    title: "Экономия",
    text: "Использование беспилотных технологий экономит вам много времени и денег. За счет отсутствия технологической колеи сохраняется до 6% урожая. Снижение расхода препаратов до 30%",
    icon: BiRuble,
  },
  {
    title: "Оперативность",
    text: "За рабочую смену наши специалисты способны защитить более 1000 гектар ваших полей, кустарников и деревьев.    ",
    icon: AiFillSetting,
  },
  {
    title: "Собственное производство ",
    text: "Мы разрабатываем и производим беспилотные летательные аппараты, поэтому знаем все тонкости их работы и можем настроить их под конкретные задачи и потребности клиентов.",
    icon: ImMakeGroup,
  },
  {
    title: "Свой сервис",
    text: "Любой наш аппарат можно сдать на плановое техническое обслуживание или же в ремонт в наш собственный сервис, который гарантирует качество и оперативность выполнения работ.  ",
    icon: TbWorld,
  },
];
export const offer: Array<IOffer> = [
  {
    img: images.offer_1,
    title: "iutghfiuwiurh",
    brend: "AGR",
    model: "101-0101",
    price: 15001,
    id: "1",
    count: 1,
  },
  {
    img: images.offer_2,
    title: "Дрон- Картограф STS M8",
    brend: "STS",
    model: "101-11",
    price: 18206,
    id: "2",
    count: 1,
  },
  {
    img: images.offer_3,
    title: "Дрон - Картограф STS M1550",
    brend: "STS",
    model: "100-10",
    price: 13802,
    id: "3",
    count: 1,
  },
];
export const header = {
  main: {
    HeaderCount: [
      {
        count: "50 000 Га",
        title: "ежегодной обработки",
      },
      {
        count: "30% ",
        title: "экономии средств",
      },
      {
        count: "10 команд",
        title: " специалистов",
      },
    ],
    headerTitle:
      "AgroScout - беспилотные технологии для сельского хозяйства и промышлености",
    headerBg: images.header1,
  },
  about: {
    headerBg: images.aboutHeader,
    headerTitle: "О компании AgroScout ",
    headerText: `Наша команда состоит из профессионалов в области эффективного применения беспилотных летательных аппаратов `,
  },
};
export const main: { mainText: IMainText } = {
  mainText: {
    text: `Компания STS.center применяет высокотехнологичные агродроны и БПЛА,
    которые модернизированы и собраны нашими инженерами для сельского и
    лесного хозяйства, а также для промышленности. В СТС Центр работают
    опытные агрономы, энтомологи, пилоты, менеджеры и инженеры. Сегодня мы
    имеем один из самых современных парков дронов в России, что позволяет
    нам выполнять работы широкого спектра от простой аэрофотосъемки до
    лидарного сканирования местности и тепловизионного контроля. Внедрение
    беспилотных технологий в вашем бизнесе поможет сэкономить время и
    деньги, а также позволит получить большое преимущество перед вашими
    конкурентами. Компания STS.center применяет высокотехнологичные
    агродроны и БПЛА, которые модернизированы и собраны нашими инженерами
    для сельского и лесного хозяйства, а также для промышленности.`,
    textH: 80,
    title: {
      title: "Кто мы такие",
      subtitle: "О компании",
    },
    position: "text-left",
  },
};
export const about: {
  aboutText: IAboutText;
  aboutDesc: Array<IAboutDesc>;
} = {
  aboutText: {
    text: `Дроны и БПЛА (беспилотные летальные аппараты) уже сегодня являются важным и стремительно развивающимся сегментом мирового рынка. И этот сегмент находит применение в абсолютно разных сферах жизнедеятельности человека. На сегодняшний день многие коммерческие компании рассматривают дроны и БПЛА в качестве прекрасного инструмента для решения различных задач. И эта тенденция только растет. Согласно исследованию Всемирной организации беспилотных систем (the Organization for Unmanned Vehicle Systems Worldwide), только в сельском хозяйстве общая экономическая эффективность применения дронов к 2025 году составит около Дроны и БПЛА (беспилотные летальные аппараты) уже сегодня являются важным и стремительно развивающимся сегментом мирового рынка. И этот сегмент находит применение в абсолютно разных сферах жизнедеятельности человека. На сегодняшний день многие коммерческие компании рассматривают дроны и БПЛА в качестве прекрасного инструмента для решения различных задач. И эта тенденция только растет. Согласно исследованию Всемирной организации беспилотных систем (the Organization for Unmanned Vehicle Systems Worldwide), только в сельском хозяйстве общая экономическая эффективность применения дронов к 2025 году составит около`,
    textH: 250,
    subTitle: "О нас",
    position: "text-center translate-x-1/2 relative -left-1/2 inline-block",
  },
  aboutDesc: [
    {
      img: images.desc,
      title: "Олег Иванченко ",
      subtitle: "Генеральный директор компнии",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi facilisi ultrices ut consectetur nibh tincidunt. Elit nunc, volutpat, eu ac egestas suspendisse vulputate. Sed feugiat gravida pellentesque dictum nisi rhoncus montes. Duis tellus auctor eget nibh sed erat risus lorem.",
    },
    {
      img: images.desc,
      title: "Олег Иванченко ",
      subtitle: "Генеральный директор компнии",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi facilisi ultrices ut consectetur nibh tincidunt. Elit nunc, volutpat, eu ac egestas suspendisse vulputate. Sed feugiat gravida pellentesque dictum nisi rhoncus montes. Duis tellus auctor eget nibh sed erat risus lorem.",
    },
    {
      img: images.desc,
      title: "Олег Иванченко ",
      subtitle: "Генеральный директор компнии",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi facilisi ultrices ut consectetur nibh tincidunt. Elit nunc, volutpat, eu ac egestas suspendisse vulputate. Sed feugiat gravida pellentesque dictum nisi rhoncus montes. Duis tellus auctor eget nibh sed erat risus lorem.",
    },
  ],
};
export const news: Array<INews> = [
  {
    img: images.imgNews_1,
    title: "Дроны – будущее сельского хозяйства",
    text: "Новые технологии не обходят стороной и самую консервативную отрасль – сельское хозяйство. Согласно прогнозам международной общественной организации Association for Unmanned Vehicle Systems International, в скором времени агросектор станет крупнейшим потребителем дронов – беспилотных летательных аппаратов (БПЛА).",
  },
  {
    img: images.imgNews_2,
    title: "Зачем нужны беспилотники в сельском хозяйстве?",
    text: "Использование дронов в земледелии и в целом в сельском хозяйстве - одно из наиболее перспективных направлений применения этой технологии. БЛА могут быть эффективно использованы для планирования и контроля этапов сельскохозяйственного производства, а также для химической обработки посевов и других растений. ",
  },
  {
    img: images.imgNews_3,
    title: "Создание цифровых карт и контуров полей",
    text: "Многие руководители агрохозяйств только приблизительно знают площади своих полей, и это негативно влияет на точность расчетов внесения минудобрений и подсчета полученной продукции. Чтобы эффективно управлять сельскохозяйственным предприятием потребуется точное знание посевных площадей.",
  },
];
