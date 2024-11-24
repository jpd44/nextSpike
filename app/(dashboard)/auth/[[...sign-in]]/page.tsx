const SignInPage = ({ params }: { params: { "sign-in": string[] } }) => {
  console.log(params["sign-in"][0]);
  return <div>
    <h1>Signin Page</h1>
    {params["sign-in"][0]}

  </div>
};
export default SignInPage;
