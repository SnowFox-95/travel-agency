import autoComplete from "@tarekraafat/autocomplete.js";
import countryList from "./helpers/countryList";

const autoCompleteJS = new autoComplete({
  selector: "#autocompleteCountry",
  placeHolder: "e.g Bali, Indonesia",
  data: {
    src: [countryList],
  },
  resultItem: {
    highlight: true,
  },
});

//import mobileNav from './modules/mobile-nav.js';
//mobileNav();
