import avengers from '../images/gifs/avengers1.gif';
import mrAmerica from '../images/gifs/mrAmerica1.gif';
import main1 from '../images/gifs/marvelLoadingMain.gif';
import main2 from '../images/gifs/marvelLoadingMain2.gif';
import main3 from '../images/gifs/marvelLoadingMain3.gif';
import main4 from '../images/gifs/marvelLoadingMain4.gif';
import main5 from '../images/gifs/marvelLoadingMain5.gif';
import main6 from '../images/gifs/marvelLoadingMain6.gif';
import main7 from '../images/gifs/marvelLoadingMain7.gif';
import main8 from '../images/gifs/marvelLoadingMain8.gif';
import main9 from '../images/gifs/marvelLoadingMain9.gif';

const loaderImages = {
  avengers: {
    src: avengers,
    timer: 5000,
  },
  mrAmerica: {
    src: mrAmerica,
    timer: 5000,
    bgColor: 'darkYellow',
  },
  main1: {
    src: main1,
    timer: 2750,
  },
  main2: {
    src: main2,
    timer: 5000,
  },
  main3: {
    src: main3,
    timer: 5000,
  },
  main4: {
    src: main4,
    timer: 5000,
  },
  main5: {
    src: main5,
    timer: 5000,
  },
  main6: {
    src: main6,
    timer: 5000,
  },
  main7: {
    src: main7,
    timer: 5000,
  },
  main8: {
    src: main8,
    timer: 5000,
  },
  main9: {
    src: main9,
    timer: 5000,
  },
};

export const getImage = (image) => loaderImages[image];

export default loaderImages;
