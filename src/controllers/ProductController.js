import { createProduct, getProducts, getProduct, updateProduct, deleteProduct } from '../models/ProductModel.js';

class ProductController {
  async store(req, res) {
    // Lógica cabulosa

    const data = req.body;
    console.log('NEW', data);
    createProduct(data);
    res.status(201);
    res.json(data)
  }
  async updateProduct(req, res) {
    const { id } = req.params
    const { value, title, description } = req.body


    try {
      const result = await getProduct(Number(id))
      let modelo = {

        value: Number(value),
        title: title,
        description: description
      }
      console.log("ACHOUUUUUU MODELo", modelo);

      if (result) {
        const data = await updateProduct(Number(id), modelo)
        console.log("ACHOUUUUUU 2", data);
        res.status(200)
        res.json({ ...data, id: id })

      } else {
        res.status(404)
        res.send("Produto não encontrado")
      }
    } catch (error) {
      console.log(error);
    }

  }
  async deleteProductById(req, res) {
    const { id } = req.params
    try {
      const result = await getProduct(Number(1))
      if (result) {
        const finish = await deleteProduct(Number(id))
        if (finish) {
          res.status(200).send("Produto deletado com sucesso!")
        } else {
          res.status(500).send("Ocorreu um erro tente novamente mais tarde !")

        }
      } else {
        res.status(404)
        res.send("Produto não encontrado")
      }
    } catch (error) {

    }

  }
  // async getAll(req, res) {
  //   try {
  //     const result = await getProducts();
  //     console.log("RESULT no getALL", result);
  //     res.json(result);
  //   } catch (error) {
  //     res.status(500);
  //     console.error(error);
  //   }
  // }
  getAll(req, res) {

    getProducts().then(products => {
      res.status(200)
      res.json(products);
      console.log("RESULTADO", products);
    }).catch(error => {
      res.status(500)
      res.json(error)
    })
    console.log("DPS");

  }
  async getProductById(req, res) {
    // PEGAR OS PARAMETROS E DESESTRUTURA TIRANDO DELE O ID NO QUAL SERÁ UTILIZADO NA BUSCA
    const { id } = req.params;
    // EM SEGUIDA CHAMA A FUNÇÃO DE BUSCAR O PRODUTO PASSANDO O ID
    const produto = await getProduct(Number(id))
    // VERIFICA SE ACHOU O PRODUTO
    if (produto.length < 1) {
      res.status(404);
      res.send("Produto não encontrado")
    } else {
      res.status(200).json(produto);
    }
  }
}
export default ProductController;
