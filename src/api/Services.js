import simg from "../images/services/icon1.png";
import simg2 from "../images/services/icon2.png";
import simg3 from "../images/services/icon3.png";
import simg4 from "../images/services/icon4.png";
import simg5 from "../images/services/icon5.png";
import simg6 from "../images/services/icon6.png";

import sSimg1 from "../images/service-single/img-1.jpg";
import sSimg2 from "../images/service-single/img-2.jpg";
import sSimg3 from "../images/service-single/img-3.jpg";
import sSimg4 from "../images/service-single/img-1.jpg";
import sSimg5 from "../images/service-single/img-2.jpg";
import sSimg6 from "../images/service-single/img-3.jpg";

import sSingleimg1 from "../images/service-single/2.jpg";
import sSingleimg2 from "../images/service-single/3.jpg";

const Services = [
  {
    Id: "1",
    sImg: "images/vector/arch_vector.jpg",
    sSimg: sSimg1,
    sTitle: "Architecture Design",
    slug: "architecture-design",
    description: `The Architecture service involves the creation of innovative and functional designs for 
various structures, ranging from residential homes to commercial buildings and public 
spaces.`,
    des2: "Elementum aliquam byuerirra sagittis duis non quis.",
    des3: "One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities",
    ssImg1: sSingleimg1,
    ssImg2: sSingleimg2,
    IncludedServices: [
      "Planning",
      "3D elevation design",
      "Sanctioning",
      "Site planning",
      "Layout Planning",
      "Site visits and Supervision",
    ],
  },
  {
    Id: "2",
    sImg: "images/vector/int_vector.jpg",
    sSimg: sSimg2,
    sTitle: "Interior Design",
    slug: "interior-design",
    description: `The Interior Design service focuses on creating functional, visually appealing, and 
harmonious interior spaces within built structures.`,
    des2: "Elementum aliquam byuerirra sagittis duis non quis.",
    des3: "One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities",
    ssImg1: sSingleimg1,
    ssImg2: sSingleimg2,
    IncludedServices: [
      "3D Designs",
      "Interior and Spaces Design",
      "Turnkey Consultants",
      "Furniture Design",
      "Modular kitchens",
      "False ceiling Design",
      "Home Décor",
      "Site Visits and Supervision",
    ],
  },
  {
    Id: "3",
    sImg: "images/vector/land_vector.jpg",
    sSimg: sSimg2,
    sTitle: "Landscape Design",
    slug: "landscape-design",
    description: `The Landscape design service involves the creation of outdoor spaces that seamlessly 
integrate with built structures, harmonizing natural elements with human needs and 
requirements`,
    des2: "Elementum aliquam byuerirra sagittis duis non quis.",
    des3: "One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy the activities",
    ssImg1: sSingleimg1,
    ssImg2: sSingleimg2,
    IncludedServices: [
      "Site Analysis and Planning",
      "Conceptual Design",
      "Master Planning",
      "Planting Design",
      "Hardscape Design",
    ],
  },
];
export default Services;
