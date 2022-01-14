//EL MISMO EJERCICIO CON MAP, MÁS ABAJO ESTÁ EL OTRO MÉTODO
import "../styles/index.scss";
import "../styles//App.scss";
import { useState } from "react";

// Cada dato tiene que ir en variables estado, son datos y queremos guardarlos//// Siempre que tengamos checkbox vamos a usar un arrray

const App = () => {

  const [ingredientsToDisplay, setIngredientsToDisplay] = useState([
    'Macarrones', 
    'Patatas', 
    'Nueces', 
    'Huevos', 
    'Cebolla', 
    'Cerveza']);

  const [ingredientsList, setIngredientsList] = useState([]);

  const handleChangeCheckbox = ev => {
    const checked = ev.currentTarget.checked;
    const value = ev.currentTarget.value;
    if (checked){
      const selectedIngredients = [...ingredientsList, value];
      setIngredientsList(selectedIngredients)
    } else {
      const notRemovedIngredients = ingredientsList.filter(eachIngredient => eachIngredient !== value);
      setIngredientsList(notRemovedIngredients)
    }
  };

  const showMessage = () => {
    if (
    ingredientsList.includes('Cebolla') &&
    ingredientsList.includes('Huevos') && 
    ingredientsList.includes('Patatas') && 
    !ingredientsList.includes('Macarrones')  && 
    !ingredientsList.includes('Nueces')  && 
    !ingredientsList.includes('Cerveza')
    ){
      return "Eres una persona concebollista"
    } else {
      return "Eres un robot sin paladar"
    }
  }

  const handleClickReset = (ev) => {
    ev.preventDefault();
    setIngredientsList([]);
  };


 const htmlCheckboxes = ingredientsToDisplay.map( (eachIngredient, index) => {
  return <label key={index} htmlFor={eachIngredient}>
  <input
    type="checkbox"
    id={eachIngredient}
    name="ingredient"
    value={eachIngredient}
    checked={ingredientsList.includes(eachIngredient)}
    onChange={handleChangeCheckbox}
  />
  {eachIngredient}
</label>
});

  return (
    <div>
      <h1 className="title">
        Selecciona los ingredientes de la tortilla de patatas
      </h1>
      <form className="form" action="">
      {htmlCheckboxes}
      </form>
      <p>{showMessage()}</p>
      <button onClick={handleClickReset}>Reset</button>
    </div>
  );
};

export default App;

// import "../styles/index.scss";
// import "../styles//App.scss";
// import { useState } from "react";

// // Cada dato tiene que ir en variables estado, son datos y queremos guardarlos//// Siempre que tengamos checkbox vamos a usar un arrray

// const App = () => {

//   const [ingredientsList, setIngredientsList] = useState([]);

//   const handleChangeCheckbox = ev => {
//     const checked = ev.currentTarget.checked;
//     const value = ev.currentTarget.value;
//     if (checked){
//       const selectedIngredients = [...ingredientsList, value];
//       setIngredientsList(selectedIngredients)
//     } else {
//       const notRemovedIngredients = ingredientsList.filter(eachIngredient => eachIngredient !== value);
//       setIngredientsList(notRemovedIngredients)
//     }
//   };

//   const showMessage = () => {
//     if (
//     ingredientsList.includes('cebolla') &&
//     ingredientsList.includes('huevos') && 
//     ingredientsList.includes('patatas') && 
//     !ingredientsList.includes('macarrones')  && 
//     !ingredientsList.includes('nueces')  && 
//     !ingredientsList.includes('cerveza')
//     ){
//       return "Eres una persona concebollista"
//     } else {
//       return "Eres un robot sin paladar"
//     }
//   }

//   const handleClickReset = (ev) => {
//     ev.preventDefault();
//     setIngredientsList([]);
//   };

//   return (
//     <div>
//       <h1 className="title">
//         Selecciona los ingredientes de la tortilla de patatas
//       </h1>
//       <form className="form" action="">
//         <label htmlFor="macarrones">
//           <input
//             type="checkbox"
//             id="macarrones"
//             name="ingredient"
//             value="macarrones"
//             checked={ingredientsList.includes('macarrones')}
//             onChange={handleChangeCheckbox}
//           />
//           Macarrones
//         </label>
//         <label htmlFor="patatas">
//           <input
//             type="checkbox"
//             id="patatas"
//             name="ingredient"
//             value="patatas"
//             checked={ingredientsList.includes('patatas')}
//             onChange={handleChangeCheckbox}
//           />
//           Patatas
//         </label>
//         <label htmlFor="nueces">
//           <input
//             type="checkbox"
//             id="nueces"
//             name="ingredient"
//             value="nueces"
//             checked={ingredientsList.includes('nueces')}
//             onChange={handleChangeCheckbox}
//           />
//           Nueces
//         </label>
//         <label htmlFor="huevos">
//           <input
//             type="checkbox"
//             id="huevos"
//             name="ingredient"
//             value="huevos"
//             checked={ingredientsList.includes('huevos')}
//             onChange={handleChangeCheckbox}
//           />
//           Huevos
//         </label>
//         <label htmlFor="cebolla">
//           <input
//             type="checkbox"
//             id="cebolla"
//             name="ingredient"
//             value="cebolla"
//             checked={ingredientsList.includes('cebolla')}
//             onChange={handleChangeCheckbox}
//           />
//           Cebolla
//         </label>
//         <label htmlFor="cerveza">
//           <input
//             type="checkbox"
//             id="cerveza"
//             name="ingredient"
//             value="cerveza"
//             checked={ingredientsList.includes('cerveza')}
//             onChange={handleChangeCheckbox}
//           />
//           Cerveza
//         </label>
//       </form>
//       <p>{showMessage()}</p>
//       <button onClick={handleClickReset}>Reset</button>
//     </div>
//   );
// };

// export default App;