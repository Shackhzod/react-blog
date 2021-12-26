


import {Switch,Route,Link } from 'react-router-dom'
import ComentPage from "./Components/ComentComponent/ComenentPage";
import PostPage from "./Components/PostComponent/PostPage";
import TodoPage from "./Components/TodoComponent/TodoPage";
import UserPage from "./Components/UsersConmponent/UserPage";

function App() {

    return(
        <div className={'container-fluid'}>
            <div className="row">
                <div className="col-md-10 m-auto d-flex justify-content-around mt-5">
                  <Link to={'/coment'}> <button className={'btn btn-info'}> Coments</button> </Link>
                  <Link to={'/post'}> <button className={'btn btn-primary'}> Post</button> </Link>
                  <Link to={'/todo'}> <button className={'btn btn-warning'}> Todo</button> </Link>
                  <Link to={'/user'}> <button className={'btn btn-success'}> User</button> </Link>

                </div>
                <div className="col-md-12 my-5">
                    <Switch>
                        <Route path={'/coment'} component={ComentPage}/>
                        <Route path={'/post'} component={PostPage}/>
                        <Route path={'/todo'} component={TodoPage}/>
                        <Route path={'/user'} component={UserPage}/>
                    </Switch>
                </div>
                

            </div>
           
        </div>

    )
}
export default App