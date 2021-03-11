import {UserDto} from "../dto/user.dto";
import shortid from 'shortid';
import debug from 'debug';
const log: debug.IDebugger = debug('app:in-memory-dao');

class UsersDao {
    users: Array<UserDto> = [];

    constructor() {
        log('Created new instance of UsersDao');
    }
}

export default new UsersDao();