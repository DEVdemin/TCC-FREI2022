import { Router } from "express";
import { BuscarPorIDFavoritos } from "../Repository/FavoritosRepository.js";

const server = Router();

server.get('/api/favoritos/produto/:id', async (req, resp) =>{
    try
    {
        const id = Number(req.params.id);
        const resposta = await BuscarPorIDFavoritos(id);
  
        if(!resposta)
          resp.status(404).send([]);
        else
          resp.send(resposta);
    }
  
    catch(err)
    {
        resp.status(400).send({
            erro: err.message
        })
    }
  })

export default server;