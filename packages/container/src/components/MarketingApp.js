import {mount} from 'marketing/MarketingApp';
import React, {useEffect, useRef} from 'react';

//reusable with any framework
export default () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);
  });
  //create reference to a html element, in this element we will render our MarketingApp into
  return <div ref={ref}/>
}
