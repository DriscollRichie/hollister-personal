module.exports = {
   getProducts: (req, res) => {
      const db = req.app.get('db')

      db.get_products({ gender: req.params.gender}).then( data => {
         console.log(data)
         res.status(200).send(data)
      }).catch( err => {
         console.error('Massive failed me')
         res.status(500).send(err)
      })
   }
}