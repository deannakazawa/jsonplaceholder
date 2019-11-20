import React from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";

import RestAPI from "./Components/RestAPI";
import PostDetail from "./Components/PostDetail";
import AddNewPost from "./Components/AddNewPost";


function App() {
  return (
    <BrowserRouter>
    <Switch>

      <Route exact path='/rest-api'>
      <RestAPI/>
      </Route>

      <Route exact path='/post-detail/:id'>
      <PostDetail/>
      </Route>


      <Route exact path='/add-new-post/'>
      <AddNewPost/>
      </Route>

      </Switch>
      </BrowserRouter>

  );
}

export default App;
