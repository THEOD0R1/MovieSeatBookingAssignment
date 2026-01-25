export class Auditorium {
  constructor(id, title, schedules = []) {
    this.id = id;
    this.title = title;
    this.schedules = schedules;
  }
}
