import { TimepickerConfig } from "ngx-bootstrap/timepicker";

// such override allows to keep some initial values

export function getTimepickerConfig(): TimepickerConfig {
  return Object.assign(new TimepickerConfig(), {
    hourStep: 1,
    minuteStep: 1,
    showMeridian: false,
    readonlyInput: false,
    mousewheel: true,
    showMinutes: true,
    showSeconds: false
  });
}
