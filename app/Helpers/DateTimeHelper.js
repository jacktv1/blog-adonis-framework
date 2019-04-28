const moment = require('moment');

class DateTimeHelper {
    /**
     * Format DateTime string with moment library
     * @param {String} dateTime 
     * @param {String} formatString 
     */
    format(dateTime, formatString, dateStringFormat = null) {
        if (!dateStringFormat) {
            return moment(dateTime).format(formatString);
        }
        return moment(dateTime, dateStringFormat).format(formatString);
    }
}

module.exports = new DateTimeHelper;