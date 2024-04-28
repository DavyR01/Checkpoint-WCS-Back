import { Country } from "../entities/country";


export const injectDatasEurope = async () => {
   const countries = await Country.find();
   if (countries.length === 0) {
      const France = new Country();
      France.code = "FR";
      France.emoji = 'flagFR.png';
      France.name = "France"
      France.save();

      const Espagne = new Country();
      Espagne.code = "ES";
      Espagne.emoji = 'flagES.png';
      Espagne.name = "Espagne"
      Espagne.save();

      // const Italie = new Country();
      // Italie.code = "IT";
      // Italie.emoji = 'flagIT.png';
      // Italie.name = "Italie"
      // Italie.save();
   }
} 


export async function injectDatasAfrique() {
   const countries = await Country.find();
   if (countries.length === 0) {
      const Egypte = new Country();
      Egypte.code = "EG";
      Egypte.emoji = 'flagEG.png';
      Egypte.name = "Egypte"
      Egypte.save();

      const Senegal = new Country();
      Senegal.code = "SE";
      Senegal.emoji = 'flagSE.png';
      Senegal.name = "Sénégal"
      Senegal.save();
      
      // const Namibie = new Country();
      // Namibie.code = "NA";
      // Namibie.emoji = 'flagNA.png';
      // Namibie.name = "Namibie"
      // Namibie.save();
   }
} 

export async function injectDatasAsie() {
   const countries = await Country.find();
   if (countries.length === 0) {
      const Indonesie = new Country();
      Indonesie.code = "IN";
      Indonesie.emoji = 'flagIndonesie.png';
      Indonesie.name = "Indonésie"
      Indonesie.save();

      const Thailande = new Country();
      Thailande.code = "TH";
      Thailande.emoji = 'flagTH.png';
      Thailande.name = "Thailande"
      Thailande.save();
      
      // const Vietnam = new Country();
      // Vietnam.code = "VI";
      // Vietnam.emoji = 'flagVI.png';
      // Vietnam.name = "Vietnam"
      // Vietnam.save();
   }
} 


export async function injectDatasAmerique() {
   const countries = await Country.find();
   if (countries.length === 0) {
      const Mexique = new Country();
      Mexique.code = "ME";
      Mexique.emoji = 'flagME.png';
      Mexique.name = "Mexique"
      Mexique.save();

      const Perou = new Country();
      Perou.code = "PE";
      Perou.emoji = 'flagPE.png';
      Perou.name = "Pérou"
      Perou.save();
      
      // const Guatemala = new Country();
      // Guatemala.code = "GU";
      // Guatemala.emoji = 'flagGU.png';
      // Guatemala.name = "Guatemala"
      // Guatemala.save();
   }
} 


export async function injectDatasOceanie() {
   const countries = await Country.find();
   if (countries.length === 0) {
      const Australie = new Country();
      Australie.code = "AU";
      Australie.emoji = 'flagAU.png';
      Australie.name = "Australie"
      Australie.save();

      const NouvelleZelande = new Country();
      NouvelleZelande.code = "SE";
      NouvelleZelande.emoji = 'flagSE.png';
      NouvelleZelande.name = "Nouvelle Zelande"
      NouvelleZelande.save();
      
      // const Fidji = new Country();
      // Fidji.code = "FI";
      // Fidji.emoji = 'flagFI.png';
      // Fidji.name = "Fidji"
      // Fidji.save();
   }
} 