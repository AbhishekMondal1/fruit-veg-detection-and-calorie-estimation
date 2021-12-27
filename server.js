const { DefaultAzureCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");
const app = require("express")();
const express = require("express");
const path = require("path");
const cors = require("cors");
var corsOptions = {
  origin: "http://localhost:8080",
  optionsSuccessStatus: 200, 
};
app.use(cors(corsOptions));

const port = 8080;
const keyVaultName = "the-matrix-kv";
const KVUri = "https://" + keyVaultName + ".vault.azure.net";

const credential = new DefaultAzureCredential();
const client = new SecretClient(KVUri, credential);

const bpath = path.normalize(path.join(__dirname, "./client/build"));
app.use(express.static(bpath));

app.get("/api/cnakey", async (req, res) => {
  const cnakey = await getSecret("CALORIENINJA-API-KEY");
  res.type("text");
  res.send(cnakey);
});
app.get("/api/cna", async (req, res) => {
  const cna = await getSecret("CALORIENINJA-API");
  res.type("text");
  res.send(cna);
});
app.get("/api/cvpk", async (req, res) => {
  const cvpk = await getSecret("CUSTOM-VISION-PREDICTION-KEY");
  res.type("text");
  res.send(cvpk);
});
app.get("/api/cva", async (req, res) => {
  const cva = await getSecret("CUSTOM-VISION-API");
  res.type("text");
  res.send(cva);
});
const rootrouter = express.Router();
rootrouter.get("(/*)?", async (req, res) => {
  res.sendFile(path.join(bpath, "index.html"));
});

app.use(rootrouter);

app.get("/test", (req, res) => {
  res.send("test");
});

async function getSecret(secretName) {
  const retrievedSecret = await client.getSecret(secretName);
  return retrievedSecret;
}

app.listen(port, () => {
  console.log("server running at", port);
});
