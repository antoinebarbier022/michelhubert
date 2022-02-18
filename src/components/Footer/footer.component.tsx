import { data, theme } from "../../config/main";

type FooterProps = {
    hidden?:boolean,
    author?: boolean
};

function Footer({ hidden = false, author = true } : FooterProps) {
    if (hidden) {
        return(<></>);
    }
    return ( <footer className={`flex-col justify-center align-center text-center`}>
    <span className={` text-center ${theme.textOpacity} ${theme.textColor}`}>{data.title} © {new Date().getFullYear()}</span>
    { author && 
        <span> - Made by <a href="https://www.antoinebarbier.fr" target="_blank" rel='noopener noreferrer' className={` font-medium ${theme.textColor} `}>@An_toine</a> </span>}
  </footer> );
}

export default Footer;