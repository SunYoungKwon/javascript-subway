import request from "./subwayAPI";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "../constants/messages.js";

const PATH = {
  STATIONS: (id = "") => `/stations/${id}`,
};

const STATUS = {
  DUPLICATED_STATION: 400,
};

export const getStationsAPI = async (accessToken) => {
  try {
    const response = await request.get({
      path: PATH.STATIONS(),
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(ERROR_MESSAGE.STATIONS.FETCH_STATION);
    }

    const stations = await response.json();

    return {
      isSucceeded: true,
      stations,
    };
  } catch (e) {
    console.error(e);

    return {
      isSucceeded: false,
      message: ERROR_MESSAGE.GENERAL.API_CALL_FAILURE,
    };
  }
};

export const addStationAPI = async (stationName, accessToken) => {
  try {
    const response = await request.post({
      path: PATH.STATIONS(),
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        name: stationName,
      },
    });

    if (response.ok) {
      const station = await response.json();

      return {
        isSucceeded: true,
        message: SUCCESS_MESSAGE.STATIONS.ADD,
        station,
      };
    }

    if (response.status === STATUS.DUPLICATED_STATION) {
      return {
        isSucceeded: false,
        message: ERROR_MESSAGE.STATIONS.DUPLICATED_STATION,
      };
    }

    throw new Error(ERROR_MESSAGE.GENERAL.UNKNOWN_API_STATUS);
  } catch (e) {
    console.error(e);

    return {
      isSucceeded: false,
      message: ERROR_MESSAGE.GENERAL.API_CALL_FAILURE,
    };
  }
};

export const modifyStationNameAPI = async (
  stationId,
  newStationName,
  accessToken
) => {
  try {
    const response = await request.put({
      path: PATH.STATIONS(stationId),
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: {
        name: newStationName,
      },
    });

    if (response.ok) {
      return {
        isSucceeded: true,
        message: SUCCESS_MESSAGE.STATIONS.MODIFY,
      };
    }

    if (response.status === STATUS.DUPLICATED_STATION) {
      return {
        isSucceeded: false,
        message: ERROR_MESSAGE.STATIONS.DUPLICATED_STATION,
      };
    }

    throw new Error(ERROR_MESSAGE.GENERAL.UNKNOWN_API_STATUS);
  } catch (e) {
    console.error(e);

    return {
      isSucceeded: false,
      message: ERROR_MESSAGE.GENERAL.API_CALL_FAILURE,
    };
  }
};

export const deleteStationAPI = async (stationId, accessToken) => {
  try {
    const response = await request.delete({
      path: PATH.STATIONS(stationId),
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(ERROR_MESSAGE.STATIONS.DELETE_STATION);
    }

    return {
      isSucceeded: true,
      message: SUCCESS_MESSAGE.STATIONS.DELETE,
    };
  } catch (e) {
    console.error(e);

    return {
      isSucceeded: false,
      message: ERROR_MESSAGE.GENERAL.API_CALL_FAILURE,
    };
  }
};