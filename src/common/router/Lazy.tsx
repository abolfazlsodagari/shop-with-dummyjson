import { Suspense } from "react";

interface ILazyRoute {
  component: React.ReactNode;
}

const LazyRoute: React.FC<ILazyRoute> = ({ component }) => (
  <Suspense>{component}</Suspense>
);

export default LazyRoute;
