const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedDatabase() {
  const categories = [
    { name: "Anel", imageUrl: "https://via.placeholder.com/150?text=Anel" },
    {
      name: "Par de Aliança",
      imageUrl: "https://via.placeholder.com/150?text=Par+de+Aliança",
    },
    { name: "Cordão", imageUrl: "https://via.placeholder.com/150?text=Cordão" },
    { name: "Brinco", imageUrl: "https://via.placeholder.com/150?text=Brinco" },
    {
      name: "Aliança",
      imageUrl: "https://via.placeholder.com/150?text=Aliança",
    },
    {
      name: "Pingentes",
      imageUrl: "https://via.placeholder.com/150?text=Pingentes",
    },
  ];

  const products = {
    Anel: [
      {
        name: "Anel de Ouro",
        imageUrl: "https://via.placeholder.com/150?text=Anel+de+Ouro",
      },
      {
        name: "Anel de Prata 950",
        imageUrl: "https://via.placeholder.com/150?text=Anel+de+Prata+950",
      },
      {
        name: "Anel de Rubi",
        imageUrl: "https://via.placeholder.com/150?text=Anel+de+Rubi",
      },
      {
        name: "Anel de Diamante",
        imageUrl: "https://via.placeholder.com/150?text=Anel+de+Diamante",
      },
    ],
    "Par de Aliança": [
      {
        name: "Aliança de Ouro",
        imageUrl: "https://via.placeholder.com/150?text=Aliança+de+Ouro",
      },
      {
        name: "Aliança de Prata",
        imageUrl: "https://via.placeholder.com/150?text=Aliança+de+Prata",
      },
      {
        name: "Aliança de Rubi",
        imageUrl: "https://via.placeholder.com/150?text=Aliança+de+Rubi",
      },
      {
        name: "Aliança de Diamante",
        imageUrl: "https://via.placeholder.com/150?text=Aliança+de+Diamante",
      },
    ],
    Cordão: [
      {
        name: "Cordão de Rubi",
        imageUrl: "https://via.placeholder.com/150?text=Cordão+de+Rubi",
      },
      {
        name: "Cordão de Diamante",
        imageUrl: "https://via.placeholder.com/150?text=Cordão+de+Diamante",
      },
      {
        name: "Cordão de Ouro",
        imageUrl: "https://via.placeholder.com/150?text=Cordão+de+Ouro",
      },
      {
        name: "Cordão de Prata",
        imageUrl: "https://via.placeholder.com/150?text=Cordão+de+Prata",
      },
    ],
    Brinco: [
      {
        name: "Brinco de Pérola",
        imageUrl: "https://via.placeholder.com/150?text=Brinco+de+Pérola",
      },
      {
        name: "Brinco de Ouro",
        imageUrl: "https://via.placeholder.com/150?text=Brinco+de+Ouro",
      },
      {
        name: "Brinco de Diamante",
        imageUrl: "https://via.placeholder.com/150?text=Brinco+de+Diamante",
      },
      {
        name: "Brinco de Rubi",
        imageUrl: "https://via.placeholder.com/150?text=Brinco+de+Rubi",
      },
    ],
    Aliança: [
      {
        name: "Aliança Simples",
        imageUrl: "https://via.placeholder.com/150?text=Aliança+Simples",
      },
      {
        name: "Aliança com Diamante",
        imageUrl: "https://via.placeholder.com/150?text=Aliança+com+Diamante",
      },
      {
        name: "Aliança com Rubi",
        imageUrl: "https://via.placeholder.com/150?text=Aliança+com+Rubi",
      },
      {
        name: "Aliança com Pérola",
        imageUrl: "https://via.placeholder.com/150?text=Aliança+com+Pérola",
      },
    ],
    Pingentes: [
      {
        name: "Pingente de Ouro",
        imageUrl: "https://via.placeholder.com/150?text=Pingente+de+Ouro",
      },
      {
        name: "Pingente de Prata",
        imageUrl: "https://via.placeholder.com/150?text=Pingente+de+Prata",
      },
      {
        name: "Pingente de Diamante",
        imageUrl: "https://via.placeholder.com/150?text=Pingente+de+Diamante",
      },
      {
        name: "Pingente de Rubi",
        imageUrl: "https://via.placeholder.com/150?text=Pingente+de+Rubi",
      },
    ],
  };

  for (const category of categories) {
    const createdCategory = await prisma.category.create({
      data: {
        name: category.name,
        imageUrl: category.imageUrl, // Adicionar URL da imagem da categoria
      },
    });

    for (const product of products[category.name as keyof typeof products]) {
      await prisma.Product.create({
        data: {
          name: product.name,
          price: Math.random() * (500 - 100) + 100, // Preço aleatório entre 100 e 500
          Description: `Descrição do produto ${product.name}`,
          imageUrl: product.imageUrl, // Adicionar URL da imagem do produto
          category: {
            connect: { id: createdCategory.id },
          },
        },
      });
    }
  }

  console.log("Seeding completed!");
}

seedDatabase()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
