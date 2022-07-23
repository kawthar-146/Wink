import { React, useEffect } from "react";
import Categories from "../Components/Categories";
import HeaderSliderb from "../Components/HeaderSliderb";

function Age2(props) {
  useEffect(() => {
    props.setBackgroundPAge(true);
  }, []);
  return (
    
    <>
        <HeaderSliderb />
        <Categories />
    </>
  );
}

export default Age2;
