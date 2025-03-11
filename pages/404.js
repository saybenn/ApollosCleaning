export default function Custom404() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="text-lg mt-2">
        The page you are looking for doesn’t exist.
      </p>
    </div>
  );
}
