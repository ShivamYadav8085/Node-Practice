import mysql from 'mysql2/promise';
const pool = mysql.createPool({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE,
	waitForConnections: true,
	connectionLimit: 10,
});

const queryDatabase = async (query, values) => {
	try {
		const connection = await pool.getConnection();
		try {
			const [rows] = await connection.query(query, values);
			return rows;
		} catch (error) {
			throw error;
		} finally {
			connection.release();
		}
	} catch (error) {
		throw error;
	}
};

export { queryDatabase };
