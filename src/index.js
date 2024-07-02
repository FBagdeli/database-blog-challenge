const { Prisma } = require("@prisma/client")
const prisma = require("./db.js")

async function main() {


  const findUsers = await prisma.user.findMany()

  const findPost_userId2 = await prisma.post.findMany({
    where :{
      user :{
        id : 2
      }
    }
  })

  const findUserId1WithProfile = await prisma.user.findFirst({
    where : {
      id : 1
    },
    include : {
      profile : true
    }
  })

  const updatePost1 = await prisma.post.update({
    where : {
      id : 1
    },
    data : {
      content : 'A rainy summer!'
    }
  })
  
  // - Delete the post with ID 3
  try {
    await prisma.comment.deleteMany({
      where : { postId : 3}
    })
    const deletPostId3 = await prisma.post.delete({
      where : {
        id : 3
      }
    })
    console.log(deletPostId3)
  } catch (error) {
    if(error instanceof Prisma.PrismaClientKnownRequestError) {
      console.log({ error : error})
    }
  }
}


main()
