import Login from "./Login/page";
import Register from "./Register/page";
import Profile from "./Profile/page";

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-2xl my-5">NestJS Application</h1>
      <p className="text-center">
        I am a web developer and learning web development on base of awesome
        framework NestJS. This framework is of JavaScript.{" "}
      </p>
      {/* below is calling components in this home page */}
      <Login />
      <Register />
      <Profile />
    </div>
  );
}
