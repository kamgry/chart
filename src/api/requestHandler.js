import axios from "axios";

axios.defaults.headers.common["Accept"] = "application/json";

const notification_error = "Something went wrong!";

export async function requestHandler(params, notification) {
  return axios({
    method: "GET",
    ...params,
    url: params.url,
  }).then(
    (response) => {
      return response.data;
    },
    (error) => {
      notification.display(notification_error, {
        variant: "error",
      });

      throw error;
    }
  );
}
