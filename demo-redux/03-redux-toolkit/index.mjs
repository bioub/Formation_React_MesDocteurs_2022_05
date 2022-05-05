import App from "./components/App.mjs";
import Hello from "./components/Hello.mjs";
import MultiStateButton from "./components/MultiStateButton.mjs";
import Select from "./components/Select.mjs";
import Counter from "./components/Counter.mjs";
import rtk from "@reduxjs/toolkit";
import { reducer } from "./reducers.mjs";

const store = rtk.configureStore({
  reducer: reducer
});

const app = new App(store);
const counter = new Counter(store);
const select = new Select(store);
const msb = new MultiStateButton(store);
const hello = new Hello(store);

app.render(counter, select, msb, hello);

store.subscribe(() => {
  app.render(counter, select, msb, hello);
});


// simule des clicks
counter.click();
counter.click();
counter.click();

select.click();
msb.click();