import React from "react";
import { useRouter } from "next/router";
const ClientProjectsPage = () => {
  const router = useRouter();
  function loadProjectHandler() {
    //load data
    router.replace({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projecta" },
    });
  }
  return (
    <>
      <div>ClientProjectsPage</div>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </>
  );
};

export default ClientProjectsPage;
