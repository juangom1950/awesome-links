import { PrismaClient } from '@prisma/client';
import { links } from '../data/links';

const prisma = new PrismaClient();

async function main() {
  // Create user
  await prisma.user.create({
    // Ctrl + Space we can se what data we can pass to the database
    data: {
      email: 'testemail@gmail.com',
      role:'ADMIN'
    }
  })

  // Populate the links
  await prisma.link.createMany({
    data: links
  })
}

main()
  .catch((e => {
    console.error(e);
    process.exit(1);
  }))
  .finally(async() => {
    // Stops Prisma Query engine
    await prisma.$disconnect();
  })