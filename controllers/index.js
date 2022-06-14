const controller = {
   
    home: function(req,res) {

        const indexData = {
          
          titulo: "Rick and Morty APP",
          caracteristicas: [
            "Repaso git",
            "Repaso flex",
            "Llamar el API de Rick and Morty",
          ]
      
        };  
      
        res.render('home.ejs', indexData );
      
      }
};


module.exports = controller;