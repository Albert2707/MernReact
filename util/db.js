import {createPool} from 'mysql2/promise'

const Pool = new createPool({
    host: 'us-east.connect.psdb.cloud',
    user: 'u45n1ds2d7sfcciird6c',
    password: 'pscale_pw_salHYdZugiSP5cBCLLOxV5ljvTXYgvR4ZqAFUI7I1FQ',
    database: 'tasksdb',
    ssl:{
        rejectUnauthorized:false
    }
});

export default Pool;