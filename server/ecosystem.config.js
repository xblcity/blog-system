/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
    apps: [
        {
            name: 'blog-system',
            script: './dist/index.js',
            env: {
                NODE_ENV: 'prod'
            },
            env_qa: {
                NODE_ENV: 'qa'
            }
        }
    ]
}
