---
sidebar_position: 2
---

# Services(API) handling

Centralized API Handling with DTOs in React Native

This guide outlines a robust approach to managing API interactions in your React Native application, leveraging Data Transfer Objects (DTOs) for streamlined data management and a cleaner separation of concerns.

### Benefits of API Mappers with DTOs

- #### Improved Maintainability:

  Centralized API handling reduces code duplication and simplifies updates when API endpoints or responses change.

- #### Type Safety:

  DTOs enforce data structure and validation, enhancing code reliability and developer experience.

- #### Decoupling UI from API:

  DTOs decouple your UI from the specific API response format, allowing for flexibility in data presentation.

- #### Error Handling:
  A dedicated API handler can centralize error handling mechanisms for a consistent approach.

### Setting Up the API Handler:

    Config your api in `src/services/apiHandler.ts` in this file set your all api handling request `get | post | put | delete` or any methods in it. Set your api base url in axios instances. Handle response status as per required.

    - #### Api Mapper with DTOs:
        API Mapper with DTOs is a utility that simplifies the process of making API requests and mapping the response data to Data Transfer Objects (DTOs) in a React Native application.

### Usage:

    Declare

    1. Create DTOs Create the DTOs (Data Transfer Objects) that represent the structure of the API response data. Each DTO should define the properties that match the response data fields.

        For example, let's create a UserDTO to represent user data:

        ```typescript
        export interface UserResponseDTO {
            page: number;
            per_page: number;
            total: number;
            total_pages: number;
            data: DatumDTO[];
            support: SupportDTO;
        }

        export interface DatumDTO {
            id: number;
            email: string;
            first_name: string;
            last_name: string;
            avatar: string;
        }

        export interface SupportDTO {
            url: string;
            text: string;
        }
        ```

    2. Define API Endpoints API endpoints in your React Native application in `src/services/appServicesEndPoints.ts`. These endpoints should include the URL, HTTP method, and any required headers or parameters.

    3. Call api as per serviceAdapter methods in `src/services/appServices.ts`. Create a function in class:

        ```typescript
        getNews = async (): Promise<NewsResult[]> => {
            return new Promise((resolve, reject) => {
            serviceAdapter<NewsResponseDTO, undefined>(
                API_METHODS.GET,
                ServicesEndPoints.NEWS
            )
                .then((res) => {
                resolve(new getNewsListResponseAdapter().service(res));
                })
                .catch((error) => {
                reject(error);
                });
            });
        };
        ```

    4. Map your response in `src/services/commercial/adapters/response` with your api name like for newList `getNewsListResponseAdapter.ts`.
    5. Call your api mapper DTOs to in services as show in 3rd point.
