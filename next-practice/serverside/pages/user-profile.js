const UserProfile = (props) => {
  //   const { username } = props;

  return <div>{props.username}</div>;
};

export default UserProfile;

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  console.log(req);
  console.log(res);

  return {
    props: {
      username: "jiwon",
    },
  };
}
