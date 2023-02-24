import React from "react";
import { useRouter } from "next/router";

const PortfolioProjectPage = () => {
  const router = useRouter(); //라우터 객체 반환

  console.log(router.pathname); //동적라우팅에 이용된 값
  console.log(router.query); //url내의 부호화된 구체적인 값을 엑세스 가능

  //백엔드 서버로 데이터 패칭하기 위해 id를 router.query.projectid로 불러올 수 있음

  return (
    <>
      <div>PortfolioProjectPage</div>
    </>
  );
};

export default PortfolioProjectPage;
