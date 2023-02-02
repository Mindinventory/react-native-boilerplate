import React, {ComponentProps, FC, PropsWithChildren} from 'react';

export const combineComponents = (
  ...components: React.JSXElementConstructor<React.PropsWithChildren>[]
) => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return ({
        children,
      }: ComponentProps<FC<PropsWithChildren>>): JSX.Element => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({children}) => <>{children}</>
  );
};
