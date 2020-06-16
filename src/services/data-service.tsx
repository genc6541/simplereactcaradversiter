import axios, { AxiosError } from "axios";

 export const getCarsData = async () => {
    let dataUrl = "https://run.mocky.io/v3/5c122bb6-2d67-473f-ae00-7b667e406a9d";
    try {
      const response = await axios.get<any>(dataUrl, undefined);
      const carListResponse = response.data;
      return carListResponse;
    } catch (error) {
      if (error && error.response) {
        const axiosError = error as AxiosError<any>
        return axiosError.response!.data;
      }
      
      throw error;
    }
  };