import { ThemeModel } from "../../../model/theme.model";

const theme: ThemeModel = {
    appBg: "bg-gradient-to-r from-sky-900 to-blue-500",

    styleImg:"md:w-[400px]",
    
    cardBg: "bg-white",
    cardOpacity: "bg-opacity-10",

    textColor: "text-white",
    textOpacity: "text-opacity-80",

    linkMusicBg: "bg-white/[0.08] ",
    linkMusicHoverBg: "hover:bg-white/[0.15]",

    iconFill: "fill-white/60",
    iconFillHover: "hover:fill-white/90",

    // no tailwind, only color
    boldTextColor: "#fff",
};

export default theme ;