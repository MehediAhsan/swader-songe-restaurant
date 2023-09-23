import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex justify-center items-center flex-col gap-10 h-screen">
      <h1 className="font-bold text-3xl">Oops!</h1>
      <p className="text-lg font-semibold">Sorry, an unexpected error has occurred.</p>
      <p className="text-gray-600 italic">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}