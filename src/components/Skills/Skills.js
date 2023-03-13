import React from 'react'
import { Wrapper } from './SkillsStyles';
import $ from "jquery"

const Skills = () => {
  $(document).ready(function () {
    animateDiv(".a");
    animateDiv(".b");
    animateDiv(".c");
    animateDiv(".d");
    animateDiv(".e");
    animateDiv(".f");
    animateDiv(".g");
    animateDiv(".h");
    animateDiv(".i");
    animateDiv(".j");
    animateDiv(".k");
  });

  const makeNewPosition=()=> {
    // Get viewport dimensions (remove the dimension of the div)
    const h = $(window).height() - 50;
    const w = $(window).width() - 50;

    const nh = Math.floor(Math.random() * h);
    const nw = Math.floor(Math.random() * w);

    return [nh, nw];
  }

  const animateDiv=(myclass)=>{
    const newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 5000, function () {
      animateDiv(myclass);
    });
  }
  

  return (
    <Wrapper id="skills" style={{ fontSize: "3rem" }}>
      {/*}  <div class="a"></div>
      <div class="b"></div>
      <div class="c"></div>
      <div class="d"></div>
      <div class="e"></div>
      <div class="f"></div>
      <div class="g"></div>
      <div class="h"></div>
      <div class="i"></div>
      <div class="j"></div>
  <div class="k"></div>*/}
    </Wrapper>
  );
}

export default Skills;