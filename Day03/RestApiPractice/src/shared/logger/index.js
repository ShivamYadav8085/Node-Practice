import { createLogger, format,transports } from "winston";

const {timestamp,combine,printf,colorize} = format;

const myFormat = printf(
	({
		level,
		message,
		route,
		timestamp,
		httpMethod,
		statusCode,
	}) => {
		return `${timestamp} [${level}] ${httpMethod} [${route}] ${statusCode} ${message}`;
	},
);

const logger = createLogger({
	level: 'debug',
	format: combine(
		timestamp({ format: 'HH:mm:ss' }),
		colorize(),
		format((info, opts) => {
			info.route = info.route || 'unknown route';
			info.httpMethod = info.httpMethod || 'N/A';
			info.statusCode = info.statusCode || 'N/A';
			return info;
		})(),
		myFormat,
	),
	transports: [new transports.Console()],
});

export {logger}