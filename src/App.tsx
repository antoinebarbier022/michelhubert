import  {data, theme} from "./config/main";

import Card from './components/Card/Card.component';
import SocialNetworks from './components/SocialNetworks/SocialNetworks.component';
import MusicPlateforms from './components/LinksPlateforms/LinksPlateforms.component';
import Footer from './components/Footer/footer.component';
import Contact from "./components/Contact/Contact.component";
import { ContactInfo, FaviconType } from "./types/All.types";


function setFavicon(type:FaviconType, src: string) {
  let favicon;
  if(type === "emoji"){
    favicon = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${src}</text></svg>`
  }else{
    favicon = src;
  }
  (document.querySelector("link[rel*='icon']") as HTMLLinkElement).href = favicon;
  (document.querySelector("link[rel*='apple-touch-icon']") as HTMLLinkElement).href = favicon;
}

function App() {

  // website title
  document.title = data.title;

  // set background 
  const tab = theme.appBg.split(" ");
  tab.map( x => document.body.classList.add(x));

  // set favicon
  setFavicon(data.favicon.type,data.favicon.src);
  
  return (
    <div className={`App h-full py-10 ${theme.textColor}`}>
      <Card background={theme.cardBg} opacity={theme.cardOpacity}>
          <div className={`mb-8`}>
            <figure className={`mb-10`}>
              <img src={data.image.src} alt={data.image.alt} className={`mx-auto rounded-2xl border-4 border-white/10 ${theme.styleImg} aspect-auto`}></img>
            </figure>
            <h1 className={`text-2xl font-bold uppercase`}>{data.title}</h1>
            <h2 className={`mb-2 text-md font-mono`}>{data.subtitle}</h2> 
            <p className={` font-light text-justify my-5  ${theme.textOpacity} ${theme.textColor} `}> {data.description}</p>
          </div>

          <MusicPlateforms data={data.plateforms} 
                            className={!(data.contact === undefined) ? "mb-2": ""}
                            hidden={data.plateforms === undefined} />
          <Contact  /*data={new Map<ContactInfo, string>([
                      ["email", data.contact?.email]
                    ])}*/
                    email={data.contact?.email} 
                    phone={data.contact?.phone} 
                    location={data.contact?.location} 
                    hidden={data.contact === undefined}/>
          <SocialNetworks data={data.socialNetworks} 
                            fill={theme.iconFill} 
                            hover={theme.iconFillHover}
                            hidden={data.socialNetworks === undefined}/>
          <Footer author={true}/>
        </Card>
    </div>
  );
}

export default App;
