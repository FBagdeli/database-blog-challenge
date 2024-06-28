const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdUsers = await prisma.user.createMany({
        data: [
            { username: 'alice', email : 'Alice@gmail.com'},
            { username: 'Farshad', email : 'Farshad@gmail.com'}
        ]
    });

    // Add your code here

    const createdProfile = await prisma.profile.createMany({
        data :[
            {picture : 'AlicePicture', bio : 'I like to paint and travel.'},
            {picture : 'FarshadPic', bio : 'Web Developer'}
        ]
    })

    const createdPost = await prisma.post.createMany({
        data : [
            {
                title : 'Lies of P',
                content : 'A really hard game .'
            },
            {
                title : 'Fifa 2024',
                content : 'The game Added to game pass.'
            },
            {
                title : 'Lies of P',
                content : 'A really hard game .'
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