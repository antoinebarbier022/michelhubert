import { PlateformType } from "../types/Plateforms.types";

export interface DataModel{
    title:string,
    subtitle:string,
    image:{
        src: any,
        alt: string
    },
    description: any,
    plateforms: Array<{ name: PlateformType, link: string }>
    socialNetworks: Array<{ name: PlateformType, link: string }>
};

