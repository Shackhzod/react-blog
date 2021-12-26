import axios from 'axios'
 const api =({dispatch}) => (next) => (action) => {
    console.log(action)
    if(action.type!=='api/apicalls'){
   next(action)
       return
    }

    next(action)

    const {url,method,data,successtype} = action.payload

    axios({
       baseURL:'https://jsonplaceholder.typicode.com',
       url,
       method,
       data
    }).then(res=>{
            dispatch({
                type:successtype,
                payload:res.data

            })
        }).catch(err=>{
            alert('error')
    })




 }
export default api