# Wunder Mobility App


## README.md

### Possible Optimizations

- Performance: Analyze the application's performance and optimize where necessary. You can use tools like Lighthouse to identify performance bottlenecks and improve the loading speed.
- Code Splitting: Implement code splitting to load only the necessary JavaScript for different parts of the application, reducing initial load times.
- Caching: Implement browser caching and server-side caching for frequently requested resources to improve load times and reduce server load.
- Lazy Loading: Consider implementing lazy loading for modules, components, and assets to improve initial page load times.
- Reducing Network Requests: Minimize the number of HTTP requests by bundling assets, utilizing sprites, and optimizing images.

### Things That Could Be Done Better

- Error Handling: Implement better error handling, including user-friendly error messages and proper error logging.
- Testing: Improve test coverage and add more unit tests, integration tests, and end-to-end tests to ensure code quality and stability.
- README/Documentation: Enhance README/documentation, including inline code comments and clear instructions for setup and usage.
- User Experience (UX): Conduct usability testing and gather user feedback to make improvements in the user interface and user experience.

### Used Technologies

- Nodejs 16
- rxjs                            7.8.1
- typescript                      5.1.6
- Angular CLI: 16.2.6
- Node: 18.18.0
- bootstrap 5
- NgRx 16

### Problems Faced

- The problem that i faced was the cors error.

### Project Structure

- created reusable component and shared component, which can be used in future.
- Mention how different modules, components, and services are structured and organized within the project.
- setup interceptor to handle the http requestß
