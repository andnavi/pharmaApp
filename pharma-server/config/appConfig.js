let appConfig = {};

appConfig.port = process.env.PORT || 5000;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.db = {
    uri: process.env.MONGODB_LOCAL_URL
};
appConfig.apiVersion = '/api/v1';
  

module.exports = {
    port: appConfig.port,
    allowedCorsOrigin: appConfig.allowedCorsOrigin,
    environment: appConfig.env,
    db :appConfig.db,
    apiVersion : appConfig.apiVersion
};