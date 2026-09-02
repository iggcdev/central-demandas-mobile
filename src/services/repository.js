import AsyncStorage from "@react-native-async-storage/async-storage";
import { initialFeedbacks, initialRequests } from "../data/seed";

const KEY = "central-demandas.requests.v1";
const USER_KEY = "central-demandas.user.v1";
const FEEDBACK_KEY = "central-demandas.feedback.v1";
const FEEDBACK_SEED_VERSION_KEY = "central-demandas.feedback.seed.v2";
export async function getRequests() {
  const raw = await AsyncStorage.getItem(KEY);
  if (!raw) {
    await AsyncStorage.setItem(KEY, JSON.stringify(initialRequests));
    return initialRequests;
  }
  return JSON.parse(raw);
}

export async function saveRequests(requests) {
  await AsyncStorage.setItem(KEY, JSON.stringify(requests));
}

export async function getUser() {
  return AsyncStorage.getItem(USER_KEY);
}

export async function saveUser(name) {
  await AsyncStorage.setItem(USER_KEY, name);
}

export async function getFeedbacks() {
  const seedVersion = await AsyncStorage.getItem(FEEDBACK_SEED_VERSION_KEY);
  if (!seedVersion) {
    await AsyncStorage.setItem(FEEDBACK_KEY, JSON.stringify(initialFeedbacks));
    await AsyncStorage.setItem(FEEDBACK_SEED_VERSION_KEY, "v2");
    return initialFeedbacks;
  }
  const raw = await AsyncStorage.getItem(FEEDBACK_KEY);
  return raw ? JSON.parse(raw) : [];
}

export async function saveFeedbacks(feedbacks) {
  await AsyncStorage.setItem(FEEDBACK_KEY, JSON.stringify(feedbacks));
}
