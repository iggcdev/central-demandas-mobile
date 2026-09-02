import * as SQLite from "expo-sqlite";
import { initialFeedbacks, initialRequests } from "../data/seed";

const KEY = "requests";
const USER_KEY = "user";
const FEEDBACK_KEY = "feedbacks";
const FEEDBACK_SEED_VERSION_KEY = "feedbacks_seed_v2";
let database;

function db() {
  if (!database) {
    database = SQLite.openDatabaseSync("central_demandas.db");
    database.execSync("CREATE TABLE IF NOT EXISTS app_state (key TEXT PRIMARY KEY NOT NULL, value TEXT NOT NULL);");
  }
  return database;
}
function getValue(key) { return db().getFirstSync("SELECT value FROM app_state WHERE key = ?", [key])?.value || null; }
function setValue(key, value) { db().runSync("INSERT OR REPLACE INTO app_state (key, value) VALUES (?, ?)", [key, value]); }

export async function getRequests() {
  const value = getValue(KEY);
  if (value) return JSON.parse(value);
  setValue(KEY, JSON.stringify(initialRequests));
  return initialRequests;
}
export async function saveRequests(requests) { setValue(KEY, JSON.stringify(requests)); }
export async function getUser() { return getValue(USER_KEY); }
export async function saveUser(name) { setValue(USER_KEY, name); }
export async function getFeedbacks() {
  if (!getValue(FEEDBACK_SEED_VERSION_KEY)) {
    setValue(FEEDBACK_KEY, JSON.stringify(initialFeedbacks));
    setValue(FEEDBACK_SEED_VERSION_KEY, "v2");
    return initialFeedbacks;
  }
  return JSON.parse(getValue(FEEDBACK_KEY) || "[]");
}
export async function saveFeedbacks(feedbacks) { setValue(FEEDBACK_KEY, JSON.stringify(feedbacks)); }
