import React from "react";
import { useSelector, } from "react-redux";
import './Info.css'

export const Info = () => {
const {value} = useSelector(state => state.counter)
  return (
  <div>
    <h1 className="info">Imported from App "B"</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro illo accusamus maxime, atque quidem deleniti architecto officiis ad laudantium modi cupiditate ab et eaque nam a accusantium dolorum! Vero, suscipit?</p>
    <div className="info__logic">
        <div>Значения из store родительского приложения: {value}</div>
    </div>
    </div>
  )
};
export default Info;