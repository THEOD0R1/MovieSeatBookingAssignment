export const moviesApiUrl = `${import.meta.env.VITE_API_URL}/movies`;
export const auditoriumsApiUrl = `${import.meta.env.VITE_API_URL}/auditoriums`;
//Admin modes
export const adminModeSelect = "selectMode";
//Movie management modes
export const modeViewMovies = "viewMovies";
export const modeEditMovie = "editMovie";
//Auditorium management modes
export const modeViewAuditoriums = "viewAuditoriums";
export const modeEditAuditorium = "editAuditorium";
export const modeAddNewAuditorium = "addNewAuditorium";
//Schedule manage modes
export const modeViewSchedule = "viewSchedule";
export const modeAddNewSchedule = "addNewSchedule";
export const modeManageSchedule = "manageSchedule";

export const weekToGridKeys = { 0: 8, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 7 };

export const auditoriumSeats = [
  { id: 1, number: "1A", occupied: false },
  { id: 2, number: "1B", occupied: false },
  { id: 3, number: "1C", occupied: false },
  { id: 4, number: "1D", occupied: false },
  { id: 5, number: "1E", occupied: false },
  { id: 6, number: "1F", occupied: false },
  { id: 7, number: "1G", occupied: false },
  { id: 8, number: "1H", occupied: false },

  { id: 9, number: "2A", occupied: false },
  { id: 10, number: "2B", occupied: false },
  { id: 11, number: "2C", occupied: false },
  { id: 12, number: "2D", occupied: false },
  { id: 13, number: "2E", occupied: false },
  { id: 14, number: "2F", occupied: false },
  { id: 15, number: "2G", occupied: false },
  { id: 16, number: "2H", occupied: false },

  { id: 17, number: "3A", occupied: false },
  { id: 18, number: "3B", occupied: false },
  { id: 19, number: "3C", occupied: false },
  { id: 20, number: "3D", occupied: false },
  { id: 21, number: "3E", occupied: false },
  { id: 22, number: "3F", occupied: false },
  { id: 23, number: "3G", occupied: false },
  { id: 24, number: "3H", occupied: false },

  { id: 25, number: "4A", occupied: false },
  { id: 26, number: "4B", occupied: false },
  { id: 27, number: "4C", occupied: false },
  { id: 28, number: "4D", occupied: false },
  { id: 29, number: "4E", occupied: false },
  { id: 30, number: "4F", occupied: false },
  { id: 31, number: "4G", occupied: false },
  { id: 32, number: "4H", occupied: false },

  { id: 33, number: "5A", occupied: false },
  { id: 34, number: "5B", occupied: false },
  { id: 35, number: "5C", occupied: false },
  { id: 36, number: "5D", occupied: false },
  { id: 37, number: "5E", occupied: false },
  { id: 38, number: "5F", occupied: false },
  { id: 39, number: "5G", occupied: false },
  { id: 40, number: "5H", occupied: false },
];
