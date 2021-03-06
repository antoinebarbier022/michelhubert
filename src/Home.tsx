import { data, theme } from "./config/main";

import Card from "./components/Card/Card.component";
import SocialNetworks from "./components/SocialNetworks/SocialNetworks.component";
import MusicPlateforms from "./components/LinksPlateforms/LinksPlateforms.component";
import Contact from "./components/Contact/Contact.component";
import LinkCard from "./components/LinkCard/Link.component";

import holdupImg from "./config/clients/amaury_leduc/hold-up.png";

function Home() {
  // set background
  const tab = theme.appBg.split(" ");
  tab.map((x) => document.body.classList.add(x));
  return (
    <div className={`App h-full py-10 ${theme.textColor}`}>
      <Card background={theme.cardBg} opacity={theme.cardOpacity}>
        <div className={`mb-8`}>
          <figure className={`mb-10`}>
            <iframe
              className={`mx-auto rounded-2xl border-4 border-white/10 w-full aspect-video`}
              src="https://www.youtube.com/embed/GphQGonw5nc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </figure>
          <h1 className={`text-2xl font-bold uppercase`}>{data.title}</h1>
          <h2 className={`mb-2 text-md font-mono`}>{data.subtitle}</h2>
          <p
            className={` font-light text-justify my-5  ${theme.textOpacity} ${theme.textColor} `}
          >
            {" "}
            {data.description}
          </p>

          <LinkCard
            link="https://holdup-la-boutique.company.site/"
            className="py-2"
          >
            <img src={holdupImg} alt="holdup la boutique" className="h-full" />
          </LinkCard>
        </div>

        <MusicPlateforms
          data={data.plateforms}
          className={!(data.contact === undefined) ? "mb-2" : ""}
          hidden={data.plateforms === undefined}
        />

        <Contact
          email={data.contact?.email}
          phone={data.contact?.phone}
          location={data.contact?.location}
          hidden={data.contact === undefined}
        />
        <SocialNetworks
          data={data.socialNetworks}
          fill={theme.iconFill}
          hover={theme.iconFillHover}
          hidden={data.socialNetworks === undefined}
        />

        <footer className={`flex-col justify-center align-center text-center`}>
          <span
            className={` text-center ${theme.textOpacity} ${theme.textColor}`}
          >
            {data.title} ?? {new Date().getFullYear()}
          </span>
          <span>
            {" "}
            - Made by{" "}
            <a
              href="http://pro.antoinebarbier.fr"
              target="_blank"
              rel="noopener noreferrer"
              className={` font-medium ${theme.textColor} `}
            >
              @An_toine
            </a>{" "}
          </span>
        </footer>
      </Card>
    </div>
  );
}

export default Home;
