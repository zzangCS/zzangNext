const UserID = (props) => {
  return <div>{props.id}</div>;
};

export default UserID;

export async function getServerSideProps(context) {
  const { params } = context;

  const userId = params.uid;

  console.log(userId);
  return {
    props: {
      id: `user id ${userId}`
    },
  };
}
