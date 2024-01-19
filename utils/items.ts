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
        tech:'React.js, Node.js, Express.js, MongoDB,Redux, Stripe, Nodemailer, Google Calendar API',
    },
    {
        name:'Doodler',
        descp:'Chat and draw in real-time all together.',
        features:
        'Users can create personalized rooms. Join friends’ rooms using uniquely generated roomIDs with nanoid. Seamless real-time chat functionality within each room. Users can draw together in real-time. Users can create private rooms for the restricted access',
        tech:'Typescript, Next.js, Node.js, MongoDB, Socket.io'
    },
    {
        name:'BlogNest',
        descp:'A Blogging site.',
        features: 
        'Users can sign up and log in to BlogNest using their Firebase accounts, ensuring secure access to the platform. Users can create and publish their own blog posts using an intuitive and user-friendly interface. Users can browse through a collection of blog posts, view the details of each post, and read the content in a clean and visually appealing layout'
    }
]