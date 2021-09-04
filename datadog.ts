import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.MetricsApi(configuration);

let params: v1.MetricsApiSubmitMetricsRequest = {
  // MetricsPayload
  body: {
    series: [
      {
        host: "localhost:3000",
        interval: 20,
        metric: "system.load.1",
        points: [[1575317847, 0.5]],
        tags: ["environment:test"],
        type: "rate",
      },
    ],
  },
};

apiInstance
  .submitMetrics(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
