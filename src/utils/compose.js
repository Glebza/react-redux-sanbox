const compose = (...funcs) => (component)=>{
   return funcs.reduceRight(
       ( el,func) => func(el),component);
};

export default compose;