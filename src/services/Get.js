import axios from "axios";
import { OnlineRoot, RootPath } from "./Config";

const Get = (path, root) => {
  //resolve ketika promise kita sesuai rencana
  //reject ketika error atau terjadi kesalaahn
  const promise = new Promise((resolve, reject) => {
    axios.get(`${root ? OnlineRoot : RootPath}/${path}`).then(
      (result) => {
        resolve(result.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
  return promise;
};

export default Get;
