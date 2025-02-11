import { Link } from "react-router-dom";
import NotFoundImage from "../assets/404.svg";

const ErrorPage = () => {
  return (
    <div className="bg-slate-950 flex flex-col items-center justify-center h-screen gap-10">
      <img className="w-[500px]" src={NotFoundImage} />
      <div className="flex flex-col items-center gap-6">
        <h3 className="font-mono text-2xl text-slate-200 font-bold text-center leading-[130%]">
          The page you are looking for does't exit
        </h3>
        <Link
          className="px-2 py-2 text-white rounded bg-blue-500 hover:bg-blue-600 duration-200"
          to="/"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
