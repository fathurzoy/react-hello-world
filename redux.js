const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  value: 0,
  age: 17,
};

//!reducer
//suatu fungsi yg mana store adalah sbuah value yg bisa diupdate oleh reducer
const rootReducer = (state = initialState, action) => {
  // console.log(action);
  // //!if else
  // if (action.type === "ADD_AGE") {
  //   return {
  //     ...state,
  //     age: state.age + 1,
  //   };
  // }
  // if (action.type === "CHANGE_VALUE") {
  //   return {
  //     ...state,
  //     value: state.value + action.newValue,
  //   };
  // }
  // return state;

  //!switch case
  switch (action.type) {
    case "ADD_AGE":
      return {
        ...state,
        age: state.age + 1,
      };
    case "CHANGE_VALUE":
      return {
        ...state,
        value: state.value + action.newValue,
      };
    default:
      return state;
  }
};

//!store
//sebuah wadah besar yg menyimpan value secara global
const store = createStore(rootReducer);
console.log(store.getState());

//!subscription //setiap kali ada perubahan di store akan terpanggil
//proses pemanggilan store yg kita perlukan
store.subscribe(() => {
  console.log("store change: ", store.getState());
});

//!dispatching action
//proses pemanggilan fungsi dari reducer, reducer tidak akan bekerja ketika tidak dipanggil
store.dispatch({ type: "ADD_AGE" });
store.dispatch({ type: "CHANGE_VALUE", newValue: 12 });
console.log(store.getState());
