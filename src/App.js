import React, {useState, useEffect} from "react";
import {Route, Link, Switch} from 'react-router-dom';
import * as yup from 'yup';
import schema from './validation/schema';
import axios from 'axios';
import Home from "./Components/Home";
import Pizza from "./Components/Pizza";



const App = () => {

  const initialFormValues = (
    {
        id:
        name: "",
        size: "",
        cheese: false,
        pepperoni: false,
        mushroom: false,
        bacon: false,
        chicken: false,
        instructions: false,
    }
  )

  const initialFormErrors = {
    name: "",
    size: "",
    cheese: "",
    pepperoni: "",
    mushroom: "",
    bacon: "",
    chicken: "",
    instructions: "",
  }

  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [pizzaOrder, setPizzaOrder] = useState();


  const postNewPizzaOrder = newPizzaOrder => {

    axios.post('https://reqres.in/api/users', newPizzaOrder)
    .then((res) => {
      console.log(res)
      console.log('form submitted')
    })
    .catch(err => console.log("ERROR IS", err))

  }

  const inputChange = (name, value) => {

    yup.reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErrors({
        ...formErrors,
        [name]: ''
      })
    })
    .catch(err => {
      console.log(err.message)
      setFormErrors({
        ...formErrors,
        [name]: err.message
      })
    })
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      cheese: formValues.agreeTerms,
      pepperoni: formValues.agreeTerms,
      mushroom: formValues.agreeTerms,
      bacon: formValues.agreeTerms,
      chicken: formValues.agreeTerms,
      instructions: formValues.instructions.trim(),
    }

    postNewPizzaOrder(newPizza)
    setPizzaOrder([pizzaOrder, newPizza]);
    setFormValues({
      name: "",
      size: "",
      cheese: false,
      pepperoni: false,
      mushroom: false,
      bacon: false,
      chicken: false,
      instructions: ""})
  }

  useEffect(() => {
  }, [formErrors])


  return (
    <div>
      <nav>
        <h1>Lambda Eats</h1>
        <Link to="/">Home</Link>
        <Link to="/pizza">Order Pizza</Link>
      </nav>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/pizza' render={() => (
          <Pizza change={inputChange} values={formValues} errors={formErrors} submit={formSubmit}/>
        )} />
      </Switch>
    </div>
  );
};
export default App;
