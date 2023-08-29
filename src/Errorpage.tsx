import { useRouteError } from "react-router-dom"; // Import RouteError type

export default function ErrorPage() {
  const error = useRouteError() as any; // Typecast error as RouteError

  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
