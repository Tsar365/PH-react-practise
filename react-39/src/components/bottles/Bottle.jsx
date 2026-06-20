import { use } from 'react';

const Bottle = ({bottlesPromise}) => {
  const bottles=use(bottlesPromise);
  console.log(bottles);
  return (
    <div>
      
    </div>
  );
};

export default Bottle;