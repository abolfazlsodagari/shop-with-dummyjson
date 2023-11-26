import { Suspense } from "react";

interface ILazyRoute {
  element: React.ReactNode;
}

const LazyRoute: React.FC<ILazyRoute> = ({ element }) => (
  <Suspense>{element}</Suspense>
);

export default LazyRoute;
