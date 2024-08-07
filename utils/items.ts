export const items = [
    'About me',
    'Languages and Tools',
    'Projects',
    'Contact',
]

export const heads = ['Java','HTML','CSS','JavaScript','TypeScript','Go','Python','C++','Databases','Other tools']
export const subheads = [[''],[''],['TailwindCSS'],['React.js', 'Node.js', 'Express.js', 'Next.js', 'Jest'],[''],[''],['Pandas', 'Numpy','Flask','Django'],[''],['MySQL', 'MongoDB', 'Redis'],['Git','Github','Figma', 'Prisma', 'Docker', 'RabbitMQ']];

export const proj_det = [
    {
        name: 'LazyAI',
        descp: 'Go-based TUI application for AI-assisted clipboard management',
        features: [
            'Developed a Terminal User Interface (TUI) application in Go for seamless AI integration with clipboard',
            'Implemented automatic text processing and instant AI responses, enhancing user productivity',
            'Created an intuitive dashboard for managing interaction history, AI models, and custom prompts',
            'Designed flexible configuration options including detached mode and default prompt settings'
        ],
        tech: ['Go', 'Terminal User Interface (TUI)', 'AI Integration', 'Clipboard Management'],
        link: 'https://github.com/Codesmith28/lazyAi' 
    },
    {
        name: 'Codev',
        descp: 'Collaborative rich text editor for developers',
        features: [
            'Developed a real-time collaborative coding platform enabling multiple developers to work on projects simultaneously',
            'Implemented project management features including file creation and developer invitations',
            'Integrated Redis and Socket.io for real-time updates on user activity and project modifications',
            'Utilized Docker for creating isolated, reproducible development environments, enhancing project portability and consistency'
        ],
        tech: ['Typescript', 'Next.js', 'Socket.io', 'MySQL', 'Prisma', 'Redis', 'Redux', 'Docker'],
        link: 'https://github.com/Saumya40-codes/CoDev'
    },
    {
        name: 'Quidditch Realm',
        descp: 'Full-stack Harry Potter themed sports website',
        features: [
            'Implemented JWT-based authentication for admin and user access',
            'Implemented event based notification on user subscription to a particular event',
            'Integrated Stripe payment gateway for event registrations',
            'Enhanced user engagement through Google Calendar API integration and automated email notifications'
        ],
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Stripe', 'Nodemailer', 'Google Calendar API'],
        link: 'https://github.com/Saumya40-codes/Quidditch-Realm'
    },
    {
        name: 'Doodler',
        descp: 'Real-time collaborative drawing and chat platform',
        features: [
            'Engineered a platform for real-time collaborative drawing and chat functionality',
            'Implemented a room-based system with unique identifiers for streamlined user access',
            'Designed privacy controls allowing users to create invitation-only rooms'
        ],
        tech: ['Typescript', 'Next.js', 'Node.js', 'MongoDB', 'Socket.io'],
        link: 'https://github.com/Saumya40-codes/Doodler'
    },
    {
        name: 'Kafka-like Pub/Sub System',
        descp: 'Publish-subscribe messaging system built from scratch in Go',
        features: [
            'Developed a Kafka-inspired publish-subscribe system with brokers, producers, consumers, and topics',
            'Implemented partitioning within topics for improved scalability',
            'Designed automatic load-balancing functionality among consumers'
        ],
        tech: ['Go'],
        link: 'https://github.com/Saumya40-codes/pubsub'
    },
    {
        name: 'BlogNest',
        descp: 'Feature-rich blogging platform',
        features: [
            'Integrated Firebase authentication for secure user sign-up and login',
            'Developed features for creating, publishing, and interacting with blog posts',
            'Implemented advanced functionalities including customizable reading modes, social sharing, and content tagging'
        ],
        tech: ['React.js', 'Firebase', 'Node.js', 'Express.js', 'MySQL'],
        link: 'https://github.com/Saumya40-codes/BlogNest'
    }
];

