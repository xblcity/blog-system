module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'test',
  logging: false,
  synchronize: true,
  entities: ['src/entity/*{.ts,.js}'],
  timezone: 'Z',
  dataStrings: 'TIMESTAMP'
}
