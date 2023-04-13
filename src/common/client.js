import axios from "axios";

export function getCollections() {
  return axios.get("/collections").then((response) => response.data.result);
}

export function deleteCollections(collectionName) {
  return axios
    .delete(`/collections/${collectionName}`)
    .then((response) => response.data.result);
}
export function getCollectionsByName(collectionName) {
  return axios
    .post(`/collections/${collectionName}/points/scroll`, {
      limit: 10,
      with_payload: true,
      with_vector: false,
    })
    .then((response) => response.data.result);
}
