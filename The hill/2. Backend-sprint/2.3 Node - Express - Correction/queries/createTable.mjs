const UserTableQuery = `CREATE TABLE IF NOT EXISTS users (
    id SERIAL, 
    firstName VARCHAR(50), 
    lastName VARCHAR(50), 
    email VARCHAR(80), 
    ip CIDR);`;

export default UserTableQuery; 