export const sites = [
    {
        name:'Mail me',
        img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAABDlBMVEX////qQjVChfQ1qFP6uwDFIhw5gfQqpUycuPiXyqI1f/ORyZ0kpEiStPf0lh77vwDqOjbTLieOsfiKxpbqPjDbkpDpMiHDEQX81ozpOSrBAADrXFP98fHGHRD/uwDzpaLpKRT3xcP0rKjynZntb2f86enrTkPvlI9ghObudG70uLX4zMrteXP41tXrVUvvgXvYhoXRbGnPXlzUdXPgpKP/9eX826D7znP7yFj7ymT70oH+687/+vPy3dzIPDn6wDT95b3GLirXHQvzjgCXYZ+7tUJ6fdGNslizVXfdukBjrl6hZ5y3UW7DOkCZbam2t1CydqXAnlyvwvXh6P3h7uJvnfZouHrO2/vM5NC12r2Me0U7AAAEDElEQVR4nO3aa1vaMBgG4KQF3RB37IIptBYFFBWdTp3OIbpNdz7pTv7/P7IAMiCHkpI27MP7fLXhuq88vD0hQhAIBAKBQCAQCAQCgUAgEMj/mErr6e7e3rP9etoffHD4/Ojo+MXJy+Sk/bzvl4Kg5Pu7rTRJJ8dhmOsmzB0mZLVP/fwgfvAkPdNSrk/qsToHSZZWgyA/En8vpQ4PjoakXs7017bHTUx1Wk3DdNbJcQlPdNdW9kp5LoGfQoVLIW/K5Y50v1f7Pm/qVVgxIwnV9bfqUHP5eSBB5f1zowrF6vrp6C1vyzaqW+Gr1elNq6/vy1Ga3yppe908JLUpp7BeI/cUqJxef0+UKEwbU1VYbdAHStSSKQp70XJy03LkYWOUcEIYojAm5YRTWCkTtixbVNIKWXU4exSrMMEUrrLqbKBYhTXNCis1crskexSmVKvCKqXYHgp7VGMKl6mHbaIwjsoTTqT1cjRyuB0Um8LNuE/ZbFBsHxU/hYOpSwulvvZhLqSpqLDeJNyhSlSoh7rzhr/xVKEw9aRTWPUof6QKFV7c1UPNXZ5LGxRRbAolFa5STzhQjgpzb+d1UXPr72QVSlBsCvnbmXotkhwmRYXvP7jaKMdxPkoqlKIwxWNTuImF6pSoC9dNhHIuT4XNkqOwR9aGi9eIWJ0cFXbeuklRzvonXqVAjUyhOHVKVLe65CixQiWKTWGvwk1x6lSo8MJ1p0I53BSqUWwKWYVrkqmTo9jUudOiuCmMQbEpbDZlUydFDaqbCtWtMB/ooTBVViegvrquEWp0CuNR8RmibqfOCOWsvyuliRqtbnqU47wpBamh/k2dKWru8nMpHRRXnQlqcCI1RvHVmaEc5wubQmPUV4FkhuqeSE1RQnXGKMf59MoE9VpSXQoo51ukvoxMiEe+S0nGqMJiq6y6CZgQUm4tFDNCscfwuOubMhF7zM8OhdAGib3EyULJBluYJYo9ZCaskPQfWjNFIbSVSEW2+qsyRqEV/Sn0ohVkB4W0p5BN3WBN5ihUUT4gjJuaw5dr2aPYFMbfaPaq602dTRRqbU/YLLI99pBqBYUqO7EqsjP+XtQOik2h+pHKoyvcwbZQ6grJtvC7szUUq1D6dac74itteyhWofhCwyN8dbZRrEJus6hYnXUUq3DsdiaSVGcfxSr0/lXoebLqZoFCLXw7hQQr/9vDOmpwIuVPmLNF9aZQPnWzRKF2o9GO+/tMUKge/wPSbFATAihAAQpQgAIUoBKhrqyiijday68LVlE/9Nb/lG9VJqj5X5rrr23ulOZGIfTbkTWYAaro/tH/hOufhcIcn8IjM9Q8n2Lxl/Y+9VlXi4/4XJmgbh7zWbhJRoJAIBAIBAKBQCAQCAQCgUDs5C9/O5osJUbI0QAAAABJRU5ErkJggg==',
        link:'mailto:saumyab5181@gmail.com'
    },
    {
        name: 'Leetcode',
        img: 'data:image/png;base64,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',
        link: 'https://leetcode.com/Saumya2004/',
    },
    {
        name: 'Github',
        img: 'data:image/png;base64,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',
        link: 'https://github.com/Saumya40-codes',
    },
    {
        name:'LinkedIn',
        img : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAb1BMVEUKZsL///8AX8BynNYAXb+Pr93a5PMZacMAW78AV72qxeYAYsFsmdVmltS/1Ozj7vhci8/2+v3O3PDd6fYAT7ubuOEgbsVhkNGxyum/zehYhs1tldPv9fs0c8aCo9gAVLw4eclHfsqjv+RNesiEqdvudQHlAAADT0lEQVR4nO3a25KiMBAGYBKCBOIJFFQEB9x5/2dc1nFqBLox1kLHre3/ai4y+FUITRLi+dJ7vzDKNoyyDaNswyjbMMo2jLINo2zDKNswyjbjKKm01koaKs09IygT6W0Qn07ZytvT9ieO0kUsvpOeDWVvoSgVJOIh65ywsxCUyXeim2SrXKPCheinpFPBqCgdmNq+qqjGFYiSPmAS4qhdoqoNiBJnoq6CUOoCm8i6CkLtoRF1G1UOe+ojQVCioClWAMpUmEn4NFUBQjUo6tMZShYoKnDXU/Ub9pRnUNTB2UD39kjtFCKnqQkQSl8RU+qweJoCKVREQwp5IR9B0y6kMcEoE5YOhzk2n1Jn4AZeqWYu2MxTLYcmuqUDtnDQ515dICrmo6h2HZr9rB3KU0VoGluM6vwSL8ok2a2DRpMukkeX7VIrZdqluyJet/+DGxyOwijb/KcoY6R8cSNpVpRRkcrrYnVo6rD901oGo4yC0m3adsAwD79rdHjI0vL+Zk/KNFtVyq4L4KlL4y+H8Q+dRsUWSP1Dqq6b3lQj2RwLKxaIUhk8yXtsm4NTruz+ioyKNXgJsfAttnVhVABf8LFtCK4uvuYSMryC5FvS5um7fQ6ULvp7k50kQUSP0hd0g+Se45MSMT1KwwOyk3RcNTkK+d9e1qSo/aeNqb2DH4So5tl4+s7YVtfEqE9sZ3KQsiJD9Yv4SNb4DZwY9UpqdLA7RJ3Q16BDVPnrDVEiwzYnXKJ2+zdECeyz2Jyo8lmBuCAFdC5UGhRGaRmuYnxmhT5/86A2vqe/GquogfcqbxdE9itnQcXm4b6YPTpvwIrCHKi4t3GkYqRhUsAjfQbUdTDbjbC2S3hQTY/aDK+osEkWsjE/PeoA/FCIrCSQmj45KoWGiUaewOGdngcFf8IY7oDfEtOgEvBDl8mdolL4Zwxc14lQyCiR8EgnQgXw86ThBQURClk5uUWt4Bqt4Z0hRjGKUYxiFKMYxShGMYpRjGIUoxjFKEYxilGMYtQboWQgkmHE4vELx2so9fcorz5A5yWLTpsVcOpyuUTO+pgt2Lp54cvon7O1ULpNoMOn8NXQ1q+cS3AdRtmGUbZhlG0YZRtG2YZRtmGUbRhlG0bZ5h1RvwGty0ob5IskSQAAAABJRU5ErkJggg==',
        link: 'https://www.linkedin.com/in/saumya-shah-326537252/',
    },
    {
        name:'Codechef',
        img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA3AMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUBAwYHAgj/xABAEAABAwIEAwMIBwUJAAAAAAABAAIDBBEFEiExBkFRE2FxByIjMkJSgaEUM2KRkrHBRHLR4fEVFiQ0NUNTovD/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EAB8RAQEAAgIDAAMAAAAAAAAAAAABAhEhMQMSQSIyQv/aAAwDAQACEQMRAD8A9xREQEREBERAQ7aIh2QYcQBckAKFWV5p4g9sZdmcGsAGrifEiyh4rWMGIQUkkmRrm59dA832UpsQqKUxuO+x6HkVi5fGpPr6gmNS30he11rloNh8l8YhKKTDp5GAAsYcuml+Sj4dIZntc71mlzXDo4aFY4l/0eQdXMB/EFi26WzlqoYjDTRtJJcW3cTzJ1JVo0ejFtyFCbrYKf6rB0AUnRe1fK/tKwRN9WJt3W6lfEvWwutWHkyPqJj7T1sk79lj4qBVvEcT3u9UDVaKatqaVoMUpbpfKdW/cvnEbyTxU/InM/w5LXNptssW2dN626XDMXirLMfaOb3evgrMLz8uLDma7K5uoK6rAcUFbEY5SBMwa/aHVd/H5fbiueWOluiwL81ldmBERAREQEREBERAREQEREBYOyyiCjx/D2V1BOQ300ZL43cwRyWeG6k1WFRPkN3jzXeIVna0r2nUHVUnDQ7CbEaQ/wC1UEjwK4Wfk3Om2jd2XEFbT7B4bM0eIs752W3iUE4LNbdpaf8AsFFqiY+L6QjaWmc3x9Y/oFY4vGZcKqmDfsiR4qfKXuI9K4SNid7wBU2rdkppD0afyVdgThLSU7j7tvuU/ENaKe/uFP5W9q7CRahB95xK+5Re6zhwth0PeF8VJysc7oCVL0KuMF8s1QfacWt8AtU3cphbkiazooNQQ1pcdhquVdIiv89+X2W6u/gvqmqXUtUyePTK7bqOi+WNIj87c6lfDgXENaLuOgV3rRXoVPK2eBkrPVe0OC2rRRxdhSRRe4wBb17I84iIqCIiAiIgIiICIiAiIgIiINM3m5XdDr4KmiHYcU1A9mopw/8ACbK9c0OaQeapK4GPE8MquWd0L/iNPmFyzjUa8Vbk4gwaU8zIw/h/mrh7c0bmnmCCq7G2emw2a31VW1pPQO0/UK0HU81CqPhgEQSRO9aGRzSrSuGaklH2SoWGR9hi2IRWtnyyjwP81YzjNE9vVpCk/UvaBSC1DCPsBR636pw6kD5qXALUsI+yFEqxo0fbCzemkabnfcHVVlYdmdTdWc2t+8qqnOepd0aAAuf1uPh11Z8O0P0msFQ4eih115uUKnp5KqZkMY85xtfoF2lFTspYGwxjRo36rfjx9rupndN4+SyiL1OIiIgIiICIiAiIgIiICIiAiIgwdlV4xGTRzOa274HNnb35Tf8AiFarRMLOa46jVpv0P9FnLoRcQiNVQSNis6QgPj13e0hzfmApEUjZo2SRm7JAHN8CtVGOyi7A7w+aO8ez8vmF9xjsXGNoOUkuaANr7rDSPIzJikMwGksboyfmP1Utx30XxIx0mXZuV2YE7rL81z5w+5REVoywtHTRRKjUt/e/QqY+46HusocpBO2oWK1ESXZVIF5JXHYuP/vkraUrVhVO2euiYR5mYvPhuuet3TculzgNAKeDtpB6WQfhCtl8t2X0vXjNRyt3RERaQREQEREBERAREQEREBERAREQF8SMDoy3bRfaFBDN3Frho8XBC2MAF7a955rMjQJA8A5rEaLOVx9azVz9eVYXy9bRGOZJQxR+6E9RBkI25qJLzVq+mY4bkfFQ56OQAlvnju3WLjWpVPNvba6m8ORemlkto1gb9/8ARQ5muJLctnXtYhX2F0ppabK+2dxzOWfHjbltcrwmoiL0uYiIgIiICIiAiIgIiICIiAiIgIiwdtEGVjdcvxFx1guBufDJUfSatv7PAQSP3nbN/PuVFwtxBxbxHjkVWynjpsEucwczzXNsbZXHVxvbUaLO109FO1wtMFTDUukEErJOyeY5Mjgcrxu09Dqtt1zuMcNYRJPUYjUzz0TZADVGKqdCyUDm+x6aX3WkXP8AaNEKr6Kayn+kf8Patz/ddSly1Bg3CWI0bqfCmUMoYQe1pZQ6Rh5HMDmB7107RlAbrppqpKXh9IsPcGtLnEAAXJPJV9FjmFV1QaejxOknmF7xxTNc7TfQKrpMmp4pXNc9gzNcCCtoFlgnS/6Li+Nn8ZU9bFU8OuZLRBnnQsawvDrm5Id6wIttr3KdHbtkXm+FeU10VQ2j4mw2aim9qRsbm27ywi4HfqvQaKqhradlRTTMmheLskY64cElLG9ERVBERAREQEREBERAREQEREGDsuM8p8mNjBY48FiqCx7/APEvp7l7WW7tbX6LtFjbuQjxDye1PCtJVOdj0ZFYHehkqG5oGfD2Xd7vgV7VTzRTxtkhfHJG4Xa5hBBHcVS8QcIYPjwc6rpWsqD+0Rea+/f1+K4J/CfF3C9c0cM1T54ZHaWIDB++w6fEfescxvjJ64QLbDdefeWVk5wKhc3P9GbWDt8p+ycpI569edl3sBk7JnbZe0yjNl2vzsvmspaetppKarhZNBIMr2PFwQtXlmXVeR8D/wBms8oFOOHH1b6E0rhJ9I0dexvpppt8b9y9iAVVgvD2E4H2hwqijgdJ67g4ucR0uSTbuViyZjnuja7z2esOiSaMrtz3lIjqZODcRFJmzBgLg3dzb6heT0bMNZxFw67hyorJZnTQduJo8uV2YZgNBoG5r7i3Ne7l8Usr4CQ4hl3MOuh6qtw7hjBMMrXVtDhsMVQ6/pBc2vvlvo34WUs3Vl0txtdHkNaSSABqSVk6BchxtgGNcQT0tLSYgymwyx+kt1zOPw3Fr6bdVajn+Nsep+J5P7vYDh7MSqc/+b9mBw5tP5nbx2XVcB8NS8M4XJT1FWZ5pn9o8DRkZtazf481O4c4fw7h+k+jYfCGkjz5XavkPUn9FcWUk+m/giItIIiICIiAiIgIiICIiAiIgIiICwdrrKwdkFdHjFA/E5sNFSwVkIDnRONjYgEW67hSquqp6SF0tVPHDG0XLnusF5L5XcJnpsbhxiJruxnY1rpW+xI3Qaja4tquFmqamoAFTUTzAG4Esrn2+8rHtqukw3HrmJeVPCKebsqKmqKtoP1jbNb8L7qZhmK4XxpE+ekqKzD6ymb6QxuyPDe/cOH5LxI2G+wXqfkq4dqIqOtxCsa6FlZF2MTSLEt1863xUmVtXLGSEflCwXA5H0lBS1taM57SqfIC6Q7XuTc/kur4e4zwfHfMp6jsagbwTDK74dfgvEsewapwHEZKGqjLcpPZPI0e3kQeargS0gt0IOh6Ke1lPSWP01UVENNEZZ5WxxtFy5zrCy04TiNLi1DHXUMglp5C4MeBo7K4tuO64OvNfnIy1la5lO6eqqXPcGsidK5+Y8gASv0Fwhhj8G4coKCU+kiju/uc4lxHwJK1jbWcsfVcIiLbAiIgIiICIiAiIgIiICIiAiIgIiICIiDTVU8NVA+CoiZLE8Wcx4uCFyNX5NeHaiTPHBNATplilIaPAcl2iKaWXTlsK4D4ewyRkkdEJZWm7XzuL7HuvsunAAAAAHcsonRbah4nhlDitOYK+mjnjPJ7b28Fys3kx4dfJmYypYPdbM63zXbomtkulDgfCWC4G/tKCjDZiPrpCXuHxOyvQiJJpLbWURFQREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB/9k=',
        link: 'https://www.codechef.com/users/saumya2829',
    },
    {
        name:'Codeforces',
        img: 'data:image/jpeg;base64,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',
        link: 'https://codeforces.com/profile/saumya2004',
    }
]
