import { configureStore} from "@reduxjs/toolkit";
import post from './redux/PostReducer'
import coment from './redux/ComentReducer'
import todo from './redux/TodoReducer'
import user from './redux/UserReducer'
import api from "./middleware/apiCals";
 export default configureStore({
    reducer:{
      post,

     coment,

        todo,

        user
    },
    middleware:[
      api
    ]

})
