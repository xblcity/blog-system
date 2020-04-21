const env = process.env
const appIsDev = env.APP_ENV === 'dev'

module.exports = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'blogsystem',
    logging: false,
    synchronize: true,
    entities: appIsDev ? ['src/entity/*{.ts,.js}'] : [__dirname + '/dist/entity/*{.ts,.js}'],
    timezone: 'Z',
    dateStrings: 'TIMESTAMP'
}
