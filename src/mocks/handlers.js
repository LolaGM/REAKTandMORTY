// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
  // Handles a POST /login request
    //rest.post('/login', null),

  // Handles a GET /user request
    rest.get("https://rickandmortyapi.com/api/character", (req,res,ctx)=>{
        return res(
            ctx.json({
                "results":[
                    {
                        "id": 1,
                        "name": "Rick Sanchez",
                        "status": "Alive",
                        "species": "Human",
                        "type": "",
                        "gender": "Male",
                        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                        "url": "https://rickandmortyapi.com/api/character/1",
                        "created": "2017-11-04T18:48:46.250Z"
                    },
                ]
            })
        )
    })
]

