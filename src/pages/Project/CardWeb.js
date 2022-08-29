import Card from './Card';
import naufalSatu from '../../Img/naufalSatu.png';
import naufalDua from '../../Img/naufalDua.png';
import JustTravel from '../../Img/JustTravel.png';
import RumahImpian from '../../Img/RumahImpian.png';
import Nfttheme from '../../Img/Nft-img.png';

function CardWeb() {
  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-10">
      <Card imageUrl={RumahImpian} title="Design by Me" ket="Slicing Design (React Js, Tailwind Css)" toUrl="https://rumah-impian.vercel.app/beranda" toGithub="https://29TriHartono.github.io/Portofolio" />
      <Card imageUrl={Nfttheme} title="" ket="Slicing Design (React JS, Bootstrap)" toUrl="https://nft-theme.vercel.app/home" toGithub="https://github.com/29TriHartono/Nft-theme" />
      <Card imageUrl={naufalSatu} title="Design by Naufal@array.id" ket="Slicing Design array id (Html,Tailwindcss,Js & Aos liblary)" toUrl="https://arrayid-mstskp.vercel.app/" toGithub="https://github.com/29TriHartono/Arrayid-Mstskp" />
      <Card imageUrl={naufalDua} title="Design by Naufal@array.id" ket="Slicing Design array id (Html,Tailwindcss,Js & Aos liblary)" toUrl="https://arrayid-wumbo.vercel.app/" toGithub="https://github.com/29TriHartono/Arrayid-Wumbo" />

      <Card imageUrl={JustTravel} title="Design by Me" toUrl="https://29TriHartonoo.github.io/Portofolio" toGithub="https://29TriHartono.github.io/Portofolio" />
    </div>
  );
}

export default CardWeb;
