import { ThemeModel } from "../../../model/theme.model";

const theme: ThemeModel = {
    appBg: "bg-gradient-to-bl from-sky-900 via-blue-500 to-orange-300",

    styleImg:"md:h-[300px]",
    
    cardBg: "bg-black",
    cardOpacity: "bg-opacity-10",

    textColor: "text-white",
    textOpacity: "text-opacity-80",

    linkMusicBg: "bg-white/[0.05] ",
    linkMusicHoverBg: "hover:bg-white/[0.15]",

    iconFill: "fill-white/60",
    iconFillHover: "hover:fill-white/90",

    // no tailwind, only color
    boldTextColor: "#fff",
};

export { theme } ;