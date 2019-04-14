import { ErrorHandler } from '@angular/core';

export class ReportToInstanaErrorHandler implements ErrorHandler {
  handleError(error) {
    if (typeof ineum !== 'undefined') {
      ineum('reportError', error);
    }
    // Continue to log caught errors to the console
    console.error(error);
  }
}
