const router = require('express').Router();
// const { Category, Product } = require('../../models');
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const data = await Category.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(data);
  } catch(err){
    res.status(500).json(err);
  }  
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const data = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    });
    if (data === null){
      res.status(400).json("Invalid ID");
    }else {
      res.status(200).json(data);
    }    
  }catch (err){
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  console.log(req.body);
  try {
    const data = await Category.create(req.body);

    res.status(200).json(data);
  }catch (err) {
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
    const data = await Category.update(req.body, { where: {id: req.params.id}});
    res.status(200).json(data);
  }catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
