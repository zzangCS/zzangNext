const UserID = () => {
  return <div>UserID</div>;
};

export default UserID;

export async function getServerSideProps(context) {
  const { params } = context;

  const userId = params.uid;
  return {
    props: {
      id: "userid-" + userId,
    },
  };
}
