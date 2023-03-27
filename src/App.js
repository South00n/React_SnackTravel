import {Fragment} from "react";
import  {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/main/Home";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import FoodList from "./components/food/FoodList";
import EventList from "./components/food/EventList";
import RecipeList from "./components/recipe/RecipeList";
import FoodDetail from "./components/food/FoodDetail";
import FoodFind from "./components/food/FoodFind";
import NewsList from "./components/news/NewsList";
import SnackList from "./components/snack/SnackList";
import SnackDetail from "./components/snack/SnackDetail";
import SnackFind from "./components/snack/SnackFind";
import SnackList2 from "./components/snack/SnackList2";
import SnackList3 from "./components/snack/SnackList3";

function App() {
  return (
      <Router>
        <Fragment>
          <Header/>
          <Routes>
            <Route exact path={"/"} element={<Home/>}/>
            <Route path={"/jeju/food_list"} element={<FoodList/>}/>
            <Route path={"/jeju/event_list"} element={<EventList/>}/>
            <Route path={"/recipe/recipe_list"} element={<RecipeList/>}/>
            <Route path={"/jeju/food_detail/:no"} element={<FoodDetail/>}/>
            <Route path={"/jeju/food_find"} element={<FoodFind/>}/>
            <Route path={"/news/news_list"} element={<NewsList/>}/>
            <Route path={"/snack/snack_list"} element={<SnackList/>}/>
            <Route path={"/snack/snack2_list"} element={<SnackList2/>}/>
            <Route path={"/snack/snack3_list"} element={<SnackList3/>}/>
            <Route path={"/snack/snack_detail/:no"} element={<SnackDetail/>}/>
            <Route path={"/snack/snack_find"} element={<SnackFind/>}/>
          </Routes>
          <Footer/>
        </Fragment>
      </Router>
  );
}

export default App;
