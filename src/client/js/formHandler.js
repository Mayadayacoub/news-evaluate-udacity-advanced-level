const postRequest = async (url = "", data = {}) => {
  const res = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const updatedData = await res.json();

    return updatedData;
  } catch (error) {
    console.log("there is an error", error);
  }
};
function handleSubmit(event) {
  event.preventDefault();

  let url = document.getElementById("url").value;

  if (Client.checkURL(url)) {
    const urlApi = "http://localhost:8081/addUrl";
    postRequest(urlApi, { url }).then((res) => {
      document.getElementById("polarity").innerHTML =
        "Polarity: " + checkPolarity(res.score_tag);
      document.getElementById("text").innerHTML = `Text: ${res.text}`;
      document.getElementById(
        "agreement"
      ).innerHTML = `Agreement: ${res.agreement}`;
      document.getElementById(
        "subjectivity"
      ).innerHTML = `Subjectivity: ${res.subjectivity}`;
      document.getElementById(
        "confidence"
      ).innerHTML = `Confidence: ${res.confidence}`;
      document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
    });
  } else {
    console.log("empty input");
    alert("An invalid URL, please try with a valid URL.");
  }
}

export const checkPolarity = (value) => {
  let result;
  if (value === "P+") {
    return (result = "Strong positive");
  } else if (value === "P") {
    return (result = "Positive");
  } else if (value === "NEW") {
    return (result = "Neutral");
  } else if (value === "N") {
    return (result = "Negative");
  } else if (value === "NEU") {
    return (result = "Neutral");
  } else if (value === "N+") {
    return (result = "Strong negative");
  } else if (value === "NONE") {
    return (result = "No sentiment");
  } else return result;
};
export { handleSubmit };
