'use strict';

module.exports = {
	getParser: () => ({
		'Sensor Type': 'Ultraviolet (v5)',
		Properties1: {
			Scale: 0,
		},
	}),
	report: 'SENSOR_MULTILEVEL_REPORT',
	reportParser: report => {
		if (report.hasOwnProperty('Sensor Type') && report.hasOwnProperty('Sensor Value (Parsed)')) {
			if (report['Sensor Type'] === 'Ultraviolet (v5)') return report['Sensor Value (Parsed)'];
		}
		return null;
	},
};