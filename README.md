# Diary

## 2026-02-01

- Updated error messages for invalid title, price, and movie length in MovieForm and AuditoriumForm.
- Enhanced BookMovieForm to include email validation.
- Introduced a new isValidEmail function for email validation.
- Modified BookingData model to include movieId and bookedSeats.
- Updated ManageAuditorium to remove unnecessary seats property in the edit function.
- Improved BookMovieSeat component to handle booking data and manage selected seats.
- Added CSS styles for disabled booking button state.
- Created new CSS file for BookMovieForm styling.
- Updated variables to include bookingsApiUrl for booking requests.

## 2026-01-29 - 2026-01-31

- Removed unused seat handling logic from AuditoriumForm.
- Enhanced BookMovieSeat to include a the start of a booking form and manage selected mode.
- Added movie length field in MovieForm and updated related validations.
- Implemented new schedule management features in ManageSchedule, including dropdowns for selecting movies and auditoriums.
- Created reusable Dropdown and DropdownSearch components for better UI interaction.
- Introduced new ScheduleTime component for displaying schedule times.
- Added validation for date and time inputs in AddNewSchedule.
- Created BookingData model for handling booking information.
- Implemented utility functions for date formatting and schedule grid positioning.

## 2026-01-25

- Enhance movie and auditorium management features.
- Updated db.json to include new auditorium structure and multiple movies with varied prices.
- Modified Admin component to support managing auditoriums and schedules.
- Added ManageAuditorium and ManageSchedule components for better organization.
- Introduced DataTable component for displaying and managing movies and auditoriums.
- Implemented AuditoriumForm for adding and editing auditoriums.
- Enhanced BookMovieSeat component to handle seat selection and pricing.
- Refactored fetch functions for cleaner API interactions.
- Added Schedule and its view components for managing movie schedules.

## 2026-01-14

- Added some basic styling for the admin section.
- Implemented Edit function in Admin manage movies.

## 2026-01-13

- Added show movies and add new movie feature in admin.
- Validation for movie name and price.
- Id generator.

## 2026-01-12

- Implement seat selection and auditorium model and styling.
- Added admin page.

## 2026-01-11

- Installed npm package json-server.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
