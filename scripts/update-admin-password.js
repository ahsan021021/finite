const { PrismaClient } = require('../lib/generated/prisma');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function updateAdminPassword() {
  try {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    
    const updatedAdmin = await prisma.admin.update({
      where: {
        email: 'admin@example.com'
      },
      data: {
        password: hashedPassword
      }
    });

    console.log('Admin password updated successfully:', updatedAdmin.email);
  } catch (error) {
    console.error('Error updating admin password:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updateAdminPassword(); 