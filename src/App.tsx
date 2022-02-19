import  {data, theme} from "./config/main";

import Card from './components/Card/Card.component';
import SocialNetworks from './components/SocialNetworks/SocialNetworks.component';
import MusicPlateforms from './components/LinksPlateforms/LinksPlateforms.component';
import Footer from './components/Footer/footer.component';
import Contact from "./components/Contact/Contact.component";



function App() {

  // website title
  document.title = data.title;

  // set background 
  const tab = theme.appBg.split(" ");
  tab.map( x => document.body.classList.add(x));

  
  return (
    <div className={`App h-full py-10 ${theme.textColor}`}>
      <Card background={theme.cardBg} opacity={theme.cardOpacity} >
          <div className={`px-2 sm:px-4 mb-8`}>
            <figure className={`mb-10`}>
              <img src={data.image.src} alt={data.image.alt} className={`mx-auto rounded-2xl border-4 border-white/10 ${theme.styleImg} aspect-auto`}></img>
            </figure>
            <h1 className={`text-2xl font-bold uppercase text-center`}>{data.title}</h1>
            <h2 className={`mb-2 text-md font-mono text-center`}>{data.subtitle}</h2> 
            <p className={` font-light text-justify my-5  ${theme.textOpacity} ${theme.textColor} `}> {data.description}</p>
          </div>

          <MusicPlateforms data={data.plateforms} hidden={true} />
          <Contact  email="michelhubert@gmail.com" 
                    phone="06 67 67 45 45"
                    location="15 place Alphonse Laveran, Montpellier"
                    hidden={false}/>
          <SocialNetworks data={data.socialNetworks} 
                            fill={theme.iconFill} 
                            hover={theme.iconFillHover}/>
          <Footer hidden={false} author={true}/>
        </Card>
    </div>
  );
}

export default App;
