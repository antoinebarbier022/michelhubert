import { ThemeModel } from "../../../model/theme.model";

const theme: ThemeModel = {
    appBg: "bg-gradient-to-bl from-cyan-400 to-cyan-800",
    //bg-gradient-to-bl from-cyan-200 to-green-900

    styleImg:"md:w-[500px]",
    
    cardBg: "bg-white",
    cardOpacity: "bg-opacity-[0.1]",

    textColor: "text-white",
    textOpacity: "text-opacity-80",

    linkMusicBg: "bg-white/[0.08] ",
    linkMusicHoverBg: "hover:bg-white/[0.15]",

    iconFill: "fill-white/60",
    iconFillHover: "hover:fill-white/90",

    // no tailwind, only color
    boldTextColor: "#fff",
};

export { theme } ;