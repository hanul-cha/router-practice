import { Link } from "react-router-dom";

const RouterPropTest = () => {
  interface menuType {
    name :string
    price :string
  }

  const menu :menuType = {
    name: "간짜장",
    price: "5,000원",
  };

  return (
    <>
      <h2>test</h2>
      <Link to={{
        pathname: "/routerproptestresult",
        
      }}>데이터 날리지</Link>
    </>
  );
};

export default RouterPropTest;
