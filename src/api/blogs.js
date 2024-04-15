// images
import blogImg1 from "../images/blog/blog1.jpg";
import blogImg2 from "../images/blog/blog2.jpg";
import blogImg3 from "../images/blog/blog3.jpg";

import blogSingleImg1 from "../images/blog/blog3.jpg";
import blogSingleImg2 from "../images/blog/blog2.jpg";
import blogSingleImg3 from "../images/blog/blog1.jpg";



const blogs = [
    {
        id: '1',
        title: 'Architecting for Reliable Scalability',
        slug:'Architecting-for-Reliable-Scalability',
        screens: blogImg1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        author: 'Anne William',
        authorTitle:'CEO',
        create_at: '14 AUG,23',
        blogSingleImg:blogSingleImg1, 
        comment:'35',
        blClass:'format-standard-image',
    },
    {
        id: '2',
        title: 'Serverless Stream-Based Processing',
        slug:'Serverless-Stream-Based-Processing',
        screens: blogImg2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        author: 'Konal Biry',
        authorTitle:'Manager',
        create_at: '16 AUG,23',
        blogSingleImg:blogSingleImg2, 
        comment:'80',
        blClass:'format-standard-image',
        sClass:'s2',
    },
    {
        id: '3',
        title: 'Building a Scalable Document',
        slug:'Scalable-Document',
        screens: blogImg3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        author: 'Jenefer Willy',
        authorTitle:'Bolod',
        create_at: '18 AUG,23',
        blogSingleImg:blogSingleImg3,
        comment:'95',
        blClass:'format-video',
        sClass:'s2',
    },
];
export default blogs;