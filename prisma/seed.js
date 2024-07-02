const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdUsers = await prisma.user.createMany({
        data: [
            { username: 'alice', email : 'Alice@gmail.com'},
            { username: 'Farshad', email : 'Farshad@gmail.com'},
            { username: 'Azam', email : 'azam@gmail.com'}
        ]
    });

    // Add your code here

    const createdProfile = await prisma.profile.createMany({
        data :[
            {   picture : 'AlicePicture', bio : 'I like to paint and travel.',
                userId:1
            },
            {   picture : 'FarshadPic', bio : 'Web Developer',
                userId : 2
            },
            {   picture : 'AzamPic', bio : 'Travel lover',
                userId : 3
            }
        ]
    })

    const createdPost = await prisma.post.createMany({
        data : [
            {   userId: 1,
                title : 'Lies of P',
                content : 'A really hard game .'
            },
            {   userId : 1,
                title : 'Fifa 2024',
                content : 'The game Added to game pass.'
            },
            {
                userId : 2,
                title : 'Lies of P',
                content : 'A really hard game .'
            },
            {
                userId : 2,
                title : 'Two of Us',
                content : 'An easy Game .'
            },
            {
                userId : 3,
                title : 'Paris',
                content : 'Next year will go there!'
            },
            {
                userId : 3,
                title : 'Githorn',
                content : 'Nice place to go'
            }
        ]
    })

    const createComment = await prisma.comment.createMany({
        data : [
            {
                postId : 1,
                userId : 1,
                content : 'Good Game'
            },
            // {
            //     postId : 2,
            //     userId : 1,
            //     content : 'Good Game'
            // },
            {
                postId : 3,
                userId : 2,
                content : 'Good Game'
            },
            // {
            //     postId : 1,
            //     userId : 1,
            //     content : 'Good Game'
            // },
            // {
            //     postId : 1,
            //     userId : 1,
            //     content : 'Good Game'
            // },
            {
                postId : 6,
                userId : 3,
                content : 'Good Game'
            }
        ]
    })


    
    console.log(`${createdUsers.count} users created`, createdUsers);
    
    console.log(`${createdProfile.count} profile created`, createdProfile);

    console.log(`${createdPost.count} posts created`, createdPost);

    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })