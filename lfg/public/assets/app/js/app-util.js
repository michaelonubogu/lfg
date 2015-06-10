
(function () {

	var lfg = window.lfg !== null && window.lfg !== undefined ? window.lfg : {};

	lfg.utils = {
		convertDateToUtc: function (date) {
			return Date.UTC(
				date.getFullYear(),
				date.getMonth(),
				date.getHours(),
				date.getMinutes(),
				date.getSeconds(),
				date.getMilliseconds()
			)
		},

		convertUtcToLocal: function (utcDate) {
		}
	}

	window.lfg = lfg;
})();