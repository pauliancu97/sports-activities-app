let DATA = {
    current_user:
    {
        username: 'Razvan Dumitrescu',
        image: 'assets/img/runner.png'
    },
    pending_friend_requests:
    [

    ],
    'color_run':
    {
        activity: true,
        image:'assets/img/colorful-crowd-party-fitness-marathon-rave-5k-color-run-5k-run-color-throw_t20_7OaO1O-1500x750.jpg',
        title:'Color run - Central Park',
        description:'Cunoscuta si drept&nbsp;<strong>\”Happiest 5k on the Planet\”</strong>&nbsp;– este o cursa euforica in culori, care celebreaza sanatatea, bucuria si originalitatea. Axata mai putin pe timpii de alergare si mai mult pe distractia nebuna,The Color Run™ este o cursa necronometrata de 5 kilometri, in cadrul careia mii de participanti sunt vopsiti din cap pana-n picioare in diverse culori, la finalul fiecarui kilometru parcurs.',
        location:
        {
            name: 'Central Park - Cluj Napoca',
            description: 'We will meet at the&nbsp;park\'s entrance' 
        },
        date:
        {
            hour: '14:00',
            day: '28',
            month: 'Oct'
        },
        prerequisetes:'You need to be able to run for 5km and to be ok with getting yourself colored.',
        attendees:
        [
            {
                username: 'Alex Todea',
                image: 'assets/img/runner.png',
                isFriend: true
            },
            {
                username: 'Bogdan Benea',
                image: 'assets/img/runner_second.jpg',
                isFriend: false
            },
            {
                username: 'Raluca Zbucea',
                image: 'assets/img/runner_third.jpg',
                isFriend: true
            },
            {
                username: 'Maria Dragomir',
                image: 'assets/img/runner_fourth.jpg',
                isFriend: false
            },
            {
                username: 'Jamal Knuth',
                image: 'assets/img/runner_fifth.jpg',
                isFriend: true
            },
            {
                username: 'Paul Morar',
                image: 'assets/img/runner.png',
                isFriend: false
            },
            {
                username: 'Andrei Oancea',
                image: 'assets/img/runner_second.jpg',
                isFriend: false
            },
            {
                username: 'Emilia Tudor',
                image: 'assets/img/runner_third.jpg',
                isFriend: true
            },
            {
                username: 'Denisa Macovei',
                image: 'assets/img/runner_fourth.jpg',
                isFriend: true
            },
            {
                username: 'Shaq Morris',
                image: 'assets/img/runner_fifth.jpg',
                isFriend: true
            },
            {
                username: 'Andrea Rad',
                image: 'assets/img/runner_third.jpg',
                isFriend: true
            },
            {
                username: 'Cristina Mures',
                image: 'assets/img/runner_fourth.jpg',
                isFriend: false
            },
            {
                username: 'Neil Tyson',
                image: 'assets/img/runner_fifth.jpg',
                isFriend: true
            },
            {
                username: 'Vasile Ungur',
                image: 'assets/img/runner.png',
                isFriend: false
            },
            {
                username: 'Dragos Chirian',
                image: 'assets/img/runner_second.jpg',
                isFriend: false
            }
        ],
        equipment:
        [
            {
                name:'Running shoes',
                icon:'fas fa-shoe-prints',
                quantity: 2,
                hasQuantity: 2
            },
            {
                name:'Running T-Shirt',
                icon:'fas fa-tshirt',
                quantity: 2,
                hasQuantity: 1
            },
            {
                name:'Watter bottle',
                icon:'fas fa-wine-bottle',
                quantity: 1,
                hasQuantity: 0
            }
        ],
        organiser:
        {
            username: 'Alex Todea',
            image: 'assets/img/runner.png',
            isFriend: true   
        },
        comments:
        [
            {
                id:0,
                user:
                {
                    username: 'Alexandru Todea',
                    image: 'assets/img/runner.png'
                },
                content: 'I can\'t wait for this event!',
                replies:
                []
            },
            {
                id:1,
                user:
                {
                    username: 'Ion Dobre',
                    image: 'assets/img/runner_second.jpg'
                },
                content: 'I hope this will be fun!',
                replies:
                [
                    {
                        user:
                        {
                            username: 'Vasile Rad',
                            image: 'assets/img/runner_third.jpg'
                        },
                        content: 'It will be for sure'
                    }
                ]
            }
        ]
    }
};