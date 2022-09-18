import prisma from '../../prisma/client';

export async function createProduct(product) {
  const { title, value, description } = product;
  try {
    await prisma.produto.create({
      data: {
        title,
        value: Number(value),
        description,
      },
    });
  } catch (error) {
    console.error('Resultado da query', error);
  }
}

export async function updateProduct(id, data) {
  try {
    await prisma.produto.update({
      where: {
        id: id
      },
      data
    })
    return data
  } catch (error) {
    console.error(error);
  }
}

export async function deleteProduct(id) {
  try {
    await prisma.produto.delete({
      where: {
        id
      }
    })

    return true;
  } catch (error) {
    console.error(error);
  }
}

export async function getProducts() {
  try {
    const result = await prisma.produto.findMany();
    console.log(result);
    if (result.length > 0) {
      return result;
    }
    console.log('Vazio');
  } catch (error) {
    console.error(error);
  }
}
export async function getProduct(id) {
  try {
    const result = await prisma.produto.findUnique({
      where: {
        id
      }
    })
    if (result) {
      return result;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
  }
}
