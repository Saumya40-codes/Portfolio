export const items = [
    'About me',
    'Languages and Tools',
    'Projects',
    'Contact',
]

export const heads = ['Java','HTML','CSS','JavaScript','TypeScript','Python','C++','Databases','Other tools']
export const subheads = [[''],[''],[''],['React.js', 'Node.js', 'Express.js', 'Next.js'],[''],['Pandas', 'Numpy','Flask','Django'],[''],['MySQL', 'MongoDB'],['Git','Github','Figma']];


export const proj_det = [
    {
        name:'Quidditch Realm',
        descp:'A full-stack harry potter sport (Quidditch) theme-based website.',
        features:
        'Admin and user-based jwt authentication. Stay updated with the latest match results notification and its relavant mails. User registration for quidditch events. Stripe payment gateway integration for the same. Google Calendar integration for marking event reminders. Nodemailer for sending emails on the subscription of certain events',
        tech:['React.js', 'Node.js', 'Express.js', 'MongoDB','Redux', 'Stripe', 'Nodemailer', 'Google Calendar API'],
        link:'https://github.com/Saumya40-codes/Quidditch-Realm',
    },
    {
        name:'Doodler',
        descp:'Chat and draw in real-time all together.',
        features:
        'Users can create personalized rooms. Join friends’ rooms using uniquely generated roomIDs with nanoid. Seamless real-time chat functionality within each room. Users can draw together in real-time. Users can create private rooms for the restricted access',
        tech:['Typescript', 'Next.js', 'Node.js', 'MongoDB', 'Socket.io'],
        link:'https://github.com/Saumya40-codes/Doodler',
    },
    {
        name:'BlogNest',
        descp:'A Blogging site.',
        features: 
        'Effortless sign-up and login with Firebase authentication. Easily create and publish personalized blog posts on BlogNest. Explore, like, and comment on blog posts for a vibrant community experience. Customizable reading modes, social sharing, search functionality, tagging, and bookmarking enhance user experience and efficiency on BlogNest',
        tech:['React.js', 'Firebase', 'Node.js', 'Express.js', 'MySQL'],
        link:'https://github.com/Saumya40-codes/BlogNest',
    }
]