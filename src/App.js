// @ts-nocheck
import React from "react";


import "./Index.css"
import Card from "./components/props/Card";
import Card1 from "./components/class_components/Card1";
import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import Bootstrap from "./components/bootstrap_react/Bootstrap";
import State_class from "./components/State_Class/State_class";
import Index from "./components/Login_logout/Index";
import Event from "./components/EVENT_HANBLER/Event";
import Binding from "./components/EVENT_BINDING/Binding";
import Index1 from "./components/HOOKS_USESTATE/Index";
import Index2 from "./components/HOOKS_USESTATE/index2";
import Previous from "./components/PREVIOUS_STATE/Previous"
import Propagation from "./components/STOP_PROPAGATION/Propagation";
import Form from "./components/FORM/Form";
import Child from "./components/SATET_LIFTING/Child";
import Todo from "./components/SATET_LIFTING/Todo";
import Home from "./components/SATET_LIFTING/SATET_LIFTING/Home";
import Singup from "./components/FORMIK/Singup";
import SingupFormShortFormik from "./components/FORMIK/SingupFormShortFormik";
import SingupYup from "./components/YUP/SingupFormYup";
import Toggle from "./components/TOGGLE/Toggle";
import FAQS from "./components/FAQ_TOGGLE/FAQS";
import UseEffectExmple from "./components/USE_EFFECT_HOOK/UseEffectExmple";
import DataFetch from "./components/USE_EFFECT_HOOK/DataFetch";
import CustomHook from "./components/CUSTOM_HOOKS/CustomHook";
import Toast from "./components/ToastMessage/Toast";
import DynamicSytle from "./components/DYNAMIC_STYLING/DynamicSytle";
import Users from "./components/PropType/Users";
import LifeCycle from "./components/LIFE_CYCLE/LifeCycle";
import UserForm from "./components/Ref/UserForm";
import UseRefForm from "./components/Ref/UseRefForm";
import UseReducer from "./components/UseReducer/UseReducer";
import BooksDataShort from "./components/UseReducer/UseReducerShort";
import Component1 from "./components/PropDrilling/Component1";
import Parent from "./components/memo/Parent";


function App() {
  const data = "this is a child";
  const handleChildData = (childData) => {
    console.log(childData)
  }
  return (
    <div>
      <Card name="card" desc="this is card"/>
      <Card1 name="Card1"/>
      <button><FaFacebookF /></button>
      <FaFacebookF />
      <FaYoutube />
      <Bootstrap />
      <State_class />
      <Index />
      <Event />
      <Binding />
      <Index1 />
      <Index2 />
      <Previous />
      <Propagation />
      <Form />
      <Child data={data} onData={handleChildData}/>
      <Todo />
      <Home />
      <Singup />
      <SingupFormShortFormik />
      <SingupYup />
      <Toggle />
      <FAQS />
      <UseEffectExmple />
      <DataFetch />
      <CustomHook />
      <Toast />
      <DynamicSytle />
      <Users />
      <LifeCycle />
      <UserForm />
      <UseRefForm />
      <UseReducer />
      <BooksDataShort />
      <Component1 />
      <Parent />
    </div>
  )
}

export default App;
