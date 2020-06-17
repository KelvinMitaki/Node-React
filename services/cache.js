const util = require("util");

const mongoose = require("mongoose");
const redis = require("redis");

const redisUrl = "redis://127.0.0.1:6379";
const exec = mongoose.Query.prototype.exec;

const client = redis.createClient(redisUrl);
client.get = util.promisify(client.get);

mongoose.Query.prototype.exec = async function () {
  const key = JSON.stringify({
    ...this.getQuery(),
    collection: this.mongooseCollection.name
  });
  const cachedValue = await client.get(key);
  if (cachedValue) {
    console.log("from redis");
    const doc = JSON.parse(cachedValue);
    return Array.isArray(doc)
      ? doc.map(d => new this.model(d))
      : new this.model(doc);
  }
  const result = await exec.apply(this, arguments);
  client.set(key, JSON.stringify(result));
  console.log("from mongo db");
  return result;
};
