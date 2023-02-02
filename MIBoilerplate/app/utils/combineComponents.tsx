import React, {ComponentProps, FC} from 'react';

export const combineComponents = (...components: FC[]): FC => {
  return components.reduce(
    (
      AccumulatedComponents: FC<{children: JSX.Element}>,
      CurrentComponent: FC<{children: JSX.Element}>
    ) => {
      return ({children}: ComponentProps<FC>): JSX.Element => {
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
